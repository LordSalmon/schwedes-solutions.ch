import type { components } from "~/types/schema";

export default async function useApiTexts(prefix: string = ""): Promise<components["schemas"]["ItemsTexts"][]> {
    try {
        const { getItems } = useDirectusItems();
        const items = await getItems<components["schemas"]["ItemsTexts"]>({
            collection: "texts",
            params: {
                filter: {
                    key: {
                        startsWith: prefix
                    }
                }
            }
        });
        return items;
    } catch(e) {
        console.error(e);
        return [];
    }


}