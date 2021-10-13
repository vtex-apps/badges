import { sendMessageSplunk } from '../utils/sendMessageSplunk'
import { validation } from '../utils/validation'

export async function saveMasterdata(
  _: unknown,
  saveValues: SaveValues,
  ctx: Context
) {
  sendMessageSplunk(saveValues.saveData.type, saveValues.saveData.content, ctx)

  validation(saveValues.saveData, false)

  return ctx.clients.badges
    .save({
      content: saveValues.saveData.content,
      name: saveValues.saveData.name,
      operator: saveValues.saveData.operator,
      priority: saveValues.saveData.priority,
      simpleStatements: saveValues.saveData.simpleStatements,
      type: saveValues.saveData.type,
    })
    .then(() => true)
    .catch((e: any) => {
      ctx.vtex.logger.error(
        `Error to save Bagde through MasterdataV2 ${e.name} ${e.message}`
      )

      return false
    })
}
