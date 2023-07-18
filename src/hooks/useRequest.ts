/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useState } from 'react'

import { AxiosResponse } from 'axios'

type UseRequestProps<T> = {
  request: (body?: any) => Promise<AxiosResponse<T, any>>
  onInit?: boolean
}

export const useRequest = <T>({
  request,
  onInit = true
}: UseRequestProps<T>) => {
  const [data, setData] = useState<T>()
  const [isLoading, setIsLoading] = useState(false)

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true)
      const res = await request()
      setData(res.data)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }, [request])

  const onRequestPost = useCallback(
    async (body: T) => {
      try {
        setIsLoading(true)
        const res = await request(body)
        setData(res.data)
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    },
    [request]
  )

  useEffect(() => {
    if (onInit) {
      fetchData()
    }
  }, [fetchData, onInit])

  return {
    data,
    isLoading,
    onRequestPost
  }
}
