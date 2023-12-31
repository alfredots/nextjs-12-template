import { useGet, usePost } from '@hooks'
import { postService } from 'services/PostService'
import { GetAllResponse, Post } from 'services/PostService/types'

const useTestPostService = () => {
  const { data: posts, isLoading } = useGet<GetAllResponse>({
    request: postService.getAll
  })

  const { postData } = usePost<Post>({
    request: postService.savePost
  })

  const saveNewPost = async () => {
    const newPost: Post = {
      id: '8',
      title: 'Key do Lovelyz',
      content: 'lorem ipsum 3',
      createdAt: '2023-07-17T00:35:40.331Z'
    }

    await postData(newPost)
  }

  return {
    posts,
    isLoading,
    saveNewPost
  }
}

export default function TestPostService() {
  const { posts, isLoading, saveNewPost } = useTestPostService()

  if (isLoading) {
    return <p>Carregando...</p>
  }

  return (
    <div>
      {posts?.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
      <button
        className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        onClick={() => saveNewPost()}
      >
        save post
      </button>
    </div>
  )
}
