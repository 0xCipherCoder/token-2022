/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/kinobi-so/kinobi
 */

import {
  Address,
  Codec,
  Decoder,
  Encoder,
  GetDiscriminatedUnionVariant,
  GetDiscriminatedUnionVariantContent,
  ReadonlyUint8Array,
  addDecoderSizePrefix,
  addEncoderSizePrefix,
  combineCodec,
  getAddressDecoder,
  getAddressEncoder,
  getBytesDecoder,
  getBytesEncoder,
  getDiscriminatedUnionDecoder,
  getDiscriminatedUnionEncoder,
  getI16Decoder,
  getI16Encoder,
  getStructDecoder,
  getStructEncoder,
  getU16Decoder,
  getU16Encoder,
  getU64Decoder,
  getU64Encoder,
  getUnitDecoder,
  getUnitEncoder,
} from '@solana/web3.js';
import {
  AccountState,
  AccountStateArgs,
  TransferFee,
  TransferFeeArgs,
  getAccountStateDecoder,
  getAccountStateEncoder,
  getTransferFeeDecoder,
  getTransferFeeEncoder,
} from '.';

export type MintExtension =
  | { __kind: 'Uninitialized' }
  | {
      __kind: 'TransferFeeConfig';
      /** Optional authority to set the fee. */
      transferFeeConfigAuthority: Address;
      /** Withdraw from mint instructions must be signed by this key. */
      withdrawWithheldAuthority: Address;
      /** Withheld transfer fee tokens that have been moved to the mint for withdrawal. */
      withheldAmount: bigint;
      /** Older transfer fee, used if the current epoch < newerTransferFee.epoch. */
      olderTransferFee: TransferFee;
      /** Newer transfer fee, used if the current epoch >= newerTransferFee.epoch. */
      newerTransferFee: TransferFee;
    }
  | { __kind: 'TransferFeeAmount'; data: ReadonlyUint8Array }
  | { __kind: 'MintCloseAuthority'; closeAuthority: Address }
  | { __kind: 'ConfidentialTransferMint'; data: ReadonlyUint8Array }
  | { __kind: 'ConfidentialTransferAccount'; data: ReadonlyUint8Array }
  | { __kind: 'DefaultAccountState'; state: AccountState }
  | { __kind: 'ImmutableOwner'; data: ReadonlyUint8Array }
  | { __kind: 'MemoTransfer'; data: ReadonlyUint8Array }
  | { __kind: 'NonTransferable' }
  | {
      __kind: 'InterestBearingConfig';
      rateAuthority: Address;
      initializationTimestamp: bigint;
      preUpdateAverageRate: number;
      lastUpdateTimestamp: bigint;
      currentRate: number;
    }
  | { __kind: 'CpiGuard'; data: ReadonlyUint8Array }
  | { __kind: 'PermanentDelegate'; delegate: Address }
  | { __kind: 'NonTransferableAccount'; data: ReadonlyUint8Array }
  | { __kind: 'TransferHook'; data: ReadonlyUint8Array }
  | { __kind: 'TransferHookAccount'; data: ReadonlyUint8Array }
  | { __kind: 'ConfidentialTransferFee'; data: ReadonlyUint8Array }
  | { __kind: 'ConfidentialTransferFeeAmount'; data: ReadonlyUint8Array }
  | { __kind: 'MetadataPointer'; data: ReadonlyUint8Array }
  | { __kind: 'TokenMetadata'; data: ReadonlyUint8Array }
  | { __kind: 'GroupPointer'; data: ReadonlyUint8Array }
  | { __kind: 'TokenGroup'; data: ReadonlyUint8Array }
  | { __kind: 'GroupMemberPointer'; data: ReadonlyUint8Array }
  | { __kind: 'TokenGroupMember'; data: ReadonlyUint8Array };

export type MintExtensionArgs =
  | { __kind: 'Uninitialized' }
  | {
      __kind: 'TransferFeeConfig';
      /** Optional authority to set the fee. */
      transferFeeConfigAuthority: Address;
      /** Withdraw from mint instructions must be signed by this key. */
      withdrawWithheldAuthority: Address;
      /** Withheld transfer fee tokens that have been moved to the mint for withdrawal. */
      withheldAmount: number | bigint;
      /** Older transfer fee, used if the current epoch < newerTransferFee.epoch. */
      olderTransferFee: TransferFeeArgs;
      /** Newer transfer fee, used if the current epoch >= newerTransferFee.epoch. */
      newerTransferFee: TransferFeeArgs;
    }
  | { __kind: 'TransferFeeAmount'; data: ReadonlyUint8Array }
  | { __kind: 'MintCloseAuthority'; closeAuthority: Address }
  | { __kind: 'ConfidentialTransferMint'; data: ReadonlyUint8Array }
  | { __kind: 'ConfidentialTransferAccount'; data: ReadonlyUint8Array }
  | { __kind: 'DefaultAccountState'; state: AccountStateArgs }
  | { __kind: 'ImmutableOwner'; data: ReadonlyUint8Array }
  | { __kind: 'MemoTransfer'; data: ReadonlyUint8Array }
  | { __kind: 'NonTransferable' }
  | {
      __kind: 'InterestBearingConfig';
      rateAuthority: Address;
      initializationTimestamp: number | bigint;
      preUpdateAverageRate: number;
      lastUpdateTimestamp: number | bigint;
      currentRate: number;
    }
  | { __kind: 'CpiGuard'; data: ReadonlyUint8Array }
  | { __kind: 'PermanentDelegate'; delegate: Address }
  | { __kind: 'NonTransferableAccount'; data: ReadonlyUint8Array }
  | { __kind: 'TransferHook'; data: ReadonlyUint8Array }
  | { __kind: 'TransferHookAccount'; data: ReadonlyUint8Array }
  | { __kind: 'ConfidentialTransferFee'; data: ReadonlyUint8Array }
  | { __kind: 'ConfidentialTransferFeeAmount'; data: ReadonlyUint8Array }
  | { __kind: 'MetadataPointer'; data: ReadonlyUint8Array }
  | { __kind: 'TokenMetadata'; data: ReadonlyUint8Array }
  | { __kind: 'GroupPointer'; data: ReadonlyUint8Array }
  | { __kind: 'TokenGroup'; data: ReadonlyUint8Array }
  | { __kind: 'GroupMemberPointer'; data: ReadonlyUint8Array }
  | { __kind: 'TokenGroupMember'; data: ReadonlyUint8Array };

export function getMintExtensionEncoder(): Encoder<MintExtensionArgs> {
  return getDiscriminatedUnionEncoder(
    [
      ['Uninitialized', getUnitEncoder()],
      [
        'TransferFeeConfig',
        addEncoderSizePrefix(
          getStructEncoder([
            ['transferFeeConfigAuthority', getAddressEncoder()],
            ['withdrawWithheldAuthority', getAddressEncoder()],
            ['withheldAmount', getU64Encoder()],
            ['olderTransferFee', getTransferFeeEncoder()],
            ['newerTransferFee', getTransferFeeEncoder()],
          ]),
          getU16Encoder()
        ),
      ],
      [
        'TransferFeeAmount',
        addEncoderSizePrefix(
          getStructEncoder([['data', getBytesEncoder()]]),
          getU16Encoder()
        ),
      ],
      [
        'MintCloseAuthority',
        addEncoderSizePrefix(
          getStructEncoder([['closeAuthority', getAddressEncoder()]]),
          getU16Encoder()
        ),
      ],
      [
        'ConfidentialTransferMint',
        addEncoderSizePrefix(
          getStructEncoder([['data', getBytesEncoder()]]),
          getU16Encoder()
        ),
      ],
      [
        'ConfidentialTransferAccount',
        addEncoderSizePrefix(
          getStructEncoder([['data', getBytesEncoder()]]),
          getU16Encoder()
        ),
      ],
      [
        'DefaultAccountState',
        addEncoderSizePrefix(
          getStructEncoder([['state', getAccountStateEncoder()]]),
          getU16Encoder()
        ),
      ],
      [
        'ImmutableOwner',
        addEncoderSizePrefix(
          getStructEncoder([['data', getBytesEncoder()]]),
          getU16Encoder()
        ),
      ],
      [
        'MemoTransfer',
        addEncoderSizePrefix(
          getStructEncoder([['data', getBytesEncoder()]]),
          getU16Encoder()
        ),
      ],
      [
        'NonTransferable',
        addEncoderSizePrefix(getStructEncoder([]), getU16Encoder()),
      ],
      [
        'InterestBearingConfig',
        addEncoderSizePrefix(
          getStructEncoder([
            ['rateAuthority', getAddressEncoder()],
            ['initializationTimestamp', getU64Encoder()],
            ['preUpdateAverageRate', getI16Encoder()],
            ['lastUpdateTimestamp', getU64Encoder()],
            ['currentRate', getI16Encoder()],
          ]),
          getU16Encoder()
        ),
      ],
      [
        'CpiGuard',
        addEncoderSizePrefix(
          getStructEncoder([['data', getBytesEncoder()]]),
          getU16Encoder()
        ),
      ],
      [
        'PermanentDelegate',
        addEncoderSizePrefix(
          getStructEncoder([['delegate', getAddressEncoder()]]),
          getU16Encoder()
        ),
      ],
      [
        'NonTransferableAccount',
        addEncoderSizePrefix(
          getStructEncoder([['data', getBytesEncoder()]]),
          getU16Encoder()
        ),
      ],
      [
        'TransferHook',
        addEncoderSizePrefix(
          getStructEncoder([['data', getBytesEncoder()]]),
          getU16Encoder()
        ),
      ],
      [
        'TransferHookAccount',
        addEncoderSizePrefix(
          getStructEncoder([['data', getBytesEncoder()]]),
          getU16Encoder()
        ),
      ],
      [
        'ConfidentialTransferFee',
        addEncoderSizePrefix(
          getStructEncoder([['data', getBytesEncoder()]]),
          getU16Encoder()
        ),
      ],
      [
        'ConfidentialTransferFeeAmount',
        addEncoderSizePrefix(
          getStructEncoder([['data', getBytesEncoder()]]),
          getU16Encoder()
        ),
      ],
      [
        'MetadataPointer',
        addEncoderSizePrefix(
          getStructEncoder([['data', getBytesEncoder()]]),
          getU16Encoder()
        ),
      ],
      [
        'TokenMetadata',
        addEncoderSizePrefix(
          getStructEncoder([['data', getBytesEncoder()]]),
          getU16Encoder()
        ),
      ],
      [
        'GroupPointer',
        addEncoderSizePrefix(
          getStructEncoder([['data', getBytesEncoder()]]),
          getU16Encoder()
        ),
      ],
      [
        'TokenGroup',
        addEncoderSizePrefix(
          getStructEncoder([['data', getBytesEncoder()]]),
          getU16Encoder()
        ),
      ],
      [
        'GroupMemberPointer',
        addEncoderSizePrefix(
          getStructEncoder([['data', getBytesEncoder()]]),
          getU16Encoder()
        ),
      ],
      [
        'TokenGroupMember',
        addEncoderSizePrefix(
          getStructEncoder([['data', getBytesEncoder()]]),
          getU16Encoder()
        ),
      ],
    ],
    { size: getU16Encoder() }
  );
}

export function getMintExtensionDecoder(): Decoder<MintExtension> {
  return getDiscriminatedUnionDecoder(
    [
      ['Uninitialized', getUnitDecoder()],
      [
        'TransferFeeConfig',
        addDecoderSizePrefix(
          getStructDecoder([
            ['transferFeeConfigAuthority', getAddressDecoder()],
            ['withdrawWithheldAuthority', getAddressDecoder()],
            ['withheldAmount', getU64Decoder()],
            ['olderTransferFee', getTransferFeeDecoder()],
            ['newerTransferFee', getTransferFeeDecoder()],
          ]),
          getU16Decoder()
        ),
      ],
      [
        'TransferFeeAmount',
        addDecoderSizePrefix(
          getStructDecoder([['data', getBytesDecoder()]]),
          getU16Decoder()
        ),
      ],
      [
        'MintCloseAuthority',
        addDecoderSizePrefix(
          getStructDecoder([['closeAuthority', getAddressDecoder()]]),
          getU16Decoder()
        ),
      ],
      [
        'ConfidentialTransferMint',
        addDecoderSizePrefix(
          getStructDecoder([['data', getBytesDecoder()]]),
          getU16Decoder()
        ),
      ],
      [
        'ConfidentialTransferAccount',
        addDecoderSizePrefix(
          getStructDecoder([['data', getBytesDecoder()]]),
          getU16Decoder()
        ),
      ],
      [
        'DefaultAccountState',
        addDecoderSizePrefix(
          getStructDecoder([['state', getAccountStateDecoder()]]),
          getU16Decoder()
        ),
      ],
      [
        'ImmutableOwner',
        addDecoderSizePrefix(
          getStructDecoder([['data', getBytesDecoder()]]),
          getU16Decoder()
        ),
      ],
      [
        'MemoTransfer',
        addDecoderSizePrefix(
          getStructDecoder([['data', getBytesDecoder()]]),
          getU16Decoder()
        ),
      ],
      [
        'NonTransferable',
        addDecoderSizePrefix(getStructDecoder([]), getU16Decoder()),
      ],
      [
        'InterestBearingConfig',
        addDecoderSizePrefix(
          getStructDecoder([
            ['rateAuthority', getAddressDecoder()],
            ['initializationTimestamp', getU64Decoder()],
            ['preUpdateAverageRate', getI16Decoder()],
            ['lastUpdateTimestamp', getU64Decoder()],
            ['currentRate', getI16Decoder()],
          ]),
          getU16Decoder()
        ),
      ],
      [
        'CpiGuard',
        addDecoderSizePrefix(
          getStructDecoder([['data', getBytesDecoder()]]),
          getU16Decoder()
        ),
      ],
      [
        'PermanentDelegate',
        addDecoderSizePrefix(
          getStructDecoder([['delegate', getAddressDecoder()]]),
          getU16Decoder()
        ),
      ],
      [
        'NonTransferableAccount',
        addDecoderSizePrefix(
          getStructDecoder([['data', getBytesDecoder()]]),
          getU16Decoder()
        ),
      ],
      [
        'TransferHook',
        addDecoderSizePrefix(
          getStructDecoder([['data', getBytesDecoder()]]),
          getU16Decoder()
        ),
      ],
      [
        'TransferHookAccount',
        addDecoderSizePrefix(
          getStructDecoder([['data', getBytesDecoder()]]),
          getU16Decoder()
        ),
      ],
      [
        'ConfidentialTransferFee',
        addDecoderSizePrefix(
          getStructDecoder([['data', getBytesDecoder()]]),
          getU16Decoder()
        ),
      ],
      [
        'ConfidentialTransferFeeAmount',
        addDecoderSizePrefix(
          getStructDecoder([['data', getBytesDecoder()]]),
          getU16Decoder()
        ),
      ],
      [
        'MetadataPointer',
        addDecoderSizePrefix(
          getStructDecoder([['data', getBytesDecoder()]]),
          getU16Decoder()
        ),
      ],
      [
        'TokenMetadata',
        addDecoderSizePrefix(
          getStructDecoder([['data', getBytesDecoder()]]),
          getU16Decoder()
        ),
      ],
      [
        'GroupPointer',
        addDecoderSizePrefix(
          getStructDecoder([['data', getBytesDecoder()]]),
          getU16Decoder()
        ),
      ],
      [
        'TokenGroup',
        addDecoderSizePrefix(
          getStructDecoder([['data', getBytesDecoder()]]),
          getU16Decoder()
        ),
      ],
      [
        'GroupMemberPointer',
        addDecoderSizePrefix(
          getStructDecoder([['data', getBytesDecoder()]]),
          getU16Decoder()
        ),
      ],
      [
        'TokenGroupMember',
        addDecoderSizePrefix(
          getStructDecoder([['data', getBytesDecoder()]]),
          getU16Decoder()
        ),
      ],
    ],
    { size: getU16Decoder() }
  );
}

export function getMintExtensionCodec(): Codec<
  MintExtensionArgs,
  MintExtension
> {
  return combineCodec(getMintExtensionEncoder(), getMintExtensionDecoder());
}

// Data Enum Helpers.
export function mintExtension(
  kind: 'Uninitialized'
): GetDiscriminatedUnionVariant<MintExtensionArgs, '__kind', 'Uninitialized'>;
export function mintExtension(
  kind: 'TransferFeeConfig',
  data: GetDiscriminatedUnionVariantContent<
    MintExtensionArgs,
    '__kind',
    'TransferFeeConfig'
  >
): GetDiscriminatedUnionVariant<
  MintExtensionArgs,
  '__kind',
  'TransferFeeConfig'
>;
export function mintExtension(
  kind: 'TransferFeeAmount',
  data: GetDiscriminatedUnionVariantContent<
    MintExtensionArgs,
    '__kind',
    'TransferFeeAmount'
  >
): GetDiscriminatedUnionVariant<
  MintExtensionArgs,
  '__kind',
  'TransferFeeAmount'
>;
export function mintExtension(
  kind: 'MintCloseAuthority',
  data: GetDiscriminatedUnionVariantContent<
    MintExtensionArgs,
    '__kind',
    'MintCloseAuthority'
  >
): GetDiscriminatedUnionVariant<
  MintExtensionArgs,
  '__kind',
  'MintCloseAuthority'
>;
export function mintExtension(
  kind: 'ConfidentialTransferMint',
  data: GetDiscriminatedUnionVariantContent<
    MintExtensionArgs,
    '__kind',
    'ConfidentialTransferMint'
  >
): GetDiscriminatedUnionVariant<
  MintExtensionArgs,
  '__kind',
  'ConfidentialTransferMint'
>;
export function mintExtension(
  kind: 'ConfidentialTransferAccount',
  data: GetDiscriminatedUnionVariantContent<
    MintExtensionArgs,
    '__kind',
    'ConfidentialTransferAccount'
  >
): GetDiscriminatedUnionVariant<
  MintExtensionArgs,
  '__kind',
  'ConfidentialTransferAccount'
>;
export function mintExtension(
  kind: 'DefaultAccountState',
  data: GetDiscriminatedUnionVariantContent<
    MintExtensionArgs,
    '__kind',
    'DefaultAccountState'
  >
): GetDiscriminatedUnionVariant<
  MintExtensionArgs,
  '__kind',
  'DefaultAccountState'
>;
export function mintExtension(
  kind: 'ImmutableOwner',
  data: GetDiscriminatedUnionVariantContent<
    MintExtensionArgs,
    '__kind',
    'ImmutableOwner'
  >
): GetDiscriminatedUnionVariant<MintExtensionArgs, '__kind', 'ImmutableOwner'>;
export function mintExtension(
  kind: 'MemoTransfer',
  data: GetDiscriminatedUnionVariantContent<
    MintExtensionArgs,
    '__kind',
    'MemoTransfer'
  >
): GetDiscriminatedUnionVariant<MintExtensionArgs, '__kind', 'MemoTransfer'>;
export function mintExtension(
  kind: 'NonTransferable',
  data: GetDiscriminatedUnionVariantContent<
    MintExtensionArgs,
    '__kind',
    'NonTransferable'
  >
): GetDiscriminatedUnionVariant<MintExtensionArgs, '__kind', 'NonTransferable'>;
export function mintExtension(
  kind: 'InterestBearingConfig',
  data: GetDiscriminatedUnionVariantContent<
    MintExtensionArgs,
    '__kind',
    'InterestBearingConfig'
  >
): GetDiscriminatedUnionVariant<
  MintExtensionArgs,
  '__kind',
  'InterestBearingConfig'
>;
export function mintExtension(
  kind: 'CpiGuard',
  data: GetDiscriminatedUnionVariantContent<
    MintExtensionArgs,
    '__kind',
    'CpiGuard'
  >
): GetDiscriminatedUnionVariant<MintExtensionArgs, '__kind', 'CpiGuard'>;
export function mintExtension(
  kind: 'PermanentDelegate',
  data: GetDiscriminatedUnionVariantContent<
    MintExtensionArgs,
    '__kind',
    'PermanentDelegate'
  >
): GetDiscriminatedUnionVariant<
  MintExtensionArgs,
  '__kind',
  'PermanentDelegate'
>;
export function mintExtension(
  kind: 'NonTransferableAccount',
  data: GetDiscriminatedUnionVariantContent<
    MintExtensionArgs,
    '__kind',
    'NonTransferableAccount'
  >
): GetDiscriminatedUnionVariant<
  MintExtensionArgs,
  '__kind',
  'NonTransferableAccount'
>;
export function mintExtension(
  kind: 'TransferHook',
  data: GetDiscriminatedUnionVariantContent<
    MintExtensionArgs,
    '__kind',
    'TransferHook'
  >
): GetDiscriminatedUnionVariant<MintExtensionArgs, '__kind', 'TransferHook'>;
export function mintExtension(
  kind: 'TransferHookAccount',
  data: GetDiscriminatedUnionVariantContent<
    MintExtensionArgs,
    '__kind',
    'TransferHookAccount'
  >
): GetDiscriminatedUnionVariant<
  MintExtensionArgs,
  '__kind',
  'TransferHookAccount'
>;
export function mintExtension(
  kind: 'ConfidentialTransferFee',
  data: GetDiscriminatedUnionVariantContent<
    MintExtensionArgs,
    '__kind',
    'ConfidentialTransferFee'
  >
): GetDiscriminatedUnionVariant<
  MintExtensionArgs,
  '__kind',
  'ConfidentialTransferFee'
>;
export function mintExtension(
  kind: 'ConfidentialTransferFeeAmount',
  data: GetDiscriminatedUnionVariantContent<
    MintExtensionArgs,
    '__kind',
    'ConfidentialTransferFeeAmount'
  >
): GetDiscriminatedUnionVariant<
  MintExtensionArgs,
  '__kind',
  'ConfidentialTransferFeeAmount'
>;
export function mintExtension(
  kind: 'MetadataPointer',
  data: GetDiscriminatedUnionVariantContent<
    MintExtensionArgs,
    '__kind',
    'MetadataPointer'
  >
): GetDiscriminatedUnionVariant<MintExtensionArgs, '__kind', 'MetadataPointer'>;
export function mintExtension(
  kind: 'TokenMetadata',
  data: GetDiscriminatedUnionVariantContent<
    MintExtensionArgs,
    '__kind',
    'TokenMetadata'
  >
): GetDiscriminatedUnionVariant<MintExtensionArgs, '__kind', 'TokenMetadata'>;
export function mintExtension(
  kind: 'GroupPointer',
  data: GetDiscriminatedUnionVariantContent<
    MintExtensionArgs,
    '__kind',
    'GroupPointer'
  >
): GetDiscriminatedUnionVariant<MintExtensionArgs, '__kind', 'GroupPointer'>;
export function mintExtension(
  kind: 'TokenGroup',
  data: GetDiscriminatedUnionVariantContent<
    MintExtensionArgs,
    '__kind',
    'TokenGroup'
  >
): GetDiscriminatedUnionVariant<MintExtensionArgs, '__kind', 'TokenGroup'>;
export function mintExtension(
  kind: 'GroupMemberPointer',
  data: GetDiscriminatedUnionVariantContent<
    MintExtensionArgs,
    '__kind',
    'GroupMemberPointer'
  >
): GetDiscriminatedUnionVariant<
  MintExtensionArgs,
  '__kind',
  'GroupMemberPointer'
>;
export function mintExtension(
  kind: 'TokenGroupMember',
  data: GetDiscriminatedUnionVariantContent<
    MintExtensionArgs,
    '__kind',
    'TokenGroupMember'
  >
): GetDiscriminatedUnionVariant<
  MintExtensionArgs,
  '__kind',
  'TokenGroupMember'
>;
export function mintExtension<K extends MintExtensionArgs['__kind'], Data>(
  kind: K,
  data?: Data
) {
  return Array.isArray(data)
    ? { __kind: kind, fields: data }
    : { __kind: kind, ...(data ?? {}) };
}

export function isMintExtension<K extends MintExtension['__kind']>(
  kind: K,
  value: MintExtension
): value is MintExtension & { __kind: K } {
  return value.__kind === kind;
}
