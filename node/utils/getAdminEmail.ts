export const getAdminEmail = (token: string) => {
  const [, payload] = token.split('.', 3)
  const data: { sub?: string } = JSON.parse(
    Buffer.from(payload, 'base64').toString('utf-8')
  )

  return data?.sub
}
