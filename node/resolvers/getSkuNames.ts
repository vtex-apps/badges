export async function getSkuNames(_: unknown, __: unknown, ctx: Context) {
  const {
    clients: { skus },
  } = ctx

  const ids = await skus.getSkuId()
  const names = await skus.getSkuName(ids)

  return names
}
