import { ProjectTable } from "./project-table";

export function ProjectTableView() {
  return (
    <div className="mt-8 bg-[#fdfdfd] rounded-lg shadow overflow-hidden">
      <div className="p-6">
        <h2 className="font-semibold text-gray-800 text-2xl">
          Projetos Recentes
        </h2>
      </div>

      <div className="overflow-x-auto">
        <ProjectTable />
      </div>
    </div>
  );
}
