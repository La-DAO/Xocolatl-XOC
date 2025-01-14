[@elizaos/core v0.1.7](../index.md) / Service

# Class: `abstract` Service

## Extended by

- [`IImageDescriptionService`](../interfaces/IImageDescriptionService.md)
- [`ITranscriptionService`](../interfaces/ITranscriptionService.md)
- [`IVideoService`](../interfaces/IVideoService.md)
- [`ITextGenerationService`](../interfaces/ITextGenerationService.md)
- [`IBrowserService`](../interfaces/IBrowserService.md)
- [`ISpeechService`](../interfaces/ISpeechService.md)
- [`IPdfService`](../interfaces/IPdfService.md)
- [`IAwsS3Service`](../interfaces/IAwsS3Service.md)
- [`ISlackService`](../interfaces/ISlackService.md)

## Constructors

### new Service()

> **new Service**(): [`Service`](Service.md)

#### Returns

[`Service`](Service.md)

## Accessors

### serviceType

#### Get Signature

> **get** `static` **serviceType**(): [`ServiceType`](../enumerations/ServiceType.md)

##### Returns

[`ServiceType`](../enumerations/ServiceType.md)

#### Defined in

[packages/core/src/types.ts:1079](https://github.com/elizaOS/eliza/blob/main/packages/core/src/types.ts#L1079)

---

### serviceType

#### Get Signature

> **get** **serviceType**(): [`ServiceType`](../enumerations/ServiceType.md)

##### Returns

[`ServiceType`](../enumerations/ServiceType.md)

#### Defined in

[packages/core/src/types.ts:1090](https://github.com/elizaOS/eliza/blob/main/packages/core/src/types.ts#L1090)

## Methods

### getInstance()

> `static` **getInstance**\<`T`\>(): `T`

#### Type Parameters

• **T** _extends_ [`Service`](Service.md)

#### Returns

`T`

#### Defined in

[packages/core/src/types.ts:1083](https://github.com/elizaOS/eliza/blob/main/packages/core/src/types.ts#L1083)

---

### initialize()

> `abstract` **initialize**(`runtime`): `Promise`\<`void`\>

Add abstract initialize method that must be implemented by derived classes

#### Parameters

• **runtime**: [`IAgentRuntime`](../interfaces/IAgentRuntime.md)

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/core/src/types.ts:1095](https://github.com/elizaOS/eliza/blob/main/packages/core/src/types.ts#L1095)
