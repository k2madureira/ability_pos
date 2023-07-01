import { useMutation, useQueryClient } from "react-query";
import { api } from "@/services/api";
import { AxiosPromise } from "axios";
import { IFamily, IRequest } from "@/hooks/dto/Ifamily.dto";

const postData = async (data: IRequest): AxiosPromise<IFamily> => {
  return await api.post<any>(`/families`, data);
};

export function useMutateFamily() {
  const queryClient = useQueryClient();
  const mutate = useMutation({
    mutationFn: postData,
    onSuccess: () => {
      queryClient.invalidateQueries(["get-family"]);
    },
  });

  return mutate;
}
