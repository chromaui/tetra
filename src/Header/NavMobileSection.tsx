import styled from '@emotion/styled';
import React, { FC, useEffect, useRef, useState } from 'react';
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
  margin: ${spacing[4]} 10px;
`;

const NonCollapsibleTrigger = styled.div<{ spaced?: boolean }>`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  height: ${({ spaced }) => (spaced ? spacing[10] : spacing[8])};
  padding: ${({ spaced }) => (spaced ? spacing[2] : 0)} 10px 0;
  width: 100%;
  ${typography.subheading}
  line-height: 16px;
  color: ${color.slate600};
`;

const focusRing = `
  &:focus-visible {
    box-shadow: inset 0 0 0 2px ${color.blue500};
  }
`;

const CollapsibleTrigger = styled(Collapsible.Trigger)`
  all: unset;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${spacing[3]};
  height: ${spacing[8]};
  padding: 0 10px;
  border-radius: 6px;
  width: 100%;
  ${typography.subheading}
  line-height: 16px;
  color: ${color.slate600};
  cursor: pointer;

  &:hover,
  &:active {
    background-color: ${color.blue100};
  }

  &[data-state='open'] > .CaretDown {
    transform: rotate(-180deg) translateY(1px);
  }

  ${focusRing}
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

const CollapsibleInside = styled.div``;

const MoreTrigger = styled(Collapsible.Trigger)`
  all: unset;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: ${spacing[2]};
  padding: 0 10px 0 6px;
  width: 100%;
  height: ${spacing[8]};
  border-radius: 6px;
  ${typography.body14}
  line-height: 20px;
  /* Figma uses slate500 (#737F8C), which is 4.08:1 on white and fails
     WCAG AA for 14px text; slate600 passes. */
  color: ${color.slate600};
  cursor: pointer;

  &:hover,
  &:active {
    background-color: ${color.blue100};
  }

  &[data-state='open'] {
    display: none;
  }

  ${focusRing}
`;

const MoreIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
`;

const CaretDown = styled.div`
  position: relative;
  transform: translateY(1px);
  transition: transform 250ms ease;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const NavMobileSection: FC<Props> = ({ section, isLast }) => {
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const moreContentRef = useRef<HTMLDivElement>(null);

  // The "View all" button hides itself once pressed, so move focus to the
  // first revealed link instead of losing it.
  useEffect(() => {
    if (!moreOpen) return;
    moreContentRef.current?.querySelector<HTMLElement>('a')?.focus();
  }, [moreOpen]);
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
          iconBackground={item.iconBackground}
          title={item.title}
          href={item.href}
          linkWrapper={item.linkWrapper}
        />
      ))}
      {section.maxItems && listMore.length > 0 && (
        <Collapsible.Root open={moreOpen} onOpenChange={setMoreOpen}>
          <MoreTrigger>
            <MoreIcon aria-hidden="true">
              <Icon name="add" color="slate500" size={16} />
            </MoreIcon>
            {section.moreLabel || 'View more'}
          </MoreTrigger>
          <Collapsible.Content ref={moreContentRef}>
            {section.moreTitle && (
              <NonCollapsibleTrigger spaced>
                {section.moreTitle}
              </NonCollapsibleTrigger>
            )}
            {listMore.map((item) => (
              <NavMobileItem
                key={item.title}
                icon={item.icon}
                customIcon={item.customIcon}
                iconColor={item.iconColor}
                iconBackground={item.iconBackground}
                title={item.title}
                href={item.href}
                linkWrapper={item.linkWrapper}
              />
            ))}
          </Collapsible.Content>
        </Collapsible.Root>
      )}
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
          <CollapsibleInside>{content}</CollapsibleInside>
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
