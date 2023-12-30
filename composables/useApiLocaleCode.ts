export default function useApiLocaleCode(locale: string): string {
    const mapping: Record<string, string> = {
        "de": "de-CH",
        "en": "en-UK"
    };
    return mapping[locale] || "de-CH";
}