import { useMutation, useQueryClient } from "react-query";
import { api, bearerToken, baseURL } from "@/services/api";
import { AxiosPromise } from "axios";

async function getProfile() {
  const res = await fetch(`${baseURL}/profiles?slug=student`, {
    headers: {
      Authorization: bearerToken,
    },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const postData = async (data: any): AxiosPromise<any> => {
  if (data.type === "student") {
    const findProfile = await getProfile();
    data["profileId"] = findProfile.items[0].id;
  }
  delete data.type;
  delete data.selectedState;
  delete data.selectedInstrument;
  delete data["password-confirmation"];
  return await api.post<any>(`/users`, data);
};

export function useMutateUser() {
  const queryClient = useQueryClient();
  const mutate = useMutation({
    mutationFn: postData,
    onSuccess: () => {
      queryClient.invalidateQueries(["get-students"]);
    },
  });

  return mutate;
}
