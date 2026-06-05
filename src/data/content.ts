import type { LucideIcon } from 'lucide-react'
import {
  Bot,
  Brain,
  Coins,
  Globe,
  GraduationCap,
  LineChart,
  Palette,
  Sparkles,
  TrendingUp,
  Zap,
} from 'lucide-react'

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'How It Works', href: '#story' },
  { label: 'Paths', href: '#paths' },
  { label: 'Platform', href: '#platform' },
  { label: 'AI Mentor', href: '#mentor' },
] as const

export const hero = {
  badge: 'The future is yours to build',
  headline: ['Build the Future.', 'Learn AI, Business & Digital Skills.'],
  subheadline:
    'brAInify is an AI-powered learning ecosystem that helps you learn, practice, build projects, and prepare for real opportunities.',
  ctaPrimary: 'Start Learning',
  ctaSecondary: 'Explore Paths',
} as const

export const storySteps = [
  {
    step: '01',
    title: 'Learn',
    description: 'Master AI, business, and digital skills through structured, expert-designed lessons.',
    icon: Brain,
  },
  {
    step: '02',
    title: 'Practice',
    description: 'Apply knowledge with hands-on exercises, simulations, and real-world scenarios.',
    icon: Zap,
  },
  {
    step: '03',
    title: 'Build',
    description: 'Create portfolio projects that prove your skills and open doors to opportunities.',
    icon: Sparkles,
  },
  {
    step: '04',
    title: 'Grow',
    description: 'Track progress, earn certificates, and advance with personalized AI guidance.',
    icon: TrendingUp,
  },
] as const

export type LearningPath = {
  title: string
  description: string
  icon: LucideIcon
  gradient: string
}

export const learningPaths: LearningPath[] = [
  {
    title: 'AI Path',
    description: 'Master artificial intelligence, automation, and the tools shaping tomorrow.',
    icon: Bot,
    gradient: 'from-blue/20 to-violet/20',
  },
  {
    title: 'Creator Path',
    description: 'Build your brand, create content, and monetize your creative vision.',
    icon: Palette,
    gradient: 'from-violet/20 to-blue/20',
  },
  {
    title: 'Digital Marketing Path',
    description: 'Learn growth strategies, analytics, and campaigns that drive real results.',
    icon: LineChart,
    gradient: 'from-blue/20 to-blue-glow/20',
  },
  {
    title: 'Financial Literacy Path',
    description: 'Understand money, investing, and building long-term financial freedom.',
    icon: Coins,
    gradient: 'from-violet/20 to-violet-glow/20',
  },
  {
    title: 'Digital Economy Path',
    description: 'Navigate the new economy with e-commerce, platforms, and digital business models.',
    icon: Globe,
    gradient: 'from-blue/20 to-violet/20',
  },
  {
    title: 'Youth Path',
    description: 'Start early with skills designed for the next generation of leaders.',
    icon: GraduationCap,
    gradient: 'from-violet/20 to-blue/20',
  },
]

export const platformFeatures = [
  { label: 'Continue Learning', value: 'AI Fundamentals — Module 4' },
  { label: 'AI Mentor', value: '3 new recommendations' },
  { label: 'Progress', value: '68% complete' },
  { label: 'Projects', value: '2 in progress' },
  { label: 'Certificates', value: '1 earned' },
] as const

export const aiMentor = {
  userMessage: 'I want to learn AI automation.',
  aiResponse:
    "Great. I'll guide you step by step, track your progress, and help you build your first project.",
} as const

export const stats = [
  { value: 5000, suffix: '+', label: 'learners' },
  { value: 20, suffix: '+', label: 'countries' },
  { value: 200, suffix: '+', label: 'lessons' },
  { value: 6, suffix: '', label: 'learning paths' },
  { value: 100, suffix: '+', label: 'projects built' },
] as const

export const finalCta = {
  headline: 'Your future does not wait.',
  subtext: 'Start building the skills that will define the next generation.',
  ctaPrimary: 'Start Learning',
  ctaSecondary: 'Explore Paths',
} as const
