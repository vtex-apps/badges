/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Products } from '../clients/product'

describe('Products Client', () => {
  const MOCKED_CONTEXT = {
    workspace: 'master',
    account: 'sandboxbrdev',
    adminUserAuthToken: 'ADMIN_USER_AUTH_TOKEN',
  } as any

  const MOCKED_OPTIONS = {} as any

  const ProductsClient = new Products(MOCKED_CONTEXT, MOCKED_OPTIONS)

  it('Test if getProductId it works and have a return', async () => {
    // @ts-ignore
    const get = jest.spyOn(ProductsClient.http, 'get').mockResolvedValue({
      data: { '1': [1, 2, 3, 4, 5, 6, 7] },
    })

    const returnValue = await ProductsClient.getProductsId(
      MOCKED_CONTEXT.workspace
    )

    expect(returnValue.toString()).toBe('1')

    return expect(get).toHaveBeenCalledWith(
      `https://${MOCKED_CONTEXT.workspace}.vtexcommercestable.com.br/api/catalog_system/pvt/products/GetProductAndSkuIds`
    )
  })

  it('Test if getProductsName it works and have a return', async () => {
    // @ts-ignore
    const get = jest.spyOn(ProductsClient.http, 'get').mockResolvedValue({
      Id: 1,
      Name: 'Camisa',
      DepartmentId: 9281,
      CategoryId: 9281,
      BrandId: 9280,
      LinkId: 'camisa',
      RefId: '',
      IsVisible: true,
      Description: '',
      DescriptionShort: '',
      ReleaseDate: '2021-09-22T00:00:00',
      KeyWords: 'camiseta',
      Title: '',
      IsActive: true,
      TaxCode: '',
      MetaTagDescription: '',
      SupplierId: null,
      ShowWithoutStock: true,
      AdWordsRemarketingCode: null,
      LomadeeCampaignCode: null,
      Score: null,
    })

    const returnValue = await ProductsClient.getProductsName(
      MOCKED_CONTEXT.workspace,
      [1]
    )

    const returnExpect = [{ id: 1, name: 'Camisa' }]

    expect(returnValue).toStrictEqual(returnExpect)

    return expect(get).toHaveBeenCalledWith(
      `https://${MOCKED_CONTEXT.workspace}.vtexcommercestable.com.br/api/catalog/pvt/product/1`
    )
  })

  it('Test if getBrandsNames it works and have a return', async () => {
    // @ts-ignore
    const get = jest.spyOn(ProductsClient.http, 'get').mockResolvedValue([
      {
        id: 9280,
        name: 'Brand',
        isActive: true,
        title: 'Brand',
        metaTagDescription: 'Brand',
        imageUrl: null,
      },
      {
        id: 2000000,
        name: 'Brand name',
        isActive: true,
        title: 'Brand_Page_Title',
        metaTagDescription:
          'Description of the type of brand, used by the search engines. Although not mandatory, the ideal is to limit this to 150 characters, since this is the maximum size for results shown in Google searches;',
        imageUrl: null,
      },
    ])

    const returnValue = await ProductsClient.getBrandsNames(
      MOCKED_CONTEXT.workspace
    )

    const returnExpect = [
      { id: 9280, name: 'Brand' },
      { id: 2000000, name: 'Brand name' },
    ]

    expect(returnValue).toStrictEqual(returnExpect)

    return expect(get).toHaveBeenCalledWith(
      `https://${MOCKED_CONTEXT.workspace}.vtexcommercestable.com.br/api/catalog_system/pvt/brand/list`
    )
  })

  it('Test if getCollectionsNames it works and have a return', async () => {
    // @ts-ignore
    const get = jest.spyOn(ProductsClient.http, 'get').mockResolvedValue({
      paging: { page: 1, perPage: 1, total: 1, pages: 1 },
      items: [
        {
          id: 143,
          name: 'All',
          searchable: true,
          highlight: false,
          dateFrom: '2010-01-01T00:00:00',
          dateTo: '2070-01-01T00:00:00',
          totalSku: 0,
          totalProducts: 0,
          type: 'Automatic',
          lastModifiedBy: null,
        },
      ],
    })

    const returnValue = await ProductsClient.getCollectionsNames(
      MOCKED_CONTEXT.workspace
    )

    const returnExpect = [{ id: 143, name: 'All' }]

    expect(returnValue).toStrictEqual(returnExpect)

    return expect(get).toHaveBeenCalledWith(
      `https://${MOCKED_CONTEXT.workspace}.vtexcommercestable.com.br/api/catalog_system/pvt/collection/search`
    )
  })

  it('Test if getCategoryName it works and have a return', async () => {
    // @ts-ignore
    const get = jest.spyOn(ProductsClient.http, 'get').mockResolvedValue([
      {
        id: 1,
        name: 'Category',
        hasChildren: false,
        url: 'https://badges.vtexcommercestable.com.br/category',
        children: [],
        Title: 'Category_Page_Title',
        MetaTagDescription:
          'Brief description of the category. It is advisable not to exceed 150 characters so that the search engines can show it correctly in the search results;',
      },
      {
        id: 9282,
        name: 'Food and beverage',
        hasChildren: false,
        url: 'https://badges.vtexcommercestable.com.br/food-and-beverage',
        children: [
          {
            id: 9283,
            name: 'Sporting',
            hasChildren: false,
            url: 'https://badges.vtexcommercestable.com.br/sporting',
            children: [],
            Title: 'Sporting',
            MetaTagDescription: 'Sporting',
          },
        ],
        Title: 'Food and beverage',
        MetaTagDescription: 'Food and beverage',
      },
    ])

    const returnValue = await ProductsClient.getCategoryName(
      MOCKED_CONTEXT.workspace
    )

    const returnExpect = [
      { id: 1, name: 'Category' },
      { id: 9282, name: 'Food and beverage' },
      { id: 9283, name: 'Sporting' },
    ]

    expect(returnValue).toStrictEqual(returnExpect)

    return expect(get).toHaveBeenCalledWith(
      `https://${MOCKED_CONTEXT.workspace}.vtexcommercestable.com.br/api/catalog_system/pub/category/tree/100`
    )
  })

  it('Test if getCategoryId it works and have a return', async () => {
    // @ts-ignore
    const get = jest.spyOn(ProductsClient.http, 'get').mockResolvedValue([
      {
        id: 9282,
        name: 'Food and beverage',
        hasChildren: false,
        url: 'https://badges.vtexcommercestable.com.br/food-and-beverage',
        children: [
          {
            id: 9283,
            name: 'Sporting',
            hasChildren: false,
            url: 'https://badges.vtexcommercestable.com.br/sporting',
            children: [],
            Title: 'Sporting',
            MetaTagDescription: 'Sporting',
          },
        ],
        Title: 'Food and beverage',
        MetaTagDescription: 'Food and beverage',
      },
    ])

    const returnValue = await ProductsClient.getCategoryId(
      MOCKED_CONTEXT.workspace
    )

    const returnExpect = [9282, 9283]

    expect(returnValue).toStrictEqual(returnExpect)

    return expect(get).toHaveBeenCalledWith(
      `https://${MOCKED_CONTEXT.workspace}.vtexcommercestable.com.br/api/catalog_system/pub/category/tree/100`
    )
  })

  it('Test if getSpecificationName it works and have a return', async () => {
    // @ts-ignore
    const get = jest.spyOn(ProductsClient.http, 'get').mockResolvedValue([
      {
        Name: 'cor',
        CategoryId: 9281,
        FieldId: 18,
        IsActive: true,
        IsStockKeepingUnit: true,
      },
      {
        Name: 'Tamanho',
        CategoryId: 9281,
        FieldId: 19,
        IsActive: true,
        IsStockKeepingUnit: true,
      },
    ])

    const returnValue = await ProductsClient.getSpecificationName(
      MOCKED_CONTEXT.workspace,
      [9281]
    )

    const returnExpect = [{ name: 'cor' }, { name: 'Tamanho' }]

    expect(returnValue).toStrictEqual(returnExpect)

    return expect(get).toHaveBeenCalledWith(
      `https://${MOCKED_CONTEXT.workspace}.vtexcommercestable.com.br/api/catalog_system/pub/specification/field/listByCategoryId/9281`
    )
  })
})
