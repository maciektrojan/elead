import React, { SVGProps } from "react";

const color = "#3ef";

const Captain = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="80"
    height="80"
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask
      id="captain-1"
      maskUnits="userSpaceOnUse"
      x="19.6641"
      y="9"
      width="40"
      height="19"
      fill="#000"
    >
      <rect fill="#fff" x="19.6641" y="9" width="40" height="19" />
      <path d="M53.6471 14.4477C49.8357 11.5792 44.9407 10 39.863 10C34.7863 10 29.8913 11.5792 26.0799 14.4477C22.7388 16.9624 20.6641 20.1848 20.6641 22.8581C20.6641 24.3847 21.4169 25.8873 22.8417 27.2008C23.1263 27.4633 23.5694 27.4454 23.8308 27.1609C24.0933 26.8774 24.0755 26.4343 23.7909 26.1718C22.6443 25.1155 22.0637 24.0004 22.0637 22.8581C22.0637 18.8188 28.8214 11.3996 39.863 11.3996C50.9045 11.3996 57.6622 18.8188 57.6622 22.8581C57.6622 24.0508 57.0312 25.21 55.788 26.3051C55.4982 26.5603 55.4699 27.0023 55.725 27.2932C55.8636 27.4496 56.0568 27.5305 56.2511 27.5305C56.4149 27.5305 56.5797 27.4727 56.713 27.3562C58.2502 26.0027 59.0618 24.4477 59.0618 22.8581C59.0618 20.1848 56.9871 16.9624 53.6471 14.4477Z" />
    </mask>
    <path
      d="M53.6471 14.4477C49.8357 11.5792 44.9407 10 39.863 10C34.7863 10 29.8913 11.5792 26.0799 14.4477C22.7388 16.9624 20.6641 20.1848 20.6641 22.8581C20.6641 24.3847 21.4169 25.8873 22.8417 27.2008C23.1263 27.4633 23.5694 27.4454 23.8308 27.1609C24.0933 26.8774 24.0755 26.4343 23.7909 26.1718C22.6443 25.1155 22.0637 24.0004 22.0637 22.8581C22.0637 18.8188 28.8214 11.3996 39.863 11.3996C50.9045 11.3996 57.6622 18.8188 57.6622 22.8581C57.6622 24.0508 57.0312 25.21 55.788 26.3051C55.4982 26.5603 55.4699 27.0023 55.725 27.2932C55.8636 27.4496 56.0568 27.5305 56.2511 27.5305C56.4149 27.5305 56.5797 27.4727 56.713 27.3562C58.2502 26.0027 59.0618 24.4477 59.0618 22.8581C59.0618 20.1848 56.9871 16.9624 53.6471 14.4477Z"
      fill={color}
    />
    <path
      d="M53.6471 14.4477C49.8357 11.5792 44.9407 10 39.863 10C34.7863 10 29.8913 11.5792 26.0799 14.4477C22.7388 16.9624 20.6641 20.1848 20.6641 22.8581C20.6641 24.3847 21.4169 25.8873 22.8417 27.2008C23.1263 27.4633 23.5694 27.4454 23.8308 27.1609C24.0933 26.8774 24.0755 26.4343 23.7909 26.1718C22.6443 25.1155 22.0637 24.0004 22.0637 22.8581C22.0637 18.8188 28.8214 11.3996 39.863 11.3996C50.9045 11.3996 57.6622 18.8188 57.6622 22.8581C57.6622 24.0508 57.0312 25.21 55.788 26.3051C55.4982 26.5603 55.4699 27.0023 55.725 27.2932C55.8636 27.4496 56.0568 27.5305 56.2511 27.5305C56.4149 27.5305 56.5797 27.4727 56.713 27.3562C58.2502 26.0027 59.0618 24.4477 59.0618 22.8581C59.0618 20.1848 56.9871 16.9624 53.6471 14.4477Z"
      stroke={color}
      stroke-width="0.4"
      mask="url(#captain-1)"
    />
    <mask
      id="captain-2"
      maskUnits="userSpaceOnUse"
      x="35.25"
      y="12.4863"
      width="9"
      height="10"
      fill="#000"
    >
      <rect fill="#fff" x="35.25" y="12.4863" width="9" height="10" />
      <path d="M39.7076 19.9395C39.3538 19.9395 39.0041 19.8261 38.6965 19.6109C38.3794 19.3893 37.9436 19.467 37.721 19.7831C37.4995 20.1001 37.5772 20.5359 37.8932 20.7585C38.4371 21.1386 39.065 21.3402 39.7076 21.3402C41.6144 21.3402 43.1663 19.5783 43.1663 17.4133C43.1663 15.2482 41.6144 13.4863 39.7076 13.4863C37.8092 13.4863 36.2584 15.2398 36.25 17.3954C36.2479 17.7818 36.5608 18.0968 36.9472 18.0978H36.9493C37.3346 18.0978 37.6486 17.786 37.6496 17.4007C37.6549 16.0147 38.5789 14.887 39.7076 14.887C40.8426 14.887 41.7656 16.0199 41.7656 17.4133C41.7656 18.8066 40.8426 19.9395 39.7076 19.9395Z" />
    </mask>
    <path
      d="M39.7076 19.9395C39.3538 19.9395 39.0041 19.8261 38.6965 19.6109C38.3794 19.3893 37.9436 19.467 37.721 19.7831C37.4995 20.1001 37.5772 20.5359 37.8932 20.7585C38.4371 21.1386 39.065 21.3402 39.7076 21.3402C41.6144 21.3402 43.1663 19.5783 43.1663 17.4133C43.1663 15.2482 41.6144 13.4863 39.7076 13.4863C37.8092 13.4863 36.2584 15.2398 36.25 17.3954C36.2479 17.7818 36.5608 18.0968 36.9472 18.0978H36.9493C37.3346 18.0978 37.6486 17.786 37.6496 17.4007C37.6549 16.0147 38.5789 14.887 39.7076 14.887C40.8426 14.887 41.7656 16.0199 41.7656 17.4133C41.7656 18.8066 40.8426 19.9395 39.7076 19.9395Z"
      fill={color}
    />
    <path
      d="M39.7076 19.9395C39.3538 19.9395 39.0041 19.8261 38.6965 19.6109C38.3794 19.3893 37.9436 19.467 37.721 19.7831C37.4995 20.1001 37.5772 20.5359 37.8932 20.7585C38.4371 21.1386 39.065 21.3402 39.7076 21.3402C41.6144 21.3402 43.1663 19.5783 43.1663 17.4133C43.1663 15.2482 41.6144 13.4863 39.7076 13.4863C37.8092 13.4863 36.2584 15.2398 36.25 17.3954C36.2479 17.7818 36.5608 18.0968 36.9472 18.0978H36.9493C37.3346 18.0978 37.6486 17.786 37.6496 17.4007C37.6549 16.0147 38.5789 14.887 39.7076 14.887C40.8426 14.887 41.7656 16.0199 41.7656 17.4133C41.7656 18.8066 40.8426 19.9395 39.7076 19.9395Z"
      stroke={color}
      stroke-width="0.4"
      mask="url(#captain-2)"
    />
    <mask
      id="captain-3"
      maskUnits="userSpaceOnUse"
      x="23.7656"
      y="22.0225"
      width="31"
      height="14"
      fill="#000"
    >
      <rect fill="#fff" x="23.7656" y="22.0225" width="31" height="14" />
      <path d="M39.5798 24.4231C44.4013 24.4231 49.1567 24.925 53.0458 25.8427V28.0718C49.0622 27.151 44.4318 26.6596 39.5798 26.6596C34.752 26.6596 30.1384 27.1468 26.1663 28.0592V25.7934C30.0166 24.9082 34.7541 24.4231 39.5798 24.4231ZM39.6061 33.9013C34.0559 33.9013 27.589 31.6271 26.3711 29.4483C30.2654 28.5422 34.8118 28.0603 39.5798 28.0603C44.3698 28.0603 48.9299 28.5464 52.8337 29.4588C51.6011 31.6354 45.1468 33.9013 39.6061 33.9013ZM24.7656 25.24V28.7417C24.7656 32.6854 33.6989 35.302 39.6061 35.302C45.5143 35.302 54.4465 32.6854 54.4465 28.7417V25.2925C54.4465 24.9712 54.2281 24.6909 53.9163 24.6132C49.8255 23.5874 44.7331 23.0225 39.5798 23.0225C34.4192 23.0225 29.3477 23.5685 25.299 24.5607C24.9861 24.6373 24.7656 24.9177 24.7656 25.24Z" />
    </mask>
    <path
      d="M39.5798 24.4231C44.4013 24.4231 49.1567 24.925 53.0458 25.8427V28.0718C49.0622 27.151 44.4318 26.6596 39.5798 26.6596C34.752 26.6596 30.1384 27.1468 26.1663 28.0592V25.7934C30.0166 24.9082 34.7541 24.4231 39.5798 24.4231ZM39.6061 33.9013C34.0559 33.9013 27.589 31.6271 26.3711 29.4483C30.2654 28.5422 34.8118 28.0603 39.5798 28.0603C44.3698 28.0603 48.9299 28.5464 52.8337 29.4588C51.6011 31.6354 45.1468 33.9013 39.6061 33.9013ZM24.7656 25.24V28.7417C24.7656 32.6854 33.6989 35.302 39.6061 35.302C45.5143 35.302 54.4465 32.6854 54.4465 28.7417V25.2925C54.4465 24.9712 54.2281 24.6909 53.9163 24.6132C49.8255 23.5874 44.7331 23.0225 39.5798 23.0225C34.4192 23.0225 29.3477 23.5685 25.299 24.5607C24.9861 24.6373 24.7656 24.9177 24.7656 25.24Z"
      fill={color}
    />
    <path
      d="M39.5798 24.4231C44.4013 24.4231 49.1567 24.925 53.0458 25.8427V28.0718C49.0622 27.151 44.4318 26.6596 39.5798 26.6596C34.752 26.6596 30.1384 27.1468 26.1663 28.0592V25.7934C30.0166 24.9082 34.7541 24.4231 39.5798 24.4231ZM39.6061 33.9013C34.0559 33.9013 27.589 31.6271 26.3711 29.4483C30.2654 28.5422 34.8118 28.0603 39.5798 28.0603C44.3698 28.0603 48.9299 28.5464 52.8337 29.4588C51.6011 31.6354 45.1468 33.9013 39.6061 33.9013ZM24.7656 25.24V28.7417C24.7656 32.6854 33.6989 35.302 39.6061 35.302C45.5143 35.302 54.4465 32.6854 54.4465 28.7417V25.2925C54.4465 24.9712 54.2281 24.6909 53.9163 24.6132C49.8255 23.5874 44.7331 23.0225 39.5798 23.0225C34.4192 23.0225 29.3477 23.5685 25.299 24.5607C24.9861 24.6373 24.7656 24.9177 24.7656 25.24Z"
      stroke={color}
      stroke-width="0.4"
      mask="url(#captain-3)"
    />
    <mask
      id="captain-4"
      maskUnits="userSpaceOnUse"
      x="25.4062"
      y="40.2744"
      width="28"
      height="10"
      fill="#000"
    >
      <rect fill="#fff" x="25.4062" y="40.2744" width="28" height="10" />
      <path d="M29.9899 44.4769C31.1606 44.4769 32.1402 44.0338 33.0884 43.6054C34.1005 43.1476 35.1484 42.674 36.5323 42.674C37.3418 42.674 38.1934 42.8316 39.1362 43.1549C39.2832 43.2053 39.4439 43.2053 39.5909 43.1549C40.5338 42.8316 41.3853 42.674 42.1948 42.674C43.5787 42.674 44.6256 43.1476 45.6377 43.6054C46.5859 44.0338 47.5655 44.4769 48.7362 44.4769C49.3589 44.4769 49.992 44.3509 50.6503 44.0926C49.9185 46.3973 47.9487 48.008 45.6577 48.008C43.6365 48.008 41.6006 46.768 39.9248 44.5168C39.6612 44.1619 39.0659 44.1619 38.8024 44.5168C37.1266 46.768 35.0907 48.008 33.0695 48.008C30.7784 48.008 28.8076 46.3973 28.0757 44.0926C28.7341 44.3509 29.3683 44.4769 29.9899 44.4769ZM33.0695 49.4076C35.3122 49.4076 37.5203 48.2264 39.363 46.0592C41.2058 48.2253 43.416 49.4076 45.6577 49.4076C49.0974 49.4076 51.9597 46.6031 52.3167 42.884C52.3429 42.6184 52.2159 42.3622 51.9891 42.2226C51.7633 42.0819 51.4777 42.0819 51.252 42.2215C50.3238 42.7969 49.5006 43.0772 48.7362 43.0772C47.8679 43.0772 47.1014 42.7307 46.2152 42.3296C45.1201 41.8351 43.8801 41.2744 42.1948 41.2744C41.2961 41.2744 40.3668 41.4319 39.363 41.7553C38.3593 41.4319 37.4311 41.2744 36.5323 41.2744C34.846 41.2744 33.606 41.8351 32.5119 42.3296C31.6247 42.7307 30.8582 43.0772 29.9899 43.0772C29.2255 43.0772 28.4033 42.7969 27.4752 42.2215C27.2484 42.0819 26.9628 42.0819 26.737 42.2226C26.5102 42.3622 26.3842 42.6184 26.4094 42.884C26.7664 46.6031 29.6297 49.4076 33.0695 49.4076Z" />
    </mask>
    <path
      d="M29.9899 44.4769C31.1606 44.4769 32.1402 44.0338 33.0884 43.6054C34.1005 43.1476 35.1484 42.674 36.5323 42.674C37.3418 42.674 38.1934 42.8316 39.1362 43.1549C39.2832 43.2053 39.4439 43.2053 39.5909 43.1549C40.5338 42.8316 41.3853 42.674 42.1948 42.674C43.5787 42.674 44.6256 43.1476 45.6377 43.6054C46.5859 44.0338 47.5655 44.4769 48.7362 44.4769C49.3589 44.4769 49.992 44.3509 50.6503 44.0926C49.9185 46.3973 47.9487 48.008 45.6577 48.008C43.6365 48.008 41.6006 46.768 39.9248 44.5168C39.6612 44.1619 39.0659 44.1619 38.8024 44.5168C37.1266 46.768 35.0907 48.008 33.0695 48.008C30.7784 48.008 28.8076 46.3973 28.0757 44.0926C28.7341 44.3509 29.3683 44.4769 29.9899 44.4769ZM33.0695 49.4076C35.3122 49.4076 37.5203 48.2264 39.363 46.0592C41.2058 48.2253 43.416 49.4076 45.6577 49.4076C49.0974 49.4076 51.9597 46.6031 52.3167 42.884C52.3429 42.6184 52.2159 42.3622 51.9891 42.2226C51.7633 42.0819 51.4777 42.0819 51.252 42.2215C50.3238 42.7969 49.5006 43.0772 48.7362 43.0772C47.8679 43.0772 47.1014 42.7307 46.2152 42.3296C45.1201 41.8351 43.8801 41.2744 42.1948 41.2744C41.2961 41.2744 40.3668 41.4319 39.363 41.7553C38.3593 41.4319 37.4311 41.2744 36.5323 41.2744C34.846 41.2744 33.606 41.8351 32.5119 42.3296C31.6247 42.7307 30.8582 43.0772 29.9899 43.0772C29.2255 43.0772 28.4033 42.7969 27.4752 42.2215C27.2484 42.0819 26.9628 42.0819 26.737 42.2226C26.5102 42.3622 26.3842 42.6184 26.4094 42.884C26.7664 46.6031 29.6297 49.4076 33.0695 49.4076Z"
      fill={color}
    />
    <path
      d="M29.9899 44.4769C31.1606 44.4769 32.1402 44.0338 33.0884 43.6054C34.1005 43.1476 35.1484 42.674 36.5323 42.674C37.3418 42.674 38.1934 42.8316 39.1362 43.1549C39.2832 43.2053 39.4439 43.2053 39.5909 43.1549C40.5338 42.8316 41.3853 42.674 42.1948 42.674C43.5787 42.674 44.6256 43.1476 45.6377 43.6054C46.5859 44.0338 47.5655 44.4769 48.7362 44.4769C49.3589 44.4769 49.992 44.3509 50.6503 44.0926C49.9185 46.3973 47.9487 48.008 45.6577 48.008C43.6365 48.008 41.6006 46.768 39.9248 44.5168C39.6612 44.1619 39.0659 44.1619 38.8024 44.5168C37.1266 46.768 35.0907 48.008 33.0695 48.008C30.7784 48.008 28.8076 46.3973 28.0757 44.0926C28.7341 44.3509 29.3683 44.4769 29.9899 44.4769ZM33.0695 49.4076C35.3122 49.4076 37.5203 48.2264 39.363 46.0592C41.2058 48.2253 43.416 49.4076 45.6577 49.4076C49.0974 49.4076 51.9597 46.6031 52.3167 42.884C52.3429 42.6184 52.2159 42.3622 51.9891 42.2226C51.7633 42.0819 51.4777 42.0819 51.252 42.2215C50.3238 42.7969 49.5006 43.0772 48.7362 43.0772C47.8679 43.0772 47.1014 42.7307 46.2152 42.3296C45.1201 41.8351 43.8801 41.2744 42.1948 41.2744C41.2961 41.2744 40.3668 41.4319 39.363 41.7553C38.3593 41.4319 37.4311 41.2744 36.5323 41.2744C34.846 41.2744 33.606 41.8351 32.5119 42.3296C31.6247 42.7307 30.8582 43.0772 29.9899 43.0772C29.2255 43.0772 28.4033 42.7969 27.4752 42.2215C27.2484 42.0819 26.9628 42.0819 26.737 42.2226C26.5102 42.3622 26.3842 42.6184 26.4094 42.884C26.7664 46.6031 29.6297 49.4076 33.0695 49.4076Z"
      stroke={color}
      stroke-width="0.4"
      mask="url(#captain-4)"
    />
    <mask
      id="captain-5"
      maskUnits="userSpaceOnUse"
      x="26.2266"
      y="46.6318"
      width="27"
      height="14"
      fill="#000"
    >
      <rect fill="#fff" x="26.2266" y="46.6318" width="27" height="14" />
      <path d="M39.882 59.6416C45.5897 59.6416 52.8766 53.6997 52.8766 49.0441V48.3322C52.8766 47.9458 52.5626 47.6318 52.1762 47.6318C51.7898 47.6318 51.4759 47.9458 51.4759 48.3322V49.0441C51.4759 52.593 45.1455 58.2409 39.882 58.2409C34.5134 58.2409 28.6262 51.7856 28.6262 49.0441V48.3332C28.6262 47.9458 28.3122 47.6329 27.9259 47.6329C27.5395 47.6329 27.2266 47.9458 27.2266 48.3332V49.0441C27.2266 52.7285 33.9307 59.6416 39.882 59.6416Z" />
    </mask>
    <path
      d="M39.882 59.6416C45.5897 59.6416 52.8766 53.6997 52.8766 49.0441V48.3322C52.8766 47.9458 52.5626 47.6318 52.1762 47.6318C51.7898 47.6318 51.4759 47.9458 51.4759 48.3322V49.0441C51.4759 52.593 45.1455 58.2409 39.882 58.2409C34.5134 58.2409 28.6262 51.7856 28.6262 49.0441V48.3332C28.6262 47.9458 28.3122 47.6329 27.9259 47.6329C27.5395 47.6329 27.2266 47.9458 27.2266 48.3332V49.0441C27.2266 52.7285 33.9307 59.6416 39.882 59.6416Z"
      fill={color}
    />
    <path
      d="M39.882 59.6416C45.5897 59.6416 52.8766 53.6997 52.8766 49.0441V48.3322C52.8766 47.9458 52.5626 47.6318 52.1762 47.6318C51.7898 47.6318 51.4759 47.9458 51.4759 48.3322V49.0441C51.4759 52.593 45.1455 58.2409 39.882 58.2409C34.5134 58.2409 28.6262 51.7856 28.6262 49.0441V48.3332C28.6262 47.9458 28.3122 47.6329 27.9259 47.6329C27.5395 47.6329 27.2266 47.9458 27.2266 48.3332V49.0441C27.2266 52.7285 33.9307 59.6416 39.882 59.6416Z"
      stroke={color}
      stroke-width="0.4"
      mask="url(#captain-5)"
    />
    <mask
      id="captain-6"
      maskUnits="userSpaceOnUse"
      x="23.7656"
      y="31.9688"
      width="5"
      height="10"
      fill="#000"
    >
      <rect fill="#fff" x="23.7656" y="31.9688" width="5" height="10" />
      <path d="M24.7656 38.2697C24.7656 39.9612 26.1422 41.3378 27.8337 41.3378C28.2201 41.3378 28.534 41.0249 28.534 40.6385V37.0717C28.534 36.6853 28.2201 36.3714 27.8337 36.3714C27.4473 36.3714 27.1344 36.6853 27.1344 37.0717V39.7838C26.5632 39.5192 26.1653 38.9396 26.1653 38.2697V35.8737C26.1653 35.1828 26.58 34.5738 27.2226 34.3207C27.5817 34.179 27.7591 33.7716 27.6174 33.4125C27.4756 33.0524 27.0682 32.876 26.7092 33.0177C25.5279 33.4829 24.7656 34.6042 24.7656 35.8737V38.2697Z" />
    </mask>
    <path
      d="M24.7656 38.2697C24.7656 39.9612 26.1422 41.3378 27.8337 41.3378C28.2201 41.3378 28.534 41.0249 28.534 40.6385V37.0717C28.534 36.6853 28.2201 36.3714 27.8337 36.3714C27.4473 36.3714 27.1344 36.6853 27.1344 37.0717V39.7838C26.5632 39.5192 26.1653 38.9396 26.1653 38.2697V35.8737C26.1653 35.1828 26.58 34.5738 27.2226 34.3207C27.5817 34.179 27.7591 33.7716 27.6174 33.4125C27.4756 33.0524 27.0682 32.876 26.7092 33.0177C25.5279 33.4829 24.7656 34.6042 24.7656 35.8737V38.2697Z"
      fill={color}
    />
    <path
      d="M24.7656 38.2697C24.7656 39.9612 26.1422 41.3378 27.8337 41.3378C28.2201 41.3378 28.534 41.0249 28.534 40.6385V37.0717C28.534 36.6853 28.2201 36.3714 27.8337 36.3714C27.4473 36.3714 27.1344 36.6853 27.1344 37.0717V39.7838C26.5632 39.5192 26.1653 38.9396 26.1653 38.2697V35.8737C26.1653 35.1828 26.58 34.5738 27.2226 34.3207C27.5817 34.179 27.7591 33.7716 27.6174 33.4125C27.4756 33.0524 27.0682 32.876 26.7092 33.0177C25.5279 33.4829 24.7656 34.6042 24.7656 35.8737V38.2697Z"
      stroke={color}
      stroke-width="0.4"
      mask="url(#captain-6)"
    />
    <mask
      id="captain-7"
      maskUnits="userSpaceOnUse"
      x="50.0156"
      y="31.8662"
      width="5"
      height="10"
      fill="#000"
    >
      <rect fill="#fff" x="50.0156" y="31.8662" width="5" height="10" />
      <path d="M51.7307 36.3135H51.7286C51.3432 36.3135 51.0303 36.6253 51.0282 37.0107L51.0156 40.5774C51.0156 40.7633 51.0891 40.9428 51.2204 41.0741C51.3516 41.2064 51.5301 41.2799 51.716 41.2799C53.4075 41.2799 54.7841 39.9034 54.7841 38.2118V35.8158C54.7841 34.4886 53.9388 33.3179 52.6799 32.9021C52.3134 32.7803 51.9165 32.9787 51.7958 33.3462C51.674 33.7137 51.8735 34.1095 52.2399 34.2313C52.9245 34.4571 53.3844 35.0944 53.3844 35.8158V38.2118C53.3844 38.8807 52.9886 39.4592 52.4184 39.7249L52.4289 37.0159C52.43 36.6295 52.1181 36.3145 51.7307 36.3135Z" />
    </mask>
    <path
      d="M51.7307 36.3135H51.7286C51.3432 36.3135 51.0303 36.6253 51.0282 37.0107L51.0156 40.5774C51.0156 40.7633 51.0891 40.9428 51.2204 41.0741C51.3516 41.2064 51.5301 41.2799 51.716 41.2799C53.4075 41.2799 54.7841 39.9034 54.7841 38.2118V35.8158C54.7841 34.4886 53.9388 33.3179 52.6799 32.9021C52.3134 32.7803 51.9165 32.9787 51.7958 33.3462C51.674 33.7137 51.8735 34.1095 52.2399 34.2313C52.9245 34.4571 53.3844 35.0944 53.3844 35.8158V38.2118C53.3844 38.8807 52.9886 39.4592 52.4184 39.7249L52.4289 37.0159C52.43 36.6295 52.1181 36.3145 51.7307 36.3135Z"
      fill={color}
    />
    <path
      d="M51.7307 36.3135H51.7286C51.3432 36.3135 51.0303 36.6253 51.0282 37.0107L51.0156 40.5774C51.0156 40.7633 51.0891 40.9428 51.2204 41.0741C51.3516 41.2064 51.5301 41.2799 51.716 41.2799C53.4075 41.2799 54.7841 39.9034 54.7841 38.2118V35.8158C54.7841 34.4886 53.9388 33.3179 52.6799 32.9021C52.3134 32.7803 51.9165 32.9787 51.7958 33.3462C51.674 33.7137 51.8735 34.1095 52.2399 34.2313C52.9245 34.4571 53.3844 35.0944 53.3844 35.8158V38.2118C53.3844 38.8807 52.9886 39.4592 52.4184 39.7249L52.4289 37.0159C52.43 36.6295 52.1181 36.3145 51.7307 36.3135Z"
      stroke={color}
      stroke-width="0.4"
      mask="url(#captain-7)"
    />
    <mask
      id="captain-8"
      maskUnits="userSpaceOnUse"
      x="9"
      y="51.9639"
      width="18"
      height="19"
      fill="#000"
    >
      <rect fill="#fff" x="9" y="51.9639" width="18" height="19" />
      <path d="M26.2037 54.3294C26.5712 54.2097 26.7718 53.8149 26.6521 53.4474C26.5334 53.0799 26.1386 52.8793 25.7701 52.998L15.9633 56.1889C13.2218 57.0803 10.8982 60.0308 10.6735 62.8878L10.0036 69.4082C9.96476 69.7935 10.244 70.1368 10.6283 70.1767C10.6535 70.1788 10.6766 70.1799 10.7008 70.1799C11.0557 70.1799 11.3591 69.9122 11.3969 69.552L12.0679 63.0148C12.2464 60.7416 14.2287 58.2258 16.3959 57.5203L26.2037 54.3294Z" />
    </mask>
    <path
      d="M26.2037 54.3294C26.5712 54.2097 26.7718 53.8149 26.6521 53.4474C26.5334 53.0799 26.1386 52.8793 25.7701 52.998L15.9633 56.1889C13.2218 57.0803 10.8982 60.0308 10.6735 62.8878L10.0036 69.4082C9.96476 69.7935 10.244 70.1368 10.6283 70.1767C10.6535 70.1788 10.6766 70.1799 10.7008 70.1799C11.0557 70.1799 11.3591 69.9122 11.3969 69.552L12.0679 63.0148C12.2464 60.7416 14.2287 58.2258 16.3959 57.5203L26.2037 54.3294Z"
      fill={color}
    />
    <path
      d="M26.2037 54.3294C26.5712 54.2097 26.7718 53.8149 26.6521 53.4474C26.5334 53.0799 26.1386 52.8793 25.7701 52.998L15.9633 56.1889C13.2218 57.0803 10.8982 60.0308 10.6735 62.8878L10.0036 69.4082C9.96476 69.7935 10.244 70.1368 10.6283 70.1767C10.6535 70.1788 10.6766 70.1799 10.7008 70.1799C11.0557 70.1799 11.3591 69.9122 11.3969 69.552L12.0679 63.0148C12.2464 60.7416 14.2287 58.2258 16.3959 57.5203L26.2037 54.3294Z"
      stroke={color}
      stroke-width="0.4"
      mask="url(#captain-8)"
    />
    <mask
      id="captain-9"
      maskUnits="userSpaceOnUse"
      x="51.6562"
      y="51.9639"
      width="18"
      height="19"
      fill="#000"
    >
      <rect fill="#fff" x="51.6562" y="51.9639" width="18" height="19" />
      <path d="M68.6431 70.1799C68.6673 70.1799 68.6914 70.1788 68.7156 70.1767C69.0999 70.1368 69.3802 69.7935 69.3403 69.4082L68.6715 62.9046C68.4457 60.0308 66.1221 57.0814 63.3806 56.1889L53.5738 52.998C53.2063 52.8793 52.8105 53.0799 52.6908 53.4474C52.5711 53.8149 52.7727 54.2097 53.1402 54.3294L62.948 57.5203C65.1152 58.2258 67.0976 60.7416 67.2782 63.0316L67.9481 69.552C67.9848 69.9122 68.2882 70.1799 68.6431 70.1799Z" />
    </mask>
    <path
      d="M68.6431 70.1799C68.6673 70.1799 68.6914 70.1788 68.7156 70.1767C69.0999 70.1368 69.3802 69.7935 69.3403 69.4082L68.6715 62.9046C68.4457 60.0308 66.1221 57.0814 63.3806 56.1889L53.5738 52.998C53.2063 52.8793 52.8105 53.0799 52.6908 53.4474C52.5711 53.8149 52.7727 54.2097 53.1402 54.3294L62.948 57.5203C65.1152 58.2258 67.0976 60.7416 67.2782 63.0316L67.9481 69.552C67.9848 69.9122 68.2882 70.1799 68.6431 70.1799Z"
      fill={color}
    />
    <path
      d="M68.6431 70.1799C68.6673 70.1799 68.6914 70.1788 68.7156 70.1767C69.0999 70.1368 69.3802 69.7935 69.3403 69.4082L68.6715 62.9046C68.4457 60.0308 66.1221 57.0814 63.3806 56.1889L53.5738 52.998C53.2063 52.8793 52.8105 53.0799 52.6908 53.4474C52.5711 53.8149 52.7727 54.2097 53.1402 54.3294L62.948 57.5203C65.1152 58.2258 67.0976 60.7416 67.2782 63.0316L67.9481 69.552C67.9848 69.9122 68.2882 70.1799 68.6431 70.1799Z"
      stroke={color}
      stroke-width="0.4"
      mask="url(#captain-9)"
    />
    <mask
      id="captain-10"
      maskUnits="userSpaceOnUse"
      x="14.7422"
      y="55.6553"
      width="16"
      height="7"
      fill="#000"
    >
      <rect fill="#fff" x="14.7422" y="55.6553" width="16" height="7" />
      <path d="M18.2627 61.5323C18.3351 61.5323 18.4086 61.5218 18.479 61.4987L29.1678 58.0212C29.5353 57.9015 29.7369 57.5067 29.6172 57.1392C29.4975 56.7717 29.1037 56.5701 28.7352 56.6898L18.3929 60.0539L16.8641 58.9C16.5554 58.6669 16.1165 58.7289 15.8834 59.0365C15.6503 59.3452 15.7123 59.7841 16.021 60.0172L17.8406 61.3916C17.9645 61.484 18.1125 61.5323 18.2627 61.5323Z" />
    </mask>
    <path
      d="M18.2627 61.5323C18.3351 61.5323 18.4086 61.5218 18.479 61.4987L29.1678 58.0212C29.5353 57.9015 29.7369 57.5067 29.6172 57.1392C29.4975 56.7717 29.1037 56.5701 28.7352 56.6898L18.3929 60.0539L16.8641 58.9C16.5554 58.6669 16.1165 58.7289 15.8834 59.0365C15.6503 59.3452 15.7123 59.7841 16.021 60.0172L17.8406 61.3916C17.9645 61.484 18.1125 61.5323 18.2627 61.5323Z"
      fill={color}
    />
    <path
      d="M18.2627 61.5323C18.3351 61.5323 18.4086 61.5218 18.479 61.4987L29.1678 58.0212C29.5353 57.9015 29.7369 57.5067 29.6172 57.1392C29.4975 56.7717 29.1037 56.5701 28.7352 56.6898L18.3929 60.0539L16.8641 58.9C16.5554 58.6669 16.1165 58.7289 15.8834 59.0365C15.6503 59.3452 15.7123 59.7841 16.021 60.0172L17.8406 61.3916C17.9645 61.484 18.1125 61.5323 18.2627 61.5323Z"
      stroke={color}
      stroke-width="0.4"
      mask="url(#captain-10)"
    />
    <mask
      id="captain-11"
      maskUnits="userSpaceOnUse"
      x="49.1953"
      y="55.6553"
      width="16"
      height="7"
      fill="#000"
    >
      <rect fill="#fff" x="49.1953" y="55.6553" width="16" height="7" />
      <path d="M50.2299 57.1392C50.1102 57.5067 50.3108 57.9015 50.6793 58.0212L61.3682 61.4987C61.4385 61.5218 61.512 61.5323 61.5845 61.5323C61.7346 61.5323 61.8837 61.484 62.0066 61.3916L63.8273 60.0172C64.1349 59.7841 64.1969 59.3452 63.9638 59.0365C63.7307 58.7278 63.2918 58.6669 62.9831 58.9L61.4543 60.0539L51.1119 56.6898C50.7444 56.5701 50.3496 56.7717 50.2299 57.1392Z" />
    </mask>
    <path
      d="M50.2299 57.1392C50.1102 57.5067 50.3108 57.9015 50.6793 58.0212L61.3682 61.4987C61.4385 61.5218 61.512 61.5323 61.5845 61.5323C61.7346 61.5323 61.8837 61.484 62.0066 61.3916L63.8273 60.0172C64.1349 59.7841 64.1969 59.3452 63.9638 59.0365C63.7307 58.7278 63.2918 58.6669 62.9831 58.9L61.4543 60.0539L51.1119 56.6898C50.7444 56.5701 50.3496 56.7717 50.2299 57.1392Z"
      fill={color}
    />
    <path
      d="M50.2299 57.1392C50.1102 57.5067 50.3108 57.9015 50.6793 58.0212L61.3682 61.4987C61.4385 61.5218 61.512 61.5323 61.5845 61.5323C61.7346 61.5323 61.8837 61.484 62.0066 61.3916L63.8273 60.0172C64.1349 59.7841 64.1969 59.3452 63.9638 59.0365C63.7307 58.7278 63.2918 58.6669 62.9831 58.9L61.4543 60.0539L51.1119 56.6898C50.7444 56.5701 50.3496 56.7717 50.2299 57.1392Z"
      stroke={color}
      stroke-width="0.4"
      mask="url(#captain-11)"
    />
    <mask
      id="captain-12"
      maskUnits="userSpaceOnUse"
      x="37.7109"
      y="59.5518"
      width="3"
      height="11"
      fill="#000"
    >
      <rect fill="#fff" x="37.7109" y="59.5518" width="3" height="11" />
      <path d="M38.7109 61.2521V69.4168C38.7109 69.8032 39.0249 70.1161 39.4113 70.1161C39.7977 70.1161 40.1117 69.8032 40.1117 69.4168V61.2521C40.1117 60.8657 39.7977 60.5518 39.4113 60.5518C39.0249 60.5518 38.7109 60.8657 38.7109 61.2521Z" />
    </mask>
    <path
      d="M38.7109 61.2521V69.4168C38.7109 69.8032 39.0249 70.1161 39.4113 70.1161C39.7977 70.1161 40.1117 69.8032 40.1117 69.4168V61.2521C40.1117 60.8657 39.7977 60.5518 39.4113 60.5518C39.0249 60.5518 38.7109 60.8657 38.7109 61.2521Z"
      fill={color}
    />
    <path
      d="M38.7109 61.2521V69.4168C38.7109 69.8032 39.0249 70.1161 39.4113 70.1161C39.7977 70.1161 40.1117 69.8032 40.1117 69.4168V61.2521C40.1117 60.8657 39.7977 60.5518 39.4113 60.5518C39.0249 60.5518 38.7109 60.8657 38.7109 61.2521Z"
      stroke={color}
      stroke-width="0.4"
      mask="url(#captain-12)"
    />
    <mask
      id="captain-13"
      maskUnits="userSpaceOnUse"
      x="41.8125"
      y="62.1152"
      width="3"
      height="3"
      fill="#000"
    >
      <rect fill="#fff" x="41.8125" y="62.1152" width="3" height="3" />
      <path d="M44.2132 63.8019C44.2132 63.4155 43.8992 63.1152 43.5128 63.1152C43.1264 63.1152 42.8125 63.4418 42.8125 63.8282C42.8125 64.2146 43.1264 64.5286 43.5128 64.5286C43.8992 64.5286 44.2132 64.2146 44.2132 63.8282V63.8019Z" />
    </mask>
    <path
      d="M44.2132 63.8019C44.2132 63.4155 43.8992 63.1152 43.5128 63.1152C43.1264 63.1152 42.8125 63.4418 42.8125 63.8282C42.8125 64.2146 43.1264 64.5286 43.5128 64.5286C43.8992 64.5286 44.2132 64.2146 44.2132 63.8282V63.8019Z"
      fill={color}
    />
    <path
      d="M44.2132 63.8019C44.2132 63.4155 43.8992 63.1152 43.5128 63.1152C43.1264 63.1152 42.8125 63.4418 42.8125 63.8282C42.8125 64.2146 43.1264 64.5286 43.5128 64.5286C43.8992 64.5286 44.2132 64.2146 44.2132 63.8282V63.8019Z"
      stroke={color}
      stroke-width="0.4"
      mask="url(#captain-13)"
    />
    <mask
      id="captain-14"
      maskUnits="userSpaceOnUse"
      x="41.8125"
      y="66.3193"
      width="3"
      height="3"
      fill="#000"
    >
      <rect fill="#fff" x="41.8125" y="66.3193" width="3" height="3" />
      <path d="M43.5128 67.3193C43.1264 67.3193 42.8125 67.6459 42.8125 68.0323C42.8125 68.4187 43.1264 68.7327 43.5128 68.7327C43.8992 68.7327 44.2132 68.4187 44.2132 68.0323V68.0061C44.2132 67.6196 43.8992 67.3193 43.5128 67.3193Z" />
    </mask>
    <path
      d="M43.5128 67.3193C43.1264 67.3193 42.8125 67.6459 42.8125 68.0323C42.8125 68.4187 43.1264 68.7327 43.5128 68.7327C43.8992 68.7327 44.2132 68.4187 44.2132 68.0323V68.0061C44.2132 67.6196 43.8992 67.3193 43.5128 67.3193Z"
      fill={color}
    />
    <path
      d="M43.5128 67.3193C43.1264 67.3193 42.8125 67.6459 42.8125 68.0323C42.8125 68.4187 43.1264 68.7327 43.5128 68.7327C43.8992 68.7327 44.2132 68.4187 44.2132 68.0323V68.0061C44.2132 67.6196 43.8992 67.3193 43.5128 67.3193Z"
      stroke={color}
      stroke-width="0.4"
      mask="url(#captain-14)"
    />
  </svg>
);

export default Captain;
