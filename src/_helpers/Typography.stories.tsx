import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import styled from '@emotion/styled';
import { color } from '../_tokens/tokens';
import { typography, t, type ListTypes } from './typography';

const Page = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 24px 0;
`;

const Specimen = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${color.slate200};
`;

const Caption = styled.div`
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  font-size: 12px;
  color: ${color.slate700};
`;

type SpecimenKey = keyof typeof typography;

const sample = 'Sphinx of black quartz, judge my vow.';

const Line = styled.div<{ variant: SpecimenKey }>`
  ${({ variant }) => typography[variant]}
`;

const Sample: React.FC<{
  variant: SpecimenKey;
  children?: React.ReactNode;
}> = ({ variant, children }) => {
  const meta = (t as Record<string, (typeof t)[ListTypes] | undefined>)[
    variant
  ];

  return (
    <Specimen>
      <Caption>
        typography.{variant}
        {meta
          ? ` — ${meta.fontSize}px / ${meta.lineHeight}px / ${meta.fontWeight}`
          : ' — css helper only (not in `t`)'}
      </Caption>
      <Line variant={variant}>{children ?? sample}</Line>
    </Specimen>
  );
};

const headings: SpecimenKey[] = [
  'heading56',
  'heading48',
  'heading40',
  'heading36',
  'heading30',
  'heading24',
  'heading20',
  'heading18',
  'heading16',
];

const body: SpecimenKey[] = ['body20', 'body18', 'body16', 'body14'];

const subheadings: SpecimenKey[] = ['subheadingLarge', 'subheading'];

const meta = {
  title: 'Typography/Helpers',
  parameters: {
    docs: {
      description: {
        component: [
          'Visual reference for the exports of `src/_helpers/typography.ts`.',
          '',
          '- `typography` — Emotion `css` helpers for use inside any `styled` component (`${typography.heading24}`).',
          '- `t` — Plain-data lookup of font-size, line-height, font-weight, and font-family per variant. Drives the `Text` component.',
          '- `ListTypes` — Union of variant names available on `t`.',
          '',
          'Note: `subheading` and `subheadingLarge` are exposed as CSS helpers on `typography` only and are not part of `t` / `ListTypes`.',
        ].join('\n'),
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Headings: Story = {
  render: () => (
    <Page>
      {headings.map((key) => (
        <Sample key={key} variant={key} />
      ))}
    </Page>
  ),
};

export const Body: Story = {
  render: () => (
    <Page>
      {body.map((key) => (
        <Sample key={key} variant={key} />
      ))}
    </Page>
  ),
};

export const Subheadings: Story = {
  render: () => (
    <Page>
      {subheadings.map((key) => (
        <Sample key={key} variant={key}>
          Section label
        </Sample>
      ))}
    </Page>
  ),
};

export const All: Story = {
  name: 'All helpers',
  render: () => (
    <Page>
      {(Object.keys(typography) as SpecimenKey[]).map((key) => (
        <Sample key={key} variant={key} />
      ))}
    </Page>
  ),
};
