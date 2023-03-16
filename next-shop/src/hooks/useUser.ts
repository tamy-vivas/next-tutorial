import { useQuery } from "react-query";
import { User } from "../lib/User";
import { fetchJson } from "../lib/api";

const useUser = (): User | undefined => {
  const query = useQuery<User>(
    "user",
    async () => {
      try {
        return await fetchJson("/api/user");
      } catch (error) {
        return undefined;
      }
    },
    {
      cacheTime: Infinity, // keep cache data forever
      staleTime: 30_000, //ms data is old after this value and will expire
    }
  );

  return query.data;
};

export default useUser;
