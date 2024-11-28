import styled from '@emotion/styled';
import React, { FC, useMemo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import * as Popover from '@radix-ui/react-popover';
import { color, spacing } from '../_tokens';
import { useHeaderContext } from './context';
import { minSm } from '../_helpers';
import { NavMobileTrigger } from './NavMobileTrigger';
import { NavMobileSection } from './NavMobileSection';
import { resetCSS } from '../_localHelpers/resetCSS';
import { createMobileMenu, HeaderLinks } from './data';

const NavigationMenu = styled(motion.div)`
  ${resetCSS}

  position: relative;
  background-color: ${color.white};
  box-shadow:
    hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  border-radius: 6px;
  margin-top: ${spacing[2]};
  min-width: calc(100vw - 32px);
  margin-left: ${spacing[4]};
  margin-right: ${spacing[4]};
  padding: 12px;
  z-index: 100;

  ${minSm} {
    margin-right: ${spacing[12]};
    min-width: 320px;
  }
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${spacing[5]} ${spacing[5]} 0;
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${spacing[3]} ${spacing[2]} ${spacing[3]} ${spacing[2]};
`;

interface NavMobileProps {
  links: HeaderLinks;
}

export const NavMobile = ({ links }: NavMobileProps) => {
  const { mobileMenuOpen, mobileTop, mobileBottom, setMobileMenuOpen } =
    useHeaderContext();

  const mobileLinks = useMemo(() => createMobileMenu(links), [links]);

  return (
    <Popover.Root open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
      <NavMobileTrigger />
      <AnimatePresence>
        {mobileMenuOpen && (
          <Popover.Portal forceMount>
            <Popover.Content
              asChild
              aria-label="Menu"
              onOpenAutoFocus={(e) => e.preventDefault()}
            >
              <NavigationMenu
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ ease: 'easeOut', duration: 0.14 }}
              >
                {mobileTop && <Top>{mobileTop}</Top>}
                {mobileLinks &&
                  mobileLinks.map((section, i) => {
                    const index = mobileLinks.indexOf(section);
                    const isLast = index === mobileLinks.length - 1;

                    return (
                      <NavMobileSection
                        key={i}
                        section={section}
                        isLast={isLast}
                      />
                    );
                  })}
                {mobileBottom && <Bottom>{mobileBottom}</Bottom>}
              </NavigationMenu>
            </Popover.Content>
          </Popover.Portal>
        )}
      </AnimatePresence>
    </Popover.Root>
  );
};
