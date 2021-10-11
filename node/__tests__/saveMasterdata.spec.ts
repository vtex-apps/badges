/* eslint-disable @typescript-eslint/ban-ts-comment */
import { saveMasterdata } from '../resolvers/saveMasterdata'

describe('Test saveMasterdata', () => {
  it('Test if saveMasterdata is been called', async () => {
    // @ts-ignore
    const ctx = {
      clients: {
        badges: {
          save: jest.fn().mockResolvedValue(true),
        },
      },
    } as Context

    const params = {
      saveData: {
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

    await saveMasterdata('', params, ctx)
    expect(ctx.clients.badges.save).toBeCalledWith(params.saveData)
  })

  it('Test if saveMasterdata is been called with a rejectValue', async () => {
    // @ts-ignore
    const ctx = {
      clients: {
        badges: {
          save: jest.fn().mockRejectedValue(true),
        },
      },
      vtex: {
        logger: {
          error: jest.fn(),
        },
      },
    } as Context

    const params = {
      saveData: {
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

    const returnSave = await saveMasterdata('', params, ctx)

    expect(ctx.clients.badges.save).toBeCalledWith(params.saveData)
    expect(returnSave).toBeFalsy()
  })
})
