[@elizaos/core v0.1.7](../index.md) / splitChunks

# Function: splitChunks()

> **splitChunks**(`content`, `chunkSize`, `bleed`): `Promise`\<`string`[]\>

Splits content into chunks of specified size with optional overlapping bleed sections

## Parameters

• **content**: `string`

The text content to split into chunks

• **chunkSize**: `number` = `512`

The maximum size of each chunk in tokens

• **bleed**: `number` = `20`

Number of characters to overlap between chunks (default: 100)

## Returns

`Promise`\<`string`[]\>

Promise resolving to an array of text chunks with bleed sections

## Defined in

[packages/core/src/generation.ts:881](https://github.com/elizaOS/eliza/blob/main/packages/core/src/generation.ts#L881)
