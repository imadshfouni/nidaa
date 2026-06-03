import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { InstagramIcon } from '@/components/ui/SocialIcons'
import { hero } from '@/data/content'
import { BOOK_SESSION_URL, INSTAGRAM_URL } from '@/config/site'
import { Button } from '@/components/ui/Button'
import { PortraitImage } from '@/components/ui/PortraitImage'

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden pt-28 pb-16 md:pt-32 md:pb-24"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-soft to-navy opacity-[0.97]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_20%,rgba(201,169,98,0.18),transparent)]" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream to-transparent" />

      <div className="container-wide relative grid items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow mb-6 text-gold-light">Business Coach · Entrepreneur · Visionary</p>
          <h1 className="font-display text-4xl font-semibold leading-[1.12] tracking-tight text-cream sm:text-5xl lg:text-[3.25rem]">
            {hero.headline}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/75 sm:text-lg">
            {hero.subheadline}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
            <Button variant="secondary" href={BOOK_SESSION_URL}>
              {hero.ctaPrimary}
              <ArrowRight size={18} />
            </Button>
            <Button variant="outline" href="#about" className="!border-cream/25 !text-cream hover:!border-gold hover:!bg-gold/10">
              {hero.ctaSecondary}
            </Button>
            <Button
              variant="instagram"
              href={INSTAGRAM_URL}
              external
              className="sm:ml-0"
            >
              <InstagramIcon size={18} />
              Follow Nidaa on Instagram
            </Button>
          </div>
        </motion.div>

        <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:ml-auto">
          <PortraitImage variant="hero" />
        </div>
      </div>
    </section>
  )
}
