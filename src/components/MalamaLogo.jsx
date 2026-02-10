
import React from 'react';

const MalamaLogo = ({ className = "w-8 h-8", color = "#16a34a" }) => (
    <svg viewBox="0 0 32 32" className={className} xmlns="http://www.w3.org/2000/svg" width="32" height="32">
        <circle cx="16" cy="16" r="16" fill={color} />
        <path
            d="M8 10h2.5l3.5 6 3.5-6H20v12h-2.5v-7l-3 5.5-3-5.5v7H8V10z"
            fill="white"
        />
    </svg>
);

export default MalamaLogo;
