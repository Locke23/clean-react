import {
  HttpPostClient,
  HttpPostParams,
  HttpResponse
} from '@/data/protocols/http'
import axios from 'axios'

export class AxiosHttpClient implements HttpPostClient<any, any> {
  async post (params: HttpPostParams<any>): Promise<HttpResponse<any>> {
    const { url, body } = params
    const { data, status } = await axios.post(url, body)
    return {
      statusCode: status,
      body: data
    }
  }
}
