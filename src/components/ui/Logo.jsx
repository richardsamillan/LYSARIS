export default function Logo() {
  return (
    <a
      href="#top"
      className="flex items-center gap-2"
      aria-label="Lysaris, inicio"
    >
      <svg width="26" height="26" viewBox="00 40 40" aria-hidden="true">
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
        <circle cx="20" cy="20" r="8" fill="#B8541A"/>
      </svg>
      <span className="font-script text-3xl text-honeyDeep">Lysaris</span>
    </a>
  );
}
