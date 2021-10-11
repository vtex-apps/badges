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

  it('Test if getProductsId is been called 1 time', () => {
    getProductsIds('', '', ctx)
    expect(ctx.clients.products.getProductsId).toBeCalledTimes(1)
  })
})
