export async function getCategoryName(_: unknown, __: unknown, ctx: Context) {
  const {
    clients: { products },
    vtex: { account },
  } = ctx

  return products.getCategoryName(account)
}
