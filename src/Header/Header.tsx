import React, { FC } from 'react';
import { styled } from '@storybook/theming';
import { HeaderProvider, useHeaderContext } from './context';
import { spacing } from '../_tokens';
import { Container } from '../Container';
import { NavDesktop } from './NavDesktop';
import { HeaderProps } from './types';
import { minSm } from '../_helpers';

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
      <HeaderWithProvider />
    </HeaderProvider>
  );
};

const HeaderWithProvider: FC = () => {
  const { desktopBreakpoint } = useHeaderContext();

  return (
    <Container>
      <Wrapper desktopBreakpoint={desktopBreakpoint}>
        <Left>
          <NavDesktop />
        </Left>
      </Wrapper>
    </Container>
  );
};
