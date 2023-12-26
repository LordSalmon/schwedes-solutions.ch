import type { components } from "~/types/schema";

export default async function useContactData() {
    return useAsyncData(async () => {
        const url = `${useRuntimeConfig().public.directus.url}/items/statistics`;
        const result = await (await fetch(url)).json();
        return result as {data: components["schemas"]["ItemsStatistics"]};
    });
}