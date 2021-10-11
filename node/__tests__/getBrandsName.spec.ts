/* eslint-disable @typescript-eslint/ban-ts-comment */
import { getBrandsNames } from '../resolvers/getBrandsNames'

describe('Test getBradsName', () => {
  // @ts-ignore
  const ctx = {
    clients: {
      products: {
        getBrandsNames: jest.fn(),
      },
    },
    vtex: {
      workspace: jest.fn(),
    },
  } as Context

  it('Test if client is to be called 1 time', () => {
    getBrandsNames('', '', ctx)
    expect(ctx.clients.products.getBrandsNames).toBeCalledTimes(1)
  })
})
