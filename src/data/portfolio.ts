export const portfolioData = {
  personal: {
    name: 'Hanae Messaoudi',
    title: 'Développeuse Full Stack',
    description: 'Étudiante en 4e année à l\'EMSI, spécialisée en développement digital des systèmes informatiques. Passionnée par le développement web et logiciel.',
    email: 'hanaemessaoudi0@gmail.com',
    phone: '0689307338',
    location: 'Casablanca, Maroc',
    linkedin: 'https://linkedin.com/in/hanae-messaoudi-3a7091293',
    github: 'https://github.com/hanaems',
    image: '/profile.jpeg',
    cvNormal: '/cv/CV_HANAE_MESSAOUDI_FORMAT_NORMAL.pdf',
    cvATS: '/cv/CV_HANAE_MESSAOUDI_FORMAT_ATS.pdf',
  },
  about: {
    intro: 'Je suis une développeuse passionnée cherchant à créer des solutions web innovantes et performantes.',
    fullBio: 'Actuellement en 4e année à l\'École Marocaine des Sciences de l\'Ingénieur (EMSI), je me spécialise dans le développement digital des systèmes informatiques. Mon parcours m\'a permis de développer une expertise solide en développement web et logiciel, avec une maîtrise de technologies modernes comme React, Next.js, Node.js et diverses bases de données. Je suis constamment à la recherche de nouveaux défis techniques et j\'aime transformer des idées complexes en solutions digitales élégantes et performantes.',
  },
  skills: {
    programming: ['C', 'C++', 'C#', 'Java', 'PHP', 'JavaScript', 'Python', 'HTML', 'CSS'],
    frameworks: ['React.js', 'Next.js', 'Node.js', 'Symfony', 'Django', 'JavaFX', '.NET', 'JEE'],
    mobile: ['Android (Java)', 'React Native'],
    databases: ['MySQL', 'Oracle 12c', 'MongoDB', 'Neo4j', 'SQL', 'PL/SQL', 'Transact-SQL'],
    systems: ['UNIX', 'Linux', 'Ubuntu', 'Debian', 'Red Hat'],
    tools: ['Docker', 'ESXi', 'Proxmox'],
    methodologies: ['MERISE', 'UML', 'Agile', 'Scrum'],
  },
  experience: [
    {
      title: 'Stage d\'initiation',
      company: 'Groupe Marjane Holding',
      period: '2024',
      location: 'Maroc',
      description: [
        'Développement d\'une plateforme web de gestion des stocks et des ventes en React.js et Next.js',
        'Exploitation de l\'ERP Gold de Marjane pour la gestion et le suivi des produits et inventaires',
      ],
      skills: ['React.js', 'Next.js', 'ERP Gold'],
    },
    {
      title: 'Stage d\'observation',
      company: 'Trésorerie générale du Royaume, Perception d\'Oujda',
      period: '2023',
      location: 'Oujda, Maroc',
      description: [
        'Utilisation des outils informatiques pour suivre les encaissements et les dépenses',
        'Observation des processus de gestion des recettes publiques',
      ],
      skills: ['Gestion financière', 'Systèmes informatiques'],
    },
    {
      title: 'Stage de découverte',
      company: 'Office National de l\'Électricité et de l\'Eau Potable',
      period: '2023',
      location: 'Maroc',
      description: [
        'Découverte DATA CENTER ONEE',
        'Découverte structure et mission de la Direction des Systèmes d\'Information',
      ],
      skills: ['Data Center', 'Infrastructure IT'],
    },
  ],
  education: [
    {
      degree: 'Cycle d\'ingénierie',
      school: 'École Marocaine des Sciences de l\'Ingénieur (EMSI)',
      period: 'Octobre 2024 - Aujourd\'hui',
      location: 'Casablanca, Maroc',
      details: '2ème année Cycle d\'ingénierie en Développement Digital des Systèmes Informatiques (2DSI)',
    },
    {
      degree: 'Années préparatoires',
      school: 'École Marocaine des Sciences de l\'Ingénieur (EMSI)',
      period: 'Octobre 2022 - Juin 2024',
      location: 'Casablanca, Maroc',
      details: 'Deux années de formation scientifique et technologique préparant au cycle d\'ingénierie',
    },
    {
      degree: 'Baccalauréat',
      school: 'Groupe Scolaire Ibn Sina, Oujda',
      period: 'Septembre 2021 - Juin 2022',
      location: 'Oujda, Maroc',
      details: 'Baccalauréat en Sciences Physiques BIOF, mention Bien',
    },
  ],
  // ✅ TES VRAIS PROJETS DE GITHUB
  projects: [
    {
      title: 'Gestion de Vente Fleurs',
      description: 'Application web Node.js pour la gestion des fleurs avec base de données Neo4j',
      fullDescription: 'Plateforme e-commerce complète pour la gestion et la vente de fleurs. Système de gestion d\'inventaire avancé avec recommandations intelligentes.',
      technologies: ['Node.js', 'Neo4j', 'HTML', 'JavaScript'],
      github: 'https://github.com/hanaems/Gestion-vente-fleurs-NEO4J',
      deployedUrl: 'https://gestion-fleurs.example.com',
      image: '🌸',
      link: 'https://github.com/hanaems/Gestion-vente-fleurs-NEO4J',
      demo: 'https://gestion-fleurs.example.com',
      year: 2024,
    },
    {
      title: 'Gestion RH - ASP.NET Core MVC',
      description: 'Application web complète pour la gestion des ressources humaines',
      fullDescription: 'Système complet de gestion RH incluant: gestion des employés, congés, pointages, paies et évaluations. Interface professionnelle et responsive.',
      technologies: ['ASP.NET Core', 'MVC', 'C#', 'HTML', 'SQL Server'],
      github: 'https://github.com/hanaems/gestion-rh-aspnet',
      deployedUrl: 'https://gestion-rh.example.com',
      image: '👥',
      link: 'https://github.com/hanaems/gestion-rh-aspnet',
      demo: 'https://gestion-rh.example.com',
      year: 2024,
    },
    {
      title: 'Application de Facturation',
      description: 'Application Desktop JavaFX pour la gestion de la facturation',
      fullDescription: 'Logiciel de facturation desktop avec interface graphique moderne. Gestion complète des factures, clients et produits avec stockage en base de données.',
      technologies: ['JavaFX', 'Java', 'MySQL', 'CSS'],
      github: 'https://github.com/hanaems/Gestion-Facturation',
      deployedUrl: '#',
      image: '📄',
      link: 'https://github.com/hanaems/Gestion-Facturation',
      demo: '#',
      year: 2023,
    },
    {
      title: 'Application Mobile Vente Parfums',
      description: 'Application mobile React Native pour la vente de parfums',
      fullDescription: 'Application e-commerce mobile avec catalogue produits, panier, et système de paiement. Interface utilisateur intuitive et performante.',
      technologies: ['React Native', 'JavaScript', 'Node.js', 'CSS'],
      github: 'https://github.com/hanaems/Application-mobile-de-vente-de-parfums',
      deployedUrl: '#',
      image: '💐',
      link: 'https://github.com/hanaems/Application-mobile-de-vente-de-parfums',
      demo: '#',
      year: 2023,
    },
  ],
  languages: [
    { name: 'Arabe', language: 'Arabe', level: 'Langue Maternelle' },
    { name: 'Français', language: 'Français', level: 'Bilingue' },
    { name: 'Anglais', language: 'Anglais', level: 'Bien' },
  ],
};

// Exports pour compatibilité avec les anciens composants
export const skills = [
  'React',
  'Next.js',
  'TypeScript',
  'JavaScript',
  'HTML/CSS',
  'Tailwind CSS',
  'Node.js',
  'Git',
];

export const projects = portfolioData.projects;
export const experiences = portfolioData.experience;
export const education = portfolioData.education;
export const contact = {
  email: portfolioData.personal.email,
  linkedin: portfolioData.personal.linkedin,
  github: portfolioData.personal.github,
};
