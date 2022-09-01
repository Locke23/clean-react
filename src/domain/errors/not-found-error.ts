export class NotFoundError extends Error {
  constructor () {
    super('Crendenciais inválidas')
    this.name = 'InvalidCredentialsError'
  }
}
