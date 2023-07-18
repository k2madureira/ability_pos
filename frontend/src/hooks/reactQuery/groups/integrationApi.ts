import { useQuery } from "react-query";
import { api } from "@/services/api";
import { AxiosPromise } from "axios";
import { GroupResponse } from "../../dto/Igroup.dto";
import { UserResponse } from "@/hooks/dto/Iuser.dto";

async function getGroups({ queryKey }: any): AxiosPromise<GroupResponse> {
  const [_, user] = queryKey;
  const notAdmin = user?.profile.slug !== "admin" ? true : false;

  const findObservations = await api.get<GroupResponse>(
    `/groups?isLogged=${notAdmin}`
  );
  return findObservations;
}

export function useFetchGroups(loggedUser: UserResponse | undefined) {
  const query = useQuery({
    queryFn: getGroups,
    queryKey: ["get-group", loggedUser],
  });

  return {
    ...query,
    data: query.data?.data.items,
  };
}
