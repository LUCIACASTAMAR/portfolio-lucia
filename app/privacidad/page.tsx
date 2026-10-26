import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de privacidad | Lucía Castañeda",
  description: "Información sobre el tratamiento de datos personales en la web de Lucía Castañeda.",
  alternates: { canonical: "/privacidad" },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#050505] px-5 py-16 text-white sm:px-8">
      <article className="mx-auto max-w-3xl">
        <a href="/" className="text-sm text-white/60 underline underline-offset-4 hover:text-white">← Volver a la web</a>
        <p className="mt-10 text-xs uppercase tracking-[.25em] text-white/50">Información legal</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Política de privacidad</h1>
        <p className="mt-4 text-sm text-white/50">Última actualización: 26 de octubre de 2026</p>

        <div className="mt-10 space-y-8 text-sm leading-7 text-white/75">
          <section>
            <h2 className="mb-2 text-lg font-medium text-white">1. Responsable del tratamiento</h2>
            <p>Responsable: Lucía Castañeda. Sitio web: luciacastaneda.com. Contacto: a través del formulario de contacto disponible en esta web.</p>
            <p className="mt-2">Antes de publicar esta política definitivamente, completa los datos de identificación y contacto exigibles para tu situación (por ejemplo, nombre legal completo, domicilio profesional y una dirección de correo de privacidad). No publiques un domicilio particular si no quieres hacerlo; revisa qué dato legal corresponde en tu caso.</p>
          </section>
          <section>
            <h2 className="mb-2 text-lg font-medium text-white">2. Qué datos podemos tratar</h2>
            <p>Si utilizas el formulario de solicitudes o reuniones, podemos tratar los datos que incluyas, como nombre, dirección de correo electrónico, información sobre tu negocio, descripción del proyecto, presupuesto orientativo, disponibilidad y contenido del mensaje. También pueden generarse datos técnicos básicos necesarios para servir y proteger la web.</p>
          </section>
          <section>
            <h2 className="mb-2 text-lg font-medium text-white">3. Finalidades y bases jurídicas</h2>
            <ul className="ml-5 list-disc space-y-2">
              <li>Responder consultas, preparar presupuestos y gestionar solicitudes: medidas precontractuales solicitadas por la persona interesada y, cuando proceda, interés legítimo en atender comunicaciones profesionales.</li>
              <li>Gestionar obligaciones legales y contables si se inicia una relación profesional: cumplimiento de obligaciones legales.</li>
              <li>Medir el uso de la web con Google Analytics: consentimiento previo, cuando se active y se haya configurado conforme a las preferencias de cookies.</li>
            </ul>
          </section>
          <section>
            <h2 className="mb-2 text-lg font-medium text-white">4. Proveedores y destinatarios</h2>
            <p>La web se aloja en Vercel. El envío de formularios y notificaciones puede utilizar proveedores técnicos de correo y servicios asociados a la gestión de solicitudes. Si aceptas las cookies de análisis y se configura Google Analytics, Google podrá tratar datos técnicos y de uso de la web conforme a su servicio y a la configuración aplicada.</p>
            <p className="mt-2">Antes de publicar, identifica los proveedores que realmente reciben datos, revisa sus condiciones y añade los enlaces pertinentes. Algunos proveedores pueden tratar datos fuera del Espacio Económico Europeo; en ese caso deben verificarse las garantías y condiciones aplicables.</p>
          </section>
          <section>
            <h2 className="mb-2 text-lg font-medium text-white">5. Conservación</h2>
            <p>Los datos de consultas se conservarán durante el tiempo necesario para responder y realizar el seguimiento de la solicitud y, cuando exista una relación profesional, durante los plazos legales aplicables. Define un plazo concreto de conservación para las solicitudes que no se conviertan en clientes. Las preferencias de cookies se guardan en el navegador hasta que se borren o cambien.</p>
          </section>
          <section>
            <h2 className="mb-2 text-lg font-medium text-white">6. Derechos de las personas</h2>
            <p>Puedes solicitar acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad cuando corresponda, así como retirar el consentimiento sin que ello afecte al tratamiento previo a su retirada. Para ejercer tus derechos, utiliza el canal de contacto de esta web e identifica el tratamiento al que se refiere tu solicitud. También puedes reclamar ante la Agencia Española de Protección de Datos (AEPD).</p>
          </section>
          <section>
            <h2 className="mb-2 text-lg font-medium text-white">7. Cookies y analítica</h2>
            <p>Consulta la <a href="/cookies" className="underline underline-offset-4 hover:text-white">Política de cookies</a> para conocer las categorías y modificar tus preferencias. Las herramientas de análisis opcionales no deben cargarse antes de que otorgues consentimiento. Puedes cambiar tu elección desde el botón «Cookies» de la web.</p>
          </section>
          <section>
            <h2 className="mb-2 text-lg font-medium text-white">8. Seguridad</h2>
            <p>Se aplican medidas técnicas y organizativas razonables para proteger la información. Ningún método de transmisión o almacenamiento puede garantizar seguridad absoluta.</p>
          </section>
          <section>
            <h2 className="mb-2 text-lg font-medium text-white">9. Cambios en esta política</h2>
            <p>Esta política podrá actualizarse si cambian las funcionalidades, los proveedores o las obligaciones aplicables. La versión vigente estará disponible en esta página.</p>
          </section>
          <p className="border-t border-white/10 pt-5 text-xs leading-6 text-white/45">Borrador de trabajo: revisa y completa la identidad del responsable, el contacto de privacidad, los proveedores reales, los plazos de conservación y las transferencias internacionales antes de considerar esta política definitiva. No constituye asesoramiento jurídico.</p>
        </div>
      </article>
    </main>
  );
}
