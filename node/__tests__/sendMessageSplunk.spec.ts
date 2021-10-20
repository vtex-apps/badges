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
        adminUserAuthToken:
          'eyJhbGciOiJFUzI1NiIsImtpZCI6IjEyMzQiLCJ0eXAiOiJqd3QifQ.eyJzdWIiOiJ0ZXN0ZUB2dGV4LmNvbS5iciIsImFjY291bnQiOiJ0ZXN0IiwiYXVkaWVuY2UiOiJhZG1pbiIsInNlc3MiOiJzZXNzIiwiZXhwIjoiZXhwIiwidXNlcklkIjoidXNlcklkIiwiaWF0IjoxLCJpc3MiOiJpc3MiLCJqdGkiOiJqdGkifQ.nsk7mTfi9lZ5IMevhVWmog6D3yfPPWIrydXRu1ZhLfVSmYifgI0PNivt9RdiU0d5Y5iulqLoZ_UgyAz2DWaPHA',
      },
    } as Context

    const returnValue = sendMessageSplunk('html', '<script>test</script>', ctx)

    expect(returnValue).toBeFalsy()
  })
})
