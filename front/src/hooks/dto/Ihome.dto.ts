export interface Status {
  groups: number;
  students: number;
  instruments: number;
  naipes: number;
  set: number[];
}
export interface Theory {
  description: string;
}

export interface StatusResponse extends Status {}

export interface TheoryResponse extends Theory {}
