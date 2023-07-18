export interface IFamily {
  id: string;
  name: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: boolean;
}

export interface FamilyList extends IFamily {
  totalInstruments: number;
}

export interface FamilyResponse {
  items: FamilyList[];
  totalItems: number;
  totalPage: number;
}

export interface IRequest {
  name: string;
}
