import { useQuery } from "react-query";
import { api } from "@/services/api";
import { AxiosPromise } from "axios";
import { StatusResponse, TheoryResponse } from "../../dto/Ihome.dto";

function timeout(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
const getStatus = async (): AxiosPromise<StatusResponse> => {
  await timeout(5000);
  const findStatus = await api.get<StatusResponse>(`/home`);
  return findStatus;
};

const getSTheory = async (): AxiosPromise<TheoryResponse> => {
  await timeout(5000);
  const findTheory = await api.get<TheoryResponse>(`/theory`);
  return findTheory;
};

export const useFetchStatus = () => {
  const query = useQuery({
    queryFn: getStatus,
    queryKey: ["get-status"],
  });

  return {
    ...query,
    data: query.data?.data,
  };
};

export const useFetchTheory = () => {
  const query = useQuery({
    queryFn: getSTheory,
    queryKey: ["get-theory"],
  });

  return {
    ...query,
    data: query.data?.data,
  };
};
