import { Link } from "react-router-dom";

function Projects() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-pink-50 flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between gap-4 text-sm px-6 md:px-16 pt-6 md:pt-8">
        <div className="font-semibold tracking-[0.18em] uppercase text-slate-800">
          Shreyash Ganvir
        </div>
        <nav className="hidden md:flex items-center gap-2 rounded-full bg-slate-100/80 px-1.5 py-1 text-xs font-medium text-slate-600">
          <Link
            to="/about"
            className="px-3 py-1 rounded-full hover:bg-white shadow-sm transition-all duration-300"
          >
            About
          </Link>
          <Link
            to="/projects"
            className="px-3 py-1 rounded-full bg-white shadow-sm transition-all duration-300"
          >
            Projects
          </Link>
          <button className="px-3 py-1 rounded-full hover:bg-white shadow-sm transition-all duration-300">
            Contact
          </button>
        </nav>
        <div className="flex items-center gap-2">
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
        </div>
      </header>

      {/* Projects content */}
      <section className="w-full py-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Featured project: Refer & Earn */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-8 md:p-10 grid gap-10 md:grid-cols-2 transition-all duration-300">
            {/* Visual / preview placeholder */}
            <div className="rounded-2xl bg-gradient-to-br from-indigo-600 via-indigo-500 to-sky-500 p-6 flex flex-col justify-between text-slate-50 shadow-lg">
              <div className="space-y-4">
                <p className="text-xs font-semibold tracking-[0.28em] uppercase text-indigo-100/80">
                  Featured Project
                </p>
                <h2 className="text-2xl md:text-3xl font-semibold">
                  Refer &amp; Earn – IT Referral Marketplace
                </h2>
                <p className="text-sm text-indigo-100/90">
                  A referral marketplace that connects job seekers with industry
                  professionals offering verified company referrals.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-3 text-xs font-medium">
                <span className="rounded-full bg-white/10 px-3 py-1 backdrop-blur">
                  Streamlined referral workflows
                </span>
                <span className="rounded-full bg-white/10 px-3 py-1 backdrop-blur">
                  Company-based pricing model
                </span>
              </div>
            </div>

            {/* Description / details */}
            <div className="flex flex-col justify-between gap-6">
              <div className="space-y-3">
                <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
                  Refer &amp; Earn – IT Referral Marketplace
                </h2>
                <p className="text-sm md:text-base leading-relaxed text-slate-600">
                  Built a referral marketplace platform that connects job
                  seekers with professionals willing to provide verified company
                  referrals. Implemented company-based pricing logic, secure
                  authentication, and scalable backend architecture to support
                  referral workflows.
                </p>
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
                  React · Node.js / Express · MongoDB · Azure · REST APIs
                </p>
                <p className="text-xs text-slate-500">
                  Designed monetization model and company-based pricing system
                  to standardize referral requests.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <button className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-50 shadow-[0_16px_28px_rgba(79,70,229,0.35)] hover:bg-indigo-500 transition-all duration-300">
                  Visit Platform
                </button>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-900 hover:border-slate-500 hover:shadow-md transition-all duration-300"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Other projects */}
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* TASKIFY */}
            <div className="rounded-2xl p-6 bg-slate-50/80 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-base md:text-lg font-semibold text-slate-900 mb-2">
                TASKIFY – Real-Time Task Management System
              </h3>
              <p className="text-sm text-slate-600 mb-4">
                Real-time team task management with role-based access control
                and WebSocket-powered live notifications to keep distributed
                teams in sync.
              </p>
              <p className="text-xs text-slate-500 mb-4">
                React · Express.js · MongoDB · WebSockets · JWT
              </p>
              <button className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600 hover:text-indigo-500 transition-all duration-300">
                View Project
              </button>
            </div>

            {/* Project Companion */}
            <div className="rounded-2xl p-6 bg-slate-50/80 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-base md:text-lg font-semibold text-slate-900 mb-2">
                Project Companion – Collaboration Platform
              </h3>
              <p className="text-sm text-slate-600 mb-4">
                Full-stack platform to help developers discover collaborators
                for side projects, with authentication, project listings, and
                secure REST APIs.
              </p>
              <p className="text-xs text-slate-500 mb-4">
                React · Express.js · MongoDB · Tailwind · Google Auth
              </p>
              <button className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600 hover:text-indigo-500 transition-all duration-300">
                View Project
              </button>
            </div>

            {/* Placeholder for future work */}
            <div className="rounded-2xl p-6 bg-slate-50/60 border border-dashed border-slate-200 flex flex-col justify-center items-start gap-2 text-left">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
                Coming Soon
              </p>
              <p className="text-sm text-slate-500">
                New personal project in progress – AI-driven tooling,
                infrastructure, or developer experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="pb-6 md:pb-8 text-[11px] text-center text-slate-400">
        © {new Date().getFullYear()} Shreyash Ganvir. All rights reserved.
      </footer>
    </div>
  );
}

export default Projects;
