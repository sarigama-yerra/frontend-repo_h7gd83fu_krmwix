import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section id="contact" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(500px_200px_at_50%_0%,rgba(99,102,241,0.08),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-8 sm:p-12 backdrop-blur-sm flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">Ready to build your first agent?</h3>
            <p className="mt-2 text-white/70">Spin up a prototype in minutes. No credit card required.</p>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-slate-900">
              Create account
              <ArrowRight size={18} />
            </a>
            <a href="#" className="rounded-xl border border-white/20 px-6 py-3 text-white/90 hover:bg-white/5">Book demo</a>
          </div>
        </div>
      </div>
    </section>
  )
}
