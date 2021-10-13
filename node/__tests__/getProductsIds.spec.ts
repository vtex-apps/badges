/* eslint-disable @typescript-eslint/ban-ts-comment */
import { getProductsIds } from '../resolvers/getProductsIds'

describe('Test getProductsId', () => {
  // @ts-ignore
  const ctx = {
    clients: {
      products: {
        getProductsId: jest.fn(),
      },
    },
    vtex: {
      workspace: jest.fn(),
    },
  } as Context

  it('Test if getProductsId has been called once', () => {
    getProductsIds('', '', ctx)
    expect(ctx.clients.products.getProductsId).toBeCalledTimes(1)
  })
})
