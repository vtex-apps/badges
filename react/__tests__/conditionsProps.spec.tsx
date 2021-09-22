import { conditionsPropsFunction } from '../utils/conditionsProps'

describe('Conditions Props', () => {
  it('should test function conditionsPropsFunction with type = text', async () => {
    const props = {
      page: 'store.product',
      productQuery: {
        loading: false,
        product: {
          cacheId: 'perfume-dior-1',
          productId: '4',
          description: '',
          productName: "Perfume Dior J'Adore Eau de Parfum",
          productReference: 'dior50',
          linkText: 'perfume-dior-1',
          brand: 'Dior',
          brandId: 2000001,
          link: 'https://portal.vtexcommercestable.com.br/perfume-dior-1/p',
          categories: ['/Fashion/Perfume/', '/Fashion/'],
          categoryId: '6',
          priceRange: {
            sellingPrice: {
              highPrice: 115,
              lowPrice: 99,
              __typename: 'PriceRange',
            },
            listPrice: {
              highPrice: 115,
              lowPrice: 99,
              __typename: 'PriceRange',
            },
            __typename: 'ProductPriceRange',
          },
          specificationGroups: [
            {
              name: 'Características',
              originalName: 'Características',
              specifications: [
                {
                  name: 'Gênero',
                  originalName: 'Gênero',
                  values: ['Mulher'],
                  __typename: 'SpecificationGroupProperty',
                },
                {
                  name: 'Aromas',
                  originalName: 'Aromas',
                  values: ['Jasmim'],
                  __typename: 'SpecificationGroupProperty',
                },
              ],
              __typename: 'SpecificationGroup',
            },
            {
              name: 'allSpecifications',
              originalName: 'allSpecifications',
              specifications: [
                {
                  name: 'Gênero',
                  originalName: 'Gênero',
                  values: ['Mulher'],
                  __typename: 'SpecificationGroupProperty',
                },
                {
                  name: 'Aromas',
                  originalName: 'Aromas',
                  values: ['Jasmim'],
                  __typename: 'SpecificationGroupProperty',
                },
              ],
              __typename: 'SpecificationGroup',
            },
          ],
          skuSpecifications: [
            {
              field: {
                name: 'Capacidade',
                originalName: 'Capacidade',
                __typename: 'SKUSpecificationField',
              },
              values: [
                {
                  name: '30ml',
                  originalName: '30ml',
                  __typename: 'SKUSpecificationValue',
                },
                {
                  name: '50ml',
                  originalName: '50ml',
                  __typename: 'SKUSpecificationValue',
                },
                {
                  name: '100ml',
                  originalName: '100ml',
                  __typename: 'SKUSpecificationValue',
                },
              ],
              __typename: 'SkuSpecification',
            },
          ],
          productClusters: [
            {
              id: '137',
              name: 'Coleção da Ana',
              __typename: 'ProductClusters',
            },
          ],
          clusterHighlights: [],
          properties: [
            {
              name: 'Gênero',
              values: ['Mulher'],
              __typename: 'Property',
            },
            {
              name: 'Aromas',
              values: ['Jasmim'],
              __typename: 'Property',
            },
          ],
          __typename: 'Product',
          titleTag: "Página do Perfume Dior J'Adore Eau de Parfum",
        },
      },
      slug: 'perfume-dior-1',
      text: {
        font: 't-heading-5',
        textColor: 'blue',
        textAlignment: 'CENTER',
        textPosition: 'CENTER',
        htmlId: 'teste1',
      },
      image: {
        blockClass: 'container',
        height: 500,
        width: 500,
        minWidth: 100,
        minHeight: 100,
        alt: 'teste',
        title: 'title',
        preload: true,
      },
      params: {
        id: '4',
        slug: 'perfume-dior-1',
      },
      query: {},
    }

    const handles = {
      badgeContainer: 'badgesContainer',
      allBadgesContainer: 'allBadgesContainer',
    }

    const conditionsValues = [
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
    ]

    const returnValue = conditionsPropsFunction(
      props,
      handles,
      jest.fn(),
      conditionsValues
    )

    const returnThen = returnValue[0].Then()

    const returnThenString = JSON.stringify(returnThen)

    expect(returnThenString.includes('span')).toBeTruthy()
  })

  it('should test function conditionsPropsFunction with type = html', async () => {
    const props = {
      page: 'store.product',
      productQuery: {
        loading: false,
        product: {
          cacheId: 'perfume-dior-1',
          productId: '4',
          description: '',
          productName: "Perfume Dior J'Adore Eau de Parfum",
          productReference: 'dior50',
          linkText: 'perfume-dior-1',
          brand: 'Dior',
          brandId: 2000001,
          link: 'https://portal.vtexcommercestable.com.br/perfume-dior-1/p',
          categories: ['/Fashion/Perfume/', '/Fashion/'],
          categoryId: '6',
          priceRange: {
            sellingPrice: {
              highPrice: 115,
              lowPrice: 99,
              __typename: 'PriceRange',
            },
            listPrice: {
              highPrice: 115,
              lowPrice: 99,
              __typename: 'PriceRange',
            },
            __typename: 'ProductPriceRange',
          },
          specificationGroups: [
            {
              name: 'Características',
              originalName: 'Características',
              specifications: [
                {
                  name: 'Gênero',
                  originalName: 'Gênero',
                  values: ['Mulher'],
                  __typename: 'SpecificationGroupProperty',
                },
                {
                  name: 'Aromas',
                  originalName: 'Aromas',
                  values: ['Jasmim'],
                  __typename: 'SpecificationGroupProperty',
                },
              ],
              __typename: 'SpecificationGroup',
            },
            {
              name: 'allSpecifications',
              originalName: 'allSpecifications',
              specifications: [
                {
                  name: 'Gênero',
                  originalName: 'Gênero',
                  values: ['Mulher'],
                  __typename: 'SpecificationGroupProperty',
                },
                {
                  name: 'Aromas',
                  originalName: 'Aromas',
                  values: ['Jasmim'],
                  __typename: 'SpecificationGroupProperty',
                },
              ],
              __typename: 'SpecificationGroup',
            },
          ],
          skuSpecifications: [
            {
              field: {
                name: 'Capacidade',
                originalName: 'Capacidade',
                __typename: 'SKUSpecificationField',
              },
              values: [
                {
                  name: '30ml',
                  originalName: '30ml',
                  __typename: 'SKUSpecificationValue',
                },
                {
                  name: '50ml',
                  originalName: '50ml',
                  __typename: 'SKUSpecificationValue',
                },
                {
                  name: '100ml',
                  originalName: '100ml',
                  __typename: 'SKUSpecificationValue',
                },
              ],
              __typename: 'SkuSpecification',
            },
          ],
          productClusters: [
            {
              id: '137',
              name: 'Coleção da Ana',
              __typename: 'ProductClusters',
            },
          ],
          clusterHighlights: [],
          properties: [
            {
              name: 'Gênero',
              values: ['Mulher'],
              __typename: 'Property',
            },
            {
              name: 'Aromas',
              values: ['Jasmim'],
              __typename: 'Property',
            },
          ],
          __typename: 'Product',
          titleTag: "Página do Perfume Dior J'Adore Eau de Parfum",
        },
      },
      slug: 'perfume-dior-1',
      text: {
        font: 't-heading-5',
        textColor: 'blue',
        textAlignment: 'CENTER',
        textPosition: 'CENTER',
        htmlId: 'teste1',
      },
      image: {
        blockClass: 'container',
        height: 500,
        width: 500,
        minWidth: 100,
        minHeight: 100,
        alt: 'teste',
        title: 'title',
        preload: true,
      },
      params: {
        id: '4',
        slug: 'perfume-dior-1',
      },
      query: {},
    }

    const handles = {
      badgeContainer: 'badgesContainer',
      allBadgesContainer: 'allBadgesContainer',
    }

    const conditionsValues = [
      {
        id: 'a417196b-002c-11ec-82ac-022399e4f447',
        type: 'html',
        content: '<div>ArmasHtml</div>',
        name: 'AromasHtml',
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
    ]

    const returnValue = conditionsPropsFunction(
      props,
      handles,
      jest.fn(),
      conditionsValues
    )

    const returnThen = returnValue[0].Then()
    const returnThenString = JSON.stringify(returnThen)

    expect(returnThenString.includes('span')).toBeTruthy()
  })

  it('should test function conditionsPropsFunction with type = image', async () => {
    const props = {
      page: 'store.product',
      productQuery: {
        loading: false,
        product: {
          cacheId: 'perfume-dior-1',
          productId: '4',
          description: '',
          productName: "Perfume Dior J'Adore Eau de Parfum",
          productReference: 'dior50',
          linkText: 'perfume-dior-1',
          brand: 'Dior',
          brandId: 2000001,
          link: 'https://portal.vtexcommercestable.com.br/perfume-dior-1/p',
          categories: ['/Fashion/Perfume/', '/Fashion/'],
          categoryId: '6',
          priceRange: {
            sellingPrice: {
              highPrice: 115,
              lowPrice: 99,
              __typename: 'PriceRange',
            },
            listPrice: {
              highPrice: 115,
              lowPrice: 99,
              __typename: 'PriceRange',
            },
            __typename: 'ProductPriceRange',
          },
          specificationGroups: [
            {
              name: 'Características',
              originalName: 'Características',
              specifications: [
                {
                  name: 'Gênero',
                  originalName: 'Gênero',
                  values: ['Mulher'],
                  __typename: 'SpecificationGroupProperty',
                },
                {
                  name: 'Aromas',
                  originalName: 'Aromas',
                  values: ['Jasmim'],
                  __typename: 'SpecificationGroupProperty',
                },
              ],
              __typename: 'SpecificationGroup',
            },
            {
              name: 'allSpecifications',
              originalName: 'allSpecifications',
              specifications: [
                {
                  name: 'Gênero',
                  originalName: 'Gênero',
                  values: ['Mulher'],
                  __typename: 'SpecificationGroupProperty',
                },
                {
                  name: 'Aromas',
                  originalName: 'Aromas',
                  values: ['Jasmim'],
                  __typename: 'SpecificationGroupProperty',
                },
              ],
              __typename: 'SpecificationGroup',
            },
          ],
          skuSpecifications: [
            {
              field: {
                name: 'Capacidade',
                originalName: 'Capacidade',
                __typename: 'SKUSpecificationField',
              },
              values: [
                {
                  name: '30ml',
                  originalName: '30ml',
                  __typename: 'SKUSpecificationValue',
                },
                {
                  name: '50ml',
                  originalName: '50ml',
                  __typename: 'SKUSpecificationValue',
                },
                {
                  name: '100ml',
                  originalName: '100ml',
                  __typename: 'SKUSpecificationValue',
                },
              ],
              __typename: 'SkuSpecification',
            },
          ],
          productClusters: [
            {
              id: '137',
              name: 'Coleção da Ana',
              __typename: 'ProductClusters',
            },
          ],
          clusterHighlights: [],
          properties: [
            {
              name: 'Gênero',
              values: ['Mulher'],
              __typename: 'Property',
            },
            {
              name: 'Aromas',
              values: ['Jasmim'],
              __typename: 'Property',
            },
          ],
          __typename: 'Product',
          titleTag: "Página do Perfume Dior J'Adore Eau de Parfum",
        },
      },
      slug: 'perfume-dior-1',
      text: {
        font: 't-heading-5',
        textColor: 'blue',
        textAlignment: 'CENTER',
        textPosition: 'CENTER',
        htmlId: 'teste1',
      },
      image: {
        blockClass: 'container',
        height: 500,
        width: 500,
        minWidth: 100,
        minHeight: 100,
        alt: 'teste',
        title: 'title',
        preload: true,
      },
      params: {
        id: '4',
        slug: 'perfume-dior-1',
      },
      query: {},
    }

    const handles = {
      badgeContainer: 'badgesContainer',
      allBadgesContainer: 'allBadgesContainer',
    }

    const conditionsValues = [
      {
        id: '6c4e5853-0412-11ec-82ac-0e4501e1d275',
        type: 'image',
        content:
          'https://sandboxbrdev.vtexassets.com/assets/vtex.file-manager-graphql/images/4280d0d3-d5bc-4462-a322-6ada50a6a5ad___bde3d7ae98d2e6ee36d103f0e129c775.jpeg',
        name: 'Teste 2',
        simpleStatements: [
          {
            object: {
              value: 'null',
              name: 'null',
              id: '2000001',
            },
            subject: 'brandId',
            verb: '=',
          },
          {
            object: {
              value: 'null',
              name: 'null',
              id: '2',
            },
            subject: 'productId',
            verb: '=',
          },
        ],
        operator: 'any',
      },
    ]

    const returnValue = conditionsPropsFunction(
      props,
      handles,
      jest.fn(),
      conditionsValues
    )

    const returnThen = returnValue[0].Then()

    const returnThenString = JSON.stringify(returnThen)

    expect(returnThenString.includes('span')).toBeTruthy()
  })
})
