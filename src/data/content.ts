import type { LucideIcon } from 'lucide-react'
import {
  Briefcase,
  Cpu,
  Globe,
  GraduationCap,
  Palette,
  Wallet,
} from 'lucide-react'

export const navLinks = [
  { label: 'Paths', href: '#paths' },
  { label: 'Instructors', href: '#instructors' },
  { label: 'Ecosystem', href: '#ecosystem' },
  { label: 'Tools', href: '#tools' },
  { label: 'FAQ', href: '#faq' },
] as const

export type Instructor = {
  id: string
  name: string
  role: string
  image?: string
}

/** AI mentors inside brAInify — names & roles match the live app */
export const instructors: Instructor[] = [
  {
    id: 'ryan',
    name: 'Ryan',
    role: 'AI',
    image: '/instructors/ryan.png',
  },
  {
    id: 'sarah',
    name: 'Sarah',
    role: 'Content Creator',
    image: '/instructors/sarah.png',
  },
  {
    id: 'adam',
    name: 'Adam',
    role: 'Digital Marketing',
    image: '/instructors/adam.png',
  },
  {
    id: 'daniel',
    name: 'Daniel',
    role: 'Financial Literacy',
    image: '/instructors/daniel.png',
  },
  {
    id: 'steve',
    name: 'Steve',
    role: 'Digital Economy',
    image: '/instructors/steve.png',
  },
  {
    id: 'luke',
    name: 'Luke',
    role: 'AI Youth',
    image: '/instructors/luke.png',
  },
  {
    id: 'carol',
    name: 'Carol',
    role: 'Tools',
    image: '/instructors/carol.png',
  },
]

export type LearningPath = {
  id: string
  icon: LucideIcon
  title: string
  tag: string
  tagColor: string
  description: string
  highlights: string[]
  /** Google Drive share link — Explore Path opens this video */
  videoUrl: string
}

/**
 * Path intro videos (Google Drive).
 * In Drive: open video → Share → General access → Anyone with the link → Copy link.
 * Paste the full URL into `videoUrl` for each path.
 */
export const learningPaths: LearningPath[] = [
  {
    id: 'ai',
    icon: Cpu,
    title: 'The AI Path',
    tag: 'BUILDERS & INNOVATORS',
    tagColor: 'text-cyan-400',
    description:
      'Learn how to use AI tools, write powerful prompts, automate tasks, solve problems faster, and build real AI-powered workflows.',
    highlights: ['AI tools', 'Prompt writing', 'Automation & workflows'],
    videoUrl: '',
  },
  {
    id: 'creator',
    icon: Palette,
    title: 'The Creator Path',
    tag: 'CREATORS & BRANDS',
    tagColor: 'text-fuchsia-400',
    description:
      'Learn how to create content using AI, including videos, scripts, visuals, social media posts, content plans, and creative campaigns.',
    highlights: ['Video & scripts', 'Visuals & social', 'Content plans'],
    videoUrl: '',
  },
  {
    id: 'marketing',
    icon: Briefcase,
    title: 'The Digital Marketing Path',
    tag: 'MARKETERS & GROWTH',
    tagColor: 'text-blue-400',
    description:
      'Learn how to promote brands and products online using social media, ads, content strategy, funnels, analytics, and AI-powered marketing tools.',
    highlights: ['Social & ads', 'Funnels & strategy', 'Analytics & AI tools'],
    videoUrl: '',
  },
  {
    id: 'economy',
    icon: Globe,
    title: 'The Digital Economy Path',
    tag: 'DIGITAL BUSINESS',
    tagColor: 'text-emerald-400',
    description:
      'Learn how the modern online economy works, including digital business models, online platforms, remote work, e-commerce, and AI-driven opportunities.',
    highlights: ['Business models', 'E-commerce', 'Remote & AI opportunities'],
    videoUrl: '',
  },
  {
    id: 'financial',
    icon: Wallet,
    title: 'The Financial Literacy Path',
    tag: 'MONEY & PLANNING',
    tagColor: 'text-amber-400',
    description:
      'Learn the basics of money management, budgeting, saving, investing concepts, financial planning, and making smarter financial decisions.',
    highlights: ['Budgeting & saving', 'Investing basics', 'Financial planning'],
    videoUrl: '',
  },
  {
    id: 'youth',
    icon: GraduationCap,
    title: 'The Youth Path',
    tag: 'NEXT GENERATION',
    tagColor: 'text-violet-400',
    description:
      'A beginner-friendly path designed for young learners to understand AI, digital skills, creativity, problem-solving, and future-ready learning in a simple way.',
    highlights: ['AI basics', 'Digital skills', 'Creativity & problem-solving'],
    videoUrl: '',
  },
]

export const ecosystemFeatures = [
  {
    title: 'Track your progress',
    description: 'Units, chapters, and a clear 0–100% path.',
  },
  {
    title: 'Lessons + simulations',
    description: 'Learn the idea, then practice in live scenarios.',
  },
  {
    title: 'XP & streaks',
    description: 'Daily wins that compound into real skill growth.',
  },
] as const

export const languages = [
  'English',
  'Arabic',
  'Hindi',
  'French',
  'Russian',
  'Spanish',
  'German',
  'Portuguese',
] as const

export const tools = [
  {
    name: 'Claude',
    category: 'REASONING & WRITING',
    color: 'text-[#f0a88c]',
    logo: '/logos/claude.svg',
    logoClass: 'h-9 w-9',
  },
  {
    name: 'Descript',
    category: 'AUDIO & VIDEO',
    color: 'text-violet-400',
    logo: '/logos/descript.svg',
    logoClass: 'h-9 w-9 rounded-lg',
  },
  {
    name: 'Perplexity',
    category: 'RESEARCH',
    color: 'text-cyan-400',
    logo: '/logos/perplexity.svg',
    logoClass: 'h-9 w-9',
  },
  {
    name: 'Relevance AI',
    category: 'AGENTS & OPS',
    color: 'text-indigo-400',
    logo: '/logos/relevance.svg',
    logoClass: 'h-9 w-9 rounded-lg',
  },
  {
    name: 'n8n',
    category: 'WORKFLOW AUTOMATION',
    color: 'text-rose-400',
    logo: '/logos/n8n.svg',
    logoClass: 'h-9 w-9',
  },
] as const

export const stats = [
  { value: 17000, suffix: '+', label: 'Active learners' },
  { value: 4.9, suffix: '', label: 'Average rating', decimals: 1 },
  { value: 120, suffix: '+', label: 'Countries' },
  { value: 6, suffix: '', label: 'Learning paths' },
] as const

export const faqs = [
  {
    question: 'What makes brAInify different from other courses?',
    answer:
      'brAInify is an AI-powered ecosystem — not passive video courses. You learn with a personal AI Mentor, build real projects in the Application Lab, and earn proof of skill.',
  },
  {
    question: 'Do I need prior experience with AI?',
    answer:
      'No. Paths adapt to your level. The AI Mentor personalizes every journey whether you are a complete beginner or advancing your career.',
  },
  {
    question: 'Is brAInify available on mobile?',
    answer:
      'Yes. brAInify is available on iOS and Android, plus web — learn on any device, anywhere.',
  },
  {
    question: 'What languages are supported?',
    answer:
      'brAInify supports multiple languages including English, Arabic, Hindi, French, Russian, and more — with new languages added regularly.',
  },
  {
    question: 'How does the AI Mentor work?',
    answer:
      'Your AI Mentor guides you through your chosen path, explains concepts in plain language, recommends next steps, and helps you apply skills to real projects 24/7.',
  },
] as const

export const footerLinks = {
  product: [
    { label: 'Learning Paths', href: '#paths' },
    { label: 'Application Lab', href: '#ecosystem' },
    { label: 'AI Tools', href: '#tools' },
    { label: 'Instructors', href: '#instructors' },
    {
      label: 'App Store',
      href: 'https://apps.apple.com/lb/app/brainify-app/id6759913473',
    },
    {
      label: 'Google Play',
      href: 'https://play.google.com/store/apps/details?id=com.brainify.app',
    },
  ],
  company: [
    { label: 'Log in', href: 'https://app.brainify.world' },
    { label: 'Ignite', href: 'https://joinignite.com/brainify/' },
    { label: 'Contact', href: 'mailto:support@brainify.world' },
  ],
  legal: [
    { label: 'Privacy', href: '#' },
    { label: 'Terms', href: '#' },
  ],
} as const
