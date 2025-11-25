# ⚠️ IMPORTANTE - Versión de Node.js

## Problema Detectado

Tu versión actual de Node.js es **18.13.0**, pero Astro requiere **>=18.14.1**.

## Soluciones

### Opción 1: Actualizar Node.js (Recomendado)

Descarga e instala Node.js 20.x (LTS) desde:
https://nodejs.org/

### Opción 2: Usar el proyecto tal cual

El proyecto debería funcionar con tu versión actual, pero puede mostrar warnings. Si encuentras problemas, actualiza Node.js.

## Verificar después de actualizar

```bash
node --version  # Debería mostrar v18.14.1 o superior
npm run dev     # Debería funcionar sin warnings
```

## Nota para Cloudflare

Cloudflare Pages usa Node.js 20.x por defecto, así que el deployment funcionará correctamente independientemente de tu versión local.
