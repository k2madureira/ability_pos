import { createColumnHelper } from "@tanstack/react-table";
import { Group } from "../dto/Igroup.dto";

type tableGroup = {
  name: string;
  students: number;
  started: string;
};

const columnHelper = createColumnHelper<tableGroup>();

export const columnsGroups = [
  columnHelper.accessor((row) => row.name, {
    id: "Name",
    cell: (info) => `${info.getValue()}`,
    header: () => "Name",
    footer: (info) => info.column.id,
    enableColumnFilter: true,
  }),
  columnHelper.accessor((row) => row.students, {
    id: "Students",
    cell: (info) => `${info.getValue()}`,
    header: () => "Students",
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor((row) => row.started, {
    id: "Started",
    cell: (info) => `${info.getValue()}`,
    header: () => "Started",
    footer: (info) => info.column.id,
  }),
];

export function buildGroupsData(groupsResponse: Group[] | undefined): {
  data: any;
} {
  const data = groupsResponse?.length
    ? groupsResponse.map((group) => ({
        name: group.name,
        students: group.totalStudents,
        started: group.createdAt,
      }))
    : [
        {
          name: "-",
          students: 0,
          started: "-",
        },
      ];

  return { data };
}
