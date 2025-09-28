export function LoginForm() {
  return (
    <>
      <form action="#" method="POST">
        <div className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#007BFF] focus:border-transparent transition"
                placeholder="voce@empresa.com"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Senha
            </label>
            <div className="mt-1">
              <input
                id="password"
                name="password"
                type="password"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#007BFF] focus:border-transparent transition"
                placeholder="••••••••"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-[#007BFF] focus:ring-[#007BFF] border-gray-300 rounded cursor-pointer"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900 cursor-pointer"
              >
                Lembrar-me
              </label>
            </div>

            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-[#007BFF] hover:text-blue-700"
              >
                Esqueceu a senha?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full cursor-pointer flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-[#007BFF] hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#007BFF] transition-colors"
            >
              Entrar
            </button>
          </div>
        </div>
      </form>

      <div className="mt-8 text-center text-sm text-gray-600">
        <p>
          Problemas para acessar?{" "}
          <a
            href="#"
            className="font-medium text-[#007BFF] hover:text-blue-700"
          >
            Contate o suporte
          </a>
        </p>
      </div>
    </>
  );
}
