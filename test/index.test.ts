import JsonExtractify from '../src/index'

it('should correctly parse a simple JSON string with multiple objects concatenated', () => {
    const json = '{ "foo": "bar" } { "abc": "xyz" }'
    const value = JsonExtractify.parse(json)

    expect(value).toEqual([{ foo: 'bar' }, { abc: 'xyz' }])
})

it('should correctly parse a JSON string with multiple objects separated by a newline', () => {
    const json = '{ "foo": "bar" }\n{ "abc": "xyz" }'
    const value = JsonExtractify.parse(json)

    expect(value).toEqual([{ foo: 'bar' }, { abc: 'xyz' }])
})

it('should correctly parse a JSON string with multiple objects separated by arbitrary text', () => {
    const json = '{ "foo": "bar" } q1r { "abc": "xyz" } w2t { "def": "ghi" }'
    const value = JsonExtractify.parse(json)

    expect(value).toEqual([{ foo: 'bar' }, { abc: 'xyz' }, { def: 'ghi' }])
})
