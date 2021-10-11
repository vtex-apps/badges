/* eslint-disable @typescript-eslint/ban-ts-comment */
import { searchMasterdata } from '../resolvers/searchMasterdata'

describe('Test searchMasterdata', () => {
  it('Test if searchMasterdata is been called', async () => {
    const returnValue = {
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
    }

    // @ts-ignore
    const ctx = {
      clients: {
        badges: {
          searchRaw: jest.fn().mockResolvedValue(returnValue),
        },
      },
    } as Context

    const params = {
      page: 1,
      pageSize: 1,
      where: '',
    }

    const returnSearch = await searchMasterdata('', params, ctx)

    expect(ctx.clients.badges.searchRaw).toBeCalledWith(
      { page: 1, pageSize: 1 },
      [
        'id',
        'name',
        'content',
        'operator',
        'simpleStatements',
        'type',
        'priority',
      ],
      'priority ASC',
      ''
    )
    expect(returnSearch).toBe(returnValue)
  })

  it('Test if searchMasterdata is been called with params = undefined', async () => {
    const returnValue = {
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
    }

    // @ts-ignore
    const ctx = {
      clients: {
        badges: {
          searchRaw: jest.fn().mockResolvedValue(returnValue),
        },
      },
    } as Context

    const params = {
      page: undefined,
      pageSize: undefined,
      where: undefined,
    }

    const returnSearch = await searchMasterdata('', params, ctx)

    expect(ctx.clients.badges.searchRaw).toBeCalledWith(
      { page: 1, pageSize: 5 },
      [
        'id',
        'name',
        'content',
        'operator',
        'simpleStatements',
        'type',
        'priority',
      ],
      'priority ASC',
      ''
    )
    expect(returnSearch).toBe(returnValue)
  })
})
