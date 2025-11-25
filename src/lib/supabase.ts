// supabase.ts - Cliente de Supabase
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Tipos para la base de datos
export interface Post {
    id: string;
    title: string;
    slug: string;
    content: string;
    excerpt: string;
    published_at: string;
    updated_at?: string;
    author_id: string;
    tags: string[];
    image_url?: string;
    published: boolean;
}

export interface Author {
    id: string;
    name: string;
    bio: string;
    avatar_url?: string;
    email: string;
    social_links?: {
        github?: string;
        linkedin?: string;
        twitter?: string;
    };
}

// Funciones helper para posts
export async function getPosts(limit?: number) {
    const query = supabase
        .from('posts')
        .select('*')
        .eq('published', true)
        .order('published_at', { ascending: false });

    if (limit) {
        query.limit(limit);
    }

    const { data, error } = await query;

    if (error) {
        console.error('Error fetching posts:', error);
        return [];
    }

    return data as Post[];
}

export async function getPostBySlug(slug: string) {
    const { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('slug', slug)
        .eq('published', true)
        .single();

    if (error) {
        console.error('Error fetching post:', error);
        return null;
    }

    return data as Post;
}

export async function getPostsByTag(tag: string) {
    const { data, error } = await supabase
        .from('posts')
        .select('*')
        .contains('tags', [tag])
        .eq('published', true)
        .order('published_at', { ascending: false });

    if (error) {
        console.error('Error fetching posts by tag:', error);
        return [];
    }

    return data as Post[];
}
