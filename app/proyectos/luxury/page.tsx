export default function LuxuryProject() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050505]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <a href="/" className="text-sm font-medium tracking-[0.25em] text-white">LUCÍA CASTAÑEDA</a>
          <a href="/" className="text-xs text-white/50 transition-colors hover:text-white">Volver al portfolio</a>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full bg-[#7B1E3A]/15 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-white/40">02 / Proyecto completado · Web profesional</p>
          <h1 className="max-w-5xl text-5xl font-semibold leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl">
            Noa Younes
            <br />
            <span className="text-white/40">Personal Brand Website</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/60">
            Diseño y desarrollo de una web profesional para una especialista en marketing de lujo, moda, retail y estrategia de marca. El proyecto convierte su trayectoria y propuesta profesional en una experiencia digital coherente, elegante y fácil de explorar.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            {["Diseño web", "Marca personal", "Responsive", "Experiencia de usuario"].map((item) => (
              <span key={item} className="rounded-full border border-white/10 bg-white/[0.025] px-4 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-white/55">{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 sm:grid-cols-3 lg:px-8">
          {[
            ["TIPO DE PROYECTO", "Web de marca personal"],
            ["OBJETIVO", "Presencia digital profesional"],
            ["ESTADO", "Publicado"],
          ].map(([label, value]) => (
            <div key={label}>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/30">{label}</p>
              <p className={`mt-3 text-lg ${label === "ESTADO" ? "text-[#c47b91]" : "text-white/80"}`}>{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#c47b91]">01 / Contexto</p>
            <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">Una web que comunica una identidad profesional desde el primer vistazo.</h2>
          </div>
          <div className="space-y-6 text-base leading-8 text-white/60">
            <p>El reto era organizar una trayectoria multidisciplinar —marketing de lujo, moda, retail y comunicación— en una plataforma personal clara, con personalidad visual y una navegación intuitiva.</p>
            <p>La solución se apoya en una dirección de arte editorial: tonos crema y neutros, contraste negro, acentos burdeos, tipografía expresiva y espacio en blanco para dar protagonismo al contenido.</p>
            <p>La estructura ayuda a recorrer la presentación, los proyectos seleccionados, la experiencia, la formación, las áreas de especialización y las vías de contacto desde una misma experiencia responsive.</p>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#c47b91]">02 / Estructura y experiencia</p>
          <h2 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">Cada sección tiene una función dentro de la historia profesional.</h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["01", "Presentación", "Posicionamiento profesional y una introducción directa al perfil."],
              ["02", "Selected work", "Contenidos sobre lujo, moda, retail y storytelling."],
              ["03", "Experiencia", "Trayectoria y responsabilidades profesionales."],
              ["04", "Formación", "Estudios académicos, especialización y aprendizaje continuo."],
              ["05", "Expertise", "Áreas de conocimiento y competencias clave."],
              ["06", "Contacto", "Accesos directos para facilitar nuevas oportunidades profesionales."],
            ].map(([number, title, description]) => (
              <article key={number} className="rounded-xl border border-white/10 bg-black/30 p-7 transition-colors hover:border-white/20">
                <p className="font-mono text-xs tracking-[0.2em] text-[#c47b91]">{number}</p>
                <h3 className="mt-5 text-2xl font-medium">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/50">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#c47b91]">03 / Criterios de diseño</p>
            <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">Estética cuidada, contenido accesible y una navegación pensada para móvil.</h2>
          </div>
          <div className="space-y-5">
            {[
              ["Identidad visual", "Una dirección editorial alineada con el sector del lujo sin perder claridad."],
              ["Jerarquía de contenido", "Títulos, bloques y espacios que facilitan la lectura y la exploración."],
              ["Diseño responsive", "Una composición adaptada a pantallas pequeñas y grandes."],
              ["Contacto directo", "Llamadas a la acción visibles para conectar con la profesional."],
            ].map(([title, description]) => (
              <div key={title} className="border-b border-white/10 pb-5">
                <h3 className="text-lg font-medium">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/50">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0b090a]">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8 lg:py-28">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#c47b91]">Proyecto publicado</p>
          <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">Una presencia digital diseñada para abrir nuevas conversaciones.</h2>
          <p className="mx-auto mt-6 max-w-xl leading-7 text-white/50">Visita la web final para conocer la experiencia completa y sus contenidos.</p>
          <a href="https://noayounes.com" target="_blank" rel="noopener noreferrer" className="mt-9 inline-flex min-h-14 items-center justify-center bg-white px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] !text-black opacity-100 transition-colors hover:bg-[#7B1E3A] hover:!text-white">
            <span className="!text-inherit">Visitar noa-younes.com</span>
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-xs text-white/30 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <span>Lucía Castañeda</span>
          <span>Noa Younes · Personal Brand Website · Proyecto completado</span>
        </div>
      </footer>
    </main>
  );
}
