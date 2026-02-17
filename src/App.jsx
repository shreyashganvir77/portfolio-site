function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-pink-50 flex flex-col">
      <header className="flex items-center justify-between gap-4 text-sm px-6 md:px-16 pt-6 md:pt-8">
        <div className="font-semibold tracking-[0.18em] uppercase text-slate-800">
          Shreyash Ganvir
        </div>
        <nav className="hidden md:flex items-center gap-2 rounded-full bg-slate-100/80 px-1.5 py-1 text-xs font-medium text-slate-600">
          <button className="px-3 py-1 rounded-full hover:bg-white shadow-sm transition">
            About
          </button>
          <button className="px-3 py-1 rounded-full hover:bg-white shadow-sm transition">
            Projects
          </button>
          <button className="px-3 py-1 rounded-full hover:bg-white shadow-sm transition">
            Contact
          </button>
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/shreyashganvir77"
            aria-label="GitHub"
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-900 shadow-sm hover:border-indigo-500 hover:shadow-md transition"
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
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-900 shadow-sm hover:border-indigo-500 hover:shadow-md transition"
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
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 mb-3 leading-tight">
            Hi, I&apos;m Shreyash Ganvir
          </h1>
          <p className="text-base md:text-xl text-slate-700 mb-5">
            Software Engineer II | Expert in Azure Infrastructure and Automation
          </p>
          <p className="text-sm md:text-base leading-relaxed text-slate-600 mb-8">
            Software engineer focused on scalable distributed systems, cloud
            architecture, and intelligent automation.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-2.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-50 shadow-[0_18px_30px_rgba(79,70,229,0.45)] hover:bg-indigo-500 transition">
              View Projects
            </button>
            <button className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-2.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-900 shadow-sm hover:border-slate-500 hover:shadow-md transition">
              Download Resume
            </button>
          </div>
        </div>
      </main>

      <footer className="pb-6 md:pb-8 text-[11px] text-center text-slate-400">
        © {new Date().getFullYear()} Shreyash Ganvir. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
