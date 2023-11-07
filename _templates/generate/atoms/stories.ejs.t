---
to: _generated/<%= name %>/stories.ts
---

import <%= name %> from '.'
import { <%= name %>Story, <%= name %>Meta } from './type'

const meta: <%= name %>Meta = {
    title: 'Atoms/<%= name %>',
    component: <%= name %>,
    argTypes: {},
    args: {},
}

export default meta

export const Default: <%= name %>Story = {}
