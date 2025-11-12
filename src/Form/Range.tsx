import styled from '@emotion/styled';
import { color, spacing } from '../_tokens';

export const Range = styled.input<{ inverse?: boolean }>`
  accent-color: ${({ inverse }) => (inverse ? color.blue400 : color.blue600)};
  width: 100%;
  margin: 0;
  padding: ${spacing[1]} 0;
  display: block;
`;
Range.defaultProps = {
  type: 'range',
};
