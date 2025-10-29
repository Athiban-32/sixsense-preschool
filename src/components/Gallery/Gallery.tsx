import React, { useState, Fragment } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog, Transition } from '@headlessui/react';
import {
  FiX,
  FiChevronLeft,
  FiChevronRight,
  FiCamera,
  FiArrowLeft, // Added for "Back" button
} from 'react-icons/fi';

// --- Data for the Gallery ---
const classroomImages = Array.from(
  { length: 6 },
  (_, i) => `/images/classroom${i + 1}.jpg`
);
const playAreaImages = Array.from(
  { length: 6 },
  (_, i) => `/images/playarea${i + 1}.jpg`
);

type GalleryCollection = {
  title: string;
  images: string[];
};

const galleryCollections: Array<GalleryCollection> = [
  {
    title: 'Our Classrooms',
    images: classroomImages,
  },
  {
    title: 'Our Play Area',
    images: playAreaImages,
  },
];

// --- NEW: Album Preview Card ---
// Shows a 1-large, 2-small grid
const AlbumCard = ({
  collection,
  onViewAlbum,
  index, // <-- ADDED: index for rotation
}: {
  collection: GalleryCollection;
  onViewAlbum: () => void;
  index: number; // <-- ADDED: index type
}) => {
  const remainingImages = collection.images.length - 3;

  return (
    <motion.div
      className='bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col relative group' // <-- ADDED: relative group
      layout // Allows the card to animate its layout
      // --- ADDED: Hover animations from "older" gallery ---
      whileHover={{
        scale: 1.05,
        rotate: index % 2 === 0 ? 1 : -1, // Subtle 1-degree tilt
        zIndex: 10,
      }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      {/* --- ADDED: Golden border on hover --- */}
      <div
        className='absolute inset-0 border-4 border-transparent 
                   group-hover:border-yellow-400 rounded-2xl transition-all 
                   duration-300 pointer-events-none z-10'
      />

      {/* Dynamic 3-image preview grid */}
      <div className='grid grid-cols-2 grid-rows-2 gap-2 h-64 w-full'>
        {/* Main large image */}
        <div className='col-span-1 row-span-2 overflow-hidden'>
          <img
            src={collection.images[0]}
            alt={`${collection.title} preview 1`}
            className='w-full h-full object-cover'
          />
        </div>
        {/* Small image 1 */}
        <div className='col-span-1 row-span-1 overflow-hidden'>
          <img
            src={collection.images[1]}
            alt={`${collection.title} preview 2`}
            className='w-full h-full object-cover'
          />
        </div>
        {/* "View All" image with overlay */}
        <motion.div
          onClick={onViewAlbum}
          className='col-span-1 row-span-1 overflow-hidden relative cursor-pointer group'
          whileHover={{ scale: 1.03 }}
        >
          <img
            src={collection.images[2]}
            alt={`${collection.title} preview 3`}
            className='w-full h-full object-cover'
          />
          <div className='absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity duration-300'>
            <span className='text-white text-2xl font-bold'>
              +{remainingImages > 0 ? remainingImages : '...'}
            </span>
          </div>
          <div className='absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300' />
        </motion.div>
      </div>

      {/* Card Content */}
      <div className='p-5 flex justify-between items-center'>
        <h3 className='font-nunito font-bold text-xl text-gray-800'>
          {collection.title}
        </h3>
        <button
          onClick={onViewAlbum}
          className='flex items-center text-sm font-semibold text-indigo-600 hover:text-indigo-800'
        >
          <FiCamera className='mr-2' />
          View All ({collection.images.length})
        </button>
      </div>
    </motion.div>
  );
};

interface ExpandedAlbumViewProps {
  collection: GalleryCollection;
  onClose: () => void;
  onImageClick: (index: number) => void;
}

// --- NEW: Full Expanded Album View ---
const ExpandedAlbumView = ({
  collection,
  onClose,
  onImageClick,
}: ExpandedAlbumViewProps) => {
  // Animation variants for the grid items
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05, // Staggered effect
      },
    }),
  };

  return (
    <motion.div
      className='w-full'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Back Button & Title */}
      <div className='mb-8 flex items-center justify-between'>
        <button
          onClick={onClose}
          className='flex items-center text-lg font-semibold text-indigo-600 hover:text-indigo-800'
        >
          <FiArrowLeft className='mr-2' />
          Back to Albums
        </button>
        <h3 className='text-2xl font-nunito font-bold text-gray-800'>
          {collection.title}
        </h3>
      </div>

      {/* Full Image Grid */}
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {collection.images.map((image: string, i: number) => (
          <motion.div
            key={image}
            className='w-full h-56 rounded-xl shadow-lg overflow-hidden relative cursor-pointer'
            custom={i}
            variants={itemVariants}
            initial='hidden'
            animate='visible'
            onClick={() => onImageClick(i)} // <-- ADDED: Click handler to open modal
            whileHover={{ scale: 1.05, zIndex: 10 }} // <-- ADDED: Hover effect
          >
            <img
              src={image}
              alt={`Gallery ${collection.title} ${i + 1}`}
              className='w-full h-full object-cover'
            />
            <div className='absolute inset-0 bg-black/0 hover:bg-black/20 transition-all duration-300' />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

// --- Main Gallery Section ---
const GallerySection = () => {
  // State for which album is "exploded"
  const [expandedAlbum, setExpandedAlbum] = useState<string | null>(null); // null or collection.title

  // --- NEW: Re-added modal state ---
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalCurrentIndex, setModalCurrentIndex] = useState(0);

  const handleViewAlbum = (collection: GalleryCollection) => {
    setExpandedAlbum(collection.title);
  };

  const handleCloseAlbum = () => {
    setExpandedAlbum(null);
  };

  const getActiveCollection = (): GalleryCollection => {
    return galleryCollections.find((c) => c.title === expandedAlbum)!;
  };

  // --- NEW: Modal handler functions ---
  const handleOpenModal = (clickedIndex: number) => {
    const collection = getActiveCollection();
    if (!collection) return;
    setModalCurrentIndex(clickedIndex);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const nextModalImage = () => {
    const collection = getActiveCollection();
    if (!collection) return;
    setModalCurrentIndex((prev) => (prev + 1) % collection.images.length);
  };

  const prevModalImage = () => {
    const collection = getActiveCollection();
    if (!collection) return;
    setModalCurrentIndex(
      (prev) => (prev - 1 + collection.images.length) % collection.images.length
    );
  };

  // --- NEW: Dynamic grid class based on number of albums ---
  let albumGridClass =
    'grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto'; // Default for 2
  if (galleryCollections.length === 1) {
    albumGridClass = 'grid grid-cols-1 gap-8 max-w-lg mx-auto'; // For 1
  } else if (galleryCollections.length >= 3) {
    albumGridClass = 'grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto'; // For 3+
  }

  return (
    <section id='gallery' className='py-20 bg-gray-50 relative min-h-[60vh]'>
      {/* <WavyDivider top /> */}
      <div className='container mx-auto px-6 mt-12'>
        {/* <AnimatedSection> */}
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-nunito font-bold text-indigo-700'>
            Explore Our Spaces
          </h2>
          <div className='w-24 h-1 bg-yellow-400 mx-auto mt-3'></div>
        </div>

        {/* --- Dynamic Content --- */}
        <AnimatePresence mode='wait'>
          {!expandedAlbum ? (
            // --- Album Grid ---
            <motion.div
              key='album-grid'
              className={albumGridClass} // <-- APPLIED: Dynamic grid class
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              {galleryCollections.map((collection, idx) => (
                <AlbumCard
                  key={idx}
                  index={idx} // <-- PASSED: index for rotation
                  collection={collection}
                  onViewAlbum={() => handleViewAlbum(collection)}
                />
              ))}
            </motion.div>
          ) : (
            // --- Expanded View ---
            <motion.div
              key='expanded-view'
              className='max-w-6xl mx-auto'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <ExpandedAlbumView
                collection={getActiveCollection()}
                onClose={handleCloseAlbum}
                onImageClick={handleOpenModal} // <-- PASSED: Click handler
              />
            </motion.div>
          )}
        </AnimatePresence>
        {/* </AnimatedSection> */}
      </div>

      {/* --- NEW: Re-added Modal --- */}
      <Transition appear show={isModalOpen} as={Fragment}>
        <Dialog as='div' className='relative z-50' onClose={handleCloseModal}>
          {/* Backdrop */}
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black/75' />
          </Transition.Child>

          {/* Modal Content */}
          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all'>
                  <Dialog.Title
                    as='h3'
                    className='text-lg font-nunito font-bold leading-6 text-gray-900 p-4 border-b flex justify-between items-center'
                  >
                    <span>{getActiveCollection()?.title}</span>
                    <button
                      onClick={handleCloseModal}
                      className='text-gray-400 hover:text-gray-600'
                    >
                      <FiX size={24} />
                    </button>
                  </Dialog.Title>

                  {/* Carousel Body */}
                  <div className='p-4 relative'>
                    <div className='relative w-full h-[70vh] rounded-lg overflow-hidden bg-gray-100'>
                      <AnimatePresence mode='wait'>
                        <motion.img
                          key={modalCurrentIndex}
                          src={getActiveCollection()?.images[modalCurrentIndex]}
                          alt={`Slide ${modalCurrentIndex}`}
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -50 }}
                          transition={{ duration: 0.3 }}
                          className='absolute inset-0 w-full h-full object-cover'
                        />
                      </AnimatePresence>
                    </div>

                    {/* Prev Button */}
                    <button
                      onClick={prevModalImage}
                      className='absolute top-1/2 left-6 -translate-y-1/2 bg-white/50 hover:bg-white/80 rounded-full p-2 transition-all z-10'
                    >
                      <FiChevronLeft size={24} className='text-gray-900' />
                    </button>
                    {/* Next Button */}
                    <button
                      onClick={nextModalImage}
                      className='absolute top-1/2 right-6 -translate-y-1/2 bg-white/50 hover:bg-white/80 rounded-full p-2 transition-all z-10'
                    >
                      <FiChevronRight size={24} className='text-gray-900' />
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </section>
  );
};

export default GallerySection;
