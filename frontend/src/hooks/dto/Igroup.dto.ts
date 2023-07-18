export interface IGroup {
  id: string;
  name: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: boolean;
}

export interface GroupList extends IGroup {
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
  items: GroupList[];
  totalItems: number;
  totalPage: number;
}

export interface IRequest {
  name: string;
  users?: {
    userId: string;
    instructor: boolean;
  }[];
}
