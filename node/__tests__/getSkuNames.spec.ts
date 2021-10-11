/* eslint-disable @typescript-eslint/ban-ts-comment */
import { getSkuNames } from '../resolvers/getSkuNames'

describe('Test getSkuNames', () => {
  // @ts-ignore
  const ctx = {
    clients: {
      skus: {
        getSkuId: jest.fn(),
        getSkuName: jest.fn(),
      },
    },
    vtex: {
      workspace: jest.fn(),
    },
  } as Context

  it('Test if getSkuNames is been called 1 time', async () => {
    await getSkuNames('', '', ctx)
    expect(ctx.clients.skus.getSkuId).toBeCalledTimes(1)
    expect(ctx.clients.skus.getSkuName).toBeCalledTimes(1)
  })
})
