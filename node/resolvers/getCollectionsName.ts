export async function getCollectionsNames(
  _: unknown,
  __: unknown,
  ctx: Context
) {
  const {
    clients: { products },
    vtex: { account },
  } = ctx

  return products.getCollectionsNames(account)
}
