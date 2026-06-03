import type { LucideIcon } from 'lucide-react'
import {
  Award,
  BarChart3,
  Brain,
  Briefcase,
  Compass,
  Eye,
  Flag,
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
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Approach', href: '#approach' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
] as const

export const hero = {
  headline:
    'Empowering Leaders, Entrepreneurs, and Dreamers to Build Their Next Level',
  subheadline:
    'Nidaa is a business coach, entrepreneur, and visionary dedicated to helping individuals unlock clarity, confidence, and strategic growth.',
  ctaPrimary: 'Work With Nidaa',
  ctaSecondary: 'Discover Her Story',
} as const

export const aboutRoles = [
  'Business Coach',
  'Entrepreneur',
  'Visionary',
  'Mentor',
] as const

export const aboutParagraphs = [
  'With a deep belief that leadership begins within, Nidaa partners with ambitious professionals and founders who are ready to move from vision to execution. Her work blends strategic clarity with the mindset shifts required to lead with confidence in competitive markets.',
  'As an entrepreneur herself, she understands the pressure of building something meaningful — and the discipline it takes to grow with purpose. She helps clients turn ideas into action, strengthen decision-making, and build businesses aligned with their values.',
  'Whether you are scaling a venture, stepping into leadership, or redefining your next chapter, Nidaa offers a grounded, visionary partnership designed for lasting transformation.',
] as const

export const missionVision = {
  mission:
    'To guide ambitious individuals and entrepreneurs toward clarity, growth, and meaningful success.',
  vision:
    'To inspire a new generation of leaders who think bigger, act with confidence, and build impactful businesses.',
} as const

export type Service = {
  title: string
  description: string
  icon: LucideIcon
}

export const services: Service[] = [
  {
    title: 'Business Coaching',
    description:
      'Strategic guidance to refine your model, priorities, and growth plan with clarity and confidence.',
    icon: Briefcase,
  },
  {
    title: 'Personal Growth & Mindset',
    description:
      'Break through limiting beliefs and build the resilience to lead through change and uncertainty.',
    icon: Brain,
  },
  {
    title: 'Leadership Development',
    description:
      'Strengthen your presence, communication, and decision-making as a leader people trust.',
    icon: Users,
  },
  {
    title: 'Entrepreneurial Strategy',
    description:
      'From idea to execution — structure your vision, offers, and roadmap for sustainable growth.',
    icon: Rocket,
  },
  {
    title: 'Brand & Vision Clarity',
    description:
      'Align your personal brand and business narrative with the impact you want to create.',
    icon: Eye,
  },
  {
    title: 'Goal Setting & Accountability',
    description:
      'Turn ambition into measurable milestones with focused support and consistent follow-through.',
    icon: Target,
  },
]

export const benefits = [
  {
    title: 'Clear strategic direction',
    description:
      'Cut through noise with priorities, plans, and decisions rooted in your long-term vision.',
    icon: Compass,
  },
  {
    title: 'Personalized coaching approach',
    description:
      'Sessions tailored to your goals, industry, and stage — never one-size-fits-all templates.',
    icon: HeartHandshake,
  },
  {
    title: 'Entrepreneurial mindset',
    description:
      'Think like a builder: resourceful, adaptive, and focused on opportunities that compound.',
    icon: Lightbulb,
  },
  {
    title: 'Practical business guidance',
    description:
      'Actionable frameworks you can apply immediately — not theory without implementation.',
    icon: BarChart3,
  },
  {
    title: 'Confidence & leadership growth',
    description:
      'Develop the inner steadiness and outer presence to lead teams and conversations with impact.',
    icon: Award,
  },
  {
    title: 'Vision-driven transformation',
    description:
      'Align daily actions with a bigger purpose so growth feels meaningful, not mechanical.',
    icon: Sparkles,
  },
]

export const approachSteps = [
  {
    step: '01',
    title: 'Clarity',
    description:
      'Define what success looks like — values, vision, and the priorities that matter most right now.',
    icon: Eye,
  },
  {
    step: '02',
    title: 'Strategy',
    description:
      'Design a focused plan with milestones, resources, and decisions that support your next level.',
    icon: LineChart,
  },
  {
    step: '03',
    title: 'Action',
    description:
      'Move from planning to doing with accountability, momentum, and practical weekly execution.',
    icon: Zap,
  },
  {
    step: '04',
    title: 'Growth',
    description:
      'Measure progress, refine tactics, and expand capacity as results and confidence compound.',
    icon: TrendingUp,
  },
  {
    step: '05',
    title: 'Transformation',
    description:
      'Integrate new habits, leadership identity, and business outcomes that last beyond the program.',
    icon: Flag,
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
      'Nidaa helped me see my business with fresh eyes. Within weeks I had a clearer offer, stronger messaging, and the confidence to pitch to partners I had been avoiding for months.',
    name: 'Sarah M.',
    role: 'Founder, Wellness Studio',
  },
  {
    quote:
      'Her coaching is direct and compassionate. I stopped overthinking every decision and started leading my team with a calm, strategic mindset that my staff immediately noticed.',
    name: 'James K.',
    role: 'Operations Director',
  },
  {
    quote:
      'Working with Nidaa was the turning point in my entrepreneurial journey. She blends mindset work with real business strategy — exactly what I needed to scale with purpose.',
    name: 'Layla H.',
    role: 'E-commerce Entrepreneur',
  },
]

export const ctaSection = {
  headline: 'Ready to Build Your Next Level?',
  text: 'Start your journey with Nidaa and take the next step toward clarity, confidence, and growth.',
  button: 'Book a Session',
} as const
