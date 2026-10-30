"use client";

import { useCallback, useEffect, useState } from "react";
import type { Locale } from "@/i18n";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { localizedContent } from "@/data/localizedContent";

type Props = { locale: Locale };

const copy = {
  es: {
    back: "Volver al portfolio", start: "Entrar en la experiencia", next: "Continuar", previous: "Anterior",
    pause: "Pausar", play: "Reproducir", restart: "Reiniciar", skip: "Saltar introducción",
    chapters: ["Inicio", "Perfil", "Capacidades", "Proyectos", "Perspectiva", "Contacto"],
    eyebrow: "UNA MIRADA A MI UNIVERSO DIGITAL",
    opening: "La tecnología cobra sentido cuando conecta ideas con posibilidades.",
    openingSub: "Una exploración de lo que pienso, construyo y quiero llevar más lejos.",
    profileLabel: "LA MENTE DETRÁS DE LOS SISTEMAS",
    profileTitle: "Tecnología con perspectiva.",
    profileBody: "Soy estudiante de Ingeniería Informática en la UOC, especializada en Sistemas de Información. Me interesa conectar tecnología, datos y necesidades reales para crear soluciones útiles.",
    capabilities: "UN CONJUNTO DE HERRAMIENTAS, UNA MISMA VISIÓN",
    capabilitiesTitle: "De la lógica a la experiencia.",
    capabilitiesBody: "Explora algunas de las áreas que forman parte de mi recorrido y de los problemas que me interesa resolver.",
    projectsLabel: "IDEAS QUE TOMAN FORMA",
    projectsTitle: "Selected work.",
    projectsBody: "Proyectos donde desarrollo, diseño y tecnología se encuentran para resolver necesidades concretas.",
    perspectiveLabel: "MÁS ALLÁ DEL CÓDIGO",
    perspectiveTitle: "Entender el contexto también es parte de construir.",
    perspectiveBody: "La coordinación de equipos y la toma de decisiones en entornos dinámicos han reforzado mi capacidad para priorizar, comunicar y resolver problemas. Esa perspectiva también forma parte de cómo abordo la tecnología.",
    contactLabel: "EL SIGUIENTE CAPÍTULO PUEDE SER COMPARTIDO",
    contactTitle: "Let's build something meaningful.",
    contactBody: "¿Tienes un proyecto, una oportunidad o una idea que merece explorarse? Me encantará conocerla.",
    explore: "Explorar proyecto", contact: "Hablemos", portfolio: "Descubrir portfolio",
    close: "Cerrar", selected: "SELECCIONA UN ÁREA", skills: [
      ["Desarrollo web", "Construcción de experiencias digitales con JavaScript, HTML y CSS."],
      ["Datos y bases de datos", "SQL, Oracle, MongoDB y fundamentos de gestión y análisis de datos."],
      ["Sistemas empresariales", "Formación en SAP S/4HANA y Data Migration, con interés en transformación de sistemas."],
      ["Inteligencia artificial", "Exploración de soluciones con IA y automatización aplicadas a necesidades reales."],
      ["Programación", "Experiencia académica con Java, Python, C y C++."],
      ["Sistemas de información", "Conectar procesos, personas y tecnología desde una visión de conjunto."]
    ]
  },
  en: {
    back: "Back to portfolio", start: "Enter the experience", next: "Continue", previous: "Previous",
    pause: "Pause", play: "Play", restart: "Restart", skip: "Skip intro",
    chapters: ["Opening", "Profile", "Capabilities", "Projects", "Perspective", "Contact"],
    eyebrow: "A GLIMPSE INTO MY DIGITAL WORLD",
    opening: "Technology matters when it connects ideas with possibilities.",
    openingSub: "An exploration of what I think, build and want to take further.",
    profileLabel: "THE MIND BEHIND THE SYSTEMS",
    profileTitle: "Technology with perspective.",
    profileBody: "I am a Computer Engineering student at UOC, specialising in Information Systems. I am interested in connecting technology, data and real-world needs to create useful solutions.",
    capabilities: "A TOOLKIT, A SHARED VISION",
    capabilitiesTitle: "From logic to experience.",
    capabilitiesBody: "Explore some of the fields that shape my journey and the problems I am interested in solving.",
    projectsLabel: "IDEAS TAKING SHAPE",
    projectsTitle: "Selected work.",
    projectsBody: "Projects where development, design and technology come together to solve real needs.",
    perspectiveLabel: "BEYOND THE CODE",
    perspectiveTitle: "Understanding the context is part of building.",
    perspectiveBody: "Coordinating teams and making decisions in dynamic environments have strengthened my ability to prioritise, communicate and solve problems. That perspective is also part of how I approach technology.",
    contactLabel: "THE NEXT CHAPTER COULD BE SHARED",
    contactTitle: "Let's build something meaningful.",
    contactBody: "Have a project, an opportunity or an idea worth exploring? I would love to hear about it.",
    explore: "Explore project", contact: "Get in touch", portfolio: "Explore portfolio",
    close: "Close", selected: "SELECT AN AREA", skills: [
      ["Web development", "Building digital experiences with JavaScript, HTML and CSS."],
      ["Data and databases", "SQL, Oracle, MongoDB and foundations in data management and analysis."],
      ["Enterprise systems", "Training in SAP S/4HANA and Data Migration, with an interest in systems transformation."],
      ["Artificial intelligence", "Exploring AI and automation solutions for real-world needs."],
      ["Programming", "Academic experience with Java, Python, C and C++."],
      ["Information systems", "Connecting processes, people and technology through a systems-level perspective."]
    ]
  }
};

const capabilityIcons = ["01", "02", "03", "04", "05", "06"];

export default function ExperiencePage({ locale }: Props) {
  const isSpanish = locale === "es";
  const t = isSpanish ? copy.es : copy.en;
  const content = localizedContent[locale] ?? localizedContent.en;
  const [scene, setScene] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [activeSkill, setActiveSkill] = useState(0);
  const [activeProject, setActiveProject] = useState(0);
  const [started, setStarted] = useState(false);

  const goTo = useCallback((index: number) => {
    setScene(Math.max(0, Math.min(5, index)));
    setStarted(true);
  }, []);

  const next = useCallback(() => {
    setScene((current) => Math.min(5, current + 1));
    setStarted(true);
  }, []);

  useEffect(() => {
    if (!playing || !started || scene === 0 || scene === 5) return;
    const timer = window.setTimeout(() => setScene((current) => Math.min(5, current + 1)), 9000);
    return () => window.clearTimeout(timer);
  }, [playing, started, scene]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "ArrowRight") next();
      if (event.key === "ArrowLeft") setScene((current) => Math.max(0, current - 1));
      if (event.key === "Escape") window.location.href = `/${locale}`;
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [locale, next]);

  const project = projects[activeProject];
  const projectCopy = content.projects[project.slug];

  return (
    <main className="relative min-h-[100svh] overflow-hidden bg-[#050505] text-[#f4f1ee] selection:bg-[#9c5968] selection:text-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-1/4 h-[32rem] w-[32rem] rounded-full bg-[#5b1d2b]/20 blur-[130px]" />
        <div className="absolute -right-40 bottom-0 h-[30rem] w-[30rem] rounded-full bg-[#6d3440]/10 blur-[140px]" />
        <div className="absolute inset-0 opacity-[0.12]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)", backgroundSize: "72px 72px", maskImage: "linear-gradient(to bottom, black, transparent 90%)" }} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_15%,#050505_85%)]" />
      </div>

      <header className="relative z-20 flex items-center justify-between border-b border-white/10 px-5 py-5 md:px-10">
        <a href={`/${locale}`} className="font-mono text-[10px] tracking-[.28em] text-white/65 transition hover:text-white">LUCY<span className="text-[#b77b88]">.</span></a>
        <div className="hidden items-center gap-2 md:flex">
          <span className="mr-2 font-mono text-[9px] tracking-[.2em] text-white/25">CHAPTERS</span>
          {t.chapters.map((chapter, index) => (
            <button key={chapter} onClick={() => goTo(index)} aria-label={chapter} className={`h-1.5 rounded-full transition-all duration-500 ${scene === index ? "w-8 bg-[#bd8792]" : "w-3 bg-white/20 hover:bg-white/50"}`} />
          ))}
        </div>
        <a href={`/${locale}`} className="text-[10px] text-white/45 transition hover:text-white">{t.back} ↗</a>
      </header>

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-74px)] max-w-[1440px] flex-col px-5 pb-8 pt-8 md:px-10 md:pt-10">
        <div className="mb-8 flex items-center justify-between">
          <span className="font-mono text-[9px] tracking-[.24em] text-white/30">{String(scene + 1).padStart(2, "0")} / 06 <span className="mx-2 text-[#a86b79]">—</span> {t.chapters[scene].toUpperCase()}</span>
          <span className="font-mono text-[9px] tracking-[.18em] text-white/25">LUCÍA CASTAÑEDA · DIGITAL EXPERIENCE</span>
        </div>

        <section className="relative flex flex-1 flex-col justify-center" aria-live="polite">
          {scene === 0 && (
            <div className="animate-[fadeIn_.9s_ease-out]">
              <p className="mb-8 font-mono text-[10px] tracking-[.32em] text-[#bd8792]">{t.eyebrow}</p>
              <h1 className="max-w-5xl text-[clamp(3.5rem,10vw,9rem)] font-light leading-[.88] tracking-[-.075em]">LUCÍA<br /><span className="pl-[.7em] text-white/35">CASTAMAR.</span></h1>
              <div className="mt-10 grid gap-8 border-t border-white/15 pt-6 md:grid-cols-[1fr_auto] md:items-end">
                <div className="max-w-2xl">
                  <p className="text-xl font-light leading-relaxed text-white/80 md:text-2xl">{t.opening}</p>
                  <p className="mt-3 max-w-lg text-sm leading-6 text-white/40">{t.openingSub}</p>
                </div>
                <button onClick={() => { setScene(1); setStarted(true); setPlaying(true); }} className="group inline-flex items-center gap-5 self-start rounded-full border border-white/25 px-6 py-4 text-[10px] uppercase tracking-[.2em] transition hover:border-[#bd8792] hover:bg-[#702f3d]/20 md:self-auto">
                  {t.start}<span className="text-[#bd8792] transition-transform group-hover:translate-x-1">↗</span>
                </button>
              </div>
              <div className="pointer-events-none absolute -right-10 top-1/2 hidden h-[min(42vw,520px)] w-[min(42vw,520px)] -translate-y-1/2 rounded-full border border-[#bd8792]/15 md:block">
                <div className="absolute inset-[9%] rounded-full border border-white/10" />
                <div className="absolute inset-[20%] rounded-full border border-dashed border-[#bd8792]/25" />
                <div className="absolute left-1/2 top-[-3px] h-2 w-2 rounded-full bg-[#bd8792] shadow-[0_0_35px_8px_#8b3e50]" />
                <div className="absolute inset-[34%] rounded-full bg-[#702f3d]/25 blur-2xl" />
              </div>
            </div>
          )}

          {scene === 1 && (
            <div className="grid gap-12 py-8 md:grid-cols-[.85fr_1.15fr] md:items-center">
              <div>
                <p className="mb-6 font-mono text-[10px] tracking-[.25em] text-[#bd8792]">{t.profileLabel}</p>
                <h2 className="text-5xl font-light leading-[.98] tracking-[-.06em] md:text-7xl">{t.profileTitle}</h2>
              </div>
              <div className="border-l border-[#bd8792]/50 pl-6 md:pl-10">
                <p className="max-w-2xl text-lg font-light leading-8 text-white/65">{t.profileBody}</p>
                <div className="mt-10 grid grid-cols-2 gap-5 border-t border-white/10 pt-6">
                  <div><span className="font-mono text-[9px] tracking-[.2em] text-white/30">FOCUS</span><p className="mt-2 text-sm text-white/75">Information Systems</p></div>
                  <div><span className="font-mono text-[9px] tracking-[.2em] text-white/30">APPROACH</span><p className="mt-2 text-sm text-white/75">Curiosity · Structure · Impact</p></div>
                </div>
              </div>
            </div>
          )}

          {scene === 2 && (
            <div className="py-4">
              <p className="mb-5 font-mono text-[10px] tracking-[.25em] text-[#bd8792]">{t.capabilities}</p>
              <h2 className="max-w-3xl text-5xl font-light tracking-[-.06em] md:text-7xl">{t.capabilitiesTitle}</h2>
              <p className="mt-5 max-w-xl text-sm leading-6 text-white/40">{t.capabilitiesBody}</p>
              <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {t.skills.map(([name, description], index) => (
                  <button key={name} onClick={() => setActiveSkill(index)} className={`group min-h-[118px] border p-5 text-left transition duration-500 ${activeSkill === index ? "border-[#bd8792]/70 bg-[#6d3440]/15" : "border-white/10 bg-white/[.02] hover:border-white/30"}`}>
                    <span className="font-mono text-[9px] text-[#bd8792]/80">{capabilityIcons[index]}</span>
                    <span className="mt-4 block text-base text-white/85">{name}</span>
                    <span className="mt-2 block text-xs leading-5 text-white/40">{activeSkill === index ? description : "↗ " + (isSpanish ? "Explorar área" : "Explore area")}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {scene === 3 && (
            <div className="py-5">
              <p className="mb-5 font-mono text-[10px] tracking-[.25em] text-[#bd8792]">{t.projectsLabel}</p>
              <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
                <h2 className="text-6xl font-light tracking-[-.07em] md:text-8xl">{t.projectsTitle}</h2>
                <p className="max-w-sm text-sm leading-6 text-white/40">{t.projectsBody}</p>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {projects.map((item, index) => {
                  const itemCopy = content.projects[item.slug];
                  return (
                    <button key={item.slug} onClick={() => setActiveProject(index)} className={`group relative min-h-[245px] overflow-hidden border p-6 text-left transition duration-500 md:p-8 ${activeProject === index ? "border-[#bd8792]/65 bg-gradient-to-br from-[#542431]/35 to-white/[.02]" : "border-white/10 bg-white/[.02] hover:border-white/30"}`}>
                      <div className="absolute -right-8 -top-12 h-48 w-48 rounded-full border border-white/[.07] transition duration-700 group-hover:scale-125" />
                      <div className="relative flex h-full flex-col">
                        <div className="flex items-center justify-between"><span className="font-mono text-[10px] text-white/30">{item.number}</span><span className="font-mono text-[9px] uppercase tracking-[.15em] text-[#bd8792]">{itemCopy.type}</span></div>
                        <div className="mt-auto pt-14"><h3 className="max-w-lg text-2xl font-light leading-tight md:text-3xl">{itemCopy.title}</h3><p className="mt-3 max-w-xl text-xs leading-5 text-white/45">{itemCopy.description}</p><span className="mt-5 inline-flex items-center gap-2 text-[10px] uppercase tracking-[.16em] text-white/70">{t.explore}<span className="text-[#bd8792]">↗</span></span></div>
                      </div>
                    </button>
                  );
                })}
              </div>
              <p className="mt-4 font-mono text-[9px] tracking-[.14em] text-white/25">{isSpanish ? "SELECCIONADO" : "SELECTED"} · {projects[activeProject].title}</p>
            </div>
          )}

          {scene === 4 && (
            <div className="grid gap-12 py-10 md:grid-cols-[1fr_.8fr] md:items-center">
              <div><p className="mb-6 font-mono text-[10px] tracking-[.25em] text-[#bd8792]">{t.perspectiveLabel}</p><h2 className="max-w-3xl text-5xl font-light leading-[1.02] tracking-[-.06em] md:text-7xl">{t.perspectiveTitle}</h2></div>
              <div className="relative border-y border-white/15 py-8"><div className="absolute -left-3 top-8 h-12 w-px bg-[#bd8792]" /><p className="text-lg font-light leading-8 text-white/60">{t.perspectiveBody}</p><div className="mt-8 flex flex-wrap gap-2">{["Coordination", "Problem solving", "Communication", "Adaptability"].map((tag) => <span key={tag} className="border border-white/10 px-3 py-2 font-mono text-[9px] tracking-[.1em] text-white/40">{tag}</span>)}</div></div>
            </div>
          )}

          {scene === 5 && (
            <div className="mx-auto max-w-5xl py-12 text-center">
              <p className="mb-8 font-mono text-[10px] tracking-[.28em] text-[#bd8792]">{t.contactLabel}</p>
              <h2 className="text-6xl font-light leading-[.95] tracking-[-.07em] md:text-8xl">{t.contactTitle}</h2>
              <p className="mx-auto mt-8 max-w-xl text-base leading-7 text-white/45">{t.contactBody}</p>
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <a href={`mailto:${profile.contact?.email ?? "lucycastamar@gmail.com"}`} className="rounded-full bg-[#eee9e5] px-7 py-4 text-[10px] font-semibold uppercase tracking-[.18em] text-black transition hover:bg-white">{t.contact} ↗</a>
                <a href={`/${locale}#projects`} className="rounded-full border border-white/20 px-7 py-4 text-[10px] uppercase tracking-[.18em] text-white/75 transition hover:border-white/50 hover:bg-white/5">{t.portfolio}</a>
              </div>
            </div>
          )}
        </section>

        <footer className="relative z-20 mt-8 border-t border-white/10 pt-5">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <button onClick={() => setScene((current) => Math.max(0, current - 1))} disabled={scene === 0} className="border border-white/15 px-4 py-3 text-[9px] uppercase tracking-[.15em] text-white/55 transition hover:border-white/40 disabled:opacity-20">{t.previous}</button>
              {scene > 0 && scene < 5 && <button onClick={() => setPlaying((value) => !value)} className="border border-white/15 px-4 py-3 text-[9px] uppercase tracking-[.15em] text-white/55 transition hover:border-white/40">{playing ? "Ⅱ " + t.pause : "▶ " + t.play}</button>}
              {scene === 5 && <button onClick={() => { setScene(0); setPlaying(false); setStarted(false); }} className="border border-white/15 px-4 py-3 text-[9px] uppercase tracking-[.15em] text-white/55 transition hover:border-white/40"}>{t.restart}</button>}
            </div>
            <div className="flex items-center gap-4">
              <div className="h-px w-24 overflow-hidden bg-white/15 sm:w-40"><div className="h-full bg-[#bd8792] transition-all duration-700" style={{ width: `${((scene + 1) / 6) * 100}%` }} /></div>
              <span className="font-mono text-[9px] tracking-[.15em] text-white/35">{String(scene + 1).padStart(2, "0")} / 06</span>
              {scene < 5 && <button onClick={next} className="border border-[#bd8792]/50 bg-[#6d3440]/15 px-5 py-3 text-[9px] uppercase tracking-[.18em] text-white transition hover:bg-[#6d3440]/30">{t.next} ↗</button>}
            </div>
          </div>
          <p className="mt-5 text-center font-mono text-[8px] tracking-[.2em] text-white/20">DESIGNED TO EXPLORE · BUILT TO CONNECT</p>
        </footer>
      </div>

      <style jsx global>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: translateY(0); } }
        @media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation-duration: .01ms !important; transition-duration: .01ms !important; scroll-behavior: auto !important; } }
      `}</style>
    </main>
  );
}
