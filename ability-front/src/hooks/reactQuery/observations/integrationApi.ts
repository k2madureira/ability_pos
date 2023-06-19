import { useQuery } from "react-query";
import { api } from "@/services/api";
import { AxiosPromise } from "axios";
import { ObservationResponse } from "../../dto/Iobservation.dto";

function timeout(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
const getObservations = async ({
  queryKey,
}: any): AxiosPromise<ObservationResponse> => {
  const [_, user] = queryKey;
  const queryParams =
    user?.profile.slug === "instructor" ? "instructorId" : "studentId";

  await timeout(5000);
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