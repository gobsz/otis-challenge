import { MessageForm } from "./message-form";
import { InstalacaoNav } from "./nav-bar";

export default function Instalacao() {
  return (
    <>
      <InstalacaoNav />
      <main className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow rounded-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between md:items-center">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">
                Acompanhamento da Instalação
              </h1>
              <p className="mt-2 text-lg text-brand-blue font-medium">
                Edifício Solaris - Unidade 12
              </p>
              <p className="text-sm text-gray-500">ID do Projeto: #P-73901</p>

              <div className="mt-4 flex flex-col sm:flex-row sm:space-x-8 space-y-2 sm:space-y-0 text-sm text-gray-600">
                <div>
                  <span className="font-medium text-gray-900">
                    Gerente de Instalação:
                  </span>
                  <span className="ml-1">Ana Silva</span>
                </div>
                <div>
                  <span className="font-medium text-gray-900">
                    Previsão de Conclusão:
                  </span>
                  <span className="ml-1">15 de Novembro, 2025</span>
                </div>
              </div>
            </div>

            <div className="mt-4 md:mt-0">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                <svg
                  className="-ml-0.5 mr-1.5 h-2 w-2 text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 8 8"
                >
                  <circle cx="4" cy="4" r="3" />
                </svg>
                Em Andamento
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white shadow rounded-lg p-6 md:p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Fases do Projeto
            </h2>

            <ol className="relative border-l border-gray-300">
              <li className="mb-10 ml-8">
                <span className="absolute -left-4 flex items-center justify-center w-8 h-8 bg-green-500 rounded-full ring-4 ring-white">
                  <svg
                    className="w-5 h-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </span>
                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">
                  Pedido Confirmado
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-500">
                  Concluído em 20 de Setembro, 2025
                </time>
                <p className="text-base font-normal text-gray-600">
                  Recebemos e confirmamos todas as especificações técnicas da
                  sua unidade.
                </p>
              </li>
              <li className="mb-10 ml-8">
                <span className="absolute -left-4 flex items-center justify-center w-8 h-8 bg-green-500 rounded-full ring-4 ring-white">
                  <svg
                    className="w-5 h-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </span>
                <h3 className="mb-1 text-lg font-semibold text-gray-900">
                  Fabricação da Unidade
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-500">
                  Concluído em 15 de Outubro, 2025
                </time>
                <p className="text-base font-normal text-gray-600">
                  Seu elevador foi fabricado e passou em todos os testes de
                  qualidade de fábrica.
                </p>
              </li>

              <li className="mb-10 ml-8">
                <span className="absolute -left-4 flex items-center justify-center w-8 h-8 bg-brand-lightblue rounded-full ring-4 ring-white">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75 animate-pulse"></span>
                  <svg
                    className="relative w-5 h-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V14.25m-17.25 4.5h14.25m-14.25 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h.008v.008H5.25v-.008zM5.25 9.75A2.25 2.25 0 013 7.5m0 0A2.25 2.25 0 015.25 5.25m0 0A2.25 2.25 0 017.5 7.5m0 0A2.25 2.25 0 015.25 9.75m14.25-4.5a2.25 2.25 0 01-2.25 2.25m0 0a2.25 2.25 0 01-2.25-2.25m0 0a2.25 2.25 0 012.25-2.25m0 0a2.25 2.25 0 012.25 2.25M17.25 14.25v-1.5m0 1.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0"
                    />
                  </svg>
                </span>
                <h3 className="mb-1 text-lg font-semibold text-brand-blue">
                  Entrega no Local
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-500">
                  Prazo Estimado: 30 de Outubro, 2025
                </time>
                <p className="text-base font-normal text-gray-600">
                  A unidade está em trânsito para o seu endereço. A equipe de
                  instalação já está agendada.
                </p>
              </li>

              <li className="mb-10 ml-8">
                <span className="absolute -left-4 flex items-center justify-center w-8 h-8 bg-gray-300 rounded-full ring-4 ring-white">
                  <svg
                    className="w-5 h-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
                <h3 className="mb-1 text-lg font-semibold text-gray-400">
                  Instalação e Testes
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400">
                  Pendente
                </time>
              </li>

              <li className="ml-8">
                <span className="absolute -left-4 flex items-center justify-center w-8 h-8 bg-gray-300 rounded-full ring-4 ring-white">
                  <svg
                    className="w-5 h-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
                <h3 className="mb-1 text-lg font-semibold text-gray-400">
                  Vistoria e Entrega Final
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400">
                  Pendente
                </time>
              </li>
            </ol>
          </div>

          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Fale com seu Gerente
              </h3>

              <div className="flex items-center space-x-3 mb-4">
                <img
                  className="h-12 w-12 rounded-full"
                  src="https://placehold.co/100x100/003366/FFFFFF?text=A"
                  alt="Avatar do Gerente"
                />
                <div>
                  <p className="font-medium text-gray-800">Ana Silva</p>
                  <p className="text-sm text-gray-500">Gerente de Instalação</p>
                </div>
              </div>

              <MessageForm />
            </div>

            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Detalhes do Pedido
              </h3>
              <dl className="space-y-4">
                <div className="flex justify-between">
                  <dt className="text-sm text-gray-600">Modelo</dt>
                  <dd className="text-sm font-medium text-gray-900">
                    Elevate X-1000
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-sm text-gray-600">Local</dt>
                  <dd className="text-sm font-medium text-gray-900">
                    São Paulo, BR
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-sm text-gray-600">Contrato</dt>
                  <dd className="text-sm font-medium text-gray-900">#C-0982</dd>
                </div>
                <div className="flex justify-between border-t pt-4">
                  <dt className="text-sm text-gray-600">Capacidade</dt>
                  <dd className="text-sm font-medium text-gray-900">
                    8 Pessoas / 600 kg
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-sm text-gray-600">Velocidade</dt>
                  <dd className="text-sm font-medium text-gray-900">1,5 m/s</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-sm text-gray-600">Acabamento</dt>
                  <dd className="text-sm font-medium text-gray-900">
                    Aço Inox Escovado
                  </dd>
                </div>
              </dl>
              <button className="mt-6 w-full flex justify-center items-center cursor-pointer py-2 px-4 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 h-5 w-5"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
                Ver Documentos
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
