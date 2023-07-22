import { Endpoints } from 'services/endpoints'
import { HttpClient } from 'services/http'

import { GetAllResponse, Post } from './types'

class PostService extends HttpClient {
  public constructor() {
    super(Endpoints.external.posts)
  }

  public getAll = async (signal?: AbortSignal) => {
    const response = await this.get<GetAllResponse>('', { signal })
    return response
  }

  public savePost = async (body: Post, signal?: AbortSignal) => {
    const response = await this.post<Post>('', body, { signal })
    return response
  }
}

export const postService = new PostService()
