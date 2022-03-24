export async function getProductsNames(_: unknown, __: unknown, ctx: Context) {
  const {
    clients: { products },
    vtex: { account },
  } = ctx

  const ids = await products.getProductsId(account)
  const names = await products.getProductsName(account, ids)

  return names
}
