[@elizaos/core v0.1.7](../index.md) / ISpeechService

# Interface: ISpeechService

## Extends

- [`Service`](../classes/Service.md)

## Accessors

### serviceType

#### Get Signature

> **get** **serviceType**(): [`ServiceType`](../enumerations/ServiceType.md)

##### Returns

[`ServiceType`](../enumerations/ServiceType.md)

#### Inherited from

[`Service`](../classes/Service.md).[`serviceType`](../classes/Service.md#serviceType-1)

#### Defined in

[packages/core/src/types.ts:1090](https://github.com/elizaOS/eliza/blob/main/packages/core/src/types.ts#L1090)

## Methods

### initialize()

> `abstract` **initialize**(`runtime`): `Promise`\<`void`\>

Add abstract initialize method that must be implemented by derived classes

#### Parameters

• **runtime**: [`IAgentRuntime`](IAgentRuntime.md)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`Service`](../classes/Service.md).[`initialize`](../classes/Service.md#initialize)

#### Defined in

[packages/core/src/types.ts:1095](https://github.com/elizaOS/eliza/blob/main/packages/core/src/types.ts#L1095)

---

### getInstance()

> **getInstance**(): [`ISpeechService`](ISpeechService.md)

#### Returns

[`ISpeechService`](ISpeechService.md)

#### Defined in

[packages/core/src/types.ts:1240](https://github.com/elizaOS/eliza/blob/main/packages/core/src/types.ts#L1240)

---

### generate()

> **generate**(`runtime`, `text`): `Promise`\<`Readable`\>

#### Parameters

• **runtime**: [`IAgentRuntime`](IAgentRuntime.md)

• **text**: `string`

#### Returns

`Promise`\<`Readable`\>

#### Defined in

[packages/core/src/types.ts:1241](https://github.com/elizaOS/eliza/blob/main/packages/core/src/types.ts#L1241)
