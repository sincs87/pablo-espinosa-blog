// readingTime.ts - Calcular tiempo de lectura estimado
export interface ReadingTimeResult {
    text: string;
    minutes: number;
    words: number;
}

export function calculateReadingTime(content: string): ReadingTimeResult {
    // Palabras por minuto promedio (español)
    const wordsPerMinute = 200;

    // Limpiar el contenido de markdown y HTML
    const cleanContent = content
        .replace(/```[\s\S]*?```/g, '') // Remover bloques de código
        .replace(/<[^>]*>/g, '') // Remover HTML
        .replace(/[#*`_~\[\]()]/g, '') // Remover markdown
        .trim();

    // Contar palabras
    const words = cleanContent.split(/\s+/).filter(word => word.length > 0).length;

    // Calcular minutos
    const minutes = Math.ceil(words / wordsPerMinute);

    return {
        text: `${minutes} min de lectura`,
        minutes,
        words,
    };
}
