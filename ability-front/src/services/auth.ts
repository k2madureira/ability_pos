import { api } from "./api";

interface ISignIn {
  request: {
    email: string;
    password: string;
  };
  response: {
    access_token: string;
    user: {
      id: string;
      email: string;
      name: string;
      profile: {
        id: string;
        name: string;
        slug: string;
        createdAt: string;
        updatedAt: string;
      };
    };
  };
}

export async function signInRequest({
  email,
  password,
}: ISignIn["request"]): Promise<ISignIn["response"]> {
  const response = await api.post("/auth/sign-in", {
    email,
    password,
  });

  return response.data;
}

export async function recoverUserInformation() {
  return {
    id: "ef0ff674-d65e-4b96-ac7b-0048bbcb61b7",
    email: "lenilsonmadureira2@gmail.com",
    name: "Lenilson Madureira ",
    profile: {
      id: "",
      name: "",
      slug: "",
      createdAt: "",
      updatedAt: "",
    },
  };
}
