import React from "react";
import { IconProps } from "./type";

export const Quote: React.FC<IconProps> = ({ color }) => {
  return (
    <svg
      width="240"
      height="240"
      viewBox="0 0 240 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M79.9995 129H50.9995V71.0004H109V129.764L89.3815 169H61.6175L80.8939 130.448L81.6176 129H79.9995ZM160 129H131V71.0004H189V129.764L169.382 169H141.618L160.894 130.448L161.618 129H160Z"
        stroke={color}
        strokeWidth="2"
      />
    </svg>
  );
};
