// seo.ts - Utilidades para SEO y meta tags
export interface SEOProps {
    title: string;
    description: string;
    image?: string;
    url?: string;
    type?: 'website' | 'article';
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    tags?: string[];
}

export function generateMetaTags(props: SEOProps) {
    const {
        title,
        description,
        image = '/og-image.jpg',
        url = '',
        type = 'website',
        publishedTime,
        modifiedTime,
        author = 'Pablo Espinosa',
        tags = [],
    } = props;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type,
            url,
            image,
            siteName: 'Pablo Espinosa - SEO Técnico & Programador',
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            image,
        },
        article: type === 'article' ? {
            publishedTime,
            modifiedTime,
            author,
            tags,
        } : undefined,
    };
}

export function generateStructuredData(props: SEOProps) {
    const { title, description, url, publishedTime, modifiedTime, author, image } = props;

    if (props.type === 'article') {
        return {
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: title,
            description,
            image,
            datePublished: publishedTime,
            dateModified: modifiedTime || publishedTime,
            author: {
                '@type': 'Person',
                name: author,
                url: 'https://pabloespinosa.dev/sobre-mi',
            },
            publisher: {
                '@type': 'Person',
                name: 'Pablo Espinosa',
                url: 'https://pabloespinosa.dev',
            },
            mainEntityOfPage: {
                '@type': 'WebPage',
                '@id': url,
            },
        };
    }

    return {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Pablo Espinosa',
        description: 'Blog sobre SEO técnico, programación y automatizaciones',
        url: 'https://pabloespinosa.dev',
        author: {
            '@type': 'Person',
            name: 'Pablo Espinosa',
            jobTitle: 'SEO Técnico & Programador',
        },
    };
}
