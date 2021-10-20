/* eslint-disable @typescript-eslint/ban-ts-comment */
import { getBrandsNames } from '../resolvers/getBrandsNames'

describe('Test getBrandsName', () => {
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

  it('Test if client is called once', () => {
    getBrandsNames('', '', ctx)
    expect(ctx.clients.products.getBrandsNames).toBeCalledTimes(1)
  })
})
