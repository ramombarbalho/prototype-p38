import { STUDENTS } from "./students";

export const CLASSES = [
  {
    id: "001",
    local: "SOFTEX",
    hour: 1,
    days: 1,
    stack: 1,
    teacher: "DANILO FARIAS",
    students: STUDENTS.filter((s) => s.classe === "001"),
  },
  {
    id: "002",
    local: "SOFTEX",
    hour: 2,
    days: 2,
    stack: 2,
    teacher: "AUGUSTO CÉSAR",
    students: STUDENTS.filter((s) => s.classe === "002"),
  },
  {
    id: "003",
    local: "UFPB",
    hour: 3,
    days: 1,
    stack: 2,
    teacher: "RAONI",
    students: STUDENTS.filter((s) => s.classe === "003"),
  },
];
