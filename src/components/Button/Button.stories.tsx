import { Button, ButtonProps } from './';
import { ComponentMeta, Story } from '@storybook/react';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        values: ['publish', 'delete', 'like']
      }
    },
  }
} as ComponentMeta<typeof Button>;

export const Generic: Story<ButtonProps> = (args) => {
  return (
    <Button {...args} />
  )
}

export const Publish: Story<ButtonProps> = (args) => {
  return (
    <Button {...args} />
  )
}

Publish.args = {
  variant: 'publish',
}

export const Delete: Story<ButtonProps> = (args) => {
  return (
    <Button {...args} title='Deletar comentário' />
  )
}

Delete.args = {
  variant: 'delete'
}

export const Like: Story<ButtonProps> = (args) => {
  return (
    <Button {...args} />
  )
}

Like.args = {
  variant: 'like',
  likeCount: 0,
}