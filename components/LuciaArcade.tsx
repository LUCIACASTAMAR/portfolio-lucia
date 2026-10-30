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
                <div className="relative h-[112px] w-[96px] sm:h-[148px] sm:w-[126px]">
                  <svg viewBox="0 0 126 148" className="h-full w-full overflow-visible drop-shadow-[0_12px_18px_rgba(0,0,0,.55)]" role="img" aria-label="Retrato ilustrado de Lucía con pelo rizado castaño, ojos verdes y auriculares burdeos">
                    <defs>
                      <radialGradient id="skin" cx="42%" cy="34%" r="70%"><stop offset="0" stopColor="#ffd4b8"/><stop offset="1" stopColor="#bd7969"/></radialGradient>
                      <linearGradient id="hair" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#704033"/><stop offset=".48" stopColor="#29171a"/><stop offset="1" stopColor="#120d12"/></linearGradient>
                      <linearGradient id="coat" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#49303a"/><stop offset=".5" stopColor="#171219"/><stop offset="1" stopColor="#09080c"/></linearGradient>
                      <linearGradient id="earcup" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#e59aaa"/><stop offset="1" stopColor="#682c43"/></linearGradient>
                    </defs>
                    <path d="M18 143 Q12 111 27 98 Q37 87 62 88 Q95 87 108 108 Q118 124 119 148Z" fill="url(#coat)" stroke="#8d5362" strokeWidth="1.2"/>
                    <path d="M44 102 Q62 117 83 101 L93 119 Q68 139 34 119Z" fill="#21151d" stroke="#875064"/>
                    <path d="M29 70 Q17 37 39 15 Q55 -3 82 10 Q111 18 111 53 Q119 78 98 104 Q91 120 73 118 L42 104Z" fill="url(#hair)"/>
                    <path d="M35 46 Q27 20 51 12 Q73 -1 94 18 Q108 31 99 58 Q94 78 80 89 Q57 96 42 79Z" fill="url(#skin)" stroke="#a86d61" strokeWidth=".8"/>
                    <path d="M34 44 Q27 14 56 8 Q84 -2 101 24 Q108 42 96 61 Q92 33 76 30 Q58 28 47 46 Q42 60 34 65Z" fill="url(#hair)"/>
                    <path d="M34 24 Q21 13 28 3 Q42 -5 48 10 Q56 -2 67 4 Q78 -5 86 9 Q104 6 108 23 Q122 30 111 43 Q116 57 103 66 Q101 83 87 88 Q98 69 91 56 Q82 39 66 38 Q49 37 42 56 Q34 72 23 65 Q14 53 26 43 Q16 34 34 24Z" fill="url(#hair)"/>
                    {[[31,19,12],[48,10,11],[67,9,12],[87,17,13],[105,31,10],[27,42,11],[102,52,12],[34,66,10],[91,72,13],[47,83,12],[75,88,11]].map(([x,y,r],i)=><circle key={i} cx={x} cy={y} r={r} fill="url(#hair)" stroke="#9a6049" strokeOpacity=".35" strokeWidth="1.4"/>)}
                    <path d="M47 51 Q55 44 63 51" fill="none" stroke="#48272a" strokeWidth="2.5" strokeLinecap="round"/>
                    <path d="M73 51 Q81 44 89 51" fill="none" stroke="#48272a" strokeWidth="2.5" strokeLinecap="round"/>
                    <ellipse cx="56" cy="56" rx="5.5" ry="7" fill="#f5eee0"/><ellipse cx="81" cy="56" rx="5.5" ry="7" fill="#f5eee0"/>
                    <ellipse cx="57" cy="57" rx="3.5" ry="5" fill="#668b57"/><ellipse cx="82" cy="57" rx="3.5" ry="5" fill="#668b57"/>
                    <ellipse cx="58" cy="57" rx="1.8" ry="3.2" fill="#17221b"/><ellipse cx="83" cy="57" rx="1.8" ry="3.2" fill="#17221b"/>
                    <circle cx="59" cy="55" r="1.2" fill="white"/><circle cx="84" cy="55" r="1.2" fill="white"/>
                    <path d="M69 59 Q65 69 70 70" fill="none" stroke="#a96c61" strokeWidth="1.3" strokeLinecap="round"/>
                    <path d="M64 78 Q71 83 79 77" fill="none" stroke="#9c4d5d" strokeWidth="1.8" strokeLinecap="round"/>
                    <path d="M44 72 Q48 78 56 78 M84 77 Q91 74 94 68" fill="none" stroke="#e8a18f" strokeOpacity=".6" strokeWidth="2"/>
                    <path d="M37 34 Q42 20 57 19 Q79 12 95 34" fill="none" stroke="#a66a4e" strokeOpacity=".55" strokeWidth="2"/>
                    <path d="M25 39 Q17 52 28 67" fill="none" stroke="#d58a9d" strokeWidth="5" strokeLinecap="round"/>
                    <path d="M24 39 Q17 52 28 67" fill="none" stroke="#57283c" strokeWidth="2" strokeLinecap="round"/>
                    <rect x="17" y="44" width="13" height="27" rx="6.5" fill="url(#earcup)" stroke="#e8a0b2" strokeWidth="1.5"/>
                    <circle cx="23.5" cy="57.5" r="3.2" fill="#f3c0ca" opacity=".85"/>
                    <path d="M30 96 Q45 108 62 107 Q82 108 98 94" fill="none" stroke="#a96b7c" strokeOpacity=".7" strokeWidth="2"/>
                    <path d="M52 112 L63 126 L75 112" fill="none" stroke="#b8798b" strokeWidth="1.2"/>
                    <path d="M62 125 L67 132 L72 125" fill="none" stroke="#e2a0b0" strokeWidth="1.3"/>
                  </svg>
                  <span className="absolute -right-1 top-0 font-mono text-xs text-[#e7a1b2] drop-shadow">♡</span>
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
