import Header from "../components/Header";

function Contact() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-pink-50 flex flex-col">
      <Header />

      <section className="flex-1 flex items-center justify-center px-6 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900">
            Let&apos;s Work Together
          </h1>
          <p className="mt-6 text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            I&apos;m always excited to collaborate, innovate, and build
            meaningful solutions. Whether you have a project, a job opportunity,
            or just want to connect — let&apos;s talk!
          </p>
          <a
            href="mailto:ganvirshreyash@gmail.com"
            className="mt-10 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium bg-indigo-600 text-white hover:bg-indigo-700 transition-all duration-300 shadow-[0_16px_28px_rgba(79,70,229,0.35)] hover:shadow-[0_20px_32px_rgba(79,70,229,0.4)]"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <path d="m22 6-10 7L2 6" />
            </svg>
            Get in Touch
          </a>

          <div className="flex justify-center gap-6 mt-8 text-slate-500 hover:[&>a]:text-slate-900 transition-colors">
            <a
              href="https://github.com/shreyashganvir77"
              aria-label="GitHub"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-600 hover:border-indigo-400 hover:text-indigo-600 transition-all duration-300"
              target="_blank"
              rel="noreferrer"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                <path d="M12 1.5C6.21 1.5 1.5 6.21 1.5 12c0 4.65 3.015 8.585 7.2 9.975.525.105.72-.225.72-.51 0-.255-.015-1.095-.015-1.995-2.64.48-3.33-.645-3.54-1.23-.12-.3-.63-1.23-1.08-1.485-.36-.195-.87-.675-.015-.69.81-.015 1.39.75 1.59 1.065.93 1.56 2.415 1.125 3.015.855.09-.675.36-1.125.66-1.38-2.34-.27-4.8-1.17-4.8-5.19 0-1.155.405-2.1 1.065-2.835-.105-.27-.465-1.38.105-2.865 0 0 .87-.27 2.85 1.08A9.41 9.41 0 0 1 12 6.27c.885.004 1.776.12 2.607.351 1.98-1.365 2.85-1.08 2.85-1.08.57 1.485.21 2.595.105 2.865.66.735 1.065 1.68 1.065 2.835 0 4.035-2.475 4.92-4.815 5.19.375.315.705.915.705 1.86 0 1.35-.015 2.43-.015 2.76 0 .285.195.63.72.51A10.52 10.52 0 0 0 22.5 12c0-5.79-4.71-10.5-10.5-10.5Z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/shreyash-ganvir-a557a6152/"
              aria-label="LinkedIn"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-600 hover:border-indigo-400 hover:text-indigo-600 transition-all duration-300"
              target="_blank"
              rel="noreferrer"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                <path d="M4.98 3.5C4.98 4.6 4.09 5.5 3 5.5 1.91 5.5 1 4.6 1 3.5 1 2.4 1.91 1.5 3 1.5c1.09 0 1.98.9 1.98 2ZM2 8h2V22H2V8Zm6.5 0h3.84v1.89h.05C13 8.72 14.34 8 16.11 8 20 8 21 10.64 21 14.06V22h-3v-7.05c0-1.68-.03-3.84-2.34-3.84-2.34 0-2.7 1.83-2.7 3.72V22h-3V8Z" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <footer className="pb-6 md:pb-8 text-[11px] text-center text-slate-400">
        © {new Date().getFullYear()} Shreyash Ganvir. All rights reserved.
      </footer>
    </div>
  );
}

export default Contact;
