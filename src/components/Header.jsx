import { Link, NavLink } from "react-router-dom";

function Header() {
  const navLinkClass = ({ isActive }) =>
    `px-3 py-1 rounded-full transition-all duration-300 ${
      isActive ? "bg-white shadow-sm" : "hover:bg-white shadow-sm"
    }`;

  return (
    <header className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 text-sm px-6 md:px-16 pt-6 md:pt-8">
      <Link
        to="/"
        className="font-semibold tracking-[0.18em] uppercase text-slate-800 hover:text-slate-900 justify-self-start"
      >
        Shreyash Ganvir
      </Link>
      <nav className="hidden md:flex items-center gap-2 rounded-full bg-slate-100/80 px-1.5 py-1 text-xs font-medium text-slate-600 justify-self-center">
        <NavLink to="/about" className={navLinkClass}>
          About
        </NavLink>
        <NavLink to="/projects" className={navLinkClass}>
          Projects
        </NavLink>
        <NavLink to="/contact" className={navLinkClass}>
          Contact
        </NavLink>
      </nav>
      <div className="flex items-center gap-2 justify-self-end">
        <a
          href="https://github.com/shreyashganvir77"
          aria-label="GitHub"
          className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-900 shadow-sm hover:border-indigo-500 hover:shadow-md transition-all duration-300"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-4 w-4 fill-current"
          >
            <path d="M12 1.5C6.21 1.5 1.5 6.21 1.5 12c0 4.65 3.015 8.585 7.2 9.975.525.105.72-.225.72-.51 0-.255-.015-1.095-.015-1.995-2.64.48-3.33-.645-3.54-1.23-.12-.3-.63-1.23-1.08-1.485-.36-.195-.87-.675-.015-.69.81-.015 1.39.75 1.59 1.065.93 1.56 2.415 1.125 3.015.855.09-.675.36-1.125.66-1.38-2.34-.27-4.8-1.17-4.8-5.19 0-1.155.405-2.1 1.065-2.835-.105-.27-.465-1.38.105-2.865 0 0 .87-.27 2.85 1.08A9.41 9.41 0 0 1 12 6.27c.885.004 1.776.12 2.607.351 1.98-1.365 2.85-1.08 2.85-1.08.57 1.485.21 2.595.105 2.865.66.735 1.065 1.68 1.065 2.835 0 4.035-2.475 4.92-4.815 5.19.375.315.705.915.705 1.86 0 1.35-.015 2.43-.015 2.76 0 .285.195.63.72.51A10.52 10.52 0 0 0 22.5 12c0-5.79-4.71-10.5-10.5-10.5Z" />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/shreyash-ganvir-a557a6152/"
          aria-label="LinkedIn"
          className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-900 shadow-sm hover:border-indigo-500 hover:shadow-md transition-all duration-300"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-4 w-4 fill-current"
          >
            <path d="M4.98 3.5C4.98 4.6 4.09 5.5 3 5.5 1.91 5.5 1 4.6 1 3.5 1 2.4 1.91 1.5 3 1.5c1.09 0 1.98.9 1.98 2ZM2 8h2V22H2V8Zm6.5 0h3.84v1.89h.05C13 8.72 14.34 8 16.11 8 20 8 21 10.64 21 14.06V22h-3v-7.05c0-1.68-.03-3.84-2.34-3.84-2.34 0-2.7 1.83-2.7 3.72V22h-3V8Z" />
          </svg>
        </a>
        <a
          href="https://leetcode.com/u/shreyash77/"
          aria-label="LeetCode"
          className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-900 shadow-sm hover:border-indigo-500 hover:shadow-md transition-all duration-300"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-4 w-4"
            fill="currentColor"
          >
            <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.214 3.109 8.294 3.109a11.6 11.6 0 0 0 4.206-.793 11.19 11.19 0 0 0 3.667-2.277 11.198 11.198 0 0 0 2.277-3.667 11.6 11.6 0 0 0 .793-4.206 11.576 11.576 0 0 0-.793-4.206 11.19 11.19 0 0 0-2.277-3.667 11.198 11.198 0 0 0-3.667-2.277A11.6 11.6 0 0 0 20.717 0a11.576 11.576 0 0 0-4.206.793 11.19 11.19 0 0 0-3.667 2.277 11.198 11.198 0 0 0-2.277 3.667 11.6 11.6 0 0 0-.793 4.206 11.576 11.576 0 0 0 .793 4.206 11.19 11.19 0 0 0 2.277 3.667 11.198 11.198 0 0 0 3.667 2.277A11.6 11.6 0 0 0 20.717 24a11.576 11.576 0 0 0 4.206-.793 11.19 11.19 0 0 0 3.667-2.277 11.198 11.198 0 0 0 2.277-3.667 11.6 11.6 0 0 0 .793-4.206 11.576 11.576 0 0 0-.793-4.206 11.19 11.19 0 0 0-2.277-3.667 11.198 11.198 0 0 0-3.667-2.277A11.6 11.6 0 0 0 20.717 0zm-6.647 14.823a.749.749 0 0 1 0 1.498H4.515a.749.749 0 0 1 0-1.498h2.321zm3.853 0a.749.749 0 0 1 0 1.498H8.368a.749.749 0 0 1 0-1.498h2.321zm3.853 0a.749.749 0 0 1 0 1.498h-2.32a.749.749 0 0 1 0-1.498h2.32zm3.853 0a.749.749 0 0 1 0 1.498h-2.32a.749.749 0 0 1 0-1.498h2.32z" />
          </svg>
        </a>
      </div>
    </header>
  );
}

export default Header;
