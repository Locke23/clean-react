import { AxiosHttpClient } from './axios-http-client'
import axios from 'axios'
import { faker } from '@faker-js/faker'
import { HttpPostParams } from '@/data/protocols/http'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

const mockedAxiosResponse = {
  data: faker.science.chemicalElement(),
  status: faker.random.numeric()
}

mockedAxios.post.mockResolvedValue(mockedAxiosResponse)

const makeSut = (): AxiosHttpClient => {
  return new AxiosHttpClient()
}
const mockPostRequest = (): HttpPostParams<any> => ({
  url: faker.internet.url(),
  body: faker.science.chemicalElement()
})

describe('AxiosHttpClient', () => {
  it('should call axios with correct url and verb and verb', async () => {
    const { url, body } = mockPostRequest()
    const sut = makeSut()
    await sut.post({ url, body })
    expect(mockedAxios.post).toHaveBeenCalledWith(url, body)
  })

  it('should return the correct statusCode and body', async () => {
    const sut = makeSut()
    const httpResponse = await sut.post(mockPostRequest())
    expect(httpResponse).toEqual({
      statusCode: mockedAxiosResponse.status,
      body: mockedAxiosResponse.data
    })
  })
})
