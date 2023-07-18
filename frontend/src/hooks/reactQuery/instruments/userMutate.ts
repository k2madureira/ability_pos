import { useMutation, useQueryClient } from "react-query";
import { api } from "@/services/api";
import { AxiosPromise } from "axios";
import { IInstrument, IRequest } from "@/hooks/dto/Iinstrument.dto";

const postData = async (data: IRequest): AxiosPromise<IInstrument> => {
  return await api.post<any>(`/instruments`, data);
};

export function useMutateInstrument() {
  const queryClient = useQueryClient();
  const mutate = useMutation({
    mutationFn: postData,
    onSuccess: () => {
      queryClient.invalidateQueries(["get-instrument"]);
    },
  });

  return mutate;
}
