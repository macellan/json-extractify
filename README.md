# `@macellan/json-extractify`

## Description

Parses a string and extracts JSON objects from it.

## Parameters

-   **data** (`string`): The string to parse.

## Returns

-   **Array of `object`**: An array of parsed JSON objects.

## Usage

### Basic Example

```typescript
import JsonExtractify from '@macellan/json-extractify'

const json = '{ "foo": "bar" } { "abc": "xyz" }'

const value = JsonExtractify.parse(json)

console.log(value)
// Output: [{ foo: 'bar' }, { abc: 'xyz' }]
```
