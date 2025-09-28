import { Costs } from "./costs";
import { Deadlines } from "./deadline";
import { Quality } from "./quality";

export default function Relatorios() {
  return (
    <main className="p-6 md:p-8 space-y-8">
      <Deadlines />
      <Costs />
      <Quality />
    </main>
  );
}
