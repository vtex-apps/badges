/* eslint-disable @typescript-eslint/ban-ts-comment */
import { getCollectionsNames } from '../resolvers/getCollectionsName'

describe('Test getCollectionsNames', () => {
  // @ts-ignore
  const ctx = {
    clients: {
      products: {
        getCollectionsNames: jest.fn(),
      },
    },
    vtex: {
      workspace: jest.fn(),
    },
  } as Context

  it('Test if getCollectionsNames is been called 1 time', () => {
    getCollectionsNames('', '', ctx)
    expect(ctx.clients.products.getCollectionsNames).toBeCalledTimes(1)
  })
})
