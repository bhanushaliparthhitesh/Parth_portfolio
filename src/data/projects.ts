export type ProjectCategory =
  | 'AI & INFRASTRUCTURE'
  | 'AGRICULTURE'
  | 'RECYCLING'
  | 'BACKEND SYSTEMS'
  | 'DEVELOPER TOOLS';

export type ProjectImage = {
  src: string;
  alt: string;
};

export type ProjectDetails = {
  motivation?: string;
  approach?: string;
  technologies?: string[];
  plannedArchitecture?: string[];
  keyFeatures?: string[];
  challenges?: string;
  learnings?: string;
  outcomes?: string;
  repositoryUrl?: string;
  liveDemoUrl?: string;
  images?: ProjectImage[];
};

export type Project = {
  id: number;
  label: string;
  title: string;
  image?: string;
  imageAlt?: string;
  year?: string;
  category: ProjectCategory;
  shortDescription: string;
  description: string;
  date?: string;
  status?: 'Prototype' | 'In progress';
  details?: ProjectDetails;
};

export const projects: Project[] = [
  {
    id: 1,
    label: 'THERMION',
    title: 'Safety-first data center cooling optimization',
    image: '/grid/thermion-dashboard.png',
    imageAlt: 'Thermion cooling telemetry and safety dashboard',
    category: 'AI & INFRASTRUCTURE',
    shortDescription: 'An AI-driven cooling optimization platform combining reinforcement learning, digital twins, and safety-first decision validation for data centers.',
    description: 'Thermion explores how AI can make data center cooling more intelligent and resource-efficient. It combines an XGBoost-powered digital twin with a Proximal Policy Optimization (PPO) reinforcement learning agent to propose cooling decisions across air, liquid, and hybrid cooling modes.\n\nA safety layer powered by Cedar validates proposed actions before execution. If an action violates safety policies, the system rejects it and activates a fallback strategy. Decision logging and Strands Agents-based explanations help make the decision-making process more transparent.',
    details: {
      motivation: 'Explore a cooling optimization workflow where proposed actions are checked against operational safety policies before they are dispatched.',
      approach: 'The local decision pipeline combines a digital-twin simulation, a PPO agent, Cedar policy checks, physical guardrails, safe fallbacks, decision logging, and grounded explanations from a Strands Agent.',
      technologies: ['Python', 'XGBoost', 'PPO reinforcement learning', 'Cedar', 'Strands Agents', 'AWS SAM CLI', 'LocalStack', 'Amazon PartyRock'],
      keyFeatures: [
        'Proposes air, liquid, or hybrid cooling actions from simulated telemetry.',
        'Rejects unsafe actions and selects a fallback strategy.',
        'Records decision context and explains choices from logged telemetry.',
      ],
      repositoryUrl: 'https://github.com/bhanushaliparthhitesh/Thermion',
      liveDemoUrl: 'https://partyrock.aws/u/Parthbhanushali06/K5sMpExtq/Thermion-AI-Data-Center-Cooling-Demo',
    },
  },
  {
    id: 2,
    label: 'MANDI MITRA',
    title: 'Agricultural market intelligence for traders',
    image: '/grid/mandi-mitra-market.png',
    imageAlt: 'Mandi Mitra market and onion farming artwork',
    category: 'AGRICULTURE',
    shortDescription: 'An agricultural price-forecasting project with a Flutter interface and a separately maintained FastAPI backend and machine-learning service.',
    description: 'Mandi Mitra focuses on making agricultural market intelligence more accessible to farmers and traders in Maharashtra. The project includes a Flutter mobile interface and a separately maintained FastAPI backend that retrieves and caches forecasts from a machine-learning API. The frontend documentation describes backend integration as planned; the two parts are not presented as an already connected production service.\n\nThe mobile interface includes mandi-specific onion prices, forecasts, market comparisons, and trader-oriented decision support. The backend provides an intermediary layer for forecast requests, prefetches and caches recent data, and can serve cached values when upstream requests are slow or unavailable.\n\nThe project brings together mobile development, API integration, backend engineering, and machine-learning forecasting in an agriculture-focused use case.',
    details: {
      motivation: 'Make mandi prices, forecasts, and market comparisons easier for agricultural traders to access from a mobile application.',
      approach: 'The Flutter frontend and FastAPI backend are maintained separately, with API integration documented as future work in the frontend. The backend itself fetches forecasts from a separate machine-learning API, prefetches and caches recent data, and can serve cached values when the upstream service is unavailable.',
      technologies: ['Flutter', 'Dart', 'Python', 'FastAPI', 'REST APIs', 'Machine-learning forecasting', 'Render'],
      keyFeatures: [
        'Onion mandi prices and seven-day forecasts.',
        'Comparison between two markets.',
        'Trader-oriented hold or sell decision support.',
        'English, Hindi, and Marathi interface localization.',
        'Backend caching and stale-data fallback for forecast requests.',
      ],
      repositoryUrl: 'https://github.com/bhanushaliparthhitesh/Mandi_Mitra_backend',
    },
  },
  {
    id: 3,
    label: 'KABADILINK',
    title: 'A recycling pickup platform prototype',
    category: 'RECYCLING',
    shortDescription: 'A recycling platform prototype connecting households, collectors, and recyclers through digital pickup requests.',
    description: 'KabadiLink is a recycling platform prototype designed to connect households with collectors and recycling partners. Its interface supports pickup requests with waste categories, estimated quantities, preferred time slots, and supporting photos.\n\nThe current frontend runs against a mock API persisted in local storage. The repository documents an intended AWS serverless backend for authentication, request handling, data and image storage, and notifications. Those AWS services are planned architecture and are not connected to the current mock workflow.',
    status: 'Prototype',
    details: {
      motivation: 'Explore a digital workflow that connects households with collectors and recycling partners for recyclable-waste pickup.',
      approach: 'The current React application demonstrates role-based screens and pickup workflows using a mock API whose data is stored in local storage. The repository marks backend integration points for future AWS services.',
      technologies: ['React', 'TypeScript', 'localStorage'],
      plannedArchitecture: ['AWS API Gateway', 'AWS Lambda', 'DynamoDB', 'Amazon S3', 'Amazon SNS', 'Amazon Cognito'],
      keyFeatures: [
        'Pickup requests with waste category, estimated quantity, time slot, and photos.',
        'Household, collector, recycler, and administrator workflow screens.',
        'A simulator for stepping through a pickup workflow.',
      ],
      repositoryUrl: 'https://github.com/bhanushaliparthhitesh/kabadilink',
    },
  },
  {
    id: 4,
    label: 'SPECTRA',
    title: 'Distributed event processing and correlation',
    category: 'BACKEND SYSTEMS',
    shortDescription: 'A distributed event-processing platform with asynchronous ingestion, worker processing, correlation rules, and a real-time console.',
    description: 'SPECTRA is a distributed event-processing platform for ingesting event streams, evaluating pattern-matching rules, correlating multi-step workflows across time windows, and surfacing telemetry in a web console.\n\nA FastAPI backend validates and enqueues events in Redis Streams. Background workers process the stream, apply rules and correlation logic, and persist metadata in PostgreSQL while indexing searchable records in OpenSearch. A React dashboard presents telemetry and includes an event simulator.',
    details: {
      motivation: 'Provide a system for processing event streams and correlating multi-step activity while handling retries and failed events.',
      approach: 'The documented architecture uses a FastAPI API, Redis Streams and worker processes, a rules and correlation engine, PostgreSQL and OpenSearch persistence, and a React dashboard.',
      technologies: ['Python 3.12', 'FastAPI', 'Pydantic', 'Redis Streams', 'PostgreSQL', 'OpenSearch', 'React 19', 'TypeScript', 'Vite', 'Docker Compose'],
      keyFeatures: [
        'Validated asynchronous event ingestion with duplicate-event checks.',
        'Worker processing with retry handling and a dead-letter queue.',
        'Sliding-window rules and multi-event correlation.',
        'Event search, processing status, and a simulator in the web console.',
      ],
      repositoryUrl: 'https://github.com/HetviBhanushali/Spectra',
    },
  },
  {
    id: 5,
    label: 'AI CODEBASE ASSISTANT',
    title: 'Codex-based developer assistant',
    category: 'DEVELOPER TOOLS',
    shortDescription: 'A developer-tool project exploring Codex-based coding automation, complementary productivity features, and a machine-learning component.',
    description: 'This project is described as a developer assistant centered on Codex-based coding automation, with additional productivity features and a machine-learning component. The implementation details, specific completed capabilities, and technology stack are not documented in the available project files yet.',
    status: 'In progress',
    details: {
      motivation: 'Explore how a Codex-based agent and complementary productivity features could support common coding workflows.',
      approach: 'Implementation details and the specific role of the machine-learning component still need to be documented.',
    },
  },
];

export const projectCategories = Array.from(
  new Set(projects.map((project) => project.category))
);
