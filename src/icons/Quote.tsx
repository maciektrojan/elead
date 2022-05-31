import React, { SVGProps } from "react";

const color = "#fff";

const Quote = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="240"
    height="240"
    viewBox="0 0 240 240"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask id="quote-1" fill="#fff">
      <path d="M59.9998 170H89.9998L110 130V70.0004H49.9998V130H79.9998L59.9998 170ZM140 170H170L190 130V70.0004H130V130H160L140 170Z" />
    </mask>
    <path
      d="M59.9998 170H89.9998L110 130V70.0004H49.9998V130H79.9998L59.9998 170ZM140 170H170L190 130V70.0004H130V130H160L140 170Z"
      stroke={color}
      stroke-width="4"
      mask="url(#quote-1)"
    />
  </svg>
);

export default Quote;
