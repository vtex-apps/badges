/* eslint-disable @typescript-eslint/ban-ts-comment */
import { getProductsNames } from '../resolvers/getProductsName'

describe('Test getProductsNames', () => {
  // @ts-ignore
  const ctx = {
    clients: {
      products: {
        getProductsName: jest.fn(),
        getProductsId: jest.fn(),
      },
    },
    vtex: {
      workspace: jest.fn(),
    },
  } as Context

  it('Test if getProductsNames has been called once', async () => {
    await getProductsNames('', '', ctx)
    expect(ctx.clients.products.getProductsId).toBeCalledTimes(1)
    expect(ctx.clients.products.getProductsName).toBeCalledTimes(1)
  })
})
