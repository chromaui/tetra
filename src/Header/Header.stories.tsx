import React, { Meta, StoryObj } from '@storybook/react';

import { Header } from './Header';
import { Text } from '../Text';
import { FigmaIcon } from './icons/figma';
import { CollectiveIcon } from './icons/collective';
import { BBCIcon } from './icons/bbc';
import { MondayIcon } from './icons/monday';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Light: Story = {
  render: () => (
    <div style={{ backgroundColor: '#fff', width: '100vw', height: '100vh' }}>
      <Header
        navDesktop={
          <Header.Desktop>
            <Header.DesktopDropdown name="Features">
              <Header.DesktopColumn>
                <Text as="div">Hello World</Text>
                <Text as="div">Hello World</Text>
                <Text as="div">Hello World</Text>
                <Text as="div">Hello World</Text>
              </Header.DesktopColumn>
              <Header.DesktopColumn>
                <Text as="div">Hello World</Text>
                <Text as="div">Hello World</Text>
                <Text as="div">Hello World</Text>
                <Text as="div">Hello World</Text>
              </Header.DesktopColumn>
            </Header.DesktopDropdown>
            <Header.DesktopLink name="Pricing" href="" />
            <Header.DesktopDropdown name="Customers">
              <Header.DesktopColumn>
                <Text as="div">Hello World</Text>
                <Text as="div">Hello World</Text>
                <Text as="div">Hello World</Text>
                <Text as="div">Hello World</Text>
              </Header.DesktopColumn>
              <Header.DesktopColumn>
                <Text as="div">Hello World</Text>
                <Text as="div">Hello World</Text>
                <Text as="div">Hello World</Text>
                <Text as="div">Hello World</Text>
              </Header.DesktopColumn>
            </Header.DesktopDropdown>
            <Header.DesktopLink name="Docs" href="" />
            <Header.DesktopLink name="Changelog" href="" />
            <Header.DesktopDropdown name="Company">
              <Header.DesktopColumn>
                <Text as="div">Hello World</Text>
                <Text as="div">Hello World</Text>
                <Text as="div">Hello World</Text>
                <Text as="div">Hello World</Text>
              </Header.DesktopColumn>
            </Header.DesktopDropdown>
          </Header.Desktop>
        }
      />
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};

export const Dark: Story = {
  render: () => (
    <div
      style={{
        backgroundColor: '#171C23',
        width: '100vw',
        height: '100vh',
        paddingTop: '16px',
      }}
    >
      <Header
        theme="dark"
        navDesktop={
          <Header.Desktop>
            <Header.DesktopDropdown name="Features">
              <Header.DesktopColumn>
                <Header.DesktopItem
                  icon="contrast"
                  iconColor="teal500"
                  title="UI Tests"
                  description="Pinpoint UI bugs down to the pixel, viewport, and browser."
                />
                <Header.DesktopItem
                  icon="eye"
                  iconColor="purple500"
                  title="Visual Test"
                  description="Pinpoint UI bugs down to the pixel, viewport, and browser."
                />
                <Header.DesktopItem
                  icon="pointerhand"
                  iconColor="orange500"
                  title="Interaction Test"
                  description="Test user behavior like click, type, keyboard, and hover."
                />
                <Header.DesktopItem
                  icon="dashboard"
                  iconColor="blue500"
                  title="TurboSnap"
                  description="Track changed components to only test what's necessary."
                />
              </Header.DesktopColumn>
              <Header.DesktopColumn backgroundColor="blue50">
                <Header.DesktopItem
                  icon="batchaccept"
                  iconColor="orange500"
                  title="UI Review"
                  description="Streamline team sign-off and track change requests."
                />
                <Header.DesktopItem
                  customIcon={<FigmaIcon />}
                  title="Figma Plugin"
                  description="Embed your stories right next to designs in Figma."
                />
                <Header.DesktopItem
                  icon="globe"
                  iconColor="blue500"
                  title="Publish Storybook"
                  description="Pinpoint UI bugs down to the pixel, viewport, and browser."
                />
              </Header.DesktopColumn>
            </Header.DesktopDropdown>
            <Header.DesktopLink name="Pricing" href="" />
            <Header.DesktopDropdown name="Customers">
              <Header.DesktopColumn>
                <Header.DesktopItem
                  icon="grid"
                  iconColor="teal500"
                  title="Design Systems"
                  description="Pinpoint UI bugs down to the pixel, viewport, and browser."
                />
                <Header.DesktopItem
                  icon="browser"
                  iconColor="orange500"
                  title="Web Apps"
                  description="Test user behavior like click, type, keyboard, and hover."
                />
                <Header.DesktopItem
                  icon="grow"
                  iconColor="purple500"
                  title="Microfrontends"
                  description="Check for accessibility compliance and regressions."
                />
                <Header.DesktopItem
                  icon="component"
                  iconColor="blue500"
                  title="Component Libraries"
                  description="Track changed components to only test what's necessary."
                />
              </Header.DesktopColumn>
              <Header.DesktopColumn backgroundColor="blue50">
                <Header.DesktopItem
                  customIcon={<MondayIcon />}
                  title="monday.com"
                  description="How 300 developers speed up their frontend velocity."
                />
                <Header.DesktopItem
                  customIcon={<CollectiveIcon />}
                  title="Collective.work"
                  description="How a global business creates  personalized customer UX."
                />
                <Header.DesktopItem
                  customIcon={<BBCIcon />}
                  title="BBC"
                  description="How to build a new site for 400 million readers in 77 countries."
                />
              </Header.DesktopColumn>
            </Header.DesktopDropdown>
            <Header.DesktopLink name="Docs" href="" />
            <Header.DesktopLink name="Changelog" href="" />
            <Header.DesktopDropdown name="Company">
              <Header.DesktopColumn>
                <Header.DesktopItem
                  icon="chromatic"
                  iconColor="orange500"
                  title="About Chromatic"
                  description="Pinpoint UI bugs down to the pixel, viewport, and browser."
                />
                <Header.DesktopItem
                  icon="starhollow"
                  iconColor="blue500"
                  title="Blog"
                  description="Pinpoint UI bugs down to the pixel, viewport, and browser."
                />
                <Header.DesktopItem
                  icon="user"
                  iconColor="purple500"
                  title="Careers"
                  description="Pinpoint UI bugs down to the pixel, viewport, and browser."
                />
              </Header.DesktopColumn>
            </Header.DesktopDropdown>
          </Header.Desktop>
        }
      />
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};
