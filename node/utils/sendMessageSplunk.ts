export function sendMessageSplunk(type: string, content: string, ctx: Context) {
  if (type === 'html' && content.includes('<script')) {
    ctx.vtex.logger.info({
      calculateExternalBenefits: {
        status: 'failed',
        content: `Html with script add by accont ${ctx.vtex.account}`,
      },
    })
  }
}
