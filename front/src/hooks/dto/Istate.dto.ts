export interface State {
  id: string;
  name: string;
  slug: string;
  postal: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: boolean;
}

export interface StateResponse {
  items: State[];
  totalItems: number;
  totalPage: number;
}
