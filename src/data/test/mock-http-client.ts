import { HttpPostClient } from 'data/protocols/http/http-post-client'

// captura valores para comparação e usa dados fake
export class HttpPostClientSpy implements HttpPostClient {
  url?: string;
  async post (url: string): Promise<void> {
    this.url = url
    return Promise.resolve()
  }
}
