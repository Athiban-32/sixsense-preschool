import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-text-dark text-white">
      <div className="container mx-auto px-6 py-12 text-center">
        <p className="text-4xl font-fredoka text-brand-blue mb-4">Six Sense</p>
        <p className="text-gray-400 font-quicksand mb-6 max-w-md mx-auto">
          Vasudev Krupa, Marathe Office, Nandivali Rd, Dombivli East, Maharashtra 421201
        </p>
        <p className="font-bold text-brand-yellow mb-8">+91 75060 30742</p>
        <p className="text-gray-500 text-sm font-quicksand">
          © {new Date().getFullYear()} Six Sense Kindergarten. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;