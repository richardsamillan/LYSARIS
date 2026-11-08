import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CalendarClock,
  CreditCard,
  Truck,
  X,
  Info,
  ChevronRight,
} from "lucide-react";

const cards = [
  {
    id: 1,
    icon: CalendarClock,
    title: "Cómo agendar",
    subtitle: "Revisa las condiciones antes de realizar tu pago",
    badge: "Paso 01",
    text: "Se requiere un anticipo del 50%, sin excepción. El saldo se liquida el 19 de septiembre o un día antes de la entrega. Por temporada alta no se aceptan pedidos personalizados.",
    details: [
      "Anticipo del 50% obligatorio para reserva de fecha.",
      "Liquidación final máximo 1 día antes o el 19 de Septiembre.",
      "Diseños estandarizados para asegurar máxima calidad en fechas clave.",
    ],
  },
  {
    id: 2,
    icon: CreditCard,
    title: "Métodos de pago",
    subtitle: "Opciones directas y seguras en Perú",
    badge: "Paso 02",
    text: "Aceptamos Yape, Plin y transferencias. Pago con tarjeta vía Mercado Pago. No manejamos reembolsos. Yape/Plin: +51 936 716 909, a nombre de Bruno Salazar.",
    details: [
      "Yape / Plin: +51 936 716 909 (Titular: Bruno Salazar).",
      "Aceptamos tarjetas de crédito y débito vía Mercado Pago.",
      "No se realizan reembolsos una vez procesado el pedido.",
    ],
  },
  {
    id: 3,
    icon: Truck,
    title: "Envíos y Entregas",
    subtitle: "Cobertura en Lima y provincia",
    badge: "Paso 03",
    text: "Enviamos a Lima norte, centro, sur y Callao. Tolerancia de 10 minutos; pasado ese tiempo se cobra mora y, tras 15 min, el motorizado cancela la entrega (se vuelve a cobrar el envío).",
    details: [
      "Cobertura: Lima Norte, Centro, Sur y Callao.",
      "Tolerancia de espera en dirección: 10 minutos.",
      "A partir del minuto 15 el motorizado reprograma con costo de envío adicional.",
    ],
  },
];

export default function InfoSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleNext = (index) => {
    if (index === activeIndex) {
      setActiveIndex((prev) => (prev + 1) % cards.length);
    }
  };

  // Avance automático en móvil, cada 6 segundos.
  // Se pausa mientras el modal de detalles está abierto, para no
  // cambiar la tarjeta mientras el usuario está leyendo algo.
  useEffect(() => {
    if (selectedCard) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cards.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [selectedCard]);

  return (
    <section
      id="info"
      className="bg-cream2 py-20 px-6 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Encabezado */}
        <div className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-ink">
            Antes de pedir tu ramo
          </h2>
          <div className="inline-flex items-center gap-2 mt-4 bg-ink text-cream text-sm font-medium px-4 py-2 rounded-full shadow-sm">
            <span className="w-2 h-2 rounded-full bg-honey animate-pulse" />
            Cerramos pedidos el 19 de septiembre
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* VISTA DESKTOP (Grid de 3 Tarjetas interactivo)                */}
        {/* Se activa desde breakpoint md (768px en adelante)             */}
        {/* ------------------------------------------------------------- */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card) => (
            <motion.div
              key={card.id}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              onClick={() => setSelectedCard(card)}
              className="bg-paper border border-ink/10 rounded-3xl p-7 shadow-lg hover:shadow-xl transition-shadow cursor-pointer flex flex-col justify-between group relative overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-honeyDeep bg-honey/15 px-3 py-1 rounded-full">
                    {card.badge}
                  </span>
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-full bg-honey/15 flex items-center justify-center text-honeyDeep group-hover:bg-honeyDeep group-hover:text-paper transition-colors">
                    <card.icon size={22} strokeWidth={1.8} />
                  </div>
                  <h3 className="font-display font-bold text-xl text-ink">
                    {card.title}
                  </h3>
                </div>

                <p className="text-sm text-ink/75 leading-relaxed mb-6">
                  {card.text}
                </p>
              </div>

              <div className="pt-4 border-t border-ink/10 flex items-center justify-between text-xs font-semibold text-honeyDeep group-hover:text-ink transition-colors">
                <span>Ver detalles completos</span>
                <ChevronRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* ------------------------------------------------------------- */}
        {/* VISTA MÓVIL (Stacked Card Slider 3D)                          */}
        {/* Se muestra solo en pantallas pequeñas (debajo de md)          */}
        {/* ------------------------------------------------------------- */}
        <div className="block md:hidden">
          <div className="max-w-md mx-auto h-[300px] relative flex items-center justify-center">
            {cards.map((card, i) => {
              const offset = (i - activeIndex + cards.length) % cards.length;
              const isFront = offset === 0;

              return (
                <motion.div
                  key={card.id}
                  className="absolute w-full bg-paper border border-ink/10 rounded-3xl p-7 shadow-xl cursor-pointer select-none flex flex-col justify-between"
                  style={{
                    zIndex: cards.length - offset,
                  }}
                  animate={{
                    top: offset * 16,
                    scale: 1 - offset * 0.05,
                    opacity: offset > 2 ? 0 : 1 - offset * 0.2,
                  }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() =>
                    isFront ? setSelectedCard(card) : handleNext(i)
                  }
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-honeyDeep bg-honey/15 px-3 py-1 rounded-full">
                        {card.badge}
                      </span>
                      <span className="text-xs text-ink/40 font-mono">
                        Toca para abrir
                      </span>
                    </div>

                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-honey/15 flex items-center justify-center text-honeyDeep">
                        <card.icon size={20} strokeWidth={1.8} />
                      </div>
                      <h3 className="font-display font-bold text-xl text-ink">
                        {card.title}
                      </h3>
                    </div>

                    <p className="text-sm text-ink/70 leading-relaxed line-clamp-4">
                      {card.text}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-ink/10 flex items-center justify-between text-xs font-semibold text-ink/80">
                    <span>Ver detalles completos</span>
                    <Info size={16} className="text-honeyDeep" />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Indicadores de puntos para Móvil */}
          <div className="flex justify-center gap-2 mt-4">
            {cards.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  activeIndex === idx ? "w-8 bg-honeyDeep" : "w-2.5 bg-ink/20"
                }`}
                aria-label={`Ir a tarjeta ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* MODAL DETALLADO (Funciona para ambos: Móvil y PC)              */}
      {/* ------------------------------------------------------------- */}
      <AnimatePresence>
        {selectedCard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-ink/60 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedCard(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-paper border border-ink/10 rounded-3xl p-6 md:p-8 max-w-lg w-full shadow-2xl relative overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedCard(null)}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-ink/5 hover:bg-ink/10 flex items-center justify-center text-ink transition-colors"
              >
                <X size={18} />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-honey/15 flex items-center justify-center text-honeyDeep">
                  <selectedCard.icon size={24} />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-honeyDeep">
                    {selectedCard.badge}
                  </span>
                  <h3 className="font-display font-bold text-2xl text-ink">
                    {selectedCard.title}
                  </h3>
                </div>
              </div>

              <p className="text-sm text-ink/80 leading-relaxed mb-6">
                {selectedCard.text}
              </p>

              <div className="bg-cream2 p-4 rounded-2xl border border-ink/5">
                <h4 className="font-semibold text-xs text-ink/50 uppercase tracking-wider mb-2">
                  Puntos Clave
                </h4>
                <ul className="space-y-2 text-sm text-ink/80">
                  {selectedCard.details.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-honeyDeep mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
