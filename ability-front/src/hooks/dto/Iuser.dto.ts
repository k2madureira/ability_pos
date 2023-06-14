export interface User {
  id: string;
  email: string;
  firstName: string;
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
}

export interface UserResponse extends User {}
