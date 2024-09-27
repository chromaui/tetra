import styled from '@emotion/styled';
import React, { FC } from 'react';
import { desktopBreakpoint } from './styles';

interface HeaderLogoProps {
  theme?: 'light' | 'dark';
}

const SVG = styled.svg`
  width: auto;
  height: 22px;
  @media (min-width: ${desktopBreakpoint}px) {
    height: 24px;
  }
`;

export const HeaderLogo: FC<HeaderLogoProps> = ({ theme, ...props }) => {
  const textColor = theme === 'light' ? '#2E3438' : '#FFFFFF';

  return (
    <SVG
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 120 24"
      {...props}
    >
      <path
        fill={textColor}
        fillRule="evenodd"
        d="M93.638 15.5c0 1.025-.965 1.671-2.32 1.671-1.196 0-1.84-.423-1.84-1.225 0-.825.667-1.182 1.679-1.182h2.481v.735Zm-1.746-6.286c-2.011 0-3.154.669-4 1.622l-.044.05.024.023 1.676.938c.497-.425 1.162-.76 2.16-.76 1.241 0 1.93.623 1.93 2.117h-2.642c-2.183.023-3.792.869-3.792 2.809 0 2.095 1.563 2.964 3.47 2.964 1.425 0 2.343-.535 3.033-1.538l-.069 1.337h2.32V13.25c0-2.765-1.745-4.035-4.066-4.035Zm26.25 6.682a2.932 2.932 0 0 1-2.229 1.015c-1.6 0-2.902-1.263-2.902-2.816 0-1.552 1.302-2.815 2.902-2.815.891 0 1.689.393 2.223 1.008l1.858-1.042a5.07 5.07 0 0 0-4.081-2.032c-2.779 0-5.031 2.186-5.031 4.881 0 2.696 2.252 4.882 5.031 4.882a5.073 5.073 0 0 0 4.087-2.04l-1.858-1.04Zm-81.51 0a2.934 2.934 0 0 1-2.23 1.015c-1.6 0-2.902-1.263-2.902-2.816 0-1.552 1.302-2.815 2.902-2.815.891 0 1.69.393 2.223 1.008l1.858-1.041a5.071 5.071 0 0 0-4.081-2.033c-2.78 0-5.031 2.186-5.031 4.881 0 2.696 2.252 4.882 5.03 4.882a5.073 5.073 0 0 0 4.088-2.04l-1.858-1.04Zm33.97-6.48h2.32l-.045 1.604c.644-1.181 1.632-1.806 2.872-1.806 1.401 0 2.322.646 2.827 1.783.758-1.114 1.906-1.783 3.308-1.783 2.274 0 3.63 1.472 3.63 3.856v5.706h-2.32v-5.482c0-1.294-.483-2.007-1.816-2.007-1.354 0-2.16.803-2.16 2.363v5.126h-2.32v-5.482c0-1.294-.46-2.007-1.792-2.007-1.38 0-2.183.803-2.183 2.363v5.126h-2.32v-9.36ZM40.166 4h2.32v7.064c.622-1.158 1.77-1.85 3.22-1.85 2.134 0 3.606 1.472 3.606 4.013v5.55H46.99v-5.372c0-1.338-.642-2.118-2-2.118-1.515 0-2.503.892-2.503 2.408v5.081h-2.32V4ZM63.73 9.214c-2.778 0-5.031 2.186-5.031 4.881 0 2.696 2.253 4.882 5.03 4.882 2.781 0 5.033-2.186 5.033-4.882 0-2.695-2.252-4.88-5.032-4.88Zm0 2.066c1.602 0 2.904 1.263 2.904 2.815 0 1.553-1.302 2.816-2.904 2.816-1.6 0-2.902-1.264-2.902-2.816 0-1.552 1.303-2.815 2.902-2.815Zm-12.11-1.865h2.321l-.024 1.76c.645-1.47 1.747-1.939 2.804-1.939.495 0 .884.081 1.215.217.131.053.404.18.67.373 0 0-.322.389-.605.86-.284.473-.476.98-.476.98-.367-.178-.735-.313-1.263-.313-1.379 0-2.32.78-2.32 2.877v4.546h-2.323v-9.36Zm54.896 9.376h2.348V9.415h-2.348v9.376Zm-.368-13.014c0-.848.713-1.473 1.542-1.473.828 0 1.542.625 1.542 1.473 0 .893-.714 1.495-1.542 1.495-.829 0-1.542-.602-1.542-1.495Zm-6.918 9.844v-4.308h-1.45V9.415h1.45V4h2.324v5.415h2.577v1.898h-2.577v4.353c0 1.071.368 1.384.967 1.384.552 0 .897-.246 1.15-.447l1.105 1.518c-.484.447-1.243.893-2.485.893-1.818 0-3.06-.893-3.06-3.393Z"
        clipRule="evenodd"
      />
      <circle cx="12" cy="12" r="12" fill="#FC521F" />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="m14.82 17.52-1.907-1.1 5.737-3.309a4.31 4.31 0 0 0 .62-.435 3.347 3.347 0 0 1 .154 3.611 3.372 3.372 0 0 1-4.604 1.233Zm-.46.795c.22.127.45.234.688.32a3.35 3.35 0 0 1-3.054 1.938 3.373 3.373 0 0 1-3.37-3.367v-6.619l2.911 1.68v4.153a.46.46 0 0 0 .23.397l2.596 1.498Zm-6.864-.344a3.383 3.383 0 0 1-2.92-1.683 3.343 3.343 0 0 1-.337-2.556c.233-.869.79-1.595 1.57-2.044l1.906-1.1v6.617c0 .254.022.505.067.754a3.4 3.4 0 0 1-.286.012Zm7.418-8.179-2.91 1.679-3.6-2.077a.46.46 0 0 0-.459 0L5.35 10.892c-.22.126-.428.272-.621.435a3.349 3.349 0 0 1-.154-3.611A3.385 3.385 0 0 1 7.497 6.03c.588 0 1.169.156 1.682.452l5.735 3.31Zm-2.92-6.362c1.859 0 3.37 1.51 3.37 3.368v2.2L9.629 5.689a4.261 4.261 0 0 0-.688-.32 3.351 3.351 0 0 1 3.053-1.939Zm7.43 4.287a3.37 3.37 0 0 1-1.234 4.6l-5.736 3.308v-3.357l3.6-2.077a.459.459 0 0 0 .23-.398V6.798c0-.253-.023-.505-.066-.753a3.383 3.383 0 0 1 3.206 1.672Z"
        clipRule="evenodd"
      />
    </SVG>
  );
};
