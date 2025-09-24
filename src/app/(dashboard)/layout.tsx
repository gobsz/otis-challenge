import { NavBar } from "@/components/nav-bar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavBar />
      <main className="px-16 py-8">{children}</main>
    </>
  );
}
