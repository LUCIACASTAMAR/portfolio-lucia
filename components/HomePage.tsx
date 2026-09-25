"use client";

import { useEffect, useRef, useState } from "react";
import { profile } from "@/data/profile";
import { education } from "@/data/education";
import { projects } from "@/data/projects";
import { getTranslations, type Locale } from "@/i18n";
import { localizedContent } from "@/data/localizedContent";

type HomePageProps = {
  locale?: Locale;
};

const techItems = [
  "010101",
  "DATABASE",
  "API",
  "JAVA",
  "SQL",
  "AI",
  "101010",
  "JAVASCRIPT",
  "WEB",
  "PYTHON",
  "AUTOMATION",
  "010011",
  "SYSTEM",
  "CODE",
  "JSON",
  "NODE",
];

const skills = [
  "JavaScript",
  "Java",
  "SQL",
  "Python",
  "AI",
  "GitHub",
];

export default function HomePage({ locale = "es" }: HomePageProps) {
  const t = getTranslations(locale);
  const content = localizedContent[locale];

  const [activeTech, setActiveTech] = useState(0);
  const [languageOpen, setLanguageOpen] = useState(false);
  const languageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTech((current) => (current + 1) % techItems.length);
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (
        languageRef.current &&
        !languageRef.current.contains(event.target as Node)
      ) {
        setLanguageOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">

      {/* =====================================================
          TECHNOLOGY BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none fixed inset-0 overflow-hidden">

        <div className="absolute left-1/2 top-[42%] h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.025] blur-3xl" />

        <div className="tech-grid absolute inset-0 opacity-30" />

        {techItems.map((item, index) => (
          <div
            key={`${item}-${index}`}
            className="absolute font-mono text-[10px] tracking-wider text-white transition-all duration-1000 md:text-xs"
            style={{
              left: `${5 + ((index * 17) % 90)}%`,
              top: `${8 + ((index * 23) % 82)}%`,
              opacity: activeTech === index ? 0.5 : 0.12,
              transform:
                activeTech === index
                  ? "translateY(-12px)"
                  : "translateY(0px)",
            }}
          >
            {item}
          </div>
        ))}

        <div className="absolute left-[8%] top-[27%] h-px w-[32%] rotate-[12deg] bg-white/[0.08]" />

        <div className="absolute right-[8%] top-[34%] h-px w-[28%] rotate-[-12deg] bg-white/[0.08]" />

        <div className="absolute bottom-[24%] left-[20%] h-px w-[25%] rotate-[6deg] bg-white/[0.08]" />

        <div className="absolute bottom-[35%] right-[15%] h-px w-[20%] rotate-[-7deg] bg-white/[0.06]" />

        <div className="tech-pulse absolute left-[15%] top-[25%] h-1.5 w-1.5 rounded-full bg-white" />

        <div className="tech-pulse absolute right-[20%] top-[45%] h-1.5 w-1.5 rounded-full bg-white" />

        <div className="tech-pulse absolute bottom-[25%] left-[35%] h-1.5 w-1.5 rounded-full bg-white" />

        <div className="tech-pulse absolute bottom-[35%] right-[30%] h-1.5 w-1.5 rounded-full bg-white" />
      </div>

      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <nav className="relative z-20 border-b border-white/10">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-6 md:px-12">

          {/* LOGO */}
          <a
            href="#top"
            className="text-sm font-semibold tracking-[0.28em]"
          >
            LUCY<span className="text-white/35">.</span>
          </a>

          {/* NAVIGATION */}
          <div className="hidden items-center gap-8 text-sm text-white/45 md:flex">

            <a
              href="#about"
              className="transition-colors hover:text-white"
            >
              {t.nav.about}
            </a>

            <a
              href="#projects"
              className="transition-colors hover:text-white"
            >
              {t.nav.projects}
            </a>

            <a
              href="#education"
              className="transition-colors hover:text-white"
            >
              {t.nav.education}
            </a>

            <a
              href="#services"
              className="transition-colors hover:text-white"
            >
              {t.nav.services}
            </a>

          </div>

          {/* CONTACT + LANGUAGE */}
          <div className="flex items-center gap-5">

            <a
              href="#contact"
              className="rounded-full border border-white/20 px-5 py-2.5 text-xs font-medium transition-all hover:border-white/40 hover:bg-white hover:text-black"
            >
              {t.nav.contact}
            </a>

            {/* LANGUAGE SELECTOR */}
            <div ref={languageRef} className="relative">

              <button
                type="button"
                onClick={() => setLanguageOpen((open) => !open)}
                onPointerDown={(event) => event.stopPropagation()}
                aria-haspopup="listbox"
                aria-expanded={languageOpen}
                className="flex items-center gap-2 font-mono text-[10px] tracking-[0.15em] text-white/70 transition-colors hover:text-white"
              >
                <span>{locale.toUpperCase()}</span>

                <span
                  className={`text-[9px] transition-transform duration-200 ${
                    languageOpen ? "rotate-180" : ""
                  }`}
                >
                  ↓
                </span>
              </button>

              {languageOpen && (
                <div
                  className="absolute right-0 top-full z-50 mt-4 w-44 overflow-hidden rounded-xl border border-white/10 bg-black/95 p-1 shadow-2xl backdrop-blur-xl"
                  role="listbox"
                >
                  {[
                    { code: "es", name: "Español" },
                    { code: "en", name: "English" },
                    { code: "fr", name: "Français" },
                    { code: "de", name: "Deutsch" },
                    { code: "it", name: "Italiano" },
                    { code: "pt", name: "Português" },
                    { code: "nl", name: "Nederlands" },
                    { code: "ru", name: "Русский" },
                  ].map((language) => (
                    <a
                      key={language.code}
                      href={`/${language.code}`}
                      onClick={() => setLanguageOpen(false)}
                      className={`flex items-center justify-between rounded-lg px-3 py-2.5 font-mono text-[10px] tracking-[0.08em] transition-colors ${
                        locale === language.code
                          ? "bg-white/[0.08] text-white"
                          : "text-white/45 hover:bg-white/[0.05] hover:text-white"
                      }`}
                    >
                      <span>{language.name}</span>
                      <span className="text-[9px] text-white/25">
                        {language.code.toUpperCase()}
                      </span>
                    </a>
                  ))}
                </div>
              )}

            </div>

          </div>

        </div>
      </nav>

      {/* =====================================================
          HERO
      ====================================================== */}

      <section
        id="top"
        className="relative z-10 min-h-[calc(100vh-76px)] px-6 md:px-12"
      >
        <div className="mx-auto flex min-h-[calc(100vh-76px)] max-w-7xl items-center">

          <div className="grid w-full items-center gap-16 py-20 lg:grid-cols-[1.2fr_0.8fr]">

            {/* LEFT SIDE */}

            <div>

              <div className="mb-7 flex items-center gap-3">

                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/40" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-white/70" />
                </span>

                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/40">
                  {t.hero.status}
                </span>

              </div>

              <div className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-white/35">
                <span className="h-px w-8 bg-white/30" />
                {t.hero.role}
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[0.9]">
                {t.hero.title}
              </h1>

              <p className="mt-9 max-w-2xl text-base leading-7 text-white/50 md:text-lg">
               {t.hero.description}
              </p>

             <div className="mt-8 flex flex-wrap gap-3">
  <a
    href="#projects"
    className="inline-flex items-center justify-center bg-white px-6 py-4 text-sm font-medium !text-black transition-colors hover:bg-white/90"
  >
    {t.hero.projects}
  </a>

  <a
    href="/cv/CV_Lucia_Castaneda.pdf"
    download
    className="inline-flex items-center justify-center border border-white/15 px-6 py-4 text-sm font-medium text-white transition-colors hover:border-white/30"
  >
    {t.hero.cv}
  </a>

  <a
    href="#contact"
    className="inline-flex items-center justify-center border border-white/15 px-6 py-4 text-sm font-medium text-white transition-colors hover:border-white/30"
  >
    {t.hero.contact}
  </a>
</div>

              <div className="mt-16 flex flex-wrap gap-2.5">

                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/[0.025] px-4 py-2 font-mono text-[11px] text-white/40 transition-colors hover:border-white/25 hover:text-white/70"
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </div>

            {/* RIGHT SIDE — SYSTEM PANEL */}

            <div className="hidden justify-center lg:flex">

              <div className="relative w-full max-w-[390px]">

                <div className="absolute -inset-10 rounded-full bg-white/[0.025] blur-3xl" />

                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/70 backdrop-blur-xl">

                  <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">

                    <div className="flex items-center gap-2">

                      <span className="h-2 w-2 rounded-full bg-white/70" />

                      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/45">
                        {t.system.profile}
                      </span>

                    </div>

                    <span className="font-mono text-[9px] text-white/25">
                      2026
                    </span>

                  </div>

                  <div className="p-6">

                    <div className="mb-8">

                      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/25">
                        {t.system.currentFocus}
                      </p>

                      <p className="mt-2 text-lg font-medium">
                        {t.system.digitalSolutions}
                      </p>

                    </div>

                    <div className="space-y-5">

                      <SystemRow
                        label="WEB"
                        value={t.system.web}
                      />

                      <SystemRow
                        label="AI"
                        value={t.system.ai}
                      />

                      <SystemRow
                        label="AUTOMATION"
                        value={t.system.automation}
                      />

                      <SystemRow
                        label="LEARNING"
                        value={t.system.learning}
                      />

                    </div>

                    <div className="my-7 h-px bg-white/10" />

                    <div className="space-y-1 font-mono text-[10px] leading-5 text-white/25">

                      <p>
                        <span className="text-white/40">const</span>{" "}
                        profile = {"{"}
                      </p>

                      <p className="pl-4">
                        focus:{" "}
                        <span className="text-white/45">
                          "technology"
                        </span>
                        ,
                      </p>

                      <p className="pl-4">
                        ai:{" "}
                        <span className="text-white/45">
                          true
                        </span>
                        ,
                      </p>

                      <p className="pl-4">
                        learning:{" "}
                        <span className="text-white/45">
                          true
                        </span>
                      </p>

                      <p>{"}"}</p>

                    </div>

                  </div>

                  <div className="border-t border-white/10 px-5 py-3">

                    <div className="flex items-center justify-between">

                      <span className="font-mono text-[9px] text-white/20">
                        {t.system.status}
                      </span>

                      <span className="font-mono text-[9px] text-white/50">
                        ● {t.system.stable}
                      </span>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          ABOUT
      ====================================================== */}

      <section
        id="about"
        className="relative z-10 border-t border-white/10 px-6 py-24 md:px-12"
      >

        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.7fr_1.3fr]">

          <div>

            <p className="font-mono text-xs uppercase tracking-[0.25em] text-white/30">
              {t.about.label}
            </p>

          </div>

          <div>

            <h2 className="max-w-3xl text-3xl font-medium leading-tight md:text-5xl">
              {t.about.title}
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-7 text-white/50">
              {t.about.description}
            </p>

            <p className="mt-5 max-w-2xl text-base leading-7 text-white/50">
              {t.about.extendedDescription}
            </p>

            <div className="mt-10 flex flex-wrap gap-2">

              {profile.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-white/10 bg-white/[0.025] px-3 py-1.5 font-mono text-[10px] text-white/40"
                >
                  {technology}
                </span>
              ))}

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          PROJECTS
      ====================================================== */}

      <section
        id="projects"
        className="relative z-10 border-t border-white/10 px-6 py-24 md:px-12"
      >

        <div className="mx-auto max-w-7xl">

          <p className="font-mono text-xs uppercase tracking-[0.25em] text-white/30">
            {t.projects.label}
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
           {projects.map((project) => (
  <article
    key={project.number}
    className="group flex min-h-[420px] flex-col rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition duration-500 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.05]"
  >
    {/* HEADER */}

    <div className="flex items-center justify-between">

      <span className="font-mono text-xs text-white/25">
        {project.number}
      </span>

      <span className="font-mono text-[10px] uppercase tracking-wider text-white/30">
        {content.projects[project.slug].type}
      </span>

    </div>

    {/* CONTENT */}

    <div className="mt-auto">

      <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.15em] text-white/30">
        {content.projects[project.slug].category}
      </p>

      <h3 className="text-2xl font-medium leading-tight">
        {content.projects[project.slug].title}
      </h3>

      <p className="mt-5 text-sm leading-6 text-white/45">
        {content.projects[project.slug].description}
      </p>

      {/* TECHNOLOGIES */}

      <div className="mt-6 flex flex-wrap gap-2">

        {project.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-full border border-white/10 bg-black/30 px-2.5 py-1 font-mono text-[9px] text-white/35"
          >
            {technology}
          </span>
        ))}

      </div>

      {/* PROJECT LINK */}

      <a
        href={`/proyectos/${project.slug}`}
        className="mt-7 inline-flex items-center gap-2 text-xs font-medium text-white/60 transition-colors hover:text-white"
      >
        {t.projects.view}

        <span className="transition-transform group-hover:translate-x-1">
          →
        </span>
      </a>

    </div>

  </article>
))}

          </div>

        </div>

      </section>

      

      {/* =====================================================
          EDUCATION
      ====================================================== */}

      <section
        id="education"
        className="relative z-10 border-t border-white/10 px-6 py-24 md:px-12"
      >

        <div className="mx-auto max-w-7xl">

          <p className="font-mono text-xs uppercase tracking-[0.25em] text-white/30">
            {t.education.label}
          </p>

          <div className="mt-10 space-y-0 border-t border-white/10">

            {education.map((item) => (

              <div
                key={`${item.institution}-${content.education[education.indexOf(item)].title}`}
                className="grid gap-4 border-b border-white/10 py-8 md:grid-cols-[180px_1fr]"
              >

                <div>

                  <span className="font-mono text-xs text-white/30">
                    {content.education[education.indexOf(item)].status}
                  </span>

                  {item.period && (
                    <p className="mt-2 font-mono text-[10px] text-white/20">
                      {item.period}
                    </p>
                  )}

                </div>

                <div>

                  <h3 className="text-xl font-medium">
                    {content.education[education.indexOf(item)].title}
                  </h3>

                  <p className="mt-2 text-sm text-white/45">
                    {item.institution} · {content.education[education.indexOf(item)].specialization}
                  </p>

                  <p className="mt-4 max-w-2xl text-sm leading-6 text-white/40">
                    {content.education[education.indexOf(item)].description}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          SERVICES
      ====================================================== */}

      <section
        id="services"
        className="relative z-10 border-t border-white/10 px-6 py-24 md:px-12"
      >

        <div className="mx-auto max-w-7xl">

          <p className="font-mono text-xs uppercase tracking-[0.25em] text-white/30">
            {t.services.label}
          </p>

          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-3">

            {[
              {
                title: t.services.web,
                description: t.services.webDescription,
              },
              {
                title: t.services.ai,
                description: t.services.aiDescription,
              },
              {
                title: t.services.automation,
                description: t.services.automationDescription,
              },
            ].map((service) => (

              <div
                key={service.title}
                className="bg-black p-8 transition hover:bg-white/[0.04]"
              >

                <h3 className="text-xl font-medium">
                  {service.title}
                </h3>

                <p className="mt-5 text-sm leading-6 text-white/45">
                  {service.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          CONTACT
      ====================================================== */}

      <section
        id="contact"
        className="relative z-10 border-t border-white/10 px-6 py-32 md:px-12"
      >

        <div className="mx-auto max-w-5xl text-center">

          <p className="font-mono text-xs uppercase tracking-[0.25em] text-white/30">
            {t.contact.label}
          </p>

          <h2 className="mt-8 text-5xl font-semibold tracking-[-0.04em] md:text-7xl">
            {t.contact.title}
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-white/45">
            {t.contact.description}
          </p>

          <a
            href={`mailto:${profile.contact?.email ?? "lucycastamar@gmail.com"}`}
            className="mt-10 inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold !text-black transition hover:bg-white/85"
          >
            {t.contact.contact}
          </a>

          <div className="mt-6 flex justify-center gap-6 text-sm text-white/40">

            <a
              href={profile.contact?.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              {t.contact.linkedin}
            </a>

            <a
              href={`mailto:${profile.contact?.email ?? "lucycastamar@gmail.com"}`}
              className="transition-colors hover:text-white"
            >
              {t.contact.email}
            </a>

          </div>

        </div>

      </section>

      {/* =====================================================
          FOOTER
      ====================================================== */}

      <footer className="relative z-10 border-t border-white/10 px-6 py-8 md:px-12">

        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-xs text-white/30 md:flex-row">

          <span>
            © 2026 Lucía Castañeda · {t.footer.rights}
          </span>

          <span className="font-mono">
            {t.footer.tagline}
          </span>

        </div>

      </footer>

    </main>
  );
}

/* =========================================================
   SYSTEM ROW
========================================================= */

function SystemRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between">

      <span className="font-mono text-[10px] tracking-[0.18em] text-white/35">
        {label}
      </span>

      <div className="flex items-center gap-2">

        <span className="h-1.5 w-1.5 rounded-full bg-white/70" />

        <span className="font-mono text-[10px] text-white/45">
          {value}
        </span>

      </div>

    </div>
  );
}