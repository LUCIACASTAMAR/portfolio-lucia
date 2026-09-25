import Link from "next/link";
import { experience } from "@/data/experience";

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* NAVBAR */}

      <nav className="border-b border-white/10">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-6 md:px-12">

          <Link
            href="/"
            className="text-sm font-semibold tracking-[0.28em]"
          >
            LUCY<span className="text-white/35">.</span>
          </Link>

          <Link
            href="/"
            className="rounded-full border border-white/20 px-5 py-2.5 text-xs font-medium transition-all hover:border-white/40 hover:bg-white hover:text-black"
          >
            Volver al portfolio
          </Link>

        </div>
      </nav>

      {/* HEADER */}

      <section className="px-6 py-24 md:px-12">

        <div className="mx-auto max-w-7xl">

          <p className="font-mono text-xs uppercase tracking-[0.25em] text-white/30">
            Trayectoria profesional
          </p>

          <h1 className="mt-8 max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-6xl md:text-8xl">
            Experiencia
            <br />
            <span className="text-white/35">
              profesional.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-7 text-white/45 md:text-lg">
            Una trayectoria desarrollada en paralelo a mi formación
            tecnológica, donde he adquirido experiencia en coordinación,
            comunicación, organización y resolución de problemas.
          </p>

        </div>

      </section>

      {/* EXPERIENCE */}

      <section className="border-t border-white/10 px-6 py-20 md:px-12">

        <div className="mx-auto max-w-7xl">

          <div className="border-t border-white/10">

            {experience.map((item, index) => (

              <article
                key={`${item.company}-${item.title}`}
                className="grid gap-8 border-b border-white/10 py-12 md:grid-cols-[180px_1fr_220px]"
              >

                {/* NUMBER / DATE */}

                <div>

                  <span className="font-mono text-xs text-white/25">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="mt-3 font-mono text-[10px] uppercase tracking-wider text-white/30">
                    {item.period}
                  </p>

                </div>

                {/* MAIN INFO */}

                <div>

                  <h2 className="text-2xl font-medium md:text-3xl">
                    {item.title}
                  </h2>

                  <p className="mt-2 text-sm text-white/45">
                    {item.company}
                  </p>

                  <p className="mt-6 max-w-2xl text-sm leading-7 text-white/45">
                    {item.description}
                  </p>

                </div>

                {/* SKILLS */}

                <div className="flex flex-wrap content-start gap-2 md:justify-end">

                  {item.skills.map((skill) => (

                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/[0.025] px-3 py-1.5 font-mono text-[10px] text-white/35"
                    >
                      {skill}
                    </span>

                  ))}

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>

      {/* BACK */}

      <section className="px-6 py-24 md:px-12">

        <div className="mx-auto max-w-7xl">

          <Link
            href="/"
            className="inline-flex rounded-full border border-white/20 px-6 py-3 text-sm text-white/70 transition-all hover:border-white/40 hover:bg-white/[0.05] hover:text-white"
          >
            ← Volver al portfolio
          </Link>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="border-t border-white/10 px-6 py-8 md:px-12">

        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-xs text-white/30 md:flex-row">

          <span>
            © 2026 Lucía Castañeda
          </span>

          <span className="font-mono">
            WEB · AI · AUTOMATION
          </span>

        </div>

      </footer>

    </main>
  );
}