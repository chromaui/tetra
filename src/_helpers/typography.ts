import { css } from '@storybook/theming';
import {
  fontSize,
  lineHeight,
  fontWeight,
  fontFamily,
  color,
} from '../_tokens/tokens';
import { minSm } from './helpers';

export const heading4xl = css`
  font-family: ${fontFamily.sans};
  font-size: ${fontSize[36]};
  font-weight: ${fontWeight.semibold};
  color: ${color.gray800};

  ${minSm} {
    font-size: ${fontSize[60]};
  }
`;

export const heading3xl = css`
  font-family: ${fontFamily.sans};
  font-size: ${fontSize[36]};
  font-weight: ${fontWeight.semibold};
  color: ${color.gray800};

  ${minSm} {
    font-size: ${fontSize[48]};
  }
`;

export const heading2xl = css`
  font-family: ${fontFamily.sans};
  font-size: ${fontSize[30]};
  font-weight: ${fontWeight.semibold};
  color: ${color.gray800};

  ${minSm} {
    font-size: ${fontSize[36]};
  }
`;

export const headingXl = css`
  font-family: ${fontFamily.sans};
  font-size: ${fontSize[24]};
  font-weight: ${fontWeight.semibold};
  color: ${color.gray800};

  ${minSm} {
    font-size: ${fontSize[30]};
  }
`;

export const headingLg = css`
  font-family: ${fontFamily.sans};
  font-size: ${fontSize[24]};
  font-weight: ${fontWeight.semibold};
  color: ${color.gray800};

  ${minSm} {
    font-size: ${fontSize[24]};
  }
`;

export const headingMd = css`
  font-family: ${fontFamily.sans};
  font-size: ${fontSize[20]};
  font-weight: ${fontWeight.semibold};
  color: ${color.gray800};

  ${minSm} {
    font-size: ${fontSize[20]};
  }
`;

export const headingSm = css`
  font-family: ${fontFamily.sans};
  font-size: ${fontSize[18]};
  font-weight: ${fontWeight.semibold};
  color: ${color.gray800};

  ${minSm} {
    font-size: ${fontSize[18]};
  }
`;

export const headingXs = css`
  font-family: ${fontFamily.sans};
  font-size: ${fontSize[16]};
  font-weight: ${fontWeight.semibold};
  color: ${color.gray800};

  ${minSm} {
    font-size: ${fontSize[16]};
  }
`;

export const bodyLg = css`
  font-family: ${fontFamily.sans};
  font-size: ${fontSize[18]};
  font-weight: ${fontWeight.regular};
  color: ${color.gray800};

  ${minSm} {
    font-size: ${fontSize[18]};
  }
`;

export const bodyMd = css`
  font-family: ${fontFamily.sans};
  font-size: ${fontSize[16]};
  font-weight: ${fontWeight.regular};
  color: ${color.gray800};

  ${minSm} {
    font-size: ${fontSize[16]};
  }
`;

export const bodySm = css`
  font-family: ${fontFamily.sans};
  font-size: ${fontSize[14]};
  font-weight: ${fontWeight.regular};
  color: ${color.gray800};

  ${minSm} {
    font-size: ${fontSize[14]};
  }
`;

export const subheading = css`
  font-family: ${fontFamily.sans};
  font-size: ${fontSize[11]};
  font-weight: ${fontWeight.bold};
  letter-spacing: 0.35em;
  text-transform: uppercase;
  color: ${color.gray800};
`;
