import { motion } from 'framer-motion'
import { Mail, MessageCircle } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { InstagramIcon } from '@/components/ui/SocialIcons'
import {
  BOOK_SESSION_URL,
  EMAIL,
  INSTAGRAM_URL,
  WHATSAPP_URL,
} from '@/config/site'
import { Button } from '@/components/ui/Button'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { InstagramLink } from '@/components/ui/InstagramLink'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="section-padding bg-cream-dark">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Connect"
          title="Get in Touch"
          description="Share your goals and Nidaa will respond with next steps for coaching or a discovery conversation."
        />

        <div className="grid gap-12 lg:grid-cols-5">
          <ScrollReveal className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="glass-light space-y-5 p-8 sm:p-10"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-navy">Name</span>
                  <input
                    required
                    name="name"
                    type="text"
                    className="w-full rounded-xl border border-navy/10 bg-white/80 px-4 py-3 text-navy outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20"
                    placeholder="Your name"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-navy">Email</span>
                  <input
                    required
                    name="email"
                    type="email"
                    className="w-full rounded-xl border border-navy/10 bg-white/80 px-4 py-3 text-navy outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20"
                    placeholder="you@email.com"
                  />
                </label>
              </div>
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-navy">Phone</span>
                <input
                  name="phone"
                  type="tel"
                  className="w-full rounded-xl border border-navy/10 bg-white/80 px-4 py-3 text-navy outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20"
                  placeholder="+1 (000) 000-0000"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-navy">Message</span>
                <textarea
                  required
                  name="message"
                  rows={5}
                  className="w-full resize-y rounded-xl border border-navy/10 bg-white/80 px-4 py-3 text-navy outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20"
                  placeholder="Tell Nidaa about your goals..."
                />
              </label>
              {submitted ? (
                <p className="rounded-xl bg-gold/15 px-4 py-3 text-sm font-medium text-gold-dark">
                  Thank you — your message is ready to send. Connect this form to your email
                  service or backend when you go live.
                </p>
              ) : (
                <Button type="submit" variant="primary" className="w-full sm:w-auto">
                  Send Message
                </Button>
              )}
            </form>
          </ScrollReveal>

          <ScrollReveal delay={0.15} className="lg:col-span-2">
            <div className="space-y-6">
              <div className="glass-light p-8">
                <h3 className="font-display text-xl font-semibold text-navy">Direct Contact</h3>
                <ul className="mt-6 space-y-4">
                  <li>
                    <a
                      href={`mailto:${EMAIL}`}
                      className="inline-flex items-center gap-3 text-charcoal/80 transition hover:text-gold-dark"
                    >
                      <Mail size={20} className="text-gold-dark" />
                      {EMAIL}
                    </a>
                  </li>
                  <li>
                    <InstagramLink
                      showLabel
                      label="@USERNAME on Instagram"
                      className="text-charcoal/80 hover:text-gold-dark"
                    />
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-3">
                <Button variant="secondary" href={BOOK_SESSION_URL}>
                  Book a Session
                </Button>
                <Button
                  variant="outline"
                  href={WHATSAPP_URL}
                  external
                  className="w-full"
                >
                  <MessageCircle size={18} />
                  WhatsApp
                </Button>
                <Button variant="instagram" href={INSTAGRAM_URL} external className="w-full">
                  <InstagramIcon size={18} />
                  Follow Nidaa on Instagram
                </Button>
              </div>

              <motion.p
                className="text-sm text-charcoal/55"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                Update email, WhatsApp, and Instagram URLs in{' '}
                <code className="rounded bg-white/80 px-1 text-xs">src/config/site.ts</code>
              </motion.p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
