export interface IMethod {
  id: string;
  title: string;
  slug: string;
  description: string;
  urlImage: string;
  instrumentId: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: boolean;
  instrument: {
    id: string;
    name: string;
    slug: string;
    family: {
      id: string;
      name: string;
      slug: string;
      createdAt: string;
      updatedAt: string;
      deletedAt: boolean;
    };
  };
}

export interface MethodList extends IMethod {}

export interface MethodResponse {
  items: MethodList[];
  totalItems: number;
  totalPage: number;
}

export interface IRequest {
  title: string;
  description: string;
  urlImage: string;
  instrumentId: string;
}
