import type { components } from "~/types/schema";

export default async function useApiTexts(prefix: string = "", locale = "de-CH"): Promise<components["schemas"]["ItemsTexts"][]> {

    type Result = components["schemas"]["ItemsTexts"] & {
        translations: components["schemas"]["ItemsTextsTranslations"][];
    };
    

    try {
        const { getItems } = useDirectusItems();
        const items = await getItems<components["schemas"]["ItemsTexts"]>({
            collection: "texts",
            params: {
                fields: ["*.*"],
                filter: {
                    key: {
                        _starts_with: prefix
                    }
                },
                deep: {
                    translations: {
                        _filter: {
                            languages_code: {
                                _eq: locale
                            }
                        }
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