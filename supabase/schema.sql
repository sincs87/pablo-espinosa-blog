-- Schema de base de datos para Supabase
-- Ejecutar este script en el SQL Editor de Supabase

-- Crear tabla de autores
CREATE TABLE IF NOT EXISTS authors (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  bio TEXT,
  avatar_url TEXT,
  email TEXT UNIQUE NOT NULL,
  social_links JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Crear tabla de posts
CREATE TABLE IF NOT EXISTS posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  content TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  published_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  author_id UUID REFERENCES authors(id) ON DELETE CASCADE,
  tags TEXT[] DEFAULT '{}',
  image_url TEXT,
  published BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Índices para mejorar rendimiento
CREATE INDEX IF NOT EXISTS idx_posts_slug ON posts(slug);
CREATE INDEX IF NOT EXISTS idx_posts_published ON posts(published);
CREATE INDEX IF NOT EXISTS idx_posts_published_at ON posts(published_at DESC);
CREATE INDEX IF NOT EXISTS idx_posts_tags ON posts USING GIN(tags);
CREATE INDEX IF NOT EXISTS idx_posts_author ON posts(author_id);

-- Función para actualizar updated_at automáticamente
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger para actualizar updated_at
CREATE TRIGGER update_posts_updated_at
  BEFORE UPDATE ON posts
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Row Level Security (RLS)
ALTER TABLE authors ENABLE ROW LEVEL SECURITY;
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;

-- Políticas de seguridad para authors
-- Todos pueden leer autores
CREATE POLICY "Authors are viewable by everyone"
  ON authors FOR SELECT
  USING (true);

-- Solo usuarios autenticados pueden crear/actualizar autores
CREATE POLICY "Authenticated users can insert authors"
  ON authors FOR INSERT
  WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can update authors"
  ON authors FOR UPDATE
  USING (auth.role() = 'authenticated');

-- Políticas de seguridad para posts
-- Todos pueden leer posts publicados
CREATE POLICY "Published posts are viewable by everyone"
  ON posts FOR SELECT
  USING (published = true OR auth.role() = 'authenticated');

-- Solo usuarios autenticados pueden crear/actualizar/eliminar posts
CREATE POLICY "Authenticated users can insert posts"
  ON posts FOR INSERT
  WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can update posts"
  ON posts FOR UPDATE
  USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can delete posts"
  ON posts FOR DELETE
  USING (auth.role() = 'authenticated');

-- Insertar autor inicial (Pablo Espinosa)
-- IMPORTANTE: Cambiar el email por tu email real
INSERT INTO authors (name, bio, email, social_links)
VALUES (
  'Pablo Espinosa',
  'SEO Técnico y Programador especializado en automatizaciones, optimización web y desarrollo full-stack.',
  'tu-email@example.com',
  '{"github": "https://github.com/pabloespinosa", "linkedin": "https://linkedin.com/in/pabloespinosa", "twitter": "https://twitter.com/pabloespinosa"}'::jsonb
)
ON CONFLICT (email) DO NOTHING;

-- Post de ejemplo
INSERT INTO posts (title, slug, content, excerpt, author_id, tags, published, image_url)
SELECT 
  'Bienvenido a mi blog',
  'bienvenido-a-mi-blog',
  '# Bienvenido a mi blog

Este es un post de ejemplo para demostrar las capacidades del blog.

## Características

- **Syntax highlighting** para código
- **Tiempo de lectura** calculado automáticamente
- **Barra de progreso** mientras lees
- **Tema oscuro/claro** con persistencia

## Ejemplo de código

```javascript
function saludar(nombre) {
  console.log(`¡Hola, ${nombre}!`);
}

saludar("Mundo");
```

## Conclusión

Este blog está optimizado para SEO técnico y Core Web Vitals.',
  'Post de bienvenida con ejemplos de las características del blog: syntax highlighting, tiempo de lectura, y más.',
  id,
  ARRAY['tutorial', 'bienvenida'],
  true,
  '/images/welcome.jpg'
FROM authors
WHERE email = 'sincs87@gmail.com'
ON CONFLICT (slug) DO NOTHING;
