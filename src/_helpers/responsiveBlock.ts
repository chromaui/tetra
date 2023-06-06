import { styled } from '@storybook/theming';
import { spacing, breakpoint } from '../_tokens/tokens';
import { min2xl, minLg, minMd, minSm, minXl } from './breakpointsMinMax';

export interface ResponsiveObjTypes {
  base?: keyof typeof spacing;
  sm?: keyof typeof spacing;
  md?: keyof typeof spacing;
  lg?: keyof typeof spacing;
  xl?: keyof typeof spacing;
  '2xl'?: keyof typeof spacing;
}

export const getResponsiveValue = (
  value: keyof typeof spacing | ResponsiveObjTypes | undefined,
  breakP: keyof typeof breakpoint
) => {
  if ((value || value === 0) && typeof value === 'number')
    return spacing[value];
  if (value && typeof value === 'object') {
    if (breakP === 'base' && value.base) return spacing[value.base];
    if (breakP === 'sm') {
      if (value.sm) return spacing[value.sm];
      if (value.base) return spacing[value.base];
    }
    if (breakP === 'md') {
      if (value.md) return spacing[value.md];
      if (value.sm) return spacing[value.sm];
      if (value.base) return spacing[value.base];
    }
    if (breakP === 'lg') {
      if (value.lg) return spacing[value.lg];
      if (value.md) return spacing[value.md];
      if (value.sm) return spacing[value.sm];
      if (value.base) return spacing[value.base];
    }
    if (breakP === 'xl') {
      if (value.xl) return spacing[value.xl];
      if (value.lg) return spacing[value.lg];
      if (value.md) return spacing[value.md];
      if (value.sm) return spacing[value.sm];
      if (value.base) return spacing[value.base];
    }
    if (breakP === '2xl') {
      if (value['2xl']) return spacing[value['2xl']];
      if (value.xl) return spacing[value.xl];
      if (value.lg) return spacing[value.lg];
      if (value.md) return spacing[value.md];
      if (value.sm) return spacing[value.sm];
      if (value.base) return spacing[value.base];
    }
  }
  return spacing[0];
};

const singleOption = (key1: string, props: any, option: any) => ({
  [key1]: getResponsiveValue(props[option], 'base'),
  [minSm]: {
    [key1]: getResponsiveValue(props[option], 'sm'),
  },
  [minMd]: {
    [key1]: getResponsiveValue(props[option], 'md'),
  },
  [minLg]: {
    [key1]: getResponsiveValue(props[option], 'lg'),
  },
  [minXl]: {
    [key1]: getResponsiveValue(props[option], 'xl'),
  },
  [min2xl]: {
    [key1]: getResponsiveValue(props[option], '2xl'),
  },
});

const doubleOptions = (
  key1: string,
  key2: string,
  props: any,
  option: any
) => ({
  [key1]: getResponsiveValue(props[option], 'base'),
  [key2]: getResponsiveValue(props[option], 'base'),
  [minSm]: {
    [key1]: getResponsiveValue(props[option], 'sm'),
    [key2]: getResponsiveValue(props[option], 'sm'),
  },
  [minMd]: {
    [key1]: getResponsiveValue(props[option], 'md'),
    [key2]: getResponsiveValue(props[option], 'md'),
  },
  [minLg]: {
    [key1]: getResponsiveValue(props[option], 'lg'),
    [key2]: getResponsiveValue(props[option], 'lg'),
  },
  [minXl]: {
    [key1]: getResponsiveValue(props[option], 'xl'),
    [key2]: getResponsiveValue(props[option], 'xl'),
  },
  [min2xl]: {
    [key1]: getResponsiveValue(props[option], '2xl'),
    [key2]: getResponsiveValue(props[option], '2xl'),
  },
});

const getFullStyles = ({ array, props }: { array: any; props: any }) => {
  // eslint-disable-next-line array-callback-return, consistent-return
  return array.map((option: string) => {
    // Special Margins
    if (props[option] && option === 'marginX')
      return doubleOptions('margin-left', 'margin-right', props, option);
    if (props[option] && option === 'marginY')
      return doubleOptions('margin-top', 'margin-bottom', props, option);
    // Special Paddings
    if (props[option] && option === 'paddingX')
      return doubleOptions('padding-left', 'padding-right', props, option);
    if (props[option] && option === 'paddingY')
      return doubleOptions('padding-top', 'padding-bottom', props, option);
    // Margins
    if (props[option] && option === 'marginLeft')
      return singleOption('margin-left', props, option);
    if (props[option] && option === 'marginRight')
      return singleOption('margin-right', props, option);
    if (props[option] && option === 'marginTop')
      return singleOption('margin-top', props, option);
    if (props[option] && option === 'marginBottom')
      return singleOption('margin-bottom', props, option);
    // Paddings
    if (props[option] && option === 'paddingLeft')
      return singleOption('padding-left', props, option);
    if (props[option] && option === 'paddingRight')
      return singleOption('padding-right', props, option);
    if (props[option] && option === 'paddingTop')
      return singleOption('padding-top', props, option);
    if (props[option] && option === 'paddingBottom')
      return singleOption('padding-bottom', props, option);
  });
};

export interface OptionsProps {
  marginX?: keyof typeof spacing | ResponsiveObjTypes;
  marginY?: keyof typeof spacing | ResponsiveObjTypes;
  marginTop?: keyof typeof spacing | ResponsiveObjTypes;
  marginBottom?: keyof typeof spacing | ResponsiveObjTypes;
  marginLeft?: keyof typeof spacing | ResponsiveObjTypes;
  marginRight?: keyof typeof spacing | ResponsiveObjTypes;
  paddingX?: keyof typeof spacing | ResponsiveObjTypes;
  paddingY?: keyof typeof spacing | ResponsiveObjTypes;
  paddingTop?: keyof typeof spacing | ResponsiveObjTypes;
  paddingBottom?: keyof typeof spacing | ResponsiveObjTypes;
  paddingLeft?: keyof typeof spacing | ResponsiveObjTypes;
  paddingRight?: keyof typeof spacing | ResponsiveObjTypes;
}

export interface BlockWithOptionsProps extends OptionsProps {
  explicitListOfOptions?: (keyof OptionsProps)[];
}

const allOptions = [
  'marginX',
  'marginY',
  'marginTop',
  'marginBottom',
  'marginLeft',
  'marginRight',
  'paddingX',
  'paddingY',
  'paddingTop',
  'paddingBottom',
  'paddingLeft',
  'paddingRight',
] as const;

export const BlockWithOptions = styled.div<BlockWithOptionsProps>`
  ${(props) => getFullStyles({ array: allOptions, props })}
`;

// Create special containers that doesn't have marginX, marginLeft nor marginRight
// as the container is horizontally centered

const listOfOptions = [
  'marginY',
  'marginTop',
  'marginBottom',
  'paddingY',
  'paddingTop',
  'paddingBottom',
] as const;

type ListOfOptionsArrayProps = (typeof listOfOptions)[number];
export type BlockWithOptionsForContainerProps = Pick<
  BlockWithOptionsProps,
  ListOfOptionsArrayProps
>;

export const BlockWithOptionsForContainer = styled.div<BlockWithOptionsForContainerProps>`
  ${(props) => getFullStyles({ array: listOfOptions, props })}
`;
