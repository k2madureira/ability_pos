import { useQuery } from "react-query";
import { api } from "@/services/api";
import { AxiosPromise } from "axios";
import { UserResponse, StudentsResponse, User } from "../../dto/Iuser.dto";

const getUser = async (): AxiosPromise<UserResponse> => {
  const findUser = await api.get<UserResponse>(`/me`);
  return findUser;
};

const getStudents = async (): AxiosPromise<StudentsResponse> => {
  const findStudents = await api.get<StudentsResponse>(`/students`);
  return findStudents;
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

export function useFetchStudents() {
  const query = useQuery({
    queryFn: getStudents,
    queryKey: ["get-students"],
  });

  return {
    ...query,
    data: query.data?.data.items,
  };
}
