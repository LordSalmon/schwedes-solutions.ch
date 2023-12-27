export default function useAssetUrl(fileId: string) {
    const runtimeConfig = useRuntimeConfig();
    return `${runtimeConfig.public.directus.url}/assets/${fileId}`;
}