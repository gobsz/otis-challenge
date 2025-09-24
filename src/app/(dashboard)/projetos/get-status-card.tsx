import { Chip } from "@heroui/react";

export function getStatusCard(status: string) {
  switch (status) {
    case "Active":
      return (
        <Chip size="sm" variant="shadow" className="bg-blue-100 text-blue-800">
          Active
        </Chip>
      );

    case "Done":
      return (
        <Chip
          size="sm"
          variant="shadow"
          className="bg-green-100 text-green-800"
        >
          Completed
        </Chip>
      );

    case "Paused":
      return (
        <Chip
          size="sm"
          variant="shadow"
          className="bg-yellow-100 text-yellow-800"
        >
          Paused
        </Chip>
      );

    default:
      return (
        <Chip size="sm" variant="shadow" className="bg-gray-100 text-gray-800">
          Inactive
        </Chip>
      );
  }
}
