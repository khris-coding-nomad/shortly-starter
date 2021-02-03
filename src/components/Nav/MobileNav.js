import { navLinksLeft } from "./Nav";

const MobileNav = ({ active, setActive }) => (
  <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top md:hidden">
    <div className="rounded-lg bg-white overflow-hidden">
      <div className="px-5 pt-4 flex items-center justify-end">
        <div className="-mr-2">
          <button
            type="button"
            onClick={() => setActive(!active)}
            className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-600"
          >
            <span className="sr-only">Close menu</span>
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
      <div role="menu" aria-orientation="vertical" aria-labelledby="main-menu">
        <div className="px-2 space-y-1" role="none">
          {navLinksLeft.map((link) => (
            <a
              key={link.name}
              href={link.href}
              role="menuitem"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
            >
              {link.name}
            </a>
          ))}
        </div>
        <div
          role="none"
          className="mt-6 px-5 py-4 text-center border-t border-gray-200"
        >
          <a
            href="/"
            className="text-base font-medium text-gray-900 hover:text-gray-700"
          >
            Log in
          </a>
          <a
            href="/"
            className="ml-4 text-base font-medium text-gray-900 hover:text-gray-700"
          >
            Sign up
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default MobileNav;
