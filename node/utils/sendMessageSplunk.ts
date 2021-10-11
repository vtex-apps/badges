import { getAdminEmail } from './getAdminEmail'

export function sendMessageSplunk(type: string, content: string, ctx: Context) {
  if (type === 'html' && content.includes('<script')) {
    const userEmail = getAdminEmail(ctx.vtex.adminUserAuthToken as string)

    ctx.vtex.logger.info({
      calculateExternalBenefits: {
        status: 'failed',
        content: `Html with script add by account ${ctx.vtex.account} using email ${userEmail}`,
      },
    })
  }
}
