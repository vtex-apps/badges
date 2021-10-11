/* eslint-disable @typescript-eslint/ban-ts-comment */
import { sendMessageSplunk } from '../utils/sendMessageSplunk'

describe('Test sendMessageSplunk', () => {
  it('Test if sendMessageSplunk have been called', async () => {
    // @ts-ignore
    const ctx = {
      vtex: {
        logger: {
          info: jest.fn(),
        },
      },
    } as Context

    const returnValue = sendMessageSplunk('html', '<script>test</script>', ctx)

    expect(returnValue).toBeFalsy()
  })
})
