# Florería Lysaris — Web del catálogo

Sitio moderno hecho con **React + Vite + Tailwind CSS + Framer Motion**.

## 1. Requisitos

- Tener instalado [Node.js](https://nodejs.org) versión 18 o superior (incluye `npm`).

## 2. Instalación

Abre una terminal dentro de la carpeta `lysaris-web` y ejecuta:

```bash
npm install
```

Esto instala automáticamente todas las librerías del `package.json`:

| Librería         | Para qué sirve                                   |
|------------------|---------------------------------------------------|
| react / react-dom| Base de la interfaz                                |
| vite             | Servidor de desarrollo y build, súper rápido       |
| tailwindcss      | Estilos utilitarios (colores, espaciados, etc.)    |
| autoprefixer / postcss | Soporte de Tailwind entre navegadores        |
| framer-motion    | Animaciones (fade-in, parallax, hover, scroll)     |
| lucide-react     | Íconos (WhatsApp, calendario, envío, corazón, etc.)|

## 3. Agrega tus fotos reales

Dentro de `public/images/` reemplaza los archivos por tus propias fotos de los
ramos, con los nombres indicados en `public/images/README.txt` (por ejemplo
`sunny-love.jpg`, `hero.jpg`, etc.). Ahí es donde la página se vuelve "real":
con fotos de tus productos en vez de dibujos.

## 4. Ejecutar en desarrollo

```bash
npm run dev
```

Abre el link que aparece en la terminal (normalmente `http://localhost:5173`).
Cada vez que guardes un cambio, el navegador se actualiza solo.

## 5. Generar la versión final para publicar

```bash
npm run build
```

Esto crea una carpeta `dist/` lista para subir a cualquier hosting (Vercel,
Netlify, Hostinger, etc.). Para verla localmente antes de subirla:

```bash
npm run preview
```

## 6. Qué puedes personalizar fácil

- **Textos y precios**: en `src/App.jsx` (arrays `ramosXpress` y `girasoles`).
- **Colores**: en `tailwind.config.js`, sección `colors`.
- **Tipografías**: cambia los nombres de Google Fonts en `index.html` y en
  `tailwind.config.js`.
- **WhatsApp**: busca `wa.me/51937111149` en `Navbar.jsx`, `Hero.jsx` y
  `Footer.jsx` y cámbialo por tu número.

## crear ruta para
ruta numero 1

## avance de segunda parte de la pagina  web
card nuevos 
imagenes nuevas

## avences de la tercera parte de la pagina web
tablas nuevas
se mejoro el footer