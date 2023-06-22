import { useQuery } from "react-query";
import { api } from "@/services/api";
import { AxiosPromise } from "axios";
import { GroupResponse } from "../../dto/Igroup.dto";

function timeout(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function getGroups(): AxiosPromise<GroupResponse> {
  await timeout(5000);
  const findObservations = await api.get<GroupResponse>(`/groups`);
  return findObservations;
}

export function useFetchGroups() {
  const query = useQuery({
    queryFn: getGroups,
    queryKey: ["get-group"],
  });

  return {
    ...query,
    data: query.data?.data.items,
  };
}
