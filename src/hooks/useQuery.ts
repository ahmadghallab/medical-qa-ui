import axios from 'libs/axios';
import { CacheKey, CachePolicies } from 'models/Common';
import { useRef } from 'react';
import useSWRImmutable from 'swr/immutable';

interface Params {
  cacheKey: CacheKey,
  fetchPolicy?: CachePolicies
}

interface FetcherParams {
  url: string
}

const useQuery = ({cacheKey, fetchPolicy}: Params) => {
  const rand = useRef(Date.now());

  switch(fetchPolicy) {
    case 'network-only':
      cacheKey.rand = rand.current
    break
    default:
      // 
  }

  const fetcher = async ({ url }: FetcherParams) => {
    return axios.get(url)
    .then((res: any) => res.data.data);

  }

  const { data, error, isLoading } = useSWRImmutable(
    cacheKey, 
    fetcher,
    {
      shouldRetryOnError: false
    }
  );

  return { data, error, isLoading }

}

export default useQuery;