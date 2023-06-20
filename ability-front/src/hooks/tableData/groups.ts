import { createColumnHelper } from "@tanstack/react-table";

type Group = {
  name: string;
  students: number;
  instrument: string;
};

export const groupData: Group[] = [
  {
    name: "Infantil",
    students: 2,
    instrument: "Violino",
  },
  {
    name: "Infantil B",
    students: 3,
    instrument: "Violino",
  },
  {
    name: "Juvenil lvl 1",
    students: 2,
    instrument: "Trompete",
  },
  {
    name: "Juvenil lvl 2",
    students: 3,
    instrument: "Clarinete",
  },
  {
    name: "Juvenil lvl 3",
    students: 2,
    instrument: "Trompete",
  },
  {
    name: "Adulto",
    students: 3,
    instrument: "Viola",
  },
  {
    name: "Adulto 2",
    students: 2,
    instrument: "Violino",
  },
  {
    name: "Adulto 3",
    students: 3,
    instrument: "Flauta",
  },
];

const columnHelper = createColumnHelper<Group>();

export const columnsGroup = [
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
  columnHelper.accessor((row) => row.instrument, {
    id: "Instrument",
    cell: (info) => `${info.getValue()}`,
    header: () => "Instrument",
    footer: (info) => info.column.id,
  }),
];
