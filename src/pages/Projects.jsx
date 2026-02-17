import Header from "../components/Header";

function Projects() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-pink-50 flex flex-col">
      <Header />

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
                <button
                  onClick={() =>
                    window.open("https://www.referandearn.co.in", "_blank")
                  }
                  className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-50 shadow-[0_16px_28px_rgba(79,70,229,0.35)] hover:bg-indigo-500 transition-all duration-300"
                >
                  Visit Platform
                </button>
                <a
                  href="https://github.com/shreyashganvir77/refer-and-earn"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-900 hover:border-slate-500 hover:shadow-md transition-all duration-300"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Other projects */}
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <button
                onClick={() =>
                  window.open("https://findprojectbuddy.com/", "_blank")
                }
                className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600 hover:text-indigo-500 transition-all duration-300"
              >
                View Project
              </button>
            </div>

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
