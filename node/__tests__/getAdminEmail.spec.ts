/* eslint-disable @typescript-eslint/ban-ts-comment */
import { getAdminEmail } from '../utils/getAdminEmail'

describe('Test getAdminEmail', () => {
  it('Test if getAdminEmail have been called', async () => {
    const returnValue = getAdminEmail(
      'eyJhbGciOiJFUzI1NiIsImtpZCI6IjEyMzQiLCJ0eXAiOiJqd3QifQ.eyJzdWIiOiJ0ZXN0ZUB2dGV4LmNvbS5iciIsImFjY291bnQiOiJ0ZXN0IiwiYXVkaWVuY2UiOiJhZG1pbiIsInNlc3MiOiJzZXNzIiwiZXhwIjoiZXhwIiwidXNlcklkIjoidXNlcklkIiwiaWF0IjoxLCJpc3MiOiJpc3MiLCJqdGkiOiJqdGkifQ.nsk7mTfi9lZ5IMevhVWmog6D3yfPPWIrydXRu1ZhLfVSmYifgI0PNivt9RdiU0d5Y5iulqLoZ_UgyAz2DWaPHA'
    )

    expect(returnValue).toBe('teste@vtex.com.br')
  })
})
