import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(99,102,241,0.15),transparent)]" />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <CTA />
      </main>
      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-white/60">
          <p className="text-sm">© {new Date().getFullYear()} AuraAgent, Inc.</p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Security</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
