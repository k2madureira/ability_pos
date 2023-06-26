import { useQuery } from "react-query";
import { api } from "@/services/api";
import { InstrumentResponse, Instrument } from "../../dto/Iinstrument.dto";

function timeout(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function getInstruments(): Promise<Instrument[]> {
  const findInstrument = await api.get<InstrumentResponse>(
    `/instruments?sortField=name&sortOrder=asc&perPage=30`
  );
  return findInstrument.data.items;
}

export function useFetchInstruments() {
  const query = useQuery({
    queryFn: getInstruments,
    queryKey: ["get-instrument"],
  });
  return {
    ...query,
    data: query.data,
  };
}
