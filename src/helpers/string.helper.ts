export const turnStringToJSONObject = (text: string) => {
    if (text && text.length >= 1) {
        try {
            return JSON.parse(text)
        } catch (error) {
            return null
        }
    }
}
