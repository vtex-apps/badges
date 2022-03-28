export async function getProductsNames(_: unknown, __: unknown, ctx: Context) {
  const {
    clients: { products },
  } = ctx

  const ids = await products.getProductsId()
  const names = await products.getProductsName(ids)

  return names
}
