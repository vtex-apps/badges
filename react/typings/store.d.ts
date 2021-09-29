interface HandlesType {
  badgeContainer: string
  allBadgesContainer: string
}

interface PropsStore {
  image?: unknown
  text?: unknown
  children?: ReactNode
  page?: string
  productQuery?: ProductQueryProps
  numberOfBadges?: number
}

interface ProductQueryProps {
  product: ProductProps
}

interface ProductProps {
  brandId: string
  categoryId: string
  productId: string
  productClusters: ClusterProps[]
  properties: PropertiesProps[]
}

interface ClusterProps {
  id: string
  name: string
}

interface PropertiesProps {
  name: string
  values: string[]
}
