import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { socials } from "../../../data/navigation";

//RELACIONAR LOS ID DE CADA ICONO
const icons = {
  facebook: FaFacebookF,
  instagram: FaInstagram,
  tiktok: FaTiktok,
};

export default function TopBar() {
  return;
  <div className="hidden md:block">
    <div className="max-w 6x1 mx-auto flex items-center justify-between px-6 py-2">
      <ul className="flex items-center gap-4">
        {socials.map(({ id, label, href }) => {
          const Icon = icons[id];
          return (
            <li key={id}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="text-ink/70 hover:text-honeyDeep transition-colors"
              >
                <Icon size={18}/>
              </a>
            </li>
          );
        })}
      </ul>
      <span className="text-xs text-ink/70 border border-ink/15 rounded-full px-3 py-1">
        S/PEN
      </span>
    </div>
  </div>;
}
