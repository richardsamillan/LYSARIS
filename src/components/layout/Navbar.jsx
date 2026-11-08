import { useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { MessageCircle, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();

  // 1. Transición de fondo
  const bg = useTransform(
    scrollY,
    [0, 80],
    ["rgba(244,237,220,0.2)", "rgba(255,253,248,0.85)"],
  );
  const shadow = useTransform(
    scrollY,
    [0, 80],
    ["0 0 0 rgba(0,0,0,0)", "0 8px 24px rgba(43,36,16,0.10)"],
  );

  // 2. Transición del color de texto e iconos
  const textColor = useTransform(
    scrollY,
    [0, 80],
    ["rgba(255, 253, 248, 0.95)", "rgba(43, 36, 16, 0.85)"],
  );

  const links = [
    { href: "#info", label: "Información" },
    { href: "#xpress", label: "Productos más vendidos" },
    { href: "#categoria", label: "Catálogo" },
    { href: "#contactanos", label: "Contáctanos" },
  ];

  return (
    <motion.header
      style={{ backgroundColor: bg, boxShadow: shadow }}
      className="fixed top-0 inset-x-0 z-50 backdrop-blur-md transition-colors"
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-2">
          <svg width="22" height="22" viewBox="0 0 40 40">
            <g fill="#C9941F">
              {Array.from({ length: 8 }).map((_, i) => (
                <ellipse
                  key={i}
                  cx="20"
                  cy="8"
                  rx="4"
                  ry="8"
                  transform={`rotate(${45 * i} 20 20)`}
                />
              ))}
            </g>
            <circle cx="20" cy="20" r="8" fill="#B8541A" />
          </svg>
          <span className="font-script text-2xl text-honeyDeep drop-shadow-sm">
            Lysaris
          </span>
        </a>

        {/* Enlaces de escritorio */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          {links.map((l) => (
            <li key={l.href} className="relative group">
              <motion.a
                href={l.href}
                style={{ color: textColor }}
                className="transition-colors hover:opacity-100"
              >
                {l.label}
              </motion.a>
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-honeyDeep transition-all duration-300 group-hover:w-full" />
            </li>
          ))}
        </ul>

        {/* Acciones para Escritorio y Móvil */}
        <div className="flex items-center gap-3">
          {/* Botón CTA (WhatsApp) */}
          <a
            href="https://wa.me/51937111149"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-honey hover:bg-honeyDeep text-ink text-sm font-semibold px-4 py-2 rounded-full transition-colors shadow-sm"
          >
            <MessageCircle size={16} />
            <span className="hidden sm:inline">Escríbenos</span>
          </a>

          {/* Botón Menú Hamburguesa (Solo Móvil) */}
          <motion.button
            style={{ color: textColor }}
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 md:hidden focus:outline-none"
            aria-label="Abrir menú"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </nav>

      {/* Menú Desplegable Móvil */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay oscuro detrás del menú */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden bg-[#FFFDF8]/95 backdrop-blur-lg border-b border-[#2B2410]/10 overflow-hidden relative z-50 shadow-xl"
            >
              <ul className="flex flex-col px-6 py-4 gap-4 text-base font-medium text-[#2B2410]">
                {links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={() => setIsOpen(false)}
                      className="block py-1 hover:text-honeyDeep transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
