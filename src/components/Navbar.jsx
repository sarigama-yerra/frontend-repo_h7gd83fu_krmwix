import { Menu, Sparkles } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { label: 'Product', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Docs', href: '#docs' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-md px-4 py-3">
          <a href="#" className="inline-flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-amber-400 text-white shadow-[0_0_30px_rgba(168,85,247,.35)]">
              <Sparkles size={18} />
            </span>
            <div className="leading-tight">
              <p className="text-white font-semibold tracking-tight">AuraAgent</p>
              <p className="text-[11px] text-white/60 -mt-0.5">Agentic AI Platform</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {links.map(l => (
              <a key={l.label} href={l.href} className="text-sm text-white/70 hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="text-sm text-white/70 hover:text-white">Sign in</a>
            <a href="#" className="inline-flex items-center gap-2 rounded-xl bg-white text-slate-900 px-4 py-2 text-sm font-semibold shadow-sm hover:bg-slate-100 transition-colors">
              Start free
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-white/80">
            <Menu size={18} />
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-2 rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur-md p-3">
            <div className="grid gap-1">
              {links.map(l => (
                <a key={l.label} href={l.href} className="rounded-lg px-3 py-2 text-sm text-white/80 hover:bg-white/5">
                  {l.label}
                </a>
              ))}
              <div className="mt-2 flex gap-2">
                <a href="#" className="flex-1 rounded-lg border border-white/10 px-3 py-2 text-center text-sm text-white/80">Sign in</a>
                <a href="#" className="flex-1 rounded-lg bg-white px-3 py-2 text-center text-sm font-semibold text-slate-900">Start free</a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
