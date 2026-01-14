'use client'
import FadeUp from './FadeUp'

export default function CTA() {
  return (
    <section id="contact" className="py-24 px-6 text-center">
      <FadeUp>
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          Have a project in mind?
        </h2>
        <p className="text-muted mb-8">
          Let’s build something exceptional.
        </p>
        <a
          href="mailto:hello@example.com"
          className="px-8 py-4 bg-accent rounded-xl text-white font-medium hover:scale-[1.03] transition"
        >
          Start a Conversation →
        </a>
      </FadeUp>
    </section>
  )
}