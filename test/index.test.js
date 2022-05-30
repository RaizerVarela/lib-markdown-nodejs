const getFile = require('../index')

const arrayResult = [
  {
    FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
  }
]

describe('getFile::', () => {
  it('Deve ser uma função', () => {
    expect(typeof getFile).toBe('function')
  })
  it('Deve retornar array com resultados', async () => {
    const result = await getFile('./test/arquivos/texto.md')
    expect(result).toEqual(arrayResult)
  })
  it('Deve retornar mensagem "não há links"', async () => {
    const result = await getFile('./test/arquivos/texto_sem_links.md')
    expect(result).toBe('não há links')
  })
})

