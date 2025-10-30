/* eslint-disable  @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useRef } from "react";
import { Chart } from "chart.js";

export function Deadlines() {
  const deadlineRef = useRef<any>(null);

  useEffect(() => {
    if (!deadlineRef || !deadlineRef.current) return;
    const deadlineCtx = deadlineRef.current.getContext("2d");

    const deadlineChart = new Chart(deadlineCtx, {
      type: "line",
      data: {
        labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
        datasets: [
          {
            label: "On-Time Delivery (%)",
            data: [88, 90, 91, 89, 93, 92],
            borderColor: "#10B981",
            backgroundColor: "rgba(16, 185, 129, 0.1)",
            fill: true,
            tension: 0.3,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          title: { display: true, text: "Evolução Mensal do On-Time Delivery" },
        },
      },
    });

    return () => deadlineChart.destroy();
  }, []);

  return (
    <section className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-3xl font-semibold text-gray-800 mb-4">
        Análise de Prazos
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="text-sm font-medium text-gray-500">
            On-Time Delivery (OTD)
          </p>
          <p className="text-3xl font-bold text-green-600">92%</p>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="text-sm font-medium text-gray-500">
            Duração Média do Projeto
          </p>
          <p className="text-3xl font-bold text-gray-800">124 dias</p>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="text-sm font-medium text-gray-500">Atraso Médio</p>
          <p className="text-3xl font-bold text-red-600">8 dias</p>
        </div>
      </div>
      <div>
        <canvas ref={deadlineRef} />
      </div>
    </section>
  );
}
