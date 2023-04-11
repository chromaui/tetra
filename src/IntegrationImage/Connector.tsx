import React, { FC } from 'react';
import { styled } from '@storybook/theming';
import { minMd } from '../_helpers';
import { color } from '../_tokens';

const ArrowSVG = styled.svg`
  position: relative;
  margin-left: -6px;
  margin-right: 3px;
  z-index: 1;
`;

const Arrow = () => (
  <ArrowSVG
    xmlns="http://www.w3.org/2000/svg"
    width="17"
    height="8"
    fill="none"
    viewBox="0 0 17 8"
  >
    <g clipPath="url(#clip0_7043_99629)">
      <path
        fill={color.pink500}
        d="M16.354 4.354a.5.5 0 000-.708L13.172.464a.5.5 0 10-.708.708L15.293 4l-2.829 2.828a.5.5 0 10.708.708l3.182-3.182zM0 4.5h16v-1H0v1z"
      />
    </g>
    <defs>
      <clipPath id="clip0_7043_99629">
        <path fill="#fff" d="M0 0H17V8H0z" />
      </clipPath>
    </defs>
  </ArrowSVG>
);

const Container = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  margin-left: -3px;

  ${minMd} {
    margin-left: -5px;
  }
`;

const Circle = styled.div`
  box-sizing: border-box;
  width: 8px;
  height: 8px;
  border: 2px solid #fff;
  background: #ff4785;
  border-radius: 100%;

  ${minMd} {
    width: 10px;
    height: 10px;
  }
`;

export const Connector: FC = () => {
  return (
    <Container>
      <Circle />
      <Arrow />
    </Container>
  );
};
