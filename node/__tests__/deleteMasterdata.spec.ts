/* eslint-disable @typescript-eslint/ban-ts-comment */
import { deleteMasterdata } from '../resolvers/deleteMasterdata'

describe('Test deleteMasterdata', () => {
  it('Test if masterdata is been called', async () => {
    // @ts-ignore
    const ctx = {
      clients: {
        badges: {
          delete: jest.fn().mockResolvedValue(true),
        },
      },
    } as Context

    const params = {
      id: '64d9f6e4-01b3-11ec-82ac-1236248951d9',
    }

    await deleteMasterdata('', params, ctx)
    expect(ctx.clients.badges.delete).toBeCalledWith(params.id)
  })

  it('Test if deletemasterdata have a true return', async () => {
    // @ts-ignore
    const ctx = {
      clients: {
        badges: {
          delete: jest.fn().mockResolvedValue(true),
        },
      },
    } as Context

    const params = {
      id: '64d9f6e4-01b3-11ec-82ac-1236248951d9',
    }

    const returnValue = await deleteMasterdata('', params, ctx)

    expect(returnValue).toBeTruthy()
  })

  it('Test if deletemasterdata have a false return', async () => {
    // @ts-ignore
    const ctx = {
      clients: {
        badges: {
          delete: jest.fn().mockRejectedValue(false),
        },
      },
      vtex: {
        logger: {
          error: jest.fn(),
        },
      },
    } as Context

    const params = {
      id: '',
    }

    const returnValue = await deleteMasterdata('', params, ctx)

    expect(returnValue).toBeFalsy()
    expect(ctx.vtex.logger.error).toBeCalledTimes(1)
  })
})
