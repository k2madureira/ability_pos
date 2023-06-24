export interface Instrument {
  id: string;
  name: string;
  slug: string;
  familyId: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: boolean;
}

export interface InstrumentResponse {
  items: Instrument[];
  totalItems: number;
  totalPage: number;
}
