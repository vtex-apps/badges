export async function getBrandsNames(_: unknown, __: unknown, ctx: Context) {
  const {
    clients: { products },
  } = ctx

  return products.getBrandsNames()
}
