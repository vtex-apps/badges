export async function getSpecificationName(
  _: unknown,
  __: unknown,
  ctx: Context
) {
  const {
    clients: { products },
    vtex: { account },
  } = ctx

  const ids = await products.getCategoryId(account)
  const names = await products.getSpecificationName(account, ids)

  return names
}
