import type { components } from "~/types/schema";

export type ProgrammingTool = components["schemas"]["ItemsProgrammingTools"] & {
    icon: components["schemas"]["Files"] | undefined | null;
};

export default async function useFrameworkData() {
    const url = `${useRuntimeConfig().public.directus.url}/items/programming_tools`;
    const result = (await useFetch(url, {
        query: {
            fields: "*.*",
            filter: {
                type: {
                    _eq: "solution"
                }
            }
        }
    })).data.value;
    return result as {data: ProgrammingTool[]};
}