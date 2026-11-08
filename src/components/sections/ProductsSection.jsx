import { motion } from 'framer-motion'
import ProductCard from '../ui/ProductCard.jsx'

export default function ProductsSection({
  id,
  title,
  subtitle,
  products,
  alt
}) {
  return (
    <section
      id={id}
      className={`py-24 px-6 ${alt ? 'bg-cream2' : 'bg-cream'}`}
    >
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
          className="flex items-end justify-between mb-10 border-b border-ink/10 pb-4"
        >
          <h2 className="font-display font-bold text-3xl md:text-4xl text-ink">
            {title}
          </h2>

          {subtitle && (
            <p className="hidden sm:block text-sm text-ink/60 max-w-xs text-right">
              {subtitle}
            </p>
          )}
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {products.map((p, i) => (
            <ProductCard
              key={p.name}
              featured={i === 0}
              {...p}
            />
          ))}
        </div>

      </div>
    </section>
  )
}