import { Bot, ShieldCheck, Workflow, Headphones } from 'lucide-react'

const features = [
  {
    icon: Bot,
    title: 'Agent Orchestration',
    desc: 'Compose tool-using agents with goals, memory, and secure permissions.',
  },
  {
    icon: Headphones,
    title: 'Voice Native',
    desc: 'Ultra-low latency streaming voice with neural TTS/STT and emotions.',
  },
  {
    icon: Workflow,
    title: 'Workflows & Tools',
    desc: 'Connect APIs, databases, and automations with a visual tool builder.',
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise Grade',
    desc: 'Audit trails, role-based access, rate limits, and observability.',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_50%_0%,rgba(168,85,247,0.08),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Everything you need to launch agents</h2>
          <p className="mt-4 text-white/70">Build, test, and scale in one platform designed for speed and safety.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-sm">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white">
                <f.icon size={18} />
              </div>
              <h3 className="mt-4 text-white font-semibold">{f.title}</h3>
              <p className="mt-2 text-white/70 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
