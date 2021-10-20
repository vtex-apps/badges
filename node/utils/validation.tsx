export function validation(
  saveValues: SaveArray,
  edit: boolean,
  idBadges?: string
) {
  const { name, content, operator, simpleStatements, type, priority } =
    saveValues

  if (name.length === 0) {
    throw new Error('It is necessary to send a name')
  }

  if (priority <= 0 || priority > 5) {
    throw new Error(
      'It is necessary to send a priority with value between 1 and 5'
    )
  }

  if (content.length === 0) {
    throw new Error('It is necessary to send a content')
  } else if (content.includes('<script')) {
    throw new Error('Adding scripts is not allowed')
  }

  if (operator.length === 0) {
    throw new Error('It is necessary to send an operator')
  }

  if (simpleStatements.length === 0) {
    throw new Error('It is necessary to send a simpleStatements')
  }

  if (type.length === 0) {
    throw new Error('It is necessary to send a type')
  }

  if (edit) {
    if (!idBadges) {
      throw new Error('It is necessary to send an ID')
    }
  }
}
