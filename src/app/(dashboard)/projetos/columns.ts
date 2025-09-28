export const columns = [
  {
    key: "id",
    label: "ID",
  },
  {
    key: "client",
    label: "CLIENTE",
  },
  {
    key: "country",
    label: "PAÍS",
  },
  {
    key: "deadline",
    label: "PRAZO",
  },
  {
    key: "status",
    label: "STATUS",
  },
  {
    key: "assignee",
    label: "RESPONSÁVEL",
  },
  {
    key: "actions",
    label: "AÇÕES",
  },
];

export interface ProjectType {
  id: string;
  cliente: string;
  country: string;
  deadline: Date;
  status: string;
  assignee: string;
  actions: string;
}
