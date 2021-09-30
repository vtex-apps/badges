import { render } from '@vtex/test-tools/react'
import React from 'react'

import DividerArea from '../Components/divider'

describe('Divider Area', () => {
  it('should render divider area', async () => {
    const { container } = render(<DividerArea />)

    expect(container.firstChild).not.toBeNull()
  })
})
