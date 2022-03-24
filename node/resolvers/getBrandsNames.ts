export async function getBrandsNames(_: unknown, __: unknown, ctx: Context) {
  const {
    clients: { products },
    vtex: { account },
  } = ctx

  return products.getBrandsNames(account)
}
