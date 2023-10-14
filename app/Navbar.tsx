import Link from "next/link";
import React from "react";
import { AiFillBug } from "react-icons/ai";

const Navbar = () => {
  const links = [
    {
      label: "Dashboard",
      href: "/",
    },
    {
      label: "Issues",
      href: ".issues",
    },
  ];
  return (
    <nav className="flex border-b h-14 items-center px-6 mb-6 space-x-6">
      <Link href="/">
        <AiFillBug />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link href={link.href} key={link.href}>
            <li className="text-zinc-500 hover:text-zinc-800 transition-colors">
              {link.label}
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
