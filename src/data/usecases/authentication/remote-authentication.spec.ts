import { HttpPostClientSpy } from '../../test/mock-http-client'
import { RemoteAuthentication } from './remote-authetication'

describe('RemoteAuthentication', () => {
  test('should call HttpClient with correct URL', async () => {
    const url = 'any_url'
    const httpPostClientSpy = new HttpPostClientSpy()
    // sut -> system under test
    const sut = new RemoteAuthentication(url, httpPostClientSpy)
    await sut.auth()

    expect(httpPostClientSpy.url).toBe(url)
  })
})
