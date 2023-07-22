/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useState } from 'react'

import { AxiosResponse } from 'axios'

type UsePostProps<T> = {
  request: (body: T, signal?: AbortSignal) => Promise<AxiosResponse<T, any>>
}

export const usePost = <T>({ request }: UsePostProps<T>) => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<any>()

  const fetchData = useCallback(
    async (body: T, abortController: AbortController) => {
      try {
        setIsLoading(true)
        await request(body, abortController.signal)
      } catch (error: any) {
        if (error instanceof Error) {
          setError(error.message)
        }

        setError(error)
      } finally {
        setIsLoading(false)
      }
    },
    [request]
  )

  const postData = useCallback(
    (body: T) => {
      const abortController = new AbortController()

      fetchData(body, abortController)
      return () => {
        abortController.abort()
      }
    },
    [fetchData]
  )

  return {
    isLoading,
    error,
    postData
  }
}
