"use client";

import { useCallback, useEffect, useState } from "react";

type Chapter = {
  id: string;
  number: string;
  title: string;
  eyebrow: string;
  description: string;
  detail: string;
  x: number;
  y: number;
};

const chapters: Chapter[] = [
  { id: "about", number: "01", title: "Sobre mí", eyebrow: "PLAYER PROFILE", description: "Ingeniería Informática · Sistemas de Información", detail: "Una mente curiosa entre tecnología, personas y soluciones digitales.", x: 14, y: 25 },
  { id: "projects", number: "02", title: "Proyectos", eyebrow: "MISSIONS", description: "Ideas que se convierten en soluciones", detail: "Explora proyectos reales de desarrollo web, digitalización y experiencias de marca.", x: 38, y: 18 },
  { id: "skills", number: "03", title: "Habilidades", eyebrow: "SKILL TREE", description: "Código · Datos · Sistemas", detail: "Java, Python, SQL, JavaScript, Oracle, MongoDB y SAP S/4HANA.", x: 65, y: 28 },
  { id: "experience", number: "04", title: "Experiencia", eyebrow: "FIELD EXPERIENCE", description: "Coordinación · Decisiones · Trabajo en equipo", detail: "Experiencia coordinando operaciones y equipos en un entorno aeroportuario.", x: 82, y: 55 },
  { id: "education", number: "05", title: "Formación", eyebrow: "KNOWLEDGE BASE", description: "Aprendizaje continuo", detail: "Grado en Ingeniería Informática en la UOC, especialidad en Sistemas de Información.", x: 54, y: 76 },
  { id: "goals", number: "06", title: "Objetivos", eyebrow: "NEXT LEVEL", description: "Data Engineering · Transformación digital", detail: "Seguir creciendo en tecnología y construir soluciones útiles para empresas y personas.", x: 22, y: 68 },
];

export default function LuciaArcade() {
  const [started, setStarted] = useState(false);
  const [active, setActive] = useState(0);
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [unlocked, setUnlocked] = useState<string[]>([]);

  const openChapter = useCallback((index: number) => {
    const chapter = chapters[index];
    setActive(index);
    setPosition({ x: chapter.x, y: chapter.y });
    setUnlocked((current) => current.includes(chapter.id) ? current : [...current, chapter.id]);
  }, []);

  useEffect(() => {
    if (!started) return;
    const onKeyDown = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();
      if (["arrowup", "arrowdown", "arrowleft", "arrowright", " "].includes(key)) event.preventDefault();
      if (key === "arrowleft" || key === "a") setPosition((p) => ({ ...p, x: Math.max(7, p.x - 4) }));
      if (key === "arrowright" || key === "d") setPosition((p) => ({ ...p, x: Math.min(93, p.x + 4) }));
      if (key === "arrowup" || key === "w") setPosition((p) => ({ ...p, y: Math.max(12, p.y - 6) }));
      if (key === "arrowdown" || key === "s") setPosition((p) => ({ ...p, y: Math.min(86, p.y + 6) }));
      if (key === "e" || key === "enter") {
        const nearest = chapters.reduce((best, chapter, index) => {
          const d = Math.hypot(chapter.x - position.x, chapter.y - position.y);
          return d < best.distance ? { index, distance: d } : best;
        }, { index: active, distance: Number.POSITIVE_INFINITY });
        openChapter(nearest.index);
      }
      if (key === "escape") setStarted(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [started, position, active, openChapter]);

  const move = (dx: number, dy: number) => setPosition((p) => ({ x: Math.max(7, Math.min(93, p.x + dx)), y: Math.max(12, Math.min(86, p.y + dy)) }));
  const current = chapters[active];

  return (
    <section id="arcade" className="relative z-10 border-t border-white/10 px-4 py-16 md:px-12 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <div><p className="font-mono text-[10px] uppercase tracking-[.25em] text-[#d58a9d]">01.5 · INTERACTIVE INTRO</p><h2 className="mt-2 text-2xl font-medium tracking-tight md:text-3xl">Lucía Arcade</h2></div>
          <p className="font-mono text-[9px] uppercase tracking-[.16em] text-white/30">A small world. A lot to discover.</p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-[#874353]/70 bg-[#090709] shadow-[0_0_55px_rgba(111,35,57,.12)]">
          <div className="flex items-center justify-between border-b border-[#713647]/60 bg-[#120b10] px-4 py-3">
            <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#d77b91] shadow-[0_0_10px_#d77b91]" /><span className="font-mono text-[10px] tracking-[.2em] text-[#e7b0bd]">LUCÍA CASTAMAR / ARCADE.exe</span></div>
            <span className="font-mono text-[9px] text-white/35">PLAYER 01 · LV. 01</span>
          </div>

          <div className="grid lg:grid-cols-[minmax(0,1.45fr)_minmax(260px,.75fr)]">
            <div className="relative min-h-[390px] overflow-hidden border-b border-[#713647]/50 bg-[radial-gradient(ellipse_at_50%_55%,rgba(126,48,72,.25),transparent_58%),linear-gradient(145deg,#100b10,#08080b_65%)] sm:min-h-[470px] lg:border-b-0 lg:border-r">
              <div className="pointer-events-none absolute inset-0 opacity-[.13]" style={{ backgroundImage: "linear-gradient(rgba(216,139,158,.25) 1px,transparent 1px),linear-gradient(90deg,rgba(216,139,158,.25) 1px,transparent 1px)", backgroundSize: "32px 32px" }} />
              <div className="absolute left-4 top-4 z-10 rounded-lg border border-[#8b4659]/60 bg-black/55 px-3 py-2 backdrop-blur"><p className="font-mono text-[9px] tracking-[.16em] text-[#d58a9d]">PLAYER STATUS</p><p className="mt-1 text-xs text-white/80">CURIOUS · CREATIVE · BUILDING</p></div>
              <div className="absolute right-4 top-4 font-mono text-[9px] tracking-widest text-white/25">MAP 01 / 06</div>

              <svg className="absolute inset-0 h-full w-full opacity-40" viewBox="0 0 600 420" preserveAspectRatio="none" aria-hidden="true">
                <path d="M84 105 L228 76 L390 118 L492 230 L324 320 L132 286 Z" fill="none" stroke="#a75a70" strokeDasharray="5 8" strokeWidth="1.5" />
                <path d="M228 76 L324 320 M84 105 L492 230" fill="none" stroke="#74394c" strokeDasharray="3 9" />
              </svg>

              {chapters.map((chapter, index) => (
                <button key={chapter.id} type="button" onClick={() => openChapter(index)} aria-label={`Abrir nivel ${chapter.title}`} className={`absolute z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1 transition hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#e6a0b0]`} style={{ left: `${chapter.x}%`, top: `${chapter.y}%` }}>
                  <span className={`flex h-7 w-7 items-center justify-center rounded-full border text-[10px] font-mono shadow-[0_0_18px_rgba(196,104,129,.2)] ${active === index ? "border-[#f0a2b4] bg-[#7d344a] text-white" : unlocked.includes(chapter.id) ? "border-[#a9687b] bg-[#31131f] text-[#e4a0b0]" : "border-[#744052] bg-[#140c12] text-white/55"}`}>{unlocked.includes(chapter.id) ? "✓" : chapter.number}</span>
                  <span className="whitespace-nowrap rounded bg-black/65 px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-wider text-white/55">{chapter.title}</span>
                </button>
              ))}

              <div className="absolute z-20 -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ease-out" style={{ left: `${position.x}%`, top: `${position.y}%` }} aria-label="Lucía, personaje del juego">
                <div className="relative h-[76px] w-[58px] sm:h-[92px] sm:w-[70px]">
                  <div className="absolute left-[8px] top-[4px] h-[48px] w-[44px] rounded-[45%] bg-[#39202a] shadow-[0_0_20px_rgba(204,105,133,.25)]" />
                  <div className="absolute left-[13px] top-[15px] h-[39px] w-[36px] rounded-[45%] bg-[#e7ad91]" />
                  <div className="absolute left-[11px] top-[8px] h-[20px] w-[40px] rounded-t-full bg-[#28151d]" />
                  <span className="absolute left-[19px] top-[30px] h-[5px] w-[5px] rounded-full bg-[#76a77a] shadow-[9px_0_0_#76a77a]" />
                  <span className="absolute left-[23px] top-[40px] h-[2px] w-[8px] rounded-full bg-[#9d5364]" />
                  <span className="absolute left-[5px] top-[14px] h-[23px] w-[9px] rounded-full border-[3px] border-[#d68a9d] bg-[#351a27]" />
                  <span className="absolute left-[44px] top-[14px] h-[23px] w-[9px] rounded-full border-[3px] border-[#d68a9d] bg-[#351a27]" />
                  <div className="absolute left-[8px] top-[49px] h-[25px] w-[44px] rounded-t-xl border border-[#8b4659] bg-[#171016]" />
                  <div className="absolute left-[1px] top-[1px] h-[18px] w-[16px] rounded-full bg-[#39202a] shadow-[13px_-4px_0_#39202a,27px_-2px_0_#39202a,39px_8px_0_#39202a,2px_20px_0_#39202a,39px_25px_0_#39202a]" />
                  <span className="absolute -right-2 -top-3 font-mono text-[8px] text-[#e7a1b2]">♡</span>
                </div>
              </div>

              {!started && <div className="absolute inset-0 z-30 flex items-center justify-center bg-[#080609]/65 p-5 backdrop-blur-[2px]">
                <div className="max-w-xs text-center"><p className="font-mono text-[10px] tracking-[.28em] text-[#e5a0b2]">A LITTLE WORLD TO EXPLORE</p><h3 className="mt-3 text-3xl font-semibold tracking-[.08em] text-white sm:text-4xl">PRESS START</h3><p className="mt-3 text-sm text-white/55">Muévete por el mapa y descubre mi historia.</p><button type="button" onClick={() => { setStarted(true); openChapter(0); }} className="mt-6 border border-[#c87990] bg-[#68283e] px-7 py-3 font-mono text-xs tracking-[.2em] text-white shadow-[0_0_25px_rgba(199,104,133,.22)] transition hover:bg-[#873950]">▶ START GAME</button></div>
              </div>}
              <div className="absolute bottom-3 left-3 z-20 hidden rounded border border-white/10 bg-black/55 px-2 py-1 font-mono text-[9px] text-white/40 sm:block">WASD / ← ↑ → ↓ · E INTERACT</div>
            </div>

            <aside className="flex flex-col bg-[#0d090d] p-4 sm:p-5">
              <div className="flex items-center justify-between"><p className="font-mono text-[10px] tracking-[.2em] text-[#d58a9d]">// SELECT LEVEL</p><span className="font-mono text-[9px] text-white/30">{unlocked.length}/6 UNLOCKED</span></div>
              <div className="mt-4 space-y-2">
                {chapters.map((chapter, index) => <button key={chapter.id} type="button" onClick={() => { setStarted(true); openChapter(index); }} className={`flex w-full items-center gap-3 rounded-lg border px-3 py-3 text-left transition ${active === index ? "border-[#bd7188] bg-[#311520] text-white" : "border-[#422330] bg-[#160f14] text-white/65 hover:border-[#8c4a5e] hover:text-white"}`}>
                  <span className="font-mono text-[10px] text-[#d58a9d]">{chapter.number}</span><span className="min-w-0 flex-1"><span className="block text-sm">{chapter.title}</span><span className="mt-0.5 block truncate font-mono text-[8px] tracking-wider text-white/30">{chapter.eyebrow}</span></span><span className="text-[#d58a9d]">{unlocked.includes(chapter.id) ? "✓" : "›"}</span>
                </button>)}
              </div>
              <div className="mt-5 flex-1 rounded-lg border border-[#603144] bg-[#160d13] p-4">
                <p className="font-mono text-[9px] tracking-[.2em] text-[#d58a9d]">{current.eyebrow} / {current.number}</p><h4 className="mt-2 text-xl font-medium text-white">{current.title}</h4><p className="mt-2 text-sm leading-6 text-white/55">{current.description}</p><p className="mt-3 border-t border-white/10 pt-3 text-xs leading-5 text-white/40">{current.detail}</p>
              </div>
              <div className="mt-4 flex items-center justify-between gap-3"><span className="font-mono text-[9px] text-white/35">MOVE · EXPLORE · DISCOVER</span><button type="button" onClick={() => setStarted((v) => !v)} className="text-[10px] text-[#d58a9d] underline underline-offset-4">{started ? "PAUSE" : "RESUME"}</button></div>
              <div className="mt-4 grid grid-cols-3 gap-2 sm:hidden">
                <span /><button type="button" onClick={() => move(0,-7)} className="rounded border border-[#744052] bg-[#21121a] py-3 text-[#e4a0b0]">↑</button><span />
                <button type="button" onClick={() => move(-5,0)} className="rounded border border-[#744052] bg-[#21121a] py-3 text-[#e4a0b0]">←</button><button type="button" onClick={() => openChapter(active)} className="rounded border border-[#744052] bg-[#68283e] py-3 text-white">E</button><button type="button" onClick={() => move(5,0)} className="rounded border border-[#744052] bg-[#21121a] py-3 text-[#e4a0b0]">→</button>
                <span /><button type="button" onClick={() => move(0,7)} className="rounded border border-[#744052] bg-[#21121a] py-3 text-[#e4a0b0]">↓</button><span />
              </div>
            </aside>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-2 border-t border-[#713647]/60 bg-[#120b10] px-4 py-3"><p className="font-mono text-[9px] tracking-[.15em] text-white/35">BUILT WITH CURIOSITY · POWERED BY COFFEE & CODE</p><p className="font-mono text-[9px] text-[#d58a9d]">PRESS START TO BEGIN ♥</p></div>
        </div>
      </div>
    </section>
  );
}
