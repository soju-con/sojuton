import Link from "next/link";
import React from "react";

const NavLinkItems = [
  {
    name: "Schedule",
    href: "#schedule",
  },
  {
    name: "Location",
    href: "#location",
  },
  {
    name: "FAQ",
    href: "#faq",
  },
];

const Header = () => {
  return (
    <header className="navbar bg-transparent backdrop-blur fixed top-0 z-40">
      <div className="flex-1">
        <Link
          href="/"
          className="btn btn-ghost normal-case text-2xl font-climate-crisis text-primary"
        >
          소주톤
        </Link>
      </div>
      <nav className="flex-none">
        <ul className="menu menu-horizontal px-1 space-x-2">
          {NavLinkItems.map(({ name, href }) => (
            <li key={href}>
              <Link href={href} className="font-semibold">
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
