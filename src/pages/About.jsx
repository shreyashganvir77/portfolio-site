import Header from "../components/Header";

function About() {
  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-pink-50 flex flex-col">
      <Header />
      <div className="flex-1 flex flex-col items-center justify-center py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-6">
            What I Do
          </h2>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            I’m a Senior Software Engineer specializing in cloud architecture
            and AI-driven automation. I build scalable Azure-based systems,
            optimize infrastructure costs, and design resilient platforms that
            improve deployment velocity and operational efficiency. My work
            focuses on turning complex architecture into production-ready
            solutions that deliver measurable business impact.
          </p>

          <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 mt-16 mb-4">
            Tech I Work With
          </h3>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {[
              { name: "Azure", label: "Az" },
              { name: "Terraform", label: "Tf" },
              { name: "React", label: "R" },
              { name: "Node.js", label: "N" },
              { name: "Python", label: "Py" },
              { name: "Azure DevOps", label: "AD" },
            ].map((tech) => (
              <div
                key={tech.name}
                className="rounded-2xl bg-slate-100 p-6 flex flex-col items-center gap-3 transition transform hover:shadow-md hover:-translate-y-1"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-xs font-semibold text-indigo-600 shadow-sm">
                  {tech.label}
                </div>
                <p className="text-sm font-medium text-slate-800">
                  {tech.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
