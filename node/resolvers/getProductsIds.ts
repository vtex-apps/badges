export async function getProductsIds(_: unknown, __: unknown, ctx: Context) {
  const {
    clients: { products },
    vtex: { account },
  } = ctx

  return products.getProductsId(account)
}
