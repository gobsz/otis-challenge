"use client";
import { useEffect, useRef } from "react";
import { Chart } from "chart.js";

export function Costs() {
  const costsRef = useRef(null);

  useEffect(() => {
    if (!costsRef || !costsRef.current) return;
    const costsCtx = costsRef.current.getContext("2d");
    const costsChart = new Chart(costsCtx, {
      type: "bar",
      data: {
        labels: ["Brasil", "Argentina", "Chile"],
        datasets: [
          {
            label: "Orçado",
            data: [550000, 320000, 210000],
            backgroundColor: "#A5B4FC",
          },
          {
            label: "Realizado",
            data: [545000, 330000, 205000],
            backgroundColor: "#3B82F6",
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          title: { display: true, text: "Custo Orçado vs. Realizado por País" },
        },
        scales: { x: { stacked: false }, y: { stacked: false } },
      },
    });

    return () => costsChart.destroy();
  }, []);

  return (
    <section className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-3xl font-semibold text-gray-800 mb-4">
        Análise de Custos
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="text-sm font-medium text-gray-500">
            Adesão ao Orçamento
          </p>
          <p className="text-3xl font-bold text-purple-500">98%</p>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="text-sm font-medium text-gray-500">
            Custo Total (Período)
          </p>
          <p className="text-3xl font-bold text-gray-800">R$ 1.2M</p>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="text-sm font-medium text-gray-500">
            Custo Médio por Projeto
          </p>
          <p className="text-3xl font-bold text-gray-800">R$ 125k</p>
        </div>
      </div>
      <div>
        <canvas ref={costsRef} />
      </div>
    </section>
  );
}
