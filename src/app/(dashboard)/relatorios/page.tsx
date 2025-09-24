import { Costs } from "./costs";
import { Deadlines } from "./deadline";
import { Quality } from "./quality";

export default function Relatorios() {
  return (
    <>
      <h1 className="font-inter font-semibold text-3xl mb-4">Prazos</h1>
      <Deadlines />
      <h1 className="font-inter font-semibold text-3xl mb-4">Custos</h1>
      <Costs />
      <h1 className="font-inter font-semibold text-3xl mb-4">Qualidade</h1>
      <Quality />
    </>
  );
}
