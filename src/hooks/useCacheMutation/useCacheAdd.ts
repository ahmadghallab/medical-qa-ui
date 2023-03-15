import { CacheKey } from 'models/Common';
import { useSWRConfig } from 'swr';

const useCacheAdd = () => {
  const { mutate } = useSWRConfig();

  const paginatedCacheAdd = (cacheKey: CacheKey, newData: any) => {
    mutate((key: CacheKey) => key['url'] === cacheKey.url, (cache: any) => {
      try {
        return {
          raw: [newData, ...cache.raw],
          count: cache.count + 1
        };
      } catch (e) {}
    });
  };

  return { paginatedCacheAdd };
};

export default useCacheAdd;
