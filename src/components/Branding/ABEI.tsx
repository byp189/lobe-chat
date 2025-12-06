import React from 'react';

interface ABEILogoProps {
  size?: number;
  width?: number;
  height?: number;
}

const ABEI: React.FC<ABEILogoProps> = ({ size = 48, width, height }) => {
  return (
    <svg
      width={width || size}
      height={height || size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="100" height="100" rx="20" fill="#4F46E5" />
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="#ffffff"
        fontSize="42"
        fontWeight="700"
        fontFamily="sans-serif"
      >
        A
      </text>
    </svg>
  );
};

export default ABEI;
