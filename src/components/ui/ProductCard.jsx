import { useState } from 'react'
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

const defaultRoseImage = '/images/rosa1.png'

export default function ProductCard({
  image,
  name = "Producto",
  price = "S/ 0.00",
  description = "",
  features = [],
  featured = false
}) {
  const [showInfo, setShowInfo] = useState(false)

  const rx = useMotionValue(0)
  const ry = useMotionValue(0)

  const srx = useSpring(rx, { stiffness: 200, damping: 20 })
  const sry = useSpring(ry, { stiffness: 200, damping: 20 })

  function handleMove(e) {
    const rect = e.currentTarget.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    ry.set(px * 8)
    rx.set(-py * 8)
  }

  function handleLeave() {
    rx.set(0)
    ry.set(0)
  }

  const imageSrc = image || defaultRoseImage
  const hasFeatures = features.length > 0

  const whatsappHref = `https://wa.me/51937111149?text=${encodeURIComponent(
    `Hola, quiero pedir el ramo "${name}" (${price})`
  )}`

  return (
    <motion.article
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX: srx, rotateY: sry, transformPerspective: 800 }}
      className={`group relative bg-paper rounded-2xl overflow-hidden border border-ink/5 shadow-sm hover:shadow-petal transition-shadow duration-300 flex flex-col ${
        featured ? 'md:col-span-2' : ''
      }`}
    >
      <div
        onClick={() => hasFeatures && setShowInfo((v) => !v)}
        className={`relative overflow-hidden bg-cream2 shrink-0 ${
          hasFeatures ? 'cursor-pointer' : ''
        } ${featured ? 'aspect-[16/9]' : 'aspect-[4/5]'}`}
      >
        <img
          src={imageSrc}
          alt={name}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.onerror = null
            e.currentTarget.src = defaultRoseImage
          }}
          className="w-full h-full object-cover grayscale-[0.35] sepia-[0.15] saturate-125 group-hover:grayscale-0 group-hover:sepia-0 group-hover:scale-105 transition-all duration-700 ease-out"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/0 to-transparent" />

        {featured && (
          <span className="absolute top-4 left-4 bg-honey text-ink text-xs font-semibold uppercase tracking-wide rounded-full px-3 py-1 shadow-sm">
            Más pedido
          </span>
        )}

        <span className="absolute top-4 right-4 bg-paper/95 text-ink text-sm font-semibold rounded-full px-3 py-1 shadow-sm">
          {price}
        </span>

        <div className="absolute bottom-0 left-0 right-0 p-5">
          <h3 className={`font-script text-honey ${featured ? 'text-3xl' : 'text-2xl'}`}>
            {name}
          </h3>
        </div>

        {/* Capa con las características del producto */}
        <AnimatePresence>
          {showInfo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-2 bg-ink/60 backdrop-blur-sm p-6 text-center"
            >
              {features.map((item, i) => (
                <motion.p
                  key={item}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * i }}
                  className="text-cream font-script text-xl"
                >
                  {item}
                </motion.p>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pista para que el usuario sepa que puede tocar */}
        {hasFeatures && !showInfo && (
          <span className="absolute bottom-4 right-4 z-10 bg-paper/80 text-ink text-[10px] rounded-full px-2 py-0.5">
            Toca para ver más
          </span>
        )}
      </div>

      <div className="p-5 flex-1 flex flex-col justify-between gap-4">
        <div>
          <p className={`text-ink/70 leading-relaxed ${featured ? 'text-base' : 'text-sm'}`}>
            {description}
          </p>
          <p className="text-xs text-olive mt-2">
            Incluye envoltura, dedicatoria y nutriente
          </p>
        </div>

        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-ink hover:bg-ink/90 text-cream text-sm font-medium px-5 py-3 rounded-full transition-colors w-fit"
        >
          <MessageCircle size={16} />
          Pedir este ramo
        </a>
      </div>
    </motion.article>
  )
}