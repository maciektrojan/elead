import React, { SVGProps } from "react";

const color = "#fff";

const Logo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="130"
    height="32"
    viewBox="0 0 130 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#logo-1)">
      <path
        d="M127.963 0.523332C128.554 0.872707 129.041 1.37432 129.373 1.97592C129.709 2.61374 129.885 3.3241 129.885 4.04535C129.885 4.7666 129.709 5.47695 129.373 6.11477C129.039 6.71064 128.552 7.20662 127.963 7.55139C127.342 7.91184 126.635 8.09646 125.917 8.08543C125.196 8.09572 124.486 7.91122 123.861 7.55139C123.266 7.21024 122.775 6.71362 122.441 6.11477C122.104 5.47695 121.928 4.7666 121.928 4.04535C121.928 3.3241 122.104 2.61374 122.441 1.97592C122.773 1.37134 123.264 0.869073 123.861 0.523332C124.487 0.165938 125.197 -0.0183905 125.917 -0.0107139C126.635 -0.0190791 127.341 0.16536 127.963 0.523332ZM128.262 6.46726C128.834 5.79724 129.148 4.9451 129.148 4.06406C129.148 3.18301 128.834 2.33087 128.262 1.66085C127.63 1.05065 126.785 0.709648 125.907 0.709648C125.028 0.709648 124.184 1.05065 123.551 1.66085C122.979 2.33087 122.665 3.18301 122.665 4.06406C122.665 4.9451 122.979 5.79724 123.551 6.46726C124.186 7.07377 125.029 7.41227 125.907 7.41227C126.784 7.41227 127.628 7.07377 128.262 6.46726V6.46726ZM127.386 3.99997C127.181 4.22929 126.904 4.38192 126.601 4.43258L127.808 6.16288H126.783L125.677 4.44855H125.212V6.21093H124.347V1.87983H126.216C126.604 1.85663 126.987 1.98276 127.285 2.23232C127.416 2.3531 127.52 2.50127 127.588 2.66642C127.656 2.83158 127.688 3.00968 127.68 3.18821C127.68 3.48486 127.576 3.77217 127.386 3.99997V3.99997ZM125.212 3.74899H126.158C126.324 3.75533 126.488 3.70444 126.622 3.60478C126.682 3.5524 126.729 3.48735 126.761 3.41436C126.792 3.34137 126.807 3.26227 126.804 3.18287C126.809 3.10472 126.796 3.02643 126.764 2.95476C126.732 2.88309 126.684 2.82026 126.622 2.77171C126.486 2.67771 126.323 2.63082 126.158 2.6382H125.212V3.74899Z"
        fill={color}
      />
      <path
        d="M94.4351 13.4579C95.3558 11.6947 96.748 10.2219 98.4566 9.20348C100.165 8.1851 102.123 7.66121 104.112 7.69027C105.683 7.69836 107.234 8.04061 108.662 8.69427C110.049 9.28314 111.274 10.1993 112.23 11.3645V0H117.143V31.6155H112.23V28.0695C111.372 29.2649 110.235 30.2328 108.918 30.8892C107.418 31.6523 105.752 32.0339 104.069 32C102.087 32.0196 100.14 31.479 98.4511 30.4406C96.738 29.384 95.3486 27.8763 94.4351 26.0828C93.4293 24.1214 92.923 21.9422 92.9612 19.7383C92.919 17.5545 93.4258 15.395 94.4351 13.4579ZM111.226 15.5941C110.616 14.4598 109.707 13.5141 108.598 12.8598C107.535 12.2387 106.326 11.9141 105.095 11.9199C103.841 11.9085 102.609 12.2386 101.529 12.8746C100.448 13.5106 99.5619 14.4285 98.9638 15.53C98.2689 16.8216 97.9228 18.2721 97.9598 19.7383C97.9277 21.2244 98.2731 22.6944 98.9638 24.0107C99.5777 25.1727 100.502 26.1415 101.634 26.8091C102.693 27.4317 103.899 27.7601 105.127 27.7601C106.355 27.7601 107.561 27.4317 108.619 26.8091C109.735 26.1533 110.645 25.1989 111.247 24.0534C111.945 22.7401 112.291 21.2681 112.251 19.7811C112.275 18.3204 111.922 16.8782 111.226 15.5941V15.5941Z"
        fill={color}
      />
      <path
        d="M65.4686 13.458C66.3843 11.7045 67.7664 10.2381 69.4627 9.22035C71.1589 8.20261 73.1033 7.67316 75.0814 7.69032C76.7608 7.64391 78.4259 8.01068 79.9305 8.75841C81.22 9.40857 82.3505 10.3348 83.2416 11.4713V8.05343H88.1548V31.5942H83.2416V28.1069C82.3447 29.2794 81.1898 30.2296 79.8664 30.8839C78.2294 31.6848 76.4179 32.0634 74.5971 31.9851C72.7763 31.9067 71.004 31.3739 69.4419 30.4353C67.7389 29.3729 66.3578 27.8662 65.4472 26.0775C64.4413 24.1161 63.935 21.9369 63.9732 19.733C63.9385 17.5491 64.4527 15.3915 65.4686 13.458V13.458ZM82.2589 15.5941C81.6493 14.4598 80.7406 13.5142 79.6314 12.8598C78.5688 12.2387 77.3589 11.9141 76.1281 11.9199C74.8747 11.9086 73.642 12.2387 72.5619 12.8746C71.4819 13.5106 70.5953 14.4286 69.9973 15.5301C69.3023 16.8216 68.9562 18.2721 68.9932 19.7383C68.9611 21.2245 69.3065 22.6945 69.9973 24.0107C70.6111 25.1727 71.5355 26.1415 72.6675 26.8091C73.7261 27.4318 74.9319 27.7601 76.1601 27.7601C77.3883 27.7601 78.5942 27.4318 79.6528 26.8091C80.7683 26.1534 81.6784 25.1989 82.2803 24.0535C82.9789 22.7402 83.3248 21.2681 83.2843 19.7811C83.3086 18.3205 82.9554 16.8783 82.2589 15.5941V15.5941Z"
        fill={color}
      />
      <path
        d="M60.6675 21.6609H42.6809C42.7147 22.5164 42.9169 23.3568 43.2762 24.1339C43.6354 24.9111 44.1446 25.6097 44.7744 26.1896C46.0335 27.3346 47.6873 27.9471 49.3885 27.8985C52.0053 27.8985 53.8567 26.8019 54.9426 24.6088H60.1816C59.4928 26.7545 58.1386 28.6251 56.3151 29.9493C54.2896 31.3803 51.851 32.1082 49.3725 32.0214C47.2572 32.0578 45.1698 31.5346 43.3218 30.5047C41.5522 29.5026 40.101 28.0218 39.1348 26.2323C38.0912 24.2606 37.5709 22.0541 37.6235 19.8238C37.5735 17.5988 38.0782 15.3964 39.0921 13.4152C40.0276 11.6159 41.4703 10.1304 43.2417 9.14286C45.1213 8.12201 47.2339 7.60672 49.3725 7.64751C51.4442 7.61161 53.4899 8.11205 55.3111 9.10016C57.0231 10.0466 58.4293 11.4621 59.3645 13.1803C60.361 15.037 60.8631 17.1188 60.8224 19.2256C60.8353 20.0402 60.7835 20.8545 60.6675 21.6609V21.6609ZM55.7544 17.7303C55.7697 16.9141 55.6054 16.1046 55.2732 15.3589C54.9409 14.6132 54.4489 13.9497 53.8318 13.4152C52.5278 12.3257 50.8678 11.7553 49.1696 11.8131C47.5814 11.7789 46.04 12.3519 44.8598 13.4152C43.6314 14.5434 42.8695 16.0902 42.7236 17.7517L55.7544 17.7303Z"
        fill={color}
      />
      <path d="M32.8546 0V31.6155H27.9841V0H32.8546Z" fill={color} />
      <path
        d="M23.0281 21.661H5.04148C5.07522 22.5165 5.27751 23.3568 5.63676 24.134C5.996 24.9111 6.50513 25.6097 7.13495 26.1897C8.39409 27.3346 10.0479 27.9471 11.7491 27.8986C14.3659 27.8986 16.2173 26.802 17.3032 24.6088H22.5582C21.8694 26.7546 20.5151 28.6251 18.6917 29.9493C16.6662 31.3804 14.2276 32.1082 11.7491 32.0214C9.6354 32.0584 7.54959 31.5351 5.70369 30.5047C3.93178 29.5056 2.47987 28.0241 1.51678 26.2324C0.468812 24.262 -0.0535549 22.0548 9.00298e-05 19.8238C-0.0505692 17.5982 0.456126 15.3952 1.47406 13.4153C2.40758 11.6163 3.8485 10.1308 5.61824 9.14291C7.49818 8.12274 9.61056 7.6075 11.7491 7.64755C13.8208 7.61165 15.8665 8.1121 17.6877 9.10021C19.4 10.048 20.8076 11.463 21.7464 13.1803C22.7397 15.038 23.2399 17.1195 23.199 19.2257C23.2066 20.0407 23.1495 20.855 23.0281 21.661V21.661ZM18.1149 17.7303C18.1302 16.9141 17.966 16.1046 17.6337 15.3589C17.3015 14.6133 16.8094 13.9497 16.1924 13.4153C14.89 12.3266 13.232 11.7562 11.5355 11.8131C9.94574 11.7792 8.40275 12.3521 7.22038 13.4153C5.992 14.5434 5.23001 16.0903 5.0842 17.7517L18.1149 17.7303Z"
        fill={color}
      />
    </g>
    <defs>
      <clipPath id="logo-1">
        <rect width="129.885" height="32" fill="#fff" />
      </clipPath>
    </defs>
  </svg>
);

export default Logo;
