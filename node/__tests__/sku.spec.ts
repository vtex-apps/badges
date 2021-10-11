/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Skus } from '../clients/sku'

describe('Sku Client', () => {
  const MOCKED_CONTEXT = {
    workspace: 'master',
    account: 'sandboxbrdev',
    adminUserAuthToken: 'ADMIN_USER_AUTH_TOKEN',
  } as any

  const MOCKED_OPTIONS = {} as any

  const SkusClient = new Skus(MOCKED_CONTEXT, MOCKED_OPTIONS)

  it('Test if getProductId it works and have a return', async () => {
    // @ts-ignore
    const get = jest.spyOn(SkusClient.http, 'get').mockResolvedValue({
      data: { '1': [1, 2, 3, 4, 5, 6, 7] },
      range: { total: 1, from: 1, to: 20 },
    })

    const returnValue = await SkusClient.getSkuId(MOCKED_CONTEXT.workspace)

    expect(returnValue.toString()).toBe('1,2,3,4,5,6,7')

    return expect(get).toHaveBeenCalledWith(
      `https://${MOCKED_CONTEXT.workspace}.vtexcommercestable.com.br/api/catalog_system/pvt/products/GetProductAndSkuIds`
    )
  })

  it('Test if getSkuName it works and have a return', async () => {
    // @ts-ignore
    const get = jest.spyOn(SkusClient.http, 'get').mockResolvedValue({
      Id: 1,
      ProductId: 1,
      NameComplete: 'Camisa Rosa-P',
      ComplementName: '',
      ProductName: 'Camisa',
      ProductDescription: '',
      ProductRefId: '',
      TaxCode: '',
      SkuName: 'Rosa-P',
      IsActive: true,
      IsTransported: true,
      IsInventoried: true,
      IsGiftCardRecharge: false,
      ImageUrl:
        'https://anamb.vteximg.com.br/arquivos/ids/155394-55-55/camisa_rosa_100_poliester_para_sublimacao_p_2705_1_20200722153602.jpg?v=637679143826400000',
      DetailUrl: '/camisa/p',
      CSCIdentification: null,
      BrandId: '9280',
      BrandName: 'Brand',
      IsBrandActive: true,
      Dimension: {
        cubicweight: 1,
        height: 1,
        length: 1,
        weight: 1,
        width: 1,
      },
      RealDimension: {
        realCubicWeight: 0,
        realHeight: 0,
        realLength: 0,
        realWeight: 0,
        realWidth: 0,
      },
      ManufacturerCode: '',
      IsKit: false,
      KitItems: [],
      Services: [],
      Categories: [],
      CategoriesFullPath: ['/9281/'],
      Attachments: [],
      Collections: [],
      SkuSellers: [[Object]],
      SalesChannels: [1],
      Images: [[Object]],
      Videos: [],
      SkuSpecifications: [[Object], [Object]],
      ProductSpecifications: [],
      ProductClustersIds: '137,138,139,140,141,142',
      PositionsInClusters: {
        '137': 0,
        '138': 0,
        '139': 0,
        '140': 0,
        '141': 0,
        '142': 0,
      },
      ProductClusterNames: {
        '137': 'All',
        '138': 'All',
        '139': 'All',
        '140': 'All',
        '141': 'All',
        '142': 'All',
      },
      ProductClusterHighlights: {},
      ProductCategoryIds: '/9281/',
      IsDirectCategoryActive: true,
      ProductGlobalCategoryId: null,
      ProductCategories: { '9281': 'Apparel' },
      CommercialConditionId: 1,
      RewardValue: 0,
      AlternateIds: { Ean: '123' },
      AlternateIdValues: ['123'],
      EstimatedDateArrival: null,
      MeasurementUnit: 'un',
      UnitMultiplier: 1,
      InformationSource: 'Indexer',
      ModalType: null,
      KeyWords: 'camiseta',
      ReleaseDate: '2021-09-22T00:00:00',
      ProductIsVisible: true,
      ShowIfNotAvailable: true,
      IsProductActive: true,
      ProductFinalScore: 0,
    })

    const returnValue = await SkusClient.getSkuName(MOCKED_CONTEXT.workspace, [
      1,
    ])

    const returnExpect = [{ id: 1, name: 'Camisa Rosa-P' }]

    expect(returnValue).toStrictEqual(returnExpect)

    return expect(get).toHaveBeenCalledWith(
      `https://${MOCKED_CONTEXT.workspace}.vtexcommercestable.com.br/api/catalog_system/pvt/sku/stockkeepingunitbyid/1`
    )
  })
})
