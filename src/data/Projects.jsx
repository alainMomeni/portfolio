export const PROJECTS = [
  {
    id: "banking",
    name: "Banking API",
    description:
      "Production-ready RESTful API handling core banking operations — account lifecycle, multi-currency transactions, and role-based user management — built with security and auditability at its core.",
    tags: [
      { label: "Node.js",    color: "green" },
      { label: "Express",    color: "green" },
      { label: "PostgreSQL", color: "green" },
      { label: "JWT",        color: "blue"  },
      { label: "Swagger",    color: "dark"  },
      { label: "REST API",   color: "dark"  },
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#60A5FA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M3 10h18" />
        <path d="M12 3L3 10h18L12 3z" />
        <line x1="6"  y1="10" x2="6"  y2="18" />
        <line x1="10" y1="10" x2="10" y2="18" />
        <line x1="14" y1="10" x2="14" y2="18" />
        <line x1="18" y1="10" x2="18" y2="18" />
        <path d="M2 18h20" />
        <path d="M1 21h22" />
      </svg>
    ),
  },
  {
    id: "marketplace",
    name: "Marketplace Platform",
    description:
      "End-to-end marketplace with dynamic product listings, persistent cart, Stripe-powered checkout, and real-time order tracking — delivering a seamless buying experience from browse to delivery.",
    tags: [
      { label: "React",     color: "blue"  },
      { label: "Node.js",   color: "green" },
      { label: "PostgreSQL",color: "blue"  },
      { label: "Redux",     color: "dark"  },
      { label: "Stripe",    color: "green" },
      { label: "WebSocket", color: "dark"  },
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#60A5FA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M1 1h4l2.68 13.39a2 2 0 001.99 1.61h9.72a2 2 0 001.96-1.63L23 6H6" />
        <circle cx="9"  cy="21" r="1" fill="#60A5FA" />
        <circle cx="20" cy="21" r="1" fill="#60A5FA" />
      </svg>
    ),
  },
  {
    id: "scraper",
    name: "Web Scraper Engine",
    description:
      "Distributed scraping engine that autonomously collects, cleans, and exports structured data from heterogeneous sources — with Celery-powered scheduling, Redis queuing, and Pandas-based transformation pipelines.",
    tags: [
      { label: "Python",      color: "blue"  },
      { label: "Scrapy",      color: "green" },
      { label: "Pandas",      color: "green" },
      { label: "Celery",      color: "dark"  },
      { label: "Redis",       color: "dark"  },
      { label: "Distributed", color: "blue"  },
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#60A5FA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <ellipse cx="12" cy="13" rx="4" ry="5" />
        <circle cx="12" cy="7" r="2" />
        <path d="M8 11 C5 10 3 8 2 6" />
        <path d="M8 13 C5 13 3 13 1 12" />
        <path d="M8 15 C5 16 3 17 2 19" />
        <path d="M8 17 C6 19 5 20 4 22" />
        <path d="M16 11 C19 10 21 8 22 6" />
        <path d="M16 13 C19 13 21 13 23 12" />
        <path d="M16 15 C19 16 21 17 22 19" />
        <path d="M16 17 C18 19 19 20 20 22" />
      </svg>
    ),
  },
];