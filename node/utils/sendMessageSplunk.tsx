/* eslint-disable vtex/prefer-early-return */
import { getAdminEmail } from './getAdminEmail'

export function sendMessageSplunk(type: string, content: string, ctx: Context) {
  if (type === 'html' && content.includes('<script')) {
    const userEmail = getAdminEmail(ctx.vtex.adminUserAuthToken as string)

    const matches = content.match(/<script(.+)>/g)

    ctx.vtex.logger.info({
      calculateExternalBenefits: {
        status: 'failed',
        content: `Html with script added by email ${userEmail}. The content was ${matches}`,
      },
    })
  }
}
