import { css } from '@emotion/react';
import { fontSize, fontWeight, fontFamily, lineHeight } from '../_tokens';

export type ListTypes =
  | 'heading56'
  | 'heading48'
  | 'heading40'
  | 'heading36'
  | 'heading30'
  | 'heading24'
  | 'heading20'
  | 'heading18'
  | 'heading16'
  | 'body20'
  | 'body18'
  | 'body16'
  | 'body14';

type TProps = {
  [key in ListTypes]: {
    fontFamily: keyof typeof fontFamily;
    fontSize: keyof typeof fontSize;
    lineHeight: keyof typeof lineHeight;
    fontWeight: keyof typeof fontWeight;
  };
};

export const t: TProps = {
  heading56: {
    fontFamily: 'sans',
    fontSize: 56,
    lineHeight: 70,
    fontWeight: 'semibold',
  },
  heading48: {
    fontFamily: 'sans',
    fontSize: 48,
    lineHeight: 64,
    fontWeight: 'semibold',
  },
  heading40: {
    fontFamily: 'sans',
    fontSize: 40,
    lineHeight: 48,
    fontWeight: 'semibold',
  },
  heading36: {
    fontFamily: 'sans',
    fontSize: 36,
    lineHeight: 44,
    fontWeight: 'semibold',
  },
  heading30: {
    fontFamily: 'sans',
    fontSize: 30,
    lineHeight: 38,
    fontWeight: 'semibold',
  },
  heading24: {
    fontFamily: 'sans',
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'semibold',
  },
  heading20: {
    fontFamily: 'sans',
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 'semibold',
  },
  heading18: {
    fontFamily: 'sans',
    fontSize: 18,
    lineHeight: 28,
    fontWeight: 'semibold',
  },
  heading16: {
    fontFamily: 'sans',
    fontSize: 16,
    lineHeight: 28,
    fontWeight: 'semibold',
  },
  body20: {
    fontFamily: 'sans',
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 'regular',
  },
  body18: {
    fontFamily: 'sans',
    fontSize: 18,
    lineHeight: 28,
    fontWeight: 'regular',
  },
  body16: {
    fontFamily: 'sans',
    fontSize: 16,
    lineHeight: 28,
    fontWeight: 'regular',
  },
  body14: {
    fontFamily: 'sans',
    fontSize: 14,
    lineHeight: 20,
    fontWeight: 'regular',
  },
};

const heading56 = css`
  font-family: ${fontFamily.sans};
  font-size: ${fontSize[56]};
  line-height: ${lineHeight[70]};
  font-weight: ${fontWeight.semibold};
`;

const heading48 = css`
  font-family: ${fontFamily.sans};
  font-size: ${fontSize[48]};
  line-height: ${lineHeight[64]};
  font-weight: ${fontWeight.semibold};
`;

const heading40 = css`
  font-family: ${fontFamily.sans};
  font-size: ${fontSize[40]};
  line-height: ${lineHeight[48]};
  font-weight: ${fontWeight.semibold};
`;

const heading36 = css`
  font-family: ${fontFamily.sans};
  font-size: ${fontSize[36]};
  line-height: ${lineHeight[44]};
  font-weight: ${fontWeight.semibold};
`;

const heading30 = css`
  font-family: ${fontFamily.sans};
  font-size: ${fontSize[30]};
  line-height: ${lineHeight[38]};
  font-weight: ${fontWeight.semibold};
`;

const heading24 = css`
  font-family: ${fontFamily.sans};
  font-size: ${fontSize[24]};
  line-height: ${lineHeight[32]};
  font-weight: ${fontWeight.semibold};
`;

const heading20 = css`
  font-family: ${fontFamily.sans};
  font-size: ${fontSize[20]};
  line-height: ${lineHeight[32]};
  font-weight: ${fontWeight.semibold};
`;

const heading18 = css`
  font-family: ${fontFamily.sans};
  font-size: ${fontSize[18]};
  line-height: ${lineHeight[28]};
  font-weight: ${fontWeight.semibold};
`;

const heading16 = css`
  font-family: ${fontFamily.sans};
  font-size: ${fontSize[16]};
  line-height: ${lineHeight[28]};
  font-weight: ${fontWeight.semibold};
`;

const body20 = css`
  font-family: ${fontFamily.sans};
  font-size: ${fontSize[20]};
  line-height: ${lineHeight[32]};
  font-weight: ${fontWeight.regular};
`;

const body18 = css`
  font-family: ${fontFamily.sans};
  font-size: ${fontSize[18]};
  line-height: ${lineHeight[28]};
  font-weight: ${fontWeight.regular};
`;

const body16 = css`
  font-family: ${fontFamily.sans};
  font-size: ${fontSize[16]};
  line-height: ${lineHeight[28]};
  font-weight: ${fontWeight.regular};
`;

const body14 = css`
  font-family: ${fontFamily.sans};
  font-size: ${fontSize[14]};
  line-height: ${lineHeight[20]};
  font-weight: ${fontWeight.regular};
`;

const subheading = css`
  font-family: ${fontFamily.sans};
  font-size: ${fontSize[11]};
  font-weight: ${fontWeight.bold};
  letter-spacing: 0.35em;
  text-transform: uppercase;
`;

const subheadingLarge = css`
  font-family: ${fontFamily.sans};
  font-size: 13px;
  line-height: ${lineHeight[20]};
  font-weight: ${fontWeight.bold};
  letter-spacing: 0.35em;
  text-transform: uppercase;
`;

export const typography = {
  heading56,
  heading48,
  heading40,
  heading36,
  heading30,
  heading24,
  heading20,
  heading18,
  heading16,
  body20,
  body18,
  body16,
  body14,
  subheading,
  subheadingLarge,
};
