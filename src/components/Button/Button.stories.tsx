import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Primary',
    variant: 'primary',
    useGradient: true, 
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    variant: 'secondary',
  },
};

export const Tertiary: Story = {
  args: {
    children: 'Tertiary',
    variant: 'tertiary',
  },
};

export const Ghost: Story = {
  args: {
    children: 'Ghost',
    variant: 'ghost',
  },
};

export const Danger: Story = {
  args: {
    children: 'Delete',
    variant: 'danger',
  },
};

export const Warning: Story = {
  args: {
    children: 'Caution',
    variant: 'warning',
  },
};

export const Success: Story = {
  args: {
    children: 'Success',
    variant: 'success',
  },
};

// Optional: add a disabled example
export const Disabled: Story = {
  args: {
    children: 'Disabled',
    variant: 'primary',
    disabled: true,
  },
};

export const Gallery = () => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
    <Button variant="primary">Primary</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="tertiary">Tertiary</Button>
    <Button variant="ghost">Ghost</Button>
    <Button variant="danger">Danger</Button>
    <Button variant="warning">Warning</Button>
    <Button variant="success">Success</Button>
    <Button variant="primary" disabled>Disabled</Button>
  </div>
);

