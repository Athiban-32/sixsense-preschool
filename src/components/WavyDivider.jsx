import React from 'react';

const WavyDivider = ({ color }) => (
  <div className={`leading-[0] ${color}`}>
    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[80px] fill-current">
      <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,23.5V120H0V47.35C50.07,59.33,109.24,68.48,168.1,67.26,227.27,66.07,276.21,65.21,321.39,56.44Z"></path>
    </svg>
  </div>
);

export default WavyDivider;