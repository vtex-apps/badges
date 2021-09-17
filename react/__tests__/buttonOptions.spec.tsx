import {
  htmlButtonOption,
  imageButtonOption,
  textButtonOption,
} from '../utils/buttonOptions'

describe('Button Options', () => {
  it('should test ButtonOption with empty validate', async () => {
    const emptyImageValue = imageButtonOption.validate()
    const emptyHtmlValue = htmlButtonOption.validate()
    const emptyTextValue = textButtonOption.validate()

    expect(emptyImageValue).toBe('Adicione uma imagem no campo "Tipo de badge"')
    expect(emptyHtmlValue).toBe('Preencha o campo "Insira o HTML da badge"')
    expect(emptyTextValue).toBe('Preencha o campo "Insira o texto da badge"')
  })
})
