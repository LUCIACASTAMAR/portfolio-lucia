export default function LuxuryProject() {
  return (
    <main className="min-h-screen bg-[#f7f4ed] text-[#171515]">
      <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f7f4ed]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <a href="/" className="text-sm tracking-[0.25em]">LUCÍA CASTAÑEDA</a>
          <a href="/" className="text-xs text-black/60 transition-colors hover:text-black">Volver al portfolio</a>
        </div>
      </header>

      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <p className="mb-6 text-xs uppercase tracking-[0.35em] text-[#6b2738]">Proyecto completado · Marca personal</p>
          <h1 className="max-w-5xl text-5xl leading-[1.05] tracking-tight sm:text-6xl lg:text-8xl">
            Noa Younes
            <br />
            <span className="font-serif italic text-[#6b2738]">Personal Brand Website</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-black/65">
            Diseño y desarrollo de una web profesional para una especialista en marketing de lujo, moda, retail y estrategia de marca. Una experiencia digital editorial, cuidada y coherente con su identidad profesional.
          </p>
          <div className="mt-10 flex flex-wrap gap-3 text-xs uppercase tracking-[0.18em] text-black/65">
            <span className="border border-black/15 px-4 py-2">Diseño web</span>
            <span className="border border-black/15 px-4 py-2">Marca personal</span>
            <span className="border border-black/15 px-4 py-2">Experiencia de usuario</span>
            <span className="border border-black/15 px-4 py-2">Responsive</span>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:grid-cols-3 lg:px-8">
        <div><p className="text-xs uppercase tracking-[0.25em] text-black/45">Proyecto</p><p className="mt-3 text-lg">Web profesional</p></div>
        <div><p className="text-xs uppercase tracking-[0.25em] text-black/45">Enfoque</p><p className="mt-3 text-lg">Marketing de lujo y marca personal</p></div>
        <div><p className="text-xs uppercase tracking-[0.25em] text-black/45">Estado</p><p className="mt-3 text-lg text-[#6b2738]">Publicado</p></div>
      </section>

      <section className="bg-[#151313] text-[#f7f4ed]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#c8b28b]">Objetivo</p>
            <h2 className="mt-6 text-4xl leading-tight sm:text-5xl">Una presencia digital construida alrededor de su historia profesional.</h2>
          </div>
          <div className="space-y-6 text-base leading-8 text-white/70">
            <p>La web presenta la trayectoria, formación, áreas de especialización y credenciales de Noa con una estructura clara y una dirección visual editorial.</p>
            <p>La paleta de tonos crema, negro y burdeos, junto con la tipografía y el espacio en blanco, refuerza una identidad sofisticada y contemporánea.</p>
            <p>El diseño organiza la información para que visitantes, colaboradores y potenciales empleadores puedan conocer rápidamente su perfil y ponerse en contacto.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <p className="text-xs uppercase tracking-[0.3em] text-[#8d765a]">Estructura de la web</p>
        <h2 className="mt-6 max-w-3xl text-4xl leading-tight sm:text-5xl">Una experiencia sencilla, editorial y centrada en el contenido.</h2>
        <div className="mt-12 grid gap-px border border-black/10 bg-black/10 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ["01", "Presentación", "Una introducción directa al perfil profesional y su posicionamiento."],
            ["02", "Selected work", "Proyectos y contenidos sobre lujo, moda, retail y storytelling."],
            ["03", "Experiencia", "Trayectoria profesional y experiencia en marketing y comunicación."],
            ["04", "Formación", "Estudios académicos y especialización."],
            ["05", "Expertise", "Áreas de conocimiento y competencias profesionales."],
            ["06", "Contacto", "Vías directas para iniciar una conversación profesional."],
          ].map(([number, title, description]) => (
            <article key={number} className="bg-[#f7f4ed] p-7 sm:p-9">
              <p className="text-xs tracking-[0.25em] text-[#8d765a]">{number}</p>
              <h3 className="mt-5 text-2xl">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-black/60">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#ece8df]">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8 lg:py-28">
          <p className="text-xs uppercase tracking-[0.3em] text-[#8d765a]">Visita el proyecto</p>
          <h2 className="mx-auto mt-6 max-w-3xl text-4xl leading-tight sm:text-6xl">Una marca personal con identidad propia.</h2>
          <p className="mx-auto mt-6 max-w-xl leading-7 text-black/60">Consulta la web publicada para explorar la experiencia completa.</p>
          <a href="https://noayounes.com" target="_blank" rel="noopener noreferrer" className="mt-9 inline-flex bg-[#171515] px-7 py-4 text-xs uppercase tracking-[0.2em] text-white transition-colors hover:bg-[#6b2738]">Visitar noa-younes.com</a>
        </div>
      </section>

      <footer className="bg-[#151313] text-white/50">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-xs sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <span>Lucía Castañeda</span>
          <span>Noa Younes · Personal Brand Website · Proyecto completado</span>
        </div>
      </footer>
    </main>
  );
}
