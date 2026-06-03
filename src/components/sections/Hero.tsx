import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { hero } from '@/data/content'
import { BOOK_SESSION_URL, INSTAGRAM_URL } from '@/config/site'
import { Button } from '@/components/ui/Button'
import { PortraitImage } from '@/components/ui/PortraitImage'
import { InstagramIcon } from '@/components/ui/SocialIcons'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-navy pt-28 pb-20 lg:pt-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_20%_30%,rgba(196,165,116,0.14),transparent_55%)]" />
      <div className="absolute -right-40 top-20 h-[32rem] w-[32rem] rounded-full bg-gold/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-ivory to-transparent" />

      <div className="container-luxury relative grid items-center gap-14 px-5 lg:grid-cols-2 lg:gap-20 lg:px-14">
        <motion.div
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow mb-6 text-gold-light">Nidaa Ryweck</p>
          <h1 className="font-display max-w-xl text-[2.5rem] font-semibold leading-[1.08] tracking-tight text-ivory sm:text-5xl lg:text-[3.5rem]">
            {hero.headline}
          </h1>
          <p className="mt-7 max-w-lg text-base leading-relaxed text-ivory/72 sm:text-lg">
            {hero.subheadline}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <Button variant="secondary" href={BOOK_SESSION_URL}>
              {hero.ctaPrimary}
              <ArrowRight size={18} />
            </Button>
            <Button
              variant="outline"
              href={INSTAGRAM_URL}
              external
              className="!border-ivory/25 !text-ivory hover:!border-gold hover:!bg-gold/10"
            >
              <InstagramIcon size={18} />
              {hero.ctaInstagram}
            </Button>
          </div>
        </motion.div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
          <PortraitImage variant="hero" />
          <div className="mt-6 flex flex-wrap justify-center gap-2 sm:absolute sm:inset-0 sm:mt-0 sm:block">
            {hero.badges.map((badge, i) => {
              const positions = [
                'sm:left-0 sm:top-10 sm:-translate-x-4',
                'sm:right-0 sm:top-[38%] sm:translate-x-4',
                'sm:bottom-16 sm:left-6 sm:translate-x-0',
              ]
              return (
                <motion.div
                  key={badge}
                  className={`glass-card-dark whitespace-nowrap px-4 py-2.5 text-[10px] font-semibold uppercase tracking-wider text-ivory sm:absolute sm:z-10 sm:text-[11px] ${positions[i]}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.15, duration: 0.5 }}
                >
                  {badge}
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
