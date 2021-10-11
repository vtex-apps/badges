/* eslint-disable @typescript-eslint/ban-ts-comment */
import { getSpecificationName } from '../resolvers/getSpecificationName'

describe('Test getSpecificationName', () => {
  // @ts-ignore
  const ctx = {
    clients: {
      products: {
        getSpecificationName: jest.fn(),
        getCategoryId: jest.fn(),
      },
    },
    vtex: {
      workspace: jest.fn(),
    },
  } as Context

  it('Test if getProductsNames is been called 1 time', async () => {
    await getSpecificationName('', '', ctx)
    expect(ctx.clients.products.getCategoryId).toBeCalledTimes(1)
    expect(ctx.clients.products.getSpecificationName).toBeCalledTimes(1)
  })
})
