import Link from "next/link";

export function InstalacaoNav() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#003366"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-up-right-square"
            >
              <rect width="18" height="18" x="3" y="3" rx="2" />
              <path d="M8 8h8v8" />
              <path d="m8 16 8-8" />
            </svg>
            <h1 className="text-2xl font-bold text-brand-blue ml-2">
              Elevate LATAM
            </h1>
          </div>
          <div className="flex items-center">
            <img
              className="h-10 w-10 rounded-full object-cover"
              src="https://placehold.co/100x100/667EEA/FFFFFF?text=C"
              alt="Avatar do cliente"
            />
            <Link
              href="/cliente/login"
              className="ml-4 text-sm font-medium text-gray-600 hover:text-brand-blue"
            >
              Sair
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
