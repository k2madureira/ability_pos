import { useQuery } from "react-query";
import { api } from "@/services/api";
import { MethodResponse, MethodList } from "../../dto/Imethod.dto";

async function getMethods(): Promise<MethodList[]> {
  const findMethod = await api.get<MethodResponse>(
    `/methods?sortField=title&sortOrder=asc&perPage=30`
  );
  return findMethod.data.items;
}

export function useFetchMethod() {
  const query = useQuery({
    queryFn: getMethods,
    queryKey: ["get-method"],
  });
  return {
    ...query,
    data: query.data as MethodList[],
  };
}
