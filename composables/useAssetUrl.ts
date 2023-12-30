type Options = {
    quality: number;
}

export default function useAssetUrl(fileId: string, options?: Options) {
    const runtimeConfig = useRuntimeConfig();
    let url =  `${runtimeConfig.public.directus.url}/assets/${fileId}`;
    Object.keys(options || {}).forEach((key) => {
        url += `?${key}=${options?.[key as keyof typeof options]}`;
    });
    return url;
}