const images = [
  {
    src: "/projects/luxury/luxury-01.png",
    title: "Home",
    description:
      "Página principal de la web corporativa, con una identidad editorial orientada al sector del lujo.",
  },
  {
    src: "/projects/luxury/luxury-02.png",
    title: "Luxury Intelligence",
    description:
      "Asistente basado en inteligencia artificial integrado dentro de la experiencia de la web.",
  },
  {
    src: "/projects/luxury/luxury-03.png",
    title: "Sobre mí",
    description:
      "Sección de presentación profesional con una composición visual diferenciada.",
  },
  {
    src: "/projects/luxury/luxury-04.png",
    title: "Proyectos destacados",
    description:
      "Presentación editorial de proyectos relacionados con marketing de lujo, moda, retail y storytelling.",
  },
  {
    src: "/projects/luxury/luxury-05.png",
    title: "Proyecto editorial",
    description:
      "Presentación de contenido relacionado con estrategia y retail de lujo.",
  },
  {
    src: "/projects/luxury/luxury-06.png",
    title: "Storytelling",
    description:
      "Sección dedicada al storytelling como elemento estratégico de las marcas de lujo.",
  },
  {
    src: "/projects/luxury/luxury-07.png",
    title: "Retail de lujo",
    description:
      "Contenido relacionado con experiencia de cliente, talento y diferenciación de marca.",
  },
  {
    src: "/projects/luxury/luxury-08.png",
    title: "Estrategia de marca",
    description:
      "Presentación de contenidos relacionados con identidad, posicionamiento y comunicación.",
  },
  {
    src: "/projects/luxury/luxury-09.png",
    title: "Experiencia",
    description:
      "Sección dedicada a la trayectoria y experiencia profesional.",
  },
  {
    src: "/projects/luxury/luxury-10.png",
    title: "Especialización",
    description:
      "Áreas de especialización relacionadas con marketing de lujo, estrategia de marca, contenido y storytelling.",
  },
  {
    src: "/projects/luxury/luxury-11.png",
    title: "Credenciales",
    description:
      "Sección dedicada a formación y aprendizaje continuo.",
  },
  {
    src: "/projects/luxury/luxury-12.png",
    title: "Contacto",
    description:
      "Sección final de contacto y llamada a la acción.",
  },
];

export default function LuxuryProject() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050505]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <a
            href="/"
            className="text-sm font-medium tracking-[0.25em] text-white"
          >
            LUCÍA CASTAÑEDA
          </a>

          <a
            href="/"
            className="text-xs text-white/50 transition-colors hover:text-white"
          >
            ← Volver al portfolio
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-16 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <div>
              <p className="mb-6 text-xs uppercase tracking-[0.35em] text-white/40">
                02 / Corporate Web · AI
              </p>

              <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl lg:text-8xl">
                LUXURY
                <br />
                <span className="text-white/40">CORPORATE</span>
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/60">
                Diseño y desarrollo integral de una web corporativa para una
                profesional vinculada al marketing de lujo, con una identidad
                digital orientada a transmitir una imagen profesional y
                cuidada.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                {["Node.js", "JavaScript", "IA", "Web Development"].map(
                  (technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/10 px-4 py-2 text-xs text-white/60"
                    >
                      {technology}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="border-l border-white/10 pl-8 lg:pl-12">
              <p className="text-xs uppercase tracking-[0.3em] text-white/30">
                Project focus
              </p>

              <ul className="mt-6 space-y-4 text-sm text-white/60">
                <li>Diseño de identidad digital</li>
                <li>Desarrollo web</li>
                <li>Experiencia de usuario</li>
                <li>Integración de inteligencia artificial</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="border-b border-white/10">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-3 lg:px-8">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/30">
              Proyecto
            </p>
            <p className="mt-4 text-lg">Corporate Web</p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/30">
              Desarrollo
            </p>
            <p className="mt-4 text-lg">Desarrollo integral</p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/30">
              Estado
            </p>
            <p className="mt-4 text-lg text-white/60">
              En desarrollo
            </p>
          </div>
        </div>
      </section>

      {/* CONTEXT */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/30">
              01 / Contexto
            </p>

            <h2 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
              Una presencia digital diseñada alrededor de una identidad
              profesional.
            </h2>
          </div>

          <div className="space-y-6 text-base leading-8 text-white/60">
            <p>
              El proyecto consiste en el desarrollo de una web corporativa
              para una profesional vinculada al marketing de lujo, moda,
              retail y estrategia de marca.
            </p>

            <p>
              El objetivo del desarrollo fue crear una presencia digital
              cuidada, editorial y coherente con el posicionamiento visual del
              proyecto.
            </p>

            <p>
              La solución fue desarrollada de principio a fin, incorporando
              además un asistente basado en inteligencia artificial.
            </p>
          </div>
        </div>
      </section>

      {/* HERO IMAGE */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
          <div className="group overflow-hidden rounded-2xl border border-white/10">
            <img
              src={images[0].src}
              alt="Página principal de Luxury Corporate Website"
              className="w-full transition-transform duration-700 group-hover:scale-[1.02]"
            />
          </div>
        </div>
      </section>

      {/* DESIGN */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-white/30">
            02 / Design
          </p>

          <h2 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
            Una interfaz editorial para una marca personal profesional.
          </h2>

          <p className="mt-8 text-lg leading-8 text-white/60">
            La interfaz utiliza una estética minimalista y editorial para
            estructurar la información profesional y presentar los contenidos
            de forma clara.
          </p>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-2">
          {images.slice(2, 8).map((image, index) => (
            <article
              key={image.src}
              className={`group overflow-hidden rounded-2xl border border-white/10 ${
                index === 0 || index === 3 ? "md:col-span-2" : ""
              }`}
            >
              <div className="overflow-hidden bg-white/5">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full transition-transform duration-700 group-hover:scale-[1.025]"
                />
              </div>

              <div className="border-t border-white/10 p-6">
                <p className="text-xs uppercase tracking-[0.25em] text-white/30">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <h3 className="mt-3 text-xl font-medium">
                  {image.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/50">
                  {image.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* AI */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/30">
                03 / Artificial Intelligence
              </p>

              <h2 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
                Luxury Intelligence.
              </h2>

              <p className="mt-8 max-w-xl text-lg leading-8 text-white/60">
                El proyecto incorpora un asistente basado en inteligencia
                artificial denominado Luxury Intelligence, integrado dentro de
                la experiencia de usuario de la web.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {[
                  "Lujo",
                  "Moda",
                  "Automoción",
                  "Relojes y joyería",
                  "Belleza",
                  "Hospitality",
                  "Retail",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 px-3 py-2 text-xs text-white/50"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="group overflow-hidden rounded-2xl border border-white/10">
              <img
                src={images[1].src}
                alt="Luxury Intelligence, asistente de inteligencia artificial"
                className="w-full transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE + CREDENTIALS */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-white/30">
            04 / Professional Experience
          </p>

          <h2 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
            Una estructura profesional completa.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {images.slice(8).map((image, index) => (
            <article
              key={image.src}
              className="group overflow-hidden rounded-2xl border border-white/10"
            >
              <div className="overflow-hidden bg-white/5">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>

              <div className="border-t border-white/10 p-6">
                <p className="text-xs uppercase tracking-[0.25em] text-white/30">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <h3 className="mt-3 text-xl font-medium">
                  {image.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/50">
                  {image.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="border-y border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <p className="text-xs uppercase tracking-[0.3em] text-white/30">
            05 / Technologies
          </p>

          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {["Node.js", "JavaScript", "IA", "Web Development"].map(
              (technology) => (
                <div
                  key={technology}
                  className="bg-[#050505] p-8"
                >
                  <p className="text-lg font-medium">{technology}</p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24 text-center lg:px-8 lg:py-32">
        <p className="text-xs uppercase tracking-[0.3em] text-white/30">
          Proyecto
        </p>

        <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
          Diseño, desarrollo web e inteligencia artificial.
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-white/50">
          Proyecto actualmente en desarrollo y todavía no publicado.
        </p>

        <a
          href="/"
          className="mt-10 inline-flex rounded-full border border-white/10 px-6 py-3 text-sm text-white/70 transition-colors hover:bg-white hover:text-black"
        >
          ← Volver al portfolio
        </a>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-xs text-white/30 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <span>Lucía Castañeda</span>
          <span>Luxury Corporate Website · Case Study</span>
        </div>
      </footer>
    </main>
  );
}