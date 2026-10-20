"use client";

import { FormEvent, useCallback, useEffect, useState } from "react";

type ClientRequest = { id:string; created_at:string; type:"quote"|"meeting"; locale:string; name:string; email:string; company:string|null; service:string; budget:string; message:string; meeting_date:string|null; meeting_time:string|null; status:"new"|"in_progress"|"quoted"|"accepted"|"closed" };

const labels: Record<string,string> = { new:"Nueva", in_progress:"En curso", quoted:"Presupuesto enviado", accepted:"Aceptada", closed:"Cerrada" };
const serviceLabels: Record<string,string> = { web:"Web esencial", corporate:"Web corporativa", redesign:"Rediseño web", ai:"IA y automatización", maintenance:"Mantenimiento web", other:"Otro" };

export default function AdminPage() {
  const [password,setPassword] = useState("");
  const [authenticated,setAuthenticated] = useState(false);
  const [requests,setRequests] = useState<ClientRequest[]>([]);
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState("");
  const [filter,setFilter] = useState("all");
  const [selected,setSelected] = useState<string|null>(null);

  const load = useCallback(async () => {
    setLoading(true); setError("");
    try {
      const response = await fetch("/api/admin/requests",{cache:"no-store"});
      const data = await response.json();
      if (!response.ok) { if(response.status !== 401) setError(data.error || "No se pudieron cargar las solicitudes."); setAuthenticated(false); return; }
      setRequests(data.requests); setAuthenticated(true);
    } catch { setError("No se pudo conectar con el servidor."); }
    finally { setLoading(false); }
  },[]);

  useEffect(()=>{ void load(); },[load]);

  async function login(event:FormEvent<HTMLFormElement>) {
    event.preventDefault(); setError(""); setLoading(true);
    try {
      const response = await fetch("/api/admin/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password})});
      const data = await response.json();
      if(!response.ok) throw new Error(data.error || "No se ha podido iniciar sesión.");
      setPassword(""); await load();
    } catch(error) { setError(error instanceof Error ? error.message : "Error de acceso."); }
    finally { setLoading(false); }
  }

  async function changeStatus(id:string,status:ClientRequest["status"]) {
    const response = await fetch("/api/admin/requests",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({id,status})});
    if(!response.ok) { const data=await response.json().catch(()=>({})); setError(data.error || "No se pudo actualizar el estado."); return; }
    setRequests(current=>current.map(item=>item.id===id?{...item,status}:item));
  }

  async function logout() { await fetch("/api/admin/logout",{method:"POST"}); setAuthenticated(false); setRequests([]); }

  const visible = requests.filter(item=>filter==="all" || item.status===filter);
  const active = requests.find(item=>item.id===selected);

  if(!authenticated) return <main className="flex min-h-screen items-center justify-center bg-[#050505] px-5 text-white"><form onSubmit={login} className="w-full max-w-md rounded-2xl border border-white/10 bg-white/[0.025] p-8"><p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">LUCÍA CASTAÑEDA / ADMIN</p><h1 className="mt-5 text-3xl font-medium">Panel de solicitudes</h1><p className="mt-3 text-sm leading-6 text-white/45">Acceso privado para gestionar presupuestos y reuniones.</p><label className="mt-8 block text-sm text-white/65">Contraseña de administración<input required type="password" autoComplete="current-password" value={password} onChange={e=>setPassword(e.target.value)} className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none focus:border-white/40"/></label>{error && <p role="alert" className="mt-4 text-sm text-red-200">{error}</p>}<button disabled={loading} className="mt-5 w-full rounded-xl bg-white px-4 py-3 text-sm font-medium text-black disabled:opacity-60">{loading?"Comprobando…":"Entrar"}</button><a href="/es" className="mt-5 block text-center text-sm text-white/40 hover:text-white">← Volver al portfolio</a></form></main>;

  return <main className="min-h-screen bg-[#050505] px-4 py-8 text-white md:px-10 md:py-12"><div className="mx-auto max-w-7xl"><header className="flex flex-wrap items-start justify-between gap-4 border-b border-white/10 pb-7"><div><p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">LUCÍA CASTAÑEDA / CLIENTS</p><h1 className="mt-3 text-3xl font-medium md:text-5xl">Solicitudes</h1><p className="mt-3 text-sm text-white/45">Presupuestos y peticiones de reunión. Las reuniones no se confirman automáticamente.</p></div><div className="flex gap-2"><button onClick={()=>void load()} className="rounded-lg border border-white/15 px-4 py-2 text-sm hover:bg-white/5">Actualizar</button><button onClick={()=>void logout()} className="rounded-lg border border-white/15 px-4 py-2 text-sm text-white/60 hover:bg-white/5">Cerrar sesión</button></div></header>
    <div className="mt-7 grid gap-3 sm:grid-cols-3"><div className="rounded-xl border border-white/10 p-4"><p className="text-xs text-white/40">Total</p><p className="mt-2 text-3xl">{requests.length}</p></div><div className="rounded-xl border border-white/10 p-4"><p className="text-xs text-white/40">Nuevas</p><p className="mt-2 text-3xl">{requests.filter(r=>r.status==="new").length}</p></div><div className="rounded-xl border border-white/10 p-4"><p className="text-xs text-white/40">Reuniones pendientes</p><p className="mt-2 text-3xl">{requests.filter(r=>r.type==="meeting"&&r.status==="new").length}</p></div></div>
    {error && <p role="alert" className="mt-5 rounded-lg border border-red-300/20 p-3 text-sm text-red-100">{error}</p>}
    <div className="mt-8 flex flex-wrap gap-2">{[["all","Todas"],["new","Nuevas"],["in_progress","En curso"],["quoted","Presupuesto enviado"],["accepted","Aceptadas"],["closed","Cerradas"]].map(([key,label])=><button key={key} onClick={()=>setFilter(key)} className={`rounded-full border px-3 py-2 text-xs ${filter===key?"border-white/60 bg-white/10":"border-white/10 text-white/45 hover:text-white"}`}>{label}</button>)}</div>
    {loading && <p className="mt-6 text-sm text-white/40">Cargando…</p>}
    {!loading && visible.length===0 && <div className="mt-6 rounded-2xl border border-dashed border-white/15 p-10 text-center"><p className="text-lg">No hay solicitudes en esta vista.</p><p className="mt-2 text-sm text-white/40">Cuando alguien envíe el formulario, aparecerá aquí.</p></div>}
    <div className="mt-5 grid gap-4 lg:grid-cols-2">{visible.map(item=><article key={item.id} className="rounded-2xl border border-white/10 bg-white/[0.025] p-5"><div className="flex flex-wrap items-start justify-between gap-3"><div><p className="font-mono text-[10px] uppercase tracking-wider text-white/35">{item.type==="meeting"?"Solicitud de reunión":"Presupuesto"} · {new Date(item.created_at).toLocaleString("es-ES")}</p><h2 className="mt-2 text-xl font-medium">{item.name}</h2><a className="mt-1 block text-sm text-white/55 hover:text-white" href={`mailto:${encodeURIComponent(item.email)}`}>{item.email}</a></div><select aria-label="Estado" value={item.status} onChange={e=>void changeStatus(item.id,e.target.value as ClientRequest["status"])} className="max-w-full rounded-lg border border-white/15 bg-[#101010] px-3 py-2 text-xs text-white">{Object.entries(labels).map(([value,label])=><option key={value} value={value}>{label}</option>)}</select></div><div className="mt-4 grid gap-2 text-sm text-white/55 sm:grid-cols-2"><p><span className="text-white/30">Servicio:</span> {serviceLabels[item.service]||item.service||"—"}</p><p><span className="text-white/30">Presupuesto:</span> {item.budget||"—"}</p>{item.company&&<p><span className="text-white/30">Empresa:</span> {item.company}</p>}{item.meeting_date&&<p><span className="text-white/30">Fecha propuesta:</span> {item.meeting_date} {item.meeting_time}</p>}</div><p className="mt-4 whitespace-pre-wrap text-sm leading-6 text-white/65">{item.message}</p><button onClick={()=>setSelected(selected===item.id?null:item.id)} className="mt-4 text-xs text-white/40 hover:text-white">{selected===item.id?"Ocultar detalle":"Ver detalle e idioma"} →</button>{selected===item.id&&<div className="mt-3 border-t border-white/10 pt-3 text-xs text-white/40">ID: {item.id} · Idioma: {item.locale} · Tipo: {item.type}<p className="mt-2"><a className="underline" href={`mailto:${encodeURIComponent(item.email)}?subject=${encodeURIComponent("Sobre tu solicitud - Lucía Castañeda")}`}>Responder por email</a></p></div>}</article>)}</div>
  </div></main>;
}
