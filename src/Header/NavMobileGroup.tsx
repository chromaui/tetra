import { styled } from '@storybook/theming';
import React, { FC, useState } from 'react';
import { color, spacing } from '../_tokens';
import { AnimatePresence, motion } from 'framer-motion';
import { Text } from '../Text';
import { NavMobileItem } from './NavMobileItem';
import { Icon } from '../Icon';
import { HeaderMobileGroup } from './types';
import * as Collapsible from '@radix-ui/react-collapsible';

interface Props {
  group: HeaderMobileGroup;
  isLast: boolean;
}

const NavItem = styled(motion.div)`
  border-bottom-width: 1px;
  border-bottom-style: solid;
`;

const ListTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${spacing[8]};
`;

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: ${spacing[1]};
`;

const MoreContainer = styled(motion.div)`
  /* overflow: hidden; */
`;

const MoreTrigger = styled(Collapsible.Trigger)`
  all: unset;
  display: flex;
  align-items: center;
  gap: ${spacing[3]};
  padding: 0 ${spacing[2]};
  margin-left: -${spacing[2]};
  width: 100%;
  height: ${spacing[8]};
  border-radius: 6px;

  &:focus {
    box-shadow: 0 0 0 2px rgba(30, 167, 253, 0.3);
  }
`;

const CaretDown = styled(motion.div)`
  position: relative;
  transform: translateY(2px);
  transition: transform 250ms ease;
`;

export const NavMobileGroup: FC<Props> = ({ group, isLast }) => {
  const [isOpen, setIsOpen] = useState(group.openByDefault || false);
  const [viewMoreOpen, setViewMoreOpen] = useState(false);
  const list = group.maxItems
    ? group.content.slice(0, group.maxItems)
    : group.content;
  const listMore = group.content.slice(group.maxItems);

  const close = () => {
    if (group.toggle !== false) {
      setIsOpen(!isOpen);
      setViewMoreOpen(false);
    }
  };

  return (
    <NavItem
      initial={false}
      animate={{
        marginBottom: isOpen ? (isLast ? 0 : 16) : 0,
        paddingBottom: isOpen ? (isLast ? 0 : 16) : 0,
        borderBottomColor: isOpen
          ? isLast
            ? color.white
            : color.gray200
          : color.white,
      }}
    >
      {group.name && (
        <ListTitleContainer onClick={close}>
          <Text variant="subheading" color="gray400">
            {group.name}
          </Text>
          {group.toggle !== false && (
            <CaretDown
              initial={false}
              animate={{ rotate: isOpen ? -180 : 0 }}
              transition={{
                duration: 0.12,
                ease: 'easeInOut',
              }}
            >
              <Icon name="arrowdown" aria-hidden size={12} color="gray400" />
            </CaretDown>
          )}
        </ListTitleContainer>
      )}
      <AnimatePresence initial={false}>
        {isOpen && (
          <Container
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
          >
            {list.map((item) => (
              <NavMobileItem
                key={item.title}
                icon={item.icon}
                customIcon={item.customIcon}
                iconColor={item.iconColor}
                title={item.title}
              />
            ))}
            <Collapsible.Root>
              <AnimatePresence initial={false}>
                {group.maxItems && !viewMoreOpen && (
                  <MoreContainer
                    onClick={() => setViewMoreOpen(true)}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    <MoreTrigger>
                      <Icon name="plus" color="gray400" size={16} />
                      <Text
                        as="div"
                        lineHeightAuto
                        color="gray400"
                        variant="bodySm"
                      >
                        View more
                      </Text>
                    </MoreTrigger>
                  </MoreContainer>
                )}
              </AnimatePresence>
              <Collapsible.Content>
                {listMore.map((item) => (
                  <NavMobileItem
                    key={item.title}
                    icon={item.icon}
                    customIcon={item.customIcon}
                    iconColor={item.iconColor}
                    title={item.title}
                  />
                ))}
              </Collapsible.Content>
            </Collapsible.Root>
          </Container>
        )}
      </AnimatePresence>
    </NavItem>
  );
};
