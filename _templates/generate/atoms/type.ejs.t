---
to: _generated/<%= name %>/type.ts
---

import { Meta, StoryObj } from '@storybook/react'

export default interface <%= name %>Props {}

export type <%= name %>Meta = Meta<<%= name %>Props>
export type <%= name %>Story = StoryObj<<%= name %>Props>
