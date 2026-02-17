import { Link } from "react-router-dom";
import Header from "../components/Header";

function Home() {
  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-pink-50 flex flex-col">
      <Header />

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
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-2.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-50 shadow-[0_18px_30px_rgba(79,70,229,0.45)] hover:bg-indigo-500 transition"
            >
              View Projects
            </Link>
            <a
              href="https://drive.google.com/file/d/1ZD8nvr8h7_p5csXC-It_tbu4zGAazDoG/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-2.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-900 shadow-sm hover:border-slate-500 hover:shadow-md transition"
            >
              Download Resume
            </a>
          </div>
        </div>
      </main>

      <footer className="pb-6 md:pb-8 text-[11px] text-center text-slate-400">
        © {new Date().getFullYear()} Shreyash Ganvir. All rights reserved.
      </footer>
    </section>
  );
}

export default Home;
