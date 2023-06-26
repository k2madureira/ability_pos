import { useQuery } from "react-query";
import { api } from "@/services/api";
import { StateResponse, State } from "../../dto/Istate.dto";

function timeout(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function getStates(): Promise<State[]> {
  await timeout(5000);
  const findState = await api.get<StateResponse>(
    `/states?sortField=name&sortOrder=asc&perPage=30`
  );
  return findState.data.items;
}

export function useFetchStates() {
  const query = useQuery({
    queryFn: getStates,
    queryKey: ["get-state"],
  });
  return {
    ...query,
    data: query.data,
  };
}
