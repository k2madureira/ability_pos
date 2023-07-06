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
  userGroup: {
    group: {
      id: string;
      name: string;
      slug: string;
      createdAt: string;
      updatedAt: string;
      deletedAt: boolean;
    };
  }[];
}

export interface UserResponse extends User {}

export interface StudentsResponse {
  items: User[];
  totalItems: number;
  totalPage: number;
}
