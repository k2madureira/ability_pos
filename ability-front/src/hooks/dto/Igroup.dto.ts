export interface Group {
  id: string;
  name: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: boolean;
  groupUsers: {
    user: {
      id: string;
      firstName: string;
      city: string;
    };
  }[];
  totalStudents: number;
}

export interface GroupResponse {
  items: Group[];
  totalItems: number;
  totalPage: number;
}
