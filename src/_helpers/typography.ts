import { css } from '@storybook/theming';
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
  font-family: ${fontFamily[t.heading56.fontFamily]};
  font-size: ${fontSize[t.heading56.fontSize]};
  line-height: ${lineHeight[t.heading56.lineHeight]};
  font-weight: ${fontWeight[t.heading56.fontWeight]};
`;

const heading48 = css`
  font-family: ${fontFamily[t.heading48.fontFamily]};
  font-size: ${fontSize[t.heading48.fontSize]};
  line-height: ${lineHeight[t.heading48.lineHeight]};
  font-weight: ${fontWeight[t.heading48.fontWeight]};
`;

const heading40 = css`
  font-family: ${fontFamily[t.heading40.fontFamily]};
  font-size: ${fontSize[t.heading40.fontSize]};
  line-height: ${lineHeight[t.heading40.lineHeight]};
  font-weight: ${fontWeight[t.heading40.fontWeight]};
`;

const heading36 = css`
  font-family: ${fontFamily[t.heading36.fontFamily]};
  font-size: ${fontSize[t.heading36.fontSize]};
  line-height: ${lineHeight[t.heading36.lineHeight]};
  font-weight: ${fontWeight[t.heading36.fontWeight]};
`;

const heading30 = css`
  font-family: ${fontFamily[t.heading30.fontFamily]};
  font-size: ${fontSize[t.heading30.fontSize]};
  line-height: ${lineHeight[t.heading30.lineHeight]};
  font-weight: ${fontWeight[t.heading30.fontWeight]};
`;

const heading24 = css`
  font-family: ${fontFamily[t.heading24.fontFamily]};
  font-size: ${fontSize[t.heading24.fontSize]};
  line-height: ${lineHeight[t.heading24.lineHeight]};
  font-weight: ${fontWeight[t.heading24.fontWeight]};
`;

const heading20 = css`
  font-family: ${fontFamily[t.heading20.fontFamily]};
  font-size: ${fontSize[t.heading20.fontSize]};
  line-height: ${lineHeight[t.heading20.lineHeight]};
  font-weight: ${fontWeight[t.heading20.fontWeight]};
`;

const heading18 = css`
  font-family: ${fontFamily[t.heading18.fontFamily]};
  font-size: ${fontSize[t.heading18.fontSize]};
  line-height: ${lineHeight[t.heading18.lineHeight]};
  font-weight: ${fontWeight[t.heading18.fontWeight]};
`;

const heading16 = css`
  font-family: ${fontFamily[t.heading16.fontFamily]};
  font-size: ${fontSize[t.heading16.fontSize]};
  line-height: ${lineHeight[t.heading16.lineHeight]};
  font-weight: ${fontWeight[t.heading16.fontWeight]};
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
  font-size: ${fontSize[14]};
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
