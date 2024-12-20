import React, { ElementType, useMemo } from 'react';
import styled from '@emotion/styled';
import { minSm, typography } from '../_helpers';
import { color, spacing } from '../_tokens';
import { LinkWithWrapper } from '../LinkWithWrapper';
import { Container } from '../Container';
import { Logo } from '../Logo';
import { Icon } from '../Icon';
import { HStack } from '../Stack';
import { createFooterColumns, footerSocialLinks } from './data';

const Columns = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: ${spacing[12]} ${spacing[8]};
  margin-bottom: ${spacing[12]};
  ${minSm} {
    margin-bottom: ${spacing[20]};
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${spacing[3]};
`;

const ColumnTitle = styled.div<{ inverse?: boolean }>`
  ${typography.subheadingLarge};
  color: ${({ inverse }) => (inverse ? color.white : color.slate500)};
  margin-bottom: ${spacing[1]};
  opacity: ${({ inverse }) => (inverse ? 0.5 : 1)};
`;

const FooterLink = styled(LinkWithWrapper, {
  shouldForwardProp: (propName) => propName !== 'inverse',
})<{ inverse?: boolean }>`
  ${typography.body14};
  text-decoration: none;
  display: block;
  color: ${({ inverse }) => (inverse ? color.white : color.slate800)};

  transition:
    transform 150ms ease-out,
    color 150ms ease-out;

  &:hover,
  &:focus-visible {
    cursor: pointer;
    transform: translateY(-1px);
  }
  &:active {
    transform: translateY(0);
  }
`;

const SocialLink = styled(LinkWithWrapper, {
  shouldForwardProp: (propName) => propName !== 'inverse',
})<{ inverse?: boolean }>`
  display: block;
  padding: 10px;
  border-radius: 100%;
  border-width: 1px;
  border-style: solid;

  border-color: ${({ inverse }) =>
    inverse ? color.whiteTr10 : color.blackTr10};

  transition: border-color 150ms ease-out;

  svg {
    display: block;
    fill: ${({ inverse }) => (inverse ? color.white : color.slate500)};
  }

  &:hover,
  &:focus-visible,
  &:active {
    outline: 0;
    border-color: ${({ inverse }) => (inverse ? color.white : color.slate500)};
  }
`;

const FooterWrapper = styled.footer<{ inverse?: boolean }>`
  background-color: ${({ inverse }) =>
    inverse ? color.slate900 : color.blue50};
  border-top: 1px solid
    ${({ inverse }) => (inverse ? color.whiteTr10 : color.blackTr10)};

  padding-top: ${spacing[12]};
  padding-bottom: ${spacing[12]};

  ${minSm} {
    padding-top: ${spacing[20]};
    padding-bottom: ${spacing[20]};
  }
`;

const BottomRow = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: ${spacing[5]};
  justify-content: space-between;
`;

const Colophon = styled(HStack)`
  flex-wrap: wrap;

  svg {
    flex: none;
    margin-top: -5px; //optical alignment for logo and colophon text
  }
`;

const ColophonText = styled.div<{ inverse?: boolean }>`
  ${typography.body14};
  color: ${({ inverse }) => (inverse ? color.white : color.slate500)};
  opacity: ${({ inverse }) => (inverse ? 0.5 : 1)};
`;

const HomeLink = styled(LinkWithWrapper)`
  display: block;
  transition:
    transform 150ms ease-out,
    color 150ms ease-out;

  svg {
    display: block;
  }

  &:hover,
  &:focus-visible {
    cursor: pointer;
    transform: translateY(-1px);
  }
  &:active {
    transform: translateY(0);
  }
`;

export interface FooterProps {
  theme: 'light' | 'dark';
  LinkWrapper: ElementType;
}

export const Footer = ({ theme, LinkWrapper, ...props }: FooterProps) => {
  const inverse = theme === 'dark';
  const columns = useMemo(
    () => createFooterColumns(LinkWrapper),
    [LinkWrapper]
  );

  return (
    <FooterWrapper inverse={inverse} {...props}>
      <Container>
        <Columns>
          {columns.map((column) => (
            <Column key={column.title}>
              <ColumnTitle inverse={inverse}>{column.title}</ColumnTitle>
              {column.links.map((link) => (
                <FooterLink inverse={inverse} key={link.title} {...link}>
                  {link.title}
                </FooterLink>
              ))}
            </Column>
          ))}
        </Columns>
        <BottomRow>
          <Colophon gap={5} align="center">
            <HomeLink href="/" LinkWrapper={LinkWrapper}>
              <Logo
                alt="Chromatic"
                name="chromatic"
                theme={inverse ? 'dark' : 'light'}
              />
            </HomeLink>
            <ColophonText inverse={inverse}>
              &copy; Chroma Software Inc. Made by the maintainers of Storybook.
            </ColophonText>
          </Colophon>
          <HStack gap={4}>
            {footerSocialLinks.map(({ title, icon, ...linkProps }) => (
              <SocialLink
                key={title}
                inverse={inverse}
                target="_blank"
                rel="noopener noreferrer"
                {...linkProps}
              >
                <Icon size={20} name={icon} aria-label={title} />
              </SocialLink>
            ))}
          </HStack>
        </BottomRow>
      </Container>
    </FooterWrapper>
  );
};
