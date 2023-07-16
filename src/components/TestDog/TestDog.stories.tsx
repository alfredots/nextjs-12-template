import type { Meta, StoryObj } from '@storybook/react'

import { TestDog } from '.'

const meta: Meta<typeof TestDog> = {
  title: 'Example/TestDog',
  component: TestDog
}

export default meta
type Story = StoryObj<typeof TestDog>

export const Primary: Story = {}
