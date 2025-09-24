"use client";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@heroui/react";
import { rows } from "./rows";
import { columns } from "./columns";

export function ProjectsTable() {
  return (
    <Table aria-label="Projects Table" className="h-full">
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>

      <TableBody items={rows} className="overflow-scroll">
        {(item) => (
          <TableRow key={item.key}>
            {(columnKey) => (
              <TableCell>
                {columnKey == "status"
                  ? getStatusCard(item.status)
                  : getKeyValue(item, columnKey)}
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}

function getStatusCard(status: string) {
  let card;
  switch (status) {
    case "Active":
      card = "active chip";
    case "Paused":
      card = "paused chip";
    default:
      card = "null";
  }
  return card;
}
