import uploadFile from '../queries/uploadFile.gql'
import saveMasterdata from '../queries/saveMasterdata.gql'
import getProductsName from '../queries/getProductsName.gql'
import getSkusNames from '../queries/getSkusNames.gql'
import getBrandsNames from '../queries/getBrandsNames.gql'
import getCollectionsNames from '../queries/getCollectionsNames.gql'
import getCategoryName from '../queries/getCategoryName.gql'
import getSpecificationName from '../queries/getSpecificationName.gql'
import searchMasterdata from '../queries/searchMasterdata.gql'
import deleteMasterdata from '../queries/deleteMasterdata.gql'
import updateMasterdata from '../queries/updateMasterdata.gql'

export const mocks = [
  {
    request: {
      query: searchMasterdata,
      variables: {
        page: 1,
        pageSize: 5,
      },
    },
    newData: jest.fn(() => ({
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
              id: '2ab268a1-01b4-11ec-82ac-02ecdb64efc9',
              type: 'text',
              content: "'''",
              name: "teste '''",
              simpleStatements: [
                {
                  object: {
                    value: 'null',
                    name: 'null',
                    id: '6',
                  },
                  subject: 'categoryId',
                  verb: '=',
                },
              ],
              operator: 'all',
            },
          ],
        },
      },
    })),
  },

  {
    request: {
      query: getProductsName,
    },
    result: {
      data: {
        getProductsNames: [
          {
            id: '1',
            name: 'Gourmand Inox com dupla chama e trempe com ferro fundido',
          },
          {
            id: '2',
            name: 'Cooktop 5 bocas com grades piatina e acendimento automático',
          },
        ],
      },
    },
  },
  {
    request: {
      query: getSkusNames,
    },
    result: {
      data: {
        getSkuNames: [
          {
            id: '7',
            name: 'Gourmand Inox com dupla chama e trempe com ferro fundido Gourmand Inox com duplachama e trempe com ferro fundido - 110v',
          },
          {
            id: '1',
            name: 'Gourmand Inox com dupla chama e trempe com ferro fundido Gourmand Inox com duplachama e trempe com ferro fundido - 220 v',
          },
        ],
      },
    },
  },
  {
    request: {
      query: getCategoryName,
    },
    result: {
      data: {
        getCategoryName: [
          {
            id: '1',
            name: 'Fogão',
          },
        ],
      },
    },
  },
  {
    request: {
      query: getCollectionsNames,
    },
    result: {
      data: {
        getCollectionsNames: [
          {
            id: '137',
            name: 'Coleção da Ana',
          },
        ],
      },
    },
  },
  {
    request: {
      query: getSpecificationName,
    },
    result: {
      data: {
        getSpecificationName: [
          {
            name: 'Número de bocas',
          },
          {
            name: 'Voltagem',
          },
        ],
      },
    },
  },
  {
    request: {
      query: getBrandsNames,
    },
    result: {
      data: {
        getBrandsNames: [
          {
            id: '2000000',
            name: 'Brastemp',
          },
          {
            id: '2000001',
            name: 'Dior',
          },
          {
            id: '2000002',
            name: 'Wrangler',
          },
        ],
      },
    },
  },
  {
    request: {
      query: getBrandsNames,
    },
    result: {
      data: {
        getBrandsNames: [
          {
            id: '2000000',
            name: 'Brastemp',
          },
          {
            id: '2000001',
            name: 'Dior',
          },
          {
            id: '2000002',
            name: 'Wrangler',
          },
        ],
      },
    },
  },
  {
    request: {
      query: saveMasterdata,
      variables: {
        saveData: {
          content: 'html',
          name: 'name',
          operator: 'all',
          type: 'html',
          simpleStatements: [
            {
              object: {
                name: '3',
                value: '4',
              },
              subject: 'specificationProperties',
              verb: '=',
            },
          ],
        },
      },
    },
    result: {
      data: {
        saveMasterdata: {
          Id: 'vtex_badges_badges-56ff5cd8-1668-11ec-82ac-0ac6b4a0c573',
        },
      },
    },
  },

  {
    request: {
      query: deleteMasterdata,
      variables: {
        id: '64d9f6e4-01b3-11ec-82ac-1236248951d9',
      },
    },
    result: {
      data: {
        deleteMasterdata: true,
      },
    },
  },
  {
    request: {
      query: updateMasterdata,
      variables: {
        idBadges: '64d9f6e4-01b3-11ec-82ac-1236248951d9',
        saveValues: {
          content: 'html',
          name: 'name',
          operator: 'all',
          type: 'html',
          simpleStatements: [
            {
              object: {
                name: '3',
                value: '4',
              },
              subject: 'specificationProperties',
              verb: '=',
            },
          ],
        },
      },
    },
    result: {
      data: {
        updateMasterdata: true,
      },
    },
  },
]
