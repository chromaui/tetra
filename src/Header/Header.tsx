import React, { FC } from 'react';
import { HeaderProvider } from './context';
import { Container } from '../Container';
import { HeaderProps } from './types';

export const Header: FC<HeaderProps> = ({
  theme = 'light',
  logo,
  logoHeightDesktop,
  logoHeightMobile,
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
      logoHeightDesktop={logoHeightDesktop}
      logoHeightMobile={logoHeightMobile}
      logoHref={logoHref}
      desktopData={desktopData}
      desktopActive={desktopActive}
      desktopBreakpoint={desktopBreakpoint}
      desktopRight={desktopRight}
      mobileData={mobileData}
      mobileTop={mobileTop}
      mobileBottom={mobileBottom}
    >
      <Container>Hello World</Container>
    </HeaderProvider>
  );
};
