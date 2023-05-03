import { styled } from '@storybook/theming';
import React, { FC } from 'react';
import { spacing } from '../_tokens';
import { useHeaderContext } from './HeaderContext';
import { NavDesktopContent } from './NavDesktopContent';
import { NavDesktopLink } from './NavDesktopLink';

const NavigationMenu = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  z-index: 1;
`;

const List = styled.div`
  display: flex;
  gap: ${spacing[1]};
  justify-content: center;
  padding: 0;
  border-radius: 6px;
  list-style: none;
  margin: 0;
`;

export const NavMobile: FC = () => {
  const { navDesktop, active, setActive } = useHeaderContext();

  return (
    <NavigationMenu onMouseLeave={() => setActive('')}>
      {/* <List>
        {navDesktop &&
          navDesktop.map((item) => (
            <NavDesktopLink
              isActive={active === item.name}
              name={item.name}
              isMenu={!!item.menu}
              key={item.name}
              onMouseEnter={() =>
                item.menu ? setActive(item.name) : setActive('')
              }
            />
          ))}
        ;
      </List>
      <NavDesktopContent /> */}
    </NavigationMenu>
  );
};
