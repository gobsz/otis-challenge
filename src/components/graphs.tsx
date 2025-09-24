"use client";
import Chart from "chart.js/auto";
import { useEffect, useRef } from "react";

export function Graphs() {
  const barChartRef = useRef(null);
  const doughnutChartRef = useRef(null);

  useEffect(() => {
    // --- Bar Chart ---
    const barCtx = barChartRef.current.getContext("2d");

    const barChart = new Chart(barCtx, {
      type: "bar",
      data: {
        labels: ["Brasil", "Argentina", "Chile", "Colômbia", "México"],
        datasets: [
          {
            label: "Nº de Projetos",
            data: [35, 18, 12, 8, 5],
            backgroundColor: "#007BFF",
            borderColor: "#0056b3",
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    // --- Doughnut Chart ---
    const doughnutCtx = doughnutChartRef.current.getContext("2d");
    const doughnutChart = new Chart(doughnutCtx, {
      type: "doughnut",
      data: {
        labels: ["Venda", "Produção", "Instalação", "Concluído"],
        datasets: [
          {
            data: [10, 25, 30, 13],
            backgroundColor: ["#6366F1", "#F59E0B", "#3B82F6", "#10B981"],
            hoverOffset: 4,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
        },
      },
    });

    // Cleanup para evitar múltiplas instâncias
    return () => {
      barChart.destroy();
      doughnutChart.destroy();
    };
  }, []);

  return (
    <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow">
        <h2 className="font-semibold text-gray-800 text-2xl mb-4">
          Projetos por País
        </h2>
        <canvas ref={barChartRef}></canvas>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="font-semibold text-gray-800 text-2xl mb-4">
          Status dos Projetos
        </h2>
        <canvas ref={doughnutChartRef}></canvas>
      </div>
    </div>
  );
}
