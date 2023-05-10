import { styled } from '@storybook/theming';
import React, { FC, useState } from 'react';
import { color, spacing } from '../_tokens';
import { AnimatePresence, motion } from 'framer-motion';
import { Text } from '../Text';
import { NavMobileItem } from './NavMobileItem';
import { Icon } from '../Icon';
import { HeaderMobileGroup } from './types';
import * as Collapsible from '@radix-ui/react-collapsible';
import * as Accordion from '@radix-ui/react-accordion';
import { useHeaderContext } from './context';
import { slideDown, slideUp } from './styles';

interface Props {
  group: HeaderMobileGroup;
  isLast: boolean;
}

const NavItem = styled(motion.div)`
  border-bottom-width: 1px;
  border-bottom-style: solid;
`;

const AccordionHeader = styled(Accordion.Header)`
  all: unset;
  display: block;
`;

const AccordionTrigger = styled(Accordion.Trigger)`
  all: unset;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${spacing[8]};
  padding: 0 ${spacing[2]};
  border-radius: 6px;
  width: calc(100% - ${spacing[4]});

  &:focus {
    box-shadow: 0 0 0 2px rgba(30, 167, 253, 0.3);
  }
`;

const AccordionContent = styled(Accordion.Content)`
  overflow: hidden;
  padding: ${spacing[0.5]} ${spacing[0.5]};

  &[data-state='open'] {
    animation: ${slideDown} 300ms ease-out;
  }

  &[data-state='closed'] {
    animation: ${slideUp} 300ms ease-out;
  }
`;

const MoreTrigger = styled(Collapsible.Trigger)`
  all: unset;
  display: flex;
  align-items: center;
  gap: ${spacing[3]};
  padding: 0 ${spacing[2]};
  width: calc(100% - ${spacing[4]});
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
  const { mobileGroupOpen } = useHeaderContext();
  const [viewMoreOpen, setViewMoreOpen] = useState(false);
  const list = group.maxItems
    ? group.content.slice(0, group.maxItems)
    : group.content;
  const listMore = group.content.slice(group.maxItems);
  const isOpen = mobileGroupOpen.find((item) => item === group.name);

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
      {!group.hideHeader && (
        <AccordionHeader>
          <AccordionTrigger>
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
          </AccordionTrigger>
        </AccordionHeader>
      )}
      <AccordionContent>
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
              <motion.div
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
              </motion.div>
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
      </AccordionContent>
    </NavItem>
  );
};
