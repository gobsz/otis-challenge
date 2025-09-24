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
import { getStatusCard } from "./get-status-card";

export function ProjectsTable() {
  return (
    <Table isStriped aria-label="Projects Table" className="h-full">
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn
            key={column.key}
            align={column.key == "status" ? "center" : "start"}
          >
            {column.label}
          </TableColumn>
        )}
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
