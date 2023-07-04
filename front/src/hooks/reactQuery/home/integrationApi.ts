import { useQuery } from "react-query";
import { api } from "@/services/api";
import { AxiosPromise } from "axios";
import { StatusResponse, TheoryResponse } from "../../dto/Ihome.dto";

function timeout(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function getStatus(): AxiosPromise<StatusResponse> {
  const findStatus = await api.get<StatusResponse>(`/home`);
  return findStatus;
}

async function getSTheory(): AxiosPromise<TheoryResponse> {
  const findTheory = await api.get<TheoryResponse>(`/theory`);
  return findTheory;
}

export function useFetchStatus() {
  const query = useQuery({
    queryFn: getStatus,
    queryKey: ["get-status"],
  });

  return {
    ...query,
    data: query.data?.data,
  };
}

export function useFetchTheory() {
  const query = useQuery({
    queryFn: getSTheory,
    queryKey: ["get-theory"],
  });

  return {
    ...query,
    data: query.data?.data,
  };
}
