import { styled } from '@storybook/theming';
import React, { FC, useState } from 'react';
import { color, spacing } from '../_tokens';
import { Text } from '../Text';
import { NavMobileItem } from './NavMobileItem';
import { Icon } from '../Icon';
import { HeaderMobileGroup } from './types';
import * as Collapsible from '@radix-ui/react-collapsible';
import { slideDown, slideUp } from './styles';
import { bodySm } from '../_helpers';

interface Props {
  section: HeaderMobileGroup;
  isLast: boolean;
}

const Divider = styled.div`
  height: 1px;
  background-color: ${color.gray200};
  margin: ${spacing[4]} ${spacing[3]};
  width: calc(100% - ${spacing[6]});
`;

const NonCollapsibleTrigger = styled.div`
  display: flex;
  align-items: center;
  height: ${spacing[8]};
  padding: 0 ${spacing[2]};
  width: calc(100% - 20px);
  margin-left: 2px;
`;

const CollapsibleTrigger = styled(Collapsible.Trigger)`
  all: unset;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${spacing[8]};
  padding: 0 ${spacing[2]};
  border-radius: 6px;
  width: calc(100% - 20px);
  margin-left: 2px;

  &[data-state='open'] > .CaretDown {
    transform: rotate(-180deg) translateY(0px);
  }

  &:focus {
    box-shadow: 0 0 0 2px rgba(30, 167, 253, 0.3);
  }
`;

const CollapsibleContent = styled(Collapsible.Content)`
  overflow: hidden;

  &[data-state='open'] {
    animation: ${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1);
  }

  &[data-state='closed'] {
    animation: ${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1);
  }
`;

const CollapsibleInside = styled.div`
  padding: ${spacing[0.5]} 0;
`;

const MoreTrigger = styled(Collapsible.Trigger)`
  all: unset;
  display: flex;
  align-items: center;
  gap: ${spacing[3]};
  padding: 0 ${spacing[2]};
  width: calc(100% - 20px);
  margin-left: 2px;
  height: ${spacing[8]};
  border-radius: 6px;
  ${bodySm}
  color: ${color.gray400};

  &[data-state='open'] {
    display: none;
  }

  &:focus {
    box-shadow: 0 0 0 2px rgba(30, 167, 253, 0.3);
  }
`;

const CaretDown = styled.div`
  position: relative;
  transform: translateY(2px);
  transition: transform 250ms ease;
`;

export const NavMobileSection: FC<Props> = ({ section, isLast }) => {
  const [viewMoreOpen, setViewMoreOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const list = section.maxItems
    ? section.content.slice(0, section.maxItems)
    : section.content;
  const listMore = section.content.slice(section.maxItems);

  const content = (
    <>
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
        {section.maxItems && !viewMoreOpen && (
          <MoreTrigger>
            <Icon name="plus" color="gray400" size={16} />
            View more
          </MoreTrigger>
        )}
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
    </>
  );

  if (section.collapsible)
    return (
      <Collapsible.Root open={open} onOpenChange={setOpen}>
        <CollapsibleTrigger>
          <Text variant="subheading" color="gray400">
            {section.name}
          </Text>
          <CaretDown className="CaretDown">
            <Icon name="arrowdown" aria-hidden size={12} color="gray400" />
          </CaretDown>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <CollapsibleInside>
            {content}
            {!isLast && <Divider />}
          </CollapsibleInside>
        </CollapsibleContent>
      </Collapsible.Root>
    );

  return (
    <>
      {section.name && (
        <NonCollapsibleTrigger>
          <Text variant="subheading" color="gray400">
            {section.name}
          </Text>
        </NonCollapsibleTrigger>
      )}
      {content}
      {!isLast && <Divider />}
    </>
  );
};
