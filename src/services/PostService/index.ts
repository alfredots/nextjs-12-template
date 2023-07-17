import { Endpoints } from 'services/endpoints'
import { HttpClient } from 'services/http'

import { GetAllResponse, Post } from './types'

class PostService extends HttpClient {
  public constructor() {
    super(Endpoints.external.posts)
  }

  public getAll = async () => {
    const response = await this.get<GetAllResponse>('')
    return response
  }

  public savePost = async (body: Post) => {
    const response = await this.post<Post>('', body)
    return response
  }
}

export const postService = new PostService()
