export const switchObjectKeyNames = (
    object: Record<string, unknown>,
    initalAndNewKeysPairing: Record<string, string>
) => {
    const initialKeys = Object.keys(object)

    if (
        initialKeys &&
        initialKeys.length === Object.keys(initalAndNewKeysPairing).length
    ) {
        const newObject: Record<string, unknown> = {}

        initialKeys.forEach((key) => {
            if (initalAndNewKeysPairing[key]) {
                newObject[initalAndNewKeysPairing[key]] = object[key]
            } else {
                newObject[key] = object[key]
            }
        })

        return newObject
    }

    return object
}
