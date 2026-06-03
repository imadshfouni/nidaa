import type { LucideIcon } from 'lucide-react'
import {
  Award,
  BarChart3,
  Brain,
  Briefcase,
  Compass,
  Eye,
  HeartHandshake,
  Lightbulb,
  LineChart,
  Rocket,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react'

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Method', href: '#method' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
] as const

export const hero = {
  headline: 'Build Your Next Level with Nidaa Ryweck',
  subheadline:
    'Nidaa Ryweck is a business coach, entrepreneur, and visionary leader helping ambitious people gain clarity, build confidence, and turn ideas into meaningful growth.',
  ctaPrimary: 'Work With Nidaa Ryweck',
  ctaInstagram: 'Follow on Instagram',
  badges: ['Business Coach', 'Entrepreneur', 'Visionary Leader'] as const,
}

export const about = {
  title: 'Meet Nidaa Ryweck',
  paragraphs: [
    'Nidaa Ryweck partners with entrepreneurs, founders, and professionals who refuse to settle for confusion, hesitation, or small thinking. As a business coach and entrepreneur, she understands what it takes to build with intention — and the mindset required to lead through pressure and opportunity.',
    'Her work blends strategic clarity with confidence-building coaching, helping clients define what matters, make decisive moves, and grow businesses aligned with their vision. She guides people to turn ideas into action and ambition into measurable progress.',
    'Whether you are launching, scaling, or stepping into a new chapter of leadership, Nidaa Ryweck offers a premium partnership built on trust, perspective, and transformation that lasts.',
  ],
  quote: 'Growth starts when clarity meets action.',
  highlights: [
    { title: 'Business Coaching', description: 'Strategic guidance for decisions, growth, and execution.' },
    { title: 'Entrepreneurial Mindset', description: 'Build resilience, focus, and ownership at every stage.' },
    { title: 'Visionary Leadership', description: 'Lead with purpose, presence, and long-term impact.' },
  ],
} as const

export const brandStatement =
  'Nidaa Ryweck’s mission is to guide ambitious individuals toward clarity, confidence, and meaningful success.'

export type Service = {
  title: string
  description: string
  icon: LucideIcon
}

export const services: Service[] = [
  {
    title: 'Business Coaching',
    description:
      'Refine your priorities, offers, and growth strategy with a coach who understands the founder journey.',
    icon: Briefcase,
  },
  {
    title: 'Leadership Development',
    description:
      'Strengthen how you lead teams, conversations, and high-stakes decisions with calm authority.',
    icon: Users,
  },
  {
    title: 'Mindset & Confidence',
    description:
      'Release self-doubt, build inner stability, and show up with the confidence your vision demands.',
    icon: Brain,
  },
  {
    title: 'Entrepreneurial Strategy',
    description:
      'Structure your next moves — from market positioning to execution plans that compound results.',
    icon: Rocket,
  },
  {
    title: 'Brand Vision & Clarity',
    description:
      'Align your personal brand and business narrative with the impact you are here to create.',
    icon: Eye,
  },
  {
    title: 'Goal Setting & Accountability',
    description:
      'Transform ambition into focused milestones with consistent support and honest accountability.',
    icon: Target,
  },
]

export const methodSteps = [
  {
    step: '01',
    title: 'Clarity',
    description:
      'Define your vision, values, and non-negotiables so every decision moves you toward what matters.',
    icon: Eye,
  },
  {
    step: '02',
    title: 'Strategy',
    description:
      'Build a focused roadmap with priorities, resources, and milestones designed for real-world results.',
    icon: LineChart,
  },
  {
    step: '03',
    title: 'Mindset',
    description:
      'Strengthen belief, emotional discipline, and leadership identity to sustain momentum under pressure.',
    icon: Brain,
  },
  {
    step: '04',
    title: 'Action',
    description:
      'Move from planning to execution with weekly accountability and practical next steps.',
    icon: Zap,
  },
  {
    step: '05',
    title: 'Growth',
    description:
      'Measure progress, refine your approach, and scale outcomes with confidence and purpose.',
    icon: TrendingUp,
  },
]

export const whyWorkWith = [
  {
    title: 'Personalized guidance',
    description: 'Coaching shaped around your goals, industry, and season — never generic scripts.',
    icon: HeartHandshake,
  },
  {
    title: 'Clear strategy',
    description: 'Cut through overwhelm with priorities and plans you can act on immediately.',
    icon: Compass,
  },
  {
    title: 'Real business perspective',
    description: 'Insights from someone who builds, leads, and understands entrepreneurial reality.',
    icon: BarChart3,
  },
  {
    title: 'Confidence-building coaching',
    description: 'Develop the inner steadiness to lead, pitch, negotiate, and decide with conviction.',
    icon: Award,
  },
  {
    title: 'Practical action steps',
    description: 'Every session ends with clarity on what to do next — not inspiration without execution.',
    icon: Lightbulb,
  },
  {
    title: 'Vision-driven transformation',
    description: 'Align daily work with a bigger purpose so growth feels meaningful and sustainable.',
    icon: Sparkles,
  },
]

export type Testimonial = {
  quote: string
  name: string
  role: string
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'Working with Nidaa Ryweck gave me the structure I was missing. Within a month I had a clearer offer, stronger boundaries, and the confidence to raise my prices without second-guessing myself.',
    name: 'Client Name',
    role: 'Founder',
  },
  {
    quote:
      'She doesn’t just motivate — she strategizes. Nidaa helped me reorganize my priorities, delegate with intention, and lead my team from a place of calm authority instead of constant firefighting.',
    name: 'Client Name',
    role: 'Entrepreneur',
  },
  {
    quote:
      'The Nidaa Method changed how I approach my business. Clarity, mindset, action — it all connected. I finally feel like I am building something aligned with who I am and where I want to go.',
    name: 'Client Name',
    role: 'Founder',
  },
]

export const instagramSection = {
  title: 'Follow Nidaa Ryweck’s Journey',
  text: 'Get daily inspiration, business insights, mindset guidance, and behind-the-scenes moments from Nidaa Ryweck’s journey.',
  button: 'Follow Nidaa Ryweck on Instagram',
} as const

export const finalCta = {
  headline: 'Ready to Step Into Your Next Level?',
  text: 'Start your journey with Nidaa Ryweck and discover the clarity, confidence, and strategy you need to grow.',
  primary: 'Book a Session',
  secondary: 'Contact Nidaa Ryweck',
} as const
