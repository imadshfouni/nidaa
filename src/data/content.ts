import type { LucideIcon } from 'lucide-react'
import {
  Briefcase,
  Cpu,
  GraduationCap,
  Palette,
  Rocket,
  Zap,
} from 'lucide-react'

export const navLinks = [
  { label: 'Paths', href: '#paths' },
  { label: 'Instructors', href: '#instructors' },
  { label: 'Ecosystem', href: '#ecosystem' },
  { label: 'Tools', href: '#tools' },
  { label: 'FAQ', href: '#faq' },
] as const

/** AI mentors inside brAInify — names & roles match the live app */
export const instructors = [
  { id: 'ryan', name: 'Ryan', role: 'AI', image: '/instructors/ryan.jpg' },
  {
    id: 'sarah',
    name: 'Sarah',
    role: 'Content Creator',
    image: '/instructors/sarah.jpg',
  },
  {
    id: 'adam',
    name: 'Adam',
    role: 'Digital Marketing',
    image: '/instructors/adam.jpg',
  },
  {
    id: 'daniel',
    name: 'Daniel',
    role: 'Financial Literacy',
    image: '/instructors/daniel.jpg',
  },
  {
    id: 'steve',
    name: 'Steve',
    role: 'Digital Economy',
    image: '/instructors/steve.jpg',
  },
  { id: 'luke', name: 'Luke', role: 'AI Youth', image: '/instructors/luke.jpg' },
  { id: 'carol', name: 'Carol', role: 'Tools', image: '/instructors/carol.jpg' },
] as const

export type LearningPath = {
  id: string
  icon: LucideIcon
  title: string
  tag: string
  tagColor: string
  description: string
  highlights: string[]
}

export const learningPaths: LearningPath[] = [
  {
    id: 'ai',
    icon: Cpu,
    title: 'AI Path',
    tag: 'BUILDERS & INNOVATORS',
    tagColor: 'text-cyan-400',
    description:
      'Master AI fundamentals, automation, and intelligent workflows from beginner to advanced.',
    highlights: ['AI workflows', 'Prompt engineering', 'Agent building'],
  },
  {
    id: 'creator',
    icon: Palette,
    title: 'Creator Path',
    tag: 'CREATORS & BRANDS',
    tagColor: 'text-fuchsia-400',
    description:
      'Build your brand with AI-powered content, video, design, and audience growth strategies.',
    highlights: ['Content systems', 'Video & design', 'Audience growth'],
  },
  {
    id: 'business',
    icon: Briefcase,
    title: 'Business Builder Path',
    tag: 'ENTREPRENEURS',
    tagColor: 'text-blue-400',
    description:
      'Launch and scale ventures using AI for strategy, operations, marketing, and leadership.',
    highlights: ['Go-to-market', 'Ops automation', 'Leadership'],
  },
  {
    id: 'freelancer',
    icon: Zap,
    title: 'Freelancer Path',
    tag: 'INDEPENDENT PROS',
    tagColor: 'text-violet-400',
    description:
      'Offer high-value AI services, win clients, and build a sustainable independent career.',
    highlights: ['Client acquisition', 'Service packaging', 'Pricing'],
  },
  {
    id: 'youth',
    icon: GraduationCap,
    title: 'Youth Path',
    tag: 'NEXT GENERATION',
    tagColor: 'text-amber-400',
    description:
      'Future-proof the next generation with safe, engaging AI literacy and creative skills.',
    highlights: ['Safe AI literacy', 'Creative projects', 'Digital confidence'],
  },
  {
    id: 'future',
    icon: Rocket,
    title: 'Future Skills Path',
    tag: 'CAREER READY',
    tagColor: 'text-emerald-400',
    description:
      'Stay ahead with emerging tech, digital fluency, and cross-disciplinary innovation skills.',
    highlights: ['Emerging tech', 'Digital fluency', 'Innovation'],
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
