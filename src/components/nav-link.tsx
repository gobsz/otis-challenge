"use client";
import { Link, NavbarItem } from "@heroui/react";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  text: string;
}

export function NavLink({ href, text }: NavLinkProps) {
  const path = usePathname();
  const isPage = path == href;

  return (
    <NavbarItem isActive={isPage}>
      <Link
        color={!isPage ? "foreground" : "primary"}
        aria-current={isPage}
        href={href}
      >
        {text}
      </Link>
    </NavbarItem>
  );
}
