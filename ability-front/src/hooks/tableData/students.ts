import { createColumnHelper } from "@tanstack/react-table";

type Student = {
  name: string;
  group: string;
  instrument: string;
};

export const studentData: Student[] = [
  {
    name: "Lenilson 1111111111111111111",
    group: "Adulto",
    instrument: "Violino",
  },
  {
    name: "Samuel",
    group: "Infantil",
    instrument: "Violino",
  },
  {
    name: "Lenilson 1111111111111111111",
    group: "Adulto",
    instrument: "Violino",
  },
  {
    name: "Samuel",
    group: "Infantil",
    instrument: "Violino",
  },
  {
    name: "Lenilson 1111111111111111111",
    group: "Adulto",
    instrument: "Violino",
  },
  {
    name: "Samuel",
    group: "Infantil",
    instrument: "Violino",
  },
  {
    name: "Lenilson 1111111111111111111",
    group: "Adulto",
    instrument: "Violino",
  },
  {
    name: "Samuel",
    group: "Infantil",
    instrument: "Violino",
  },
];

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
