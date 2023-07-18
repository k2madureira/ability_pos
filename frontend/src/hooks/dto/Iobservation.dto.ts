export interface Observation {
  id: string;
  studentId: string;
  instructorId: string;
  description: string;
  replyFromId: null;
  createdAt: string;
  updatedAt: string;
  deletedAt: false;
  replies: any;
  student: {
    id: string;
    firstName: string;
  };
  instructor: {
    id: string;
    firstName: string;
  };
}

export interface ObservationResponse {
  items: Observation[];
  totalItems: number;
  totalPage: number;
}
