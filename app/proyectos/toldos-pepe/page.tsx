const images = [
  {
    src: "/projects/toldos-pepe/toldos-01.png",
    title: "Inicio",
    description:
      "Página principal de TOLDOS PEPE E HIJOS S.L., con una identidad visual orientada a transmitir tradición, experiencia y cercanía.",
  },
  {
    src: "/projects/toldos-pepe/toldos-02.png",
    title: "Asistente de IA",
    description:
      "Integración de un asistente virtual basado en inteligencia artificial dentro de la experiencia web.",
  },
  {
    src: "/projects/toldos-pepe/toldos-03.png",
    title: "Historia",
    description:
      "Sección dedicada a presentar la historia y el carácter familiar de la empresa.",
  },
  {
    src: "/projects/toldos-pepe/toldos-04.png",
    title: "Historia y experiencia",
    description:
      "Presentación visual de la trayectoria de la empresa y sus más de 35 años de experiencia.",
  },
  {
    src: "/projects/toldos-pepe/toldos-05.png",
    title: "Servicios",
    description:
      "Presentación de los principales servicios y soluciones ofrecidos por la empresa.",
  },
  {
    src: "/projects/toldos-pepe/toldos-06.png",
    title: "Galería",
    description:
      "Espacio visual preparado para mostrar diferentes tipos de proyectos y aplicaciones.",
  },
  {
    src: "/projects/toldos-pepe/toldos-07.png",
    title: "Proceso de trabajo",
    description:
      "Explicación del proceso desde el primer contacto hasta la instalación.",
  },
  {
    src: "/projects/toldos-pepe/toldos-08.png",
    title: "Presupuesto",
    description:
      "Formulario de contacto y solicitud de presupuesto integrado en la web.",
  },
  {
    src: "/projects/toldos-pepe/toldos-09.png",
    title: "Información corporativa",
    description:
      "Pie de página con información corporativa y datos de contacto.",
  },
];

export default function ToldosPepeProject() {
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
          <div className="max-w-4xl">
            <p className="mb-6 text-xs uppercase tracking-[0.35em] text-white/40">
              01 / Digital Transformation
            </p>

            <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl lg:text-8xl">
              TOLDOS PEPE
              <br />
              <span className="text-white/40">E HIJOS S.L.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/60">
              Digitalización de un negocio familiar con más de 35 años de
              experiencia mediante el desarrollo integral de una nueva
              plataforma web con integración de inteligencia artificial.
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
        </div>
      </section>

      {/* PROJECT OVERVIEW */}
      <section className="border-b border-white/10">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-3 lg:px-8">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/30">
              Proyecto
            </p>
            <p className="mt-4 text-lg">Digitalización empresarial</p>
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
        <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/30">
              02 / Contexto
            </p>

            <h2 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
              De un negocio tradicional a una nueva presencia digital.
            </h2>
          </div>

          <div className="space-y-6 text-base leading-8 text-white/60">
            <p>
              TOLDOS PEPE E HIJOS S.L. es una empresa familiar con más de 35
              años de experiencia que no contaba anteriormente con una
              presencia web propia.
            </p>

            <p>
              El proyecto parte de la necesidad de trasladar su actividad y
              propuesta de valor al entorno digital mediante una web
              corporativa moderna, clara y accesible.
            </p>

            <p>
              El desarrollo se realizó de principio a fin, incluyendo tanto
              la estructura visual como la implementación técnica y la
              integración del asistente de inteligencia artificial.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN IMAGE */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
          <div className="group overflow-hidden rounded-2xl border border-white/10">
            <img
              src={images[0].src}
              alt="Página principal de TOLDOS PEPE E HIJOS S.L."
              className="w-full transition-transform duration-700 group-hover:scale-[1.02]"
            />
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-white/30">
            03 / Solución
          </p>

          <h2 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
            Una plataforma pensada para presentar la empresa y facilitar el
            contacto con sus clientes.
          </h2>

          <p className="mt-8 text-lg leading-8 text-white/60">
            La web combina una identidad visual propia con una arquitectura
            orientada a mostrar la empresa, sus servicios, su historia y sus
            vías de contacto.
          </p>
        </div>

        {/* IMAGE GRID */}
        <div className="mt-20 grid gap-6 md:grid-cols-2">
          {images.slice(1, 5).map((image, index) => (
            <article
              key={image.src}
              className={`group overflow-hidden rounded-2xl border border-white/10 ${
                index === 0 ? "md:col-span-2" : ""
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
                04 / Artificial Intelligence
              </p>

              <h2 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
                Un asistente virtual integrado en la experiencia web.
              </h2>

              <p className="mt-8 max-w-xl text-lg leading-8 text-white/60">
                El proyecto incorpora un chatbot basado en inteligencia
                artificial diseñado para formar parte de la experiencia de
                usuario de la página.
              </p>
            </div>

            <div className="group overflow-hidden rounded-2xl border border-white/10">
              <img
                src={images[1].src}
                alt="Asistente virtual de TOLDOS PEPE E HIJOS S.L."
                className="w-full transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* MORE SCREENS */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-white/30">
            05 / Interface
          </p>

          <h2 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
            Recorrido visual por el proyecto.
          </h2>
        </div>

        <div className="space-y-16">
          {images.slice(5).map((image, index) => (
            <article key={image.src}>
              <div className="group overflow-hidden rounded-2xl border border-white/10">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full transition-transform duration-700 group-hover:scale-[1.015]"
                />
              </div>

              <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <h3 className="text-xl font-medium">
                  {image.title}
                </h3>

                <p className="max-w-xl text-sm leading-6 text-white/50">
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
            06 / Technologies
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
          Digitalización, desarrollo web e inteligencia artificial.
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
          <span>TOLDOS PEPE E HIJOS S.L. · Case Study</span>
        </div>
      </footer>
    </main>
  );
}