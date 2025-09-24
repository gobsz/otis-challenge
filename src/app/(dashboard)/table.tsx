export function Table() {
  return (
    <table className="w-full text-sm text-left text-gray-500">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
          <th scope="col" className="px-6 py-3">
            ID do Projeto
          </th>
          <th scope="col" className="px-6 py-3">
            Cliente
          </th>
          <th scope="col" className="px-6 py-3">
            País
          </th>
          <th scope="col" className="px-6 py-3">
            Status
          </th>
          <th scope="col" className="px-6 py-3">
            Responsável
          </th>
          <th scope="col" className="px-6 py-3">
            Ações
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-white border-b hover:bg-gray-50">
          <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
            PRJ-0078
          </td>
          <td className="px-6 py-4">Cliente Feliz S.A</td>
          <td className="px-6 py-4">Brasil</td>
          <td className="px-6 py-4">
            <span className="inline-flex items-center bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
              <span className="w-2 h-2 mr-1.5 bg-blue-500 rounded-full"></span>
              Instalação
            </span>
          </td>
          <td className="px-6 py-4">Ana Paula</td>
          <td className="px-6 py-4">
            <a
              href="#"
              className="font-medium text-brand-lightblue hover:underline"
            >
              Ver
            </a>
          </td>
        </tr>
        <tr className="bg-white border-b hover:bg-gray-50">
          <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
            PRJ-0077
          </td>
          <td className="px-6 py-4">Edifícios Seguros</td>
          <td className="px-6 py-4">Argentina</td>
          <td className="px-6 py-4">
            <span className="inline-flex items-center bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
              <span className="w-2 h-2 mr-1.5 bg-yellow-500 rounded-full"></span>
              Produção
            </span>
          </td>
          <td className="px-6 py-4">Carlos Silva</td>
          <td className="px-6 py-4">
            <a
              href="#"
              className="font-medium text-brand-lightblue hover:underline"
            >
              Ver
            </a>
          </td>
        </tr>
        <tr className="bg-white border-b hover:bg-gray-50">
          <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
            PRJ-0076
          </td>
          <td className="px-6 py-4">Torres Altas</td>
          <td className="px-6 py-4">Chile</td>
          <td className="px-6 py-4">
            <span className="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
              <span className="w-2 h-2 mr-1.5 bg-green-500 rounded-full"></span>
              Concluído
            </span>
          </td>
          <td className="px-6 py-4">Maria Oliveira</td>
          <td className="px-6 py-4">
            <a
              href="#"
              className="font-medium text-brand-lightblue hover:underline"
            >
              Ver
            </a>
          </td>
        </tr>
        <tr className="bg-white hover:bg-gray-50">
          <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
            PRJ-0075
          </td>
          <td className="px-6 py-4">Condomínio Central</td>
          <td className="px-6 py-4">Brasil</td>
          <td className="px-6 py-4">
            <span className="inline-flex items-center bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
              <span className="w-2 h-2 mr-1.5 bg-blue-500 rounded-full"></span>
              Instalação
            </span>
          </td>
          <td className="px-6 py-4">João Pereira</td>
          <td className="px-6 py-4">
            <a
              href="#"
              className="font-medium text-brand-lightblue hover:underline"
            >
              Ver
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
