import { HttpPostClientSpy } from '@/data/test/mock-http-client'
import { RemoteAuthentication } from './remote-authetication'
import { faker } from '@faker-js/faker'
import { mockAuthentication } from '@/domain/test/mock-authentication'

type SutTypes = {
  sut: RemoteAuthentication
  httpPostClientSpy: HttpPostClientSpy
};

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy()
  // sut -> system under test
  const sut = new RemoteAuthentication(url, httpPostClientSpy)
  return { sut, httpPostClientSpy }
}

describe('RemoteAuthentication', () => {
  test('should call HttpClient with correct URL', async () => {
    const url = faker.internet.url()
    const { httpPostClientSpy, sut } = makeSut(url)
    await sut.auth(mockAuthentication())
    expect(httpPostClientSpy.url).toBe(url)
  })

  test('should call HttpClient with correct body', async () => {
    const { httpPostClientSpy, sut } = makeSut()
    const authParams = mockAuthentication()
    await sut.auth(authParams)

    expect(httpPostClientSpy.body).toEqual(authParams)
  })
})
