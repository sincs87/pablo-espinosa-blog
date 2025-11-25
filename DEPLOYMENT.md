# 🚀 Guía de Deployment - Blog Pablo Espinosa

Esta guía te llevará paso a paso para configurar y desplegar tu blog en Cloudflare Pages con Supabase.

## 📋 Pre-requisitos

- ✅ Cuenta de Supabase (gratis)
- ✅ Cuenta de Cloudflare (gratis)
- ✅ Cuenta de GitHub
- ✅ Git instalado

---

## 1️⃣ Configurar Supabase

### Paso 1: Crear proyecto en Supabase

1. Ve a [supabase.com](https://supabase.com)
2. Haz clic en "Start your project"
3. Crea un nuevo proyecto:
   - **Name**: pablo-espinosa-blog
   - **Database Password**: Guarda esta contraseña de forma segura
   - **Region**: Elige la más cercana a tu ubicación

### Paso 2: Ejecutar el esquema de base de datos

1. En tu proyecto de Supabase, ve a **SQL Editor**
2. Abre el archivo `supabase/schema.sql` de este proyecto
3. **IMPORTANTE**: Antes de ejecutar, cambia el email en la línea del INSERT:
   ```sql
   'tu-email@example.com'  -- Cambia esto por tu email real
   ```
4. Copia todo el contenido del archivo
5. Pégalo en el SQL Editor de Supabase
6. Haz clic en **Run** (o presiona Ctrl+Enter)
7. Verifica que se crearon las tablas `authors` y `posts`

### Paso 3: Obtener credenciales

1. Ve a **Settings** → **API**
2. Copia estos valores (los necesitarás después):
   - **Project URL**: `https://tu-proyecto.supabase.co`
   - **anon public key**: `eyJ...` (una clave larga)

---

## 2️⃣ Configurar el Proyecto Localmente

### Paso 1: Crear archivo .env

1. Copia el archivo de ejemplo:
   ```bash
   cp .env.example .env
   ```

2. Edita `.env` y añade tus credenciales de Supabase:
   ```env
   PUBLIC_SUPABASE_URL=https://tu-proyecto.supabase.co
   PUBLIC_SUPABASE_ANON_KEY=eyJ...tu-anon-key
   PUBLIC_SITE_URL=http://localhost:4321
   ```

### Paso 2: Probar localmente

```bash
# Instalar dependencias (ya hecho)
npm install

# Ejecutar en desarrollo
npm run dev
```

Abre http://localhost:4321 y verifica que:
- ✅ La página carga correctamente
- ✅ El toggle de tema funciona
- ✅ Se muestra el post de ejemplo (si lo creaste en Supabase)

---

## 3️⃣ Subir a GitHub

### Paso 1: Crear repositorio

1. Ve a [github.com](https://github.com)
2. Crea un nuevo repositorio:
   - **Name**: pablo-espinosa-blog
   - **Visibility**: Public o Private (tu elección)
   - **NO** inicialices con README (ya tenemos uno)

### Paso 2: Subir el código

```bash
# Inicializar git (si no está ya)
git init

# Añadir todos los archivos
git add .

# Hacer commit
git commit -m "Initial commit: Blog profesional con Astro y Supabase"

# Conectar con GitHub (cambia tu-usuario)
git remote add origin https://github.com/tu-usuario/pablo-espinosa-blog.git

# Subir a GitHub
git branch -M main
git push -u origin main
```

---

## 4️⃣ Deploy en Cloudflare Pages

### Paso 1: Crear proyecto en Cloudflare

1. Ve a [dash.cloudflare.com](https://dash.cloudflare.com)
2. En el menú lateral, selecciona **Workers & Pages**
3. Haz clic en **Create application** → **Pages** → **Connect to Git**

### Paso 2: Conectar repositorio

1. Autoriza a Cloudflare a acceder a GitHub
2. Selecciona tu repositorio: `pablo-espinosa-blog`
3. Haz clic en **Begin setup**

### Paso 3: Configurar build

En la configuración del proyecto:

- **Project name**: `pablo-espinosa-blog` (o el que prefieras)
- **Production branch**: `main`
- **Framework preset**: **Astro**
- **Build command**: `npm run build`
- **Build output directory**: `dist`

### Paso 4: Configurar variables de entorno

En la sección **Environment variables**, añade:

| Variable Name | Value |
|--------------|-------|
| `PUBLIC_SUPABASE_URL` | `https://tu-proyecto.supabase.co` |
| `PUBLIC_SUPABASE_ANON_KEY` | `eyJ...tu-anon-key` |
| `PUBLIC_SITE_URL` | `https://tu-proyecto.pages.dev` |

### Paso 5: Deploy

1. Haz clic en **Save and Deploy**
2. Espera a que termine el build (2-3 minutos)
3. ¡Tu blog está en vivo! 🎉

La URL será algo como: `https://pablo-espinosa-blog.pages.dev`

---

## 5️⃣ Configurar Dominio Personalizado (Opcional)

### Si tienes un dominio propio:

1. En Cloudflare Pages, ve a tu proyecto
2. Click en **Custom domains**
3. Click en **Set up a custom domain**
4. Ingresa tu dominio: `pabloespinosa.dev`
5. Sigue las instrucciones para configurar DNS

---

## 6️⃣ Crear tu Primer Post

### Opción A: Desde Supabase (Recomendado por ahora)

1. Ve a tu proyecto en Supabase
2. Abre **Table Editor** → **posts**
3. Click en **Insert** → **Insert row**
4. Completa los campos:
   - **title**: "Mi primer post"
   - **slug**: "mi-primer-post" (sin espacios, minúsculas)
   - **content**: Tu contenido en Markdown
   - **excerpt**: Resumen corto
   - **author_id**: Selecciona tu ID de la tabla authors
   - **tags**: `["tutorial", "seo"]`
   - **published**: `true`
   - **image_url**: URL de imagen (opcional)
5. Click en **Save**

6. Espera 1-2 minutos (Cloudflare reconstruirá automáticamente)
7. Visita tu blog y verás el nuevo post

### Opción B: Panel de Admin (Próximamente)

El panel de administración está en desarrollo y permitirá crear posts desde la web.

---

## 🔄 Workflow de Actualización

Cada vez que hagas cambios:

```bash
# Hacer cambios en el código
# ...

# Commit y push
git add .
git commit -m "Descripción de los cambios"
git push

# Cloudflare reconstruirá automáticamente
```

---

## ✅ Checklist Final

- [ ] Supabase configurado con esquema de base de datos
- [ ] Variables de entorno configuradas localmente
- [ ] Proyecto funciona en local (npm run dev)
- [ ] Código subido a GitHub
- [ ] Cloudflare Pages configurado
- [ ] Variables de entorno configuradas en Cloudflare
- [ ] Deploy exitoso
- [ ] Blog accesible en la URL de Cloudflare
- [ ] Al menos un post de prueba creado
- [ ] Tema oscuro/claro funciona
- [ ] Barra de progreso funciona en posts

---

## 🆘 Troubleshooting

### Error: "Missing Supabase environment variables"

**Solución**: Verifica que las variables de entorno estén configuradas correctamente en Cloudflare Pages.

### No se muestran los posts

**Solución**: 
1. Verifica que el post tenga `published = true` en Supabase
2. Espera 1-2 minutos para que Cloudflare reconstruya
3. Limpia la caché del navegador

### Build falla en Cloudflare

**Solución**: 
1. Verifica que las variables de entorno estén configuradas
2. Revisa los logs de build en Cloudflare
3. Asegúrate de que el build funciona localmente: `npm run build`

---

## 📞 Soporte

Si tienes problemas, revisa:
- [Documentación de Astro](https://docs.astro.build)
- [Documentación de Supabase](https://supabase.com/docs)
- [Documentación de Cloudflare Pages](https://developers.cloudflare.com/pages)

---

¡Felicidades! Tu blog profesional está en vivo 🚀
