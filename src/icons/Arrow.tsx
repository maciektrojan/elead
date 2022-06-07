import React from "react";
import { IconProps } from "./type";

export const Arrow: React.FC<IconProps> = ({ color }) => {
  return (
    <svg
      width="45"
      height="20"
      viewBox="0 0 45 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M37.4998 4.16626L36.3248 5.34126L40.1415 9.16626H2.5V10.8329H40.1415L36.3165 14.6579L37.4998 15.8329L43.3331 9.99959L37.4998 4.16626Z"
        fill={color}
      />
    </svg>
  );
};
