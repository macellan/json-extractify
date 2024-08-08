/**
 * Parses a string and extracts JSON objects from it.
 * @param data - The string to parse.
 * @returns An array of parsed JSON objects.
 */
const parse = <T extends object>(data: string): T[] => {
    const results: T[] = []
    let depth = 0
    let currentJson = ''

    for (let i = 0; i < data.length; i++) {
        const char = data[i]

        if (char === '{') {
            if (depth === 0) currentJson = ''

            depth++
        }

        if (depth > 0) currentJson += char

        if (char === '}') {
            depth--

            if (depth === 0) {
                try {
                    results.push(JSON.parse(currentJson))
                } catch (error) {}
            }
        }
    }

    return results
}

export default { parse }
