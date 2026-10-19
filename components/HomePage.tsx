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

  const pricingCopy = {
    es: { from: "Desde", basicPrice: "400 €", corporatePrice: "950 €", aiPrice: "150 € adicionales", maintenancePrice: "35 €/mes", rebuildPrice: "300 €", basic: "Web esencial", basicDesc: "Una web sencilla para empezar a tener presencia online.", basicFeatures: ["Una página con varias secciones", "Diseño adaptable a móvil", "Formulario o botón de contacto", "SEO técnico básico"], corporate: "Web corporativa", corporateDesc: "Una presencia digital más completa para tu negocio.", corporateFeatures: ["Varias páginas", "Diseño personalizado", "Sección de servicios y contacto", "Publicación y revisión final"], ai: "IA y automatización", aiDesc: "Funciones adicionales para ahorrar tiempo y mejorar la atención al cliente.", aiFeatures: ["Chatbot o automatización sencilla", "Integración en la web existente", "Pruebas y configuración", "Costes externos no incluidos"], maintenance: "Mantenimiento web", maintenanceDesc: "Mantén tu web actualizada y funcionando correctamente.", maintenancePlans: [{ name: "Essential", price: "15 €/mes", annual: "180 €/año", features: ["Comprobación mensual de disponibilidad", "Revisión de errores visibles y del formulario", "Conservación de una copia del código fuente", "Sin modificaciones de contenido incluidas"] }, { name: "Care", price: "35 €/mes", annual: "420 €/año", features: ["Todo lo anterior", "Revisión trimestral de enlaces, formularios y configuración técnica", "Hasta 30 minutos mensuales de cambios menores", "Atención por email con plazo de respuesta acordado"] }], maintenanceHourly: "35 €/hora", maintenanceHourlyTitle: "Intervenciones puntuales", maintenanceHourlyDesc: "Para cambios o mejoras puntuales fuera de un plan mensual", maintenanceFeatures: ["Actualizaciones y revisiones periódicas", "Pequeños ajustes de contenido", "Revisión básica de funcionamiento", "Alcance mensual definido en el presupuesto"], rebuild: "Rediseño y reconstrucción web", rebuildDesc: "Renovación de una web existente para mejorar su imagen, estructura y experiencia de uso.", rebuildFeatures: ["Revisión de la web actual", "Nueva propuesta visual", "Mejora de estructura y adaptación móvil", "Migración o publicación según alcance"], quote: "Solicitar presupuesto", note: "Precios orientativos. El presupuesto final depende del alcance, el contenido y las funcionalidades. Dominio, alojamiento y servicios externos pueden tener costes adicionales." },
    en: { from: "From", basicPrice: "€400", corporatePrice: "€950", aiPrice: "€150 extra", maintenancePrice: "€35/month", rebuildPrice: "€300", basic: "Essential website", basicDesc: "A simple website to establish your online presence.", basicFeatures: ["One page with multiple sections", "Mobile-friendly design", "Contact form or button", "Basic technical SEO"], corporate: "Corporate website", corporateDesc: "A more complete digital presence for your business.", corporateFeatures: ["Multiple pages", "Custom design", "Services and contact sections", "Launch and final review"], ai: "AI & automation", aiDesc: "Add-on features to save time and improve customer support.", aiFeatures: ["Simple chatbot or automation", "Integration into an existing website", "Setup and testing", "External costs not included"], maintenance: "Website maintenance", maintenanceDesc: "Keep your website updated and working properly.", maintenancePlans: [{ name: "Essential", price: "€15/month", annual: "€180/year", features: ["Monthly availability check", "Visible error and form review", "A copy of the source code retained", "No content changes included"] }, { name: "Care", price: "€35/month", annual: "€420/year", features: ["Everything in Essential", "Quarterly review of links, forms and technical configuration", "Up to 30 minutes of minor changes per month", "Email support with an agreed response time"] }], maintenanceHourly: "€35/hour", maintenanceHourlyTitle: "One-off interventions", maintenanceHourlyDesc: "For occasional changes or improvements outside a monthly plan", maintenanceFeatures: ["Regular updates and checks", "Small content changes", "Basic functionality review", "Monthly scope defined in the quote"], rebuild: "Website redesign & rebuild", rebuildDesc: "Refresh an existing website to improve its look, structure and user experience.", rebuildFeatures: ["Review of the current website", "New visual proposal", "Improved structure and mobile layout", "Migration or launch depending on scope"], quote: "Request a quote", note: "Indicative prices. Final quotes depend on scope, content and functionality. Domain, hosting and external services may cost extra." },
    fr: { from: "À partir de", basicPrice: "400 €", corporatePrice: "950 €", aiPrice: "150 € en supplément", maintenancePrice: "35 €/mois", rebuildPrice: "300 €", basic: "Site essentiel", basicDesc: "Un site simple pour établir votre présence en ligne.", basicFeatures: ["Une page avec plusieurs sections", "Design adapté au mobile", "Formulaire ou bouton de contact", "SEO technique de base"], corporate: "Site vitrine", corporateDesc: "Une présence numérique plus complète pour votre activité.", corporateFeatures: ["Plusieurs pages", "Design personnalisé", "Sections services et contact", "Mise en ligne et vérification finale"], ai: "IA et automatisation", aiDesc: "Des fonctionnalités supplémentaires pour gagner du temps et améliorer le service client.", aiFeatures: ["Chatbot ou automatisation simple", "Intégration au site existant", "Configuration et tests", "Coûts externes non inclus"], maintenance: "Maintenance du site web", maintenanceDesc: "Gardez votre site à jour et en bon état de fonctionnement.", maintenancePlans: [{ name: "Essential", price: "15 €/mois", annual: "180 €/an", features: ["Vérification mensuelle de disponibilité", "Contrôle des erreurs visibles et du formulaire", "Conservation d’une copie du code source", "Aucune modification de contenu incluse"] }, { name: "Care", price: "35 €/mois", annual: "420 €/an", features: ["Tout le forfait Essential", "Vérification trimestrielle des liens, formulaires et réglages techniques", "Jusqu’à 30 minutes de petites modifications par mois", "Assistance par e-mail avec délai de réponse convenu"] }], maintenanceHourly: "35 €/heure", maintenanceHourlyTitle: "Interventions ponctuelles", maintenanceHourlyDesc: "Pour les modifications occasionnelles hors forfait mensuel", maintenanceFeatures: ["Mises à jour et contrôles réguliers", "Petites modifications de contenu", "Vérification de base du fonctionnement", "Périmètre mensuel défini dans le devis"], rebuild: "Refonte et reconstruction du site", rebuildDesc: "Modernisez un site existant pour améliorer son image, sa structure et son expérience utilisateur.", rebuildFeatures: ["Audit du site actuel", "Nouvelle proposition visuelle", "Amélioration de la structure et du mobile", "Migration ou mise en ligne selon le périmètre"], quote: "Demander un devis", note: "Prix indicatifs. Le devis final dépend du périmètre, du contenu et des fonctionnalités. Domaine, hébergement et services externes peuvent entraîner des frais supplémentaires." },
    de: { from: "Ab", basicPrice: "400 €", corporatePrice: "950 €", aiPrice: "150 € zusätzlich", maintenancePrice: "35 €/Monat", rebuildPrice: "300 €", basic: "Basis-Website", basicDesc: "Eine einfache Website für Ihren professionellen Online-Auftritt.", basicFeatures: ["Eine Seite mit mehreren Abschnitten", "Mobilfreundliches Design", "Kontaktformular oder Kontaktbutton", "Technisches SEO-Basis-Setup"], corporate: "Unternehmenswebsite", corporateDesc: "Ein umfassenderer digitaler Auftritt für Ihr Unternehmen.", corporateFeatures: ["Mehrere Seiten", "Individuelles Design", "Leistungs- und Kontaktbereich", "Veröffentlichung und Abschlussprüfung"], ai: "KI und Automatisierung", aiDesc: "Zusatzfunktionen, die Zeit sparen und den Kundenservice verbessern.", aiFeatures: ["Einfacher Chatbot oder Workflow", "Integration in eine bestehende Website", "Einrichtung und Tests", "Externe Kosten nicht enthalten"], maintenance: "Website-Wartung", maintenanceDesc: "Halten Sie Ihre Website aktuell und funktionsfähig.", maintenancePlans: [{ name: "Essential", price: "15 €/Monat", annual: "180 €/Jahr", features: ["Monatliche Verfügbarkeitsprüfung", "Prüfung sichtbarer Fehler und des Formulars", "Aufbewahrung einer Kopie des Quellcodes", "Keine Inhaltsänderungen enthalten"] }, { name: "Care", price: "35 €/Monat", annual: "420 €/Jahr", features: ["Alles aus Essential", "Vierteljährliche Prüfung von Links, Formularen und technischer Konfiguration", "Bis zu 30 Minuten kleinere Änderungen pro Monat", "E-Mail-Support mit vereinbarter Reaktionszeit"] }], maintenanceHourly: "35 €/Stunde", maintenanceHourlyTitle: "Einzelne Einsätze", maintenanceHourlyDesc: "Für gelegentliche Änderungen außerhalb eines Monatspakets", maintenanceFeatures: ["Regelmäßige Updates und Prüfungen", "Kleine Inhaltsänderungen", "Grundlegende Funktionsprüfung", "Monatlicher Umfang im Angebot festgelegt"], rebuild: "Website-Redesign und Relaunch", rebuildDesc: "Überarbeiten Sie eine bestehende Website für ein besseres Erscheinungsbild, Struktur und Nutzererlebnis.", rebuildFeatures: ["Prüfung der bestehenden Website", "Neues visuelles Konzept", "Verbesserte Struktur und mobile Darstellung", "Migration oder Veröffentlichung je nach Umfang"], quote: "Angebot anfragen", note: "Richtpreise. Das endgültige Angebot hängt von Umfang, Inhalten und Funktionen ab. Domain, Hosting und externe Dienste können zusätzliche Kosten verursachen." },
    it: { from: "Da", basicPrice: "400 €", corporatePrice: "950 €", aiPrice: "150 € aggiuntivi", maintenancePrice: "35 €/mese", rebuildPrice: "300 €", basic: "Sito essenziale", basicDesc: "Un sito semplice per iniziare a essere presenti online.", basicFeatures: ["Una pagina con più sezioni", "Design ottimizzato per dispositivi mobili", "Modulo o pulsante di contatto", "SEO tecnico di base"], corporate: "Sito aziendale", corporateDesc: "Una presenza digitale più completa per la tua attività.", corporateFeatures: ["Più pagine", "Design personalizzato", "Sezioni servizi e contatti", "Pubblicazione e revisione finale"], ai: "IA e automazione", aiDesc: "Funzionalità aggiuntive per risparmiare tempo e migliorare il servizio clienti.", aiFeatures: ["Chatbot o automazione semplice", "Integrazione nel sito esistente", "Configurazione e test", "Costi esterni esclusi"], maintenance: "Manutenzione del sito web", maintenanceDesc: "Mantieni il sito aggiornato e funzionante correttamente.", maintenancePlans: [{ name: "Essential", price: "15 €/mese", annual: "180 €/anno", features: ["Controllo mensile della disponibilità", "Verifica degli errori visibili e del modulo", "Conservazione di una copia del codice sorgente", "Nessuna modifica ai contenuti inclusa"] }, { name: "Care", price: "35 €/mese", annual: "420 €/anno", features: ["Tutto ciò che è incluso in Essential", "Controllo trimestrale di link, moduli e configurazione tecnica", "Fino a 30 minuti mensili di piccole modifiche", "Assistenza via email con tempi di risposta concordati"] }], maintenanceHourly: "35 €/ora", maintenanceHourlyTitle: "Interventi singoli", maintenanceHourlyDesc: "Per modifiche occasionali al di fuori di un piano mensile", maintenanceFeatures: ["Aggiornamenti e controlli periodici", "Piccole modifiche ai contenuti", "Verifica di base del funzionamento", "Ambito mensile definito nel preventivo"], rebuild: "Restyling e ricostruzione del sito", rebuildDesc: "Rinnova un sito esistente migliorandone immagine, struttura ed esperienza utente.", rebuildFeatures: ["Analisi del sito attuale", "Nuova proposta visiva", "Miglioramento della struttura e versione mobile", "Migrazione o pubblicazione secondo il progetto"], quote: "Richiedi un preventivo", note: "Prezzi indicativi. Il preventivo finale dipende da ambito, contenuti e funzionalità. Dominio, hosting e servizi esterni possono comportare costi aggiuntivi." },
    pt: { from: "Desde", basicPrice: "400 €", corporatePrice: "950 €", aiPrice: "150 € adicionais", maintenancePrice: "35 €/mês", rebuildPrice: "300 €", basic: "Site essencial", basicDesc: "Um site simples para começar a ter presença online.", basicFeatures: ["Uma página com várias secções", "Design adaptado a dispositivos móveis", "Formulário ou botão de contacto", "SEO técnico básico"], corporate: "Site corporativo", corporateDesc: "Uma presença digital mais completa para o seu negócio.", corporateFeatures: ["Várias páginas", "Design personalizado", "Secções de serviços e contacto", "Publicação e revisão final"], ai: "IA e automação", aiDesc: "Funcionalidades adicionais para poupar tempo e melhorar o apoio ao cliente.", aiFeatures: ["Chatbot ou automação simples", "Integração no site existente", "Configuração e testes", "Custos externos não incluídos"], maintenance: "Manutenção de websites", maintenanceDesc: "Mantenha o seu site atualizado e a funcionar corretamente.", maintenancePlans: [{ name: "Essential", price: "15 €/mês", annual: "180 €/ano", features: ["Verificação mensal de disponibilidade", "Revisão de erros visíveis e do formulário", "Conservação de uma cópia do código-fonte", "Sem alterações de conteúdo incluídas"] }, { name: "Care", price: "35 €/mês", annual: "420 €/ano", features: ["Tudo o que está incluído no Essential", "Revisão trimestral de links, formulários e configuração técnica", "Até 30 minutos mensais de pequenas alterações", "Apoio por email com prazo de resposta acordado"] }], maintenanceHourly: "35 €/hora", maintenanceHourlyTitle: "Intervenções pontuais", maintenanceHourlyDesc: "Para alterações ocasionais fora de um plano mensal", maintenanceFeatures: ["Atualizações e verificações regulares", "Pequenas alterações de conteúdo", "Verificação básica do funcionamento", "Âmbito mensal definido no orçamento"], rebuild: "Redesign e reconstrução do website", rebuildDesc: "Renove um site existente para melhorar a imagem, a estrutura e a experiência de utilização.", rebuildFeatures: ["Análise do site atual", "Nova proposta visual", "Melhoria da estrutura e adaptação móvel", "Migração ou publicação conforme o âmbito"], quote: "Pedir orçamento", note: "Preços indicativos. O orçamento final depende do âmbito, conteúdo e funcionalidades. Domínio, alojamento e serviços externos podem ter custos adicionais." },
    nl: { from: "Vanaf", basicPrice: "€400", corporatePrice: "€950", aiPrice: "€150 extra", maintenancePrice: "€35/maand", rebuildPrice: "€300", basic: "Essentiële website", basicDesc: "Een eenvoudige website om online zichtbaar te worden.", basicFeatures: ["Eén pagina met meerdere secties", "Mobielvriendelijk ontwerp", "Contactformulier of contactknop", "Basis technische SEO"], corporate: "Bedrijfswebsite", corporateDesc: "Een completere digitale aanwezigheid voor je bedrijf.", corporateFeatures: ["Meerdere pagina's", "Ontwerp op maat", "Diensten- en contactsecties", "Publicatie en eindcontrole"], ai: "AI en automatisering", aiDesc: "Extra functies om tijd te besparen en klanten beter te helpen.", aiFeatures: ["Eenvoudige chatbot of automatisering", "Integratie in een bestaande website", "Instellen en testen", "Externe kosten niet inbegrepen"], maintenance: "Websiteonderhoud", maintenanceDesc: "Houd je website actueel en goed werkend.", maintenancePlans: [{ name: "Essential", price: "€15/maand", annual: "€180/jaar", features: ["Maandelijkse beschikbaarheidscontrole", "Controle van zichtbare fouten en het formulier", "Bewaren van een kopie van de broncode", "Geen inhoudswijzigingen inbegrepen"] }, { name: "Care", price: "€35/maand", annual: "€420/jaar", features: ["Alles uit Essential", "Driemaandelijkse controle van links, formulieren en technische instellingen", "Tot 30 minuten kleine wijzigingen per maand", "E-mailondersteuning met afgesproken reactietijd"] }], maintenanceHourly: "€35/uur", maintenanceHourlyTitle: "Losse werkzaamheden", maintenanceHourlyDesc: "Voor incidentele wijzigingen buiten een maandpakket", maintenanceFeatures: ["Regelmatige updates en controles", "Kleine inhoudelijke aanpassingen", "Basiscontrole van de werking", "Maandelijkse omvang vastgelegd in de offerte"], rebuild: "Website vernieuwen en herbouwen", rebuildDesc: "Vernieuw een bestaande website met een betere uitstraling, structuur en gebruikerservaring.", rebuildFeatures: ["Beoordeling van de huidige website", "Nieuw visueel voorstel", "Verbeterde structuur en mobiele weergave", "Migratie of publicatie afhankelijk van de omvang"], quote: "Offerte aanvragen", note: "Indicatieve prijzen. De definitieve offerte hangt af van de omvang, inhoud en functies. Domein, hosting en externe diensten kunnen extra kosten met zich meebrengen." },
    ru: { from: "От", basicPrice: "400 €", corporatePrice: "950 €", aiPrice: "150 € дополнительно", maintenancePrice: "35 €/мес.", rebuildPrice: "300 €", basic: "Базовый сайт", basicDesc: "Простой сайт для создания онлайн-присутствия.", basicFeatures: ["Одна страница с несколькими разделами", "Адаптация для мобильных устройств", "Форма или кнопка связи", "Базовая техническая SEO-настройка"], corporate: "Корпоративный сайт", corporateDesc: "Более полное цифровое представительство бизнеса.", corporateFeatures: ["Несколько страниц", "Индивидуальный дизайн", "Разделы услуг и контактов", "Публикация и финальная проверка"], ai: "ИИ и автоматизация", aiDesc: "Дополнительные функции для экономии времени и улучшения поддержки клиентов.", aiFeatures: ["Простой чат-бот или автоматизация", "Интеграция в существующий сайт", "Настройка и тестирование", "Внешние расходы не включены"], maintenance: "Обслуживание сайта", maintenanceDesc: "Поддерживайте сайт в актуальном и рабочем состоянии.", maintenancePlans: [{ name: "Essential", price: "15 €/мес.", annual: "180 €/год", features: ["Ежемесячная проверка доступности", "Проверка видимых ошибок и формы", "Хранение копии исходного кода", "Изменения контента не включены"] }, { name: "Care", price: "35 €/мес.", annual: "420 €/год", features: ["Всё из Essential", "Ежеквартальная проверка ссылок, форм и технических настроек", "До 30 минут небольших изменений в месяц", "Поддержка по электронной почте с согласованным сроком ответа"] }], maintenanceHourly: "35 €/час", maintenanceHourlyTitle: "Разовые работы", maintenanceHourlyDesc: "Для отдельных изменений вне ежемесячного плана", maintenanceFeatures: ["Регулярные обновления и проверки", "Небольшие изменения контента", "Базовая проверка работоспособности", "Ежемесячный объём фиксируется в смете"], rebuild: "Редизайн и обновление сайта", rebuildDesc: "Обновление существующего сайта для улучшения внешнего вида, структуры и удобства использования.", rebuildFeatures: ["Анализ текущего сайта", "Новая визуальная концепция", "Улучшение структуры и мобильной версии", "Перенос или публикация в зависимости от объёма"], quote: "Запросить смету", note: "Ориентировочные цены. Итоговая стоимость зависит от объёма, контента и функций. Домен, хостинг и внешние сервисы могут оплачиваться отдельно." }
  }[locale];

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
          <div className="mt-5 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <h2 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
              {t.services.title}
            </h2>
            <p className="max-w-md text-sm leading-6 text-white/45">
              {pricingCopy.note}
            </p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {[
              { title: pricingCopy.basic, description: pricingCopy.basicDesc, price: pricingCopy.basicPrice, features: pricingCopy.basicFeatures, featured: true },
              { title: pricingCopy.corporate, description: pricingCopy.corporateDesc, price: pricingCopy.corporatePrice, features: pricingCopy.corporateFeatures, featured: false },
              { title: pricingCopy.ai, description: pricingCopy.aiDesc, price: pricingCopy.aiPrice, features: pricingCopy.aiFeatures, featured: false },
              /* Maintenance plans are displayed in their own detailed section below. */
              { title: pricingCopy.rebuild, description: pricingCopy.rebuildDesc, price: pricingCopy.rebuildPrice, features: pricingCopy.rebuildFeatures, featured: false },
            ].map((service) => (
              <article key={service.title} className={`flex flex-col rounded-2xl border p-7 md:p-8 transition-colors ${service.featured ? "border-white/35 bg-white/[0.055]" : "border-white/10 bg-black/60 hover:border-white/25"}`}>
                {service.featured && <span className="mb-5 w-fit rounded-full border border-white/20 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.15em] text-white/60">{pricingCopy.from} {pricingCopy.basicPrice}</span>}
                <h3 className="text-xl font-medium">{service.title}</h3>
                <p className="mt-3 min-h-[48px] text-sm leading-6 text-white/45">{service.description}</p>
                <p className="mt-7">
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/35">{pricingCopy.from}</span>
                  <span className="mt-1 block text-4xl font-semibold tracking-tight">{service.price}</span>
                </p>
                <ul className="mt-7 flex-1 space-y-3 border-t border-white/10 pt-6">
                  {service.features.map((feature) => <li key={feature} className="flex gap-3 text-sm text-white/55"><span className="text-white/60">—</span><span>{feature}</span></li>)}
                </ul>
                <a href={`mailto:${profile.contact?.email ?? "lucycastamar@gmail.com"}?subject=${encodeURIComponent(service.title)}`} className="mt-8 inline-flex items-center justify-center border border-white/20 px-5 py-3 text-sm font-medium transition-colors hover:bg-white hover:text-black">
                  {pricingCopy.quote}
                </a>
              </article>
            ))}
          </div>

          <div className="mt-20">
            <div className="mb-8 max-w-3xl">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-white/30">CARE / SUPPORT</p>
              <h3 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">{pricingCopy.maintenance}</h3>
              <p className="mt-3 text-sm leading-6 text-white/45">{pricingCopy.maintenanceDesc}</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {pricingCopy.maintenancePlans.map((plan, index) => (
                <article key={plan.name} className={`flex flex-col rounded-2xl border p-7 md:p-8 ${index === 1 ? "border-white/35 bg-white/[0.055]" : "border-white/10 bg-black/60"}`}>
                  <div className="flex items-start justify-between gap-3">
                    <h4 className="text-xl font-medium">{plan.name}</h4>
                    {index === 1 && <span className="rounded-full border border-white/20 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.15em] text-white/55">Recommended</span>}
                  </div>
                  <p className="mt-5 text-4xl font-semibold tracking-tight">{plan.price}</p>
                  <p className="mt-2 text-sm text-white/40">{plan.annual}</p>
                  <ul className="mt-7 flex-1 space-y-3 border-t border-white/10 pt-6">
                    {plan.features.map((feature) => <li key={feature} className="flex gap-3 text-sm text-white/55"><span className="text-white/60">—</span><span>{feature}</span></li>)}
                  </ul>
                  <a href={`mailto:${profile.contact?.email ?? "lucycastamar@gmail.com"}?subject=${encodeURIComponent(plan.name + " - " + pricingCopy.maintenance)}`} className="mt-8 inline-flex items-center justify-center border border-white/20 px-5 py-3 text-sm font-medium transition-colors hover:bg-white hover:text-black">{pricingCopy.quote}</a>
                </article>
              ))}
            </div>
            <div className="mt-4 rounded-2xl border border-white/10 bg-black/60 p-6 md:flex md:items-center md:justify-between md:gap-6">
              <div>
                <h4 className="text-lg font-medium">{pricingCopy.maintenanceHourlyTitle}</h4>
                <p className="mt-2 text-sm text-white/45">{pricingCopy.maintenanceHourlyDesc}</p>
              </div>
              <div className="mt-4 shrink-0 text-2xl font-semibold md:mt-0">{pricingCopy.maintenanceHourly}</div>
            </div>
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