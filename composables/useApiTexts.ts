import type { components } from "~/types/schema";

export default async function useApiTexts(prefix: string = "", locale = "de-CH"): Promise<components["schemas"]["ItemsTexts"][]> {

    type Result = components["schemas"]["ItemsTexts"] & {
        translations: components["schemas"]["ItemsTextsTranslations"][];
    };

    // NOT YET IMPLEMENTED

    return [];

}