import React from "react";
import { IconProps } from "../type";

export const Facebook: React.FC<IconProps> = ({ color }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#facebook-1)">
        <path
          d="M10.6648 2.65667H12.1254V0.112667C11.8734 0.078 11.0068 0 9.99742 0C7.89142 0 6.44876 1.32467 6.44876 3.75933V6H4.12476V8.844H6.44876V16H9.29809V8.84467H11.5281L11.8821 6.00067H9.29742V4.04133C9.29809 3.21933 9.51942 2.65667 10.6648 2.65667V2.65667Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="facebook-1">
          <rect width="16" height="16" fill="#fff" />
        </clipPath>
      </defs>
    </svg>
  );
};
