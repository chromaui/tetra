import React from 'react';
import { styled, css } from '@storybook/theming';
import { Avatar } from '../Avatar';
import { minSm, typography } from '../_helpers';
import {
  color,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  spacing,
} from '../_tokens';

type TestimonialVariant = 'default' | 'left-aligned' | 'compact';

const Inner = styled.div<{ variant: TestimonialVariant; inverse?: boolean }>`
  display: flex;

  align-items: ${(props) =>
    props.variant !== 'default' ? 'flex-start' : 'center'};
  justify-content: center;
  flex-direction: column;

  ${(props) =>
    props.variant === 'left-aligned' &&
    css`
      border-left: 1px solid
        ${props.inverse ? color.whiteTr10 : color.blackTr10};
      padding-left: ${spacing[5]};

      ${minSm} {
        padding-left: ${spacing[10]};
      }
    `}
`;

const Quote = styled.blockquote<{
  inverse?: boolean;
  balanced?: boolean;
  variant: TestimonialVariant;
}>`
  ${(props) =>
    props.variant === 'compact'
      ? typography.body16
      : css`
          ${typography.body16};

          ${minSm} {
            ${typography.body20};
          }
        `};

  color: ${(props) => (props.inverse ? color.white : color.slate800)};
  margin-top: 0;
  margin-right: 0;
  margin-left: 0;
  margin-bottom: ${(props) =>
    props.variant === 'compact' ? spacing[4] : spacing[8]};

  ${(props) =>
    props.variant === 'default' &&
    css`
      max-width: 590px;
      text-align: center;
      margin-bottom: ${spacing[8]};
    `};

  ${(props) =>
    props.variant === 'compact' &&
    css`
      max-width: 590px;
      text-align: left;
      margin-bottom: ${spacing[4]};
    `};

  ${(props) =>
    props.variant === 'left-aligned' &&
    css`
      margin-bottom: ${spacing[4]};
    `}

  ${(props) =>
    props.balanced
      ? css`
          text-wrap: balance;
        `
      : ''}
`;

const Cite = styled.cite`
  display: flex;
  font-style: normal;
  align-items: stretch;
  flex-direction: row-reverse;

  ${minSm} {
    flex-direction: row;
  }
`;

const Meta = styled.div<{ variant: TestimonialVariant }>`
  ${(props) =>
    props.variant === 'left-aligned'
      ? css`
          margin-left: ${spacing[3]};
        `
      : css`
          ${minSm} {
            margin-left: ${spacing[3]};
          }
        `}
`;

const Author = styled.div`
  display: flex;
  align-items: center;
`;

const AuthorImage = styled(Avatar)<{ variant: TestimonialVariant }>`
  ${(props) =>
    props.variant !== 'left-aligned' &&
    css`
      display: none;

      ${minSm} {
        display: inline-block;
      }
    `};
`;

const Name = styled.div<{ inverse?: boolean; variant: TestimonialVariant }>`
  font-family: ${fontFamily.sans};
  font-size: ${fontSize[12]};
  line-height: 16px;
  font-weight: ${fontWeight.bold};
  color: ${(props) => (props.inverse ? color.white : color.slate800)};

  ${minSm} {
    ${typography.body14};
    font-weight: ${fontWeight.bold};
  }

  ${(props) =>
    props.variant === 'compact' &&
    css`
      font-size: ${fontSize[12]};
      line-height: 16px;
    `}
`;

const JobTitle = styled.div<{ variant: TestimonialVariant }>`
  font-family: ${fontFamily.sans};
  font-size: ${fontSize[12]};
  line-height: 18px;
  ${(props) =>
    props.variant === 'compact' &&
    css`
      font-size: ${fontSize[12]};
      line-height: 14px;
    `}
  color: ${color.slate500};
`;

const Logo = styled.div<{ inverse?: boolean; variant: TestimonialVariant }>`
  display: flex;
  align-items: center;
  border-right: 1px solid
    ${(props) => (props.inverse ? color.whiteTr10 : color.blackTr10)};
  margin-right: ${(props) =>
    props.variant === 'compact' ? spacing[5] : spacing[4]};
  padding-right: ${(props) =>
    props.variant === 'compact' ? spacing[5] : spacing[4]};

  ${minSm} {
    border-right: none;
    margin-right: 0;
    padding-right: 0;
    border-left: 1px solid
      ${(props) => (props.inverse ? color.whiteTr10 : color.blackTr10)};
    margin-left: ${(props) =>
      props.variant === 'compact' ? spacing[5] : spacing[12]};
    padding-left: ${(props) =>
      props.variant === 'compact' ? spacing[5] : spacing[12]};
  }

  img {
    display: block;
    width: auto;
    max-height: 40px;
    max-width: 120px;
  }

  ${(props) =>
    props.variant === 'compact' &&
    css`
      img {
        max-height: 28px;
        max-width: 80px;
      }
    `}

  ${(props) =>
    props.variant === 'left-aligned' &&
    css`
      display: none;
    `}
`;

interface TestimonialProps {
  text: React.ReactNode;
  avatarUrl: string;
  name: string;
  jobTitle: string;
  logo: string;
  variant?: TestimonialVariant;
  theme?: 'light' | 'dark';
  balanced?: boolean;
  companyName: string;
}

export const Testimonial = ({
  variant = 'default',
  theme = 'light',
  balanced,
  text,
  avatarUrl,
  name,
  jobTitle,
  logo,
  companyName,
  ...props
}: TestimonialProps) => {
  const inverse = theme === 'dark';
  return (
    <div {...props}>
      <Inner variant={variant} inverse={inverse}>
        <Quote variant={variant} inverse={inverse} balanced={balanced}>
          {text}
        </Quote>
        <Cite>
          <Author>
            <AuthorImage
              variant={variant}
              size={variant === 'compact' ? 'medium' : 'large'}
              username={name}
              src={avatarUrl}
            />
            <Meta variant={variant}>
              <Name variant={variant} inverse={inverse}>
                {name}
              </Name>
              <JobTitle variant={variant}>{jobTitle}</JobTitle>
            </Meta>
          </Author>
          <Logo variant={variant} inverse={inverse}>
            <img src={logo} alt={companyName} loading="lazy" />
          </Logo>
        </Cite>
      </Inner>
    </div>
  );
};
