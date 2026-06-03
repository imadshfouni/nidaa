import { motion } from 'framer-motion'
import { instagramSection } from '@/data/content'
import { INSTAGRAM_URL } from '@/config/site'
import { Button } from '@/components/ui/Button'
import { InstagramIcon } from '@/components/ui/SocialIcons'

export function InstagramSection() {
  return (
    <section className="section-padding bg-ivory">
      <div className="container-luxury px-5 lg:px-14">
        <motion.div
          className="relative overflow-hidden rounded-3xl border border-gold/25 bg-gradient-to-br from-cream via-ivory to-beige/40 px-8 py-16 text-center sm:px-14 sm:py-20"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold/15 blur-3xl" />
          <p className="eyebrow mb-4">Connect</p>
          <h2 className="font-display relative text-3xl font-semibold text-navy sm:text-4xl">
            {instagramSection.title}
          </h2>
          <p className="relative mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {instagramSection.text}
          </p>
          <div className="relative mt-10">
            <Button variant="instagram" href={INSTAGRAM_URL} external>
              <InstagramIcon size={18} />
              {instagramSection.button}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
