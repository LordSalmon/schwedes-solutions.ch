import type { components } from "~/types/schema";
import useApiLocaleCode from "./useApiLocaleCode";

export type Process = components["schemas"]["ItemsProcesses"] & {
    image: components["schemas"]["Files"] | undefined | null;
    translations?: components["schemas"]["ItemsProcessesTranslations"][];
};

export default async function useFrameworkData() {
    const url = `${useRuntimeConfig().public.directus.url}/items/processes`;
    const result = (await useFetch(url, {
        query: {
            fields: "*.*",
            deep: {
                translations: {
                    _filter: {
                        languages_code: {
                            _eq: useApiLocaleCode(useI18n().locale.value)
                        }
                    }
                }
            }
        }
    })).data.value;
    return result as {data: Process[]};
}