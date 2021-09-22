import { MockedProvider, wait } from '@apollo/react-testing'
import { render } from '@vtex/test-tools/react'
import React from 'react'
import * as reactapollo from 'react-apollo'

import BadgesStore from '../BadgesStore'
// eslint-disable-next-line jest/no-mocks-import
import { mocks } from '../__mocks__/mockUseQuery'

describe('Badges Store Area', () => {
  it('should render the Badges Store area', async () => {
    jest.mock('react-apollo')
    jest
      .spyOn(reactapollo, 'useQuery')
      .mockImplementation()
      .mockReturnValue([
        {
          data: {
            searchMasterdata: {
              data: [
                {
                  id: 'a417196b-002c-11ec-82ac-022399e4f447',
                  type: 'text',
                  content: 'Aroma',
                  name: 'Aromas',
                  simpleStatements: [
                    {
                      object: {
                        value: 'Jasmine',
                        name: 'Aromas',
                        id: null,
                      },
                      subject: 'specificationProperties',
                      verb: '=',
                    },
                  ],
                  operator: 'all',
                },
                {
                  id: 'ead31cff-01ab-11ec-82ac-163fe7aa8841',
                  type: 'image',
                  content:
                    'https://sandboxbrdev.vtexassets.com/assets/vtex.file-manager-graphql/images/44ecabda-f47d-443d-b6fc-8fcddebb1741___2f41371fb35565e29095608a9ec69566.jpeg',
                  name: 'Teste Show Alert ',
                  simpleStatements: [
                    {
                      object: {
                        value: 'null',
                        name: 'null',
                        id: '9',
                      },
                      subject: 'selectedItemId',
                      verb: '=',
                    },
                    {
                      object: {
                        value: 'null',
                        name: 'null',
                        id: '2000001',
                      },
                      subject: 'brandId',
                      verb: '=',
                    },
                  ],
                  operator: 'all',
                },
                {
                  id: '596d01e3-004b-11ec-82ac-0eda35106b0f',
                  type: 'html',
                  content: '<div> Show Alert 5 </div>',
                  name: 'Teste Show Alert Html ',
                  simpleStatements: [
                    {
                      object: {
                        value: 'null',
                        name: 'null',
                        id: '9',
                      },
                      subject: 'selectedItemId',
                      verb: '=',
                    },
                  ],
                  operator: 'all',
                },
              ],

              pagination: {
                page: 1,
                pageSize: 5,
                total: 2,
              },
            },
          },
          refetch: jest.fn(),
        },
      ] as any)
    const { container } = render(<BadgesStore />)

    await wait(0)
    expect(container.firstChild).toHaveClass('allBadgesContainer')
  })
})
