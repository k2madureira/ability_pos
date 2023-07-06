import { useMutation, useQueryClient } from "react-query";
import { api } from "@/services/api";
import { AxiosPromise } from "axios";
import { IGroup, IRequest } from "@/hooks/dto/Igroup.dto";

const postData = async (data: IRequest): AxiosPromise<IGroup> => {
  return await api.post<any>(`/groups`, data);
};

export function useMutateGroup() {
  const queryClient = useQueryClient();
  const mutate = useMutation({
    mutationFn: postData,
    onSuccess: () => {
      queryClient.invalidateQueries(["get-group"]);
    },
  });

  return mutate;
}
