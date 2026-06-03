import { Mail, MessageCircle } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { BOOK_SESSION_URL, BRAND_NAME, EMAIL, INSTAGRAM_URL, WHATSAPP_URL } from '@/config/site'
import { Button } from '@/components/ui/Button'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { InstagramIcon } from '@/components/ui/SocialIcons'

export function Contact() {
  const [sent, setSent] = useState(false)

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="section-padding bg-cream">
      <div className="container-luxury px-5 lg:px-14">
        <SectionHeading
          eyebrow="Contact"
          title={`Work With ${BRAND_NAME}`}
          description="Share your goals and take the first step toward clarity, confidence, and strategic growth."
        />

        <div className="grid gap-12 lg:grid-cols-5">
          <ScrollReveal className="lg:col-span-3">
            <form onSubmit={onSubmit} className="glass-card space-y-5 p-8 sm:p-10">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-navy">Name</span>
                  <input
                    required
                    name="name"
                    className="w-full rounded-xl border border-navy/10 bg-ivory px-4 py-3.5 outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20"
                    placeholder="Your name"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-navy">Email</span>
                  <input
                    required
                    type="email"
                    name="email"
                    className="w-full rounded-xl border border-navy/10 bg-ivory px-4 py-3.5 outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20"
                    placeholder="you@email.com"
                  />
                </label>
              </div>
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-navy">Phone</span>
                <input
                  name="phone"
                  type="tel"
                  className="w-full rounded-xl border border-navy/10 bg-ivory px-4 py-3.5 outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20"
                  placeholder="+1 (000) 000-0000"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-navy">Message</span>
                <textarea
                  required
                  name="message"
                  rows={5}
                  className="w-full resize-y rounded-xl border border-navy/10 bg-ivory px-4 py-3.5 outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20"
                  placeholder="Tell Nidaa Ryweck about your goals..."
                />
              </label>
              {sent ? (
                <p className="rounded-xl bg-gold/15 px-4 py-3 text-sm font-medium text-gold-dark">
                  Thank you. Connect this form to your email provider when you go live.
                </p>
              ) : (
                <Button type="submit" variant="primary">
                  Send Message
                </Button>
              )}
            </form>
          </ScrollReveal>

          <ScrollReveal delay={0.12} className="lg:col-span-2">
            <div className="glass-card h-full p-8 sm:p-10">
              <h3 className="font-display text-2xl font-semibold text-navy">Direct Contact</h3>
              <p className="mt-2 text-sm text-muted">Nidaa Ryweck — Business Coach & Entrepreneur</p>

              <ul className="mt-8 space-y-5">
                <li>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="flex items-center gap-3 text-muted transition hover:text-navy"
                  >
                    <Mail size={20} className="text-gold-dark" />
                    {EMAIL}
                  </a>
                </li>
                <li>
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted transition hover:text-navy"
                  >
                    <InstagramIcon size={20} className="text-gold-dark" />
                    @ryweckn on Instagram
                  </a>
                </li>
              </ul>

              <div className="mt-10 flex flex-col gap-3">
                <Button variant="secondary" href={BOOK_SESSION_URL}>
                  Book a Session
                </Button>
                <Button variant="outline" href={WHATSAPP_URL} external className="w-full">
                  <MessageCircle size={18} />
                  WhatsApp
                </Button>
                <Button variant="instagram" href={INSTAGRAM_URL} external className="w-full">
                  <InstagramIcon size={18} />
                  Follow on Instagram
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
