import { Story, Meta } from '@storybook/react/types-6-0'
import Emphasis, { EmphasisProps } from '.'

export default {
  title: 'Emphasis',
  component: Emphasis
} as Meta

export const Default: Story<EmphasisProps> = (args) => <Emphasis {...args} />
