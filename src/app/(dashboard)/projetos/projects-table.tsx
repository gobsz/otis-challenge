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
import { columns } from "./columns";
import { getStatusCard } from "./get-status-card";
import { projects } from "./projects";
import Link from "next/link";
import { redirect } from "next/navigation";

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

      <TableBody items={projects} className="overflow-scroll">
        {(item) => (
          <TableRow
            key={item.id}
            onClick={() => redirect(`/projetos/${item.id}`)}
            className="cursor-pointer hover:scale-103 transition-transform ease-in-out"
          >
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
