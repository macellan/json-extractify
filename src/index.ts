/**
 * Parses a string and extracts JSON objects from it.
 * @param data - The string to parse.
 * @returns An array of parsed JSON objects.
 */
const parse = <T extends object>(data: string): T[] => {
    const regex = /{[^}]+}/g
    const matches = data.match(regex)

    if (!matches) return []

    const objects = matches.map(jsonStr => JSON.parse(jsonStr))

    return objects
}

export default { parse }
