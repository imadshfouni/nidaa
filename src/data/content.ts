export const navLinks = [
  { label: 'Paths', href: '#paths' },
  { label: 'Features', href: '#inside-app' },
  { label: 'Certification', href: '#certification' },
  { label: 'FAQ', href: '#faq' },
] as const

export const hero = {
  badge: 'Live in 175 countries · 11 languages',
  headline: 'The way you learn is about to',
  headlineAccent: 'change.',
  subheadline:
    "brAInify isn't another course platform. It's a complete AI-powered learning ecosystem that guides you from foundation to mastery.",
  downloadLabel: 'Download the app · Free to start',
  ecosystemLink: 'Or see how the ecosystem works →',
  ecosystemHref: '#features',
  highlights: [
    'Project-led, not video-soup',
    'Built-in AI mentor',
    'Earn certified proof of skill',
  ],
} as const

export const brandStatement = {
  headline: "YouTube videos. Saved posts. Half-finished courses.",
  accent: "Information isn't your problem. Structure is.",
  subtext:
    "brAInify was built to fix the one thing the rest of the internet can't: a system that actually finishes you.",
} as const

export const educators = [
  { name: 'Ryan', specialty: 'AI', image: '/images/educators/ryan.png' },
  { name: 'Sarah', specialty: 'Content Creator', image: '/images/educators/sarah.png' },
  { name: 'Adam', specialty: 'Digital Marketing', image: '/images/educators/adam.png' },
  { name: 'Daniel', specialty: 'Financial Literacy', image: '/images/educators/daniel.png' },
  { name: 'Steve', specialty: 'Digital Economy', image: '/images/educators/steve.png' },
  { name: 'Luke', specialty: 'AI Youth', image: '/images/educators/luke.png' },
  { name: 'Carol', specialty: 'Tools', image: '/images/educators/carol.png' },
] as const

export type LearningPath = {
  id: string
  title: string
  subtitle: string
  educator: string
  description: string
  image: string
  accentColor: string
  tags: string[]
}

export const learningPaths: LearningPath[] = [
  {
    id: 'ai',
    title: 'AI Path',
    subtitle: 'Builders & Operators',
    educator: 'Ryan',
    description:
      'Understand, use, and build with AI. Automate your work, design smarter workflows, and turn AI fluency into real opportunity.',
    image: '/learning-path/ai-path.png',
    accentColor: '#4a9eff',
    tags: ['Ship real AI automations', 'Design smarter workflows', 'Turn fluency into income'],
  },
  {
    id: 'creator',
    title: 'Content Creator Path',
    subtitle: 'Creators & Founders',
    educator: 'Sarah',
    description:
      'Build your brand, create content that converts, and monetize your creative vision with modern tools and strategy.',
    image: '/learning-path/content-creator.png',
    accentColor: '#c084fc',
    tags: ['Build a personal brand', 'Create content that converts', 'Monetize your audience'],
  },
  {
    id: 'marketing',
    title: 'Digital Marketing Path',
    subtitle: 'Marketers & Growth',
    educator: 'Adam',
    description:
      'Master growth strategies, analytics, and campaigns that drive real results for brands and businesses.',
    image: '/learning-path/digital-marketing.png',
    accentColor: '#34d399',
    tags: ['Run data-driven campaigns', 'Master growth analytics', 'Scale what works'],
  },
  {
    id: 'finance',
    title: 'Financial Intelligence Path',
    subtitle: 'Wealth-Builders',
    educator: 'Daniel',
    description:
      'Understand money, investing, and building long-term financial freedom in the digital age.',
    image: '/learning-path/financial-literacy.png',
    accentColor: '#fbbf24',
    tags: ['Build financial literacy', 'Understand investing', 'Plan for long-term wealth'],
  },
  {
    id: 'economy',
    title: 'Digital Economy Path',
    subtitle: 'On-Chain Natives',
    educator: 'Steve',
    description:
      'Navigate the new economy with e-commerce, platforms, and digital business models built for tomorrow.',
    image: '/learning-path/digital-currency.png',
    accentColor: '#f97316',
    tags: ['Understand digital commerce', 'Build on-chain fluency', 'Monetize new platforms'],
  },
  {
    id: 'youth',
    title: 'AI Youth Path',
    subtitle: 'Teens & Parents',
    educator: 'Luke',
    description:
      'Start early with skills designed for the next generation of leaders — parent-approved and future-ready.',
    image: '/learning-path/youth.png',
    accentColor: '#22d3ee',
    tags: ['Learn AI fundamentals', 'Build creative confidence', 'Parent-approved pacing'],
  },
]

export const platformFeatures = {
  left: [
    {
      title: 'Track your progress',
      description: 'Units, chapters, and a clear 0–100% path.',
    },
    {
      title: 'Lessons + simulations',
      description: 'Learn the idea, then practice it live.',
    },
    {
      title: 'XP & streaks',
      description: 'Daily wins that compound into real skill.',
    },
  ],
  right: [
    {
      title: 'AI mentor',
      description: 'A 24/7 coach that adapts to your pace.',
    },
    {
      title: 'AI Lab',
      description: 'Build deployable projects with real tools.',
    },
    {
      title: 'Certification',
      description: 'Proof of work, backed by real builds.',
    },
  ],
} as const

export const aiTools = [
  { name: 'Claude', description: 'Reasoning & Writing', logo: '/logos/claude.svg' },
  { name: 'Descript', description: 'Audio & Video', logo: '/logos/descript.svg' },
  { name: 'Perplexity', description: 'Research', logo: '/logos/perplexity.svg' },
  { name: 'Relevance AI', description: 'Agents & Ops', logo: '/logos/relevance.svg' },
  { name: 'n8n', description: 'Workflow Automation', logo: '/logos/n8n.svg' },
] as const

export const languages = [
  'English',
  'Arabic',
  'Hindi',
  'French',
  'Russian',
  'Farsi',
  'Tamil',
  'Spanish',
  'Sinhala',
] as const

export const certification = {
  title: 'Proof of skill, not proof of attendance.',
  description:
    "Graduates don't just leave with a certificate — they leave with proof of work. Each certification is awarded for completing a real system build and passing a practical validation, not for watching a video to the end.",
  points: [
    'Project-validated, not quiz-validated',
    'Real systems shipped to your portfolio',
    'KHDA-accredited certification coming via Dubai Government',
  ],
} as const

export const stats = [
  { value: 175, suffix: '', label: 'Countries live' },
  { value: 11, suffix: '', label: 'Languages' },
  { value: 6, suffix: '', label: 'Career paths' },
  { value: 6, suffix: '', label: 'Ecosystem features' },
] as const

export const faq = [
  {
    question: "I'm a complete beginner. Is this for me?",
    answer:
      'Yes. Every path begins at foundation. By the time you reach the build stage you\'ll have the vocabulary, projects, and confidence to use real tools without faking it.',
  },
  {
    question: 'How is this different from the 100 AI courses online?',
    answer:
      'Most courses are content. brAInify is an ecosystem: project-led video, gamified paths, an Application Lab to actually build, micro lessons, an AI mentor, and certification on real work. The structure is what makes you finish.',
  },
  {
    question: 'Will I actually finish?',
    answer:
      'The platform is engineered for adherence — bite-sized units, level progression, and an AI Mentor that catches you when you slip. Designed by educators, not just marketers.',
  },
  {
    question: 'Is the AI Mentor really useful or a gimmick?',
    answer:
      "The mentor knows your path, current chapter, XP, and last sticking point. It's a tutor available at 6am before work and at midnight before a deadline. That's the difference between a chatbot and a coach.",
  },
  {
    question: 'What language can I learn in?',
    answer:
      'English, Arabic, Hindi, French, Russian, Farsi, Tamil, Spanish, and Sinhala — without changing the curriculum.',
  },
  {
    question: 'Is the certification recognised?',
    answer:
      'Certification is awarded on real project completion and skill validation — not attendance. KHDA accreditation via the Dubai Government is on the roadmap.',
  },
  {
    question: 'Can teens use it?',
    answer:
      'Yes — the AI Youth Path is built specifically for young learners with parent-approved content and pacing.',
  },
] as const

export const finalCta = {
  eyebrow: 'GET BRAINIFIED',
  headline: 'OWN YOUR FUTURE',
  subtext:
    'Pick your path. Meet your AI mentor. Ship your first project this week — and own the future before it owns you.',
  footer: 'iOS · Android · Live in 175 countries · 11 languages',
} as const
