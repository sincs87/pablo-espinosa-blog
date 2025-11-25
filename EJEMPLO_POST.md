# Ejemplo de Post para el Blog

Este es un archivo de ejemplo que muestra cómo formatear posts en Markdown para tu blog.

## Cómo crear posts

Los posts se crean directamente en Supabase. Este archivo es solo una referencia de formato.

### Estructura de un post

```markdown
# Título Principal del Post

Introducción del post con contexto y lo que aprenderás.

## Sección 1: Conceptos Básicos

Contenido de la sección con **texto en negrita** y *cursiva*.

### Subsección 1.1

Más detalles específicos.

## Código

Puedes incluir bloques de código:

\`\`\`javascript
function ejemplo() {
  console.log("¡Hola desde el blog!");
  return true;
}
\`\`\`

## Listas

### Lista desordenada:
- Punto 1
- Punto 2
- Punto 3

### Lista ordenada:
1. Primer paso
2. Segundo paso
3. Tercer paso

## Enlaces

[Texto del enlace](https://ejemplo.com)

## Imágenes

![Descripción de la imagen](https://ejemplo.com/imagen.jpg)

## Citas

> Esta es una cita importante que quiero destacar.

## Conclusión

Resumen de lo aprendido y próximos pasos.
```

## Ejemplo de Post Completo

### Título
"Optimización de Core Web Vitals en Astro"

### Slug
`optimizacion-core-web-vitals-astro`

### Content (Markdown)
```markdown
# Optimización de Core Web Vitals en Astro

Los Core Web Vitals son métricas esenciales para medir la experiencia de usuario en tu sitio web. En este artículo, aprenderás cómo optimizar tu sitio Astro para obtener puntuaciones perfectas.

## ¿Qué son los Core Web Vitals?

Los Core Web Vitals son tres métricas principales:

- **LCP (Largest Contentful Paint)**: Tiempo de carga del contenido principal
- **FID (First Input Delay)**: Tiempo de respuesta a la primera interacción
- **CLS (Cumulative Layout Shift)**: Estabilidad visual de la página

## Optimizando LCP en Astro

Para mejorar el LCP, implementa estas técnicas:

\`\`\`astro
---
// Preload de fuentes críticas
import '@fontsource/inter';
---

<link rel="preconnect" href="https://fonts.googleapis.com" />
\`\`\`

### Imágenes optimizadas

Usa el componente Image de Astro:

\`\`\`astro
---
import { Image } from 'astro:assets';
import miImagen from '../assets/imagen.jpg';
---

<Image src={miImagen} alt="Descripción" loading="lazy" />
\`\`\`

## Mejorando FID

Minimiza el JavaScript:

1. Usa componentes Astro (sin JS por defecto)
2. Implementa lazy loading
3. Usa event listeners pasivos

## Reduciendo CLS

Define dimensiones de imágenes:

\`\`\`html
<img src="imagen.jpg" width="800" height="600" alt="Descripción" />
\`\`\`

## Conclusión

Con estas técnicas, tu sitio Astro alcanzará puntuaciones perfectas en Core Web Vitals, mejorando la experiencia de usuario y el SEO.
```

### Excerpt
"Aprende a optimizar tu sitio Astro para obtener puntuaciones perfectas en Core Web Vitals: LCP, FID y CLS."

### Tags
`["astro", "performance", "seo", "core-web-vitals"]`

### Published
`true`

### Image URL (opcional)
`https://ejemplo.com/core-web-vitals.jpg`

---

## Tips para escribir buenos posts

1. **Título claro y descriptivo** (50-60 caracteres)
2. **Slug SEO-friendly** (minúsculas, guiones, sin caracteres especiales)
3. **Excerpt atractivo** (150-160 caracteres)
4. **Usa headings jerárquicos** (H2, H3, H4)
5. **Incluye código formateado** con syntax highlighting
6. **Añade imágenes** para mejor comprensión
7. **Tags relevantes** (3-5 tags por post)
8. **Longitud óptima**: 1000-2000 palabras

---

## Markdown Avanzado

### Tablas

| Feature | Astro | Next.js |
|---------|-------|---------|
| SSG | ✅ | ✅ |
| SSR | ✅ | ✅ |
| Partial Hydration | ✅ | ❌ |

### Código inline

Usa `backticks` para código inline como `const x = 10;`

### Múltiples lenguajes

\`\`\`python
def saludar(nombre):
    print(f"Hola, {nombre}!")
\`\`\`

\`\`\`typescript
function saludar(nombre: string): void {
  console.log(`Hola, ${nombre}!`);
}
\`\`\`

---

¡Ahora estás listo para crear contenido increíble para tu blog! 🚀
