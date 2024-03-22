import { useQuery } from '@tanstack/react-query';
import { getCommunityDetail } from '../apis/communityAxios';

const useCommunityQuery = (id) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['community', id],
    queryFn: async () => {
      const response =
        await getCommunityDetail(id);
      return response.data;
    },
  });

  return { data, isLoading, isError };
};

export default useCommunityQuery;
