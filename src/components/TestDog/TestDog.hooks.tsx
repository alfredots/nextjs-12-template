import { useState, useEffect } from 'react'

export function useTestDog() {
  const [value, setValue] = useState(null)

  useEffect(() => {
    setValue(null)
  }, [])

  return value
}
