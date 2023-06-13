import { css } from '@storybook/theming';
import {
  fontSize,
  fontWeight,
  fontFamily,
  color,
  lineHeight,
} from '../_tokens/tokens';
import { minSm } from './breakpointsMinMax';

export const heading4xl = css`
  font-family: ${fontFamily.sans};
  font-size: ${fontSize[36]};
  font-weight: ${fontWeight.semibold};
  color: ${color.slate800};

  ${minSm} {
    font-size: ${fontSize[56]};
  }
`;

export const heading3xl = css`
  font-family: ${fontFamily.sans};
  font-size: ${fontSize[36]};
  font-weight: ${fontWeight.semibold};
  color: ${color.slate800};

  ${minSm} {
    font-size: ${fontSize[48]};
  }
`;

export const heading2xl = css`
  font-family: ${fontFamily.sans};
  font-size: ${fontSize[30]};
  font-weight: ${fontWeight.semibold};
  color: ${color.slate800};

  ${minSm} {
    font-size: ${fontSize[36]};
  }
`;

export const headingXl = css`
  font-family: ${fontFamily.sans};
  font-size: ${fontSize[24]};
  font-weight: ${fontWeight.semibold};
  color: ${color.slate800};

  ${minSm} {
    font-size: ${fontSize[30]};
  }
`;

export const headingLg = css`
  font-family: ${fontFamily.sans};
  font-size: ${fontSize[24]};
  font-weight: ${fontWeight.semibold};
  color: ${color.slate800};

  ${minSm} {
    font-size: ${fontSize[24]};
  }
`;

export const headingMd = css`
  font-family: ${fontFamily.sans};
  font-size: ${fontSize[20]};
  font-weight: ${fontWeight.semibold};
  color: ${color.slate800};

  ${minSm} {
    font-size: ${fontSize[20]};
  }
`;

export const headingSm = css`
  font-family: ${fontFamily.sans};
  font-size: ${fontSize[18]};
  font-weight: ${fontWeight.semibold};
  color: ${color.slate800};

  ${minSm} {
    font-size: ${fontSize[18]};
  }
`;

export const headingXs = css`
  font-family: ${fontFamily.sans};
  font-size: ${fontSize[16]};
  font-weight: ${fontWeight.semibold};
  color: ${color.slate800};

  ${minSm} {
    font-size: ${fontSize[16]};
  }
`;

export const bodyLg = css`
  font-family: ${fontFamily.sans};
  font-size: ${fontSize[18]};
  font-weight: ${fontWeight.regular};
  color: ${color.slate800};

  ${minSm} {
    font-size: ${fontSize[18]};
  }
`;

export const bodyMd = css`
  font-family: ${fontFamily.sans};
  font-size: ${fontSize[16]};
  font-weight: ${fontWeight.regular};
  color: ${color.slate800};

  ${minSm} {
    font-size: ${fontSize[16]};
  }
`;

export const bodySm = css`
  font-family: ${fontFamily.sans};
  font-size: ${fontSize[14]};
  font-weight: ${fontWeight.regular};
  color: ${color.slate800};

  ${minSm} {
    font-size: ${fontSize[14]};
  }
`;

const heading56 = css`
  font-family: ${fontFamily.sans};
  font-size: ${fontSize[56]};
  line-height: ${lineHeight[70]};
  font-weight: ${fontWeight.semibold};
`;

const heading48 = css`
  font-family: ${fontFamily.sans};
  font-size: ${fontSize[48]};
  line-height: ${lineHeight[52]};
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
  body18,
  body16,
  body14,
  subheading,
};
