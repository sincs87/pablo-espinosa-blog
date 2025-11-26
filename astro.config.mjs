import { defineConfig } from 'astro/config';
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
