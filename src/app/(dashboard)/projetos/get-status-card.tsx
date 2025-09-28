import { Chip } from "@heroui/react";

export function getStatusCard(status: string) {
  switch (status) {
    case "Active":
      return (
        <Chip
          size="sm"
          color="primary"
          variant="dot"
          className="bg-blue-100 text-blue-800 border-none"
        >
          Ativo
        </Chip>
      );

    case "Done":
      return (
        <Chip
          size="sm"
          color="success"
          variant="dot"
          className="bg-green-100 text-green-800 border-none"
        >
          Completo
        </Chip>
      );

    case "Paused":
      return (
        <Chip
          size="sm"
          variant="dot"
          color="warning"
          className="bg-yellow-100 text-yellow-800 border-none"
        >
          Pausado
        </Chip>
      );

    default:
      return (
        <Chip
          size="sm"
          color="default"
          variant="dot"
          className="bg-gray-100 text-gray-800 border-none"
        >
          Inativo
        </Chip>
      );
  }
}
