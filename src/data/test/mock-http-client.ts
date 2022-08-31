import { HttpPostClient, HttpPostParams } from 'data/protocols/http/http-post-client'

// captura valores para comparação e usa dados fake
export class HttpPostClientSpy implements HttpPostClient {
  url?: string;
  async post (params: HttpPostParams): Promise<void> {
    this.url = params.url
    return Promise.resolve()
  }
}
