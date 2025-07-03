// eslint-disable-next-line import/no-extraneous-dependencies
import useSWR from 'swr'
import { useMemo } from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies, @typescript-eslint/consistent-type-imports
import { AxiosResponse } from 'axios'

import { APIDecoratorWithBaseURI } from '../api'

export const useGetHomicides = (): any => {
  const url = `/data/homicidios`
  // eslint-disable-next-line arrow-body-style
  const fetchData = async (): Promise<AxiosResponse> => {
    // eslint-disable-next-line @typescript-eslint/return-await
    return await APIDecoratorWithBaseURI().get(url)
  }

  const { data, error, isLoading } = useSWR<any>(url, fetchData)
  // const nestedData = useMemo(() =>  || undefined, [data])

  const memoizedValue = useMemo(
    () => ({
      homicides: data?.data || [],
      homicidesLoading: isLoading,
      homicidesError: error,
    }),
    [data, error, isLoading]
  )

  return memoizedValue
}


