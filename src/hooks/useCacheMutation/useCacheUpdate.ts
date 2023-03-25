import { CacheKey } from 'models/Common';
import { useSWRConfig } from 'swr';

const defaultObj = { data: 'raw', count: 'count', key: 'id' }

const useCacheUpdate = () => {
  const { mutate } = useSWRConfig();

  const paginatedCacheUpdate = (cacheKey: CacheKey, updatedData: any, obj=defaultObj) => {
    mutate((key: CacheKey) => key['url'] === cacheKey.url, (cache: any) => {
      try {
        const index = cache[obj.data].findIndex((el: any) => el[obj.key] === updatedData[obj.key]);
        cache[obj.data][index] = updatedData;
        return {
          [obj.data]: [...cache[obj.data]],
          [obj.count]: cache[obj.count]
        };
      } catch (e) {}
    });
  };

  const cacheReplace = (cacheKey: CacheKey, updatedData: any) => {
    mutate((key: CacheKey) => key['url'] === cacheKey.url, () => {      
      try {
        return updatedData;
      } catch (e) {}
    });
  };

  return { paginatedCacheUpdate, cacheReplace };
};

export default useCacheUpdate;
