import { AxiosError } from 'axios'

export type Post = {
  id: string
  title: string
  content: string
  createdAt: string
}

export type GetAllResponse = Post[]

export type ErrorProps = {
  data: {
    error: string
  }
  status: number
} & AxiosError
