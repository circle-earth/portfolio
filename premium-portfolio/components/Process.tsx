'use client'
import FadeUp from './FadeUp'

const steps = [
  'Discovery & Strategy',
  'UX & Architecture',
  'Development',
  'Launch & Optimization',
]

export default function Process() {
  return (
    <section className="py-24 px-6">
      <FadeUp>
        <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">
          How I Work
        </h2>
      </FadeUp>

      <div className="max-w-4xl mx-auto grid md:grid-cols-4 gap-6 text-center">
        {steps.map((step, i) => (
          <FadeUp key={i}>
            <div className="p-6 border border-white/10 rounded-xl">
              <span className="text-accent font-semibold">0{i + 1}</span>
              <p className="mt-2">{step}</p>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  )
}