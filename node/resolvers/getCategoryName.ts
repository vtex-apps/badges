export async function getCategoryName(_: unknown, __: unknown, ctx: Context) {
  const {
    clients: { products },
  } = ctx

  return products.getCategoryName()
}
