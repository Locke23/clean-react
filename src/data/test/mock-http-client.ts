import { HttpPostClient, HttpPostParams } from 'data/protocols/http/http-post-client'

// captura valores para comparação e usa dados fake
export class HttpPostClientSpy implements HttpPostClient {
  url?: string;
  body?: object;
  async post (params: HttpPostParams): Promise<void> {
    this.url = params.url
    this.body = params.body
    return Promise.resolve()
  }
}
