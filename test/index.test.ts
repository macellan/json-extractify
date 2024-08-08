import JsonExtractify from '../src/index'

it('should correctly parse a single JSON object', () => {
    const json = '{ "foo": "bar", "abc": { "xyz": "qwe" } }'
    const value = JsonExtractify.parse(json)

    expect(value).toEqual([{ foo: 'bar', abc: { xyz: 'qwe' } }])
})

it('should correctly parse a JSON string with one object', () => {
    const json = '{ "foo": "bar" }'
    const value = JsonExtractify.parse(json)

    expect(value).toEqual([{ foo: 'bar' }])
})

it('should correctly parse a JSON string with two concatenated objects', () => {
    const json = '{ "foo": "bar" } { "abc": "xyz" }'
    const value = JsonExtractify.parse(json)

    expect(value).toEqual([{ foo: 'bar' }, { abc: 'xyz' }])
})

it('should correctly parse a JSON string with objects separated by a newline', () => {
    const json = '{ "foo": "bar" }\n{ "abc": "xyz" }'
    const value = JsonExtractify.parse(json)

    expect(value).toEqual([{ foo: 'bar' }, { abc: 'xyz' }])
})

it('should correctly parse a JSON string with objects separated by arbitrary text', () => {
    const json = '{ "foo": "bar" } q1r { "abc": "xyz" } w2t { "def": "ghi" }'
    const value = JsonExtractify.parse(json)

    expect(value).toEqual([{ foo: 'bar' }, { abc: 'xyz' }, { def: 'ghi' }])
})

it('should not throw an error when parsing invalid JSON', () => {
    const json = '{ "foo": invalid } { "abc": "xyz" }'
    const value = JsonExtractify.parse(json)

    expect(value).toEqual([{ abc: 'xyz' }])
})
