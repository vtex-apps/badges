import { render } from '@vtex/test-tools/react'
import React from 'react'

import ImageArea from '../Components/file'

describe('Image Area', () => {
  it('should render an image area', async () => {
    const { container } = render(<ImageArea />)

    expect(container.firstChild).not.toBeNull()
  })
})
