import { MessageCircle, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative bg-ink text-cream pt-20 pb-12 px-6 text-center overflow-hidden">
      <svg
        className="absolute top-0 left-0 w-full h-10 text-cream2"
        viewBox="0 0 1200 40"
        preserveAspectRatio="none"
        fill="currentColor"
      >
        <path d="M0,40 C300,0 900,0 1200,40 Z" />
      </svg>

      <span className="font-script text-4xl text-honey">Lysaris</span>
      <p className="mt-2 text-sm text-cream/60">Florería en Lima, Perú</p>

      <div className="flex items-center justify-center gap-4 mt-8">
        <a
          href="https://wa.me/51937111149"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-honey hover:bg-honeyDeep transition-colors text-ink font-semibold px-6 py-3 rounded-full"
        >
          <MessageCircle size={18} />
          WhatsApp
        </a>
        <a
          href="#"
          className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-cream/25 hover:border-honey hover:text-honey transition-colors"
          aria-label="Instagram"
        >
          <Instagram size={18} />
        </a>
      </div>

      <p className="mt-10 text-xs text-cream/45">
        Cerramos pedidos el 19 de septiembre. Agenda con anticipación 🌻
      </p>
    </footer>
  )
}
