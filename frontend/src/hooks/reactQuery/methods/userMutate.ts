import { useMutation, useQueryClient } from "react-query";
import { api } from "@/services/api";
import { AxiosPromise } from "axios";
import { IMethod, IRequest } from "@/hooks/dto/Imethod.dto";

const postData = async (data: IRequest): AxiosPromise<IMethod> => {
  return await api.post<any>(`/methods`, data);
};

export function useMutateMethod() {
  const queryClient = useQueryClient();
  const mutate = useMutation({
    mutationFn: postData,
    onSuccess: () => {
      queryClient.invalidateQueries(["get-method"]);
    },
  });

  return mutate;
}
