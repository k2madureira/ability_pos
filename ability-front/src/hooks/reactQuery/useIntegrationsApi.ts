import { useQuery } from "react-query";
import { api } from "@/services/api";
import { AxiosPromise } from "axios";
import { UserResponse } from "../dto/Iuser.dto";
import { ObservationResponse } from "../dto/Iobservation.dto";

const getUser = async (): AxiosPromise<UserResponse> => {
  const findUser = await api.get<UserResponse>(`/me`);
  return findUser;
};

const getObservations = async ({
  queryKey,
}: any): AxiosPromise<ObservationResponse> => {
  const [_, user] = queryKey;
  const queryParams =
    user?.profile.slug === "instructor" ? "instructorId" : "studentId";
  const findObservations = await api.get<ObservationResponse>(
    `/observations?${queryParams}=${user?.id}&sortField=createdAt&sortOrder=desc&perPage=4`
  );
  return findObservations;
};

export const useFetchObservation = (user: any) => {
  const query = useQuery({
    queryFn: getObservations,
    queryKey: ["get-observation", user],
  });

  return {
    ...query,
    data: query.data?.data.items,
  };
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
