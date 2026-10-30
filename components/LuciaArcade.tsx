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
              <div className="absolute left-4 top-4 z-10 max-w-[calc(100%-2rem)] rounded-lg border border-[#8b4659]/60 bg-black/65 px-3 py-2 backdrop-blur sm:max-w-[min(70%,420px)]"><p className="font-mono text-[9px] tracking-[.16em] text-[#d58a9d]">PLAYER STATUS</p><p className="mt-1 text-[clamp(10px,2.7vw,13px)] leading-snug text-white/85">CURIOUS · CREATIVE · BUILDING</p></div>
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
                  <svg viewBox="0 0 160 190" className="h-full w-full overflow-visible drop-shadow-[0_14px_22px_rgba(0,0,0,.62)]" role="img" aria-label="Lucía, ilustración 2D detallada con melena rizada castaña, ojos verdes y auriculares burdeos">
                    <defs>
                      <radialGradient id="skin" cx="38%" cy="28%" r="78%"><stop stopColor="#ffe0c8"/><stop offset=".58" stopColor="#e8b49a"/><stop offset="1" stopColor="#b9786c"/></radialGradient>
                      <linearGradient id="hair" x1="0" y1="0" x2=".9" y2="1"><stop stopColor="#87513c"/><stop offset=".38" stopColor="#4a2925"/><stop offset=".78" stopColor="#24171b"/><stop offset="1" stopColor="#120e14"/></linearGradient>
                      <linearGradient id="hairLight" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#bd805c"/><stop offset="1" stopColor="#5b342d"/></linearGradient>
                      <linearGradient id="jacket" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#573543"/><stop offset=".48" stopColor="#211923"/><stop offset="1" stopColor="#0c0b10"/></linearGradient>
                      <linearGradient id="headphone" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#f0b1bd"/><stop offset=".5" stopColor="#a65370"/><stop offset="1" stopColor="#54243a"/></linearGradient>
                      <filter id="soft"><feGaussianBlur stdDeviation="2"/></filter>
                    </defs>
                    {/* shoulders and jacket */}
                    <path d="M19 187 Q18 153 34 137 Q48 125 67 124 L96 124 Q125 131 139 151 Q148 168 150 190Z" fill="url(#jacket)" stroke="#a36578" strokeWidth="1.5"/>
                    <path d="M57 132 Q79 149 105 132 L124 157 Q103 177 82 180 Q58 169 39 157Z" fill="#21151e" stroke="#815064" strokeWidth="1.2"/>
                    <path d="M69 137 L83 163 L98 138 M83 163 L91 174" fill="none" stroke="#c18498" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M69 113 L67 137 Q81 148 98 136 L94 111Z" fill="url(#skin)"/>
                    {/* hair mass behind face */}
                    <path d="M35 79 Q20 50 39 25 Q53 4 81 7 Q115 3 133 30 Q151 54 136 91 Q144 119 119 143 Q98 160 63 146 Q33 138 25 111Z" fill="url(#hair)" stroke="#9a624b" strokeWidth="1.4"/>
                    {/* face */}
                    <path d="M48 56 Q54 28 84 27 Q117 28 123 61 L119 101 Q113 129 86 137 Q58 132 47 105Z" fill="url(#skin)" stroke="#b47b6c" strokeWidth="1.1"/>
                    <path d="M48 88 Q43 108 59 124 Q71 137 88 138 Q111 130 120 107 Q112 132 91 143 Q64 143 48 122 Q36 106 48 88Z" fill="#5b302b" opacity=".42"/>
                    {/* curls: connected organic silhouette, not bead-like circles */}
                    <path d="M34 65 Q17 52 29 35 Q19 17 41 13 Q45 -1 64 8 Q78 -4 91 8 Q110 0 119 18 Q143 17 141 39 Q155 53 137 69 Q147 85 132 99 Q127 82 116 72 Q121 49 101 37 Q82 23 64 39 Q49 49 48 73 Q39 83 34 65Z" fill="url(#hair)" stroke="#a66b50" strokeWidth="1.4"/>
                    <path d="M31 38 Q21 23 39 16 Q50 8 57 23 Q61 7 78 12 Q90 5 99 21 Q116 11 126 28 Q143 34 132 51 Q143 63 128 76" fill="none" stroke="url(#hairLight)" strokeWidth="5" strokeLinecap="round" opacity=".78"/>
                    <path d="M38 87 Q25 77 33 63 Q24 51 38 43 M47 23 Q43 14 54 12 M72 18 Q78 8 87 17 M104 27 Q117 17 126 34 M130 54 Q141 61 130 73" fill="none" stroke="#c18a68" strokeWidth="2.2" strokeLinecap="round" opacity=".55"/>
                    <path d="M39 91 Q27 104 40 119 Q46 132 60 130 M119 91 Q135 101 126 119 Q119 132 107 137" fill="none" stroke="#8e5945" strokeWidth="7" strokeLinecap="round"/>
                    {/* loose curls framing cheeks */}
                    <path d="M42 104 Q29 96 33 84 Q38 74 48 81 Q56 89 49 101 Q45 109 42 104Z" fill="url(#hair)" stroke="#9c634d" strokeWidth="1.3"/>
                    <path d="M119 105 Q133 93 139 105 Q143 119 130 126 Q118 129 115 118Z" fill="url(#hair)" stroke="#9c634d" strokeWidth="1.3"/>
                    {/* brows and eyes */}
                    <path d="M55 72 Q66 64 76 72 M91 71 Q103 63 113 71" fill="none" stroke="#56332d" strokeWidth="3" strokeLinecap="round"/>
                    <path d="M54 81 Q65 73 77 81 Q66 94 55 81Z M91 80 Q103 72 114 80 Q103 93 91 80Z" fill="#fff4e9" stroke="#8d6258" strokeWidth="1"/>
                    <ellipse cx="66" cy="82" rx="5.1" ry="6.4" fill="#6f9666"/><ellipse cx="103" cy="81" rx="5.1" ry="6.4" fill="#6f9666"/>
                    <ellipse cx="67" cy="82" rx="2.5" ry="4.5" fill="#1e2920"/><ellipse cx="104" cy="81" rx="2.5" ry="4.5" fill="#1e2920"/>
                    <circle cx="68.5" cy="79.5" r="1.5" fill="white"/><circle cx="105.5" cy="78.5" r="1.5" fill="white"/>
                    <path d="M84 84 Q78 99 84 101 Q88 103 91 99" fill="none" stroke="#b77c6d" strokeWidth="1.7" strokeLinecap="round"/>
                    <path d="M74 114 Q85 121 98 113" fill="none" stroke="#9e5260" strokeWidth="2.1" strokeLinecap="round"/>
                    <path d="M77 116 Q86 119 94 115" fill="none" stroke="#f4c2b0" strokeWidth=".8" strokeLinecap="round"/>
                    <ellipse cx="55" cy="104" rx="8" ry="4" fill="#d98283" opacity=".24" filter="url(#soft)"/><ellipse cx="111" cy="103" rx="8" ry="4" fill="#d98283" opacity=".24" filter="url(#soft)"/>
                    {/* burgundy over-ear headphones */}
                    <path d="M38 80 Q26 35 65 19 Q103 2 128 40 Q136 52 132 77" fill="none" stroke="#57283e" strokeWidth="9" strokeLinecap="round"/>
                    <path d="M38 80 Q26 35 65 19 Q103 2 128 40 Q136 52 132 77" fill="none" stroke="#d58a9d" strokeWidth="2.1" strokeLinecap="round" opacity=".8"/>
                    <rect x="27" y="77" width="18" height="39" rx="9" fill="url(#headphone)" stroke="#f0b0c0" strokeWidth="1.8"/>
                    <rect x="31" y="83" width="10" height="27" rx="5" fill="#f4c2cd" opacity=".52"/>
                    <circle cx="36" cy="96" r="3.6" fill="#ffe0e5"/>
                    {/* subtle hair shine */}
                    <path d="M53 31 Q66 18 82 22 M111 36 Q124 44 123 58" fill="none" stroke="#d19a75" strokeWidth="1.4" strokeLinecap="round" opacity=".45"/>
                    <path d="M134 15 Q140 8 146 15 Q140 22 134 15Z" fill="#e6a0b0" opacity=".9"/>
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
