import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useRef, useState, useEffect } from "react";

// Anima letra por letra con blur, agrupando cada palabra en un bloque
// indivisible (whitespace-nowrap) para que el salto de línea nunca
// corte a mitad de palabra.
function BlurInText({ text = "", className = "", delayOffset = 0 }) {
  const words = text.split(" ");
  let charCount = 0;

  return (
    <span className={`inline-block ${className}`}>
      {words.map((word, wi) => (
        <span
          key={wi}
          className="inline-block whitespace-nowrap mr-[0.25em] last:mr-0"
        >
          {word.split("").map((char, ci) => {
            const delay = delayOffset + charCount * 0.05;
            charCount++;
            return (
              <motion.span
                key={ci}
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ delay, duration: 0.8, ease: "easeOut" }}
                className="inline-block"
              >
                {char}
              </motion.span>
            );
          })}
        </span>
      ))}
    </span>
  );
}

// Imágenes del carrusel. Agrega las que quieras, en orden.
const heroImages = ["/images/ramos2.png", "/images/ramosportadas2.png"];

const SLIDE_DURATION = 6000; // ms que cada foto se queda en pantalla

// Fondo del hero, foto completa — funciona igual en mobile y desktop,
// solo cambia cómo se ajusta la imagen en cada tamaño (ver clases bg-*)
function HeroBg({ index }) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <AnimatePresence mode="sync">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.0 }}
          animate={{ opacity: 1, scale: 1.04 }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: 1.4, ease: "easeInOut" },
            scale: { duration: SLIDE_DURATION / 1000 + 1.4, ease: "linear" },
          }}
          //tamaño de la umagen
          className="absolute inset-0 bg-cover md:bg-[length:45%_auto] bg-no-repeat bg-[position:center_28%] md:bg-[position:90%_100%]"
          style={{ backgroundImage: `url(${heroImages[index]})` }}
        />
      </AnimatePresence>
    </div>
  );
}

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (heroImages.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % heroImages.length);
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, []);

  // Mouse Spotlight
  const mx = useMotionValue(50);
  const my = useMotionValue(40);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set(((e.clientX - rect.left) / rect.width) * 100);
    my.set(((e.clientY - rect.top) / rect.height) * 100);
  }

  const line1 = "Flores frescas,";
  const line2 = "para cada momento";

  return (
    <section
      id="top"
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative h-[100svh] min-h-[640px] overflow-hidden bg-ink grain flex items-center"
    >
      {/* 1. Fondo de foto — ahora a pantalla completa en ambos tamaños */}
      <HeroBg index={index} />

      {/* 2a. Overlay para desktop: oscuro a la izquierda (texto), claro a la derecha (foto) */}
      <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-transparent w-full md:w-[70%]" />
      <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-80" />

      {/* 2b. Overlay para mobile: oscuro arriba (texto) y abajo (botón), foto visible en el medio */}
      <div className="md:hidden absolute inset-0 bg-gradient-to-b from-ink via-ink/35 to-ink" />
      <div className="md:hidden absolute inset-0 bg-gradient-to-b from-ink/95 via-transparent to-transparent h-1/3" />

      {/* 3. Spotlight sutil interactivo */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background: useTransform(
            [sx, sy],
            ([x, y]) =>
              `radial-gradient(500px circle at ${x}% ${y}%, rgba(245,197,66,0.12), transparent 70%)`,
          ),
        }}
      />

      {/* 4. Bloque de contenido */}
      <motion.div
        style={{ opacity }}
        className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-12 md:px-16 flex flex-col items-start"
      >
        <h1 className="font-display font-bold text-4xl sm:text-7xl lg:text-8xl leading-[1.05] md:leading-[0.98] max-w-3xl">
          <BlurInText
            text={line1}
            className="block text-paper"
            delayOffset={0.1}
          />
          <BlurInText
            text={line2}
            className="block text-honey"
            delayOffset={0.1 + line1.replace(/ /g, "").length * 0.05}
          />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 md:mt-6 text-paper/80 text-sm sm:text-lg max-w-md font-light leading-relaxed drop-shadow"
        >
          Ramos y arreglos hechos a mano en Lysaris, con entrega el mismo día en
          Lima.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.45, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 md:mt-10"
        >
          <a
            href="https://wa.me/51937111149"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 md:gap-3 bg-honey text-ink font-semibold px-6 md:px-8 py-3.5 md:py-4 rounded-full overflow-hidden shadow-lg shadow-honey/20 hover:shadow-honey/40 transition-shadow duration-300"
          >
            <span className="relative z-10 text-sm md:text-base">Agenda tu pedido</span>
            <span className="relative z-10 text-ink/70 font-mono text-xs md:text-sm">
              +51 937 111 149
            </span>
            <span className="absolute inset-0 bg-paper origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}