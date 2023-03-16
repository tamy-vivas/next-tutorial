import { useMutation, useQueryClient } from "react-query";
import { fetchJson } from "../lib/api";

export function useSignOut(): () => Promise<void> {
  const queryClient = useQueryClient();
  const mutation = useMutation(() => fetchJson("/api/logout"));
  return async () => {
    await mutation.mutateAsync();
    queryClient.setQueryData("user", undefined);
  };
}
