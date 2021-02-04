import { memo } from "react";

const Burger = ({ active, setActive }) => (
  <div className="flex items-center w-full md:w-auto sm:hidden">
    <div className="-mr-2 flex items-center md:hidden">
      <button
        type="button"
        className="bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white"
        id="main-menu"
        aria-haspopup="true"
        onClick={() => setActive(!active)}
      >
        <span className="sr-only">Open main menu</span>
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
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>
  </div>
);

export default memo(Burger);
