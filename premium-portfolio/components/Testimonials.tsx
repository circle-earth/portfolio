'use client'
import FadeUp from './FadeUp'

export default function Testimonials() {
  return (
    <section className="py-24 px-6">
      <FadeUp>
        <blockquote className="max-w-3xl mx-auto text-center text-xl text-muted">
          “This wasn’t just development — it was strategic thinking.
          The website started selling for us.”
        </blockquote>
      </FadeUp>
    </section>
  )
}