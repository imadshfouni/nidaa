import { Brain, Sparkles, TrendingUp, Zap } from 'lucide-react'
import { getPathUrl } from '@/config/site'

export const navLinks = [
  { label: 'Paths', href: '#paths' },
  { label: 'Mentor', href: '#mentor' },
  { label: 'Platform', href: '#platform' },
  { label: 'Journey', href: '#journey' },
  { label: 'FAQ', href: '#faq' },
] as const

export const hero = {
  badge: 'Premium learning for the AI generation',
  headline: 'Build Your Future With AI.',
  subheadline:
    'brAInify helps the next generation learn AI, business, digital skills, financial literacy, and creator skills through a guided learning ecosystem.',
  ctaPrimary: 'Start Learning',
  ctaSecondary: 'Explore Paths',
} as const

export const valueProps = [
  {
    title: 'Project-led learning',
    description: 'Learn by building real projects — not watching endless videos.',
  },
  {
    title: 'AI mentor built in',
    description: 'Personal guidance that adapts to your pace and keeps you on track.',
  },
  {
    title: 'Certified proof of skill',
    description: 'Earn credentials backed by real work, not just attendance.',
  },
] as const

export const trustedStrip = {
  label: 'Trusted by learners across 20+ countries',
  partners: ['Global EdTech', 'AI Academy', 'Future Skills', 'Digital Leaders', 'SkillForge', 'NextGen'],
} as const

export const journeySteps = [
  {
    step: '01',
    title: 'Learn',
    description: 'Structured lessons designed by experts. Build foundations that last.',
    icon: Brain,
  },
  {
    step: '02',
    title: 'Practice',
    description: 'Hands-on simulations and exercises. Apply knowledge in real scenarios.',
    icon: Zap,
  },
  {
    step: '03',
    title: 'Build',
    description: 'Ship portfolio projects. Prove your skills with work that matters.',
    icon: Sparkles,
  },
  {
    step: '04',
    title: 'Grow',
    description: 'Track progress, earn certificates, advance with AI-guided mentorship.',
    icon: TrendingUp,
  },
] as const

export type LearningWorld = {
  id: string
  title: string
  subtitle: string
  description: string
  image: string
  accentColor: string
  href: string
}

export const learningWorlds: LearningWorld[] = [
  {
    id: 'ai',
    title: 'AI Path',
    subtitle: 'Builders & Operators',
    description: 'Master AI, automation, and the tools defining tomorrow.',
    image: '/learning-path/ai-path.png',
    accentColor: '#2563EB',
    href: getPathUrl('ai'),
  },
  {
    id: 'creator',
    title: 'Creator Path',
    subtitle: 'Creators & Founders',
    description: 'Build your brand and monetize your creative vision.',
    image: '/learning-path/content-creator.png',
    accentColor: '#7C3AED',
    href: getPathUrl('creator'),
  },
  {
    id: 'marketing',
    title: 'Digital Marketing Path',
    subtitle: 'Marketers & Growth',
    description: 'Growth strategies and campaigns that drive real results.',
    image: '/learning-path/digital-marketing.png',
    accentColor: '#06B6D4',
    href: getPathUrl('marketing'),
  },
  {
    id: 'finance',
    title: 'Financial Literacy Path',
    subtitle: 'Wealth-Builders',
    description: 'Money, investing, and long-term financial freedom.',
    image: '/learning-path/financial-literacy.png',
    accentColor: '#F59E0B',
    href: getPathUrl('finance'),
  },
  {
    id: 'economy',
    title: 'Digital Economy Path',
    subtitle: 'On-Chain Natives',
    description: 'Navigate e-commerce and digital business models.',
    image: '/learning-path/digital-currency.png',
    accentColor: '#EA580C',
    href: getPathUrl('economy'),
  },
  {
    id: 'youth',
    title: 'Youth Path',
    subtitle: 'Teens & Parents',
    description: 'Future-ready skills for the next generation.',
    image: '/learning-path/youth.png',
    accentColor: '#10B981',
    href: getPathUrl('youth'),
  },
]

export const aiMentor = {
  userMessage: 'I want to learn AI automation.',
  aiResponse:
    "Great. I'll guide you step by step, track your progress, and help you build your first project.",
} as const

export const platformFeatures = [
  { title: 'Track your progress', description: 'Units, chapters, and a clear 0–100% path.' },
  { title: 'Lessons + simulations', description: 'Learn the idea, then practice it live.' },
  { title: 'AI mentor', description: 'A 24/7 coach that adapts to your pace.' },
  { title: 'Projects & certificates', description: 'Proof of work, backed by real builds.' },
] as const

export const stats = [
  { value: 5000, suffix: '+', label: 'Learners' },
  { value: 20, suffix: '+', label: 'Countries' },
  { value: 200, suffix: '+', label: 'Lessons' },
  { value: 6, suffix: '', label: 'Learning Paths' },
  { value: 100, suffix: '+', label: 'Projects Built' },
] as const

export const testimonials = [
  {
    quote:
      'brAInify gave me structure I never found on YouTube. I finished my first AI project in two weeks.',
    name: 'Sarah M.',
    role: 'Marketing Professional',
  },
  {
    quote:
      'The AI mentor feels like having a tutor who actually knows where I am in the course. Game changer.',
    name: 'James K.',
    role: 'Entrepreneur',
  },
  {
    quote:
      'Finally a platform that teaches real tools — Claude, n8n, everything I use at work now.',
    name: 'Aisha R.',
    role: 'AI Path Graduate',
  },
] as const

export const finalCta = {
  headline: 'Your future does not wait.',
  subtext: 'Start building the skills that will define the next generation.',
  ctaPrimary: 'Start Learning',
  ctaSecondary: 'Explore Paths',
} as const

export const aiTools = [
  { name: 'Claude', description: 'Reasoning & Writing', logo: '/logos/claude.svg' },
  { name: 'Descript', description: 'Audio & Video', logo: '/logos/descript.svg' },
  { name: 'Perplexity', description: 'Research', logo: '/logos/perplexity.svg' },
  { name: 'Relevance AI', description: 'Agents & Ops', logo: '/logos/relevance.svg' },
  { name: 'n8n', description: 'Workflow Automation', logo: '/logos/n8n.svg' },
] as const

export const certification = {
  title: 'Proof of skill, not proof of attendance.',
  description:
    "Graduates don't just leave with a certificate — they leave with proof of work. Each certification is awarded for completing a real system build and passing a practical validation.",
  image: '/images/certificate.png',
  imageAlt: 'brAInify professional certificate sample',
  caption: 'Sample certificate · Issued on real project completion',
  points: [
    'Project-validated, not quiz-validated',
    'Real systems shipped to your portfolio',
    'KHDA-accredited certification coming via Dubai Government',
  ],
} as const

export const faq = [
  {
    question: "I'm a complete beginner. Is this for me?",
    answer:
      'Yes. Every path begins at foundation. By the time you reach the build stage you\'ll have the vocabulary, projects, and confidence to use real tools without faking it.',
  },
  {
    question: 'How is this different from the 100 AI courses online?',
    answer:
      'Most courses are content. brAInify is an ecosystem: project-led video, gamified paths, an Application Lab to actually build, micro lessons, an AI mentor, and certification on real work.',
  },
  {
    question: 'Will I actually finish?',
    answer:
      'The platform is engineered for adherence — bite-sized units, level progression, and an AI Mentor that catches you when you slip.',
  },
  {
    question: 'Is the AI Mentor really useful or a gimmick?',
    answer:
      "The mentor knows your path, current chapter, XP, and last sticking point. It's a tutor available at 6am before work and at midnight before a deadline.",
  },
  {
    question: 'Is the certification recognised?',
    answer:
      'Certification is awarded on real project completion and skill validation — not attendance. KHDA accreditation via the Dubai Government is on the roadmap.',
  },
] as const
