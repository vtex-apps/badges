export async function getSpecificationName(
  _: unknown,
  __: unknown,
  ctx: Context
) {
  const {
    clients: { products },
  } = ctx

  const ids = await products.getCategoryId()
  const names = await products.getSpecificationName(ids)

  return names
}
