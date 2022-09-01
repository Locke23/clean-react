import { AxiosHttpClient } from './axios-http-client'
import { mockAxios } from '@/infra/http/test'
import axios from 'axios'
import { mockPostRequest } from '@/data/test'

jest.mock('axios')

type SutTypes = {
  sut: AxiosHttpClient
  mockedAxios: jest.Mocked<typeof axios>
};

const makeSut = (): SutTypes => {
  const sut = new AxiosHttpClient()
  const mockedAxios = mockAxios()

  return { sut, mockedAxios }
}

describe('AxiosHttpClient', () => {
  it('should call axios with correct url and verb and verb', async () => {
    const { url, body } = mockPostRequest()
    const { sut, mockedAxios } = makeSut()
    await sut.post({ url, body })
    expect(mockedAxios.post).toHaveBeenCalledWith(url, body)
  })

  it('should return the correct statusCode and body', () => {
    const { sut, mockedAxios } = makeSut()
    const httpResponsePromise = sut.post(mockPostRequest())
    expect(httpResponsePromise).toEqual(mockedAxios.post.mock.results[0].value)
  })
})
