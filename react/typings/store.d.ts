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
  brandId: number
  categoryId: string
  productId: string
  productClusters: ClusterProps[]
  properties: PropertiesProps[]
  categoryTree: CategoryProps[]
}

interface ClusterProps {
  id: string
  name: string
}

interface PropertiesProps {
  name: string
  values: string[]
}

interface CategoryProps {
  id: string
  name: string
}
