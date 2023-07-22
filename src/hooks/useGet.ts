/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useState } from 'react'

import { AxiosResponse } from 'axios'

type UseGetProps<T> = {
  request: (signal?: AbortSignal) => Promise<AxiosResponse<T, any>>
}

export const useGet = <T>({ request }: UseGetProps<T>) => {
  const [data, setData] = useState<T>()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<any>()

  const fetchData = useCallback(
    async (abortController: AbortController) => {
      try {
        setIsLoading(true)
        const res = await request(abortController.signal)
        setData(res.data)
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

  useEffect(() => {
    const abortController = new AbortController()

    fetchData(abortController)
    return () => {
      abortController.abort()
    }
  }, [fetchData])

  return {
    data,
    isLoading,
    error,
    fetchData
  }
}
