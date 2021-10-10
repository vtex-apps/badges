import { sendMessageSplunk } from '../utils/sendMessageSplunk'
import { validation } from '../utils/validation'

export async function saveMasterdata(
  _: unknown,
  saveValues: SaveValues,
  ctx: Context
) {
  validation(saveValues.saveData, false)

  sendMessageSplunk(saveValues.saveData.type, saveValues.saveData.content, ctx)

  return ctx.clients.badges.save({
    content: saveValues.saveData.content,
    name: saveValues.saveData.name,
    operator: saveValues.saveData.operator,
    priority: saveValues.saveData.priority,
    simpleStatements: saveValues.saveData.simpleStatements,
    type: saveValues.saveData.type,
  })
}
