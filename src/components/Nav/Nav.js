import { useState, memo } from "react";
import MobileNav from "./MobileNav";
import Burger from "./Burger";

export const navLinksLeft = [
  {
    href: "/",
    name: "Shortly",
  },
  {
    href: "/",
    name: "Features",
  },
  {
    href: "/",
    name: "Pricing",
  },
  {
    href: "/",
    name: "Resources",
  },
];

const Nav = () => {
  const [active, setActive] = useState(false);

  return (
    <nav className="bg-gray-900 pt-6 relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6">
      <Burger active={active} setActive={setActive} />

      <div className="hidden sm:visible sm:flex items-center space-x-8">
        {navLinksLeft.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className={
              link.name === "Shortly"
                ? "text-indigo-200 text-lg font-bold"
                : "text-base font-medium text-white hover:text-gray-200"
            }
          >
            {link.name}
          </a>
        ))}
      </div>
      <div className="hidden sm:block flex items-center md:space-x-6">
        <a
          href="/"
          className="text-base font-medium text-white hover:text-gray-200"
        >
          Log in
        </a>
        <a
          href="/"
          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium text-white hover:bg-gray-700 bg-gray-600 rounded-md"
        >
          Sign up
        </a>
      </div>
      {active && <MobileNav active={active} setActive={setActive} />}
    </nav>
  );
};

export default memo(Nav);
