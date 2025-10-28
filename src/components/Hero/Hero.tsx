import React from 'react';

const HeroSection = () => {
  return (
    <div
      className="
        flex flex-col justify-center text-white 
        bg-[url('/images/hero-section.jpg')] bg-no-repeat bg-[length:100%_auto]
        bg-blend-darken bg-black/35
        h-[500px] p-[50px]
        md:p-10
        sm:p-[30px]
      "
    >
      <div
        className='
          w-1/2 
          md:w-full md:text-center md:pt-[150px]
        '
      >
        <h1
          className='
            text-[10vh] font-bold
            lg:text-[6vh]
            md:text-[7vw] md:font-semibold
            sm:text-[4vh] sm:font-medium
          '
        >
          Grow your children with Six Sense
        </h1>

        <p
          className='
            text-[4vh] mt-4
            lg:text-[3vh]
            md:text-[4vw]
            sm:hidden
          '
        >
          Nuturing minds, Building futures where every child is guided to reach
          their full potential through balanced and holistic education.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
