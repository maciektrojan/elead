import React from "react";
import { IconProps } from "../type";

export const LinkedIn: React.FC<IconProps> = ({ color }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#linkedin-1)">
        <path
          d="M15.9961 16V15.9993H16.0001V10.1313C16.0001 7.26065 15.3821 5.04932 12.0261 5.04932C10.4128 5.04932 9.33009 5.93465 8.88809 6.77398H8.84142V5.31732H5.65942V15.9993H8.97276V10.71C8.97276 9.31732 9.23676 7.97065 10.9614 7.97065C12.6608 7.97065 12.6861 9.55998 12.6861 10.7993V16H15.9961Z"
          fill={color}
        />
        <path
          d="M0.26416 5.31812H3.58149V16.0001H0.26416V5.31812Z"
          fill={color}
        />
        <path
          d="M1.92133 0C0.860667 0 0 0.860667 0 1.92133C0 2.982 0.860667 3.86067 1.92133 3.86067C2.982 3.86067 3.84267 2.982 3.84267 1.92133C3.842 0.860667 2.98133 0 1.92133 0V0Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="linkedin-1">
          <rect width="16" height="16" fill="#fff" />
        </clipPath>
      </defs>
    </svg>
  );
};
