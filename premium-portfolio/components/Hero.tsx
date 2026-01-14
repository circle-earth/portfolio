'use client'
import FadeUp from './FadeUp'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative">
      <FadeUp>
        <div className="max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-semibold mb-6">
            High-Performance Web Experiences<br />That Convert
          </h1>

          <p className="text-lg md:text-xl text-muted mb-10">
            I help businesses turn complex ideas into fast, scalable,
            revenue-driven digital products.
          </p>

          <div className="flex justify-center gap-4">
            <a
              href="#work"
              className="px-6 py-3 bg-accent rounded-xl text-white font-medium hover:scale-[1.03] transition"
            >
              View Selected Work
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border border-white/20 rounded-xl hover:bg-white/5 transition"
            >
              Start a Project →
            </a>
          </div>
        </div>
      </FadeUp>

      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-500/10 to-transparent blur-3xl" />
    </section>
  )
}