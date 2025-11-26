import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
    site: 'https://pabloespinosa.tech',
    output: 'hybrid',
    adapter: cloudflare({
        mode: 'directory',
    }),
    integrations: [
        mdx({
            syntaxHighlight: 'shiki',
            shikiConfig: {
                theme: 'github-dark-dimmed',
                wrap: true,
            },
        }),
        sitemap(),
    ],
    vite: {
        ssr: {
            external: ['@supabase/supabase-js'],
        },
    },
    image: {
        domains: ['supabase.co'],
    },
});
