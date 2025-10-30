/* eslint-disable  @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export function Quality() {
  const qualityRef = useRef<any>(null);

  useEffect(() => {
    if (!qualityRef || !qualityRef.current) return;
    const qualityCtx = qualityRef.current.getContext("2d");

    const qualityChart = new Chart(qualityCtx, {
      type: "bar",
      data: {
        labels: [
          "Acabamento",
          "Elétrica",
          "Nivelamento",
          "Documentação",
          "Ruído",
        ],
        datasets: [
          {
            label: "Nº de Ocorrências",
            data: [22, 18, 15, 9, 5],
            backgroundColor: "#F59E0B",
            borderColor: "#D97706",
            borderWidth: 1,
          },
        ],
      },
      options: {
        indexAxis: "y",
        responsive: true,
        plugins: {
          legend: { display: false },
          title: {
            display: true,
            text: "Principais Ocorrências de Não Conformidade",
          },
        },
      },
    });

    return () => qualityChart.destroy();
  }, []);

  return (
    <section className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-3xl font-semibold text-gray-800 mb-4">
        Gestão de Qualidade
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="text-sm font-medium text-gray-500">Satisfação (CSAT)</p>
          <p className="text-3xl font-bold text-blue-600">4.8 / 5</p>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="text-sm font-medium text-gray-500">
            Não Conformidades / Proj.
          </p>
          <p className="text-3xl font-bold text-gray-800">1.2</p>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="text-sm font-medium text-gray-500">Aprovação de 1ª</p>
          <p className="text-3xl font-bold text-gray-800">95%</p>
        </div>
      </div>
      <div>
        <canvas ref={qualityRef} />
      </div>
    </section>
  );
}
