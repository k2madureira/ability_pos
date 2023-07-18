import { useMutation } from "react-query";
import { api } from "@/services/api";
import { Forgot, ForgotResponse } from "@/hooks/dto/Iauth.dto";

const signIn = async (body: any): Promise<any> => {
  return api.post<any>(`/auth/sign-in`, body);
};

export function useMutateUserSignIn() {
  const mutate = useMutation({
    mutationFn: signIn,
    onSuccess: () => {},
  });

  return mutate;
}

const signUp = async (body: any): Promise<any> => {
  return api.post<any>(`/auth/sign-up`, body);
};

export function useMutateUserSignUp() {
  const mutate = useMutation({
    mutationFn: signUp,
    onSuccess: () => {},
  });

  return mutate;
}

const forgot = async (body: Forgot): Promise<ForgotResponse> => {
  const response = await api.post<any>(`/auth/forgot-password`, body);
  return response.data;
};

export function useMutateUserforgot() {
  const mutate = useMutation({
    mutationFn: forgot,
    onSuccess: () => {},
  });

  return mutate;
}
