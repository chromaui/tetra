import { styled } from '@storybook/theming';
import React, { FC, useState } from 'react';
import { color, spacing } from '../_tokens';
import { AnimatePresence, motion } from 'framer-motion';
import { Text } from '../Text';
import { NavMobileItem } from './NavMobileItem';
import { Icon } from '../Icon';
import { HeaderMobileGroup } from './types';

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
  overflow: hidden;
`;

const MoreContainer = styled(motion.div)`
  overflow: hidden;
`;

const More = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing[3]};
  margin-top: ${spacing[2]};
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
            <AnimatePresence initial={false}>
              {group.maxItems && !viewMoreOpen && (
                <MoreContainer
                  onClick={() => setViewMoreOpen(true)}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  <More>
                    <Icon name="plus" color="gray400" size={16} />
                    <Text
                      as="div"
                      lineHeightAuto
                      color="gray400"
                      variant="bodySm"
                    >
                      View more
                    </Text>
                  </More>
                </MoreContainer>
              )}
            </AnimatePresence>
            <AnimatePresence initial={false}>
              {group.maxItems && viewMoreOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  {listMore.map((item) => (
                    <NavMobileItem
                      key={item.title}
                      icon={item.icon}
                      customIcon={item.customIcon}
                      iconColor={item.iconColor}
                      title={item.title}
                    />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </Container>
        )}
      </AnimatePresence>
    </NavItem>
  );
};
