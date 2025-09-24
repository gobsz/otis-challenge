import { Graphs } from "@/app/(dashboard)/graphs";
import { KPICard } from "@/app/(dashboard)/kpi";
import { ProjectTable } from "@/app/(dashboard)/project-table";

export default function Dashboard() {
  return (
    <>
      <h1 className="font-inter font-semibold text-3xl mb-8">Dashboard</h1>

      <KPICard />

      <Graphs />

      <ProjectTable />
    </>
  );
}
