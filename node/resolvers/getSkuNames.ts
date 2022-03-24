export async function getSkuNames(_: unknown, __: unknown, ctx: Context) {
  const {
    clients: { skus },
    vtex: { account },
  } = ctx

  const ids = await skus.getSkuId(account)
  const names = await skus.getSkuName(account, ids)

  return names
}
