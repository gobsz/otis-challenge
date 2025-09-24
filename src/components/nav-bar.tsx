import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Avatar,
} from "@heroui/react";
import { NavLink } from "./nav-link";

const AcmeLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

const links = [
  {
    href: "/",
    text: "Dashboard",
  },
  {
    href: "/projetos",
    text: "Projetos",
  },
  {
    href: "/relatorios",
    text: "Relatórios",
  },
];

export function NavBar() {
  return (
    <Navbar className="w-11/12 mx-auto p-1 top-4 rounded-2xl bg-gray-100 shadow-xl">
      <NavbarBrand className="text-[#0a0a0a]">
        <AcmeLogo />
        <p className="font-bold text-inherit text-xl">Elevate LATAM</p>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {links.map((link, idx) => (
          <NavLink {...link} key={idx} />
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Avatar
            isBordered
            color="default"
            src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
          />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
