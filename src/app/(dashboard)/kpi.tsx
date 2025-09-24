export function KPICard() {
  // ! IMPLEMENTAR BUSCA DE DADOS

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="bg-[#fdfdfd] p-6 rounded-lg shadow">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">Projetos Ativos</p>
            <p className="text-3xl font-bold text-gray-800">78</p>
          </div>
          <div className="bg-blue-100 text-brand-lightblue p-3 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-clipboard-list"
            >
              <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
              <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
              <path d="M12 11h4" />
              <path d="M12 16h4" />
              <path d="M8 11h.01" />
              <path d="M8 16h.01" />
            </svg>
          </div>
        </div>
        <p className="mt-2 text-xs text-gray-500">+3 na última semana</p>
      </div>

      <div className="bg-[#fdfdfd] p-6 rounded-lg shadow">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">
              On-Time Delivery
            </p>
            <p className="text-3xl font-bold text-gray-800">92%</p>
          </div>
          <div className="bg-green-100 text-green-600 p-3 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-check-circle-2"
            >
              <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
          </div>
        </div>
        <p className="mt-2 text-xs text-gray-500">Meta: 90%</p>
      </div>

      <div className="bg-[#fdfdfd] p-6 rounded-lg shadow">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">Custo Médio</p>
            <p className="text-3xl font-bold text-gray-800">R$125k</p>
          </div>
          <div className="bg-yellow-100 text-yellow-600 p-3 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-siren"
            >
              <path d="M12 2c-.3 0-.6.1-.8.2L5.4 5.4c-.2.2-.4.5-.4.8v4.4c0 .3.1.6.2.8l3.4 3.4c.2.2.5.4.8.4h4.4c.3 0 .6-.1.8-.2l3.4-3.4c.2-.2.4-.5.4-.8V6.2c0-.3-.1-.6-.2-.8l-5.8-3.2C12.6 2.1 12.3 2 12 2Z" />
              <path d="M12 12v-4" />
              <path d="M12 16h.01" />
              <path d="M5 20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-4H5v4Z" />
            </svg>
          </div>
        </div>
        <p className="mt-2 text-xs text-gray-500">Orçado vs. Realizado</p>
      </div>

      <div className="bg-[#fdfdfd] p-6 rounded-lg shadow">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">
              Satisfação (CSAT)
            </p>
            <p className="text-3xl font-bold text-gray-800">4.8/5</p>
          </div>
          <div className="bg-purple-100 text-purple-600 p-3 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-star"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          </div>
        </div>
        <p className="mt-2 text-xs text-gray-500">Baseado em 42 avaliações</p>
      </div>
    </div>
  );
}
