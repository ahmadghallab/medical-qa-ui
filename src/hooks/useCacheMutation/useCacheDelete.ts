import { CacheKey } from 'models/Common';
import { useSWRConfig } from 'swr';

const useCacheDelete = () => {
  const { mutate } = useSWRConfig();

  const paginatedCacheDelete = (cacheKey: CacheKey, id: number|string) => {
    mutate((key: CacheKey) => key['url'] === cacheKey.url, (cache: any) => {
      const raw = cache.raw.filter((el: any) => el._id !== id);

      const count = cache.count - 1;

      return { raw, count };
    });
  };

  return { paginatedCacheDelete };
};

export default useCacheDelete;
