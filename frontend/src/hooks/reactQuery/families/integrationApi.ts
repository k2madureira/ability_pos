import { useQuery } from "react-query";
import { api } from "@/services/api";
import { FamilyList, FamilyResponse } from "../../dto/Ifamily.dto";

async function getGroups(): Promise<FamilyList[]> {
  const findObservations = await api.get<FamilyResponse>(`/families`);
  return findObservations.data.items;
}

export function useFetchFamilies() {
  const query = useQuery({
    queryFn: getGroups,
    queryKey: ["get-family"],
  });

  return {
    ...query,
    data: query.data as FamilyList[],
  };
}
