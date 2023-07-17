/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useState } from 'react'

import { AxiosResponse } from 'axios'

type UseRequestProps<T> = {
  request: () => Promise<AxiosResponse<T, any>>
  body?: any
}

export const useRequest = <T>({ request }: UseRequestProps<T>) => {
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

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return {
    data,
    isLoading
  }
}
