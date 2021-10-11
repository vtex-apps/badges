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

  it('Test if getCategoryName is been called 1 time', () => {
    getCategoryName('', '', ctx)
    expect(ctx.clients.products.getCategoryName).toBeCalledTimes(1)
  })
})
