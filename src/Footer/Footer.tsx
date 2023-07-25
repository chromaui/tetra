import React from 'react';
import { styled } from '@storybook/theming';
import { minSm, typography } from '../_helpers';
import { color, spacing } from '../_tokens';
import footerData from './data';
import { LinkWithWrapper } from '../LinkWithWrapper';
import { Container } from '../Container';
import { Logo } from '../Logo';
import { Icon } from '../Icon';
import { HStack } from '../Stack';

const Columns = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: ${spacing[8]};
  margin-bottom: ${spacing[16]};
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
`;

const FooterLink = styled(LinkWithWrapper)<{ inverse?: boolean }>`
  ${typography.body14};
  text-decoration: none;
  display: block;
  color: ${({ inverse }) => (inverse ? color.white : color.slate800)};

  transition: transform 150ms ease-out, color 150ms ease-out;

  &:hover,
  &:focus-visible {
    cursor: pointer;
    transform: translateY(-1px);
  }
  &:active {
    transform: translateY(0);
  }
`;

const SocialLink = styled(LinkWithWrapper)<{ inverse?: boolean }>`
  display: block;
  padding: 10px;
  border-radius: 100%;
  border: 1px solid
    ${({ inverse }) => (inverse ? color.whiteTr10 : color.blackTr10)};

  transition: transform 150ms ease-out, color 150ms ease-out;

  &:hover,
  &:focus-visible {
    cursor: pointer;
    transform: translateY(-1px);
  }
  &:active {
    transform: translateY(0);
  }

  svg {
    display: block;
    fill: ${({ inverse }) => (inverse ? color.white : color.slate500)};
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
    padding-top: ${spacing[16]};
    padding-bottom: ${spacing[16]};
  }
`;

const BottomRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing[5]};
  justify-content: space-between;
`;

const Attribution = styled.div<{ inverse?: boolean }>`
  ${typography.body14};
  color: ${({ inverse }) => (inverse ? color.white : color.slate500)};
`;

interface FooterProps {
  text: React.ReactNode;
  avatarUrl: string;
  name: string;
  jobTitle: string;
  logo: string;
  inverse?: boolean;
  companyName?: string;
  compact: boolean;
}

export const Footer = ({
  inverse,
  text,
  avatarUrl,
  name,
  jobTitle,
  logo,
  companyName,
  compact,
  ...props
}: FooterProps) => (
  <FooterWrapper inverse={inverse} {...props}>
    <Container>
      <Columns>
        {footerData.map((column) => (
          <Column key={column.title}>
            <ColumnTitle inverse={inverse}>{column.title}</ColumnTitle>
            {column.links.map((link) => (
              <FooterLink inverse={inverse} key={link.title} href={link.href}>
                {link.title}
              </FooterLink>
            ))}
          </Column>
        ))}
      </Columns>
      <BottomRow>
        <HStack gap={5} align="center">
          <Logo name="chromatic" theme={inverse ? 'dark' : 'light'} />
          <Attribution inverse={inverse}>
            © Chroma Software Inc. By the maintainers of Storybook.
          </Attribution>
        </HStack>

        <HStack gap={4}>
          <SocialLink href="#">
            <Icon size={20} name="github" />
          </SocialLink>
          <SocialLink href="#">
            <Icon size={20} name="twitter" />
          </SocialLink>
          <SocialLink href="#">
            <Icon size={20} name="youtube" />
          </SocialLink>
        </HStack>
      </BottomRow>
    </Container>
  </FooterWrapper>
);
