import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.25),transparent_60%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-40 pb-24">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_0_30px_rgba(168,85,247,.25)]"
          >
            Build agentic AI experiences
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-6 text-lg sm:text-xl text-white/80"
          >
            Launch voice and task-driven AI agents with a beautiful developer experience and production-grade reliability.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <a href="#" className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-slate-900 font-semibold shadow-sm hover:bg-slate-100">
              Start free
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-3 text-white/90 hover:bg-white/5">
              See features
            </a>
          </motion.div>

          <div className="mt-12 flex items-center justify-center gap-6 text-white/60">
            <span className="text-xs">SOC2-ready</span>
            <span className="text-xs">99.9% uptime</span>
            <span className="text-xs">GDPR compliant</span>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-60 bg-gradient-to-t from-slate-950 to-transparent" />
    </section>
  )
}
