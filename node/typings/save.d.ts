interface SaveValues {
  saveData: SaveArray
}

interface SaveArray {
  type: string
  content: string
  name: string
  simpleStatements: []
  operator: string
  priority: number
}
