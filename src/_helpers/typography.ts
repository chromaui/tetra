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
    font-size: ${fontSize[60]};
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

export const heading36 = css`
  font-family: ${fontFamily.sans};
  font-size: ${fontSize[36]};
  line-height: ${lineHeight[44]};
  font-weight: ${fontWeight.semibold};
`;

export const heading30 = css`
  font-family: ${fontFamily.sans};
  font-size: ${fontSize[30]};
  line-height: ${lineHeight[38]};
  font-weight: ${fontWeight.semibold};
`;

export const heading24 = css`
  font-family: ${fontFamily.sans};
  font-size: ${fontSize[24]};
  line-height: ${lineHeight[32]};
  font-weight: ${fontWeight.semibold};
`;

export const heading20 = css`
  font-family: ${fontFamily.sans};
  font-size: ${fontSize[20]};
  line-height: ${lineHeight[32]};
  font-weight: ${fontWeight.semibold};
`;

export const heading18 = css`
  font-family: ${fontFamily.sans};
  font-size: ${fontSize[18]};
  line-height: ${lineHeight[28]};
  font-weight: ${fontWeight.semibold};
`;

export const heading16 = css`
  font-family: ${fontFamily.sans};
  font-size: ${fontSize[16]};
  line-height: ${lineHeight[24]};
  font-weight: ${fontWeight.semibold};
`;

export const body18 = css`
  font-family: ${fontFamily.sans};
  font-size: ${fontSize[18]};
  line-height: ${lineHeight[28]};
  font-weight: ${fontWeight.regular};
`;

export const body16 = css`
  font-family: ${fontFamily.sans};
  font-size: ${fontSize[16]};
  line-height: ${lineHeight[24]};
  font-weight: ${fontWeight.regular};
`;

export const body14 = css`
  font-family: ${fontFamily.sans};
  font-size: ${fontSize[14]};
  line-height: ${lineHeight[20]};
  font-weight: ${fontWeight.regular};
`;

export const subheading = css`
  font-family: ${fontFamily.sans};
  font-size: ${fontSize[11]};
  font-weight: ${fontWeight.bold};
  letter-spacing: 0.35em;
  text-transform: uppercase;
  color: ${color.slate800};
`;
