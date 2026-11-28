import React from 'react';

/** Figma integration tile (20px), exported from the Figma Platform menu. */
export const FigmaTile = ({ size = 20 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    aria-hidden="true"
    focusable="false"
  >
    <rect width="20" height="20" rx="2.5" fill="black" />
    <g>
      <path
        d="M7.90831 16.2776C9.06278 16.2776 10.0002 15.3404 10.0002 14.1857V12.0938H7.90831C6.75384 12.0938 5.81641 13.0309 5.81641 14.1857C5.81641 15.3404 6.75357 16.2776 7.90831 16.2776Z"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#0ACF83"
      />
      <path
        d="M5.81445 10.0001C5.81445 8.84564 6.75162 7.9082 7.90636 7.9082H9.99826V12.0941H7.90636C6.75151 12.093 5.81561 11.1571 5.81445 10.0022V10.0001Z"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#A259FF"
      />
      <path
        d="M5.81445 5.81456C5.81445 4.65982 6.75162 3.72266 7.90636 3.72266H9.99826V7.90857H7.90636C6.75151 7.90741 5.81561 6.97151 5.81445 5.81667V5.81456Z"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#F24E1E"
      />
      <path
        d="M9.98073 3.72266H12.0726C13.2271 3.72266 14.1643 4.65982 14.1643 5.81456C14.1643 6.96929 13.2271 7.90646 12.0724 7.90646H9.98047L9.98073 3.72266Z"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#FF7262"
      />
      <path
        d="M14.1861 10.0001C14.185 11.155 13.2491 12.0908 12.0942 12.092C10.9398 12.092 9.98047 11.1548 9.98047 10.0001C9.98163 8.84526 10.9175 7.90936 12.0724 7.9082C13.2268 7.9082 14.1643 8.84537 14.1643 10.0001H14.1861Z"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#1ABCFE"
      />
    </g>
  </svg>
);
