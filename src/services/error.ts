/* eslint-disable @typescript-eslint/no-explicit-any */
export async function errorHandler(error: any) {
  const { response } = error

  const defaultMessages = {
    400: {
      message: 'Houve um problema ao processar a requisição!',
      type: 'error'
    },
    401: {
      message: 'Acesso negado!',
      type: 'alert'
    },
    403: {
      message: 'Acesso não autorizado!',
      type: 'alert'
    },
    404: {
      message: 'Não encontramos o caminho para a requisição.',
      type: 'alert'
    },
    500: {
      message: 'Houve um problema interno em nosso sistema.',
      type: 'error'
    },
    503: {
      message: 'Serviço indisponível.',
      type: 'error'
    },
    default: {
      message: 'Tivemos um problema desconhecido.',
      type: 'error'
    }
  }

  const statusCode = response?.status as keyof typeof defaultMessages

  alert(defaultMessages[statusCode])

  return null
}
