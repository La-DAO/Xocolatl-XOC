[@elizaos/core v0.1.7](../index.md) / CharacterSchema

# Variable: CharacterSchema

> `const` **CharacterSchema**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

Main Character schema

## Type declaration

### id

> **id**: `ZodOptional`\<`ZodString`\>

### name

> **name**: `ZodString`

### system

> **system**: `ZodOptional`\<`ZodString`\>

### modelProvider

> **modelProvider**: `ZodNativeEnum`\<_typeof_ [`ModelProviderName`](../enumerations/ModelProviderName.md)\>

### modelEndpointOverride

> **modelEndpointOverride**: `ZodOptional`\<`ZodString`\>

### templates

> **templates**: `ZodOptional`\<`ZodRecord`\<`ZodString`, `ZodString`\>\>

### bio

> **bio**: `ZodUnion`\<[`ZodString`, `ZodArray`\<`ZodString`, `"many"`\>]\>

### lore

> **lore**: `ZodArray`\<`ZodString`, `"many"`\>

### messageExamples

> **messageExamples**: `ZodArray`\<`ZodArray`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>, `"many"`\>, `"many"`\>

### postExamples

> **postExamples**: `ZodArray`\<`ZodString`, `"many"`\>

### topics

> **topics**: `ZodArray`\<`ZodString`, `"many"`\>

### adjectives

> **adjectives**: `ZodArray`\<`ZodString`, `"many"`\>

### knowledge

> **knowledge**: `ZodOptional`\<`ZodArray`\<`ZodString`, `"many"`\>\>

### clients

> **clients**: `ZodArray`\<`ZodNativeEnum`\<_typeof_ [`Clients`](../enumerations/Clients.md)\>, `"many"`\>

### plugins

> **plugins**: `ZodUnion`\<[`ZodArray`\<`ZodString`, `"many"`\>, `ZodArray`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>, `"many"`\>]\>

### settings

> **settings**: `ZodOptional`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>\>

### clientConfig

> **clientConfig**: `ZodOptional`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>\>

### style

> **style**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

#### Type declaration

##### all

> **all**: `ZodArray`\<`ZodString`, `"many"`\>

##### chat

> **chat**: `ZodArray`\<`ZodString`, `"many"`\>

##### post

> **post**: `ZodArray`\<`ZodString`, `"many"`\>

### twitterProfile

> **twitterProfile**: `ZodOptional`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>\>

### nft

> **nft**: `ZodOptional`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>\>

## Defined in

[packages/core/src/environment.ts:66](https://github.com/elizaOS/eliza/blob/main/packages/core/src/environment.ts#L66)
