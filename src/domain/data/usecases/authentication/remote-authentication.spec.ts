import { HttpPostClient } from 'domain/data/protocols/http/http-post-client'
import { RemoteAuthentication } from './remote-authetication'

describe('RemoteAuthentication', () => {
  test('should call HttpClient with correct URL', async () => {
    // captura valores para comparação e usa dados fake
    class HttpPostClientSpy implements HttpPostClient {
      url?: string;
      async post (url: string): Promise<void> {
        this.url = url
        return Promise.resolve()
      }
    }

    const url = 'any_url'
    const httpPostClientSpy = new HttpPostClientSpy()
    // sut -> system under test
    const sut = new RemoteAuthentication(url, httpPostClientSpy)
    await sut.auth()

    expect(httpPostClientSpy.url).toBe(url)
  })
})
