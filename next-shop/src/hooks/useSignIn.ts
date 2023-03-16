import { useMutation, useQueryClient } from "react-query";
import { fetchJson } from "../lib/api";
import { User } from "../lib/User";

interface SignInVariables {
  email: string;
  password: string;
}

interface UseSignInResult {
  signIn: (email: string, password: string) => Promise<boolean>;
  signInError: boolean;
  signInLoading: boolean;
}

export function useSignIn(): UseSignInResult {
  const queryClient = useQueryClient();
  const mutation = useMutation<User, Error, SignInVariables>(
    async ({ email, password }) =>
      fetchJson("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      })
  );

  return {
    signIn: async (email: string, password: string) => {
      try {
        const user = await mutation.mutateAsync({ email, password });
        queryClient.setQueryData("user", user); // set user into the cache, and prevent stale tieme of 30 secons
        return true;
      } catch (error) {
        // mutation.isError will be true
        return false;
      }
    },
    signInError: mutation.isError,
    signInLoading: mutation.isLoading,
  };
}
