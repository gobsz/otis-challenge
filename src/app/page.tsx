import { Graphs } from "@/components/graphs";
import { KPICard } from "@/components/kpi";
import { ProjectTable } from "@/components/project-table";
import { Spacer } from "@heroui/react";

export default function Home() {
  return (
    <main className="px-16 py-8">
      <h1 className="font-inter text-3xl mb-8">// DASHBOARD</h1>

      <KPICard />

      <Graphs />

      <ProjectTable />
    </main>
  );
}
