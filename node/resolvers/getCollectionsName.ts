export async function getCollectionsNames(
  _: unknown,
  __: unknown,
  ctx: Context
) {
  const {
    clients: { products },
  } = ctx

  return products.getCollectionsNames()
}
