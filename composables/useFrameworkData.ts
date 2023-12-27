import type { components } from "~/types/schema";

export type ProgrammingTool = components["schemas"]["ItemsProgrammingTools"] & {
    icon: components["schemas"]["Files"] | undefined | null;
};

export default async function useFrameworkData() {
    const url = `${useRuntimeConfig().public.directus.url}/items/programming_tools?fields=*.*`;
    const result = await (await fetch(url)).json();
    return result as {data: ProgrammingTool[]};
}