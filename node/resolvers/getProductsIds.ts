export async function getProductsIds(_: unknown, __: unknown, ctx: Context) {
  const {
    clients: { products },
  } = ctx

  return products.getProductsId()
}
