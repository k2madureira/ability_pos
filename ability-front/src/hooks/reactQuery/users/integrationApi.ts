import { useQuery } from "react-query";
import { api } from "@/services/api";
import { AxiosPromise } from "axios";
import { UserResponse } from "../../dto/Iuser.dto";

const getUser = async (): AxiosPromise<UserResponse> => {
  const findUser = await api.get<UserResponse>(`/me`);
  return findUser;
};

export const useFetchUser = () => {
  const query = useQuery({
    queryFn: getUser,
    queryKey: ["get-user"],
  });

  return {
    ...query,
    data: query.data?.data,
  };
};
