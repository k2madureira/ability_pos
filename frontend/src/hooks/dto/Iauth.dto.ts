export interface SignIn {
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
    instrument: {
      id: string;
      name: string;
      slug: string;
      createdAt: string;
      updatedAt: string;
    };
  };
}

export interface SignInResponse extends SignIn {}

export interface Forgot {
  email: string;
}

export interface ForgotResponse extends SignIn {}

export interface ForgotRequest {
  email: string;
}
