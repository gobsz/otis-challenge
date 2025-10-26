import { Chip } from "@heroui/react";

export function getStatusCard(status: string) {
  switch (status) {
    case "Active":
      return (
        <Chip
          size="sm"
          color="default"
          variant="shadow"
          className="bg-blue-100 text-blue-800 border-none"
        >
          Ativo
        </Chip>
      );

    case "Done":
      return (
        <Chip
          size="sm"
          color="default"
          variant="shadow"
          className="bg-green-100 text-green-800 border-none"
        >
          Completo
        </Chip>
      );

    case "Sale":
      return (
        <Chip
          size="sm"
          color="default"
          variant="shadow"
          className="bg-fuchsia-100 text-fuchsia-800 border-none"
        >
          Venda
        </Chip>
      );

    case "Paused":
      return (
        <Chip
          size="sm"
          variant="shadow"
          color="default"
          className="bg-yellow-100 text-yellow-800 border-none"
        >
          Pausado
        </Chip>
      );

    case "Production":
      return (
        <Chip
          size="sm"
          variant="shadow"
          color="default"
          className="bg-rose-100 text-rose-800 border-none"
        >
          Produção
        </Chip>
      );

    default:
      return (
        <Chip
          size="sm"
          color="default"
          variant="shadow"
          className="bg-gray-100 text-gray-800 border-none"
        >
          Inativo
        </Chip>
      );
  }
}
