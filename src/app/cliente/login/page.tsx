import { LoginForm } from "@/components/login-form";

export default function LogInCliente() {
  return (
    <main className="flex min-h-screen">
      <div className="hidden lg:flex w-1/2 flex-col items-center justify-center bg-[#003366] text-white p-12 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full translate-x-1/4 translate-y-1/4"></div>

        <div className="flex items-center justify-center mb-6 z-10">
          <h1 className="text-4xl font-bold ml-3">OTIS</h1>
        </div>

        <p className="text-lg max-w-sm z-10">
          Acompanhe as suas <b>instalações</b> de forma centralizada e
          simplificada.
        </p>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12">
        <div className="w-full max-w-md">
          <div className="lg:hidden flex items-center justify-center mb-8 text-[#003366]">
            <h1 className="text-3xl font-bold ml-3">Elevate LATAM</h1>
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Acesse sua conta
          </h2>
          <p className="text-gray-600 mb-8">
            Bem-vindo de volta! Por favor, insira seus dados.
          </p>

          <LoginForm url="/cliente" />
        </div>
      </div>
    </main>
  );
}
