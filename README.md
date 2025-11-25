# Blog Profesional - Pablo Espinosa

Blog profesional sobre SEO técnico, programación y automatizaciones, construido con Astro, Supabase y Cloudflare.

## 🚀 Características

- ✅ **Tema oscuro/claro** con persistencia en localStorage
- ✅ **Barra de progreso de lectura** que se actualiza con scroll
- ✅ **Tiempo de lectura** calculado automáticamente
- ✅ **Syntax highlighting** profesional con Shiki
- ✅ **Optimizado para Core Web Vitals** y SEO
- ✅ **Responsive** y accesible
- ✅ **Backend con Supabase** para gestión de contenido
- ✅ **Deploy en Cloudflare Pages**

## 📦 Tecnologías

- **Astro 4.x** - Framework web moderno
- **Supabase** - Backend y base de datos
- **Cloudflare Pages** - Hosting y CDN
- **TypeScript** - Type safety
- **CSS Variables** - Sistema de diseño

## 🛠️ Instalación

1. Instalar dependencias:
```bash
npm install
```

2. Configurar variables de entorno:
```bash
cp .env.example .env
```

Edita `.env` y añade tus credenciales de Supabase:
```
PUBLIC_SUPABASE_URL=tu-proyecto.supabase.co
PUBLIC_SUPABASE_ANON_KEY=tu-anon-key
```

3. Configurar base de datos en Supabase:
   - Ve a tu proyecto en Supabase
   - Abre el SQL Editor
   - Ejecuta el script `supabase/schema.sql`
   - Actualiza el email en el script con tu email real

4. Ejecutar en desarrollo:
```bash
npm run dev
```

## 📝 Crear contenido

### Opción 1: Directamente en Supabase

1. Ve a tu proyecto en Supabase
2. Abre la tabla `posts`
3. Inserta un nuevo registro con los campos necesarios

### Opción 2: Panel de administración (próximamente)

El panel de administración está en desarrollo y permitirá crear y editar posts desde la web.

## 🚀 Deploy a Cloudflare Pages

1. Sube tu código a GitHub

2. Ve a [Cloudflare Pages](https://pages.cloudflare.com/)

3. Crea un nuevo proyecto:
   - Conecta tu repositorio de GitHub
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Build output directory: `dist`

4. Configura las variables de entorno en Cloudflare:
   - `PUBLIC_SUPABASE_URL`
   - `PUBLIC_SUPABASE_ANON_KEY`

5. Deploy automático en cada push a main

## 📁 Estructura del proyecto

```
/
├── public/              # Archivos estáticos
├── src/
│   ├── components/      # Componentes reutilizables
│   ├── layouts/         # Layouts de página
│   ├── lib/            # Configuración de Supabase
│   ├── pages/          # Rutas de la aplicación
│   ├── styles/         # Sistema de diseño CSS
│   └── utils/          # Utilidades (SEO, reading time)
├── supabase/           # Esquema de base de datos
├── astro.config.mjs    # Configuración de Astro
└── package.json
```

## 🎨 Personalización

### Colores y tema

Edita `src/styles/tokens.css` para cambiar:
- Paleta de colores
- Tipografía
- Espaciado
- Bordes y sombras

### Información personal

Actualiza:
- `src/pages/sobre-mi.astro` - Tu biografía
- `src/layouts/BaseLayout.astro` - Enlaces sociales en el footer
- `astro.config.mjs` - URL del sitio

## 📊 SEO y Performance

El blog está optimizado para:
- **Core Web Vitals**: LCP, FID, CLS
- **Meta tags**: Open Graph, Twitter Cards
- **Structured Data**: JSON-LD
- **Sitemap**: Generado automáticamente
- **Robots.txt**: Configurado para SEO

## 📄 Licencia

MIT - Pablo Espinosa
