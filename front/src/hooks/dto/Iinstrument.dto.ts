export interface IInstrument {
  id: string;
  name: string;
  slug: string;
  familyId: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: boolean;
}

export interface InstrumentList extends IInstrument {
  family: {
    name: string;
  };
  totalStudents: number;
  totalMethods: number;
}

export interface InstrumentResponse {
  items: InstrumentList[];
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
