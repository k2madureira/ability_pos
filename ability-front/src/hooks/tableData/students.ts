import { createColumnHelper } from "@tanstack/react-table";
import { User } from "../dto/Iuser.dto";

type Student = {
  name: string;
  group: string;
  instrument: string;
};

const columnHelper = createColumnHelper<Student>();

export const columnsStudent = [
  columnHelper.accessor((row) => row.name, {
    id: "Name",
    cell: (info) => `${info.getValue()}`,
    header: () => "Name",
    footer: (info) => info.column.id,
    enableColumnFilter: true,
  }),
  columnHelper.accessor((row) => row.group, {
    id: "Group",
    cell: (info) => `${info.getValue()}`,
    header: () => "Group",
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor((row) => row.instrument, {
    id: "Instrument",
    cell: (info) => `${info.getValue()}`,
    header: () => "Instrument",
    footer: (info) => info.column.id,
  }),
];

export function buildStudentsData(studentsResponse: User[] | undefined): {
  data: any;
} {
  const data = studentsResponse?.length
    ? studentsResponse.map((student) => ({
        name: student.firstName,
        group: student.userGroup[0].group.name,
        instrument: student.instrument.name,
      }))
    : [
        {
          name: "-",
          group: "-",
          instrument: "-",
        },
      ];

  return { data };
}
