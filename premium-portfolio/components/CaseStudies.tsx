'use client'
import FadeUp from './FadeUp'

const cases = [
  {
    title: 'SaaS Landing Page Optimization',
    result: 'Conversion increased by 42%',
  },
  {
    title: 'Startup Website Rebuild',
    result: 'Load time reduced by 60%',
  },
]

export default function CaseStudies() {
  return (
    <section id="work" className="py-24 px-6">
      <FadeUp>
        <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">
          Selected Work
        </h2>
      </FadeUp>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {cases.map((item, i) => (
          <FadeUp key={i}>
            <div className="p-8 border border-white/10 rounded-2xl hover:border-accent/50 transition">
              <h3 className="text-xl font-medium mb-3">{item.title}</h3>
              <p className="text-muted">{item.result}</p>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  )
}