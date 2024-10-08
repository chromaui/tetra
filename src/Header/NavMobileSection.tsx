import styled from '@emotion/styled';
import React, { FC, useState } from 'react';
import * as Collapsible from '@radix-ui/react-collapsible';
import { color, spacing } from '../_tokens';
import { NavMobileItem } from './NavMobileItem';
import { Icon } from '../Icon';
import { HeaderMobileSection } from './types';
import { slideDown, slideUp } from './styles';
import { typography } from '../_helpers';

interface Props {
  section: HeaderMobileSection;
  isLast: boolean;
}

const Divider = styled.div`
  height: 1px;
  background-color: ${color.slate300};
  margin: ${spacing[4]} ${spacing[2]};
  width: calc(100% - ${spacing[4]});
`;

const NonCollapsibleTrigger = styled.div`
  display: flex;
  align-items: center;
  height: ${spacing[8]};
  padding: 0 ${spacing[2]};
  width: calc(100% - 20px);
  margin-left: 2px;
  ${typography.subheading}
  color: ${color.slate500};
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
  ${typography.subheading}
  color: ${color.slate500};
  cursor: pointer;

  &[data-state='open'] > .CaretDown {
    transform: rotate(-180deg) translateY(1px);
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
  padding: ${spacing[0.5]} ${spacing[0.5]};
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
  ${typography.body14}
  color: ${color.slate500};
  cursor: pointer;

  &[data-state='open'] {
    display: none;
  }

  &:focus {
    box-shadow: 0 0 0 2px rgba(30, 167, 253, 0.3);
  }
`;

const CaretDown = styled.div`
  position: relative;
  transform: translateY(1px);
  transition: transform 250ms ease;
`;

export const NavMobileSection: FC<Props> = ({ section, isLast }) => {
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
          href={item.href}
          linkWrapper={item.linkWrapper}
        />
      ))}
      <Collapsible.Root>
        {section.maxItems && (
          <MoreTrigger>
            <Icon name="plus" color="slate500" size={16} aria-hidden />
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
              href={item.href}
              linkWrapper={item.linkWrapper}
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
          {section.name}
          <CaretDown className="CaretDown">
            <Icon name="arrowdown" aria-hidden size={12} color="slate500" />
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
        <NonCollapsibleTrigger>{section.name}</NonCollapsibleTrigger>
      )}
      {content}
      {!isLast && <Divider />}
    </>
  );
};
