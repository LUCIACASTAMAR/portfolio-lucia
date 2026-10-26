import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de cookies | Lucía Castañeda",
  description: "Información sobre el uso de cookies y preferencias de privacidad en la web de Lucía Castañeda.",
  alternates: { canonical: "/cookies" },
};

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-[#050505] px-5 py-16 text-white sm:px-8">
      <article className="mx-auto max-w-3xl">
        <a href="/" className="text-sm text-white/60 underline underline-offset-4 hover:text-white">← Volver a la web</a>
        <p className="mt-10 text-xs uppercase tracking-[.25em] text-white/50">Privacidad</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Política de cookies</h1>
        <p className="mt-4 text-sm text-white/50">Última actualización: 26 de octubre de 2026</p>

        <div className="mt-10 space-y-8 text-sm leading-7 text-white/75">
          <section>
            <h2 className="mb-2 text-lg font-medium text-white">1. ¿Qué son las cookies?</h2>
            <p>Las cookies son pequeños archivos que un sitio web puede guardar en el navegador. También existen tecnologías similares de almacenamiento local.</p>
          </section>
          <section>
            <h2 className="mb-2 text-lg font-medium text-white">2. Preferencias y almacenamiento necesario</h2>
            <p>Este sitio utiliza el almacenamiento local del navegador para recordar la elección de consentimiento realizada en el aviso de privacidad. La preferencia guardada contiene las categorías elegidas y la fecha de la elección. Es necesaria para recordar la configuración y evitar mostrar el aviso en cada visita.</p>
          </section>
          <section>
            <h2 className="mb-2 text-lg font-medium text-white">3. Cookies opcionales</h2>
            <p>Las categorías de análisis y marketing aparecen desactivadas por defecto. Esta interfaz de consentimiento no instala por sí misma herramientas de analítica ni publicidad. Si en el futuro se incorporan servicios de terceros que requieran consentimiento, deberán configurarse para no activarse antes de que la persona lo otorgue y esta política deberá actualizarse con sus proveedores, finalidades y duración.</p>
          </section>
          <section>
            <h2 className="mb-2 text-lg font-medium text-white">4. Cómo cambiar tu elección</h2>
            <p>Puedes abrir de nuevo las preferencias desde el botón «Cookies» situado en la parte inferior izquierda de la web y aceptar, rechazar o configurar las categorías opcionales. También puedes borrar el almacenamiento del sitio desde la configuración de tu navegador.</p>
          </section>
          <section>
            <h2 className="mb-2 text-lg font-medium text-white">5. Contacto</h2>
            <p>Para consultas sobre privacidad relacionadas con esta web, puedes utilizar el formulario de contacto disponible en el sitio.</p>
          </section>
          <p className="border-t border-white/10 pt-5 text-xs leading-6 text-white/45">Nota: esta política describe la funcionalidad de preferencias actualmente incorporada. Antes de añadir analítica, publicidad, mapas, vídeos u otras integraciones de terceros, revisa y completa la información sobre esos servicios para que refleje exactamente el funcionamiento real de la web.</p>
        </div>
      </article>
    </main>
  );
}
