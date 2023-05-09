import React, { FC } from 'react';
import { color, spacing } from '../_tokens';

import { Container } from '../Container/Container';
import { Divider } from '../Divider/Divider';
import { minLg } from '../_helpers';
import { styled } from '@storybook/theming';

const HeroContainer = styled.div`
  align-items: center;
  border-bottom: 1px solid ${color.gray200};
  display: grid;
  gap: ${spacing[8]};
  grid-template-rows: repeat(3, auto);
  grid-template-columns: 1fr;
  min-width: 90vw;
  max-width: 100%;
  padding-bottom: ${spacing[6]};
  width: 100%;

  ${minLg} {
    align-items: stretch;
    grid-template-rows: 1fr;
    grid-template-columns: repeat(4, 1fr);
    padding-bottom: ${spacing[10]};
  }
  `;

  const HeroItem = styled.div`
  display: grid;
  grid-column: ${(props) => (props.position === 'first' ? '1 / span 1' : '1 / span 1')};
  grid-row: ${(props) => (props.position === 'first' ? '1' : '3')};
  grid-template-rows: ${(props) => (props.position === 'first' ? '280px' : spacing[20])};
  grid-template-columns: 1fr;
  margin: 0;
  padding: 0;
  position: relative;

  ${minLg} {
    grid-template-rows: 400px;
    grid-column: ${(props) => (props.position === 'first' ? '1 / span 3' : '4 / span 1')};
    grid-row: 1;
  }
`;

const HeroImage = styled.div`
  background-image: url(${(props) => props.imgPath});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 10px;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: ${(props) => (props.position === 'first' ? '100%' : spacing[20])};

  ${minLg} {
    width: 100%;
  }
`;

const HeroCaption = styled.div`
  border-bottom: ${(props) => (props.position === 'first' ? `1px solid ${color.gray200}` : '0')};
  grid-column: ${(props) => (props.position === 'first' ? '1 / span 1' : '1 / span 1')};
  grid-row: ${(props) => (props.position === 'first' ? '2' : '3')};
  padding-bottom: ${(props) => (props.position === 'first' ? `${spacing[6]}` : '0')};
  padding-left: ${(props) => (props.position === 'first' ? '0' : spacing[24])};

  ${minLg} {
    border-bottom: 0;
    grid-column: ${(props) => (props.position === 'first' ? '1 / span 3' : '4 / span 1')};
    grid-row: 2;
    padding-bottom: 0;
    padding-left: 0;
  }
`;

interface CustomerStoryHeroProps {
  items: [
    {
      imgPath: string;
      imgAlt: string;
      caption: React.ComponentType | string;
      position?: 'first' | 'last';
    }
  ];
}

export const CustomerStoryHero: FC<CustomerStoryHeroProps> = ({
  items,
  ...rest
}) => (
  <HeroContainer>
    {items.map((item, index) => {
      const { imgPath, imgAlt, caption, position } = item;

      return (
        <React.Fragment key="index">
          <HeroItem position={position}>
            <HeroImage position={position} imgPath={imgPath} role="img" aria-label={imgAlt} />
          </HeroItem>
          <HeroCaption position={position}>{caption}</HeroCaption>
        </React.Fragment>
      );
    })}
  </HeroContainer>
);
