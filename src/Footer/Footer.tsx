import React, { ElementType, useMemo } from 'react';
import styled from '@emotion/styled';
import { minLg, minMd, minSm, typography } from '../_helpers';
import { color, lineHeight, spacing } from '../_tokens';
import { LinkWithWrapper } from '../LinkWithWrapper';
import { Container } from '../Container';
import { Logo } from '../Logo';
import { Icon } from '../Icon';
import { HStack } from '../Stack';
import { createFooterColumns, footerSocialLinks } from './data';

// Focus ring colour for each footer theme. Both pass WCAG AA against their
// footer background (see Footer.stories.tsx). Hover keeps the 3.5.0 footer
// behaviour: links lift by 1px, social icons darken their border.
const accent = (inverse?: boolean) => (inverse ? color.blue300 : color.blue700);

const focusRing = (inverse?: boolean) => `
  outline: 2px solid ${accent(inverse)};
  outline-offset: 2px;
`;

const Directory = styled.nav`
  margin-bottom: ${spacing[12]};

  ${minLg} {
    margin-bottom: 4.5rem; // 72px
  }
`;

// The longest labels ("Code UI with fewer tokens", "Frontend workflow for
// AI") need about 166px. Step up a column only once every column has room
// for them on one line: one column on phones, two from sm, three from md.
const Columns = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: ${spacing[10]};

  ${minSm} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  ${minMd} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  // Size the five desktop columns to their content so long labels stay on
  // one line, and spread the spare width between them as in the design.
  ${minLg} {
    grid-template-columns: repeat(5, max-content);
    justify-content: space-between;
    column-gap: ${spacing[6]};
  }
`;

const Column = styled.div`
  min-width: 0;
`;

const ColumnTitle = styled.h2<{ inverse?: boolean }>`
  ${typography.subheadingLarge};
  line-height: ${lineHeight[20]};
  letter-spacing: 0.2em;
  color: ${({ inverse }) => (inverse ? color.white : color.slate600)};
  opacity: ${({ inverse }) => (inverse ? 0.5 : 1)};
  margin: 0 0 ${spacing[2]};

  ${minSm} {
    letter-spacing: 0.38em;
  }
`;

const LinkList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const FooterLink = styled(LinkWithWrapper, {
  shouldForwardProp: (propName) => propName !== 'inverse',
})<{ inverse?: boolean }>`
  ${typography.body14};
  display: inline-block;
  padding: 6px 0;
  text-decoration: none;
  overflow-wrap: anywhere;
  border-radius: 2px;
  color: ${({ inverse }) => (inverse ? color.white : color.slate800)};
  transition:
    transform 150ms ease-out,
    color 150ms ease-out;

  &:hover {
    cursor: pointer;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  &:focus-visible {
    ${({ inverse }) => focusRing(inverse)};
    color: ${({ inverse }) => accent(inverse)};
  }
`;

const SocialLink = styled(LinkWithWrapper, {
  shouldForwardProp: (propName) => propName !== 'inverse',
})<{ inverse?: boolean }>`
  display: block;
  padding: 9px;
  border-radius: 100%;
  border-width: 1px;
  border-style: solid;
  color: ${({ inverse }) => (inverse ? color.white : color.slate500)};
  border-color: ${({ inverse }) =>
    inverse ? color.whiteTr10 : color.blackTr10};

  transition:
    border-color 150ms ease-out,
    color 150ms ease-out;

  svg {
    display: block;
  }

  &:hover,
  &:active {
    border-color: ${({ inverse }) => (inverse ? color.white : color.slate500)};
  }

  &:focus-visible {
    ${({ inverse }) => focusRing(inverse)};
    color: ${({ inverse }) => accent(inverse)};
    border-color: ${({ inverse }) => accent(inverse)};
  }
`;

const FooterWrapper = styled.footer<{ inverse?: boolean }>`
  background-color: ${({ inverse }) =>
    inverse ? color.slate900 : color.blue50};
  border-top: 1px solid
    ${({ inverse }) => (inverse ? color.whiteTr10 : color.blackTr10)};

  padding-top: ${spacing[12]};
  padding-bottom: ${spacing[12]};

  ${minLg} {
    padding-top: 4.5rem; // 72px
    padding-bottom: 4.5rem;
  }
`;

const SocialList = styled.ul`
  display: flex;
  gap: 15px;
  list-style: none;
  margin: 0;
  padding: 0;
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
  color: ${({ inverse }) => (inverse ? color.white : color.slate600)};
  opacity: ${({ inverse }) => (inverse ? 0.5 : 1)};
`;

const HomeLink = styled(LinkWithWrapper, {
  shouldForwardProp: (propName) => propName !== 'inverse',
})<{ inverse?: boolean }>`
  display: block;
  border-radius: 2px;
  transition: transform 150ms ease-out;

  svg {
    display: block;
  }

  &:hover {
    cursor: pointer;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  &:focus-visible {
    ${({ inverse }) => focusRing(inverse)};
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
        <Directory aria-label="Footer">
          <Columns>
            {columns.map((column) => {
              const headingId = `footer-${column.title
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')}`;
              return (
                <Column key={column.title}>
                  <ColumnTitle inverse={inverse} id={headingId}>
                    {column.title}
                  </ColumnTitle>
                  <LinkList aria-labelledby={headingId}>
                    {column.links.map(({ title, ...linkProps }) => (
                      <li key={linkProps.href}>
                        <FooterLink inverse={inverse} {...linkProps}>
                          {title}
                        </FooterLink>
                      </li>
                    ))}
                  </LinkList>
                </Column>
              );
            })}
          </Columns>
        </Directory>
        <BottomRow>
          <Colophon gap={5} align="center">
            <HomeLink
              href="/"
              LinkWrapper={LinkWrapper}
              inverse={inverse}
              aria-label="Chromatic home"
            >
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
          <SocialList>
            {footerSocialLinks.map(({ title, icon, ...linkProps }) => (
              <li key={title}>
                <SocialLink
                  inverse={inverse}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Chromatic on ${title}`}
                  {...linkProps}
                >
                  <Icon size={20} name={icon} aria-hidden="true" />
                </SocialLink>
              </li>
            ))}
          </SocialList>
        </BottomRow>
      </Container>
    </FooterWrapper>
  );
};
