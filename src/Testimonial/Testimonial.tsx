import React from 'react';
import { styled, css } from '@storybook/theming';
import { Avatar } from '../Avatar';
import { minSm, typography } from '../_helpers';
import { color, fontSize, fontWeight, spacing } from '../_tokens';

type TestimonialVariant = 'default' | 'left-aligned' | 'compact';

const Inner = styled.div<{ variant: TestimonialVariant; inverse?: boolean }>`
  display: flex;

  align-items: ${(props) =>
    props.variant !== 'default' ? 'flex-start' : 'center'};
  justify-content: center;
  flex-direction: column;

  ${(props) =>
    props.variant === 'default' &&
    css`
      padding-top: ${spacing[12]};
      padding-bottom: ${spacing[12]};

      ${minSm} {
        padding-top: ${spacing[28]};
        padding-bottom: ${spacing[28]};
      }
    `}

  ${(props) =>
    props.variant === 'left-aligned' &&
    css`
      border-left: 1px solid
        ${props.inverse ? color.whiteTr10 : color.blackTr10};
      padding-left: ${spacing[10]};
    `}
`;

const Quote = styled.blockquote<{
  inverse?: boolean;
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
`;

const Cite = styled.cite`
  display: flex;
  align-items: stretch;
  font-style: normal;
`;

const Meta = styled.div`
  margin-left: ${spacing[3]};
`;

const Author = styled.div`
  display: flex;
  align-items: center;
`;

const Name = styled.div<{ inverse?: boolean; variant: TestimonialVariant }>`
  ${typography.body14};
  ${(props) =>
    props.variant === 'compact' &&
    css`
      font-size: ${fontSize[12]};
      line-height: 16px;
    `}
  font-weight: ${fontWeight.bold};
  color: ${(props) => (props.inverse ? color.white : color.slate800)};
`;

const JobTitle = styled.div<{ variant: TestimonialVariant }>`
  ${typography.body14};
  ${(props) =>
    props.variant === 'compact' &&
    css`
      font-size: ${fontSize[12]};
      line-height: 14px;
    `}
  color: ${color.slate500};
`;

const Logo = styled.div<{ inverse?: boolean; variant: TestimonialVariant }>`
  border-left: 1px solid
    ${(props) => (props.inverse ? color.whiteTr10 : color.blackTr10)};
  margin-left: 20px;
  padding-left: 20px;
  display: flex;
  align-items: center;

  ${minSm} {
    margin-left: ${(props) =>
      props.variant === 'compact' ? spacing[5] : spacing[12]};
    padding-left: ${(props) =>
      props.variant === 'compact' ? spacing[5] : spacing[12]};
  }

  img {
    display: block;
    width: auto;
    max-height: 40px;
  }

  ${(props) =>
    props.variant === 'compact' &&
    css`
      img {
        max-height: 28px;
        max-width: 80px;
      }
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
  companyName?: string;
}

export const Testimonial = ({
  variant = 'default',
  theme = 'light',
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
        <Quote variant={variant} inverse={inverse}>
          {text}
        </Quote>
        <Cite>
          <Author>
            <Avatar
              size={variant === 'compact' ? 'medium' : 'large'}
              username={name}
              src={avatarUrl}
            />
            <Meta>
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
