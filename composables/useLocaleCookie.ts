export default function useLocaleCookie() {
    return useCookie("locale", {
        maxAge: 60 * 60 * 24,
    });
}