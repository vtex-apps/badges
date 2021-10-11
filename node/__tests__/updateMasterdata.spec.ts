/* eslint-disable @typescript-eslint/ban-ts-comment */
import { updateMasterdata } from '../resolvers/updateMasterdata'

describe('Test updateMasterdata', () => {
  it('Test if updateMasterdata is been called', async () => {
    // @ts-ignore
    const ctx = {
      clients: {
        badges: {
          update: jest.fn().mockResolvedValue(true),
        },
      },
    } as Context

    const params = {
      idBadges: '64d9f6e4-01b3-11ec-82ac-1236248951d9',
      saveValues: {
        type: 'text',
        content: 'Aroma',
        name: 'Aromas',
        simpleStatements: [
          {
            object: {
              name: '3',
              value: '4',
            },
            subject: 'specificationProperties',
            verb: '=',
          },
        ] as unknown as [],
        operator: 'all',
        priority: 1,
      },
    }

    await updateMasterdata('', params, ctx)
    expect(ctx.clients.badges.update).toBeCalledWith(
      '64d9f6e4-01b3-11ec-82ac-1236248951d9',
      {
        content: 'Aroma',
        name: 'Aromas',
        operator: 'all',
        priority: 1,
        simpleStatements: [
          {
            object: { name: '3', value: '4' },
            subject: 'specificationProperties',
            verb: '=',
          },
        ],
        type: 'text',
      }
    )
  })

  it('Test if updateMasterdata is been called witha false return', async () => {
    // @ts-ignore
    const ctx = {
      clients: {
        badges: {
          update: jest.fn().mockRejectedValue(false),
        },
      },
      vtex: {
        logger: {
          error: jest.fn(),
        },
      },
    } as Context

    const params = {
      idBadges: '64d9f6e4-01b3-11ec-82ac-1236248951d9',
      saveValues: {
        type: 'text',
        content: 'Aroma',
        name: 'Aromas',
        simpleStatements: [
          {
            object: {
              name: '3',
              value: '4',
            },
            subject: 'specificationProperties',
            verb: '=',
          },
        ] as unknown as [],
        operator: 'all',
        priority: 1,
      },
    }

    const returnUpdate = await updateMasterdata('', params, ctx)

    expect(ctx.clients.badges.update).toBeCalledWith(
      params.idBadges,
      params.saveValues
    )
    expect(returnUpdate).toBeFalsy()
  })
})
