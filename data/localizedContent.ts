import type { Locale } from "@/i18n";

export const localizedContent: Record<
  Locale,
  {
    projects: Record<
      string,
      {
        type: string;
        category: string;
        title: string;
        description: string;
      }
    >;
    education: Array<{
      status: string;
      title: string;
      specialization: string;
      description: string;
    }>;
  }
> = {
  es: {
    projects: {
      "toldos-pepe": {
        type: "Digital Transformation",
        category: "Digitalización · Web · IA",
        title: "TOLDOS PEPE E HIJOS S.L.",
        description:
          "Digitalización de un negocio familiar con más de 35 años de experiencia que no contaba con presencia web. Desarrollo integral de su nueva plataforma digital, incorporando un chatbot basado en inteligencia artificial.",
      },
      luxury: {
        type: "Corporate Web",
        category: "Web Development · Corporate · IA",
        title: "Luxury Corporate Website",
        description:
          "Diseño y desarrollo integral de una web corporativa para una profesional vinculada a la industria del lujo, con una identidad digital orientada a transmitir una imagen profesional y cuidada. La solución incorpora un chatbot basado en inteligencia artificial.",
      },
    },
    education: [
      {
        status: "ACTUALIDAD",
        title: "Grado en Ingeniería Informática",
        specialization: "Sistemas de Información",
        description:
          "Formación universitaria en Ingeniería Informática, especializada en Sistemas de Información.",
      },
      {
        status: "COMPLETADO",
        title: "Grado en Ingeniería Informática",
        specialization: "Ingeniería Informática",
        description:
          "Formación en Ingeniería Informática con experiencia académica en bases de datos, Business Intelligence, gestión de procesos y SQL.",
      },
      {
        status: "EN FORMACIÓN",
        title: "SAP S/4HANA + Data Migration",
        specialization: "Formación especializada · Preparación para certificación",
        description:
          "Formación actualmente en curso en SAP S/4HANA y Data Migration, orientada a la preparación para certificación.",
      },
      {
        status: "COMPLETADO",
        title: "Curso de Ciberseguridad",
        specialization: "Ciberseguridad",
        description:
          "Formación especializada en fundamentos y conceptos relacionados con la ciberseguridad.",
      },
    ],
  },

  en: {
    projects: {
      "toldos-pepe": {
        type: "Digital Transformation",
        category: "Digitalization · Web · AI",
        title: "TOLDOS PEPE E HIJOS S.L.",
        description:
          "Digitalization of a family business with more than 35 years of experience that previously had no web presence. Full development of its new digital platform, including an artificial intelligence chatbot.",
      },
      luxury: {
        type: "Corporate Web",
        category: "Web Development · Corporate · AI",
        title: "Luxury Corporate Website",
        description:
          "Full design and development of a corporate website for a professional connected to the luxury industry, with a digital identity focused on communicating a professional and refined image. The solution includes an artificial intelligence chatbot.",
      },
    },
    education: [
      {
        status: "CURRENT",
        title: "Bachelor's Degree in Computer Engineering",
        specialization: "Information Systems",
        description:
          "University education in Computer Engineering, specialized in Information Systems.",
      },
      {
        status: "COMPLETED",
        title: "Bachelor's Degree in Computer Engineering",
        specialization: "Computer Engineering",
        description:
          "Computer Engineering studies with academic experience in databases, Business Intelligence, process management and SQL.",
      },
      {
        status: "IN PROGRESS",
        title: "SAP S/4HANA + Data Migration",
        specialization: "Specialized training · Certification preparation",
        description:
          "Ongoing training in SAP S/4HANA and Data Migration, focused on certification preparation.",
      },
      {
        status: "COMPLETED",
        title: "Cybersecurity Course",
        specialization: "Cybersecurity",
        description:
          "Specialized training in cybersecurity fundamentals and related concepts.",
      },
    ],
  },

  fr: {
    projects: {
      "toldos-pepe": {
        type: "Transformation numérique",
        category: "Numérisation · Web · IA",
        title: "TOLDOS PEPE E HIJOS S.L.",
        description:
          "Numérisation d'une entreprise familiale avec plus de 35 ans d'expérience qui ne disposait pas auparavant d'une présence sur le web. Développement complet de sa nouvelle plateforme numérique, avec intégration d'un chatbot basé sur l'intelligence artificielle.",
      },
      luxury: {
        type: "Site web corporate",
        category: "Développement web · Corporate · IA",
        title: "Luxury Corporate Website",
        description:
          "Conception et développement complet d'un site web corporate pour une professionnelle liée à l'industrie du luxe, avec une identité numérique conçue pour transmettre une image professionnelle et soignée. La solution intègre un chatbot basé sur l'intelligence artificielle.",
      },
    },
    education: [
      {
        status: "ACTUELLEMENT",
        title: "Licence en ingénierie informatique",
        specialization: "Systèmes d'information",
        description:
          "Formation universitaire en ingénierie informatique, spécialisée dans les systèmes d'information.",
      },
      {
        status: "TERMINÉ",
        title: "Licence en ingénierie informatique",
        specialization: "Ingénierie informatique",
        description:
          "Formation en ingénierie informatique avec une expérience académique en bases de données, Business Intelligence, gestion des processus et SQL.",
      },
      {
        status: "EN COURS",
        title: "SAP S/4HANA + Data Migration",
        specialization: "Formation spécialisée · Préparation à la certification",
        description:
          "Formation actuellement en cours en SAP S/4HANA et Data Migration, orientée vers la préparation à la certification.",
      },
      {
        status: "TERMINÉ",
        title: "Cours de cybersécurité",
        specialization: "Cybersécurité",
        description:
          "Formation spécialisée sur les fondamentaux et les concepts liés à la cybersécurité.",
      },
    ],
  },

  de: {
    projects: {
      "toldos-pepe": {
        type: "Digitale Transformation",
        category: "Digitalisierung · Web · KI",
        title: "TOLDOS PEPE E HIJOS S.L.",
        description:
          "Digitalisierung eines Familienunternehmens mit mehr als 35 Jahren Erfahrung, das zuvor keine Webpräsenz hatte. Vollständige Entwicklung der neuen digitalen Plattform mit integriertem Chatbot auf Basis künstlicher Intelligenz.",
      },
      luxury: {
        type: "Corporate Website",
        category: "Webentwicklung · Corporate · KI",
        title: "Luxury Corporate Website",
        description:
          "Konzeption und vollständige Entwicklung einer Corporate Website für eine Fachkraft aus der Luxusbranche, mit einer digitalen Identität, die ein professionelles und hochwertiges Erscheinungsbild vermittelt. Die Lösung umfasst einen Chatbot auf Basis künstlicher Intelligenz.",
      },
    },
    education: [
      {
        status: "AKTUELL",
        title: "Bachelor in Informatik",
        specialization: "Informationssysteme",
        description:
          "Universitäre Ausbildung in Informatik mit Spezialisierung auf Informationssysteme.",
      },
      {
        status: "ABGESCHLOSSEN",
        title: "Bachelor in Informatik",
        specialization: "Informatik",
        description:
          "Studium der Informatik mit akademischer Erfahrung in Datenbanken, Business Intelligence, Prozessmanagement und SQL.",
      },
      {
        status: "IN AUSBILDUNG",
        title: "SAP S/4HANA + Data Migration",
        specialization: "Spezialisierte Ausbildung · Zertifizierungsvorbereitung",
        description:
          "Aktuelle Weiterbildung in SAP S/4HANA und Data Migration zur Vorbereitung auf eine Zertifizierung.",
      },
      {
        status: "ABGESCHLOSSEN",
        title: "Kurs für Cybersicherheit",
        specialization: "Cybersicherheit",
        description:
          "Spezialisierte Ausbildung in Grundlagen und Konzepten der Cybersicherheit.",
      },
    ],
  },

  it: {
    projects: {
      "toldos-pepe": {
        type: "Trasformazione digitale",
        category: "Digitalizzazione · Web · IA",
        title: "TOLDOS PEPE E HIJOS S.L.",
        description:
          "Digitalizzazione di un'azienda familiare con oltre 35 anni di esperienza che in precedenza non disponeva di una presenza sul web. Sviluppo completo della nuova piattaforma digitale, con un chatbot basato sull'intelligenza artificiale.",
      },
      luxury: {
        type: "Sito web corporate",
        category: "Sviluppo web · Corporate · IA",
        title: "Luxury Corporate Website",
        description:
          "Progettazione e sviluppo completo di un sito web corporate per una professionista legata al settore del lusso, con un'identità digitale orientata a trasmettere un'immagine professionale e curata. La soluzione integra un chatbot basato sull'intelligenza artificiale.",
      },
    },
    education: [
      {
        status: "ATTUALITÀ",
        title: "Laurea in Ingegneria Informatica",
        specialization: "Sistemi Informativi",
        description:
          "Formazione universitaria in Ingegneria Informatica, specializzata in Sistemi Informativi.",
      },
      {
        status: "COMPLETATO",
        title: "Laurea in Ingegneria Informatica",
        specialization: "Ingegneria Informatica",
        description:
          "Formazione in Ingegneria Informatica con esperienza accademica in database, Business Intelligence, gestione dei processi e SQL.",
      },
      {
        status: "IN CORSO",
        title: "SAP S/4HANA + Data Migration",
        specialization: "Formazione specialistica · Preparazione alla certificazione",
        description:
          "Formazione attualmente in corso in SAP S/4HANA e Data Migration, orientata alla preparazione per la certificazione.",
      },
      {
        status: "COMPLETATO",
        title: "Corso di cybersecurity",
        specialization: "Cybersecurity",
        description:
          "Formazione specialistica sui fondamenti e sui concetti relativi alla cybersecurity.",
      },
    ],
  },

  pt: {
    projects: {
      "toldos-pepe": {
        type: "Transformação digital",
        category: "Digitalização · Web · IA",
        title: "TOLDOS PEPE E HIJOS S.L.",
        description:
          "Digitalização de uma empresa familiar com mais de 35 anos de experiência que anteriormente não tinha presença na web. Desenvolvimento completo da sua nova plataforma digital, incluindo um chatbot baseado em inteligência artificial.",
      },
      luxury: {
        type: "Website corporativo",
        category: "Desenvolvimento web · Corporate · IA",
        title: "Luxury Corporate Website",
        description:
          "Conceção e desenvolvimento completo de um website corporativo para uma profissional ligada à indústria do luxo, com uma identidade digital orientada para transmitir uma imagem profissional e cuidada. A solução inclui um chatbot baseado em inteligência artificial.",
      },
    },
    education: [
      {
        status: "ATUALMENTE",
        title: "Licenciatura em Engenharia Informática",
        specialization: "Sistemas de Informação",
        description:
          "Formação universitária em Engenharia Informática, especializada em Sistemas de Informação.",
      },
      {
        status: "CONCLUÍDO",
        title: "Licenciatura em Engenharia Informática",
        specialization: "Engenharia Informática",
        description:
          "Formação em Engenharia Informática com experiência académica em bases de dados, Business Intelligence, gestão de processos e SQL.",
      },
      {
        status: "EM FORMAÇÃO",
        title: "SAP S/4HANA + Data Migration",
        specialization: "Formação especializada · Preparação para certificação",
        description:
          "Formação atualmente em curso em SAP S/4HANA e Data Migration, orientada para a preparação para certificação.",
      },
      {
        status: "CONCLUÍDO",
        title: "Curso de Cibersegurança",
        specialization: "Cibersegurança",
        description:
          "Formação especializada em fundamentos e conceitos relacionados com a cibersegurança.",
      },
    ],
  },

  nl: {
    projects: {
      "toldos-pepe": {
        type: "Digitale transformatie",
        category: "Digitalisering · Web · AI",
        title: "TOLDOS PEPE E HIJOS S.L.",
        description:
          "Digitalisering van een familiebedrijf met meer dan 35 jaar ervaring dat voorheen geen aanwezigheid op het web had. Volledige ontwikkeling van het nieuwe digitale platform, inclusief een chatbot op basis van kunstmatige intelligentie.",
      },
      luxury: {
        type: "Corporate website",
        category: "Webontwikkeling · Corporate · AI",
        title: "Luxury Corporate Website",
        description:
          "Volledig ontwerp en ontwikkeling van een corporate website voor een professional uit de luxesector, met een digitale identiteit die gericht is op een professionele en verfijnde uitstraling. De oplossing bevat een chatbot op basis van kunstmatige intelligentie.",
      },
    },
    education: [
      {
        status: "ACTUEEL",
        title: "Bachelor Computer Engineering",
        specialization: "Informatiesystemen",
        description:
          "Universitaire opleiding in Computer Engineering, gespecialiseerd in Informatiesystemen.",
      },
      {
        status: "AFGEROND",
        title: "Bachelor Computer Engineering",
        specialization: "Computer Engineering",
        description:
          "Opleiding in Computer Engineering met academische ervaring in databases, Business Intelligence, procesmanagement en SQL.",
      },
      {
        status: "IN OPLEIDING",
        title: "SAP S/4HANA + Data Migration",
        specialization: "Gespecialiseerde opleiding · Voorbereiding op certificering",
        description:
          "Momenteel lopende opleiding in SAP S/4HANA en Data Migration, gericht op voorbereiding op certificering.",
      },
      {
        status: "AFGEROND",
        title: "Cursus Cybersecurity",
        specialization: "Cybersecurity",
        description:
          "Gespecialiseerde opleiding in de fundamenten en concepten van cybersecurity.",
      },
    ],
  },

  ru: {
    projects: {
      "toldos-pepe": {
        type: "Цифровая трансформация",
        category: "Цифровизация · Веб · ИИ",
        title: "TOLDOS PEPE E HIJOS S.L.",
        description:
          "Цифровизация семейного бизнеса с более чем 35-летним опытом, который ранее не имел веб-присутствия. Полная разработка новой цифровой платформы с интегрированным чат-ботом на основе искусственного интеллекта.",
      },
      luxury: {
        type: "Корпоративный сайт",
        category: "Веб-разработка · Corporate · ИИ",
        title: "Luxury Corporate Website",
        description:
          "Полный дизайн и разработка корпоративного сайта для специалистки, связанной с индустрией роскоши, с цифровой идентичностью, ориентированной на профессиональный и тщательно продуманный образ. Решение включает чат-бот на основе искусственного интеллекта.",
      },
    },
    education: [
      {
        status: "ТЕКУЩЕЕ",
        title: "Бакалавриат по компьютерной инженерии",
        specialization: "Информационные системы",
        description:
          "Университетское образование в области компьютерной инженерии со специализацией в информационных системах.",
      },
      {
        status: "ЗАВЕРШЕНО",
        title: "Бакалавриат по компьютерной инженерии",
        specialization: "Компьютерная инженерия",
        description:
          "Обучение по компьютерной инженерии с академическим опытом в области баз данных, Business Intelligence, управления процессами и SQL.",
      },
      {
        status: "В ПРОЦЕССЕ",
        title: "SAP S/4HANA + Data Migration",
        specialization: "Специализированное обучение · Подготовка к сертификации",
        description:
          "Текущее обучение SAP S/4HANA и Data Migration, ориентированное на подготовку к сертификации.",
      },
      {
        status: "ЗАВЕРШЕНО",
        title: "Курс по кибербезопасности",
        specialization: "Кибербезопасность",
        description:
          "Специализированное обучение основам и концепциям кибербезопасности.",
      },
    ],
  },
};
