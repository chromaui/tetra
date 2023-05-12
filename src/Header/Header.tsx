import React, { FC } from 'react';
import { HeaderProvider, useHeaderContext } from './context';
import { styled } from '@storybook/theming';
import { Logo } from '../Logo';
import { spacing } from '../_tokens';
import { Container } from '../Container';
import { NavDesktop } from './NavDesktop';
import { NavMobile } from './NavMobile';
import { useMediaQuery } from '../_hooks/useMediaQuery';
import { HeaderProps } from './types';
import { minSm } from '../_helpers';
import { LinkWithWrapper } from '../LinkWithWrapper';

interface WrapperProps {
  desktopBreakpoint?: HeaderProps['desktopBreakpoint'];
}

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  height: calc(60px - ${spacing[3]});
  padding-top: ${spacing[3]};
  align-items: center;
  justify-content: space-between;

  @media (min-width: ${({ desktopBreakpoint }) => desktopBreakpoint}px) {
    padding-top: 0;
    height: 120px;
  }
`;

const Left = styled.div`
  ${minSm} {
    display: flex;
    align-items: center;
    gap: ${spacing[6]};
  }
`;

const LogoLink = styled(LinkWithWrapper)`
  display: block;
  padding: ${spacing[2]};
  font-size: 0;
  border-radius: 6px;

  &:focus-visible {
    box-shadow: 0 0 0 2px rgba(30, 167, 253, 0.3);
    outline: none;
  }

  ${minSm} {
    margin-top: -4px;
  }
`;

const Right = styled.div`
  display: flex;
  gap: ${spacing[6]};
  align-items: center;
`;

export const Header: FC<HeaderProps> = ({
  theme = 'light',
  logo,
  logoHref,
  desktopData,
  mobileData,
  desktopBreakpoint,
  desktopRight,
  desktopActive,
  mobileBottom,
  mobileTop,
}) => {
  return (
    <HeaderProvider
      theme={theme}
      logo={logo}
      logoHref={logoHref}
      desktopData={desktopData}
      desktopActive={desktopActive}
      desktopBreakpoint={desktopBreakpoint}
      desktopRight={desktopRight}
      mobileData={mobileData}
      mobileTop={mobileTop}
      mobileBottom={mobileBottom}
    >
      <HeaderWithProvider />
    </HeaderProvider>
  );
};

const HeaderWithProvider: FC = () => {
  const { theme, desktopBreakpoint, logo, logoHref, desktopRight } =
    useHeaderContext();
  const isDesktop = useMediaQuery({ min: desktopBreakpoint || 1024 });

  return (
    <Container>
      <Wrapper desktopBreakpoint={desktopBreakpoint}>
        <Left>
          <LogoLink href={logoHref || '/'} aria-label="Home">
            <Logo name={logo || 'chromatic'} height={24} theme={theme} />
          </LogoLink>
          {isDesktop && <NavDesktop />}
        </Left>
        {isDesktop && <Right>{desktopRight}</Right>}
        {!isDesktop && <NavMobile />}
      </Wrapper>
    </Container>
  );
};
