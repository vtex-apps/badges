/* eslint-disable @typescript-eslint/ban-ts-comment */
import { getCategoryName } from '../resolvers/getCategoryName'

describe('Test getCategoryName', () => {
  // @ts-ignore
  const ctx = {
    clients: {
      products: {
        getCategoryName: jest.fn(),
      },
    },
    vtex: {
      workspace: jest.fn(),
    },
  } as Context

  it('Test if getCategoryName has been called once', () => {
    getCategoryName('', '', ctx)
    expect(ctx.clients.products.getCategoryName).toBeCalledTimes(1)
  })
})
