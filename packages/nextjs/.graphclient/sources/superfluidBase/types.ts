// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace SuperfluidBaseTypes {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigDecimal: { input: any; output: any; }
  BigInt: { input: any; output: any; }
  Bytes: { input: any; output: any; }
  Int8: { input: any; output: any; }
  Timestamp: { input: any; output: any; }
};

/**
 * Account: A higher order entity created for any addresses which interact with Superfluid contracts.
 *
 */
export type Account = {
  id: Scalars['ID']['output'];
  createdAtTimestamp: Scalars['BigInt']['output'];
  createdAtBlockNumber: Scalars['BigInt']['output'];
  updatedAtTimestamp: Scalars['BigInt']['output'];
  updatedAtBlockNumber: Scalars['BigInt']['output'];
  /**
   * Indicates whether the address/account is a super app.
   *
   */
  isSuperApp: Scalars['Boolean']['output'];
  inflows: Array<Stream>;
  outflows: Array<Stream>;
  subscriptions: Array<IndexSubscription>;
  publishedIndexes: Array<Index>;
  pools: Array<Pool>;
  poolMemberships: Array<PoolMember>;
  sentTransferEvents: Array<TransferEvent>;
  receivedTransferEvents: Array<TransferEvent>;
  tokenUpgradedEvents: Array<TokenUpgradedEvent>;
  tokenDowngradedEvents: Array<TokenDowngradedEvent>;
  accountTokenSnapshots: Array<AccountTokenSnapshot>;
};


/**
 * Account: A higher order entity created for any addresses which interact with Superfluid contracts.
 *
 */
export type AccountinflowsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Stream_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Stream_filter>;
};


/**
 * Account: A higher order entity created for any addresses which interact with Superfluid contracts.
 *
 */
export type AccountoutflowsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Stream_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Stream_filter>;
};


/**
 * Account: A higher order entity created for any addresses which interact with Superfluid contracts.
 *
 */
export type AccountsubscriptionsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<IndexSubscription_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<IndexSubscription_filter>;
};


/**
 * Account: A higher order entity created for any addresses which interact with Superfluid contracts.
 *
 */
export type AccountpublishedIndexesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Index_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Index_filter>;
};


/**
 * Account: A higher order entity created for any addresses which interact with Superfluid contracts.
 *
 */
export type AccountpoolsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pool_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Pool_filter>;
};


/**
 * Account: A higher order entity created for any addresses which interact with Superfluid contracts.
 *
 */
export type AccountpoolMembershipsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PoolMember_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PoolMember_filter>;
};


/**
 * Account: A higher order entity created for any addresses which interact with Superfluid contracts.
 *
 */
export type AccountsentTransferEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TransferEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TransferEvent_filter>;
};


/**
 * Account: A higher order entity created for any addresses which interact with Superfluid contracts.
 *
 */
export type AccountreceivedTransferEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TransferEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TransferEvent_filter>;
};


/**
 * Account: A higher order entity created for any addresses which interact with Superfluid contracts.
 *
 */
export type AccounttokenUpgradedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TokenUpgradedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenUpgradedEvent_filter>;
};


/**
 * Account: A higher order entity created for any addresses which interact with Superfluid contracts.
 *
 */
export type AccounttokenDowngradedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TokenDowngradedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenDowngradedEvent_filter>;
};


/**
 * Account: A higher order entity created for any addresses which interact with Superfluid contracts.
 *
 */
export type AccountaccountTokenSnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AccountTokenSnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AccountTokenSnapshot_filter>;
};

/**
 * AccountTokenSnapshot: An aggregate entity which aggregates data between an `account`'s interaction with `token`.
 *
 */
export type AccountTokenSnapshot = {
  /**
   * ID composed of: accountID-tokenID
   *
   */
  id: Scalars['ID']['output'];
  createdAtTimestamp: Scalars['BigInt']['output'];
  createdAtBlockNumber: Scalars['BigInt']['output'];
  updatedAtTimestamp: Scalars['BigInt']['output'];
  updatedAtBlockNumber: Scalars['BigInt']['output'];
  /**
   * isLiquidationEstimateOptimistic, If `totalSubscriptionsWithUnits > 0`, it is true.
   * "Optimistic" can be thought of as conservative as it refers to the earliest time the user may be liquidated as they may receive ongoing distributions which aren't tracked by the subgraph.
   *
   */
  isLiquidationEstimateOptimistic: Scalars['Boolean']['output'];
  /**
   * Optimistic liquidation estimation property.
   *
   */
  maybeCriticalAtTimestamp?: Maybe<Scalars['BigInt']['output']>;
  /**
   * The count of currently open streams for an account, both incoming and outgoing for all agreements.
   *
   */
  totalNumberOfActiveStreams: Scalars['Int']['output'];
  /**
   * The count of currently open streams for an account, both incoming and outgoing for the CFA.
   *
   */
  totalCFANumberOfActiveStreams: Scalars['Int']['output'];
  /**
   * The count of currently open streams for an account, both incoming and outgoing for the GDA.
   *
   */
  totalGDANumberOfActiveStreams: Scalars['Int']['output'];
  /**
   * The count of active outgoing streams from this account for all agreements.
   *
   */
  activeOutgoingStreamCount: Scalars['Int']['output'];
  /**
   * The count of active outgoing streams from this account for the CFA.
   *
   */
  activeCFAOutgoingStreamCount: Scalars['Int']['output'];
  /**
   * The count of active outgoing streams from this account for the GDA.
   *
   */
  activeGDAOutgoingStreamCount: Scalars['Int']['output'];
  /**
   * The count of active incoming streams to this account for the CFA.
   * GDA incoming streams are *NOT* counted here.
   *
   */
  activeIncomingStreamCount: Scalars['Int']['output'];
  /**
   * The count of closed streams by `account`, both incoming and outgoing for all agreements.
   *
   */
  totalNumberOfClosedStreams: Scalars['Int']['output'];
  /**
   * The count of closed streams by `account`, both incoming and outgoing for the CFA.
   *
   */
  totalCFANumberOfClosedStreams: Scalars['Int']['output'];
  /**
   * The count of closed streams by `account`, both incoming and outgoing for the GDA.
   *
   */
  totalGDANumberOfClosedStreams: Scalars['Int']['output'];
  /**
   * The count of closed outgoing streams by `account` for all agreements.
   *
   */
  inactiveOutgoingStreamCount: Scalars['Int']['output'];
  /**
   * The count of closed outgoing streams by `account` for the CFA.
   *
   */
  inactiveCFAOutgoingStreamCount: Scalars['Int']['output'];
  /**
   * The count of closed outgoing streams by `account` for the GDA.
   *
   */
  inactiveGDAOutgoingStreamCount: Scalars['Int']['output'];
  /**
   * The count of closed incoming streams by `account` for the CFA.
   * Close incoming GDA streams are *NOT* counted here.
   *
   */
  inactiveIncomingStreamCount: Scalars['Int']['output'];
  /**
   * The current (as of updatedAt) number of subscriptions with units allocated to them tied to this `account`.
   *
   */
  totalSubscriptionsWithUnits: Scalars['Int']['output'];
  /**
   * Counts all currently (as of updatedAt) approved subscriptions whether or not they have units.
   *
   */
  totalApprovedSubscriptions: Scalars['Int']['output'];
  /**
   * The current (as of updatedAt) number of membership with units allocated to them tied to this `account`. (both IDA and GDA)
   *
   */
  totalMembershipsWithUnits: Scalars['Int']['output'];
  /**
   * Counts all currently (as of updatedAt) approved membership whether or not they have units. (both IDA and GDA)
   *
   */
  totalConnectedMemberships: Scalars['Int']['output'];
  /**
   * Counts how many pools the account is a pool admin of. The pool admin can be set arbitrarily when creating a GDA pool. The pool admin might receive an "adjustment flow" if the pool has a flow distribution.
   *
   */
  adminOfPoolCount: Scalars['Int']['output'];
  /**
   * Balance of `account` as of `updatedAtTimestamp`/`updatedAtBlock`.
   *
   */
  balanceUntilUpdatedAt: Scalars['BigInt']['output'];
  /**
   * The last block the balance was queried from an RPC (the most accurate source for balance data).
   *
   */
  balanceLastUpdatedFromRpcBlocknumber?: Maybe<Scalars['BigInt']['output']>;
  /**
   * The total deposit this account has held by all flow agreements for `account` active streams.
   *
   */
  totalDeposit: Scalars['BigInt']['output'];
  /**
   * The total deposit this account has held by the CFA agreement for `account` active streams.
   *
   */
  totalCFADeposit: Scalars['BigInt']['output'];
  /**
   * The total deposit this account has held by the GDA agreement for `account` active streams.
   *
   */
  totalGDADeposit: Scalars['BigInt']['output'];
  /**
   * The total net flow rate of the `account` as of `updatedAtTimestamp`/`updatedAtBlock` for all flow agreements.
   * This can be obtained by: `totalInflowRate - totalOutflowRate`.
   * NOTE: this property will NOT be 100% accurate all the time for receivers of GDA flows.
   *
   */
  totalNetFlowRate: Scalars['BigInt']['output'];
  /**
   * The total net flow rate of the `account` as of `updatedAtTimestamp`/`updatedAtBlock` for the CFA.
   *
   */
  totalCFANetFlowRate: Scalars['BigInt']['output'];
  /**
   * The total inflow rate (receive flowRate per second) of the `account` for the CFA.
   * GDA inflow rate is *NOT* included here.
   *
   */
  totalInflowRate: Scalars['BigInt']['output'];
  /**
   * The total outflow rate (send flowrate per second) of the `account` for all flow agreements.
   *
   */
  totalOutflowRate: Scalars['BigInt']['output'];
  /**
   * The total outflow rate (send flowrate per second) of the `account` for the CFA.
   *
   */
  totalCFAOutflowRate: Scalars['BigInt']['output'];
  /**
   * The total outflow rate (send flowrate per second) of the `account` for the GDA.
   *
   */
  totalGDAOutflowRate: Scalars['BigInt']['output'];
  /**
   * The total amount of `token` streamed into this `account` until the `updatedAtTimestamp`/`updatedAtBlock` for the CFA.
   *
   */
  totalAmountStreamedInUntilUpdatedAt: Scalars['BigInt']['output'];
  /**
   * The total amount of `token` streamed from this `account` until the `updatedAtTimestamp`/`updatedAtBlock` for all flow agreements.
   *
   */
  totalAmountStreamedOutUntilUpdatedAt: Scalars['BigInt']['output'];
  /**
   * The total amount of `token` streamed from this `account` until the `updatedAtTimestamp`/`updatedAtBlock` for the CFA.
   *
   */
  totalCFAAmountStreamedOutUntilUpdatedAt: Scalars['BigInt']['output'];
  /**
   * The total amount of `token` streamed through this `account` until the `updatedAtTimestamp`/`updatedAtBlock` for all flow agreements.
   *
   */
  totalAmountStreamedUntilUpdatedAt: Scalars['BigInt']['output'];
  /**
   * The total amount of `token` streamed through this `account` until the `updatedAtTimestamp`/`updatedAtBlock` for the CFA.
   *
   */
  totalCFAAmountStreamedUntilUpdatedAt: Scalars['BigInt']['output'];
  /**
   * The total amount of `token` this `account` has transferred.
   *
   */
  totalAmountTransferredUntilUpdatedAt: Scalars['BigInt']['output'];
  account: Account;
  token: Token;
  flowOperators: Array<FlowOperator>;
  accountTokenSnapshotLogs: Array<AccountTokenSnapshotLog>;
};


/**
 * AccountTokenSnapshot: An aggregate entity which aggregates data between an `account`'s interaction with `token`.
 *
 */
export type AccountTokenSnapshotflowOperatorsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FlowOperator_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FlowOperator_filter>;
};


/**
 * AccountTokenSnapshot: An aggregate entity which aggregates data between an `account`'s interaction with `token`.
 *
 */
export type AccountTokenSnapshotaccountTokenSnapshotLogsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AccountTokenSnapshotLog_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AccountTokenSnapshotLog_filter>;
};

/**
 * AccountTokenSnapshotLog: Historical entries of `AccountTokenSnapshot` updates.
 *
 */
export type AccountTokenSnapshotLog = {
  id: Scalars['ID']['output'];
  timestamp: Scalars['BigInt']['output'];
  blockNumber: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
  logIndex: Scalars['BigInt']['output'];
  order: Scalars['BigInt']['output'];
  triggeredByEventName: Scalars['String']['output'];
  /**
   * Optimistic liquidation estimation property.
   *
   */
  maybeCriticalAtTimestamp?: Maybe<Scalars['BigInt']['output']>;
  /**
   * The current (as of timestamp) number of open streams for all agreements.
   *
   */
  totalNumberOfActiveStreams: Scalars['Int']['output'];
  /**
   * The current (as of timestamp) number of open streams.
   *
   */
  totalCFANumberOfActiveStreams: Scalars['Int']['output'];
  /**
   * The current (as of timestamp) number of open streams.
   *
   */
  totalGDANumberOfActiveStreams: Scalars['Int']['output'];
  /**
   * The count of active outgoing streams from this account for all agreements.
   *
   */
  activeOutgoingStreamCount: Scalars['Int']['output'];
  /**
   * The count of active outgoing streams from this account.
   *
   */
  activeCFAOutgoingStreamCount: Scalars['Int']['output'];
  /**
   * The count of active outgoing streams from this account.
   *
   */
  activeGDAOutgoingStreamCount: Scalars['Int']['output'];
  /**
   * The count of active incoming streams to this account for all agreements.
   *
   */
  activeIncomingStreamCount: Scalars['Int']['output'];
  /**
   * The current (as of timestamp) count of closed streams for all agreements.
   *
   */
  totalNumberOfClosedStreams: Scalars['Int']['output'];
  /**
   * The current (as of timestamp) count of closed streams for the CFA.
   *
   */
  totalCFANumberOfClosedStreams: Scalars['Int']['output'];
  /**
   * The current (as of timestamp) count of closed streams for the GDA.
   *
   */
  totalGDANumberOfClosedStreams: Scalars['Int']['output'];
  /**
   * The count of closed outgoing streams by `account` for all agreements.
   *
   */
  inactiveOutgoingStreamCount: Scalars['Int']['output'];
  /**
   * The count of closed outgoing streams by `account` for the CFA.
   *
   */
  inactiveCFAOutgoingStreamCount: Scalars['Int']['output'];
  /**
   * The count of closed outgoing streams by `account` for the GDA.
   *
   */
  inactiveGDAOutgoingStreamCount: Scalars['Int']['output'];
  /**
   * The count of closed incoming streams by `account` for the CFA.
   * Close incoming GDA streams are *NOT* counted here.
   *
   */
  inactiveIncomingStreamCount: Scalars['Int']['output'];
  /**
   * The current (as of timestamp) number of subscriptions with units allocated to them tied to this `account`.
   *
   */
  totalSubscriptionsWithUnits: Scalars['Int']['output'];
  /**
   * Counts all currently (as of timestamp) approved subscriptions whether or not they have units.
   *
   */
  totalApprovedSubscriptions: Scalars['Int']['output'];
  /**
   * The current (as of timestamp) number of membership with units allocated to them tied to this `account`.
   *
   */
  totalMembershipsWithUnits: Scalars['Int']['output'];
  /**
   * Counts all currently (as of timestamp) connected membership whether or not they have units.
   *
   */
  totalConnectedMemberships: Scalars['Int']['output'];
  /**
   * Balance of `account` as of `timestamp`/`block`.
   *
   */
  balance: Scalars['BigInt']['output'];
  /**
   * The total (as of timestamp) deposit this account has held by all flow agreements for `account` active streams.
   *
   */
  totalDeposit: Scalars['BigInt']['output'];
  /**
   * The total (as of timestamp) deposit this account has held by the CFA agreement for `account` active streams.
   *
   */
  totalCFADeposit: Scalars['BigInt']['output'];
  /**
   * The total (as of timestamp) deposit this account has held by the GDA agreement for `account` active streams.
   *
   */
  totalGDADeposit: Scalars['BigInt']['output'];
  /**
   * The total (as of timestamp) net flow rate of the `account` as of `timestamp`/`block`.
   * This can be obtained by: `totalInflowRate - totalOutflowRate`
   *
   */
  totalNetFlowRate: Scalars['BigInt']['output'];
  /**
   * The total (as of timestamp) net flow rate of the `account` as of `timestamp`/`block` for the CFA.
   *
   */
  totalCFANetFlowRate: Scalars['BigInt']['output'];
  /**
   * The total (as of timestamp) inflow rate (receive flowRate per second) of the `account`.
   *
   */
  totalInflowRate: Scalars['BigInt']['output'];
  /**
   * The total (as of timestamp) outflow rate (send flowrate per second) of the `account`.
   *
   */
  totalOutflowRate: Scalars['BigInt']['output'];
  /**
   * The total (as of timestamp) outflow rate (send flowrate per second) of the `account` for the CFA.
   *
   */
  totalCFAOutflowRate: Scalars['BigInt']['output'];
  /**
   * The total (as of timestamp) outflow rate (send flowrate per second) of the `account` for the GDA.
   *
   */
  totalGDAOutflowRate: Scalars['BigInt']['output'];
  /**
   * The total (as of timestamp) amount of `token` streamed into this `account` until the `timestamp`/`block`.
   *
   */
  totalAmountStreamedIn: Scalars['BigInt']['output'];
  /**
   * The total (as of timestamp) amount of `token` streamed from this `account` until the `timestamp`/`block`.
   *
   */
  totalAmountStreamedOut: Scalars['BigInt']['output'];
  /**
   * The total (as of timestamp) amount of `token` streamed from this `account` until the `timestamp`/`block` for the CFA.
   *
   */
  totalCFAAmountStreamedOut: Scalars['BigInt']['output'];
  /**
   * The total (as of timestamp) net amount of `token` streamed through this `account` until the `timestamp`/`block`.
   *
   */
  totalAmountStreamed: Scalars['BigInt']['output'];
  /**
   * The total (as of timestamp) net amount of `token` streamed through this `account` until the `timestamp`/`block` for the CFA.
   *
   */
  totalCFAAmountStreamed: Scalars['BigInt']['output'];
  /**
   * The total (as of timestamp) amount of `token` this `account` has transferred out until the `timestamp`/`block`.
   *
   */
  totalAmountTransferred: Scalars['BigInt']['output'];
  account: Account;
  token: Token;
  accountTokenSnapshot: AccountTokenSnapshot;
};

export type AccountTokenSnapshotLog_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order?: InputMaybe<Scalars['BigInt']['input']>;
  order_not?: InputMaybe<Scalars['BigInt']['input']>;
  order_gt?: InputMaybe<Scalars['BigInt']['input']>;
  order_lt?: InputMaybe<Scalars['BigInt']['input']>;
  order_gte?: InputMaybe<Scalars['BigInt']['input']>;
  order_lte?: InputMaybe<Scalars['BigInt']['input']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  triggeredByEventName?: InputMaybe<Scalars['String']['input']>;
  triggeredByEventName_not?: InputMaybe<Scalars['String']['input']>;
  triggeredByEventName_gt?: InputMaybe<Scalars['String']['input']>;
  triggeredByEventName_lt?: InputMaybe<Scalars['String']['input']>;
  triggeredByEventName_gte?: InputMaybe<Scalars['String']['input']>;
  triggeredByEventName_lte?: InputMaybe<Scalars['String']['input']>;
  triggeredByEventName_in?: InputMaybe<Array<Scalars['String']['input']>>;
  triggeredByEventName_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  triggeredByEventName_contains?: InputMaybe<Scalars['String']['input']>;
  triggeredByEventName_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  triggeredByEventName_not_contains?: InputMaybe<Scalars['String']['input']>;
  triggeredByEventName_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  triggeredByEventName_starts_with?: InputMaybe<Scalars['String']['input']>;
  triggeredByEventName_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  triggeredByEventName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  triggeredByEventName_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  triggeredByEventName_ends_with?: InputMaybe<Scalars['String']['input']>;
  triggeredByEventName_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  triggeredByEventName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  triggeredByEventName_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  maybeCriticalAtTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  maybeCriticalAtTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  maybeCriticalAtTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  maybeCriticalAtTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  maybeCriticalAtTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  maybeCriticalAtTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  maybeCriticalAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  maybeCriticalAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalNumberOfActiveStreams?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfActiveStreams_not?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfActiveStreams_gt?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfActiveStreams_lt?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfActiveStreams_gte?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfActiveStreams_lte?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfActiveStreams_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalNumberOfActiveStreams_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalCFANumberOfActiveStreams?: InputMaybe<Scalars['Int']['input']>;
  totalCFANumberOfActiveStreams_not?: InputMaybe<Scalars['Int']['input']>;
  totalCFANumberOfActiveStreams_gt?: InputMaybe<Scalars['Int']['input']>;
  totalCFANumberOfActiveStreams_lt?: InputMaybe<Scalars['Int']['input']>;
  totalCFANumberOfActiveStreams_gte?: InputMaybe<Scalars['Int']['input']>;
  totalCFANumberOfActiveStreams_lte?: InputMaybe<Scalars['Int']['input']>;
  totalCFANumberOfActiveStreams_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalCFANumberOfActiveStreams_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalGDANumberOfActiveStreams?: InputMaybe<Scalars['Int']['input']>;
  totalGDANumberOfActiveStreams_not?: InputMaybe<Scalars['Int']['input']>;
  totalGDANumberOfActiveStreams_gt?: InputMaybe<Scalars['Int']['input']>;
  totalGDANumberOfActiveStreams_lt?: InputMaybe<Scalars['Int']['input']>;
  totalGDANumberOfActiveStreams_gte?: InputMaybe<Scalars['Int']['input']>;
  totalGDANumberOfActiveStreams_lte?: InputMaybe<Scalars['Int']['input']>;
  totalGDANumberOfActiveStreams_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalGDANumberOfActiveStreams_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  activeOutgoingStreamCount?: InputMaybe<Scalars['Int']['input']>;
  activeOutgoingStreamCount_not?: InputMaybe<Scalars['Int']['input']>;
  activeOutgoingStreamCount_gt?: InputMaybe<Scalars['Int']['input']>;
  activeOutgoingStreamCount_lt?: InputMaybe<Scalars['Int']['input']>;
  activeOutgoingStreamCount_gte?: InputMaybe<Scalars['Int']['input']>;
  activeOutgoingStreamCount_lte?: InputMaybe<Scalars['Int']['input']>;
  activeOutgoingStreamCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  activeOutgoingStreamCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  activeCFAOutgoingStreamCount?: InputMaybe<Scalars['Int']['input']>;
  activeCFAOutgoingStreamCount_not?: InputMaybe<Scalars['Int']['input']>;
  activeCFAOutgoingStreamCount_gt?: InputMaybe<Scalars['Int']['input']>;
  activeCFAOutgoingStreamCount_lt?: InputMaybe<Scalars['Int']['input']>;
  activeCFAOutgoingStreamCount_gte?: InputMaybe<Scalars['Int']['input']>;
  activeCFAOutgoingStreamCount_lte?: InputMaybe<Scalars['Int']['input']>;
  activeCFAOutgoingStreamCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  activeCFAOutgoingStreamCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  activeGDAOutgoingStreamCount?: InputMaybe<Scalars['Int']['input']>;
  activeGDAOutgoingStreamCount_not?: InputMaybe<Scalars['Int']['input']>;
  activeGDAOutgoingStreamCount_gt?: InputMaybe<Scalars['Int']['input']>;
  activeGDAOutgoingStreamCount_lt?: InputMaybe<Scalars['Int']['input']>;
  activeGDAOutgoingStreamCount_gte?: InputMaybe<Scalars['Int']['input']>;
  activeGDAOutgoingStreamCount_lte?: InputMaybe<Scalars['Int']['input']>;
  activeGDAOutgoingStreamCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  activeGDAOutgoingStreamCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  activeIncomingStreamCount?: InputMaybe<Scalars['Int']['input']>;
  activeIncomingStreamCount_not?: InputMaybe<Scalars['Int']['input']>;
  activeIncomingStreamCount_gt?: InputMaybe<Scalars['Int']['input']>;
  activeIncomingStreamCount_lt?: InputMaybe<Scalars['Int']['input']>;
  activeIncomingStreamCount_gte?: InputMaybe<Scalars['Int']['input']>;
  activeIncomingStreamCount_lte?: InputMaybe<Scalars['Int']['input']>;
  activeIncomingStreamCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  activeIncomingStreamCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalNumberOfClosedStreams?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfClosedStreams_not?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfClosedStreams_gt?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfClosedStreams_lt?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfClosedStreams_gte?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfClosedStreams_lte?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfClosedStreams_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalNumberOfClosedStreams_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalCFANumberOfClosedStreams?: InputMaybe<Scalars['Int']['input']>;
  totalCFANumberOfClosedStreams_not?: InputMaybe<Scalars['Int']['input']>;
  totalCFANumberOfClosedStreams_gt?: InputMaybe<Scalars['Int']['input']>;
  totalCFANumberOfClosedStreams_lt?: InputMaybe<Scalars['Int']['input']>;
  totalCFANumberOfClosedStreams_gte?: InputMaybe<Scalars['Int']['input']>;
  totalCFANumberOfClosedStreams_lte?: InputMaybe<Scalars['Int']['input']>;
  totalCFANumberOfClosedStreams_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalCFANumberOfClosedStreams_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalGDANumberOfClosedStreams?: InputMaybe<Scalars['Int']['input']>;
  totalGDANumberOfClosedStreams_not?: InputMaybe<Scalars['Int']['input']>;
  totalGDANumberOfClosedStreams_gt?: InputMaybe<Scalars['Int']['input']>;
  totalGDANumberOfClosedStreams_lt?: InputMaybe<Scalars['Int']['input']>;
  totalGDANumberOfClosedStreams_gte?: InputMaybe<Scalars['Int']['input']>;
  totalGDANumberOfClosedStreams_lte?: InputMaybe<Scalars['Int']['input']>;
  totalGDANumberOfClosedStreams_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalGDANumberOfClosedStreams_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  inactiveOutgoingStreamCount?: InputMaybe<Scalars['Int']['input']>;
  inactiveOutgoingStreamCount_not?: InputMaybe<Scalars['Int']['input']>;
  inactiveOutgoingStreamCount_gt?: InputMaybe<Scalars['Int']['input']>;
  inactiveOutgoingStreamCount_lt?: InputMaybe<Scalars['Int']['input']>;
  inactiveOutgoingStreamCount_gte?: InputMaybe<Scalars['Int']['input']>;
  inactiveOutgoingStreamCount_lte?: InputMaybe<Scalars['Int']['input']>;
  inactiveOutgoingStreamCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  inactiveOutgoingStreamCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  inactiveCFAOutgoingStreamCount?: InputMaybe<Scalars['Int']['input']>;
  inactiveCFAOutgoingStreamCount_not?: InputMaybe<Scalars['Int']['input']>;
  inactiveCFAOutgoingStreamCount_gt?: InputMaybe<Scalars['Int']['input']>;
  inactiveCFAOutgoingStreamCount_lt?: InputMaybe<Scalars['Int']['input']>;
  inactiveCFAOutgoingStreamCount_gte?: InputMaybe<Scalars['Int']['input']>;
  inactiveCFAOutgoingStreamCount_lte?: InputMaybe<Scalars['Int']['input']>;
  inactiveCFAOutgoingStreamCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  inactiveCFAOutgoingStreamCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  inactiveGDAOutgoingStreamCount?: InputMaybe<Scalars['Int']['input']>;
  inactiveGDAOutgoingStreamCount_not?: InputMaybe<Scalars['Int']['input']>;
  inactiveGDAOutgoingStreamCount_gt?: InputMaybe<Scalars['Int']['input']>;
  inactiveGDAOutgoingStreamCount_lt?: InputMaybe<Scalars['Int']['input']>;
  inactiveGDAOutgoingStreamCount_gte?: InputMaybe<Scalars['Int']['input']>;
  inactiveGDAOutgoingStreamCount_lte?: InputMaybe<Scalars['Int']['input']>;
  inactiveGDAOutgoingStreamCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  inactiveGDAOutgoingStreamCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  inactiveIncomingStreamCount?: InputMaybe<Scalars['Int']['input']>;
  inactiveIncomingStreamCount_not?: InputMaybe<Scalars['Int']['input']>;
  inactiveIncomingStreamCount_gt?: InputMaybe<Scalars['Int']['input']>;
  inactiveIncomingStreamCount_lt?: InputMaybe<Scalars['Int']['input']>;
  inactiveIncomingStreamCount_gte?: InputMaybe<Scalars['Int']['input']>;
  inactiveIncomingStreamCount_lte?: InputMaybe<Scalars['Int']['input']>;
  inactiveIncomingStreamCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  inactiveIncomingStreamCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalSubscriptionsWithUnits?: InputMaybe<Scalars['Int']['input']>;
  totalSubscriptionsWithUnits_not?: InputMaybe<Scalars['Int']['input']>;
  totalSubscriptionsWithUnits_gt?: InputMaybe<Scalars['Int']['input']>;
  totalSubscriptionsWithUnits_lt?: InputMaybe<Scalars['Int']['input']>;
  totalSubscriptionsWithUnits_gte?: InputMaybe<Scalars['Int']['input']>;
  totalSubscriptionsWithUnits_lte?: InputMaybe<Scalars['Int']['input']>;
  totalSubscriptionsWithUnits_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalSubscriptionsWithUnits_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalApprovedSubscriptions?: InputMaybe<Scalars['Int']['input']>;
  totalApprovedSubscriptions_not?: InputMaybe<Scalars['Int']['input']>;
  totalApprovedSubscriptions_gt?: InputMaybe<Scalars['Int']['input']>;
  totalApprovedSubscriptions_lt?: InputMaybe<Scalars['Int']['input']>;
  totalApprovedSubscriptions_gte?: InputMaybe<Scalars['Int']['input']>;
  totalApprovedSubscriptions_lte?: InputMaybe<Scalars['Int']['input']>;
  totalApprovedSubscriptions_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalApprovedSubscriptions_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalMembershipsWithUnits?: InputMaybe<Scalars['Int']['input']>;
  totalMembershipsWithUnits_not?: InputMaybe<Scalars['Int']['input']>;
  totalMembershipsWithUnits_gt?: InputMaybe<Scalars['Int']['input']>;
  totalMembershipsWithUnits_lt?: InputMaybe<Scalars['Int']['input']>;
  totalMembershipsWithUnits_gte?: InputMaybe<Scalars['Int']['input']>;
  totalMembershipsWithUnits_lte?: InputMaybe<Scalars['Int']['input']>;
  totalMembershipsWithUnits_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalMembershipsWithUnits_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalConnectedMemberships?: InputMaybe<Scalars['Int']['input']>;
  totalConnectedMemberships_not?: InputMaybe<Scalars['Int']['input']>;
  totalConnectedMemberships_gt?: InputMaybe<Scalars['Int']['input']>;
  totalConnectedMemberships_lt?: InputMaybe<Scalars['Int']['input']>;
  totalConnectedMemberships_gte?: InputMaybe<Scalars['Int']['input']>;
  totalConnectedMemberships_lte?: InputMaybe<Scalars['Int']['input']>;
  totalConnectedMemberships_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalConnectedMemberships_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  balance?: InputMaybe<Scalars['BigInt']['input']>;
  balance_not?: InputMaybe<Scalars['BigInt']['input']>;
  balance_gt?: InputMaybe<Scalars['BigInt']['input']>;
  balance_lt?: InputMaybe<Scalars['BigInt']['input']>;
  balance_gte?: InputMaybe<Scalars['BigInt']['input']>;
  balance_lte?: InputMaybe<Scalars['BigInt']['input']>;
  balance_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  balance_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalDeposit?: InputMaybe<Scalars['BigInt']['input']>;
  totalDeposit_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalDeposit_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalDeposit_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalDeposit_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalDeposit_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalDeposit_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalDeposit_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalCFADeposit?: InputMaybe<Scalars['BigInt']['input']>;
  totalCFADeposit_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalCFADeposit_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalCFADeposit_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalCFADeposit_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalCFADeposit_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalCFADeposit_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalCFADeposit_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalGDADeposit?: InputMaybe<Scalars['BigInt']['input']>;
  totalGDADeposit_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalGDADeposit_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalGDADeposit_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalGDADeposit_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalGDADeposit_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalGDADeposit_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalGDADeposit_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalNetFlowRate?: InputMaybe<Scalars['BigInt']['input']>;
  totalNetFlowRate_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalNetFlowRate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalNetFlowRate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalNetFlowRate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalNetFlowRate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalNetFlowRate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalNetFlowRate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalCFANetFlowRate?: InputMaybe<Scalars['BigInt']['input']>;
  totalCFANetFlowRate_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalCFANetFlowRate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalCFANetFlowRate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalCFANetFlowRate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalCFANetFlowRate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalCFANetFlowRate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalCFANetFlowRate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalInflowRate?: InputMaybe<Scalars['BigInt']['input']>;
  totalInflowRate_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalInflowRate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalInflowRate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalInflowRate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalInflowRate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalInflowRate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalInflowRate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalOutflowRate?: InputMaybe<Scalars['BigInt']['input']>;
  totalOutflowRate_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalOutflowRate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalOutflowRate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalOutflowRate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalOutflowRate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalOutflowRate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalOutflowRate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalCFAOutflowRate?: InputMaybe<Scalars['BigInt']['input']>;
  totalCFAOutflowRate_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalCFAOutflowRate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalCFAOutflowRate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalCFAOutflowRate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalCFAOutflowRate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalCFAOutflowRate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalCFAOutflowRate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalGDAOutflowRate?: InputMaybe<Scalars['BigInt']['input']>;
  totalGDAOutflowRate_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalGDAOutflowRate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalGDAOutflowRate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalGDAOutflowRate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalGDAOutflowRate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalGDAOutflowRate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalGDAOutflowRate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalAmountStreamedIn?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamedIn_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamedIn_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamedIn_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamedIn_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamedIn_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamedIn_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalAmountStreamedIn_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalAmountStreamedOut?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamedOut_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamedOut_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamedOut_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamedOut_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamedOut_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamedOut_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalAmountStreamedOut_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalCFAAmountStreamedOut?: InputMaybe<Scalars['BigInt']['input']>;
  totalCFAAmountStreamedOut_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalCFAAmountStreamedOut_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalCFAAmountStreamedOut_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalCFAAmountStreamedOut_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalCFAAmountStreamedOut_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalCFAAmountStreamedOut_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalCFAAmountStreamedOut_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalAmountStreamed?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamed_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalAmountStreamed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalCFAAmountStreamed?: InputMaybe<Scalars['BigInt']['input']>;
  totalCFAAmountStreamed_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalCFAAmountStreamed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalCFAAmountStreamed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalCFAAmountStreamed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalCFAAmountStreamed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalCFAAmountStreamed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalCFAAmountStreamed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalAmountTransferred?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountTransferred_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountTransferred_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountTransferred_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountTransferred_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountTransferred_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountTransferred_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalAmountTransferred_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  account?: InputMaybe<Scalars['String']['input']>;
  account_not?: InputMaybe<Scalars['String']['input']>;
  account_gt?: InputMaybe<Scalars['String']['input']>;
  account_lt?: InputMaybe<Scalars['String']['input']>;
  account_gte?: InputMaybe<Scalars['String']['input']>;
  account_lte?: InputMaybe<Scalars['String']['input']>;
  account_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_contains?: InputMaybe<Scalars['String']['input']>;
  account_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_contains?: InputMaybe<Scalars['String']['input']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_?: InputMaybe<Account_filter>;
  token?: InputMaybe<Scalars['String']['input']>;
  token_not?: InputMaybe<Scalars['String']['input']>;
  token_gt?: InputMaybe<Scalars['String']['input']>;
  token_lt?: InputMaybe<Scalars['String']['input']>;
  token_gte?: InputMaybe<Scalars['String']['input']>;
  token_lte?: InputMaybe<Scalars['String']['input']>;
  token_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_contains?: InputMaybe<Scalars['String']['input']>;
  token_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_contains?: InputMaybe<Scalars['String']['input']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_?: InputMaybe<Token_filter>;
  accountTokenSnapshot?: InputMaybe<Scalars['String']['input']>;
  accountTokenSnapshot_not?: InputMaybe<Scalars['String']['input']>;
  accountTokenSnapshot_gt?: InputMaybe<Scalars['String']['input']>;
  accountTokenSnapshot_lt?: InputMaybe<Scalars['String']['input']>;
  accountTokenSnapshot_gte?: InputMaybe<Scalars['String']['input']>;
  accountTokenSnapshot_lte?: InputMaybe<Scalars['String']['input']>;
  accountTokenSnapshot_in?: InputMaybe<Array<Scalars['String']['input']>>;
  accountTokenSnapshot_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  accountTokenSnapshot_contains?: InputMaybe<Scalars['String']['input']>;
  accountTokenSnapshot_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  accountTokenSnapshot_not_contains?: InputMaybe<Scalars['String']['input']>;
  accountTokenSnapshot_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  accountTokenSnapshot_starts_with?: InputMaybe<Scalars['String']['input']>;
  accountTokenSnapshot_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  accountTokenSnapshot_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  accountTokenSnapshot_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  accountTokenSnapshot_ends_with?: InputMaybe<Scalars['String']['input']>;
  accountTokenSnapshot_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  accountTokenSnapshot_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  accountTokenSnapshot_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  accountTokenSnapshot_?: InputMaybe<AccountTokenSnapshot_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<AccountTokenSnapshotLog_filter>>>;
  or?: InputMaybe<Array<InputMaybe<AccountTokenSnapshotLog_filter>>>;
};

export type AccountTokenSnapshotLog_orderBy =
  | 'id'
  | 'timestamp'
  | 'blockNumber'
  | 'transactionHash'
  | 'logIndex'
  | 'order'
  | 'triggeredByEventName'
  | 'maybeCriticalAtTimestamp'
  | 'totalNumberOfActiveStreams'
  | 'totalCFANumberOfActiveStreams'
  | 'totalGDANumberOfActiveStreams'
  | 'activeOutgoingStreamCount'
  | 'activeCFAOutgoingStreamCount'
  | 'activeGDAOutgoingStreamCount'
  | 'activeIncomingStreamCount'
  | 'totalNumberOfClosedStreams'
  | 'totalCFANumberOfClosedStreams'
  | 'totalGDANumberOfClosedStreams'
  | 'inactiveOutgoingStreamCount'
  | 'inactiveCFAOutgoingStreamCount'
  | 'inactiveGDAOutgoingStreamCount'
  | 'inactiveIncomingStreamCount'
  | 'totalSubscriptionsWithUnits'
  | 'totalApprovedSubscriptions'
  | 'totalMembershipsWithUnits'
  | 'totalConnectedMemberships'
  | 'balance'
  | 'totalDeposit'
  | 'totalCFADeposit'
  | 'totalGDADeposit'
  | 'totalNetFlowRate'
  | 'totalCFANetFlowRate'
  | 'totalInflowRate'
  | 'totalOutflowRate'
  | 'totalCFAOutflowRate'
  | 'totalGDAOutflowRate'
  | 'totalAmountStreamedIn'
  | 'totalAmountStreamedOut'
  | 'totalCFAAmountStreamedOut'
  | 'totalAmountStreamed'
  | 'totalCFAAmountStreamed'
  | 'totalAmountTransferred'
  | 'account'
  | 'account__id'
  | 'account__createdAtTimestamp'
  | 'account__createdAtBlockNumber'
  | 'account__updatedAtTimestamp'
  | 'account__updatedAtBlockNumber'
  | 'account__isSuperApp'
  | 'token'
  | 'token__id'
  | 'token__createdAtTimestamp'
  | 'token__createdAtBlockNumber'
  | 'token__decimals'
  | 'token__name'
  | 'token__symbol'
  | 'token__isSuperToken'
  | 'token__isNativeAssetSuperToken'
  | 'token__isListed'
  | 'token__underlyingAddress'
  | 'accountTokenSnapshot'
  | 'accountTokenSnapshot__id'
  | 'accountTokenSnapshot__createdAtTimestamp'
  | 'accountTokenSnapshot__createdAtBlockNumber'
  | 'accountTokenSnapshot__updatedAtTimestamp'
  | 'accountTokenSnapshot__updatedAtBlockNumber'
  | 'accountTokenSnapshot__isLiquidationEstimateOptimistic'
  | 'accountTokenSnapshot__maybeCriticalAtTimestamp'
  | 'accountTokenSnapshot__totalNumberOfActiveStreams'
  | 'accountTokenSnapshot__totalCFANumberOfActiveStreams'
  | 'accountTokenSnapshot__totalGDANumberOfActiveStreams'
  | 'accountTokenSnapshot__activeOutgoingStreamCount'
  | 'accountTokenSnapshot__activeCFAOutgoingStreamCount'
  | 'accountTokenSnapshot__activeGDAOutgoingStreamCount'
  | 'accountTokenSnapshot__activeIncomingStreamCount'
  | 'accountTokenSnapshot__totalNumberOfClosedStreams'
  | 'accountTokenSnapshot__totalCFANumberOfClosedStreams'
  | 'accountTokenSnapshot__totalGDANumberOfClosedStreams'
  | 'accountTokenSnapshot__inactiveOutgoingStreamCount'
  | 'accountTokenSnapshot__inactiveCFAOutgoingStreamCount'
  | 'accountTokenSnapshot__inactiveGDAOutgoingStreamCount'
  | 'accountTokenSnapshot__inactiveIncomingStreamCount'
  | 'accountTokenSnapshot__totalSubscriptionsWithUnits'
  | 'accountTokenSnapshot__totalApprovedSubscriptions'
  | 'accountTokenSnapshot__totalMembershipsWithUnits'
  | 'accountTokenSnapshot__totalConnectedMemberships'
  | 'accountTokenSnapshot__adminOfPoolCount'
  | 'accountTokenSnapshot__balanceUntilUpdatedAt'
  | 'accountTokenSnapshot__balanceLastUpdatedFromRpcBlocknumber'
  | 'accountTokenSnapshot__totalDeposit'
  | 'accountTokenSnapshot__totalCFADeposit'
  | 'accountTokenSnapshot__totalGDADeposit'
  | 'accountTokenSnapshot__totalNetFlowRate'
  | 'accountTokenSnapshot__totalCFANetFlowRate'
  | 'accountTokenSnapshot__totalInflowRate'
  | 'accountTokenSnapshot__totalOutflowRate'
  | 'accountTokenSnapshot__totalCFAOutflowRate'
  | 'accountTokenSnapshot__totalGDAOutflowRate'
  | 'accountTokenSnapshot__totalAmountStreamedInUntilUpdatedAt'
  | 'accountTokenSnapshot__totalAmountStreamedOutUntilUpdatedAt'
  | 'accountTokenSnapshot__totalCFAAmountStreamedOutUntilUpdatedAt'
  | 'accountTokenSnapshot__totalAmountStreamedUntilUpdatedAt'
  | 'accountTokenSnapshot__totalCFAAmountStreamedUntilUpdatedAt'
  | 'accountTokenSnapshot__totalAmountTransferredUntilUpdatedAt';

export type AccountTokenSnapshot_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  createdAtTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAtBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAtTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAtBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  isLiquidationEstimateOptimistic?: InputMaybe<Scalars['Boolean']['input']>;
  isLiquidationEstimateOptimistic_not?: InputMaybe<Scalars['Boolean']['input']>;
  isLiquidationEstimateOptimistic_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isLiquidationEstimateOptimistic_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  maybeCriticalAtTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  maybeCriticalAtTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  maybeCriticalAtTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  maybeCriticalAtTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  maybeCriticalAtTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  maybeCriticalAtTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  maybeCriticalAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  maybeCriticalAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalNumberOfActiveStreams?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfActiveStreams_not?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfActiveStreams_gt?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfActiveStreams_lt?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfActiveStreams_gte?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfActiveStreams_lte?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfActiveStreams_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalNumberOfActiveStreams_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalCFANumberOfActiveStreams?: InputMaybe<Scalars['Int']['input']>;
  totalCFANumberOfActiveStreams_not?: InputMaybe<Scalars['Int']['input']>;
  totalCFANumberOfActiveStreams_gt?: InputMaybe<Scalars['Int']['input']>;
  totalCFANumberOfActiveStreams_lt?: InputMaybe<Scalars['Int']['input']>;
  totalCFANumberOfActiveStreams_gte?: InputMaybe<Scalars['Int']['input']>;
  totalCFANumberOfActiveStreams_lte?: InputMaybe<Scalars['Int']['input']>;
  totalCFANumberOfActiveStreams_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalCFANumberOfActiveStreams_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalGDANumberOfActiveStreams?: InputMaybe<Scalars['Int']['input']>;
  totalGDANumberOfActiveStreams_not?: InputMaybe<Scalars['Int']['input']>;
  totalGDANumberOfActiveStreams_gt?: InputMaybe<Scalars['Int']['input']>;
  totalGDANumberOfActiveStreams_lt?: InputMaybe<Scalars['Int']['input']>;
  totalGDANumberOfActiveStreams_gte?: InputMaybe<Scalars['Int']['input']>;
  totalGDANumberOfActiveStreams_lte?: InputMaybe<Scalars['Int']['input']>;
  totalGDANumberOfActiveStreams_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalGDANumberOfActiveStreams_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  activeOutgoingStreamCount?: InputMaybe<Scalars['Int']['input']>;
  activeOutgoingStreamCount_not?: InputMaybe<Scalars['Int']['input']>;
  activeOutgoingStreamCount_gt?: InputMaybe<Scalars['Int']['input']>;
  activeOutgoingStreamCount_lt?: InputMaybe<Scalars['Int']['input']>;
  activeOutgoingStreamCount_gte?: InputMaybe<Scalars['Int']['input']>;
  activeOutgoingStreamCount_lte?: InputMaybe<Scalars['Int']['input']>;
  activeOutgoingStreamCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  activeOutgoingStreamCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  activeCFAOutgoingStreamCount?: InputMaybe<Scalars['Int']['input']>;
  activeCFAOutgoingStreamCount_not?: InputMaybe<Scalars['Int']['input']>;
  activeCFAOutgoingStreamCount_gt?: InputMaybe<Scalars['Int']['input']>;
  activeCFAOutgoingStreamCount_lt?: InputMaybe<Scalars['Int']['input']>;
  activeCFAOutgoingStreamCount_gte?: InputMaybe<Scalars['Int']['input']>;
  activeCFAOutgoingStreamCount_lte?: InputMaybe<Scalars['Int']['input']>;
  activeCFAOutgoingStreamCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  activeCFAOutgoingStreamCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  activeGDAOutgoingStreamCount?: InputMaybe<Scalars['Int']['input']>;
  activeGDAOutgoingStreamCount_not?: InputMaybe<Scalars['Int']['input']>;
  activeGDAOutgoingStreamCount_gt?: InputMaybe<Scalars['Int']['input']>;
  activeGDAOutgoingStreamCount_lt?: InputMaybe<Scalars['Int']['input']>;
  activeGDAOutgoingStreamCount_gte?: InputMaybe<Scalars['Int']['input']>;
  activeGDAOutgoingStreamCount_lte?: InputMaybe<Scalars['Int']['input']>;
  activeGDAOutgoingStreamCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  activeGDAOutgoingStreamCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  activeIncomingStreamCount?: InputMaybe<Scalars['Int']['input']>;
  activeIncomingStreamCount_not?: InputMaybe<Scalars['Int']['input']>;
  activeIncomingStreamCount_gt?: InputMaybe<Scalars['Int']['input']>;
  activeIncomingStreamCount_lt?: InputMaybe<Scalars['Int']['input']>;
  activeIncomingStreamCount_gte?: InputMaybe<Scalars['Int']['input']>;
  activeIncomingStreamCount_lte?: InputMaybe<Scalars['Int']['input']>;
  activeIncomingStreamCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  activeIncomingStreamCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalNumberOfClosedStreams?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfClosedStreams_not?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfClosedStreams_gt?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfClosedStreams_lt?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfClosedStreams_gte?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfClosedStreams_lte?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfClosedStreams_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalNumberOfClosedStreams_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalCFANumberOfClosedStreams?: InputMaybe<Scalars['Int']['input']>;
  totalCFANumberOfClosedStreams_not?: InputMaybe<Scalars['Int']['input']>;
  totalCFANumberOfClosedStreams_gt?: InputMaybe<Scalars['Int']['input']>;
  totalCFANumberOfClosedStreams_lt?: InputMaybe<Scalars['Int']['input']>;
  totalCFANumberOfClosedStreams_gte?: InputMaybe<Scalars['Int']['input']>;
  totalCFANumberOfClosedStreams_lte?: InputMaybe<Scalars['Int']['input']>;
  totalCFANumberOfClosedStreams_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalCFANumberOfClosedStreams_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalGDANumberOfClosedStreams?: InputMaybe<Scalars['Int']['input']>;
  totalGDANumberOfClosedStreams_not?: InputMaybe<Scalars['Int']['input']>;
  totalGDANumberOfClosedStreams_gt?: InputMaybe<Scalars['Int']['input']>;
  totalGDANumberOfClosedStreams_lt?: InputMaybe<Scalars['Int']['input']>;
  totalGDANumberOfClosedStreams_gte?: InputMaybe<Scalars['Int']['input']>;
  totalGDANumberOfClosedStreams_lte?: InputMaybe<Scalars['Int']['input']>;
  totalGDANumberOfClosedStreams_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalGDANumberOfClosedStreams_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  inactiveOutgoingStreamCount?: InputMaybe<Scalars['Int']['input']>;
  inactiveOutgoingStreamCount_not?: InputMaybe<Scalars['Int']['input']>;
  inactiveOutgoingStreamCount_gt?: InputMaybe<Scalars['Int']['input']>;
  inactiveOutgoingStreamCount_lt?: InputMaybe<Scalars['Int']['input']>;
  inactiveOutgoingStreamCount_gte?: InputMaybe<Scalars['Int']['input']>;
  inactiveOutgoingStreamCount_lte?: InputMaybe<Scalars['Int']['input']>;
  inactiveOutgoingStreamCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  inactiveOutgoingStreamCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  inactiveCFAOutgoingStreamCount?: InputMaybe<Scalars['Int']['input']>;
  inactiveCFAOutgoingStreamCount_not?: InputMaybe<Scalars['Int']['input']>;
  inactiveCFAOutgoingStreamCount_gt?: InputMaybe<Scalars['Int']['input']>;
  inactiveCFAOutgoingStreamCount_lt?: InputMaybe<Scalars['Int']['input']>;
  inactiveCFAOutgoingStreamCount_gte?: InputMaybe<Scalars['Int']['input']>;
  inactiveCFAOutgoingStreamCount_lte?: InputMaybe<Scalars['Int']['input']>;
  inactiveCFAOutgoingStreamCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  inactiveCFAOutgoingStreamCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  inactiveGDAOutgoingStreamCount?: InputMaybe<Scalars['Int']['input']>;
  inactiveGDAOutgoingStreamCount_not?: InputMaybe<Scalars['Int']['input']>;
  inactiveGDAOutgoingStreamCount_gt?: InputMaybe<Scalars['Int']['input']>;
  inactiveGDAOutgoingStreamCount_lt?: InputMaybe<Scalars['Int']['input']>;
  inactiveGDAOutgoingStreamCount_gte?: InputMaybe<Scalars['Int']['input']>;
  inactiveGDAOutgoingStreamCount_lte?: InputMaybe<Scalars['Int']['input']>;
  inactiveGDAOutgoingStreamCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  inactiveGDAOutgoingStreamCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  inactiveIncomingStreamCount?: InputMaybe<Scalars['Int']['input']>;
  inactiveIncomingStreamCount_not?: InputMaybe<Scalars['Int']['input']>;
  inactiveIncomingStreamCount_gt?: InputMaybe<Scalars['Int']['input']>;
  inactiveIncomingStreamCount_lt?: InputMaybe<Scalars['Int']['input']>;
  inactiveIncomingStreamCount_gte?: InputMaybe<Scalars['Int']['input']>;
  inactiveIncomingStreamCount_lte?: InputMaybe<Scalars['Int']['input']>;
  inactiveIncomingStreamCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  inactiveIncomingStreamCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalSubscriptionsWithUnits?: InputMaybe<Scalars['Int']['input']>;
  totalSubscriptionsWithUnits_not?: InputMaybe<Scalars['Int']['input']>;
  totalSubscriptionsWithUnits_gt?: InputMaybe<Scalars['Int']['input']>;
  totalSubscriptionsWithUnits_lt?: InputMaybe<Scalars['Int']['input']>;
  totalSubscriptionsWithUnits_gte?: InputMaybe<Scalars['Int']['input']>;
  totalSubscriptionsWithUnits_lte?: InputMaybe<Scalars['Int']['input']>;
  totalSubscriptionsWithUnits_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalSubscriptionsWithUnits_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalApprovedSubscriptions?: InputMaybe<Scalars['Int']['input']>;
  totalApprovedSubscriptions_not?: InputMaybe<Scalars['Int']['input']>;
  totalApprovedSubscriptions_gt?: InputMaybe<Scalars['Int']['input']>;
  totalApprovedSubscriptions_lt?: InputMaybe<Scalars['Int']['input']>;
  totalApprovedSubscriptions_gte?: InputMaybe<Scalars['Int']['input']>;
  totalApprovedSubscriptions_lte?: InputMaybe<Scalars['Int']['input']>;
  totalApprovedSubscriptions_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalApprovedSubscriptions_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalMembershipsWithUnits?: InputMaybe<Scalars['Int']['input']>;
  totalMembershipsWithUnits_not?: InputMaybe<Scalars['Int']['input']>;
  totalMembershipsWithUnits_gt?: InputMaybe<Scalars['Int']['input']>;
  totalMembershipsWithUnits_lt?: InputMaybe<Scalars['Int']['input']>;
  totalMembershipsWithUnits_gte?: InputMaybe<Scalars['Int']['input']>;
  totalMembershipsWithUnits_lte?: InputMaybe<Scalars['Int']['input']>;
  totalMembershipsWithUnits_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalMembershipsWithUnits_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalConnectedMemberships?: InputMaybe<Scalars['Int']['input']>;
  totalConnectedMemberships_not?: InputMaybe<Scalars['Int']['input']>;
  totalConnectedMemberships_gt?: InputMaybe<Scalars['Int']['input']>;
  totalConnectedMemberships_lt?: InputMaybe<Scalars['Int']['input']>;
  totalConnectedMemberships_gte?: InputMaybe<Scalars['Int']['input']>;
  totalConnectedMemberships_lte?: InputMaybe<Scalars['Int']['input']>;
  totalConnectedMemberships_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalConnectedMemberships_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  adminOfPoolCount?: InputMaybe<Scalars['Int']['input']>;
  adminOfPoolCount_not?: InputMaybe<Scalars['Int']['input']>;
  adminOfPoolCount_gt?: InputMaybe<Scalars['Int']['input']>;
  adminOfPoolCount_lt?: InputMaybe<Scalars['Int']['input']>;
  adminOfPoolCount_gte?: InputMaybe<Scalars['Int']['input']>;
  adminOfPoolCount_lte?: InputMaybe<Scalars['Int']['input']>;
  adminOfPoolCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  adminOfPoolCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  balanceUntilUpdatedAt?: InputMaybe<Scalars['BigInt']['input']>;
  balanceUntilUpdatedAt_not?: InputMaybe<Scalars['BigInt']['input']>;
  balanceUntilUpdatedAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  balanceUntilUpdatedAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  balanceUntilUpdatedAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  balanceUntilUpdatedAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  balanceUntilUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  balanceUntilUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  balanceLastUpdatedFromRpcBlocknumber?: InputMaybe<Scalars['BigInt']['input']>;
  balanceLastUpdatedFromRpcBlocknumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  balanceLastUpdatedFromRpcBlocknumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  balanceLastUpdatedFromRpcBlocknumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  balanceLastUpdatedFromRpcBlocknumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  balanceLastUpdatedFromRpcBlocknumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  balanceLastUpdatedFromRpcBlocknumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  balanceLastUpdatedFromRpcBlocknumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalDeposit?: InputMaybe<Scalars['BigInt']['input']>;
  totalDeposit_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalDeposit_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalDeposit_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalDeposit_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalDeposit_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalDeposit_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalDeposit_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalCFADeposit?: InputMaybe<Scalars['BigInt']['input']>;
  totalCFADeposit_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalCFADeposit_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalCFADeposit_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalCFADeposit_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalCFADeposit_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalCFADeposit_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalCFADeposit_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalGDADeposit?: InputMaybe<Scalars['BigInt']['input']>;
  totalGDADeposit_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalGDADeposit_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalGDADeposit_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalGDADeposit_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalGDADeposit_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalGDADeposit_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalGDADeposit_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalNetFlowRate?: InputMaybe<Scalars['BigInt']['input']>;
  totalNetFlowRate_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalNetFlowRate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalNetFlowRate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalNetFlowRate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalNetFlowRate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalNetFlowRate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalNetFlowRate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalCFANetFlowRate?: InputMaybe<Scalars['BigInt']['input']>;
  totalCFANetFlowRate_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalCFANetFlowRate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalCFANetFlowRate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalCFANetFlowRate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalCFANetFlowRate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalCFANetFlowRate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalCFANetFlowRate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalInflowRate?: InputMaybe<Scalars['BigInt']['input']>;
  totalInflowRate_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalInflowRate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalInflowRate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalInflowRate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalInflowRate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalInflowRate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalInflowRate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalOutflowRate?: InputMaybe<Scalars['BigInt']['input']>;
  totalOutflowRate_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalOutflowRate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalOutflowRate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalOutflowRate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalOutflowRate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalOutflowRate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalOutflowRate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalCFAOutflowRate?: InputMaybe<Scalars['BigInt']['input']>;
  totalCFAOutflowRate_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalCFAOutflowRate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalCFAOutflowRate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalCFAOutflowRate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalCFAOutflowRate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalCFAOutflowRate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalCFAOutflowRate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalGDAOutflowRate?: InputMaybe<Scalars['BigInt']['input']>;
  totalGDAOutflowRate_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalGDAOutflowRate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalGDAOutflowRate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalGDAOutflowRate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalGDAOutflowRate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalGDAOutflowRate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalGDAOutflowRate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalAmountStreamedInUntilUpdatedAt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamedInUntilUpdatedAt_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamedInUntilUpdatedAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamedInUntilUpdatedAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamedInUntilUpdatedAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamedInUntilUpdatedAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamedInUntilUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalAmountStreamedInUntilUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalAmountStreamedOutUntilUpdatedAt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamedOutUntilUpdatedAt_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamedOutUntilUpdatedAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamedOutUntilUpdatedAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamedOutUntilUpdatedAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamedOutUntilUpdatedAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamedOutUntilUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalAmountStreamedOutUntilUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalCFAAmountStreamedOutUntilUpdatedAt?: InputMaybe<Scalars['BigInt']['input']>;
  totalCFAAmountStreamedOutUntilUpdatedAt_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalCFAAmountStreamedOutUntilUpdatedAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalCFAAmountStreamedOutUntilUpdatedAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalCFAAmountStreamedOutUntilUpdatedAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalCFAAmountStreamedOutUntilUpdatedAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalCFAAmountStreamedOutUntilUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalCFAAmountStreamedOutUntilUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalAmountStreamedUntilUpdatedAt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamedUntilUpdatedAt_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamedUntilUpdatedAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamedUntilUpdatedAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamedUntilUpdatedAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamedUntilUpdatedAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamedUntilUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalAmountStreamedUntilUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalCFAAmountStreamedUntilUpdatedAt?: InputMaybe<Scalars['BigInt']['input']>;
  totalCFAAmountStreamedUntilUpdatedAt_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalCFAAmountStreamedUntilUpdatedAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalCFAAmountStreamedUntilUpdatedAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalCFAAmountStreamedUntilUpdatedAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalCFAAmountStreamedUntilUpdatedAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalCFAAmountStreamedUntilUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalCFAAmountStreamedUntilUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalAmountTransferredUntilUpdatedAt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountTransferredUntilUpdatedAt_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountTransferredUntilUpdatedAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountTransferredUntilUpdatedAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountTransferredUntilUpdatedAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountTransferredUntilUpdatedAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountTransferredUntilUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalAmountTransferredUntilUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  account?: InputMaybe<Scalars['String']['input']>;
  account_not?: InputMaybe<Scalars['String']['input']>;
  account_gt?: InputMaybe<Scalars['String']['input']>;
  account_lt?: InputMaybe<Scalars['String']['input']>;
  account_gte?: InputMaybe<Scalars['String']['input']>;
  account_lte?: InputMaybe<Scalars['String']['input']>;
  account_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_contains?: InputMaybe<Scalars['String']['input']>;
  account_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_contains?: InputMaybe<Scalars['String']['input']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_?: InputMaybe<Account_filter>;
  token?: InputMaybe<Scalars['String']['input']>;
  token_not?: InputMaybe<Scalars['String']['input']>;
  token_gt?: InputMaybe<Scalars['String']['input']>;
  token_lt?: InputMaybe<Scalars['String']['input']>;
  token_gte?: InputMaybe<Scalars['String']['input']>;
  token_lte?: InputMaybe<Scalars['String']['input']>;
  token_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_contains?: InputMaybe<Scalars['String']['input']>;
  token_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_contains?: InputMaybe<Scalars['String']['input']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_?: InputMaybe<Token_filter>;
  flowOperators_?: InputMaybe<FlowOperator_filter>;
  accountTokenSnapshotLogs_?: InputMaybe<AccountTokenSnapshotLog_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<AccountTokenSnapshot_filter>>>;
  or?: InputMaybe<Array<InputMaybe<AccountTokenSnapshot_filter>>>;
};

export type AccountTokenSnapshot_orderBy =
  | 'id'
  | 'createdAtTimestamp'
  | 'createdAtBlockNumber'
  | 'updatedAtTimestamp'
  | 'updatedAtBlockNumber'
  | 'isLiquidationEstimateOptimistic'
  | 'maybeCriticalAtTimestamp'
  | 'totalNumberOfActiveStreams'
  | 'totalCFANumberOfActiveStreams'
  | 'totalGDANumberOfActiveStreams'
  | 'activeOutgoingStreamCount'
  | 'activeCFAOutgoingStreamCount'
  | 'activeGDAOutgoingStreamCount'
  | 'activeIncomingStreamCount'
  | 'totalNumberOfClosedStreams'
  | 'totalCFANumberOfClosedStreams'
  | 'totalGDANumberOfClosedStreams'
  | 'inactiveOutgoingStreamCount'
  | 'inactiveCFAOutgoingStreamCount'
  | 'inactiveGDAOutgoingStreamCount'
  | 'inactiveIncomingStreamCount'
  | 'totalSubscriptionsWithUnits'
  | 'totalApprovedSubscriptions'
  | 'totalMembershipsWithUnits'
  | 'totalConnectedMemberships'
  | 'adminOfPoolCount'
  | 'balanceUntilUpdatedAt'
  | 'balanceLastUpdatedFromRpcBlocknumber'
  | 'totalDeposit'
  | 'totalCFADeposit'
  | 'totalGDADeposit'
  | 'totalNetFlowRate'
  | 'totalCFANetFlowRate'
  | 'totalInflowRate'
  | 'totalOutflowRate'
  | 'totalCFAOutflowRate'
  | 'totalGDAOutflowRate'
  | 'totalAmountStreamedInUntilUpdatedAt'
  | 'totalAmountStreamedOutUntilUpdatedAt'
  | 'totalCFAAmountStreamedOutUntilUpdatedAt'
  | 'totalAmountStreamedUntilUpdatedAt'
  | 'totalCFAAmountStreamedUntilUpdatedAt'
  | 'totalAmountTransferredUntilUpdatedAt'
  | 'account'
  | 'account__id'
  | 'account__createdAtTimestamp'
  | 'account__createdAtBlockNumber'
  | 'account__updatedAtTimestamp'
  | 'account__updatedAtBlockNumber'
  | 'account__isSuperApp'
  | 'token'
  | 'token__id'
  | 'token__createdAtTimestamp'
  | 'token__createdAtBlockNumber'
  | 'token__decimals'
  | 'token__name'
  | 'token__symbol'
  | 'token__isSuperToken'
  | 'token__isNativeAssetSuperToken'
  | 'token__isListed'
  | 'token__underlyingAddress'
  | 'flowOperators'
  | 'accountTokenSnapshotLogs';

export type Account_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  createdAtTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAtBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAtTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAtBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  isSuperApp?: InputMaybe<Scalars['Boolean']['input']>;
  isSuperApp_not?: InputMaybe<Scalars['Boolean']['input']>;
  isSuperApp_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isSuperApp_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  inflows_?: InputMaybe<Stream_filter>;
  outflows_?: InputMaybe<Stream_filter>;
  subscriptions_?: InputMaybe<IndexSubscription_filter>;
  publishedIndexes_?: InputMaybe<Index_filter>;
  pools_?: InputMaybe<Pool_filter>;
  poolMemberships_?: InputMaybe<PoolMember_filter>;
  sentTransferEvents_?: InputMaybe<TransferEvent_filter>;
  receivedTransferEvents_?: InputMaybe<TransferEvent_filter>;
  tokenUpgradedEvents_?: InputMaybe<TokenUpgradedEvent_filter>;
  tokenDowngradedEvents_?: InputMaybe<TokenDowngradedEvent_filter>;
  accountTokenSnapshots_?: InputMaybe<AccountTokenSnapshot_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Account_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Account_filter>>>;
};

export type Account_orderBy =
  | 'id'
  | 'createdAtTimestamp'
  | 'createdAtBlockNumber'
  | 'updatedAtTimestamp'
  | 'updatedAtBlockNumber'
  | 'isSuperApp'
  | 'inflows'
  | 'outflows'
  | 'subscriptions'
  | 'publishedIndexes'
  | 'pools'
  | 'poolMemberships'
  | 'sentTransferEvents'
  | 'receivedTransferEvents'
  | 'tokenUpgradedEvents'
  | 'tokenDowngradedEvents'
  | 'accountTokenSnapshots';

export type Aggregation_interval =
  | 'hour'
  | 'day';

export type AgreementClassRegisteredEvent = Event & {
  id: Scalars['ID']['output'];
  transactionHash: Scalars['Bytes']['output'];
  gasPrice: Scalars['BigInt']['output'];
  gasUsed?: Maybe<Scalars['BigInt']['output']>;
  timestamp: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `code`
   *
   */
  addresses: Array<Scalars['Bytes']['output']>;
  blockNumber: Scalars['BigInt']['output'];
  logIndex: Scalars['BigInt']['output'];
  order: Scalars['BigInt']['output'];
  agreementType: Scalars['Bytes']['output'];
  code: Scalars['Bytes']['output'];
};

export type AgreementClassRegisteredEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order?: InputMaybe<Scalars['BigInt']['input']>;
  order_not?: InputMaybe<Scalars['BigInt']['input']>;
  order_gt?: InputMaybe<Scalars['BigInt']['input']>;
  order_lt?: InputMaybe<Scalars['BigInt']['input']>;
  order_gte?: InputMaybe<Scalars['BigInt']['input']>;
  order_lte?: InputMaybe<Scalars['BigInt']['input']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  agreementType?: InputMaybe<Scalars['Bytes']['input']>;
  agreementType_not?: InputMaybe<Scalars['Bytes']['input']>;
  agreementType_gt?: InputMaybe<Scalars['Bytes']['input']>;
  agreementType_lt?: InputMaybe<Scalars['Bytes']['input']>;
  agreementType_gte?: InputMaybe<Scalars['Bytes']['input']>;
  agreementType_lte?: InputMaybe<Scalars['Bytes']['input']>;
  agreementType_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  agreementType_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  agreementType_contains?: InputMaybe<Scalars['Bytes']['input']>;
  agreementType_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  code?: InputMaybe<Scalars['Bytes']['input']>;
  code_not?: InputMaybe<Scalars['Bytes']['input']>;
  code_gt?: InputMaybe<Scalars['Bytes']['input']>;
  code_lt?: InputMaybe<Scalars['Bytes']['input']>;
  code_gte?: InputMaybe<Scalars['Bytes']['input']>;
  code_lte?: InputMaybe<Scalars['Bytes']['input']>;
  code_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  code_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  code_contains?: InputMaybe<Scalars['Bytes']['input']>;
  code_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<AgreementClassRegisteredEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<AgreementClassRegisteredEvent_filter>>>;
};

export type AgreementClassRegisteredEvent_orderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'agreementType'
  | 'code';

export type AgreementClassUpdatedEvent = Event & {
  id: Scalars['ID']['output'];
  transactionHash: Scalars['Bytes']['output'];
  gasPrice: Scalars['BigInt']['output'];
  gasUsed?: Maybe<Scalars['BigInt']['output']>;
  timestamp: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `code`
   *
   */
  addresses: Array<Scalars['Bytes']['output']>;
  blockNumber: Scalars['BigInt']['output'];
  logIndex: Scalars['BigInt']['output'];
  order: Scalars['BigInt']['output'];
  agreementType: Scalars['Bytes']['output'];
  code: Scalars['Bytes']['output'];
};

export type AgreementClassUpdatedEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order?: InputMaybe<Scalars['BigInt']['input']>;
  order_not?: InputMaybe<Scalars['BigInt']['input']>;
  order_gt?: InputMaybe<Scalars['BigInt']['input']>;
  order_lt?: InputMaybe<Scalars['BigInt']['input']>;
  order_gte?: InputMaybe<Scalars['BigInt']['input']>;
  order_lte?: InputMaybe<Scalars['BigInt']['input']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  agreementType?: InputMaybe<Scalars['Bytes']['input']>;
  agreementType_not?: InputMaybe<Scalars['Bytes']['input']>;
  agreementType_gt?: InputMaybe<Scalars['Bytes']['input']>;
  agreementType_lt?: InputMaybe<Scalars['Bytes']['input']>;
  agreementType_gte?: InputMaybe<Scalars['Bytes']['input']>;
  agreementType_lte?: InputMaybe<Scalars['Bytes']['input']>;
  agreementType_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  agreementType_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  agreementType_contains?: InputMaybe<Scalars['Bytes']['input']>;
  agreementType_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  code?: InputMaybe<Scalars['Bytes']['input']>;
  code_not?: InputMaybe<Scalars['Bytes']['input']>;
  code_gt?: InputMaybe<Scalars['Bytes']['input']>;
  code_lt?: InputMaybe<Scalars['Bytes']['input']>;
  code_gte?: InputMaybe<Scalars['Bytes']['input']>;
  code_lte?: InputMaybe<Scalars['Bytes']['input']>;
  code_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  code_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  code_contains?: InputMaybe<Scalars['Bytes']['input']>;
  code_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<AgreementClassUpdatedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<AgreementClassUpdatedEvent_filter>>>;
};

export type AgreementClassUpdatedEvent_orderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'agreementType'
  | 'code';

/**
 * NOTE: This event was deprecated since the introduction of the 3Ps system.
 * Replaced by: `AgreementLiquidatedV2Event`
 * See: https://docs.superfluid.finance/superfluid/sentinels/liquidations-and-toga#patricians-plebs-and-pirates-3ps for more details on the 3Ps system.
 * See: https://github.com/superfluid-finance/protocol-monorepo/blob/dev/packages/ethereum-contracts/contracts/interfaces/superfluid/ISuperfluidToken.sol#L425 for more details on the events.
 *
 */
export type AgreementLiquidatedByEvent = Event & {
  id: Scalars['ID']['output'];
  transactionHash: Scalars['Bytes']['output'];
  gasPrice: Scalars['BigInt']['output'];
  gasUsed?: Maybe<Scalars['BigInt']['output']>;
  timestamp: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   * addresses[1] = liquidatorAccount (executor of liquidation)
   * addresses[2] = penaltyAccount (the sender of the flow/stream)
   * addresses[3] = bondAccount (the address receiving the reward - the reward account for the token, pre 3Ps)
   *
   */
  addresses: Array<Scalars['Bytes']['output']>;
  blockNumber: Scalars['BigInt']['output'];
  logIndex: Scalars['BigInt']['output'];
  order: Scalars['BigInt']['output'];
  token: Scalars['Bytes']['output'];
  liquidatorAccount: Scalars['Bytes']['output'];
  agreementClass: Scalars['Bytes']['output'];
  agreementId: Scalars['Bytes']['output'];
  penaltyAccount: Scalars['Bytes']['output'];
  bondAccount: Scalars['Bytes']['output'];
  rewardAmount: Scalars['BigInt']['output'];
  bailoutAmount: Scalars['BigInt']['output'];
  /**
   * The full deposit amount of the stream that was liquidated.
   *
   */
  deposit: Scalars['BigInt']['output'];
  /**
   * The flow rate of the stream at the time of liquidation.
   *
   */
  flowRateAtLiquidation: Scalars['BigInt']['output'];
};

export type AgreementLiquidatedByEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order?: InputMaybe<Scalars['BigInt']['input']>;
  order_not?: InputMaybe<Scalars['BigInt']['input']>;
  order_gt?: InputMaybe<Scalars['BigInt']['input']>;
  order_lt?: InputMaybe<Scalars['BigInt']['input']>;
  order_gte?: InputMaybe<Scalars['BigInt']['input']>;
  order_lte?: InputMaybe<Scalars['BigInt']['input']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  token?: InputMaybe<Scalars['Bytes']['input']>;
  token_not?: InputMaybe<Scalars['Bytes']['input']>;
  token_gt?: InputMaybe<Scalars['Bytes']['input']>;
  token_lt?: InputMaybe<Scalars['Bytes']['input']>;
  token_gte?: InputMaybe<Scalars['Bytes']['input']>;
  token_lte?: InputMaybe<Scalars['Bytes']['input']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  liquidatorAccount?: InputMaybe<Scalars['Bytes']['input']>;
  liquidatorAccount_not?: InputMaybe<Scalars['Bytes']['input']>;
  liquidatorAccount_gt?: InputMaybe<Scalars['Bytes']['input']>;
  liquidatorAccount_lt?: InputMaybe<Scalars['Bytes']['input']>;
  liquidatorAccount_gte?: InputMaybe<Scalars['Bytes']['input']>;
  liquidatorAccount_lte?: InputMaybe<Scalars['Bytes']['input']>;
  liquidatorAccount_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  liquidatorAccount_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  liquidatorAccount_contains?: InputMaybe<Scalars['Bytes']['input']>;
  liquidatorAccount_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  agreementClass?: InputMaybe<Scalars['Bytes']['input']>;
  agreementClass_not?: InputMaybe<Scalars['Bytes']['input']>;
  agreementClass_gt?: InputMaybe<Scalars['Bytes']['input']>;
  agreementClass_lt?: InputMaybe<Scalars['Bytes']['input']>;
  agreementClass_gte?: InputMaybe<Scalars['Bytes']['input']>;
  agreementClass_lte?: InputMaybe<Scalars['Bytes']['input']>;
  agreementClass_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  agreementClass_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  agreementClass_contains?: InputMaybe<Scalars['Bytes']['input']>;
  agreementClass_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  agreementId?: InputMaybe<Scalars['Bytes']['input']>;
  agreementId_not?: InputMaybe<Scalars['Bytes']['input']>;
  agreementId_gt?: InputMaybe<Scalars['Bytes']['input']>;
  agreementId_lt?: InputMaybe<Scalars['Bytes']['input']>;
  agreementId_gte?: InputMaybe<Scalars['Bytes']['input']>;
  agreementId_lte?: InputMaybe<Scalars['Bytes']['input']>;
  agreementId_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  agreementId_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  agreementId_contains?: InputMaybe<Scalars['Bytes']['input']>;
  agreementId_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  penaltyAccount?: InputMaybe<Scalars['Bytes']['input']>;
  penaltyAccount_not?: InputMaybe<Scalars['Bytes']['input']>;
  penaltyAccount_gt?: InputMaybe<Scalars['Bytes']['input']>;
  penaltyAccount_lt?: InputMaybe<Scalars['Bytes']['input']>;
  penaltyAccount_gte?: InputMaybe<Scalars['Bytes']['input']>;
  penaltyAccount_lte?: InputMaybe<Scalars['Bytes']['input']>;
  penaltyAccount_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  penaltyAccount_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  penaltyAccount_contains?: InputMaybe<Scalars['Bytes']['input']>;
  penaltyAccount_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  bondAccount?: InputMaybe<Scalars['Bytes']['input']>;
  bondAccount_not?: InputMaybe<Scalars['Bytes']['input']>;
  bondAccount_gt?: InputMaybe<Scalars['Bytes']['input']>;
  bondAccount_lt?: InputMaybe<Scalars['Bytes']['input']>;
  bondAccount_gte?: InputMaybe<Scalars['Bytes']['input']>;
  bondAccount_lte?: InputMaybe<Scalars['Bytes']['input']>;
  bondAccount_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  bondAccount_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  bondAccount_contains?: InputMaybe<Scalars['Bytes']['input']>;
  bondAccount_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  rewardAmount?: InputMaybe<Scalars['BigInt']['input']>;
  rewardAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  rewardAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  rewardAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  rewardAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  rewardAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  rewardAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  rewardAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  bailoutAmount?: InputMaybe<Scalars['BigInt']['input']>;
  bailoutAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  bailoutAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  bailoutAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  bailoutAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  bailoutAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  bailoutAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  bailoutAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  deposit?: InputMaybe<Scalars['BigInt']['input']>;
  deposit_not?: InputMaybe<Scalars['BigInt']['input']>;
  deposit_gt?: InputMaybe<Scalars['BigInt']['input']>;
  deposit_lt?: InputMaybe<Scalars['BigInt']['input']>;
  deposit_gte?: InputMaybe<Scalars['BigInt']['input']>;
  deposit_lte?: InputMaybe<Scalars['BigInt']['input']>;
  deposit_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  deposit_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  flowRateAtLiquidation?: InputMaybe<Scalars['BigInt']['input']>;
  flowRateAtLiquidation_not?: InputMaybe<Scalars['BigInt']['input']>;
  flowRateAtLiquidation_gt?: InputMaybe<Scalars['BigInt']['input']>;
  flowRateAtLiquidation_lt?: InputMaybe<Scalars['BigInt']['input']>;
  flowRateAtLiquidation_gte?: InputMaybe<Scalars['BigInt']['input']>;
  flowRateAtLiquidation_lte?: InputMaybe<Scalars['BigInt']['input']>;
  flowRateAtLiquidation_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  flowRateAtLiquidation_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<AgreementLiquidatedByEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<AgreementLiquidatedByEvent_filter>>>;
};

export type AgreementLiquidatedByEvent_orderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'token'
  | 'liquidatorAccount'
  | 'agreementClass'
  | 'agreementId'
  | 'penaltyAccount'
  | 'bondAccount'
  | 'rewardAmount'
  | 'bailoutAmount'
  | 'deposit'
  | 'flowRateAtLiquidation';

export type AgreementLiquidatedV2Event = Event & {
  id: Scalars['ID']['output'];
  transactionHash: Scalars['Bytes']['output'];
  gasPrice: Scalars['BigInt']['output'];
  gasUsed?: Maybe<Scalars['BigInt']['output']>;
  timestamp: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   * addresses[1] = `liquidatorAccount` (executor of liquidation)
   * addresses[2] = `targetAccount` (the sender of the flow/stream)
   * addresses[3] = `rewardAmountReceiver` (the address receiving the reward) addresses
   *
   */
  addresses: Array<Scalars['Bytes']['output']>;
  blockNumber: Scalars['BigInt']['output'];
  logIndex: Scalars['BigInt']['output'];
  order: Scalars['BigInt']['output'];
  token: Scalars['Bytes']['output'];
  agreementClass: Scalars['Bytes']['output'];
  agreementId: Scalars['Bytes']['output'];
  liquidatorAccount: Scalars['Bytes']['output'];
  targetAccount: Scalars['Bytes']['output'];
  rewardAmountReceiver: Scalars['Bytes']['output'];
  rewardAmount: Scalars['BigInt']['output'];
  targetAccountBalanceDelta: Scalars['BigInt']['output'];
  version: Scalars['BigInt']['output'];
  liquidationType: Scalars['Int']['output'];
  /**
   * The full deposit amount of the stream that was liquidated.
   *
   */
  deposit: Scalars['BigInt']['output'];
  /**
   * The flow rate of the stream at the time of liquidation.
   *
   */
  flowRateAtLiquidation: Scalars['BigInt']['output'];
  /**
   * TO BE DEPRECATED in v2 endpoint - use rewardAmountReceiver instead
   *
   */
  rewardAccount: Scalars['Bytes']['output'];
};

export type AgreementLiquidatedV2Event_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order?: InputMaybe<Scalars['BigInt']['input']>;
  order_not?: InputMaybe<Scalars['BigInt']['input']>;
  order_gt?: InputMaybe<Scalars['BigInt']['input']>;
  order_lt?: InputMaybe<Scalars['BigInt']['input']>;
  order_gte?: InputMaybe<Scalars['BigInt']['input']>;
  order_lte?: InputMaybe<Scalars['BigInt']['input']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  token?: InputMaybe<Scalars['Bytes']['input']>;
  token_not?: InputMaybe<Scalars['Bytes']['input']>;
  token_gt?: InputMaybe<Scalars['Bytes']['input']>;
  token_lt?: InputMaybe<Scalars['Bytes']['input']>;
  token_gte?: InputMaybe<Scalars['Bytes']['input']>;
  token_lte?: InputMaybe<Scalars['Bytes']['input']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  agreementClass?: InputMaybe<Scalars['Bytes']['input']>;
  agreementClass_not?: InputMaybe<Scalars['Bytes']['input']>;
  agreementClass_gt?: InputMaybe<Scalars['Bytes']['input']>;
  agreementClass_lt?: InputMaybe<Scalars['Bytes']['input']>;
  agreementClass_gte?: InputMaybe<Scalars['Bytes']['input']>;
  agreementClass_lte?: InputMaybe<Scalars['Bytes']['input']>;
  agreementClass_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  agreementClass_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  agreementClass_contains?: InputMaybe<Scalars['Bytes']['input']>;
  agreementClass_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  agreementId?: InputMaybe<Scalars['Bytes']['input']>;
  agreementId_not?: InputMaybe<Scalars['Bytes']['input']>;
  agreementId_gt?: InputMaybe<Scalars['Bytes']['input']>;
  agreementId_lt?: InputMaybe<Scalars['Bytes']['input']>;
  agreementId_gte?: InputMaybe<Scalars['Bytes']['input']>;
  agreementId_lte?: InputMaybe<Scalars['Bytes']['input']>;
  agreementId_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  agreementId_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  agreementId_contains?: InputMaybe<Scalars['Bytes']['input']>;
  agreementId_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  liquidatorAccount?: InputMaybe<Scalars['Bytes']['input']>;
  liquidatorAccount_not?: InputMaybe<Scalars['Bytes']['input']>;
  liquidatorAccount_gt?: InputMaybe<Scalars['Bytes']['input']>;
  liquidatorAccount_lt?: InputMaybe<Scalars['Bytes']['input']>;
  liquidatorAccount_gte?: InputMaybe<Scalars['Bytes']['input']>;
  liquidatorAccount_lte?: InputMaybe<Scalars['Bytes']['input']>;
  liquidatorAccount_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  liquidatorAccount_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  liquidatorAccount_contains?: InputMaybe<Scalars['Bytes']['input']>;
  liquidatorAccount_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  targetAccount?: InputMaybe<Scalars['Bytes']['input']>;
  targetAccount_not?: InputMaybe<Scalars['Bytes']['input']>;
  targetAccount_gt?: InputMaybe<Scalars['Bytes']['input']>;
  targetAccount_lt?: InputMaybe<Scalars['Bytes']['input']>;
  targetAccount_gte?: InputMaybe<Scalars['Bytes']['input']>;
  targetAccount_lte?: InputMaybe<Scalars['Bytes']['input']>;
  targetAccount_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  targetAccount_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  targetAccount_contains?: InputMaybe<Scalars['Bytes']['input']>;
  targetAccount_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  rewardAmountReceiver?: InputMaybe<Scalars['Bytes']['input']>;
  rewardAmountReceiver_not?: InputMaybe<Scalars['Bytes']['input']>;
  rewardAmountReceiver_gt?: InputMaybe<Scalars['Bytes']['input']>;
  rewardAmountReceiver_lt?: InputMaybe<Scalars['Bytes']['input']>;
  rewardAmountReceiver_gte?: InputMaybe<Scalars['Bytes']['input']>;
  rewardAmountReceiver_lte?: InputMaybe<Scalars['Bytes']['input']>;
  rewardAmountReceiver_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  rewardAmountReceiver_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  rewardAmountReceiver_contains?: InputMaybe<Scalars['Bytes']['input']>;
  rewardAmountReceiver_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  rewardAmount?: InputMaybe<Scalars['BigInt']['input']>;
  rewardAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  rewardAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  rewardAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  rewardAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  rewardAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  rewardAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  rewardAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  targetAccountBalanceDelta?: InputMaybe<Scalars['BigInt']['input']>;
  targetAccountBalanceDelta_not?: InputMaybe<Scalars['BigInt']['input']>;
  targetAccountBalanceDelta_gt?: InputMaybe<Scalars['BigInt']['input']>;
  targetAccountBalanceDelta_lt?: InputMaybe<Scalars['BigInt']['input']>;
  targetAccountBalanceDelta_gte?: InputMaybe<Scalars['BigInt']['input']>;
  targetAccountBalanceDelta_lte?: InputMaybe<Scalars['BigInt']['input']>;
  targetAccountBalanceDelta_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  targetAccountBalanceDelta_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  version?: InputMaybe<Scalars['BigInt']['input']>;
  version_not?: InputMaybe<Scalars['BigInt']['input']>;
  version_gt?: InputMaybe<Scalars['BigInt']['input']>;
  version_lt?: InputMaybe<Scalars['BigInt']['input']>;
  version_gte?: InputMaybe<Scalars['BigInt']['input']>;
  version_lte?: InputMaybe<Scalars['BigInt']['input']>;
  version_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  version_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidationType?: InputMaybe<Scalars['Int']['input']>;
  liquidationType_not?: InputMaybe<Scalars['Int']['input']>;
  liquidationType_gt?: InputMaybe<Scalars['Int']['input']>;
  liquidationType_lt?: InputMaybe<Scalars['Int']['input']>;
  liquidationType_gte?: InputMaybe<Scalars['Int']['input']>;
  liquidationType_lte?: InputMaybe<Scalars['Int']['input']>;
  liquidationType_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  liquidationType_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  deposit?: InputMaybe<Scalars['BigInt']['input']>;
  deposit_not?: InputMaybe<Scalars['BigInt']['input']>;
  deposit_gt?: InputMaybe<Scalars['BigInt']['input']>;
  deposit_lt?: InputMaybe<Scalars['BigInt']['input']>;
  deposit_gte?: InputMaybe<Scalars['BigInt']['input']>;
  deposit_lte?: InputMaybe<Scalars['BigInt']['input']>;
  deposit_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  deposit_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  flowRateAtLiquidation?: InputMaybe<Scalars['BigInt']['input']>;
  flowRateAtLiquidation_not?: InputMaybe<Scalars['BigInt']['input']>;
  flowRateAtLiquidation_gt?: InputMaybe<Scalars['BigInt']['input']>;
  flowRateAtLiquidation_lt?: InputMaybe<Scalars['BigInt']['input']>;
  flowRateAtLiquidation_gte?: InputMaybe<Scalars['BigInt']['input']>;
  flowRateAtLiquidation_lte?: InputMaybe<Scalars['BigInt']['input']>;
  flowRateAtLiquidation_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  flowRateAtLiquidation_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  rewardAccount?: InputMaybe<Scalars['Bytes']['input']>;
  rewardAccount_not?: InputMaybe<Scalars['Bytes']['input']>;
  rewardAccount_gt?: InputMaybe<Scalars['Bytes']['input']>;
  rewardAccount_lt?: InputMaybe<Scalars['Bytes']['input']>;
  rewardAccount_gte?: InputMaybe<Scalars['Bytes']['input']>;
  rewardAccount_lte?: InputMaybe<Scalars['Bytes']['input']>;
  rewardAccount_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  rewardAccount_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  rewardAccount_contains?: InputMaybe<Scalars['Bytes']['input']>;
  rewardAccount_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<AgreementLiquidatedV2Event_filter>>>;
  or?: InputMaybe<Array<InputMaybe<AgreementLiquidatedV2Event_filter>>>;
};

export type AgreementLiquidatedV2Event_orderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'token'
  | 'agreementClass'
  | 'agreementId'
  | 'liquidatorAccount'
  | 'targetAccount'
  | 'rewardAmountReceiver'
  | 'rewardAmount'
  | 'targetAccountBalanceDelta'
  | 'version'
  | 'liquidationType'
  | 'deposit'
  | 'flowRateAtLiquidation'
  | 'rewardAccount';

export type AppRegisteredEvent = Event & {
  id: Scalars['ID']['output'];
  transactionHash: Scalars['Bytes']['output'];
  gasPrice: Scalars['BigInt']['output'];
  gasUsed?: Maybe<Scalars['BigInt']['output']>;
  timestamp: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `app`
   *
   */
  addresses: Array<Scalars['Bytes']['output']>;
  blockNumber: Scalars['BigInt']['output'];
  logIndex: Scalars['BigInt']['output'];
  order: Scalars['BigInt']['output'];
  app: Scalars['Bytes']['output'];
};

export type AppRegisteredEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order?: InputMaybe<Scalars['BigInt']['input']>;
  order_not?: InputMaybe<Scalars['BigInt']['input']>;
  order_gt?: InputMaybe<Scalars['BigInt']['input']>;
  order_lt?: InputMaybe<Scalars['BigInt']['input']>;
  order_gte?: InputMaybe<Scalars['BigInt']['input']>;
  order_lte?: InputMaybe<Scalars['BigInt']['input']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  app?: InputMaybe<Scalars['Bytes']['input']>;
  app_not?: InputMaybe<Scalars['Bytes']['input']>;
  app_gt?: InputMaybe<Scalars['Bytes']['input']>;
  app_lt?: InputMaybe<Scalars['Bytes']['input']>;
  app_gte?: InputMaybe<Scalars['Bytes']['input']>;
  app_lte?: InputMaybe<Scalars['Bytes']['input']>;
  app_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  app_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  app_contains?: InputMaybe<Scalars['Bytes']['input']>;
  app_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<AppRegisteredEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<AppRegisteredEvent_filter>>>;
};

export type AppRegisteredEvent_orderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'app';

export type ApprovalEvent = Event & {
  id: Scalars['ID']['output'];
  transactionHash: Scalars['Bytes']['output'];
  gasPrice: Scalars['BigInt']['output'];
  gasUsed?: Maybe<Scalars['BigInt']['output']>;
  timestamp: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   * addresses[1] = `owner`
   * addresses[2] = `to`
   *
   */
  addresses: Array<Scalars['Bytes']['output']>;
  blockNumber: Scalars['BigInt']['output'];
  logIndex: Scalars['BigInt']['output'];
  order: Scalars['BigInt']['output'];
  /**
   * The address that will be granting allowance to transfer ERC20.
   *
   */
  owner: Account;
  /**
   * The address that will be granted allowance to transfer ERC20.
   *
   */
  to: Account;
  /**
   * If `amount` is non-zero, this event was emitted for the approval of an ERC20.
   * Tne amount of ERC20 tokens that will be granted allowance to transfer.
   *
   */
  amount: Scalars['BigInt']['output'];
};

export type ApprovalEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order?: InputMaybe<Scalars['BigInt']['input']>;
  order_not?: InputMaybe<Scalars['BigInt']['input']>;
  order_gt?: InputMaybe<Scalars['BigInt']['input']>;
  order_lt?: InputMaybe<Scalars['BigInt']['input']>;
  order_gte?: InputMaybe<Scalars['BigInt']['input']>;
  order_lte?: InputMaybe<Scalars['BigInt']['input']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  owner?: InputMaybe<Scalars['String']['input']>;
  owner_not?: InputMaybe<Scalars['String']['input']>;
  owner_gt?: InputMaybe<Scalars['String']['input']>;
  owner_lt?: InputMaybe<Scalars['String']['input']>;
  owner_gte?: InputMaybe<Scalars['String']['input']>;
  owner_lte?: InputMaybe<Scalars['String']['input']>;
  owner_in?: InputMaybe<Array<Scalars['String']['input']>>;
  owner_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  owner_contains?: InputMaybe<Scalars['String']['input']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_not_contains?: InputMaybe<Scalars['String']['input']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_starts_with?: InputMaybe<Scalars['String']['input']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_ends_with?: InputMaybe<Scalars['String']['input']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_?: InputMaybe<Account_filter>;
  to?: InputMaybe<Scalars['String']['input']>;
  to_not?: InputMaybe<Scalars['String']['input']>;
  to_gt?: InputMaybe<Scalars['String']['input']>;
  to_lt?: InputMaybe<Scalars['String']['input']>;
  to_gte?: InputMaybe<Scalars['String']['input']>;
  to_lte?: InputMaybe<Scalars['String']['input']>;
  to_in?: InputMaybe<Array<Scalars['String']['input']>>;
  to_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  to_contains?: InputMaybe<Scalars['String']['input']>;
  to_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  to_not_contains?: InputMaybe<Scalars['String']['input']>;
  to_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  to_starts_with?: InputMaybe<Scalars['String']['input']>;
  to_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  to_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  to_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  to_ends_with?: InputMaybe<Scalars['String']['input']>;
  to_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  to_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  to_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  to_?: InputMaybe<Account_filter>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ApprovalEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<ApprovalEvent_filter>>>;
};

export type ApprovalEvent_orderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'owner'
  | 'owner__id'
  | 'owner__createdAtTimestamp'
  | 'owner__createdAtBlockNumber'
  | 'owner__updatedAtTimestamp'
  | 'owner__updatedAtBlockNumber'
  | 'owner__isSuperApp'
  | 'to'
  | 'to__id'
  | 'to__createdAtTimestamp'
  | 'to__createdAtBlockNumber'
  | 'to__updatedAtTimestamp'
  | 'to__updatedAtBlockNumber'
  | 'to__isSuperApp'
  | 'amount';

export type BlockChangedFilter = {
  number_gte: Scalars['Int']['input'];
};

export type Block_height = {
  hash?: InputMaybe<Scalars['Bytes']['input']>;
  number?: InputMaybe<Scalars['Int']['input']>;
  number_gte?: InputMaybe<Scalars['Int']['input']>;
};

export type BondIncreasedEvent = Event & {
  id: Scalars['ID']['output'];
  transactionHash: Scalars['Bytes']['output'];
  gasPrice: Scalars['BigInt']['output'];
  gasUsed?: Maybe<Scalars['BigInt']['output']>;
  timestamp: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   *
   */
  addresses: Array<Scalars['Bytes']['output']>;
  blockNumber: Scalars['BigInt']['output'];
  logIndex: Scalars['BigInt']['output'];
  order: Scalars['BigInt']['output'];
  /**
   * The address of the `token` (supertoken).
   *
   */
  token: Scalars['Bytes']['output'];
  /**
   * The additional amount added to the bond by the current Patrician In Charge (PIC).
   *
   */
  additionalBond: Scalars['BigInt']['output'];
};

export type BondIncreasedEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order?: InputMaybe<Scalars['BigInt']['input']>;
  order_not?: InputMaybe<Scalars['BigInt']['input']>;
  order_gt?: InputMaybe<Scalars['BigInt']['input']>;
  order_lt?: InputMaybe<Scalars['BigInt']['input']>;
  order_gte?: InputMaybe<Scalars['BigInt']['input']>;
  order_lte?: InputMaybe<Scalars['BigInt']['input']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  token?: InputMaybe<Scalars['Bytes']['input']>;
  token_not?: InputMaybe<Scalars['Bytes']['input']>;
  token_gt?: InputMaybe<Scalars['Bytes']['input']>;
  token_lt?: InputMaybe<Scalars['Bytes']['input']>;
  token_gte?: InputMaybe<Scalars['Bytes']['input']>;
  token_lte?: InputMaybe<Scalars['Bytes']['input']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  additionalBond?: InputMaybe<Scalars['BigInt']['input']>;
  additionalBond_not?: InputMaybe<Scalars['BigInt']['input']>;
  additionalBond_gt?: InputMaybe<Scalars['BigInt']['input']>;
  additionalBond_lt?: InputMaybe<Scalars['BigInt']['input']>;
  additionalBond_gte?: InputMaybe<Scalars['BigInt']['input']>;
  additionalBond_lte?: InputMaybe<Scalars['BigInt']['input']>;
  additionalBond_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  additionalBond_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BondIncreasedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BondIncreasedEvent_filter>>>;
};

export type BondIncreasedEvent_orderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'token'
  | 'additionalBond';

export type BufferAdjustedEvent = Event & {
  id: Scalars['ID']['output'];
  transactionHash: Scalars['Bytes']['output'];
  gasPrice: Scalars['BigInt']['output'];
  gasUsed?: Maybe<Scalars['BigInt']['output']>;
  timestamp: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   * addresses[1] = `pool`
   * addresses[2] = `distributor`
   * addresses[3] = `operator`
   *
   */
  addresses: Array<Scalars['Bytes']['output']>;
  blockNumber: Scalars['BigInt']['output'];
  logIndex: Scalars['BigInt']['output'];
  order: Scalars['BigInt']['output'];
  token: Scalars['Bytes']['output'];
  bufferDelta: Scalars['BigInt']['output'];
  newBufferAmount: Scalars['BigInt']['output'];
  totalBufferAmount: Scalars['BigInt']['output'];
  pool: Pool;
  poolDistributor: PoolDistributor;
};

export type BufferAdjustedEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order?: InputMaybe<Scalars['BigInt']['input']>;
  order_not?: InputMaybe<Scalars['BigInt']['input']>;
  order_gt?: InputMaybe<Scalars['BigInt']['input']>;
  order_lt?: InputMaybe<Scalars['BigInt']['input']>;
  order_gte?: InputMaybe<Scalars['BigInt']['input']>;
  order_lte?: InputMaybe<Scalars['BigInt']['input']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  token?: InputMaybe<Scalars['Bytes']['input']>;
  token_not?: InputMaybe<Scalars['Bytes']['input']>;
  token_gt?: InputMaybe<Scalars['Bytes']['input']>;
  token_lt?: InputMaybe<Scalars['Bytes']['input']>;
  token_gte?: InputMaybe<Scalars['Bytes']['input']>;
  token_lte?: InputMaybe<Scalars['Bytes']['input']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  bufferDelta?: InputMaybe<Scalars['BigInt']['input']>;
  bufferDelta_not?: InputMaybe<Scalars['BigInt']['input']>;
  bufferDelta_gt?: InputMaybe<Scalars['BigInt']['input']>;
  bufferDelta_lt?: InputMaybe<Scalars['BigInt']['input']>;
  bufferDelta_gte?: InputMaybe<Scalars['BigInt']['input']>;
  bufferDelta_lte?: InputMaybe<Scalars['BigInt']['input']>;
  bufferDelta_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  bufferDelta_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newBufferAmount?: InputMaybe<Scalars['BigInt']['input']>;
  newBufferAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  newBufferAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  newBufferAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  newBufferAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  newBufferAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  newBufferAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newBufferAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalBufferAmount?: InputMaybe<Scalars['BigInt']['input']>;
  totalBufferAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalBufferAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalBufferAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalBufferAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalBufferAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalBufferAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalBufferAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  pool?: InputMaybe<Scalars['String']['input']>;
  pool_not?: InputMaybe<Scalars['String']['input']>;
  pool_gt?: InputMaybe<Scalars['String']['input']>;
  pool_lt?: InputMaybe<Scalars['String']['input']>;
  pool_gte?: InputMaybe<Scalars['String']['input']>;
  pool_lte?: InputMaybe<Scalars['String']['input']>;
  pool_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_contains?: InputMaybe<Scalars['String']['input']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_?: InputMaybe<Pool_filter>;
  poolDistributor?: InputMaybe<Scalars['String']['input']>;
  poolDistributor_not?: InputMaybe<Scalars['String']['input']>;
  poolDistributor_gt?: InputMaybe<Scalars['String']['input']>;
  poolDistributor_lt?: InputMaybe<Scalars['String']['input']>;
  poolDistributor_gte?: InputMaybe<Scalars['String']['input']>;
  poolDistributor_lte?: InputMaybe<Scalars['String']['input']>;
  poolDistributor_in?: InputMaybe<Array<Scalars['String']['input']>>;
  poolDistributor_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  poolDistributor_contains?: InputMaybe<Scalars['String']['input']>;
  poolDistributor_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  poolDistributor_not_contains?: InputMaybe<Scalars['String']['input']>;
  poolDistributor_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  poolDistributor_starts_with?: InputMaybe<Scalars['String']['input']>;
  poolDistributor_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolDistributor_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  poolDistributor_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolDistributor_ends_with?: InputMaybe<Scalars['String']['input']>;
  poolDistributor_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolDistributor_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  poolDistributor_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolDistributor_?: InputMaybe<PoolDistributor_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BufferAdjustedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BufferAdjustedEvent_filter>>>;
};

export type BufferAdjustedEvent_orderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'token'
  | 'bufferDelta'
  | 'newBufferAmount'
  | 'totalBufferAmount'
  | 'pool'
  | 'pool__id'
  | 'pool__createdAtTimestamp'
  | 'pool__createdAtBlockNumber'
  | 'pool__updatedAtTimestamp'
  | 'pool__updatedAtBlockNumber'
  | 'pool__totalUnits'
  | 'pool__totalConnectedUnits'
  | 'pool__totalDisconnectedUnits'
  | 'pool__totalAmountInstantlyDistributedUntilUpdatedAt'
  | 'pool__totalAmountFlowedDistributedUntilUpdatedAt'
  | 'pool__totalAmountDistributedUntilUpdatedAt'
  | 'pool__totalFlowAdjustmentAmountDistributedUntilUpdatedAt'
  | 'pool__perUnitSettledValue'
  | 'pool__perUnitFlowRate'
  | 'pool__totalMembers'
  | 'pool__totalConnectedMembers'
  | 'pool__totalDisconnectedMembers'
  | 'pool__adjustmentFlowRate'
  | 'pool__flowRate'
  | 'pool__totalBuffer'
  | 'poolDistributor'
  | 'poolDistributor__id'
  | 'poolDistributor__createdAtTimestamp'
  | 'poolDistributor__createdAtBlockNumber'
  | 'poolDistributor__updatedAtTimestamp'
  | 'poolDistributor__updatedAtBlockNumber'
  | 'poolDistributor__totalAmountInstantlyDistributedUntilUpdatedAt'
  | 'poolDistributor__totalAmountFlowedDistributedUntilUpdatedAt'
  | 'poolDistributor__totalAmountDistributedUntilUpdatedAt'
  | 'poolDistributor__totalBuffer'
  | 'poolDistributor__flowRate';

export type BurnedEvent = Event & {
  id: Scalars['ID']['output'];
  transactionHash: Scalars['Bytes']['output'];
  gasPrice: Scalars['BigInt']['output'];
  gasUsed?: Maybe<Scalars['BigInt']['output']>;
  timestamp: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   * addresses[1] = `from`
   *
   */
  addresses: Array<Scalars['Bytes']['output']>;
  blockNumber: Scalars['BigInt']['output'];
  logIndex: Scalars['BigInt']['output'];
  order: Scalars['BigInt']['output'];
  operator: Scalars['Bytes']['output'];
  from: Scalars['Bytes']['output'];
  token: Scalars['Bytes']['output'];
  amount: Scalars['BigInt']['output'];
  data: Scalars['Bytes']['output'];
  operatorData: Scalars['Bytes']['output'];
};

export type BurnedEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order?: InputMaybe<Scalars['BigInt']['input']>;
  order_not?: InputMaybe<Scalars['BigInt']['input']>;
  order_gt?: InputMaybe<Scalars['BigInt']['input']>;
  order_lt?: InputMaybe<Scalars['BigInt']['input']>;
  order_gte?: InputMaybe<Scalars['BigInt']['input']>;
  order_lte?: InputMaybe<Scalars['BigInt']['input']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  operator?: InputMaybe<Scalars['Bytes']['input']>;
  operator_not?: InputMaybe<Scalars['Bytes']['input']>;
  operator_gt?: InputMaybe<Scalars['Bytes']['input']>;
  operator_lt?: InputMaybe<Scalars['Bytes']['input']>;
  operator_gte?: InputMaybe<Scalars['Bytes']['input']>;
  operator_lte?: InputMaybe<Scalars['Bytes']['input']>;
  operator_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  operator_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  operator_contains?: InputMaybe<Scalars['Bytes']['input']>;
  operator_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  from?: InputMaybe<Scalars['Bytes']['input']>;
  from_not?: InputMaybe<Scalars['Bytes']['input']>;
  from_gt?: InputMaybe<Scalars['Bytes']['input']>;
  from_lt?: InputMaybe<Scalars['Bytes']['input']>;
  from_gte?: InputMaybe<Scalars['Bytes']['input']>;
  from_lte?: InputMaybe<Scalars['Bytes']['input']>;
  from_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  from_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  from_contains?: InputMaybe<Scalars['Bytes']['input']>;
  from_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token?: InputMaybe<Scalars['Bytes']['input']>;
  token_not?: InputMaybe<Scalars['Bytes']['input']>;
  token_gt?: InputMaybe<Scalars['Bytes']['input']>;
  token_lt?: InputMaybe<Scalars['Bytes']['input']>;
  token_gte?: InputMaybe<Scalars['Bytes']['input']>;
  token_lte?: InputMaybe<Scalars['Bytes']['input']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  data?: InputMaybe<Scalars['Bytes']['input']>;
  data_not?: InputMaybe<Scalars['Bytes']['input']>;
  data_gt?: InputMaybe<Scalars['Bytes']['input']>;
  data_lt?: InputMaybe<Scalars['Bytes']['input']>;
  data_gte?: InputMaybe<Scalars['Bytes']['input']>;
  data_lte?: InputMaybe<Scalars['Bytes']['input']>;
  data_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  data_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  data_contains?: InputMaybe<Scalars['Bytes']['input']>;
  data_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  operatorData?: InputMaybe<Scalars['Bytes']['input']>;
  operatorData_not?: InputMaybe<Scalars['Bytes']['input']>;
  operatorData_gt?: InputMaybe<Scalars['Bytes']['input']>;
  operatorData_lt?: InputMaybe<Scalars['Bytes']['input']>;
  operatorData_gte?: InputMaybe<Scalars['Bytes']['input']>;
  operatorData_lte?: InputMaybe<Scalars['Bytes']['input']>;
  operatorData_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  operatorData_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  operatorData_contains?: InputMaybe<Scalars['Bytes']['input']>;
  operatorData_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BurnedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BurnedEvent_filter>>>;
};

export type BurnedEvent_orderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'operator'
  | 'from'
  | 'token'
  | 'amount'
  | 'data'
  | 'operatorData';

export type CFAv1LiquidationPeriodChangedEvent = Event & {
  id: Scalars['ID']['output'];
  transactionHash: Scalars['Bytes']['output'];
  gasPrice: Scalars['BigInt']['output'];
  gasUsed?: Maybe<Scalars['BigInt']['output']>;
  timestamp: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  /**
   * The address of the governance contract the event was emitted from.
   *
   */
  governanceAddress: Scalars['Bytes']['output'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `governanceAddress`
   * addresses[1] = `host`
   * addresses[2] = `superToken`
   *
   */
  addresses: Array<Scalars['Bytes']['output']>;
  blockNumber: Scalars['BigInt']['output'];
  order: Scalars['BigInt']['output'];
  logIndex: Scalars['BigInt']['output'];
  host: Scalars['Bytes']['output'];
  superToken: Scalars['Bytes']['output'];
  isKeySet: Scalars['Boolean']['output'];
  liquidationPeriod: Scalars['BigInt']['output'];
};

export type CFAv1LiquidationPeriodChangedEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  governanceAddress?: InputMaybe<Scalars['Bytes']['input']>;
  governanceAddress_not?: InputMaybe<Scalars['Bytes']['input']>;
  governanceAddress_gt?: InputMaybe<Scalars['Bytes']['input']>;
  governanceAddress_lt?: InputMaybe<Scalars['Bytes']['input']>;
  governanceAddress_gte?: InputMaybe<Scalars['Bytes']['input']>;
  governanceAddress_lte?: InputMaybe<Scalars['Bytes']['input']>;
  governanceAddress_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  governanceAddress_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  governanceAddress_contains?: InputMaybe<Scalars['Bytes']['input']>;
  governanceAddress_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order?: InputMaybe<Scalars['BigInt']['input']>;
  order_not?: InputMaybe<Scalars['BigInt']['input']>;
  order_gt?: InputMaybe<Scalars['BigInt']['input']>;
  order_lt?: InputMaybe<Scalars['BigInt']['input']>;
  order_gte?: InputMaybe<Scalars['BigInt']['input']>;
  order_lte?: InputMaybe<Scalars['BigInt']['input']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  host?: InputMaybe<Scalars['Bytes']['input']>;
  host_not?: InputMaybe<Scalars['Bytes']['input']>;
  host_gt?: InputMaybe<Scalars['Bytes']['input']>;
  host_lt?: InputMaybe<Scalars['Bytes']['input']>;
  host_gte?: InputMaybe<Scalars['Bytes']['input']>;
  host_lte?: InputMaybe<Scalars['Bytes']['input']>;
  host_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  host_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  host_contains?: InputMaybe<Scalars['Bytes']['input']>;
  host_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  superToken?: InputMaybe<Scalars['Bytes']['input']>;
  superToken_not?: InputMaybe<Scalars['Bytes']['input']>;
  superToken_gt?: InputMaybe<Scalars['Bytes']['input']>;
  superToken_lt?: InputMaybe<Scalars['Bytes']['input']>;
  superToken_gte?: InputMaybe<Scalars['Bytes']['input']>;
  superToken_lte?: InputMaybe<Scalars['Bytes']['input']>;
  superToken_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  superToken_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  superToken_contains?: InputMaybe<Scalars['Bytes']['input']>;
  superToken_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  isKeySet?: InputMaybe<Scalars['Boolean']['input']>;
  isKeySet_not?: InputMaybe<Scalars['Boolean']['input']>;
  isKeySet_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isKeySet_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  liquidationPeriod?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationPeriod_not?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationPeriod_gt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationPeriod_lt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationPeriod_gte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationPeriod_lte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationPeriod_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidationPeriod_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<CFAv1LiquidationPeriodChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<CFAv1LiquidationPeriodChangedEvent_filter>>>;
};

export type CFAv1LiquidationPeriodChangedEvent_orderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'governanceAddress'
  | 'addresses'
  | 'blockNumber'
  | 'order'
  | 'logIndex'
  | 'host'
  | 'superToken'
  | 'isKeySet'
  | 'liquidationPeriod';

export type ConfigChangedEvent = Event & {
  id: Scalars['ID']['output'];
  transactionHash: Scalars['Bytes']['output'];
  gasPrice: Scalars['BigInt']['output'];
  gasUsed?: Maybe<Scalars['BigInt']['output']>;
  timestamp: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  /**
   * The address of the governance contract the event was emitted from.
   *
   */
  governanceAddress: Scalars['Bytes']['output'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `governanceAddress`
   * addresses[1] = `host`
   * addresses[2] = `superToken`
   *
   */
  addresses: Array<Scalars['Bytes']['output']>;
  blockNumber: Scalars['BigInt']['output'];
  logIndex: Scalars['BigInt']['output'];
  order: Scalars['BigInt']['output'];
  host: Scalars['Bytes']['output'];
  superToken: Scalars['Bytes']['output'];
  key: Scalars['Bytes']['output'];
  isKeySet: Scalars['Boolean']['output'];
  value: Scalars['BigInt']['output'];
};

export type ConfigChangedEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  governanceAddress?: InputMaybe<Scalars['Bytes']['input']>;
  governanceAddress_not?: InputMaybe<Scalars['Bytes']['input']>;
  governanceAddress_gt?: InputMaybe<Scalars['Bytes']['input']>;
  governanceAddress_lt?: InputMaybe<Scalars['Bytes']['input']>;
  governanceAddress_gte?: InputMaybe<Scalars['Bytes']['input']>;
  governanceAddress_lte?: InputMaybe<Scalars['Bytes']['input']>;
  governanceAddress_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  governanceAddress_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  governanceAddress_contains?: InputMaybe<Scalars['Bytes']['input']>;
  governanceAddress_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order?: InputMaybe<Scalars['BigInt']['input']>;
  order_not?: InputMaybe<Scalars['BigInt']['input']>;
  order_gt?: InputMaybe<Scalars['BigInt']['input']>;
  order_lt?: InputMaybe<Scalars['BigInt']['input']>;
  order_gte?: InputMaybe<Scalars['BigInt']['input']>;
  order_lte?: InputMaybe<Scalars['BigInt']['input']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  host?: InputMaybe<Scalars['Bytes']['input']>;
  host_not?: InputMaybe<Scalars['Bytes']['input']>;
  host_gt?: InputMaybe<Scalars['Bytes']['input']>;
  host_lt?: InputMaybe<Scalars['Bytes']['input']>;
  host_gte?: InputMaybe<Scalars['Bytes']['input']>;
  host_lte?: InputMaybe<Scalars['Bytes']['input']>;
  host_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  host_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  host_contains?: InputMaybe<Scalars['Bytes']['input']>;
  host_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  superToken?: InputMaybe<Scalars['Bytes']['input']>;
  superToken_not?: InputMaybe<Scalars['Bytes']['input']>;
  superToken_gt?: InputMaybe<Scalars['Bytes']['input']>;
  superToken_lt?: InputMaybe<Scalars['Bytes']['input']>;
  superToken_gte?: InputMaybe<Scalars['Bytes']['input']>;
  superToken_lte?: InputMaybe<Scalars['Bytes']['input']>;
  superToken_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  superToken_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  superToken_contains?: InputMaybe<Scalars['Bytes']['input']>;
  superToken_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  key?: InputMaybe<Scalars['Bytes']['input']>;
  key_not?: InputMaybe<Scalars['Bytes']['input']>;
  key_gt?: InputMaybe<Scalars['Bytes']['input']>;
  key_lt?: InputMaybe<Scalars['Bytes']['input']>;
  key_gte?: InputMaybe<Scalars['Bytes']['input']>;
  key_lte?: InputMaybe<Scalars['Bytes']['input']>;
  key_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  key_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  key_contains?: InputMaybe<Scalars['Bytes']['input']>;
  key_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  isKeySet?: InputMaybe<Scalars['Boolean']['input']>;
  isKeySet_not?: InputMaybe<Scalars['Boolean']['input']>;
  isKeySet_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isKeySet_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  value?: InputMaybe<Scalars['BigInt']['input']>;
  value_not?: InputMaybe<Scalars['BigInt']['input']>;
  value_gt?: InputMaybe<Scalars['BigInt']['input']>;
  value_lt?: InputMaybe<Scalars['BigInt']['input']>;
  value_gte?: InputMaybe<Scalars['BigInt']['input']>;
  value_lte?: InputMaybe<Scalars['BigInt']['input']>;
  value_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  value_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ConfigChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<ConfigChangedEvent_filter>>>;
};

export type ConfigChangedEvent_orderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'governanceAddress'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'host'
  | 'superToken'
  | 'key'
  | 'isKeySet'
  | 'value';

export type CustomSuperTokenCreatedEvent = Event & {
  id: Scalars['ID']['output'];
  transactionHash: Scalars['Bytes']['output'];
  gasPrice: Scalars['BigInt']['output'];
  gasUsed?: Maybe<Scalars['BigInt']['output']>;
  timestamp: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   *
   */
  addresses: Array<Scalars['Bytes']['output']>;
  blockNumber: Scalars['BigInt']['output'];
  logIndex: Scalars['BigInt']['output'];
  order: Scalars['BigInt']['output'];
  token: Scalars['Bytes']['output'];
};

export type CustomSuperTokenCreatedEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order?: InputMaybe<Scalars['BigInt']['input']>;
  order_not?: InputMaybe<Scalars['BigInt']['input']>;
  order_gt?: InputMaybe<Scalars['BigInt']['input']>;
  order_lt?: InputMaybe<Scalars['BigInt']['input']>;
  order_gte?: InputMaybe<Scalars['BigInt']['input']>;
  order_lte?: InputMaybe<Scalars['BigInt']['input']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  token?: InputMaybe<Scalars['Bytes']['input']>;
  token_not?: InputMaybe<Scalars['Bytes']['input']>;
  token_gt?: InputMaybe<Scalars['Bytes']['input']>;
  token_lt?: InputMaybe<Scalars['Bytes']['input']>;
  token_gte?: InputMaybe<Scalars['Bytes']['input']>;
  token_lte?: InputMaybe<Scalars['Bytes']['input']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<CustomSuperTokenCreatedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<CustomSuperTokenCreatedEvent_filter>>>;
};

export type CustomSuperTokenCreatedEvent_orderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'token';

export type DistributionClaimedEvent = Event & {
  id: Scalars['ID']['output'];
  transactionHash: Scalars['Bytes']['output'];
  gasPrice: Scalars['BigInt']['output'];
  gasUsed?: Maybe<Scalars['BigInt']['output']>;
  timestamp: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   * addresses[1] = `pool`
   * addresses[2] = `member`
   *
   */
  addresses: Array<Scalars['Bytes']['output']>;
  blockNumber: Scalars['BigInt']['output'];
  logIndex: Scalars['BigInt']['output'];
  order: Scalars['BigInt']['output'];
  token: Scalars['Bytes']['output'];
  claimedAmount: Scalars['BigInt']['output'];
  totalClaimed: Scalars['BigInt']['output'];
  pool: Pool;
  poolMember: PoolMember;
};

export type DistributionClaimedEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order?: InputMaybe<Scalars['BigInt']['input']>;
  order_not?: InputMaybe<Scalars['BigInt']['input']>;
  order_gt?: InputMaybe<Scalars['BigInt']['input']>;
  order_lt?: InputMaybe<Scalars['BigInt']['input']>;
  order_gte?: InputMaybe<Scalars['BigInt']['input']>;
  order_lte?: InputMaybe<Scalars['BigInt']['input']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  token?: InputMaybe<Scalars['Bytes']['input']>;
  token_not?: InputMaybe<Scalars['Bytes']['input']>;
  token_gt?: InputMaybe<Scalars['Bytes']['input']>;
  token_lt?: InputMaybe<Scalars['Bytes']['input']>;
  token_gte?: InputMaybe<Scalars['Bytes']['input']>;
  token_lte?: InputMaybe<Scalars['Bytes']['input']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  claimedAmount?: InputMaybe<Scalars['BigInt']['input']>;
  claimedAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  claimedAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  claimedAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  claimedAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  claimedAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  claimedAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  claimedAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalClaimed?: InputMaybe<Scalars['BigInt']['input']>;
  totalClaimed_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalClaimed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalClaimed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalClaimed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalClaimed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalClaimed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalClaimed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  pool?: InputMaybe<Scalars['String']['input']>;
  pool_not?: InputMaybe<Scalars['String']['input']>;
  pool_gt?: InputMaybe<Scalars['String']['input']>;
  pool_lt?: InputMaybe<Scalars['String']['input']>;
  pool_gte?: InputMaybe<Scalars['String']['input']>;
  pool_lte?: InputMaybe<Scalars['String']['input']>;
  pool_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_contains?: InputMaybe<Scalars['String']['input']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_?: InputMaybe<Pool_filter>;
  poolMember?: InputMaybe<Scalars['String']['input']>;
  poolMember_not?: InputMaybe<Scalars['String']['input']>;
  poolMember_gt?: InputMaybe<Scalars['String']['input']>;
  poolMember_lt?: InputMaybe<Scalars['String']['input']>;
  poolMember_gte?: InputMaybe<Scalars['String']['input']>;
  poolMember_lte?: InputMaybe<Scalars['String']['input']>;
  poolMember_in?: InputMaybe<Array<Scalars['String']['input']>>;
  poolMember_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  poolMember_contains?: InputMaybe<Scalars['String']['input']>;
  poolMember_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  poolMember_not_contains?: InputMaybe<Scalars['String']['input']>;
  poolMember_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  poolMember_starts_with?: InputMaybe<Scalars['String']['input']>;
  poolMember_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolMember_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  poolMember_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolMember_ends_with?: InputMaybe<Scalars['String']['input']>;
  poolMember_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolMember_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  poolMember_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolMember_?: InputMaybe<PoolMember_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<DistributionClaimedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<DistributionClaimedEvent_filter>>>;
};

export type DistributionClaimedEvent_orderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'token'
  | 'claimedAmount'
  | 'totalClaimed'
  | 'pool'
  | 'pool__id'
  | 'pool__createdAtTimestamp'
  | 'pool__createdAtBlockNumber'
  | 'pool__updatedAtTimestamp'
  | 'pool__updatedAtBlockNumber'
  | 'pool__totalUnits'
  | 'pool__totalConnectedUnits'
  | 'pool__totalDisconnectedUnits'
  | 'pool__totalAmountInstantlyDistributedUntilUpdatedAt'
  | 'pool__totalAmountFlowedDistributedUntilUpdatedAt'
  | 'pool__totalAmountDistributedUntilUpdatedAt'
  | 'pool__totalFlowAdjustmentAmountDistributedUntilUpdatedAt'
  | 'pool__perUnitSettledValue'
  | 'pool__perUnitFlowRate'
  | 'pool__totalMembers'
  | 'pool__totalConnectedMembers'
  | 'pool__totalDisconnectedMembers'
  | 'pool__adjustmentFlowRate'
  | 'pool__flowRate'
  | 'pool__totalBuffer'
  | 'poolMember'
  | 'poolMember__id'
  | 'poolMember__createdAtTimestamp'
  | 'poolMember__createdAtBlockNumber'
  | 'poolMember__updatedAtTimestamp'
  | 'poolMember__updatedAtBlockNumber'
  | 'poolMember__units'
  | 'poolMember__isConnected'
  | 'poolMember__totalAmountClaimed'
  | 'poolMember__poolTotalAmountDistributedUntilUpdatedAt'
  | 'poolMember__totalAmountReceivedUntilUpdatedAt'
  | 'poolMember__syncedPerUnitSettledValue'
  | 'poolMember__syncedPerUnitFlowRate';

/**
 * Event: An interface which is shared by all event entities and contains basic transaction data.
 *
 */
export type Event = {
  /**
   * The id of the event entity.
   *
   */
  id: Scalars['ID']['output'];
  /**
   * The block number which the event was logged in.
   *
   */
  blockNumber: Scalars['BigInt']['output'];
  /**
   * The index of the event, e.g. first event emitted would have `logIndex` of 0.
   *
   */
  logIndex: Scalars['BigInt']['output'];
  /**
   * A number used internally to sort the order of transactions.
   * The formula: `blockNumber * ORDER_MULTIPLIER + logIndex`
   * where: ORDER_MULTIPLIER = 10000
   *
   */
  order: Scalars['BigInt']['output'];
  /**
   * The name of the event - is a 1-to-1 match with the name in our smart contracts.
   *
   */
  name: Scalars['String']['output'];
  /**
   * Contains the addresses for accounts that were "impacted" by the event.
   * This typically involves accounts which experienced a state change as a result of the transaction which emitted this event.
   *
   */
  addresses: Array<Scalars['Bytes']['output']>;
  /**
   * The block timestamp which the event was logged in.
   *
   */
  timestamp: Scalars['BigInt']['output'];
  /**
   * The transaction hash of the transaction that the event was logged in.
   *
   */
  transactionHash: Scalars['Bytes']['output'];
  /**
   * The gas price of the transaction that the event was logged in.
   *
   */
  gasPrice: Scalars['BigInt']['output'];
  /**
   * The gas used for this transaction.
   *
   */
  gasUsed?: Maybe<Scalars['BigInt']['output']>;
};

export type Event_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order?: InputMaybe<Scalars['BigInt']['input']>;
  order_not?: InputMaybe<Scalars['BigInt']['input']>;
  order_gt?: InputMaybe<Scalars['BigInt']['input']>;
  order_lt?: InputMaybe<Scalars['BigInt']['input']>;
  order_gte?: InputMaybe<Scalars['BigInt']['input']>;
  order_lte?: InputMaybe<Scalars['BigInt']['input']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Event_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Event_filter>>>;
};

export type Event_orderBy =
  | 'id'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'name'
  | 'addresses'
  | 'timestamp'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed';

export type ExitRateChangedEvent = Event & {
  id: Scalars['ID']['output'];
  transactionHash: Scalars['Bytes']['output'];
  gasPrice: Scalars['BigInt']['output'];
  gasUsed?: Maybe<Scalars['BigInt']['output']>;
  timestamp: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   *
   */
  addresses: Array<Scalars['Bytes']['output']>;
  blockNumber: Scalars['BigInt']['output'];
  logIndex: Scalars['BigInt']['output'];
  order: Scalars['BigInt']['output'];
  /**
   * The address of the `token` (supertoken).
   *
   */
  token: Scalars['Bytes']['output'];
  /**
   * The flowrate at which the bond is streamed back to the Patrician In Charge.
   *
   */
  exitRate: Scalars['BigInt']['output'];
};

export type ExitRateChangedEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order?: InputMaybe<Scalars['BigInt']['input']>;
  order_not?: InputMaybe<Scalars['BigInt']['input']>;
  order_gt?: InputMaybe<Scalars['BigInt']['input']>;
  order_lt?: InputMaybe<Scalars['BigInt']['input']>;
  order_gte?: InputMaybe<Scalars['BigInt']['input']>;
  order_lte?: InputMaybe<Scalars['BigInt']['input']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  token?: InputMaybe<Scalars['Bytes']['input']>;
  token_not?: InputMaybe<Scalars['Bytes']['input']>;
  token_gt?: InputMaybe<Scalars['Bytes']['input']>;
  token_lt?: InputMaybe<Scalars['Bytes']['input']>;
  token_gte?: InputMaybe<Scalars['Bytes']['input']>;
  token_lte?: InputMaybe<Scalars['Bytes']['input']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  exitRate?: InputMaybe<Scalars['BigInt']['input']>;
  exitRate_not?: InputMaybe<Scalars['BigInt']['input']>;
  exitRate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  exitRate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  exitRate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  exitRate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  exitRate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  exitRate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ExitRateChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<ExitRateChangedEvent_filter>>>;
};

export type ExitRateChangedEvent_orderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'token'
  | 'exitRate';

export type FlowDistributionUpdatedEvent = Event & {
  id: Scalars['ID']['output'];
  transactionHash: Scalars['Bytes']['output'];
  gasPrice: Scalars['BigInt']['output'];
  gasUsed?: Maybe<Scalars['BigInt']['output']>;
  timestamp: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   * addresses[1] = `pool`
   * addresses[2] = `poolDistributor`
   * addresses[3] = `operator`
   *
   */
  addresses: Array<Scalars['Bytes']['output']>;
  blockNumber: Scalars['BigInt']['output'];
  logIndex: Scalars['BigInt']['output'];
  order: Scalars['BigInt']['output'];
  token: Scalars['Bytes']['output'];
  operator: Scalars['Bytes']['output'];
  oldFlowRate: Scalars['BigInt']['output'];
  newDistributorToPoolFlowRate: Scalars['BigInt']['output'];
  newTotalDistributionFlowRate: Scalars['BigInt']['output'];
  adjustmentFlowRecipient: Scalars['Bytes']['output'];
  adjustmentFlowRate: Scalars['BigInt']['output'];
  totalUnits: Scalars['BigInt']['output'];
  userData: Scalars['Bytes']['output'];
  pool: Pool;
  poolDistributor: PoolDistributor;
};

export type FlowDistributionUpdatedEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order?: InputMaybe<Scalars['BigInt']['input']>;
  order_not?: InputMaybe<Scalars['BigInt']['input']>;
  order_gt?: InputMaybe<Scalars['BigInt']['input']>;
  order_lt?: InputMaybe<Scalars['BigInt']['input']>;
  order_gte?: InputMaybe<Scalars['BigInt']['input']>;
  order_lte?: InputMaybe<Scalars['BigInt']['input']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  token?: InputMaybe<Scalars['Bytes']['input']>;
  token_not?: InputMaybe<Scalars['Bytes']['input']>;
  token_gt?: InputMaybe<Scalars['Bytes']['input']>;
  token_lt?: InputMaybe<Scalars['Bytes']['input']>;
  token_gte?: InputMaybe<Scalars['Bytes']['input']>;
  token_lte?: InputMaybe<Scalars['Bytes']['input']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  operator?: InputMaybe<Scalars['Bytes']['input']>;
  operator_not?: InputMaybe<Scalars['Bytes']['input']>;
  operator_gt?: InputMaybe<Scalars['Bytes']['input']>;
  operator_lt?: InputMaybe<Scalars['Bytes']['input']>;
  operator_gte?: InputMaybe<Scalars['Bytes']['input']>;
  operator_lte?: InputMaybe<Scalars['Bytes']['input']>;
  operator_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  operator_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  operator_contains?: InputMaybe<Scalars['Bytes']['input']>;
  operator_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  oldFlowRate?: InputMaybe<Scalars['BigInt']['input']>;
  oldFlowRate_not?: InputMaybe<Scalars['BigInt']['input']>;
  oldFlowRate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  oldFlowRate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  oldFlowRate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  oldFlowRate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  oldFlowRate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  oldFlowRate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newDistributorToPoolFlowRate?: InputMaybe<Scalars['BigInt']['input']>;
  newDistributorToPoolFlowRate_not?: InputMaybe<Scalars['BigInt']['input']>;
  newDistributorToPoolFlowRate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  newDistributorToPoolFlowRate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  newDistributorToPoolFlowRate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  newDistributorToPoolFlowRate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  newDistributorToPoolFlowRate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newDistributorToPoolFlowRate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newTotalDistributionFlowRate?: InputMaybe<Scalars['BigInt']['input']>;
  newTotalDistributionFlowRate_not?: InputMaybe<Scalars['BigInt']['input']>;
  newTotalDistributionFlowRate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  newTotalDistributionFlowRate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  newTotalDistributionFlowRate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  newTotalDistributionFlowRate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  newTotalDistributionFlowRate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newTotalDistributionFlowRate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  adjustmentFlowRecipient?: InputMaybe<Scalars['Bytes']['input']>;
  adjustmentFlowRecipient_not?: InputMaybe<Scalars['Bytes']['input']>;
  adjustmentFlowRecipient_gt?: InputMaybe<Scalars['Bytes']['input']>;
  adjustmentFlowRecipient_lt?: InputMaybe<Scalars['Bytes']['input']>;
  adjustmentFlowRecipient_gte?: InputMaybe<Scalars['Bytes']['input']>;
  adjustmentFlowRecipient_lte?: InputMaybe<Scalars['Bytes']['input']>;
  adjustmentFlowRecipient_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  adjustmentFlowRecipient_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  adjustmentFlowRecipient_contains?: InputMaybe<Scalars['Bytes']['input']>;
  adjustmentFlowRecipient_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  adjustmentFlowRate?: InputMaybe<Scalars['BigInt']['input']>;
  adjustmentFlowRate_not?: InputMaybe<Scalars['BigInt']['input']>;
  adjustmentFlowRate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  adjustmentFlowRate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  adjustmentFlowRate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  adjustmentFlowRate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  adjustmentFlowRate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  adjustmentFlowRate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalUnits?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnits_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnits_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnits_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnits_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnits_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnits_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalUnits_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  userData?: InputMaybe<Scalars['Bytes']['input']>;
  userData_not?: InputMaybe<Scalars['Bytes']['input']>;
  userData_gt?: InputMaybe<Scalars['Bytes']['input']>;
  userData_lt?: InputMaybe<Scalars['Bytes']['input']>;
  userData_gte?: InputMaybe<Scalars['Bytes']['input']>;
  userData_lte?: InputMaybe<Scalars['Bytes']['input']>;
  userData_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  userData_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  userData_contains?: InputMaybe<Scalars['Bytes']['input']>;
  userData_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  pool?: InputMaybe<Scalars['String']['input']>;
  pool_not?: InputMaybe<Scalars['String']['input']>;
  pool_gt?: InputMaybe<Scalars['String']['input']>;
  pool_lt?: InputMaybe<Scalars['String']['input']>;
  pool_gte?: InputMaybe<Scalars['String']['input']>;
  pool_lte?: InputMaybe<Scalars['String']['input']>;
  pool_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_contains?: InputMaybe<Scalars['String']['input']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_?: InputMaybe<Pool_filter>;
  poolDistributor?: InputMaybe<Scalars['String']['input']>;
  poolDistributor_not?: InputMaybe<Scalars['String']['input']>;
  poolDistributor_gt?: InputMaybe<Scalars['String']['input']>;
  poolDistributor_lt?: InputMaybe<Scalars['String']['input']>;
  poolDistributor_gte?: InputMaybe<Scalars['String']['input']>;
  poolDistributor_lte?: InputMaybe<Scalars['String']['input']>;
  poolDistributor_in?: InputMaybe<Array<Scalars['String']['input']>>;
  poolDistributor_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  poolDistributor_contains?: InputMaybe<Scalars['String']['input']>;
  poolDistributor_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  poolDistributor_not_contains?: InputMaybe<Scalars['String']['input']>;
  poolDistributor_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  poolDistributor_starts_with?: InputMaybe<Scalars['String']['input']>;
  poolDistributor_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolDistributor_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  poolDistributor_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolDistributor_ends_with?: InputMaybe<Scalars['String']['input']>;
  poolDistributor_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolDistributor_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  poolDistributor_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolDistributor_?: InputMaybe<PoolDistributor_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<FlowDistributionUpdatedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<FlowDistributionUpdatedEvent_filter>>>;
};

export type FlowDistributionUpdatedEvent_orderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'token'
  | 'operator'
  | 'oldFlowRate'
  | 'newDistributorToPoolFlowRate'
  | 'newTotalDistributionFlowRate'
  | 'adjustmentFlowRecipient'
  | 'adjustmentFlowRate'
  | 'totalUnits'
  | 'userData'
  | 'pool'
  | 'pool__id'
  | 'pool__createdAtTimestamp'
  | 'pool__createdAtBlockNumber'
  | 'pool__updatedAtTimestamp'
  | 'pool__updatedAtBlockNumber'
  | 'pool__totalUnits'
  | 'pool__totalConnectedUnits'
  | 'pool__totalDisconnectedUnits'
  | 'pool__totalAmountInstantlyDistributedUntilUpdatedAt'
  | 'pool__totalAmountFlowedDistributedUntilUpdatedAt'
  | 'pool__totalAmountDistributedUntilUpdatedAt'
  | 'pool__totalFlowAdjustmentAmountDistributedUntilUpdatedAt'
  | 'pool__perUnitSettledValue'
  | 'pool__perUnitFlowRate'
  | 'pool__totalMembers'
  | 'pool__totalConnectedMembers'
  | 'pool__totalDisconnectedMembers'
  | 'pool__adjustmentFlowRate'
  | 'pool__flowRate'
  | 'pool__totalBuffer'
  | 'poolDistributor'
  | 'poolDistributor__id'
  | 'poolDistributor__createdAtTimestamp'
  | 'poolDistributor__createdAtBlockNumber'
  | 'poolDistributor__updatedAtTimestamp'
  | 'poolDistributor__updatedAtBlockNumber'
  | 'poolDistributor__totalAmountInstantlyDistributedUntilUpdatedAt'
  | 'poolDistributor__totalAmountFlowedDistributedUntilUpdatedAt'
  | 'poolDistributor__totalAmountDistributedUntilUpdatedAt'
  | 'poolDistributor__totalBuffer'
  | 'poolDistributor__flowRate';

/**
 * FlowOperator: A higher order entity that of a flow operator for an `AccountTokenSnapshot`.
 *
 */
export type FlowOperator = {
  /**
   * ID composed of: flowOperator-token-sender
   *
   */
  id: Scalars['ID']['output'];
  createdAtTimestamp: Scalars['BigInt']['output'];
  createdAtBlockNumber: Scalars['BigInt']['output'];
  updatedAtTimestamp: Scalars['BigInt']['output'];
  updatedAtBlockNumber: Scalars['BigInt']['output'];
  /**
   * The permissions granted to the `flowOperator`.
   * Bitmask representation:
   * Delete | Update | Create
   * | D | U | C |
   * | 0 | 0 | 0 |
   *
   */
  permissions: Scalars['Int']['output'];
  /**
   * The flow rate allowance granted to the `flowOperator` by the `sender`. This can be reset if the `sender` updates the `flowOperator` flow rate allowance.
   *
   */
  flowRateAllowanceGranted: Scalars['BigInt']['output'];
  /**
   * The remaining flow rate allowance the `flowOperator` has.
   * This will go down every time when the `flowOperator` uses the allowance, that is, if they increase flowRate for `sender` or create a new flow on behalf of `sender`.
   * It can only be reset if the `sender` updates the flow rate allowance.
   * NOTE: this value will NOT go down if max flow rate allowance is set.
   *
   */
  flowRateAllowanceRemaining: Scalars['BigInt']['output'];
  /**
   * The transfer allowance granted to the `flowOperator` by the `sender`.
   *
   */
  allowance: Scalars['BigInt']['output'];
  flowOperator: Scalars['Bytes']['output'];
  sender: Account;
  token: Token;
  accountTokenSnapshot: AccountTokenSnapshot;
  flowOperatorUpdatedEvents: Array<FlowOperatorUpdatedEvent>;
};


/**
 * FlowOperator: A higher order entity that of a flow operator for an `AccountTokenSnapshot`.
 *
 */
export type FlowOperatorflowOperatorUpdatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FlowOperatorUpdatedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FlowOperatorUpdatedEvent_filter>;
};

export type FlowOperatorUpdatedEvent = Event & {
  id: Scalars['ID']['output'];
  transactionHash: Scalars['Bytes']['output'];
  gasPrice: Scalars['BigInt']['output'];
  gasUsed?: Maybe<Scalars['BigInt']['output']>;
  timestamp: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   * addresses[1] = sender
   * addresses[2] = `flowOperator`
   *
   */
  addresses: Array<Scalars['Bytes']['output']>;
  blockNumber: Scalars['BigInt']['output'];
  logIndex: Scalars['BigInt']['output'];
  order: Scalars['BigInt']['output'];
  /**
   * The address of the `token` being streamed.
   *
   */
  token: Scalars['Bytes']['output'];
  sender: Scalars['Bytes']['output'];
  /**
   * The permissions granted to the `flowOperator`.
   * Octo bitmask representation.
   *
   */
  permissions: Scalars['Int']['output'];
  flowRateAllowance: Scalars['BigInt']['output'];
  flowOperator: FlowOperator;
};

export type FlowOperatorUpdatedEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order?: InputMaybe<Scalars['BigInt']['input']>;
  order_not?: InputMaybe<Scalars['BigInt']['input']>;
  order_gt?: InputMaybe<Scalars['BigInt']['input']>;
  order_lt?: InputMaybe<Scalars['BigInt']['input']>;
  order_gte?: InputMaybe<Scalars['BigInt']['input']>;
  order_lte?: InputMaybe<Scalars['BigInt']['input']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  token?: InputMaybe<Scalars['Bytes']['input']>;
  token_not?: InputMaybe<Scalars['Bytes']['input']>;
  token_gt?: InputMaybe<Scalars['Bytes']['input']>;
  token_lt?: InputMaybe<Scalars['Bytes']['input']>;
  token_gte?: InputMaybe<Scalars['Bytes']['input']>;
  token_lte?: InputMaybe<Scalars['Bytes']['input']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  sender?: InputMaybe<Scalars['Bytes']['input']>;
  sender_not?: InputMaybe<Scalars['Bytes']['input']>;
  sender_gt?: InputMaybe<Scalars['Bytes']['input']>;
  sender_lt?: InputMaybe<Scalars['Bytes']['input']>;
  sender_gte?: InputMaybe<Scalars['Bytes']['input']>;
  sender_lte?: InputMaybe<Scalars['Bytes']['input']>;
  sender_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  sender_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  sender_contains?: InputMaybe<Scalars['Bytes']['input']>;
  sender_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  permissions?: InputMaybe<Scalars['Int']['input']>;
  permissions_not?: InputMaybe<Scalars['Int']['input']>;
  permissions_gt?: InputMaybe<Scalars['Int']['input']>;
  permissions_lt?: InputMaybe<Scalars['Int']['input']>;
  permissions_gte?: InputMaybe<Scalars['Int']['input']>;
  permissions_lte?: InputMaybe<Scalars['Int']['input']>;
  permissions_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  permissions_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  flowRateAllowance?: InputMaybe<Scalars['BigInt']['input']>;
  flowRateAllowance_not?: InputMaybe<Scalars['BigInt']['input']>;
  flowRateAllowance_gt?: InputMaybe<Scalars['BigInt']['input']>;
  flowRateAllowance_lt?: InputMaybe<Scalars['BigInt']['input']>;
  flowRateAllowance_gte?: InputMaybe<Scalars['BigInt']['input']>;
  flowRateAllowance_lte?: InputMaybe<Scalars['BigInt']['input']>;
  flowRateAllowance_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  flowRateAllowance_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  flowOperator?: InputMaybe<Scalars['String']['input']>;
  flowOperator_not?: InputMaybe<Scalars['String']['input']>;
  flowOperator_gt?: InputMaybe<Scalars['String']['input']>;
  flowOperator_lt?: InputMaybe<Scalars['String']['input']>;
  flowOperator_gte?: InputMaybe<Scalars['String']['input']>;
  flowOperator_lte?: InputMaybe<Scalars['String']['input']>;
  flowOperator_in?: InputMaybe<Array<Scalars['String']['input']>>;
  flowOperator_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  flowOperator_contains?: InputMaybe<Scalars['String']['input']>;
  flowOperator_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  flowOperator_not_contains?: InputMaybe<Scalars['String']['input']>;
  flowOperator_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  flowOperator_starts_with?: InputMaybe<Scalars['String']['input']>;
  flowOperator_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  flowOperator_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  flowOperator_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  flowOperator_ends_with?: InputMaybe<Scalars['String']['input']>;
  flowOperator_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  flowOperator_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  flowOperator_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  flowOperator_?: InputMaybe<FlowOperator_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<FlowOperatorUpdatedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<FlowOperatorUpdatedEvent_filter>>>;
};

export type FlowOperatorUpdatedEvent_orderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'token'
  | 'sender'
  | 'permissions'
  | 'flowRateAllowance'
  | 'flowOperator'
  | 'flowOperator__id'
  | 'flowOperator__createdAtTimestamp'
  | 'flowOperator__createdAtBlockNumber'
  | 'flowOperator__updatedAtTimestamp'
  | 'flowOperator__updatedAtBlockNumber'
  | 'flowOperator__permissions'
  | 'flowOperator__flowRateAllowanceGranted'
  | 'flowOperator__flowRateAllowanceRemaining'
  | 'flowOperator__allowance'
  | 'flowOperator__flowOperator';

export type FlowOperator_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  createdAtTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAtBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAtTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAtBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  permissions?: InputMaybe<Scalars['Int']['input']>;
  permissions_not?: InputMaybe<Scalars['Int']['input']>;
  permissions_gt?: InputMaybe<Scalars['Int']['input']>;
  permissions_lt?: InputMaybe<Scalars['Int']['input']>;
  permissions_gte?: InputMaybe<Scalars['Int']['input']>;
  permissions_lte?: InputMaybe<Scalars['Int']['input']>;
  permissions_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  permissions_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  flowRateAllowanceGranted?: InputMaybe<Scalars['BigInt']['input']>;
  flowRateAllowanceGranted_not?: InputMaybe<Scalars['BigInt']['input']>;
  flowRateAllowanceGranted_gt?: InputMaybe<Scalars['BigInt']['input']>;
  flowRateAllowanceGranted_lt?: InputMaybe<Scalars['BigInt']['input']>;
  flowRateAllowanceGranted_gte?: InputMaybe<Scalars['BigInt']['input']>;
  flowRateAllowanceGranted_lte?: InputMaybe<Scalars['BigInt']['input']>;
  flowRateAllowanceGranted_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  flowRateAllowanceGranted_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  flowRateAllowanceRemaining?: InputMaybe<Scalars['BigInt']['input']>;
  flowRateAllowanceRemaining_not?: InputMaybe<Scalars['BigInt']['input']>;
  flowRateAllowanceRemaining_gt?: InputMaybe<Scalars['BigInt']['input']>;
  flowRateAllowanceRemaining_lt?: InputMaybe<Scalars['BigInt']['input']>;
  flowRateAllowanceRemaining_gte?: InputMaybe<Scalars['BigInt']['input']>;
  flowRateAllowanceRemaining_lte?: InputMaybe<Scalars['BigInt']['input']>;
  flowRateAllowanceRemaining_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  flowRateAllowanceRemaining_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  allowance?: InputMaybe<Scalars['BigInt']['input']>;
  allowance_not?: InputMaybe<Scalars['BigInt']['input']>;
  allowance_gt?: InputMaybe<Scalars['BigInt']['input']>;
  allowance_lt?: InputMaybe<Scalars['BigInt']['input']>;
  allowance_gte?: InputMaybe<Scalars['BigInt']['input']>;
  allowance_lte?: InputMaybe<Scalars['BigInt']['input']>;
  allowance_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  allowance_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  flowOperator?: InputMaybe<Scalars['Bytes']['input']>;
  flowOperator_not?: InputMaybe<Scalars['Bytes']['input']>;
  flowOperator_gt?: InputMaybe<Scalars['Bytes']['input']>;
  flowOperator_lt?: InputMaybe<Scalars['Bytes']['input']>;
  flowOperator_gte?: InputMaybe<Scalars['Bytes']['input']>;
  flowOperator_lte?: InputMaybe<Scalars['Bytes']['input']>;
  flowOperator_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  flowOperator_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  flowOperator_contains?: InputMaybe<Scalars['Bytes']['input']>;
  flowOperator_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  sender?: InputMaybe<Scalars['String']['input']>;
  sender_not?: InputMaybe<Scalars['String']['input']>;
  sender_gt?: InputMaybe<Scalars['String']['input']>;
  sender_lt?: InputMaybe<Scalars['String']['input']>;
  sender_gte?: InputMaybe<Scalars['String']['input']>;
  sender_lte?: InputMaybe<Scalars['String']['input']>;
  sender_in?: InputMaybe<Array<Scalars['String']['input']>>;
  sender_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  sender_contains?: InputMaybe<Scalars['String']['input']>;
  sender_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_not_contains?: InputMaybe<Scalars['String']['input']>;
  sender_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_starts_with?: InputMaybe<Scalars['String']['input']>;
  sender_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  sender_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_ends_with?: InputMaybe<Scalars['String']['input']>;
  sender_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  sender_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_?: InputMaybe<Account_filter>;
  token?: InputMaybe<Scalars['String']['input']>;
  token_not?: InputMaybe<Scalars['String']['input']>;
  token_gt?: InputMaybe<Scalars['String']['input']>;
  token_lt?: InputMaybe<Scalars['String']['input']>;
  token_gte?: InputMaybe<Scalars['String']['input']>;
  token_lte?: InputMaybe<Scalars['String']['input']>;
  token_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_contains?: InputMaybe<Scalars['String']['input']>;
  token_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_contains?: InputMaybe<Scalars['String']['input']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_?: InputMaybe<Token_filter>;
  accountTokenSnapshot?: InputMaybe<Scalars['String']['input']>;
  accountTokenSnapshot_not?: InputMaybe<Scalars['String']['input']>;
  accountTokenSnapshot_gt?: InputMaybe<Scalars['String']['input']>;
  accountTokenSnapshot_lt?: InputMaybe<Scalars['String']['input']>;
  accountTokenSnapshot_gte?: InputMaybe<Scalars['String']['input']>;
  accountTokenSnapshot_lte?: InputMaybe<Scalars['String']['input']>;
  accountTokenSnapshot_in?: InputMaybe<Array<Scalars['String']['input']>>;
  accountTokenSnapshot_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  accountTokenSnapshot_contains?: InputMaybe<Scalars['String']['input']>;
  accountTokenSnapshot_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  accountTokenSnapshot_not_contains?: InputMaybe<Scalars['String']['input']>;
  accountTokenSnapshot_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  accountTokenSnapshot_starts_with?: InputMaybe<Scalars['String']['input']>;
  accountTokenSnapshot_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  accountTokenSnapshot_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  accountTokenSnapshot_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  accountTokenSnapshot_ends_with?: InputMaybe<Scalars['String']['input']>;
  accountTokenSnapshot_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  accountTokenSnapshot_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  accountTokenSnapshot_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  accountTokenSnapshot_?: InputMaybe<AccountTokenSnapshot_filter>;
  flowOperatorUpdatedEvents_?: InputMaybe<FlowOperatorUpdatedEvent_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<FlowOperator_filter>>>;
  or?: InputMaybe<Array<InputMaybe<FlowOperator_filter>>>;
};

export type FlowOperator_orderBy =
  | 'id'
  | 'createdAtTimestamp'
  | 'createdAtBlockNumber'
  | 'updatedAtTimestamp'
  | 'updatedAtBlockNumber'
  | 'permissions'
  | 'flowRateAllowanceGranted'
  | 'flowRateAllowanceRemaining'
  | 'allowance'
  | 'flowOperator'
  | 'sender'
  | 'sender__id'
  | 'sender__createdAtTimestamp'
  | 'sender__createdAtBlockNumber'
  | 'sender__updatedAtTimestamp'
  | 'sender__updatedAtBlockNumber'
  | 'sender__isSuperApp'
  | 'token'
  | 'token__id'
  | 'token__createdAtTimestamp'
  | 'token__createdAtBlockNumber'
  | 'token__decimals'
  | 'token__name'
  | 'token__symbol'
  | 'token__isSuperToken'
  | 'token__isNativeAssetSuperToken'
  | 'token__isListed'
  | 'token__underlyingAddress'
  | 'accountTokenSnapshot'
  | 'accountTokenSnapshot__id'
  | 'accountTokenSnapshot__createdAtTimestamp'
  | 'accountTokenSnapshot__createdAtBlockNumber'
  | 'accountTokenSnapshot__updatedAtTimestamp'
  | 'accountTokenSnapshot__updatedAtBlockNumber'
  | 'accountTokenSnapshot__isLiquidationEstimateOptimistic'
  | 'accountTokenSnapshot__maybeCriticalAtTimestamp'
  | 'accountTokenSnapshot__totalNumberOfActiveStreams'
  | 'accountTokenSnapshot__totalCFANumberOfActiveStreams'
  | 'accountTokenSnapshot__totalGDANumberOfActiveStreams'
  | 'accountTokenSnapshot__activeOutgoingStreamCount'
  | 'accountTokenSnapshot__activeCFAOutgoingStreamCount'
  | 'accountTokenSnapshot__activeGDAOutgoingStreamCount'
  | 'accountTokenSnapshot__activeIncomingStreamCount'
  | 'accountTokenSnapshot__totalNumberOfClosedStreams'
  | 'accountTokenSnapshot__totalCFANumberOfClosedStreams'
  | 'accountTokenSnapshot__totalGDANumberOfClosedStreams'
  | 'accountTokenSnapshot__inactiveOutgoingStreamCount'
  | 'accountTokenSnapshot__inactiveCFAOutgoingStreamCount'
  | 'accountTokenSnapshot__inactiveGDAOutgoingStreamCount'
  | 'accountTokenSnapshot__inactiveIncomingStreamCount'
  | 'accountTokenSnapshot__totalSubscriptionsWithUnits'
  | 'accountTokenSnapshot__totalApprovedSubscriptions'
  | 'accountTokenSnapshot__totalMembershipsWithUnits'
  | 'accountTokenSnapshot__totalConnectedMemberships'
  | 'accountTokenSnapshot__adminOfPoolCount'
  | 'accountTokenSnapshot__balanceUntilUpdatedAt'
  | 'accountTokenSnapshot__balanceLastUpdatedFromRpcBlocknumber'
  | 'accountTokenSnapshot__totalDeposit'
  | 'accountTokenSnapshot__totalCFADeposit'
  | 'accountTokenSnapshot__totalGDADeposit'
  | 'accountTokenSnapshot__totalNetFlowRate'
  | 'accountTokenSnapshot__totalCFANetFlowRate'
  | 'accountTokenSnapshot__totalInflowRate'
  | 'accountTokenSnapshot__totalOutflowRate'
  | 'accountTokenSnapshot__totalCFAOutflowRate'
  | 'accountTokenSnapshot__totalGDAOutflowRate'
  | 'accountTokenSnapshot__totalAmountStreamedInUntilUpdatedAt'
  | 'accountTokenSnapshot__totalAmountStreamedOutUntilUpdatedAt'
  | 'accountTokenSnapshot__totalCFAAmountStreamedOutUntilUpdatedAt'
  | 'accountTokenSnapshot__totalAmountStreamedUntilUpdatedAt'
  | 'accountTokenSnapshot__totalCFAAmountStreamedUntilUpdatedAt'
  | 'accountTokenSnapshot__totalAmountTransferredUntilUpdatedAt'
  | 'flowOperatorUpdatedEvents';

/**
 * FlowUpdated: An `Event` entity that is emitted
 * when a flow is created, updated, or deleted.
 *
 */
export type FlowUpdatedEvent = Event & {
  id: Scalars['ID']['output'];
  transactionHash: Scalars['Bytes']['output'];
  gasPrice: Scalars['BigInt']['output'];
  gasUsed?: Maybe<Scalars['BigInt']['output']>;
  timestamp: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (supertoken)
   * addresses[1] = `sender`
   * addresses[2] = `receiver`
   *
   */
  addresses: Array<Scalars['Bytes']['output']>;
  blockNumber: Scalars['BigInt']['output'];
  logIndex: Scalars['BigInt']['output'];
  order: Scalars['BigInt']['output'];
  /**
   * The address of the `token` (supertoken) being streamed.
   *
   */
  token: Scalars['Bytes']['output'];
  /**
   * The address of the flow sender.
   *
   */
  sender: Scalars['Bytes']['output'];
  /**
   * The address of the flow receiver.
   *
   */
  receiver: Scalars['Bytes']['output'];
  /**
   * The address that is executing the flow update transaction.
   * This will be the zero address until the flowOperator feature is live.
   *
   */
  flowOperator: Scalars['Bytes']['output'];
  /**
   * The flow rate per second.
   *
   */
  flowRate: Scalars['BigInt']['output'];
  /**
   * The total (global/account level) flow rate of `sender` for `token` as of this event.
   *
   */
  totalSenderFlowRate: Scalars['BigInt']['output'];
  /**
   * The total (global/account level) flow rate of `receiver` for `token` as of this event.
   *
   */
  totalReceiverFlowRate: Scalars['BigInt']['output'];
  /**
   * The deposit amount put up for the creation of the flow.
   *
   */
  deposit: Scalars['BigInt']['output'];
  /**
   * Arbitrary bytes (additional data) passed upon flow creation.
   *
   */
  userData: Scalars['Bytes']['output'];
  /**
   * The previous flow rate, the absolute (positive) value.
   *
   */
  oldFlowRate: Scalars['BigInt']['output'];
  /**
   * The "type" of the `FlowUpdated` event.
   * 0 = create
   * 1 = update
   * 2 = terminate
   *
   */
  type: Scalars['Int']['output'];
  /**
   * The total amount streamed until the timestamp
   * for the Stream entity linked to this event.
   *
   */
  totalAmountStreamedUntilTimestamp: Scalars['BigInt']['output'];
  /**
   * The stream entity which is being modified.
   *
   */
  stream: Stream;
};

export type FlowUpdatedEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order?: InputMaybe<Scalars['BigInt']['input']>;
  order_not?: InputMaybe<Scalars['BigInt']['input']>;
  order_gt?: InputMaybe<Scalars['BigInt']['input']>;
  order_lt?: InputMaybe<Scalars['BigInt']['input']>;
  order_gte?: InputMaybe<Scalars['BigInt']['input']>;
  order_lte?: InputMaybe<Scalars['BigInt']['input']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  token?: InputMaybe<Scalars['Bytes']['input']>;
  token_not?: InputMaybe<Scalars['Bytes']['input']>;
  token_gt?: InputMaybe<Scalars['Bytes']['input']>;
  token_lt?: InputMaybe<Scalars['Bytes']['input']>;
  token_gte?: InputMaybe<Scalars['Bytes']['input']>;
  token_lte?: InputMaybe<Scalars['Bytes']['input']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  sender?: InputMaybe<Scalars['Bytes']['input']>;
  sender_not?: InputMaybe<Scalars['Bytes']['input']>;
  sender_gt?: InputMaybe<Scalars['Bytes']['input']>;
  sender_lt?: InputMaybe<Scalars['Bytes']['input']>;
  sender_gte?: InputMaybe<Scalars['Bytes']['input']>;
  sender_lte?: InputMaybe<Scalars['Bytes']['input']>;
  sender_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  sender_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  sender_contains?: InputMaybe<Scalars['Bytes']['input']>;
  sender_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  receiver?: InputMaybe<Scalars['Bytes']['input']>;
  receiver_not?: InputMaybe<Scalars['Bytes']['input']>;
  receiver_gt?: InputMaybe<Scalars['Bytes']['input']>;
  receiver_lt?: InputMaybe<Scalars['Bytes']['input']>;
  receiver_gte?: InputMaybe<Scalars['Bytes']['input']>;
  receiver_lte?: InputMaybe<Scalars['Bytes']['input']>;
  receiver_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  receiver_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  receiver_contains?: InputMaybe<Scalars['Bytes']['input']>;
  receiver_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  flowOperator?: InputMaybe<Scalars['Bytes']['input']>;
  flowOperator_not?: InputMaybe<Scalars['Bytes']['input']>;
  flowOperator_gt?: InputMaybe<Scalars['Bytes']['input']>;
  flowOperator_lt?: InputMaybe<Scalars['Bytes']['input']>;
  flowOperator_gte?: InputMaybe<Scalars['Bytes']['input']>;
  flowOperator_lte?: InputMaybe<Scalars['Bytes']['input']>;
  flowOperator_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  flowOperator_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  flowOperator_contains?: InputMaybe<Scalars['Bytes']['input']>;
  flowOperator_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  flowRate?: InputMaybe<Scalars['BigInt']['input']>;
  flowRate_not?: InputMaybe<Scalars['BigInt']['input']>;
  flowRate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  flowRate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  flowRate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  flowRate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  flowRate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  flowRate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalSenderFlowRate?: InputMaybe<Scalars['BigInt']['input']>;
  totalSenderFlowRate_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalSenderFlowRate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalSenderFlowRate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalSenderFlowRate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalSenderFlowRate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalSenderFlowRate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalSenderFlowRate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalReceiverFlowRate?: InputMaybe<Scalars['BigInt']['input']>;
  totalReceiverFlowRate_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalReceiverFlowRate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalReceiverFlowRate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalReceiverFlowRate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalReceiverFlowRate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalReceiverFlowRate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalReceiverFlowRate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  deposit?: InputMaybe<Scalars['BigInt']['input']>;
  deposit_not?: InputMaybe<Scalars['BigInt']['input']>;
  deposit_gt?: InputMaybe<Scalars['BigInt']['input']>;
  deposit_lt?: InputMaybe<Scalars['BigInt']['input']>;
  deposit_gte?: InputMaybe<Scalars['BigInt']['input']>;
  deposit_lte?: InputMaybe<Scalars['BigInt']['input']>;
  deposit_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  deposit_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  userData?: InputMaybe<Scalars['Bytes']['input']>;
  userData_not?: InputMaybe<Scalars['Bytes']['input']>;
  userData_gt?: InputMaybe<Scalars['Bytes']['input']>;
  userData_lt?: InputMaybe<Scalars['Bytes']['input']>;
  userData_gte?: InputMaybe<Scalars['Bytes']['input']>;
  userData_lte?: InputMaybe<Scalars['Bytes']['input']>;
  userData_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  userData_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  userData_contains?: InputMaybe<Scalars['Bytes']['input']>;
  userData_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  oldFlowRate?: InputMaybe<Scalars['BigInt']['input']>;
  oldFlowRate_not?: InputMaybe<Scalars['BigInt']['input']>;
  oldFlowRate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  oldFlowRate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  oldFlowRate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  oldFlowRate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  oldFlowRate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  oldFlowRate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  type?: InputMaybe<Scalars['Int']['input']>;
  type_not?: InputMaybe<Scalars['Int']['input']>;
  type_gt?: InputMaybe<Scalars['Int']['input']>;
  type_lt?: InputMaybe<Scalars['Int']['input']>;
  type_gte?: InputMaybe<Scalars['Int']['input']>;
  type_lte?: InputMaybe<Scalars['Int']['input']>;
  type_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  type_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalAmountStreamedUntilTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamedUntilTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamedUntilTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamedUntilTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamedUntilTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamedUntilTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamedUntilTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalAmountStreamedUntilTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  stream?: InputMaybe<Scalars['String']['input']>;
  stream_not?: InputMaybe<Scalars['String']['input']>;
  stream_gt?: InputMaybe<Scalars['String']['input']>;
  stream_lt?: InputMaybe<Scalars['String']['input']>;
  stream_gte?: InputMaybe<Scalars['String']['input']>;
  stream_lte?: InputMaybe<Scalars['String']['input']>;
  stream_in?: InputMaybe<Array<Scalars['String']['input']>>;
  stream_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  stream_contains?: InputMaybe<Scalars['String']['input']>;
  stream_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  stream_not_contains?: InputMaybe<Scalars['String']['input']>;
  stream_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  stream_starts_with?: InputMaybe<Scalars['String']['input']>;
  stream_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  stream_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  stream_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  stream_ends_with?: InputMaybe<Scalars['String']['input']>;
  stream_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  stream_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  stream_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  stream_?: InputMaybe<Stream_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<FlowUpdatedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<FlowUpdatedEvent_filter>>>;
};

export type FlowUpdatedEvent_orderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'token'
  | 'sender'
  | 'receiver'
  | 'flowOperator'
  | 'flowRate'
  | 'totalSenderFlowRate'
  | 'totalReceiverFlowRate'
  | 'deposit'
  | 'userData'
  | 'oldFlowRate'
  | 'type'
  | 'totalAmountStreamedUntilTimestamp'
  | 'stream'
  | 'stream__id'
  | 'stream__createdAtTimestamp'
  | 'stream__createdAtBlockNumber'
  | 'stream__updatedAtTimestamp'
  | 'stream__updatedAtBlockNumber'
  | 'stream__currentFlowRate'
  | 'stream__deposit'
  | 'stream__streamedUntilUpdatedAt'
  | 'stream__userData';

export type GovernanceReplacedEvent = Event & {
  id: Scalars['ID']['output'];
  transactionHash: Scalars['Bytes']['output'];
  gasPrice: Scalars['BigInt']['output'];
  gasUsed?: Maybe<Scalars['BigInt']['output']>;
  timestamp: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  blockNumber: Scalars['BigInt']['output'];
  logIndex: Scalars['BigInt']['output'];
  order: Scalars['BigInt']['output'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `oldGovernance`
   * addresses[1] = `newGovernance`
   *
   */
  addresses: Array<Scalars['Bytes']['output']>;
  oldGovernance: Scalars['Bytes']['output'];
  newGovernance: Scalars['Bytes']['output'];
};

export type GovernanceReplacedEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order?: InputMaybe<Scalars['BigInt']['input']>;
  order_not?: InputMaybe<Scalars['BigInt']['input']>;
  order_gt?: InputMaybe<Scalars['BigInt']['input']>;
  order_lt?: InputMaybe<Scalars['BigInt']['input']>;
  order_gte?: InputMaybe<Scalars['BigInt']['input']>;
  order_lte?: InputMaybe<Scalars['BigInt']['input']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  addresses?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  oldGovernance?: InputMaybe<Scalars['Bytes']['input']>;
  oldGovernance_not?: InputMaybe<Scalars['Bytes']['input']>;
  oldGovernance_gt?: InputMaybe<Scalars['Bytes']['input']>;
  oldGovernance_lt?: InputMaybe<Scalars['Bytes']['input']>;
  oldGovernance_gte?: InputMaybe<Scalars['Bytes']['input']>;
  oldGovernance_lte?: InputMaybe<Scalars['Bytes']['input']>;
  oldGovernance_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  oldGovernance_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  oldGovernance_contains?: InputMaybe<Scalars['Bytes']['input']>;
  oldGovernance_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  newGovernance?: InputMaybe<Scalars['Bytes']['input']>;
  newGovernance_not?: InputMaybe<Scalars['Bytes']['input']>;
  newGovernance_gt?: InputMaybe<Scalars['Bytes']['input']>;
  newGovernance_lt?: InputMaybe<Scalars['Bytes']['input']>;
  newGovernance_gte?: InputMaybe<Scalars['Bytes']['input']>;
  newGovernance_lte?: InputMaybe<Scalars['Bytes']['input']>;
  newGovernance_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  newGovernance_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  newGovernance_contains?: InputMaybe<Scalars['Bytes']['input']>;
  newGovernance_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<GovernanceReplacedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<GovernanceReplacedEvent_filter>>>;
};

export type GovernanceReplacedEvent_orderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'addresses'
  | 'oldGovernance'
  | 'newGovernance';

/**
 * Index: An Index higher order entity.
 *
 */
export type Index = {
  /**
   * ID composed of: publisherAddress-tokenAddress-indexId
   *
   */
  id: Scalars['ID']['output'];
  createdAtTimestamp: Scalars['BigInt']['output'];
  createdAtBlockNumber: Scalars['BigInt']['output'];
  updatedAtTimestamp: Scalars['BigInt']['output'];
  updatedAtBlockNumber: Scalars['BigInt']['output'];
  /**
   * NOTE: indexId is not the same as the id of the `Index` entity.
   * An arbitrary uint32 value used to allow a publisher to create multiple indexes for a specific `token`.
   *
   */
  indexId: Scalars['BigInt']['output'];
  indexValue: Scalars['BigInt']['output'];
  /**
   * The number of subscriptions which have units allocated to them on the `Index`.
   *
   */
  totalSubscriptionsWithUnits: Scalars['Int']['output'];
  /**
   * The number of units allocated by the `Index` that are pending.
   * This refers to the current (as of updatedAt) `totalUnitsPending`-not all that has ever been pending.
   *
   */
  totalUnitsPending: Scalars['BigInt']['output'];
  /**
   * The number of units allocated by the `Index` that are approved.
   * This refers to the current (as of updatedAt) `totalUnitsApproved`-not all that has ever been approved.
   *
   */
  totalUnitsApproved: Scalars['BigInt']['output'];
  /**
   * The sum of `totalUnitsPending` and `totalUnitsApproved`.
   *
   */
  totalUnits: Scalars['BigInt']['output'];
  /**
   * The total amount distributed from this `Index`.
   *
   */
  totalAmountDistributedUntilUpdatedAt: Scalars['BigInt']['output'];
  token: Token;
  publisher: Account;
  /**
   * The subscriptions of the index, it will include approved, unapproved
   * and deleted subscriptions.
   *
   */
  subscriptions: Array<IndexSubscription>;
  /**
   * IndexCreated event, there will only be one.
   *
   */
  indexCreatedEvent: IndexCreatedEvent;
  indexDistributionClaimedEvents: Array<IndexDistributionClaimedEvent>;
  indexUpdatedEvents: Array<IndexUpdatedEvent>;
  indexSubscribedEvents: Array<IndexSubscribedEvent>;
  indexUnitsUpdatedEvents: Array<IndexUnitsUpdatedEvent>;
  indexUnsubscribedEvents: Array<IndexUnsubscribedEvent>;
};


/**
 * Index: An Index higher order entity.
 *
 */
export type IndexsubscriptionsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<IndexSubscription_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<IndexSubscription_filter>;
};


/**
 * Index: An Index higher order entity.
 *
 */
export type IndexindexDistributionClaimedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<IndexDistributionClaimedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<IndexDistributionClaimedEvent_filter>;
};


/**
 * Index: An Index higher order entity.
 *
 */
export type IndexindexUpdatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<IndexUpdatedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<IndexUpdatedEvent_filter>;
};


/**
 * Index: An Index higher order entity.
 *
 */
export type IndexindexSubscribedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<IndexSubscribedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<IndexSubscribedEvent_filter>;
};


/**
 * Index: An Index higher order entity.
 *
 */
export type IndexindexUnitsUpdatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<IndexUnitsUpdatedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<IndexUnitsUpdatedEvent_filter>;
};


/**
 * Index: An Index higher order entity.
 *
 */
export type IndexindexUnsubscribedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<IndexUnsubscribedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<IndexUnsubscribedEvent_filter>;
};

export type IndexCreatedEvent = Event & {
  id: Scalars['ID']['output'];
  transactionHash: Scalars['Bytes']['output'];
  gasPrice: Scalars['BigInt']['output'];
  gasUsed?: Maybe<Scalars['BigInt']['output']>;
  timestamp: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   * addresses[1] = `publisher`
   *
   */
  addresses: Array<Scalars['Bytes']['output']>;
  blockNumber: Scalars['BigInt']['output'];
  logIndex: Scalars['BigInt']['output'];
  order: Scalars['BigInt']['output'];
  token: Scalars['Bytes']['output'];
  /**
   * The creator of the `index`.
   *
   */
  publisher: Scalars['Bytes']['output'];
  /**
   * An arbitrary uint32 value used to allow a publisher to create multiple indexes for a specific `token`.
   *
   */
  indexId: Scalars['BigInt']['output'];
  userData: Scalars['Bytes']['output'];
  index: Index;
};

export type IndexCreatedEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order?: InputMaybe<Scalars['BigInt']['input']>;
  order_not?: InputMaybe<Scalars['BigInt']['input']>;
  order_gt?: InputMaybe<Scalars['BigInt']['input']>;
  order_lt?: InputMaybe<Scalars['BigInt']['input']>;
  order_gte?: InputMaybe<Scalars['BigInt']['input']>;
  order_lte?: InputMaybe<Scalars['BigInt']['input']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  token?: InputMaybe<Scalars['Bytes']['input']>;
  token_not?: InputMaybe<Scalars['Bytes']['input']>;
  token_gt?: InputMaybe<Scalars['Bytes']['input']>;
  token_lt?: InputMaybe<Scalars['Bytes']['input']>;
  token_gte?: InputMaybe<Scalars['Bytes']['input']>;
  token_lte?: InputMaybe<Scalars['Bytes']['input']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  publisher?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_not?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_gt?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_lt?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_gte?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_lte?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  publisher_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  publisher_contains?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  indexId?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_not?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  indexId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  userData?: InputMaybe<Scalars['Bytes']['input']>;
  userData_not?: InputMaybe<Scalars['Bytes']['input']>;
  userData_gt?: InputMaybe<Scalars['Bytes']['input']>;
  userData_lt?: InputMaybe<Scalars['Bytes']['input']>;
  userData_gte?: InputMaybe<Scalars['Bytes']['input']>;
  userData_lte?: InputMaybe<Scalars['Bytes']['input']>;
  userData_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  userData_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  userData_contains?: InputMaybe<Scalars['Bytes']['input']>;
  userData_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  index?: InputMaybe<Scalars['String']['input']>;
  index_not?: InputMaybe<Scalars['String']['input']>;
  index_gt?: InputMaybe<Scalars['String']['input']>;
  index_lt?: InputMaybe<Scalars['String']['input']>;
  index_gte?: InputMaybe<Scalars['String']['input']>;
  index_lte?: InputMaybe<Scalars['String']['input']>;
  index_in?: InputMaybe<Array<Scalars['String']['input']>>;
  index_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  index_contains?: InputMaybe<Scalars['String']['input']>;
  index_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  index_not_contains?: InputMaybe<Scalars['String']['input']>;
  index_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  index_starts_with?: InputMaybe<Scalars['String']['input']>;
  index_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  index_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  index_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  index_ends_with?: InputMaybe<Scalars['String']['input']>;
  index_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  index_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  index_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  index_?: InputMaybe<Index_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<IndexCreatedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<IndexCreatedEvent_filter>>>;
};

export type IndexCreatedEvent_orderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'token'
  | 'publisher'
  | 'indexId'
  | 'userData'
  | 'index'
  | 'index__id'
  | 'index__createdAtTimestamp'
  | 'index__createdAtBlockNumber'
  | 'index__updatedAtTimestamp'
  | 'index__updatedAtBlockNumber'
  | 'index__indexId'
  | 'index__indexValue'
  | 'index__totalSubscriptionsWithUnits'
  | 'index__totalUnitsPending'
  | 'index__totalUnitsApproved'
  | 'index__totalUnits'
  | 'index__totalAmountDistributedUntilUpdatedAt';

export type IndexDistributionClaimedEvent = Event & {
  id: Scalars['ID']['output'];
  transactionHash: Scalars['Bytes']['output'];
  gasPrice: Scalars['BigInt']['output'];
  gasUsed?: Maybe<Scalars['BigInt']['output']>;
  timestamp: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   * addresses[1] = `publisher`
   * addresses[2] = `subscriber`
   *
   */
  addresses: Array<Scalars['Bytes']['output']>;
  blockNumber: Scalars['BigInt']['output'];
  logIndex: Scalars['BigInt']['output'];
  order: Scalars['BigInt']['output'];
  token: Scalars['Bytes']['output'];
  /**
   * The creator of the `index`.
   *
   */
  publisher: Scalars['Bytes']['output'];
  /**
   * An arbitrary uint32 value used to allow a publisher to create multiple indexes for a specific `token`.
   *
   */
  indexId: Scalars['BigInt']['output'];
  /**
   * The account that is subscribed to `index`. A possible recipient of distributions from the `publisher`.
   * `subscriber` only receives tokens if they have been allocated units (can be thought of as shares).
   *
   */
  subscriber: Scalars['Bytes']['output'];
  amount: Scalars['BigInt']['output'];
  index: Index;
};

export type IndexDistributionClaimedEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order?: InputMaybe<Scalars['BigInt']['input']>;
  order_not?: InputMaybe<Scalars['BigInt']['input']>;
  order_gt?: InputMaybe<Scalars['BigInt']['input']>;
  order_lt?: InputMaybe<Scalars['BigInt']['input']>;
  order_gte?: InputMaybe<Scalars['BigInt']['input']>;
  order_lte?: InputMaybe<Scalars['BigInt']['input']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  token?: InputMaybe<Scalars['Bytes']['input']>;
  token_not?: InputMaybe<Scalars['Bytes']['input']>;
  token_gt?: InputMaybe<Scalars['Bytes']['input']>;
  token_lt?: InputMaybe<Scalars['Bytes']['input']>;
  token_gte?: InputMaybe<Scalars['Bytes']['input']>;
  token_lte?: InputMaybe<Scalars['Bytes']['input']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  publisher?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_not?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_gt?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_lt?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_gte?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_lte?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  publisher_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  publisher_contains?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  indexId?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_not?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  indexId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  subscriber?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_not?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_gt?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_lt?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_gte?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_lte?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  subscriber_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  subscriber_contains?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  index?: InputMaybe<Scalars['String']['input']>;
  index_not?: InputMaybe<Scalars['String']['input']>;
  index_gt?: InputMaybe<Scalars['String']['input']>;
  index_lt?: InputMaybe<Scalars['String']['input']>;
  index_gte?: InputMaybe<Scalars['String']['input']>;
  index_lte?: InputMaybe<Scalars['String']['input']>;
  index_in?: InputMaybe<Array<Scalars['String']['input']>>;
  index_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  index_contains?: InputMaybe<Scalars['String']['input']>;
  index_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  index_not_contains?: InputMaybe<Scalars['String']['input']>;
  index_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  index_starts_with?: InputMaybe<Scalars['String']['input']>;
  index_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  index_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  index_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  index_ends_with?: InputMaybe<Scalars['String']['input']>;
  index_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  index_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  index_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  index_?: InputMaybe<Index_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<IndexDistributionClaimedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<IndexDistributionClaimedEvent_filter>>>;
};

export type IndexDistributionClaimedEvent_orderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'token'
  | 'publisher'
  | 'indexId'
  | 'subscriber'
  | 'amount'
  | 'index'
  | 'index__id'
  | 'index__createdAtTimestamp'
  | 'index__createdAtBlockNumber'
  | 'index__updatedAtTimestamp'
  | 'index__updatedAtBlockNumber'
  | 'index__indexId'
  | 'index__indexValue'
  | 'index__totalSubscriptionsWithUnits'
  | 'index__totalUnitsPending'
  | 'index__totalUnitsApproved'
  | 'index__totalUnits'
  | 'index__totalAmountDistributedUntilUpdatedAt';

export type IndexSubscribedEvent = Event & {
  id: Scalars['ID']['output'];
  transactionHash: Scalars['Bytes']['output'];
  gasPrice: Scalars['BigInt']['output'];
  gasUsed?: Maybe<Scalars['BigInt']['output']>;
  timestamp: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   * addresses[1] = `publisher`
   * addresses[2] = `subscriber`
   *
   */
  addresses: Array<Scalars['Bytes']['output']>;
  blockNumber: Scalars['BigInt']['output'];
  logIndex: Scalars['BigInt']['output'];
  order: Scalars['BigInt']['output'];
  token: Scalars['Bytes']['output'];
  /**
   * The creator of the `index`.
   *
   */
  publisher: Scalars['Bytes']['output'];
  /**
   * An arbitrary uint32 value used to allow a publisher to create multiple indexes for a specific `token`.
   *
   */
  indexId: Scalars['BigInt']['output'];
  /**
   * The account that is subscribed to `index`. A possible recipient of distributions from the `publisher`.
   * `subscriber` only receives tokens if they have been allocated units (can be thought of as shares).
   *
   */
  subscriber: Scalars['Bytes']['output'];
  userData: Scalars['Bytes']['output'];
  index: Index;
};

export type IndexSubscribedEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order?: InputMaybe<Scalars['BigInt']['input']>;
  order_not?: InputMaybe<Scalars['BigInt']['input']>;
  order_gt?: InputMaybe<Scalars['BigInt']['input']>;
  order_lt?: InputMaybe<Scalars['BigInt']['input']>;
  order_gte?: InputMaybe<Scalars['BigInt']['input']>;
  order_lte?: InputMaybe<Scalars['BigInt']['input']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  token?: InputMaybe<Scalars['Bytes']['input']>;
  token_not?: InputMaybe<Scalars['Bytes']['input']>;
  token_gt?: InputMaybe<Scalars['Bytes']['input']>;
  token_lt?: InputMaybe<Scalars['Bytes']['input']>;
  token_gte?: InputMaybe<Scalars['Bytes']['input']>;
  token_lte?: InputMaybe<Scalars['Bytes']['input']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  publisher?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_not?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_gt?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_lt?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_gte?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_lte?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  publisher_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  publisher_contains?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  indexId?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_not?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  indexId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  subscriber?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_not?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_gt?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_lt?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_gte?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_lte?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  subscriber_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  subscriber_contains?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  userData?: InputMaybe<Scalars['Bytes']['input']>;
  userData_not?: InputMaybe<Scalars['Bytes']['input']>;
  userData_gt?: InputMaybe<Scalars['Bytes']['input']>;
  userData_lt?: InputMaybe<Scalars['Bytes']['input']>;
  userData_gte?: InputMaybe<Scalars['Bytes']['input']>;
  userData_lte?: InputMaybe<Scalars['Bytes']['input']>;
  userData_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  userData_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  userData_contains?: InputMaybe<Scalars['Bytes']['input']>;
  userData_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  index?: InputMaybe<Scalars['String']['input']>;
  index_not?: InputMaybe<Scalars['String']['input']>;
  index_gt?: InputMaybe<Scalars['String']['input']>;
  index_lt?: InputMaybe<Scalars['String']['input']>;
  index_gte?: InputMaybe<Scalars['String']['input']>;
  index_lte?: InputMaybe<Scalars['String']['input']>;
  index_in?: InputMaybe<Array<Scalars['String']['input']>>;
  index_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  index_contains?: InputMaybe<Scalars['String']['input']>;
  index_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  index_not_contains?: InputMaybe<Scalars['String']['input']>;
  index_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  index_starts_with?: InputMaybe<Scalars['String']['input']>;
  index_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  index_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  index_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  index_ends_with?: InputMaybe<Scalars['String']['input']>;
  index_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  index_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  index_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  index_?: InputMaybe<Index_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<IndexSubscribedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<IndexSubscribedEvent_filter>>>;
};

export type IndexSubscribedEvent_orderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'token'
  | 'publisher'
  | 'indexId'
  | 'subscriber'
  | 'userData'
  | 'index'
  | 'index__id'
  | 'index__createdAtTimestamp'
  | 'index__createdAtBlockNumber'
  | 'index__updatedAtTimestamp'
  | 'index__updatedAtBlockNumber'
  | 'index__indexId'
  | 'index__indexValue'
  | 'index__totalSubscriptionsWithUnits'
  | 'index__totalUnitsPending'
  | 'index__totalUnitsApproved'
  | 'index__totalUnits'
  | 'index__totalAmountDistributedUntilUpdatedAt';

/**
 * IndexSubscription: A higher order entity that contains subscription data for a `subscriber` account of a particular `Index`.
 *
 */
export type IndexSubscription = {
  /**
   * ID composed of: subscriberAddress-publisherAddress-tokenAddress-IndexId
   *
   */
  id: Scalars['ID']['output'];
  createdAtTimestamp: Scalars['BigInt']['output'];
  createdAtBlockNumber: Scalars['BigInt']['output'];
  updatedAtTimestamp: Scalars['BigInt']['output'];
  updatedAtBlockNumber: Scalars['BigInt']['output'];
  subscriber: Account;
  /**
   * A boolean indicating whether the `IndexSubscription` is approved.
   * Approved subscriptions don't require `subscriber` to claim tokens that are distributed from the publisher.
   *
   */
  approved: Scalars['Boolean']['output'];
  /**
   * If `units` is `0`, it indicates that the subscription is "deleted" and `subscriber` is no longer subscribed to `index`.
   *
   */
  units: Scalars['BigInt']['output'];
  /**
   * The total amount of tokens you've received via IDA until
   * `updatedAtTimestamp`/`updatedAtBlock`.
   *
   */
  totalAmountReceivedUntilUpdatedAt: Scalars['BigInt']['output'];
  /**
   * The previous index value - used to calculate `totalAmountReceivedUntilUpdatedAt` field as of the `index.updatedAtTimestamp`.
   * The formula to get this value is:
   * `IndexSubscription.totalAmountReceivedUntilUpdatedAt + ((index.newIndexValue - indexSubscription.indexValueUntilUpdatedAt) * indexSubscription.units)`.
   *
   */
  indexValueUntilUpdatedAt: Scalars['BigInt']['output'];
  index: Index;
  /**
   * IndexSubscription approved events on the subscription.
   *
   */
  subscriptionApprovedEvents: Array<SubscriptionApprovedEvent>;
  subscriptionDistributionClaimedEvents: Array<SubscriptionDistributionClaimedEvent>;
  subscriptionRevokedEvents: Array<SubscriptionRevokedEvent>;
  subscriptionUnitsUpdatedEvents: Array<SubscriptionUnitsUpdatedEvent>;
};


/**
 * IndexSubscription: A higher order entity that contains subscription data for a `subscriber` account of a particular `Index`.
 *
 */
export type IndexSubscriptionsubscriptionApprovedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<SubscriptionApprovedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SubscriptionApprovedEvent_filter>;
};


/**
 * IndexSubscription: A higher order entity that contains subscription data for a `subscriber` account of a particular `Index`.
 *
 */
export type IndexSubscriptionsubscriptionDistributionClaimedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<SubscriptionDistributionClaimedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SubscriptionDistributionClaimedEvent_filter>;
};


/**
 * IndexSubscription: A higher order entity that contains subscription data for a `subscriber` account of a particular `Index`.
 *
 */
export type IndexSubscriptionsubscriptionRevokedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<SubscriptionRevokedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SubscriptionRevokedEvent_filter>;
};


/**
 * IndexSubscription: A higher order entity that contains subscription data for a `subscriber` account of a particular `Index`.
 *
 */
export type IndexSubscriptionsubscriptionUnitsUpdatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<SubscriptionUnitsUpdatedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SubscriptionUnitsUpdatedEvent_filter>;
};

export type IndexSubscription_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  createdAtTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAtBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAtTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAtBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  subscriber?: InputMaybe<Scalars['String']['input']>;
  subscriber_not?: InputMaybe<Scalars['String']['input']>;
  subscriber_gt?: InputMaybe<Scalars['String']['input']>;
  subscriber_lt?: InputMaybe<Scalars['String']['input']>;
  subscriber_gte?: InputMaybe<Scalars['String']['input']>;
  subscriber_lte?: InputMaybe<Scalars['String']['input']>;
  subscriber_in?: InputMaybe<Array<Scalars['String']['input']>>;
  subscriber_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  subscriber_contains?: InputMaybe<Scalars['String']['input']>;
  subscriber_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  subscriber_not_contains?: InputMaybe<Scalars['String']['input']>;
  subscriber_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  subscriber_starts_with?: InputMaybe<Scalars['String']['input']>;
  subscriber_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  subscriber_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  subscriber_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  subscriber_ends_with?: InputMaybe<Scalars['String']['input']>;
  subscriber_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  subscriber_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  subscriber_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  subscriber_?: InputMaybe<Account_filter>;
  approved?: InputMaybe<Scalars['Boolean']['input']>;
  approved_not?: InputMaybe<Scalars['Boolean']['input']>;
  approved_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  approved_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  units?: InputMaybe<Scalars['BigInt']['input']>;
  units_not?: InputMaybe<Scalars['BigInt']['input']>;
  units_gt?: InputMaybe<Scalars['BigInt']['input']>;
  units_lt?: InputMaybe<Scalars['BigInt']['input']>;
  units_gte?: InputMaybe<Scalars['BigInt']['input']>;
  units_lte?: InputMaybe<Scalars['BigInt']['input']>;
  units_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  units_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalAmountReceivedUntilUpdatedAt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountReceivedUntilUpdatedAt_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountReceivedUntilUpdatedAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountReceivedUntilUpdatedAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountReceivedUntilUpdatedAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountReceivedUntilUpdatedAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountReceivedUntilUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalAmountReceivedUntilUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  indexValueUntilUpdatedAt?: InputMaybe<Scalars['BigInt']['input']>;
  indexValueUntilUpdatedAt_not?: InputMaybe<Scalars['BigInt']['input']>;
  indexValueUntilUpdatedAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  indexValueUntilUpdatedAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  indexValueUntilUpdatedAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  indexValueUntilUpdatedAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  indexValueUntilUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  indexValueUntilUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  index?: InputMaybe<Scalars['String']['input']>;
  index_not?: InputMaybe<Scalars['String']['input']>;
  index_gt?: InputMaybe<Scalars['String']['input']>;
  index_lt?: InputMaybe<Scalars['String']['input']>;
  index_gte?: InputMaybe<Scalars['String']['input']>;
  index_lte?: InputMaybe<Scalars['String']['input']>;
  index_in?: InputMaybe<Array<Scalars['String']['input']>>;
  index_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  index_contains?: InputMaybe<Scalars['String']['input']>;
  index_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  index_not_contains?: InputMaybe<Scalars['String']['input']>;
  index_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  index_starts_with?: InputMaybe<Scalars['String']['input']>;
  index_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  index_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  index_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  index_ends_with?: InputMaybe<Scalars['String']['input']>;
  index_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  index_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  index_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  index_?: InputMaybe<Index_filter>;
  subscriptionApprovedEvents_?: InputMaybe<SubscriptionApprovedEvent_filter>;
  subscriptionDistributionClaimedEvents_?: InputMaybe<SubscriptionDistributionClaimedEvent_filter>;
  subscriptionRevokedEvents_?: InputMaybe<SubscriptionRevokedEvent_filter>;
  subscriptionUnitsUpdatedEvents_?: InputMaybe<SubscriptionUnitsUpdatedEvent_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<IndexSubscription_filter>>>;
  or?: InputMaybe<Array<InputMaybe<IndexSubscription_filter>>>;
};

export type IndexSubscription_orderBy =
  | 'id'
  | 'createdAtTimestamp'
  | 'createdAtBlockNumber'
  | 'updatedAtTimestamp'
  | 'updatedAtBlockNumber'
  | 'subscriber'
  | 'subscriber__id'
  | 'subscriber__createdAtTimestamp'
  | 'subscriber__createdAtBlockNumber'
  | 'subscriber__updatedAtTimestamp'
  | 'subscriber__updatedAtBlockNumber'
  | 'subscriber__isSuperApp'
  | 'approved'
  | 'units'
  | 'totalAmountReceivedUntilUpdatedAt'
  | 'indexValueUntilUpdatedAt'
  | 'index'
  | 'index__id'
  | 'index__createdAtTimestamp'
  | 'index__createdAtBlockNumber'
  | 'index__updatedAtTimestamp'
  | 'index__updatedAtBlockNumber'
  | 'index__indexId'
  | 'index__indexValue'
  | 'index__totalSubscriptionsWithUnits'
  | 'index__totalUnitsPending'
  | 'index__totalUnitsApproved'
  | 'index__totalUnits'
  | 'index__totalAmountDistributedUntilUpdatedAt'
  | 'subscriptionApprovedEvents'
  | 'subscriptionDistributionClaimedEvents'
  | 'subscriptionRevokedEvents'
  | 'subscriptionUnitsUpdatedEvents';

export type IndexUnitsUpdatedEvent = Event & {
  id: Scalars['ID']['output'];
  transactionHash: Scalars['Bytes']['output'];
  gasPrice: Scalars['BigInt']['output'];
  gasUsed?: Maybe<Scalars['BigInt']['output']>;
  timestamp: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   * addresses[1] = `publisher`
   * addresses[2] = `subscriber`
   *
   */
  addresses: Array<Scalars['Bytes']['output']>;
  blockNumber: Scalars['BigInt']['output'];
  logIndex: Scalars['BigInt']['output'];
  order: Scalars['BigInt']['output'];
  token: Scalars['Bytes']['output'];
  /**
   * The creator of the `index`.
   *
   */
  publisher: Scalars['Bytes']['output'];
  /**
   * An arbitrary uint32 value used to allow a publisher to create multiple indexes for a specific `token`.
   *
   */
  indexId: Scalars['BigInt']['output'];
  /**
   * The account that is subscribed to `index`. A possible recipient of distributions from the `publisher`.
   * `subscriber` only receives tokens if they have been allocated units (can be thought of as shares).
   *
   */
  subscriber: Scalars['Bytes']['output'];
  units: Scalars['BigInt']['output'];
  userData: Scalars['Bytes']['output'];
  oldUnits: Scalars['BigInt']['output'];
  index: Index;
};

export type IndexUnitsUpdatedEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order?: InputMaybe<Scalars['BigInt']['input']>;
  order_not?: InputMaybe<Scalars['BigInt']['input']>;
  order_gt?: InputMaybe<Scalars['BigInt']['input']>;
  order_lt?: InputMaybe<Scalars['BigInt']['input']>;
  order_gte?: InputMaybe<Scalars['BigInt']['input']>;
  order_lte?: InputMaybe<Scalars['BigInt']['input']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  token?: InputMaybe<Scalars['Bytes']['input']>;
  token_not?: InputMaybe<Scalars['Bytes']['input']>;
  token_gt?: InputMaybe<Scalars['Bytes']['input']>;
  token_lt?: InputMaybe<Scalars['Bytes']['input']>;
  token_gte?: InputMaybe<Scalars['Bytes']['input']>;
  token_lte?: InputMaybe<Scalars['Bytes']['input']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  publisher?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_not?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_gt?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_lt?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_gte?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_lte?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  publisher_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  publisher_contains?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  indexId?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_not?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  indexId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  subscriber?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_not?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_gt?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_lt?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_gte?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_lte?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  subscriber_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  subscriber_contains?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  units?: InputMaybe<Scalars['BigInt']['input']>;
  units_not?: InputMaybe<Scalars['BigInt']['input']>;
  units_gt?: InputMaybe<Scalars['BigInt']['input']>;
  units_lt?: InputMaybe<Scalars['BigInt']['input']>;
  units_gte?: InputMaybe<Scalars['BigInt']['input']>;
  units_lte?: InputMaybe<Scalars['BigInt']['input']>;
  units_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  units_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  userData?: InputMaybe<Scalars['Bytes']['input']>;
  userData_not?: InputMaybe<Scalars['Bytes']['input']>;
  userData_gt?: InputMaybe<Scalars['Bytes']['input']>;
  userData_lt?: InputMaybe<Scalars['Bytes']['input']>;
  userData_gte?: InputMaybe<Scalars['Bytes']['input']>;
  userData_lte?: InputMaybe<Scalars['Bytes']['input']>;
  userData_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  userData_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  userData_contains?: InputMaybe<Scalars['Bytes']['input']>;
  userData_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  oldUnits?: InputMaybe<Scalars['BigInt']['input']>;
  oldUnits_not?: InputMaybe<Scalars['BigInt']['input']>;
  oldUnits_gt?: InputMaybe<Scalars['BigInt']['input']>;
  oldUnits_lt?: InputMaybe<Scalars['BigInt']['input']>;
  oldUnits_gte?: InputMaybe<Scalars['BigInt']['input']>;
  oldUnits_lte?: InputMaybe<Scalars['BigInt']['input']>;
  oldUnits_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  oldUnits_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  index?: InputMaybe<Scalars['String']['input']>;
  index_not?: InputMaybe<Scalars['String']['input']>;
  index_gt?: InputMaybe<Scalars['String']['input']>;
  index_lt?: InputMaybe<Scalars['String']['input']>;
  index_gte?: InputMaybe<Scalars['String']['input']>;
  index_lte?: InputMaybe<Scalars['String']['input']>;
  index_in?: InputMaybe<Array<Scalars['String']['input']>>;
  index_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  index_contains?: InputMaybe<Scalars['String']['input']>;
  index_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  index_not_contains?: InputMaybe<Scalars['String']['input']>;
  index_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  index_starts_with?: InputMaybe<Scalars['String']['input']>;
  index_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  index_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  index_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  index_ends_with?: InputMaybe<Scalars['String']['input']>;
  index_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  index_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  index_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  index_?: InputMaybe<Index_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<IndexUnitsUpdatedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<IndexUnitsUpdatedEvent_filter>>>;
};

export type IndexUnitsUpdatedEvent_orderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'token'
  | 'publisher'
  | 'indexId'
  | 'subscriber'
  | 'units'
  | 'userData'
  | 'oldUnits'
  | 'index'
  | 'index__id'
  | 'index__createdAtTimestamp'
  | 'index__createdAtBlockNumber'
  | 'index__updatedAtTimestamp'
  | 'index__updatedAtBlockNumber'
  | 'index__indexId'
  | 'index__indexValue'
  | 'index__totalSubscriptionsWithUnits'
  | 'index__totalUnitsPending'
  | 'index__totalUnitsApproved'
  | 'index__totalUnits'
  | 'index__totalAmountDistributedUntilUpdatedAt';

export type IndexUnsubscribedEvent = Event & {
  id: Scalars['ID']['output'];
  transactionHash: Scalars['Bytes']['output'];
  gasPrice: Scalars['BigInt']['output'];
  gasUsed?: Maybe<Scalars['BigInt']['output']>;
  timestamp: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   * addresses[1] = `publisher`
   * addresses[2] = `subscriber`
   *
   */
  addresses: Array<Scalars['Bytes']['output']>;
  blockNumber: Scalars['BigInt']['output'];
  logIndex: Scalars['BigInt']['output'];
  order: Scalars['BigInt']['output'];
  token: Scalars['Bytes']['output'];
  /**
   * The creator of the `index`.
   *
   */
  publisher: Scalars['Bytes']['output'];
  /**
   * An arbitrary uint32 value used to allow a publisher to create multiple indexes for a specific `token`.
   *
   */
  indexId: Scalars['BigInt']['output'];
  /**
   * The account that is subscribed to `index`. A possible recipient of distributions from the `publisher`.
   * `subscriber` only receives tokens if they have been allocated units (can be thought of as shares).
   *
   */
  subscriber: Scalars['Bytes']['output'];
  userData: Scalars['Bytes']['output'];
  index: Index;
};

export type IndexUnsubscribedEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order?: InputMaybe<Scalars['BigInt']['input']>;
  order_not?: InputMaybe<Scalars['BigInt']['input']>;
  order_gt?: InputMaybe<Scalars['BigInt']['input']>;
  order_lt?: InputMaybe<Scalars['BigInt']['input']>;
  order_gte?: InputMaybe<Scalars['BigInt']['input']>;
  order_lte?: InputMaybe<Scalars['BigInt']['input']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  token?: InputMaybe<Scalars['Bytes']['input']>;
  token_not?: InputMaybe<Scalars['Bytes']['input']>;
  token_gt?: InputMaybe<Scalars['Bytes']['input']>;
  token_lt?: InputMaybe<Scalars['Bytes']['input']>;
  token_gte?: InputMaybe<Scalars['Bytes']['input']>;
  token_lte?: InputMaybe<Scalars['Bytes']['input']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  publisher?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_not?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_gt?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_lt?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_gte?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_lte?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  publisher_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  publisher_contains?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  indexId?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_not?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  indexId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  subscriber?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_not?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_gt?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_lt?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_gte?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_lte?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  subscriber_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  subscriber_contains?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  userData?: InputMaybe<Scalars['Bytes']['input']>;
  userData_not?: InputMaybe<Scalars['Bytes']['input']>;
  userData_gt?: InputMaybe<Scalars['Bytes']['input']>;
  userData_lt?: InputMaybe<Scalars['Bytes']['input']>;
  userData_gte?: InputMaybe<Scalars['Bytes']['input']>;
  userData_lte?: InputMaybe<Scalars['Bytes']['input']>;
  userData_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  userData_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  userData_contains?: InputMaybe<Scalars['Bytes']['input']>;
  userData_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  index?: InputMaybe<Scalars['String']['input']>;
  index_not?: InputMaybe<Scalars['String']['input']>;
  index_gt?: InputMaybe<Scalars['String']['input']>;
  index_lt?: InputMaybe<Scalars['String']['input']>;
  index_gte?: InputMaybe<Scalars['String']['input']>;
  index_lte?: InputMaybe<Scalars['String']['input']>;
  index_in?: InputMaybe<Array<Scalars['String']['input']>>;
  index_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  index_contains?: InputMaybe<Scalars['String']['input']>;
  index_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  index_not_contains?: InputMaybe<Scalars['String']['input']>;
  index_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  index_starts_with?: InputMaybe<Scalars['String']['input']>;
  index_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  index_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  index_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  index_ends_with?: InputMaybe<Scalars['String']['input']>;
  index_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  index_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  index_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  index_?: InputMaybe<Index_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<IndexUnsubscribedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<IndexUnsubscribedEvent_filter>>>;
};

export type IndexUnsubscribedEvent_orderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'token'
  | 'publisher'
  | 'indexId'
  | 'subscriber'
  | 'userData'
  | 'index'
  | 'index__id'
  | 'index__createdAtTimestamp'
  | 'index__createdAtBlockNumber'
  | 'index__updatedAtTimestamp'
  | 'index__updatedAtBlockNumber'
  | 'index__indexId'
  | 'index__indexValue'
  | 'index__totalSubscriptionsWithUnits'
  | 'index__totalUnitsPending'
  | 'index__totalUnitsApproved'
  | 'index__totalUnits'
  | 'index__totalAmountDistributedUntilUpdatedAt';

export type IndexUpdatedEvent = Event & {
  id: Scalars['ID']['output'];
  transactionHash: Scalars['Bytes']['output'];
  gasPrice: Scalars['BigInt']['output'];
  gasUsed?: Maybe<Scalars['BigInt']['output']>;
  timestamp: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   * addresses[1] = `publisher`
   *
   */
  addresses: Array<Scalars['Bytes']['output']>;
  blockNumber: Scalars['BigInt']['output'];
  logIndex: Scalars['BigInt']['output'];
  order: Scalars['BigInt']['output'];
  token: Scalars['Bytes']['output'];
  /**
   * The creator of the `index`.
   *
   */
  publisher: Scalars['Bytes']['output'];
  /**
   * An arbitrary uint32 value used to allow a publisher to create multiple indexes for a specific `token`.
   *
   */
  indexId: Scalars['BigInt']['output'];
  oldIndexValue: Scalars['BigInt']['output'];
  newIndexValue: Scalars['BigInt']['output'];
  totalUnitsPending: Scalars['BigInt']['output'];
  totalUnitsApproved: Scalars['BigInt']['output'];
  userData: Scalars['Bytes']['output'];
  index: Index;
};

export type IndexUpdatedEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order?: InputMaybe<Scalars['BigInt']['input']>;
  order_not?: InputMaybe<Scalars['BigInt']['input']>;
  order_gt?: InputMaybe<Scalars['BigInt']['input']>;
  order_lt?: InputMaybe<Scalars['BigInt']['input']>;
  order_gte?: InputMaybe<Scalars['BigInt']['input']>;
  order_lte?: InputMaybe<Scalars['BigInt']['input']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  token?: InputMaybe<Scalars['Bytes']['input']>;
  token_not?: InputMaybe<Scalars['Bytes']['input']>;
  token_gt?: InputMaybe<Scalars['Bytes']['input']>;
  token_lt?: InputMaybe<Scalars['Bytes']['input']>;
  token_gte?: InputMaybe<Scalars['Bytes']['input']>;
  token_lte?: InputMaybe<Scalars['Bytes']['input']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  publisher?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_not?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_gt?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_lt?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_gte?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_lte?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  publisher_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  publisher_contains?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  indexId?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_not?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  indexId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  oldIndexValue?: InputMaybe<Scalars['BigInt']['input']>;
  oldIndexValue_not?: InputMaybe<Scalars['BigInt']['input']>;
  oldIndexValue_gt?: InputMaybe<Scalars['BigInt']['input']>;
  oldIndexValue_lt?: InputMaybe<Scalars['BigInt']['input']>;
  oldIndexValue_gte?: InputMaybe<Scalars['BigInt']['input']>;
  oldIndexValue_lte?: InputMaybe<Scalars['BigInt']['input']>;
  oldIndexValue_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  oldIndexValue_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newIndexValue?: InputMaybe<Scalars['BigInt']['input']>;
  newIndexValue_not?: InputMaybe<Scalars['BigInt']['input']>;
  newIndexValue_gt?: InputMaybe<Scalars['BigInt']['input']>;
  newIndexValue_lt?: InputMaybe<Scalars['BigInt']['input']>;
  newIndexValue_gte?: InputMaybe<Scalars['BigInt']['input']>;
  newIndexValue_lte?: InputMaybe<Scalars['BigInt']['input']>;
  newIndexValue_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newIndexValue_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalUnitsPending?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnitsPending_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnitsPending_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnitsPending_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnitsPending_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnitsPending_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnitsPending_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalUnitsPending_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalUnitsApproved?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnitsApproved_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnitsApproved_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnitsApproved_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnitsApproved_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnitsApproved_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnitsApproved_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalUnitsApproved_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  userData?: InputMaybe<Scalars['Bytes']['input']>;
  userData_not?: InputMaybe<Scalars['Bytes']['input']>;
  userData_gt?: InputMaybe<Scalars['Bytes']['input']>;
  userData_lt?: InputMaybe<Scalars['Bytes']['input']>;
  userData_gte?: InputMaybe<Scalars['Bytes']['input']>;
  userData_lte?: InputMaybe<Scalars['Bytes']['input']>;
  userData_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  userData_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  userData_contains?: InputMaybe<Scalars['Bytes']['input']>;
  userData_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  index?: InputMaybe<Scalars['String']['input']>;
  index_not?: InputMaybe<Scalars['String']['input']>;
  index_gt?: InputMaybe<Scalars['String']['input']>;
  index_lt?: InputMaybe<Scalars['String']['input']>;
  index_gte?: InputMaybe<Scalars['String']['input']>;
  index_lte?: InputMaybe<Scalars['String']['input']>;
  index_in?: InputMaybe<Array<Scalars['String']['input']>>;
  index_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  index_contains?: InputMaybe<Scalars['String']['input']>;
  index_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  index_not_contains?: InputMaybe<Scalars['String']['input']>;
  index_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  index_starts_with?: InputMaybe<Scalars['String']['input']>;
  index_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  index_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  index_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  index_ends_with?: InputMaybe<Scalars['String']['input']>;
  index_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  index_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  index_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  index_?: InputMaybe<Index_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<IndexUpdatedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<IndexUpdatedEvent_filter>>>;
};

export type IndexUpdatedEvent_orderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'token'
  | 'publisher'
  | 'indexId'
  | 'oldIndexValue'
  | 'newIndexValue'
  | 'totalUnitsPending'
  | 'totalUnitsApproved'
  | 'userData'
  | 'index'
  | 'index__id'
  | 'index__createdAtTimestamp'
  | 'index__createdAtBlockNumber'
  | 'index__updatedAtTimestamp'
  | 'index__updatedAtBlockNumber'
  | 'index__indexId'
  | 'index__indexValue'
  | 'index__totalSubscriptionsWithUnits'
  | 'index__totalUnitsPending'
  | 'index__totalUnitsApproved'
  | 'index__totalUnits'
  | 'index__totalAmountDistributedUntilUpdatedAt';

export type Index_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  createdAtTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAtBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAtTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAtBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  indexId?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_not?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  indexId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  indexValue?: InputMaybe<Scalars['BigInt']['input']>;
  indexValue_not?: InputMaybe<Scalars['BigInt']['input']>;
  indexValue_gt?: InputMaybe<Scalars['BigInt']['input']>;
  indexValue_lt?: InputMaybe<Scalars['BigInt']['input']>;
  indexValue_gte?: InputMaybe<Scalars['BigInt']['input']>;
  indexValue_lte?: InputMaybe<Scalars['BigInt']['input']>;
  indexValue_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  indexValue_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalSubscriptionsWithUnits?: InputMaybe<Scalars['Int']['input']>;
  totalSubscriptionsWithUnits_not?: InputMaybe<Scalars['Int']['input']>;
  totalSubscriptionsWithUnits_gt?: InputMaybe<Scalars['Int']['input']>;
  totalSubscriptionsWithUnits_lt?: InputMaybe<Scalars['Int']['input']>;
  totalSubscriptionsWithUnits_gte?: InputMaybe<Scalars['Int']['input']>;
  totalSubscriptionsWithUnits_lte?: InputMaybe<Scalars['Int']['input']>;
  totalSubscriptionsWithUnits_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalSubscriptionsWithUnits_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalUnitsPending?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnitsPending_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnitsPending_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnitsPending_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnitsPending_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnitsPending_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnitsPending_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalUnitsPending_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalUnitsApproved?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnitsApproved_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnitsApproved_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnitsApproved_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnitsApproved_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnitsApproved_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnitsApproved_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalUnitsApproved_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalUnits?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnits_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnits_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnits_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnits_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnits_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnits_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalUnits_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalAmountDistributedUntilUpdatedAt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountDistributedUntilUpdatedAt_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountDistributedUntilUpdatedAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountDistributedUntilUpdatedAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountDistributedUntilUpdatedAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountDistributedUntilUpdatedAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountDistributedUntilUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalAmountDistributedUntilUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  token?: InputMaybe<Scalars['String']['input']>;
  token_not?: InputMaybe<Scalars['String']['input']>;
  token_gt?: InputMaybe<Scalars['String']['input']>;
  token_lt?: InputMaybe<Scalars['String']['input']>;
  token_gte?: InputMaybe<Scalars['String']['input']>;
  token_lte?: InputMaybe<Scalars['String']['input']>;
  token_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_contains?: InputMaybe<Scalars['String']['input']>;
  token_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_contains?: InputMaybe<Scalars['String']['input']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_?: InputMaybe<Token_filter>;
  publisher?: InputMaybe<Scalars['String']['input']>;
  publisher_not?: InputMaybe<Scalars['String']['input']>;
  publisher_gt?: InputMaybe<Scalars['String']['input']>;
  publisher_lt?: InputMaybe<Scalars['String']['input']>;
  publisher_gte?: InputMaybe<Scalars['String']['input']>;
  publisher_lte?: InputMaybe<Scalars['String']['input']>;
  publisher_in?: InputMaybe<Array<Scalars['String']['input']>>;
  publisher_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  publisher_contains?: InputMaybe<Scalars['String']['input']>;
  publisher_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  publisher_not_contains?: InputMaybe<Scalars['String']['input']>;
  publisher_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  publisher_starts_with?: InputMaybe<Scalars['String']['input']>;
  publisher_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  publisher_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  publisher_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  publisher_ends_with?: InputMaybe<Scalars['String']['input']>;
  publisher_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  publisher_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  publisher_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  publisher_?: InputMaybe<Account_filter>;
  subscriptions_?: InputMaybe<IndexSubscription_filter>;
  indexCreatedEvent?: InputMaybe<Scalars['String']['input']>;
  indexCreatedEvent_not?: InputMaybe<Scalars['String']['input']>;
  indexCreatedEvent_gt?: InputMaybe<Scalars['String']['input']>;
  indexCreatedEvent_lt?: InputMaybe<Scalars['String']['input']>;
  indexCreatedEvent_gte?: InputMaybe<Scalars['String']['input']>;
  indexCreatedEvent_lte?: InputMaybe<Scalars['String']['input']>;
  indexCreatedEvent_in?: InputMaybe<Array<Scalars['String']['input']>>;
  indexCreatedEvent_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  indexCreatedEvent_contains?: InputMaybe<Scalars['String']['input']>;
  indexCreatedEvent_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  indexCreatedEvent_not_contains?: InputMaybe<Scalars['String']['input']>;
  indexCreatedEvent_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  indexCreatedEvent_starts_with?: InputMaybe<Scalars['String']['input']>;
  indexCreatedEvent_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  indexCreatedEvent_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  indexCreatedEvent_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  indexCreatedEvent_ends_with?: InputMaybe<Scalars['String']['input']>;
  indexCreatedEvent_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  indexCreatedEvent_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  indexCreatedEvent_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  indexCreatedEvent_?: InputMaybe<IndexCreatedEvent_filter>;
  indexDistributionClaimedEvents_?: InputMaybe<IndexDistributionClaimedEvent_filter>;
  indexUpdatedEvents_?: InputMaybe<IndexUpdatedEvent_filter>;
  indexSubscribedEvents_?: InputMaybe<IndexSubscribedEvent_filter>;
  indexUnitsUpdatedEvents_?: InputMaybe<IndexUnitsUpdatedEvent_filter>;
  indexUnsubscribedEvents_?: InputMaybe<IndexUnsubscribedEvent_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Index_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Index_filter>>>;
};

export type Index_orderBy =
  | 'id'
  | 'createdAtTimestamp'
  | 'createdAtBlockNumber'
  | 'updatedAtTimestamp'
  | 'updatedAtBlockNumber'
  | 'indexId'
  | 'indexValue'
  | 'totalSubscriptionsWithUnits'
  | 'totalUnitsPending'
  | 'totalUnitsApproved'
  | 'totalUnits'
  | 'totalAmountDistributedUntilUpdatedAt'
  | 'token'
  | 'token__id'
  | 'token__createdAtTimestamp'
  | 'token__createdAtBlockNumber'
  | 'token__decimals'
  | 'token__name'
  | 'token__symbol'
  | 'token__isSuperToken'
  | 'token__isNativeAssetSuperToken'
  | 'token__isListed'
  | 'token__underlyingAddress'
  | 'publisher'
  | 'publisher__id'
  | 'publisher__createdAtTimestamp'
  | 'publisher__createdAtBlockNumber'
  | 'publisher__updatedAtTimestamp'
  | 'publisher__updatedAtBlockNumber'
  | 'publisher__isSuperApp'
  | 'subscriptions'
  | 'indexCreatedEvent'
  | 'indexCreatedEvent__id'
  | 'indexCreatedEvent__transactionHash'
  | 'indexCreatedEvent__gasPrice'
  | 'indexCreatedEvent__gasUsed'
  | 'indexCreatedEvent__timestamp'
  | 'indexCreatedEvent__name'
  | 'indexCreatedEvent__blockNumber'
  | 'indexCreatedEvent__logIndex'
  | 'indexCreatedEvent__order'
  | 'indexCreatedEvent__token'
  | 'indexCreatedEvent__publisher'
  | 'indexCreatedEvent__indexId'
  | 'indexCreatedEvent__userData'
  | 'indexDistributionClaimedEvents'
  | 'indexUpdatedEvents'
  | 'indexSubscribedEvents'
  | 'indexUnitsUpdatedEvents'
  | 'indexUnsubscribedEvents';

export type InstantDistributionUpdatedEvent = Event & {
  id: Scalars['ID']['output'];
  transactionHash: Scalars['Bytes']['output'];
  gasPrice: Scalars['BigInt']['output'];
  gasUsed?: Maybe<Scalars['BigInt']['output']>;
  timestamp: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   * addresses[1] = `pool`
   * addresses[2] = `poolDistributor`
   * addresses[3] = `operator`
   *
   */
  addresses: Array<Scalars['Bytes']['output']>;
  blockNumber: Scalars['BigInt']['output'];
  logIndex: Scalars['BigInt']['output'];
  order: Scalars['BigInt']['output'];
  token: Scalars['Bytes']['output'];
  operator: Scalars['Bytes']['output'];
  requestedAmount: Scalars['BigInt']['output'];
  actualAmount: Scalars['BigInt']['output'];
  totalUnits: Scalars['BigInt']['output'];
  userData: Scalars['Bytes']['output'];
  pool: Pool;
  poolDistributor: PoolDistributor;
};

export type InstantDistributionUpdatedEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order?: InputMaybe<Scalars['BigInt']['input']>;
  order_not?: InputMaybe<Scalars['BigInt']['input']>;
  order_gt?: InputMaybe<Scalars['BigInt']['input']>;
  order_lt?: InputMaybe<Scalars['BigInt']['input']>;
  order_gte?: InputMaybe<Scalars['BigInt']['input']>;
  order_lte?: InputMaybe<Scalars['BigInt']['input']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  token?: InputMaybe<Scalars['Bytes']['input']>;
  token_not?: InputMaybe<Scalars['Bytes']['input']>;
  token_gt?: InputMaybe<Scalars['Bytes']['input']>;
  token_lt?: InputMaybe<Scalars['Bytes']['input']>;
  token_gte?: InputMaybe<Scalars['Bytes']['input']>;
  token_lte?: InputMaybe<Scalars['Bytes']['input']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  operator?: InputMaybe<Scalars['Bytes']['input']>;
  operator_not?: InputMaybe<Scalars['Bytes']['input']>;
  operator_gt?: InputMaybe<Scalars['Bytes']['input']>;
  operator_lt?: InputMaybe<Scalars['Bytes']['input']>;
  operator_gte?: InputMaybe<Scalars['Bytes']['input']>;
  operator_lte?: InputMaybe<Scalars['Bytes']['input']>;
  operator_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  operator_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  operator_contains?: InputMaybe<Scalars['Bytes']['input']>;
  operator_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  requestedAmount?: InputMaybe<Scalars['BigInt']['input']>;
  requestedAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  requestedAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  requestedAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  requestedAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  requestedAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  requestedAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  requestedAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  actualAmount?: InputMaybe<Scalars['BigInt']['input']>;
  actualAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  actualAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  actualAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  actualAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  actualAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  actualAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  actualAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalUnits?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnits_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnits_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnits_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnits_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnits_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnits_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalUnits_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  userData?: InputMaybe<Scalars['Bytes']['input']>;
  userData_not?: InputMaybe<Scalars['Bytes']['input']>;
  userData_gt?: InputMaybe<Scalars['Bytes']['input']>;
  userData_lt?: InputMaybe<Scalars['Bytes']['input']>;
  userData_gte?: InputMaybe<Scalars['Bytes']['input']>;
  userData_lte?: InputMaybe<Scalars['Bytes']['input']>;
  userData_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  userData_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  userData_contains?: InputMaybe<Scalars['Bytes']['input']>;
  userData_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  pool?: InputMaybe<Scalars['String']['input']>;
  pool_not?: InputMaybe<Scalars['String']['input']>;
  pool_gt?: InputMaybe<Scalars['String']['input']>;
  pool_lt?: InputMaybe<Scalars['String']['input']>;
  pool_gte?: InputMaybe<Scalars['String']['input']>;
  pool_lte?: InputMaybe<Scalars['String']['input']>;
  pool_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_contains?: InputMaybe<Scalars['String']['input']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_?: InputMaybe<Pool_filter>;
  poolDistributor?: InputMaybe<Scalars['String']['input']>;
  poolDistributor_not?: InputMaybe<Scalars['String']['input']>;
  poolDistributor_gt?: InputMaybe<Scalars['String']['input']>;
  poolDistributor_lt?: InputMaybe<Scalars['String']['input']>;
  poolDistributor_gte?: InputMaybe<Scalars['String']['input']>;
  poolDistributor_lte?: InputMaybe<Scalars['String']['input']>;
  poolDistributor_in?: InputMaybe<Array<Scalars['String']['input']>>;
  poolDistributor_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  poolDistributor_contains?: InputMaybe<Scalars['String']['input']>;
  poolDistributor_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  poolDistributor_not_contains?: InputMaybe<Scalars['String']['input']>;
  poolDistributor_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  poolDistributor_starts_with?: InputMaybe<Scalars['String']['input']>;
  poolDistributor_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolDistributor_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  poolDistributor_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolDistributor_ends_with?: InputMaybe<Scalars['String']['input']>;
  poolDistributor_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolDistributor_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  poolDistributor_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolDistributor_?: InputMaybe<PoolDistributor_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<InstantDistributionUpdatedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<InstantDistributionUpdatedEvent_filter>>>;
};

export type InstantDistributionUpdatedEvent_orderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'token'
  | 'operator'
  | 'requestedAmount'
  | 'actualAmount'
  | 'totalUnits'
  | 'userData'
  | 'pool'
  | 'pool__id'
  | 'pool__createdAtTimestamp'
  | 'pool__createdAtBlockNumber'
  | 'pool__updatedAtTimestamp'
  | 'pool__updatedAtBlockNumber'
  | 'pool__totalUnits'
  | 'pool__totalConnectedUnits'
  | 'pool__totalDisconnectedUnits'
  | 'pool__totalAmountInstantlyDistributedUntilUpdatedAt'
  | 'pool__totalAmountFlowedDistributedUntilUpdatedAt'
  | 'pool__totalAmountDistributedUntilUpdatedAt'
  | 'pool__totalFlowAdjustmentAmountDistributedUntilUpdatedAt'
  | 'pool__perUnitSettledValue'
  | 'pool__perUnitFlowRate'
  | 'pool__totalMembers'
  | 'pool__totalConnectedMembers'
  | 'pool__totalDisconnectedMembers'
  | 'pool__adjustmentFlowRate'
  | 'pool__flowRate'
  | 'pool__totalBuffer'
  | 'poolDistributor'
  | 'poolDistributor__id'
  | 'poolDistributor__createdAtTimestamp'
  | 'poolDistributor__createdAtBlockNumber'
  | 'poolDistributor__updatedAtTimestamp'
  | 'poolDistributor__updatedAtBlockNumber'
  | 'poolDistributor__totalAmountInstantlyDistributedUntilUpdatedAt'
  | 'poolDistributor__totalAmountFlowedDistributedUntilUpdatedAt'
  | 'poolDistributor__totalAmountDistributedUntilUpdatedAt'
  | 'poolDistributor__totalBuffer'
  | 'poolDistributor__flowRate';

export type JailEvent = Event & {
  id: Scalars['ID']['output'];
  transactionHash: Scalars['Bytes']['output'];
  gasPrice: Scalars['BigInt']['output'];
  gasUsed?: Maybe<Scalars['BigInt']['output']>;
  timestamp: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `app`
   *
   */
  addresses: Array<Scalars['Bytes']['output']>;
  blockNumber: Scalars['BigInt']['output'];
  logIndex: Scalars['BigInt']['output'];
  order: Scalars['BigInt']['output'];
  app: Scalars['Bytes']['output'];
  reason: Scalars['BigInt']['output'];
};

export type JailEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order?: InputMaybe<Scalars['BigInt']['input']>;
  order_not?: InputMaybe<Scalars['BigInt']['input']>;
  order_gt?: InputMaybe<Scalars['BigInt']['input']>;
  order_lt?: InputMaybe<Scalars['BigInt']['input']>;
  order_gte?: InputMaybe<Scalars['BigInt']['input']>;
  order_lte?: InputMaybe<Scalars['BigInt']['input']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  app?: InputMaybe<Scalars['Bytes']['input']>;
  app_not?: InputMaybe<Scalars['Bytes']['input']>;
  app_gt?: InputMaybe<Scalars['Bytes']['input']>;
  app_lt?: InputMaybe<Scalars['Bytes']['input']>;
  app_gte?: InputMaybe<Scalars['Bytes']['input']>;
  app_lte?: InputMaybe<Scalars['Bytes']['input']>;
  app_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  app_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  app_contains?: InputMaybe<Scalars['Bytes']['input']>;
  app_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  reason?: InputMaybe<Scalars['BigInt']['input']>;
  reason_not?: InputMaybe<Scalars['BigInt']['input']>;
  reason_gt?: InputMaybe<Scalars['BigInt']['input']>;
  reason_lt?: InputMaybe<Scalars['BigInt']['input']>;
  reason_gte?: InputMaybe<Scalars['BigInt']['input']>;
  reason_lte?: InputMaybe<Scalars['BigInt']['input']>;
  reason_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  reason_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<JailEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<JailEvent_filter>>>;
};

export type JailEvent_orderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'app'
  | 'reason';

export type MemberUnitsUpdatedEvent = Event & {
  id: Scalars['ID']['output'];
  transactionHash: Scalars['Bytes']['output'];
  gasPrice: Scalars['BigInt']['output'];
  gasUsed?: Maybe<Scalars['BigInt']['output']>;
  timestamp: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   * addresses[1] = `pool`
   * addresses[2] = `member`
   *
   */
  addresses: Array<Scalars['Bytes']['output']>;
  blockNumber: Scalars['BigInt']['output'];
  logIndex: Scalars['BigInt']['output'];
  order: Scalars['BigInt']['output'];
  token: Scalars['Bytes']['output'];
  oldUnits: Scalars['BigInt']['output'];
  units: Scalars['BigInt']['output'];
  totalUnits: Scalars['BigInt']['output'];
  pool: Pool;
  poolMember: PoolMember;
};

export type MemberUnitsUpdatedEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order?: InputMaybe<Scalars['BigInt']['input']>;
  order_not?: InputMaybe<Scalars['BigInt']['input']>;
  order_gt?: InputMaybe<Scalars['BigInt']['input']>;
  order_lt?: InputMaybe<Scalars['BigInt']['input']>;
  order_gte?: InputMaybe<Scalars['BigInt']['input']>;
  order_lte?: InputMaybe<Scalars['BigInt']['input']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  token?: InputMaybe<Scalars['Bytes']['input']>;
  token_not?: InputMaybe<Scalars['Bytes']['input']>;
  token_gt?: InputMaybe<Scalars['Bytes']['input']>;
  token_lt?: InputMaybe<Scalars['Bytes']['input']>;
  token_gte?: InputMaybe<Scalars['Bytes']['input']>;
  token_lte?: InputMaybe<Scalars['Bytes']['input']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  oldUnits?: InputMaybe<Scalars['BigInt']['input']>;
  oldUnits_not?: InputMaybe<Scalars['BigInt']['input']>;
  oldUnits_gt?: InputMaybe<Scalars['BigInt']['input']>;
  oldUnits_lt?: InputMaybe<Scalars['BigInt']['input']>;
  oldUnits_gte?: InputMaybe<Scalars['BigInt']['input']>;
  oldUnits_lte?: InputMaybe<Scalars['BigInt']['input']>;
  oldUnits_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  oldUnits_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  units?: InputMaybe<Scalars['BigInt']['input']>;
  units_not?: InputMaybe<Scalars['BigInt']['input']>;
  units_gt?: InputMaybe<Scalars['BigInt']['input']>;
  units_lt?: InputMaybe<Scalars['BigInt']['input']>;
  units_gte?: InputMaybe<Scalars['BigInt']['input']>;
  units_lte?: InputMaybe<Scalars['BigInt']['input']>;
  units_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  units_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalUnits?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnits_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnits_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnits_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnits_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnits_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnits_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalUnits_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  pool?: InputMaybe<Scalars['String']['input']>;
  pool_not?: InputMaybe<Scalars['String']['input']>;
  pool_gt?: InputMaybe<Scalars['String']['input']>;
  pool_lt?: InputMaybe<Scalars['String']['input']>;
  pool_gte?: InputMaybe<Scalars['String']['input']>;
  pool_lte?: InputMaybe<Scalars['String']['input']>;
  pool_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_contains?: InputMaybe<Scalars['String']['input']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_?: InputMaybe<Pool_filter>;
  poolMember?: InputMaybe<Scalars['String']['input']>;
  poolMember_not?: InputMaybe<Scalars['String']['input']>;
  poolMember_gt?: InputMaybe<Scalars['String']['input']>;
  poolMember_lt?: InputMaybe<Scalars['String']['input']>;
  poolMember_gte?: InputMaybe<Scalars['String']['input']>;
  poolMember_lte?: InputMaybe<Scalars['String']['input']>;
  poolMember_in?: InputMaybe<Array<Scalars['String']['input']>>;
  poolMember_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  poolMember_contains?: InputMaybe<Scalars['String']['input']>;
  poolMember_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  poolMember_not_contains?: InputMaybe<Scalars['String']['input']>;
  poolMember_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  poolMember_starts_with?: InputMaybe<Scalars['String']['input']>;
  poolMember_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolMember_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  poolMember_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolMember_ends_with?: InputMaybe<Scalars['String']['input']>;
  poolMember_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolMember_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  poolMember_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolMember_?: InputMaybe<PoolMember_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<MemberUnitsUpdatedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<MemberUnitsUpdatedEvent_filter>>>;
};

export type MemberUnitsUpdatedEvent_orderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'token'
  | 'oldUnits'
  | 'units'
  | 'totalUnits'
  | 'pool'
  | 'pool__id'
  | 'pool__createdAtTimestamp'
  | 'pool__createdAtBlockNumber'
  | 'pool__updatedAtTimestamp'
  | 'pool__updatedAtBlockNumber'
  | 'pool__totalUnits'
  | 'pool__totalConnectedUnits'
  | 'pool__totalDisconnectedUnits'
  | 'pool__totalAmountInstantlyDistributedUntilUpdatedAt'
  | 'pool__totalAmountFlowedDistributedUntilUpdatedAt'
  | 'pool__totalAmountDistributedUntilUpdatedAt'
  | 'pool__totalFlowAdjustmentAmountDistributedUntilUpdatedAt'
  | 'pool__perUnitSettledValue'
  | 'pool__perUnitFlowRate'
  | 'pool__totalMembers'
  | 'pool__totalConnectedMembers'
  | 'pool__totalDisconnectedMembers'
  | 'pool__adjustmentFlowRate'
  | 'pool__flowRate'
  | 'pool__totalBuffer'
  | 'poolMember'
  | 'poolMember__id'
  | 'poolMember__createdAtTimestamp'
  | 'poolMember__createdAtBlockNumber'
  | 'poolMember__updatedAtTimestamp'
  | 'poolMember__updatedAtBlockNumber'
  | 'poolMember__units'
  | 'poolMember__isConnected'
  | 'poolMember__totalAmountClaimed'
  | 'poolMember__poolTotalAmountDistributedUntilUpdatedAt'
  | 'poolMember__totalAmountReceivedUntilUpdatedAt'
  | 'poolMember__syncedPerUnitSettledValue'
  | 'poolMember__syncedPerUnitFlowRate';

export type MintedEvent = Event & {
  id: Scalars['ID']['output'];
  transactionHash: Scalars['Bytes']['output'];
  gasPrice: Scalars['BigInt']['output'];
  gasUsed?: Maybe<Scalars['BigInt']['output']>;
  timestamp: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   * addresses[1] = `operator`
   * addresses[2] = `to`
   *
   */
  addresses: Array<Scalars['Bytes']['output']>;
  blockNumber: Scalars['BigInt']['output'];
  logIndex: Scalars['BigInt']['output'];
  order: Scalars['BigInt']['output'];
  operator: Scalars['Bytes']['output'];
  to: Scalars['Bytes']['output'];
  amount: Scalars['BigInt']['output'];
  data: Scalars['Bytes']['output'];
  token: Scalars['Bytes']['output'];
  operatorData: Scalars['Bytes']['output'];
};

export type MintedEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order?: InputMaybe<Scalars['BigInt']['input']>;
  order_not?: InputMaybe<Scalars['BigInt']['input']>;
  order_gt?: InputMaybe<Scalars['BigInt']['input']>;
  order_lt?: InputMaybe<Scalars['BigInt']['input']>;
  order_gte?: InputMaybe<Scalars['BigInt']['input']>;
  order_lte?: InputMaybe<Scalars['BigInt']['input']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  operator?: InputMaybe<Scalars['Bytes']['input']>;
  operator_not?: InputMaybe<Scalars['Bytes']['input']>;
  operator_gt?: InputMaybe<Scalars['Bytes']['input']>;
  operator_lt?: InputMaybe<Scalars['Bytes']['input']>;
  operator_gte?: InputMaybe<Scalars['Bytes']['input']>;
  operator_lte?: InputMaybe<Scalars['Bytes']['input']>;
  operator_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  operator_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  operator_contains?: InputMaybe<Scalars['Bytes']['input']>;
  operator_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  to?: InputMaybe<Scalars['Bytes']['input']>;
  to_not?: InputMaybe<Scalars['Bytes']['input']>;
  to_gt?: InputMaybe<Scalars['Bytes']['input']>;
  to_lt?: InputMaybe<Scalars['Bytes']['input']>;
  to_gte?: InputMaybe<Scalars['Bytes']['input']>;
  to_lte?: InputMaybe<Scalars['Bytes']['input']>;
  to_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  to_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  to_contains?: InputMaybe<Scalars['Bytes']['input']>;
  to_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  data?: InputMaybe<Scalars['Bytes']['input']>;
  data_not?: InputMaybe<Scalars['Bytes']['input']>;
  data_gt?: InputMaybe<Scalars['Bytes']['input']>;
  data_lt?: InputMaybe<Scalars['Bytes']['input']>;
  data_gte?: InputMaybe<Scalars['Bytes']['input']>;
  data_lte?: InputMaybe<Scalars['Bytes']['input']>;
  data_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  data_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  data_contains?: InputMaybe<Scalars['Bytes']['input']>;
  data_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token?: InputMaybe<Scalars['Bytes']['input']>;
  token_not?: InputMaybe<Scalars['Bytes']['input']>;
  token_gt?: InputMaybe<Scalars['Bytes']['input']>;
  token_lt?: InputMaybe<Scalars['Bytes']['input']>;
  token_gte?: InputMaybe<Scalars['Bytes']['input']>;
  token_lte?: InputMaybe<Scalars['Bytes']['input']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  operatorData?: InputMaybe<Scalars['Bytes']['input']>;
  operatorData_not?: InputMaybe<Scalars['Bytes']['input']>;
  operatorData_gt?: InputMaybe<Scalars['Bytes']['input']>;
  operatorData_lt?: InputMaybe<Scalars['Bytes']['input']>;
  operatorData_gte?: InputMaybe<Scalars['Bytes']['input']>;
  operatorData_lte?: InputMaybe<Scalars['Bytes']['input']>;
  operatorData_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  operatorData_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  operatorData_contains?: InputMaybe<Scalars['Bytes']['input']>;
  operatorData_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<MintedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<MintedEvent_filter>>>;
};

export type MintedEvent_orderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'operator'
  | 'to'
  | 'amount'
  | 'data'
  | 'token'
  | 'operatorData';

export type NewPICEvent = Event & {
  id: Scalars['ID']['output'];
  transactionHash: Scalars['Bytes']['output'];
  gasPrice: Scalars['BigInt']['output'];
  gasUsed?: Maybe<Scalars['BigInt']['output']>;
  timestamp: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   * addresses[1] = `pic` (new Patrician In Charge)
   *
   */
  addresses: Array<Scalars['Bytes']['output']>;
  blockNumber: Scalars['BigInt']['output'];
  logIndex: Scalars['BigInt']['output'];
  order: Scalars['BigInt']['output'];
  /**
   * The address of the `token` (supertoken) the PIC is posting a bond for.
   *
   */
  token: Scalars['Bytes']['output'];
  /**
   * The address of the new Patrician In Charge (PIC).
   *
   */
  pic: Scalars['Bytes']['output'];
  /**
   * The bond the new PIC staked in order to claim the position.
   *
   */
  bond: Scalars['BigInt']['output'];
  /**
   * The flowrate at which the bond is streamed back to the PIC.
   *
   */
  exitRate: Scalars['BigInt']['output'];
};

export type NewPICEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order?: InputMaybe<Scalars['BigInt']['input']>;
  order_not?: InputMaybe<Scalars['BigInt']['input']>;
  order_gt?: InputMaybe<Scalars['BigInt']['input']>;
  order_lt?: InputMaybe<Scalars['BigInt']['input']>;
  order_gte?: InputMaybe<Scalars['BigInt']['input']>;
  order_lte?: InputMaybe<Scalars['BigInt']['input']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  token?: InputMaybe<Scalars['Bytes']['input']>;
  token_not?: InputMaybe<Scalars['Bytes']['input']>;
  token_gt?: InputMaybe<Scalars['Bytes']['input']>;
  token_lt?: InputMaybe<Scalars['Bytes']['input']>;
  token_gte?: InputMaybe<Scalars['Bytes']['input']>;
  token_lte?: InputMaybe<Scalars['Bytes']['input']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  pic?: InputMaybe<Scalars['Bytes']['input']>;
  pic_not?: InputMaybe<Scalars['Bytes']['input']>;
  pic_gt?: InputMaybe<Scalars['Bytes']['input']>;
  pic_lt?: InputMaybe<Scalars['Bytes']['input']>;
  pic_gte?: InputMaybe<Scalars['Bytes']['input']>;
  pic_lte?: InputMaybe<Scalars['Bytes']['input']>;
  pic_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  pic_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  pic_contains?: InputMaybe<Scalars['Bytes']['input']>;
  pic_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  bond?: InputMaybe<Scalars['BigInt']['input']>;
  bond_not?: InputMaybe<Scalars['BigInt']['input']>;
  bond_gt?: InputMaybe<Scalars['BigInt']['input']>;
  bond_lt?: InputMaybe<Scalars['BigInt']['input']>;
  bond_gte?: InputMaybe<Scalars['BigInt']['input']>;
  bond_lte?: InputMaybe<Scalars['BigInt']['input']>;
  bond_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  bond_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  exitRate?: InputMaybe<Scalars['BigInt']['input']>;
  exitRate_not?: InputMaybe<Scalars['BigInt']['input']>;
  exitRate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  exitRate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  exitRate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  exitRate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  exitRate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  exitRate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<NewPICEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<NewPICEvent_filter>>>;
};

export type NewPICEvent_orderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'token'
  | 'pic'
  | 'bond'
  | 'exitRate';

/** Defines the order direction, either ascending or descending */
export type OrderDirection =
  | 'asc'
  | 'desc';

export type PPPConfigurationChangedEvent = Event & {
  id: Scalars['ID']['output'];
  transactionHash: Scalars['Bytes']['output'];
  gasPrice: Scalars['BigInt']['output'];
  gasUsed?: Maybe<Scalars['BigInt']['output']>;
  timestamp: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  /**
   * The address of the governance contract the event was emitted from.
   *
   */
  governanceAddress: Scalars['Bytes']['output'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `governanceAddress`
   * addresses[1] = `host`
   * addresses[2] = `superToken`
   *
   */
  addresses: Array<Scalars['Bytes']['output']>;
  blockNumber: Scalars['BigInt']['output'];
  logIndex: Scalars['BigInt']['output'];
  order: Scalars['BigInt']['output'];
  host: Scalars['Bytes']['output'];
  superToken: Scalars['Bytes']['output'];
  isKeySet: Scalars['Boolean']['output'];
  liquidationPeriod: Scalars['BigInt']['output'];
  patricianPeriod: Scalars['BigInt']['output'];
};

export type PPPConfigurationChangedEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  governanceAddress?: InputMaybe<Scalars['Bytes']['input']>;
  governanceAddress_not?: InputMaybe<Scalars['Bytes']['input']>;
  governanceAddress_gt?: InputMaybe<Scalars['Bytes']['input']>;
  governanceAddress_lt?: InputMaybe<Scalars['Bytes']['input']>;
  governanceAddress_gte?: InputMaybe<Scalars['Bytes']['input']>;
  governanceAddress_lte?: InputMaybe<Scalars['Bytes']['input']>;
  governanceAddress_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  governanceAddress_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  governanceAddress_contains?: InputMaybe<Scalars['Bytes']['input']>;
  governanceAddress_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order?: InputMaybe<Scalars['BigInt']['input']>;
  order_not?: InputMaybe<Scalars['BigInt']['input']>;
  order_gt?: InputMaybe<Scalars['BigInt']['input']>;
  order_lt?: InputMaybe<Scalars['BigInt']['input']>;
  order_gte?: InputMaybe<Scalars['BigInt']['input']>;
  order_lte?: InputMaybe<Scalars['BigInt']['input']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  host?: InputMaybe<Scalars['Bytes']['input']>;
  host_not?: InputMaybe<Scalars['Bytes']['input']>;
  host_gt?: InputMaybe<Scalars['Bytes']['input']>;
  host_lt?: InputMaybe<Scalars['Bytes']['input']>;
  host_gte?: InputMaybe<Scalars['Bytes']['input']>;
  host_lte?: InputMaybe<Scalars['Bytes']['input']>;
  host_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  host_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  host_contains?: InputMaybe<Scalars['Bytes']['input']>;
  host_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  superToken?: InputMaybe<Scalars['Bytes']['input']>;
  superToken_not?: InputMaybe<Scalars['Bytes']['input']>;
  superToken_gt?: InputMaybe<Scalars['Bytes']['input']>;
  superToken_lt?: InputMaybe<Scalars['Bytes']['input']>;
  superToken_gte?: InputMaybe<Scalars['Bytes']['input']>;
  superToken_lte?: InputMaybe<Scalars['Bytes']['input']>;
  superToken_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  superToken_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  superToken_contains?: InputMaybe<Scalars['Bytes']['input']>;
  superToken_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  isKeySet?: InputMaybe<Scalars['Boolean']['input']>;
  isKeySet_not?: InputMaybe<Scalars['Boolean']['input']>;
  isKeySet_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isKeySet_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  liquidationPeriod?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationPeriod_not?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationPeriod_gt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationPeriod_lt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationPeriod_gte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationPeriod_lte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationPeriod_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidationPeriod_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  patricianPeriod?: InputMaybe<Scalars['BigInt']['input']>;
  patricianPeriod_not?: InputMaybe<Scalars['BigInt']['input']>;
  patricianPeriod_gt?: InputMaybe<Scalars['BigInt']['input']>;
  patricianPeriod_lt?: InputMaybe<Scalars['BigInt']['input']>;
  patricianPeriod_gte?: InputMaybe<Scalars['BigInt']['input']>;
  patricianPeriod_lte?: InputMaybe<Scalars['BigInt']['input']>;
  patricianPeriod_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  patricianPeriod_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PPPConfigurationChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<PPPConfigurationChangedEvent_filter>>>;
};

export type PPPConfigurationChangedEvent_orderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'governanceAddress'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'host'
  | 'superToken'
  | 'isKeySet'
  | 'liquidationPeriod'
  | 'patricianPeriod';

export type Pool = {
  /**
   * ID: poolAddress
   *
   */
  id: Scalars['ID']['output'];
  createdAtTimestamp: Scalars['BigInt']['output'];
  createdAtBlockNumber: Scalars['BigInt']['output'];
  updatedAtTimestamp: Scalars['BigInt']['output'];
  updatedAtBlockNumber: Scalars['BigInt']['output'];
  totalUnits: Scalars['BigInt']['output'];
  totalConnectedUnits: Scalars['BigInt']['output'];
  totalDisconnectedUnits: Scalars['BigInt']['output'];
  totalAmountInstantlyDistributedUntilUpdatedAt: Scalars['BigInt']['output'];
  totalAmountFlowedDistributedUntilUpdatedAt: Scalars['BigInt']['output'];
  totalAmountDistributedUntilUpdatedAt: Scalars['BigInt']['output'];
  totalFlowAdjustmentAmountDistributedUntilUpdatedAt: Scalars['BigInt']['output'];
  perUnitSettledValue: Scalars['BigInt']['output'];
  perUnitFlowRate: Scalars['BigInt']['output'];
  /**
   * A member is any account which has more than 0 units in the pool.
   *
   */
  totalMembers: Scalars['Int']['output'];
  /**
   * A connected member is any account which has more than 0 units in the pool and is connected.
   *
   */
  totalConnectedMembers: Scalars['Int']['output'];
  /**
   * A disconnected member is any account which has more than 0 units in the pool and is not connected.
   *
   */
  totalDisconnectedMembers: Scalars['Int']['output'];
  adjustmentFlowRate: Scalars['BigInt']['output'];
  flowRate: Scalars['BigInt']['output'];
  totalBuffer: Scalars['BigInt']['output'];
  token: Token;
  admin: Account;
  poolDistributors: Array<PoolDistributor>;
  poolMembers: Array<PoolMember>;
  poolCreatedEvent: PoolCreatedEvent;
  poolConnectionUpdatedEvents: Array<PoolConnectionUpdatedEvent>;
  bufferAdjustedEvents: Array<BufferAdjustedEvent>;
  instantDistributionUpdatedEvents: Array<InstantDistributionUpdatedEvent>;
  flowDistributionUpdatedEvents: Array<FlowDistributionUpdatedEvent>;
  memberUnitsUpdatedEvents: Array<MemberUnitsUpdatedEvent>;
  distributionClaimedEvents: Array<DistributionClaimedEvent>;
};


export type PoolpoolDistributorsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PoolDistributor_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PoolDistributor_filter>;
};


export type PoolpoolMembersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PoolMember_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PoolMember_filter>;
};


export type PoolpoolConnectionUpdatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PoolConnectionUpdatedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PoolConnectionUpdatedEvent_filter>;
};


export type PoolbufferAdjustedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BufferAdjustedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<BufferAdjustedEvent_filter>;
};


export type PoolinstantDistributionUpdatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<InstantDistributionUpdatedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<InstantDistributionUpdatedEvent_filter>;
};


export type PoolflowDistributionUpdatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FlowDistributionUpdatedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FlowDistributionUpdatedEvent_filter>;
};


export type PoolmemberUnitsUpdatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MemberUnitsUpdatedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MemberUnitsUpdatedEvent_filter>;
};


export type PooldistributionClaimedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<DistributionClaimedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DistributionClaimedEvent_filter>;
};

export type PoolConnectionUpdatedEvent = Event & {
  id: Scalars['ID']['output'];
  transactionHash: Scalars['Bytes']['output'];
  gasPrice: Scalars['BigInt']['output'];
  gasUsed?: Maybe<Scalars['BigInt']['output']>;
  timestamp: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   * addresses[1] = `pool`
   * addresses[2] = `poolMember`
   *
   */
  addresses: Array<Scalars['Bytes']['output']>;
  blockNumber: Scalars['BigInt']['output'];
  logIndex: Scalars['BigInt']['output'];
  order: Scalars['BigInt']['output'];
  token: Scalars['Bytes']['output'];
  connected: Scalars['Boolean']['output'];
  userData: Scalars['Bytes']['output'];
  pool: Pool;
  poolMember: PoolMember;
};

export type PoolConnectionUpdatedEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order?: InputMaybe<Scalars['BigInt']['input']>;
  order_not?: InputMaybe<Scalars['BigInt']['input']>;
  order_gt?: InputMaybe<Scalars['BigInt']['input']>;
  order_lt?: InputMaybe<Scalars['BigInt']['input']>;
  order_gte?: InputMaybe<Scalars['BigInt']['input']>;
  order_lte?: InputMaybe<Scalars['BigInt']['input']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  token?: InputMaybe<Scalars['Bytes']['input']>;
  token_not?: InputMaybe<Scalars['Bytes']['input']>;
  token_gt?: InputMaybe<Scalars['Bytes']['input']>;
  token_lt?: InputMaybe<Scalars['Bytes']['input']>;
  token_gte?: InputMaybe<Scalars['Bytes']['input']>;
  token_lte?: InputMaybe<Scalars['Bytes']['input']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  connected?: InputMaybe<Scalars['Boolean']['input']>;
  connected_not?: InputMaybe<Scalars['Boolean']['input']>;
  connected_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  connected_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  userData?: InputMaybe<Scalars['Bytes']['input']>;
  userData_not?: InputMaybe<Scalars['Bytes']['input']>;
  userData_gt?: InputMaybe<Scalars['Bytes']['input']>;
  userData_lt?: InputMaybe<Scalars['Bytes']['input']>;
  userData_gte?: InputMaybe<Scalars['Bytes']['input']>;
  userData_lte?: InputMaybe<Scalars['Bytes']['input']>;
  userData_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  userData_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  userData_contains?: InputMaybe<Scalars['Bytes']['input']>;
  userData_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  pool?: InputMaybe<Scalars['String']['input']>;
  pool_not?: InputMaybe<Scalars['String']['input']>;
  pool_gt?: InputMaybe<Scalars['String']['input']>;
  pool_lt?: InputMaybe<Scalars['String']['input']>;
  pool_gte?: InputMaybe<Scalars['String']['input']>;
  pool_lte?: InputMaybe<Scalars['String']['input']>;
  pool_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_contains?: InputMaybe<Scalars['String']['input']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_?: InputMaybe<Pool_filter>;
  poolMember?: InputMaybe<Scalars['String']['input']>;
  poolMember_not?: InputMaybe<Scalars['String']['input']>;
  poolMember_gt?: InputMaybe<Scalars['String']['input']>;
  poolMember_lt?: InputMaybe<Scalars['String']['input']>;
  poolMember_gte?: InputMaybe<Scalars['String']['input']>;
  poolMember_lte?: InputMaybe<Scalars['String']['input']>;
  poolMember_in?: InputMaybe<Array<Scalars['String']['input']>>;
  poolMember_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  poolMember_contains?: InputMaybe<Scalars['String']['input']>;
  poolMember_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  poolMember_not_contains?: InputMaybe<Scalars['String']['input']>;
  poolMember_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  poolMember_starts_with?: InputMaybe<Scalars['String']['input']>;
  poolMember_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolMember_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  poolMember_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolMember_ends_with?: InputMaybe<Scalars['String']['input']>;
  poolMember_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolMember_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  poolMember_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolMember_?: InputMaybe<PoolMember_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PoolConnectionUpdatedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<PoolConnectionUpdatedEvent_filter>>>;
};

export type PoolConnectionUpdatedEvent_orderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'token'
  | 'connected'
  | 'userData'
  | 'pool'
  | 'pool__id'
  | 'pool__createdAtTimestamp'
  | 'pool__createdAtBlockNumber'
  | 'pool__updatedAtTimestamp'
  | 'pool__updatedAtBlockNumber'
  | 'pool__totalUnits'
  | 'pool__totalConnectedUnits'
  | 'pool__totalDisconnectedUnits'
  | 'pool__totalAmountInstantlyDistributedUntilUpdatedAt'
  | 'pool__totalAmountFlowedDistributedUntilUpdatedAt'
  | 'pool__totalAmountDistributedUntilUpdatedAt'
  | 'pool__totalFlowAdjustmentAmountDistributedUntilUpdatedAt'
  | 'pool__perUnitSettledValue'
  | 'pool__perUnitFlowRate'
  | 'pool__totalMembers'
  | 'pool__totalConnectedMembers'
  | 'pool__totalDisconnectedMembers'
  | 'pool__adjustmentFlowRate'
  | 'pool__flowRate'
  | 'pool__totalBuffer'
  | 'poolMember'
  | 'poolMember__id'
  | 'poolMember__createdAtTimestamp'
  | 'poolMember__createdAtBlockNumber'
  | 'poolMember__updatedAtTimestamp'
  | 'poolMember__updatedAtBlockNumber'
  | 'poolMember__units'
  | 'poolMember__isConnected'
  | 'poolMember__totalAmountClaimed'
  | 'poolMember__poolTotalAmountDistributedUntilUpdatedAt'
  | 'poolMember__totalAmountReceivedUntilUpdatedAt'
  | 'poolMember__syncedPerUnitSettledValue'
  | 'poolMember__syncedPerUnitFlowRate';

export type PoolCreatedEvent = Event & {
  id: Scalars['ID']['output'];
  transactionHash: Scalars['Bytes']['output'];
  gasPrice: Scalars['BigInt']['output'];
  gasUsed?: Maybe<Scalars['BigInt']['output']>;
  timestamp: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   * addresses[1] = `pool`
   * addresses[2] = `caller`
   * addresses[3] = `admin`
   *
   */
  addresses: Array<Scalars['Bytes']['output']>;
  blockNumber: Scalars['BigInt']['output'];
  logIndex: Scalars['BigInt']['output'];
  order: Scalars['BigInt']['output'];
  token: Scalars['Bytes']['output'];
  caller: Scalars['Bytes']['output'];
  admin: Scalars['Bytes']['output'];
  pool: Pool;
};

export type PoolCreatedEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order?: InputMaybe<Scalars['BigInt']['input']>;
  order_not?: InputMaybe<Scalars['BigInt']['input']>;
  order_gt?: InputMaybe<Scalars['BigInt']['input']>;
  order_lt?: InputMaybe<Scalars['BigInt']['input']>;
  order_gte?: InputMaybe<Scalars['BigInt']['input']>;
  order_lte?: InputMaybe<Scalars['BigInt']['input']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  token?: InputMaybe<Scalars['Bytes']['input']>;
  token_not?: InputMaybe<Scalars['Bytes']['input']>;
  token_gt?: InputMaybe<Scalars['Bytes']['input']>;
  token_lt?: InputMaybe<Scalars['Bytes']['input']>;
  token_gte?: InputMaybe<Scalars['Bytes']['input']>;
  token_lte?: InputMaybe<Scalars['Bytes']['input']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  caller?: InputMaybe<Scalars['Bytes']['input']>;
  caller_not?: InputMaybe<Scalars['Bytes']['input']>;
  caller_gt?: InputMaybe<Scalars['Bytes']['input']>;
  caller_lt?: InputMaybe<Scalars['Bytes']['input']>;
  caller_gte?: InputMaybe<Scalars['Bytes']['input']>;
  caller_lte?: InputMaybe<Scalars['Bytes']['input']>;
  caller_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  caller_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  caller_contains?: InputMaybe<Scalars['Bytes']['input']>;
  caller_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  admin?: InputMaybe<Scalars['Bytes']['input']>;
  admin_not?: InputMaybe<Scalars['Bytes']['input']>;
  admin_gt?: InputMaybe<Scalars['Bytes']['input']>;
  admin_lt?: InputMaybe<Scalars['Bytes']['input']>;
  admin_gte?: InputMaybe<Scalars['Bytes']['input']>;
  admin_lte?: InputMaybe<Scalars['Bytes']['input']>;
  admin_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  admin_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  admin_contains?: InputMaybe<Scalars['Bytes']['input']>;
  admin_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  pool?: InputMaybe<Scalars['String']['input']>;
  pool_not?: InputMaybe<Scalars['String']['input']>;
  pool_gt?: InputMaybe<Scalars['String']['input']>;
  pool_lt?: InputMaybe<Scalars['String']['input']>;
  pool_gte?: InputMaybe<Scalars['String']['input']>;
  pool_lte?: InputMaybe<Scalars['String']['input']>;
  pool_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_contains?: InputMaybe<Scalars['String']['input']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_?: InputMaybe<Pool_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PoolCreatedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<PoolCreatedEvent_filter>>>;
};

export type PoolCreatedEvent_orderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'token'
  | 'caller'
  | 'admin'
  | 'pool'
  | 'pool__id'
  | 'pool__createdAtTimestamp'
  | 'pool__createdAtBlockNumber'
  | 'pool__updatedAtTimestamp'
  | 'pool__updatedAtBlockNumber'
  | 'pool__totalUnits'
  | 'pool__totalConnectedUnits'
  | 'pool__totalDisconnectedUnits'
  | 'pool__totalAmountInstantlyDistributedUntilUpdatedAt'
  | 'pool__totalAmountFlowedDistributedUntilUpdatedAt'
  | 'pool__totalAmountDistributedUntilUpdatedAt'
  | 'pool__totalFlowAdjustmentAmountDistributedUntilUpdatedAt'
  | 'pool__perUnitSettledValue'
  | 'pool__perUnitFlowRate'
  | 'pool__totalMembers'
  | 'pool__totalConnectedMembers'
  | 'pool__totalDisconnectedMembers'
  | 'pool__adjustmentFlowRate'
  | 'pool__flowRate'
  | 'pool__totalBuffer';

export type PoolDistributor = {
  /**
   * ID composed of: "poolDistributor"-pool-poolDistributorAddress
   *
   */
  id: Scalars['ID']['output'];
  createdAtTimestamp: Scalars['BigInt']['output'];
  createdAtBlockNumber: Scalars['BigInt']['output'];
  updatedAtTimestamp: Scalars['BigInt']['output'];
  updatedAtBlockNumber: Scalars['BigInt']['output'];
  totalAmountInstantlyDistributedUntilUpdatedAt: Scalars['BigInt']['output'];
  totalAmountFlowedDistributedUntilUpdatedAt: Scalars['BigInt']['output'];
  totalAmountDistributedUntilUpdatedAt: Scalars['BigInt']['output'];
  totalBuffer: Scalars['BigInt']['output'];
  flowRate: Scalars['BigInt']['output'];
  account: Account;
  pool: Pool;
  bufferAdjustedEvents: Array<BufferAdjustedEvent>;
  instantDistributionUpdatedEvents: Array<InstantDistributionUpdatedEvent>;
  flowDistributionUpdatedEvents: Array<FlowDistributionUpdatedEvent>;
};


export type PoolDistributorbufferAdjustedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BufferAdjustedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<BufferAdjustedEvent_filter>;
};


export type PoolDistributorinstantDistributionUpdatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<InstantDistributionUpdatedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<InstantDistributionUpdatedEvent_filter>;
};


export type PoolDistributorflowDistributionUpdatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FlowDistributionUpdatedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FlowDistributionUpdatedEvent_filter>;
};

export type PoolDistributor_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  createdAtTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAtBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAtTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAtBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalAmountInstantlyDistributedUntilUpdatedAt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountInstantlyDistributedUntilUpdatedAt_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountInstantlyDistributedUntilUpdatedAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountInstantlyDistributedUntilUpdatedAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountInstantlyDistributedUntilUpdatedAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountInstantlyDistributedUntilUpdatedAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountInstantlyDistributedUntilUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalAmountInstantlyDistributedUntilUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalAmountFlowedDistributedUntilUpdatedAt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountFlowedDistributedUntilUpdatedAt_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountFlowedDistributedUntilUpdatedAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountFlowedDistributedUntilUpdatedAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountFlowedDistributedUntilUpdatedAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountFlowedDistributedUntilUpdatedAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountFlowedDistributedUntilUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalAmountFlowedDistributedUntilUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalAmountDistributedUntilUpdatedAt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountDistributedUntilUpdatedAt_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountDistributedUntilUpdatedAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountDistributedUntilUpdatedAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountDistributedUntilUpdatedAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountDistributedUntilUpdatedAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountDistributedUntilUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalAmountDistributedUntilUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalBuffer?: InputMaybe<Scalars['BigInt']['input']>;
  totalBuffer_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalBuffer_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalBuffer_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalBuffer_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalBuffer_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalBuffer_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalBuffer_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  flowRate?: InputMaybe<Scalars['BigInt']['input']>;
  flowRate_not?: InputMaybe<Scalars['BigInt']['input']>;
  flowRate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  flowRate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  flowRate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  flowRate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  flowRate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  flowRate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  account?: InputMaybe<Scalars['String']['input']>;
  account_not?: InputMaybe<Scalars['String']['input']>;
  account_gt?: InputMaybe<Scalars['String']['input']>;
  account_lt?: InputMaybe<Scalars['String']['input']>;
  account_gte?: InputMaybe<Scalars['String']['input']>;
  account_lte?: InputMaybe<Scalars['String']['input']>;
  account_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_contains?: InputMaybe<Scalars['String']['input']>;
  account_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_contains?: InputMaybe<Scalars['String']['input']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_?: InputMaybe<Account_filter>;
  pool?: InputMaybe<Scalars['String']['input']>;
  pool_not?: InputMaybe<Scalars['String']['input']>;
  pool_gt?: InputMaybe<Scalars['String']['input']>;
  pool_lt?: InputMaybe<Scalars['String']['input']>;
  pool_gte?: InputMaybe<Scalars['String']['input']>;
  pool_lte?: InputMaybe<Scalars['String']['input']>;
  pool_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_contains?: InputMaybe<Scalars['String']['input']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_?: InputMaybe<Pool_filter>;
  bufferAdjustedEvents_?: InputMaybe<BufferAdjustedEvent_filter>;
  instantDistributionUpdatedEvents_?: InputMaybe<InstantDistributionUpdatedEvent_filter>;
  flowDistributionUpdatedEvents_?: InputMaybe<FlowDistributionUpdatedEvent_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PoolDistributor_filter>>>;
  or?: InputMaybe<Array<InputMaybe<PoolDistributor_filter>>>;
};

export type PoolDistributor_orderBy =
  | 'id'
  | 'createdAtTimestamp'
  | 'createdAtBlockNumber'
  | 'updatedAtTimestamp'
  | 'updatedAtBlockNumber'
  | 'totalAmountInstantlyDistributedUntilUpdatedAt'
  | 'totalAmountFlowedDistributedUntilUpdatedAt'
  | 'totalAmountDistributedUntilUpdatedAt'
  | 'totalBuffer'
  | 'flowRate'
  | 'account'
  | 'account__id'
  | 'account__createdAtTimestamp'
  | 'account__createdAtBlockNumber'
  | 'account__updatedAtTimestamp'
  | 'account__updatedAtBlockNumber'
  | 'account__isSuperApp'
  | 'pool'
  | 'pool__id'
  | 'pool__createdAtTimestamp'
  | 'pool__createdAtBlockNumber'
  | 'pool__updatedAtTimestamp'
  | 'pool__updatedAtBlockNumber'
  | 'pool__totalUnits'
  | 'pool__totalConnectedUnits'
  | 'pool__totalDisconnectedUnits'
  | 'pool__totalAmountInstantlyDistributedUntilUpdatedAt'
  | 'pool__totalAmountFlowedDistributedUntilUpdatedAt'
  | 'pool__totalAmountDistributedUntilUpdatedAt'
  | 'pool__totalFlowAdjustmentAmountDistributedUntilUpdatedAt'
  | 'pool__perUnitSettledValue'
  | 'pool__perUnitFlowRate'
  | 'pool__totalMembers'
  | 'pool__totalConnectedMembers'
  | 'pool__totalDisconnectedMembers'
  | 'pool__adjustmentFlowRate'
  | 'pool__flowRate'
  | 'pool__totalBuffer'
  | 'bufferAdjustedEvents'
  | 'instantDistributionUpdatedEvents'
  | 'flowDistributionUpdatedEvents';

export type PoolMember = {
  /**
   * ID composed of: "poolMember"-poolAddress-poolMemberAddress
   *
   */
  id: Scalars['ID']['output'];
  createdAtTimestamp: Scalars['BigInt']['output'];
  createdAtBlockNumber: Scalars['BigInt']['output'];
  updatedAtTimestamp: Scalars['BigInt']['output'];
  updatedAtBlockNumber: Scalars['BigInt']['output'];
  units: Scalars['BigInt']['output'];
  isConnected: Scalars['Boolean']['output'];
  totalAmountClaimed: Scalars['BigInt']['output'];
  poolTotalAmountDistributedUntilUpdatedAt: Scalars['BigInt']['output'];
  totalAmountReceivedUntilUpdatedAt: Scalars['BigInt']['output'];
  syncedPerUnitSettledValue: Scalars['BigInt']['output'];
  syncedPerUnitFlowRate: Scalars['BigInt']['output'];
  account: Account;
  pool: Pool;
  poolConnectionUpdatedEvents: Array<PoolConnectionUpdatedEvent>;
  memberUnitsUpdatedEvents: Array<MemberUnitsUpdatedEvent>;
  distributionClaimedEvents: Array<DistributionClaimedEvent>;
};


export type PoolMemberpoolConnectionUpdatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PoolConnectionUpdatedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PoolConnectionUpdatedEvent_filter>;
};


export type PoolMembermemberUnitsUpdatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MemberUnitsUpdatedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MemberUnitsUpdatedEvent_filter>;
};


export type PoolMemberdistributionClaimedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<DistributionClaimedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DistributionClaimedEvent_filter>;
};

export type PoolMember_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  createdAtTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAtBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAtTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAtBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  units?: InputMaybe<Scalars['BigInt']['input']>;
  units_not?: InputMaybe<Scalars['BigInt']['input']>;
  units_gt?: InputMaybe<Scalars['BigInt']['input']>;
  units_lt?: InputMaybe<Scalars['BigInt']['input']>;
  units_gte?: InputMaybe<Scalars['BigInt']['input']>;
  units_lte?: InputMaybe<Scalars['BigInt']['input']>;
  units_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  units_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  isConnected?: InputMaybe<Scalars['Boolean']['input']>;
  isConnected_not?: InputMaybe<Scalars['Boolean']['input']>;
  isConnected_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isConnected_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  totalAmountClaimed?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountClaimed_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountClaimed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountClaimed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountClaimed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountClaimed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountClaimed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalAmountClaimed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  poolTotalAmountDistributedUntilUpdatedAt?: InputMaybe<Scalars['BigInt']['input']>;
  poolTotalAmountDistributedUntilUpdatedAt_not?: InputMaybe<Scalars['BigInt']['input']>;
  poolTotalAmountDistributedUntilUpdatedAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  poolTotalAmountDistributedUntilUpdatedAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  poolTotalAmountDistributedUntilUpdatedAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  poolTotalAmountDistributedUntilUpdatedAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  poolTotalAmountDistributedUntilUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  poolTotalAmountDistributedUntilUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalAmountReceivedUntilUpdatedAt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountReceivedUntilUpdatedAt_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountReceivedUntilUpdatedAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountReceivedUntilUpdatedAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountReceivedUntilUpdatedAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountReceivedUntilUpdatedAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountReceivedUntilUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalAmountReceivedUntilUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  syncedPerUnitSettledValue?: InputMaybe<Scalars['BigInt']['input']>;
  syncedPerUnitSettledValue_not?: InputMaybe<Scalars['BigInt']['input']>;
  syncedPerUnitSettledValue_gt?: InputMaybe<Scalars['BigInt']['input']>;
  syncedPerUnitSettledValue_lt?: InputMaybe<Scalars['BigInt']['input']>;
  syncedPerUnitSettledValue_gte?: InputMaybe<Scalars['BigInt']['input']>;
  syncedPerUnitSettledValue_lte?: InputMaybe<Scalars['BigInt']['input']>;
  syncedPerUnitSettledValue_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  syncedPerUnitSettledValue_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  syncedPerUnitFlowRate?: InputMaybe<Scalars['BigInt']['input']>;
  syncedPerUnitFlowRate_not?: InputMaybe<Scalars['BigInt']['input']>;
  syncedPerUnitFlowRate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  syncedPerUnitFlowRate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  syncedPerUnitFlowRate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  syncedPerUnitFlowRate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  syncedPerUnitFlowRate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  syncedPerUnitFlowRate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  account?: InputMaybe<Scalars['String']['input']>;
  account_not?: InputMaybe<Scalars['String']['input']>;
  account_gt?: InputMaybe<Scalars['String']['input']>;
  account_lt?: InputMaybe<Scalars['String']['input']>;
  account_gte?: InputMaybe<Scalars['String']['input']>;
  account_lte?: InputMaybe<Scalars['String']['input']>;
  account_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_contains?: InputMaybe<Scalars['String']['input']>;
  account_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_contains?: InputMaybe<Scalars['String']['input']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_?: InputMaybe<Account_filter>;
  pool?: InputMaybe<Scalars['String']['input']>;
  pool_not?: InputMaybe<Scalars['String']['input']>;
  pool_gt?: InputMaybe<Scalars['String']['input']>;
  pool_lt?: InputMaybe<Scalars['String']['input']>;
  pool_gte?: InputMaybe<Scalars['String']['input']>;
  pool_lte?: InputMaybe<Scalars['String']['input']>;
  pool_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_contains?: InputMaybe<Scalars['String']['input']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_?: InputMaybe<Pool_filter>;
  poolConnectionUpdatedEvents_?: InputMaybe<PoolConnectionUpdatedEvent_filter>;
  memberUnitsUpdatedEvents_?: InputMaybe<MemberUnitsUpdatedEvent_filter>;
  distributionClaimedEvents_?: InputMaybe<DistributionClaimedEvent_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PoolMember_filter>>>;
  or?: InputMaybe<Array<InputMaybe<PoolMember_filter>>>;
};

export type PoolMember_orderBy =
  | 'id'
  | 'createdAtTimestamp'
  | 'createdAtBlockNumber'
  | 'updatedAtTimestamp'
  | 'updatedAtBlockNumber'
  | 'units'
  | 'isConnected'
  | 'totalAmountClaimed'
  | 'poolTotalAmountDistributedUntilUpdatedAt'
  | 'totalAmountReceivedUntilUpdatedAt'
  | 'syncedPerUnitSettledValue'
  | 'syncedPerUnitFlowRate'
  | 'account'
  | 'account__id'
  | 'account__createdAtTimestamp'
  | 'account__createdAtBlockNumber'
  | 'account__updatedAtTimestamp'
  | 'account__updatedAtBlockNumber'
  | 'account__isSuperApp'
  | 'pool'
  | 'pool__id'
  | 'pool__createdAtTimestamp'
  | 'pool__createdAtBlockNumber'
  | 'pool__updatedAtTimestamp'
  | 'pool__updatedAtBlockNumber'
  | 'pool__totalUnits'
  | 'pool__totalConnectedUnits'
  | 'pool__totalDisconnectedUnits'
  | 'pool__totalAmountInstantlyDistributedUntilUpdatedAt'
  | 'pool__totalAmountFlowedDistributedUntilUpdatedAt'
  | 'pool__totalAmountDistributedUntilUpdatedAt'
  | 'pool__totalFlowAdjustmentAmountDistributedUntilUpdatedAt'
  | 'pool__perUnitSettledValue'
  | 'pool__perUnitFlowRate'
  | 'pool__totalMembers'
  | 'pool__totalConnectedMembers'
  | 'pool__totalDisconnectedMembers'
  | 'pool__adjustmentFlowRate'
  | 'pool__flowRate'
  | 'pool__totalBuffer'
  | 'poolConnectionUpdatedEvents'
  | 'memberUnitsUpdatedEvents'
  | 'distributionClaimedEvents';

export type Pool_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  createdAtTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAtBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAtTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAtBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalUnits?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnits_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnits_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnits_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnits_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnits_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnits_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalUnits_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalConnectedUnits?: InputMaybe<Scalars['BigInt']['input']>;
  totalConnectedUnits_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalConnectedUnits_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalConnectedUnits_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalConnectedUnits_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalConnectedUnits_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalConnectedUnits_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalConnectedUnits_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalDisconnectedUnits?: InputMaybe<Scalars['BigInt']['input']>;
  totalDisconnectedUnits_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalDisconnectedUnits_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalDisconnectedUnits_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalDisconnectedUnits_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalDisconnectedUnits_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalDisconnectedUnits_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalDisconnectedUnits_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalAmountInstantlyDistributedUntilUpdatedAt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountInstantlyDistributedUntilUpdatedAt_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountInstantlyDistributedUntilUpdatedAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountInstantlyDistributedUntilUpdatedAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountInstantlyDistributedUntilUpdatedAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountInstantlyDistributedUntilUpdatedAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountInstantlyDistributedUntilUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalAmountInstantlyDistributedUntilUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalAmountFlowedDistributedUntilUpdatedAt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountFlowedDistributedUntilUpdatedAt_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountFlowedDistributedUntilUpdatedAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountFlowedDistributedUntilUpdatedAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountFlowedDistributedUntilUpdatedAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountFlowedDistributedUntilUpdatedAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountFlowedDistributedUntilUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalAmountFlowedDistributedUntilUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalAmountDistributedUntilUpdatedAt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountDistributedUntilUpdatedAt_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountDistributedUntilUpdatedAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountDistributedUntilUpdatedAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountDistributedUntilUpdatedAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountDistributedUntilUpdatedAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountDistributedUntilUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalAmountDistributedUntilUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalFlowAdjustmentAmountDistributedUntilUpdatedAt?: InputMaybe<Scalars['BigInt']['input']>;
  totalFlowAdjustmentAmountDistributedUntilUpdatedAt_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalFlowAdjustmentAmountDistributedUntilUpdatedAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalFlowAdjustmentAmountDistributedUntilUpdatedAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalFlowAdjustmentAmountDistributedUntilUpdatedAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalFlowAdjustmentAmountDistributedUntilUpdatedAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalFlowAdjustmentAmountDistributedUntilUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalFlowAdjustmentAmountDistributedUntilUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  perUnitSettledValue?: InputMaybe<Scalars['BigInt']['input']>;
  perUnitSettledValue_not?: InputMaybe<Scalars['BigInt']['input']>;
  perUnitSettledValue_gt?: InputMaybe<Scalars['BigInt']['input']>;
  perUnitSettledValue_lt?: InputMaybe<Scalars['BigInt']['input']>;
  perUnitSettledValue_gte?: InputMaybe<Scalars['BigInt']['input']>;
  perUnitSettledValue_lte?: InputMaybe<Scalars['BigInt']['input']>;
  perUnitSettledValue_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  perUnitSettledValue_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  perUnitFlowRate?: InputMaybe<Scalars['BigInt']['input']>;
  perUnitFlowRate_not?: InputMaybe<Scalars['BigInt']['input']>;
  perUnitFlowRate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  perUnitFlowRate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  perUnitFlowRate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  perUnitFlowRate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  perUnitFlowRate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  perUnitFlowRate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalMembers?: InputMaybe<Scalars['Int']['input']>;
  totalMembers_not?: InputMaybe<Scalars['Int']['input']>;
  totalMembers_gt?: InputMaybe<Scalars['Int']['input']>;
  totalMembers_lt?: InputMaybe<Scalars['Int']['input']>;
  totalMembers_gte?: InputMaybe<Scalars['Int']['input']>;
  totalMembers_lte?: InputMaybe<Scalars['Int']['input']>;
  totalMembers_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalMembers_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalConnectedMembers?: InputMaybe<Scalars['Int']['input']>;
  totalConnectedMembers_not?: InputMaybe<Scalars['Int']['input']>;
  totalConnectedMembers_gt?: InputMaybe<Scalars['Int']['input']>;
  totalConnectedMembers_lt?: InputMaybe<Scalars['Int']['input']>;
  totalConnectedMembers_gte?: InputMaybe<Scalars['Int']['input']>;
  totalConnectedMembers_lte?: InputMaybe<Scalars['Int']['input']>;
  totalConnectedMembers_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalConnectedMembers_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalDisconnectedMembers?: InputMaybe<Scalars['Int']['input']>;
  totalDisconnectedMembers_not?: InputMaybe<Scalars['Int']['input']>;
  totalDisconnectedMembers_gt?: InputMaybe<Scalars['Int']['input']>;
  totalDisconnectedMembers_lt?: InputMaybe<Scalars['Int']['input']>;
  totalDisconnectedMembers_gte?: InputMaybe<Scalars['Int']['input']>;
  totalDisconnectedMembers_lte?: InputMaybe<Scalars['Int']['input']>;
  totalDisconnectedMembers_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalDisconnectedMembers_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  adjustmentFlowRate?: InputMaybe<Scalars['BigInt']['input']>;
  adjustmentFlowRate_not?: InputMaybe<Scalars['BigInt']['input']>;
  adjustmentFlowRate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  adjustmentFlowRate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  adjustmentFlowRate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  adjustmentFlowRate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  adjustmentFlowRate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  adjustmentFlowRate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  flowRate?: InputMaybe<Scalars['BigInt']['input']>;
  flowRate_not?: InputMaybe<Scalars['BigInt']['input']>;
  flowRate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  flowRate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  flowRate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  flowRate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  flowRate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  flowRate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalBuffer?: InputMaybe<Scalars['BigInt']['input']>;
  totalBuffer_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalBuffer_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalBuffer_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalBuffer_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalBuffer_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalBuffer_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalBuffer_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  token?: InputMaybe<Scalars['String']['input']>;
  token_not?: InputMaybe<Scalars['String']['input']>;
  token_gt?: InputMaybe<Scalars['String']['input']>;
  token_lt?: InputMaybe<Scalars['String']['input']>;
  token_gte?: InputMaybe<Scalars['String']['input']>;
  token_lte?: InputMaybe<Scalars['String']['input']>;
  token_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_contains?: InputMaybe<Scalars['String']['input']>;
  token_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_contains?: InputMaybe<Scalars['String']['input']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_?: InputMaybe<Token_filter>;
  admin?: InputMaybe<Scalars['String']['input']>;
  admin_not?: InputMaybe<Scalars['String']['input']>;
  admin_gt?: InputMaybe<Scalars['String']['input']>;
  admin_lt?: InputMaybe<Scalars['String']['input']>;
  admin_gte?: InputMaybe<Scalars['String']['input']>;
  admin_lte?: InputMaybe<Scalars['String']['input']>;
  admin_in?: InputMaybe<Array<Scalars['String']['input']>>;
  admin_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  admin_contains?: InputMaybe<Scalars['String']['input']>;
  admin_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  admin_not_contains?: InputMaybe<Scalars['String']['input']>;
  admin_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  admin_starts_with?: InputMaybe<Scalars['String']['input']>;
  admin_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  admin_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  admin_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  admin_ends_with?: InputMaybe<Scalars['String']['input']>;
  admin_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  admin_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  admin_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  admin_?: InputMaybe<Account_filter>;
  poolDistributors_?: InputMaybe<PoolDistributor_filter>;
  poolMembers_?: InputMaybe<PoolMember_filter>;
  poolCreatedEvent_?: InputMaybe<PoolCreatedEvent_filter>;
  poolConnectionUpdatedEvents_?: InputMaybe<PoolConnectionUpdatedEvent_filter>;
  bufferAdjustedEvents_?: InputMaybe<BufferAdjustedEvent_filter>;
  instantDistributionUpdatedEvents_?: InputMaybe<InstantDistributionUpdatedEvent_filter>;
  flowDistributionUpdatedEvents_?: InputMaybe<FlowDistributionUpdatedEvent_filter>;
  memberUnitsUpdatedEvents_?: InputMaybe<MemberUnitsUpdatedEvent_filter>;
  distributionClaimedEvents_?: InputMaybe<DistributionClaimedEvent_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Pool_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Pool_filter>>>;
};

export type Pool_orderBy =
  | 'id'
  | 'createdAtTimestamp'
  | 'createdAtBlockNumber'
  | 'updatedAtTimestamp'
  | 'updatedAtBlockNumber'
  | 'totalUnits'
  | 'totalConnectedUnits'
  | 'totalDisconnectedUnits'
  | 'totalAmountInstantlyDistributedUntilUpdatedAt'
  | 'totalAmountFlowedDistributedUntilUpdatedAt'
  | 'totalAmountDistributedUntilUpdatedAt'
  | 'totalFlowAdjustmentAmountDistributedUntilUpdatedAt'
  | 'perUnitSettledValue'
  | 'perUnitFlowRate'
  | 'totalMembers'
  | 'totalConnectedMembers'
  | 'totalDisconnectedMembers'
  | 'adjustmentFlowRate'
  | 'flowRate'
  | 'totalBuffer'
  | 'token'
  | 'token__id'
  | 'token__createdAtTimestamp'
  | 'token__createdAtBlockNumber'
  | 'token__decimals'
  | 'token__name'
  | 'token__symbol'
  | 'token__isSuperToken'
  | 'token__isNativeAssetSuperToken'
  | 'token__isListed'
  | 'token__underlyingAddress'
  | 'admin'
  | 'admin__id'
  | 'admin__createdAtTimestamp'
  | 'admin__createdAtBlockNumber'
  | 'admin__updatedAtTimestamp'
  | 'admin__updatedAtBlockNumber'
  | 'admin__isSuperApp'
  | 'poolDistributors'
  | 'poolMembers'
  | 'poolCreatedEvent'
  | 'poolCreatedEvent__id'
  | 'poolCreatedEvent__transactionHash'
  | 'poolCreatedEvent__gasPrice'
  | 'poolCreatedEvent__gasUsed'
  | 'poolCreatedEvent__timestamp'
  | 'poolCreatedEvent__name'
  | 'poolCreatedEvent__blockNumber'
  | 'poolCreatedEvent__logIndex'
  | 'poolCreatedEvent__order'
  | 'poolCreatedEvent__token'
  | 'poolCreatedEvent__caller'
  | 'poolCreatedEvent__admin'
  | 'poolConnectionUpdatedEvents'
  | 'bufferAdjustedEvents'
  | 'instantDistributionUpdatedEvents'
  | 'flowDistributionUpdatedEvents'
  | 'memberUnitsUpdatedEvents'
  | 'distributionClaimedEvents';

export type Query = {
  flowUpdatedEvent?: Maybe<FlowUpdatedEvent>;
  flowUpdatedEvents: Array<FlowUpdatedEvent>;
  flowOperatorUpdatedEvent?: Maybe<FlowOperatorUpdatedEvent>;
  flowOperatorUpdatedEvents: Array<FlowOperatorUpdatedEvent>;
  indexCreatedEvent?: Maybe<IndexCreatedEvent>;
  indexCreatedEvents: Array<IndexCreatedEvent>;
  indexDistributionClaimedEvent?: Maybe<IndexDistributionClaimedEvent>;
  indexDistributionClaimedEvents: Array<IndexDistributionClaimedEvent>;
  indexUpdatedEvent?: Maybe<IndexUpdatedEvent>;
  indexUpdatedEvents: Array<IndexUpdatedEvent>;
  indexSubscribedEvent?: Maybe<IndexSubscribedEvent>;
  indexSubscribedEvents: Array<IndexSubscribedEvent>;
  indexUnitsUpdatedEvent?: Maybe<IndexUnitsUpdatedEvent>;
  indexUnitsUpdatedEvents: Array<IndexUnitsUpdatedEvent>;
  indexUnsubscribedEvent?: Maybe<IndexUnsubscribedEvent>;
  indexUnsubscribedEvents: Array<IndexUnsubscribedEvent>;
  subscriptionApprovedEvent?: Maybe<SubscriptionApprovedEvent>;
  subscriptionApprovedEvents: Array<SubscriptionApprovedEvent>;
  subscriptionDistributionClaimedEvent?: Maybe<SubscriptionDistributionClaimedEvent>;
  subscriptionDistributionClaimedEvents: Array<SubscriptionDistributionClaimedEvent>;
  subscriptionRevokedEvent?: Maybe<SubscriptionRevokedEvent>;
  subscriptionRevokedEvents: Array<SubscriptionRevokedEvent>;
  subscriptionUnitsUpdatedEvent?: Maybe<SubscriptionUnitsUpdatedEvent>;
  subscriptionUnitsUpdatedEvents: Array<SubscriptionUnitsUpdatedEvent>;
  poolCreatedEvent?: Maybe<PoolCreatedEvent>;
  poolCreatedEvents: Array<PoolCreatedEvent>;
  poolConnectionUpdatedEvent?: Maybe<PoolConnectionUpdatedEvent>;
  poolConnectionUpdatedEvents: Array<PoolConnectionUpdatedEvent>;
  bufferAdjustedEvent?: Maybe<BufferAdjustedEvent>;
  bufferAdjustedEvents: Array<BufferAdjustedEvent>;
  instantDistributionUpdatedEvent?: Maybe<InstantDistributionUpdatedEvent>;
  instantDistributionUpdatedEvents: Array<InstantDistributionUpdatedEvent>;
  flowDistributionUpdatedEvent?: Maybe<FlowDistributionUpdatedEvent>;
  flowDistributionUpdatedEvents: Array<FlowDistributionUpdatedEvent>;
  distributionClaimedEvent?: Maybe<DistributionClaimedEvent>;
  distributionClaimedEvents: Array<DistributionClaimedEvent>;
  memberUnitsUpdatedEvent?: Maybe<MemberUnitsUpdatedEvent>;
  memberUnitsUpdatedEvents: Array<MemberUnitsUpdatedEvent>;
  agreementClassRegisteredEvent?: Maybe<AgreementClassRegisteredEvent>;
  agreementClassRegisteredEvents: Array<AgreementClassRegisteredEvent>;
  agreementClassUpdatedEvent?: Maybe<AgreementClassUpdatedEvent>;
  agreementClassUpdatedEvents: Array<AgreementClassUpdatedEvent>;
  appRegisteredEvent?: Maybe<AppRegisteredEvent>;
  appRegisteredEvents: Array<AppRegisteredEvent>;
  governanceReplacedEvent?: Maybe<GovernanceReplacedEvent>;
  governanceReplacedEvents: Array<GovernanceReplacedEvent>;
  jailEvent?: Maybe<JailEvent>;
  jailEvents: Array<JailEvent>;
  superTokenFactoryUpdatedEvent?: Maybe<SuperTokenFactoryUpdatedEvent>;
  superTokenFactoryUpdatedEvents: Array<SuperTokenFactoryUpdatedEvent>;
  superTokenLogicUpdatedEvent?: Maybe<SuperTokenLogicUpdatedEvent>;
  superTokenLogicUpdatedEvents: Array<SuperTokenLogicUpdatedEvent>;
  roleAdminChangedEvent?: Maybe<RoleAdminChangedEvent>;
  roleAdminChangedEvents: Array<RoleAdminChangedEvent>;
  roleGrantedEvent?: Maybe<RoleGrantedEvent>;
  roleGrantedEvents: Array<RoleGrantedEvent>;
  roleRevokedEvent?: Maybe<RoleRevokedEvent>;
  roleRevokedEvents: Array<RoleRevokedEvent>;
  setEvent?: Maybe<SetEvent>;
  setEvents: Array<SetEvent>;
  cfav1LiquidationPeriodChangedEvent?: Maybe<CFAv1LiquidationPeriodChangedEvent>;
  cfav1LiquidationPeriodChangedEvents: Array<CFAv1LiquidationPeriodChangedEvent>;
  configChangedEvent?: Maybe<ConfigChangedEvent>;
  configChangedEvents: Array<ConfigChangedEvent>;
  rewardAddressChangedEvent?: Maybe<RewardAddressChangedEvent>;
  rewardAddressChangedEvents: Array<RewardAddressChangedEvent>;
  pppconfigurationChangedEvent?: Maybe<PPPConfigurationChangedEvent>;
  pppconfigurationChangedEvents: Array<PPPConfigurationChangedEvent>;
  superTokenMinimumDepositChangedEvent?: Maybe<SuperTokenMinimumDepositChangedEvent>;
  superTokenMinimumDepositChangedEvents: Array<SuperTokenMinimumDepositChangedEvent>;
  trustedForwarderChangedEvent?: Maybe<TrustedForwarderChangedEvent>;
  trustedForwarderChangedEvents: Array<TrustedForwarderChangedEvent>;
  agreementLiquidatedByEvent?: Maybe<AgreementLiquidatedByEvent>;
  agreementLiquidatedByEvents: Array<AgreementLiquidatedByEvent>;
  agreementLiquidatedV2Event?: Maybe<AgreementLiquidatedV2Event>;
  agreementLiquidatedV2Events: Array<AgreementLiquidatedV2Event>;
  burnedEvent?: Maybe<BurnedEvent>;
  burnedEvents: Array<BurnedEvent>;
  mintedEvent?: Maybe<MintedEvent>;
  mintedEvents: Array<MintedEvent>;
  sentEvent?: Maybe<SentEvent>;
  sentEvents: Array<SentEvent>;
  transferEvent?: Maybe<TransferEvent>;
  transferEvents: Array<TransferEvent>;
  tokenDowngradedEvent?: Maybe<TokenDowngradedEvent>;
  tokenDowngradedEvents: Array<TokenDowngradedEvent>;
  tokenUpgradedEvent?: Maybe<TokenUpgradedEvent>;
  tokenUpgradedEvents: Array<TokenUpgradedEvent>;
  approvalEvent?: Maybe<ApprovalEvent>;
  approvalEvents: Array<ApprovalEvent>;
  customSuperTokenCreatedEvent?: Maybe<CustomSuperTokenCreatedEvent>;
  customSuperTokenCreatedEvents: Array<CustomSuperTokenCreatedEvent>;
  superTokenCreatedEvent?: Maybe<SuperTokenCreatedEvent>;
  superTokenCreatedEvents: Array<SuperTokenCreatedEvent>;
  superTokenLogicCreatedEvent?: Maybe<SuperTokenLogicCreatedEvent>;
  superTokenLogicCreatedEvents: Array<SuperTokenLogicCreatedEvent>;
  newPICEvent?: Maybe<NewPICEvent>;
  newPICEvents: Array<NewPICEvent>;
  exitRateChangedEvent?: Maybe<ExitRateChangedEvent>;
  exitRateChangedEvents: Array<ExitRateChangedEvent>;
  bondIncreasedEvent?: Maybe<BondIncreasedEvent>;
  bondIncreasedEvents: Array<BondIncreasedEvent>;
  account?: Maybe<Account>;
  accounts: Array<Account>;
  pool?: Maybe<Pool>;
  pools: Array<Pool>;
  poolMember?: Maybe<PoolMember>;
  poolMembers: Array<PoolMember>;
  poolDistributor?: Maybe<PoolDistributor>;
  poolDistributors: Array<PoolDistributor>;
  index?: Maybe<Index>;
  indexes: Array<Index>;
  indexSubscription?: Maybe<IndexSubscription>;
  indexSubscriptions: Array<IndexSubscription>;
  stream?: Maybe<Stream>;
  streams: Array<Stream>;
  flowOperator?: Maybe<FlowOperator>;
  flowOperators: Array<FlowOperator>;
  streamPeriod?: Maybe<StreamPeriod>;
  streamPeriods: Array<StreamPeriod>;
  tokenGovernanceConfig?: Maybe<TokenGovernanceConfig>;
  tokenGovernanceConfigs: Array<TokenGovernanceConfig>;
  streamRevision?: Maybe<StreamRevision>;
  streamRevisions: Array<StreamRevision>;
  token?: Maybe<Token>;
  tokens: Array<Token>;
  resolverEntry?: Maybe<ResolverEntry>;
  resolverEntries: Array<ResolverEntry>;
  accountTokenSnapshot?: Maybe<AccountTokenSnapshot>;
  accountTokenSnapshots: Array<AccountTokenSnapshot>;
  accountTokenSnapshotLog?: Maybe<AccountTokenSnapshotLog>;
  accountTokenSnapshotLogs: Array<AccountTokenSnapshotLog>;
  tokenStatistic?: Maybe<TokenStatistic>;
  tokenStatistics: Array<TokenStatistic>;
  tokenStatisticLog?: Maybe<TokenStatisticLog>;
  tokenStatisticLogs: Array<TokenStatisticLog>;
  sfmeta?: Maybe<SFMeta>;
  sfmetas: Array<SFMeta>;
  event?: Maybe<Event>;
  events: Array<Event>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type QueryflowUpdatedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryflowUpdatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FlowUpdatedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FlowUpdatedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryflowOperatorUpdatedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryflowOperatorUpdatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FlowOperatorUpdatedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FlowOperatorUpdatedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryindexCreatedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryindexCreatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<IndexCreatedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<IndexCreatedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryindexDistributionClaimedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryindexDistributionClaimedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<IndexDistributionClaimedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<IndexDistributionClaimedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryindexUpdatedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryindexUpdatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<IndexUpdatedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<IndexUpdatedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryindexSubscribedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryindexSubscribedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<IndexSubscribedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<IndexSubscribedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryindexUnitsUpdatedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryindexUnitsUpdatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<IndexUnitsUpdatedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<IndexUnitsUpdatedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryindexUnsubscribedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryindexUnsubscribedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<IndexUnsubscribedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<IndexUnsubscribedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerysubscriptionApprovedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerysubscriptionApprovedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<SubscriptionApprovedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SubscriptionApprovedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerysubscriptionDistributionClaimedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerysubscriptionDistributionClaimedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<SubscriptionDistributionClaimedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SubscriptionDistributionClaimedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerysubscriptionRevokedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerysubscriptionRevokedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<SubscriptionRevokedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SubscriptionRevokedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerysubscriptionUnitsUpdatedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerysubscriptionUnitsUpdatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<SubscriptionUnitsUpdatedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SubscriptionUnitsUpdatedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypoolCreatedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypoolCreatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PoolCreatedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PoolCreatedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypoolConnectionUpdatedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypoolConnectionUpdatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PoolConnectionUpdatedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PoolConnectionUpdatedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerybufferAdjustedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerybufferAdjustedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BufferAdjustedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<BufferAdjustedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryinstantDistributionUpdatedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryinstantDistributionUpdatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<InstantDistributionUpdatedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<InstantDistributionUpdatedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryflowDistributionUpdatedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryflowDistributionUpdatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FlowDistributionUpdatedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FlowDistributionUpdatedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydistributionClaimedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydistributionClaimedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<DistributionClaimedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DistributionClaimedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymemberUnitsUpdatedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymemberUnitsUpdatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MemberUnitsUpdatedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MemberUnitsUpdatedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryagreementClassRegisteredEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryagreementClassRegisteredEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AgreementClassRegisteredEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AgreementClassRegisteredEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryagreementClassUpdatedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryagreementClassUpdatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AgreementClassUpdatedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AgreementClassUpdatedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryappRegisteredEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryappRegisteredEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AppRegisteredEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AppRegisteredEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerygovernanceReplacedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerygovernanceReplacedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<GovernanceReplacedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<GovernanceReplacedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryjailEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryjailEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<JailEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<JailEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerysuperTokenFactoryUpdatedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerysuperTokenFactoryUpdatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<SuperTokenFactoryUpdatedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SuperTokenFactoryUpdatedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerysuperTokenLogicUpdatedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerysuperTokenLogicUpdatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<SuperTokenLogicUpdatedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SuperTokenLogicUpdatedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryroleAdminChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryroleAdminChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RoleAdminChangedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RoleAdminChangedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryroleGrantedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryroleGrantedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RoleGrantedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RoleGrantedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryroleRevokedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryroleRevokedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RoleRevokedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RoleRevokedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerysetEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerysetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<SetEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SetEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querycfav1LiquidationPeriodChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querycfav1LiquidationPeriodChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CFAv1LiquidationPeriodChangedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<CFAv1LiquidationPeriodChangedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryconfigChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryconfigChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ConfigChangedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ConfigChangedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryrewardAddressChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryrewardAddressChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RewardAddressChangedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RewardAddressChangedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypppconfigurationChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypppconfigurationChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PPPConfigurationChangedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PPPConfigurationChangedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerysuperTokenMinimumDepositChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerysuperTokenMinimumDepositChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<SuperTokenMinimumDepositChangedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SuperTokenMinimumDepositChangedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytrustedForwarderChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytrustedForwarderChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TrustedForwarderChangedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TrustedForwarderChangedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryagreementLiquidatedByEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryagreementLiquidatedByEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AgreementLiquidatedByEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AgreementLiquidatedByEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryagreementLiquidatedV2EventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryagreementLiquidatedV2EventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AgreementLiquidatedV2Event_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AgreementLiquidatedV2Event_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryburnedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryburnedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BurnedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<BurnedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymintedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymintedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MintedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MintedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerysentEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerysentEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<SentEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SentEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytransferEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytransferEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TransferEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TransferEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokenDowngradedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokenDowngradedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TokenDowngradedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenDowngradedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokenUpgradedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokenUpgradedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TokenUpgradedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenUpgradedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryapprovalEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryapprovalEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ApprovalEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ApprovalEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycustomSuperTokenCreatedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycustomSuperTokenCreatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CustomSuperTokenCreatedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<CustomSuperTokenCreatedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerysuperTokenCreatedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerysuperTokenCreatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<SuperTokenCreatedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SuperTokenCreatedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerysuperTokenLogicCreatedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerysuperTokenLogicCreatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<SuperTokenLogicCreatedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SuperTokenLogicCreatedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerynewPICEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerynewPICEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<NewPICEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<NewPICEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryexitRateChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryexitRateChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ExitRateChangedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ExitRateChangedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerybondIncreasedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerybondIncreasedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BondIncreasedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<BondIncreasedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryaccountArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryaccountsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Account_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Account_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypoolArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypoolsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pool_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Pool_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypoolMemberArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypoolMembersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PoolMember_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PoolMember_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypoolDistributorArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypoolDistributorsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PoolDistributor_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PoolDistributor_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryindexArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryindexesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Index_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Index_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryindexSubscriptionArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryindexSubscriptionsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<IndexSubscription_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<IndexSubscription_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerystreamArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerystreamsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Stream_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Stream_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryflowOperatorArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryflowOperatorsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FlowOperator_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FlowOperator_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerystreamPeriodArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerystreamPeriodsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<StreamPeriod_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<StreamPeriod_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokenGovernanceConfigArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokenGovernanceConfigsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TokenGovernanceConfig_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenGovernanceConfig_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerystreamRevisionArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerystreamRevisionsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<StreamRevision_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<StreamRevision_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokenArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokensArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Token_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Token_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryresolverEntryArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryresolverEntriesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ResolverEntry_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ResolverEntry_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryaccountTokenSnapshotArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryaccountTokenSnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AccountTokenSnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AccountTokenSnapshot_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryaccountTokenSnapshotLogArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryaccountTokenSnapshotLogsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AccountTokenSnapshotLog_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AccountTokenSnapshotLog_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokenStatisticArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokenStatisticsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TokenStatistic_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenStatistic_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokenStatisticLogArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokenStatisticLogsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TokenStatisticLog_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenStatisticLog_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerysfmetaArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerysfmetasArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<SFMeta_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SFMeta_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryeventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryeventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Event_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Event_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Query_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type ResolverEntry = {
  /**
   * ID: the keccak256 hash of the set name
   *
   */
  id: Scalars['ID']['output'];
  createdAtTimestamp: Scalars['BigInt']['output'];
  createdAtBlockNumber: Scalars['BigInt']['output'];
  updatedAtTimestamp: Scalars['BigInt']['output'];
  updatedAtBlockNumber: Scalars['BigInt']['output'];
  targetAddress: Scalars['Bytes']['output'];
  isToken: Scalars['Boolean']['output'];
  isListed: Scalars['Boolean']['output'];
  setEvents: Array<SetEvent>;
};


export type ResolverEntrysetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<SetEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SetEvent_filter>;
};

export type ResolverEntry_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  createdAtTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAtBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAtTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAtBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  targetAddress?: InputMaybe<Scalars['Bytes']['input']>;
  targetAddress_not?: InputMaybe<Scalars['Bytes']['input']>;
  targetAddress_gt?: InputMaybe<Scalars['Bytes']['input']>;
  targetAddress_lt?: InputMaybe<Scalars['Bytes']['input']>;
  targetAddress_gte?: InputMaybe<Scalars['Bytes']['input']>;
  targetAddress_lte?: InputMaybe<Scalars['Bytes']['input']>;
  targetAddress_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  targetAddress_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  targetAddress_contains?: InputMaybe<Scalars['Bytes']['input']>;
  targetAddress_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  isToken?: InputMaybe<Scalars['Boolean']['input']>;
  isToken_not?: InputMaybe<Scalars['Boolean']['input']>;
  isToken_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isToken_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isListed?: InputMaybe<Scalars['Boolean']['input']>;
  isListed_not?: InputMaybe<Scalars['Boolean']['input']>;
  isListed_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isListed_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  setEvents_?: InputMaybe<SetEvent_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ResolverEntry_filter>>>;
  or?: InputMaybe<Array<InputMaybe<ResolverEntry_filter>>>;
};

export type ResolverEntry_orderBy =
  | 'id'
  | 'createdAtTimestamp'
  | 'createdAtBlockNumber'
  | 'updatedAtTimestamp'
  | 'updatedAtBlockNumber'
  | 'targetAddress'
  | 'isToken'
  | 'isListed'
  | 'setEvents';

export type RewardAddressChangedEvent = Event & {
  id: Scalars['ID']['output'];
  transactionHash: Scalars['Bytes']['output'];
  gasPrice: Scalars['BigInt']['output'];
  gasUsed?: Maybe<Scalars['BigInt']['output']>;
  timestamp: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  /**
   * The address of the governance contract the event was emitted from.
   *
   */
  governanceAddress: Scalars['Bytes']['output'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `governanceAddress`
   * addresses[1] = `host`
   * addresses[2] = `superToken`
   * addresses[3] = `rewardAddress`
   *
   */
  addresses: Array<Scalars['Bytes']['output']>;
  blockNumber: Scalars['BigInt']['output'];
  logIndex: Scalars['BigInt']['output'];
  order: Scalars['BigInt']['output'];
  host: Scalars['Bytes']['output'];
  superToken: Scalars['Bytes']['output'];
  isKeySet: Scalars['Boolean']['output'];
  rewardAddress: Scalars['Bytes']['output'];
};

export type RewardAddressChangedEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  governanceAddress?: InputMaybe<Scalars['Bytes']['input']>;
  governanceAddress_not?: InputMaybe<Scalars['Bytes']['input']>;
  governanceAddress_gt?: InputMaybe<Scalars['Bytes']['input']>;
  governanceAddress_lt?: InputMaybe<Scalars['Bytes']['input']>;
  governanceAddress_gte?: InputMaybe<Scalars['Bytes']['input']>;
  governanceAddress_lte?: InputMaybe<Scalars['Bytes']['input']>;
  governanceAddress_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  governanceAddress_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  governanceAddress_contains?: InputMaybe<Scalars['Bytes']['input']>;
  governanceAddress_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order?: InputMaybe<Scalars['BigInt']['input']>;
  order_not?: InputMaybe<Scalars['BigInt']['input']>;
  order_gt?: InputMaybe<Scalars['BigInt']['input']>;
  order_lt?: InputMaybe<Scalars['BigInt']['input']>;
  order_gte?: InputMaybe<Scalars['BigInt']['input']>;
  order_lte?: InputMaybe<Scalars['BigInt']['input']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  host?: InputMaybe<Scalars['Bytes']['input']>;
  host_not?: InputMaybe<Scalars['Bytes']['input']>;
  host_gt?: InputMaybe<Scalars['Bytes']['input']>;
  host_lt?: InputMaybe<Scalars['Bytes']['input']>;
  host_gte?: InputMaybe<Scalars['Bytes']['input']>;
  host_lte?: InputMaybe<Scalars['Bytes']['input']>;
  host_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  host_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  host_contains?: InputMaybe<Scalars['Bytes']['input']>;
  host_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  superToken?: InputMaybe<Scalars['Bytes']['input']>;
  superToken_not?: InputMaybe<Scalars['Bytes']['input']>;
  superToken_gt?: InputMaybe<Scalars['Bytes']['input']>;
  superToken_lt?: InputMaybe<Scalars['Bytes']['input']>;
  superToken_gte?: InputMaybe<Scalars['Bytes']['input']>;
  superToken_lte?: InputMaybe<Scalars['Bytes']['input']>;
  superToken_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  superToken_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  superToken_contains?: InputMaybe<Scalars['Bytes']['input']>;
  superToken_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  isKeySet?: InputMaybe<Scalars['Boolean']['input']>;
  isKeySet_not?: InputMaybe<Scalars['Boolean']['input']>;
  isKeySet_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isKeySet_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  rewardAddress?: InputMaybe<Scalars['Bytes']['input']>;
  rewardAddress_not?: InputMaybe<Scalars['Bytes']['input']>;
  rewardAddress_gt?: InputMaybe<Scalars['Bytes']['input']>;
  rewardAddress_lt?: InputMaybe<Scalars['Bytes']['input']>;
  rewardAddress_gte?: InputMaybe<Scalars['Bytes']['input']>;
  rewardAddress_lte?: InputMaybe<Scalars['Bytes']['input']>;
  rewardAddress_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  rewardAddress_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  rewardAddress_contains?: InputMaybe<Scalars['Bytes']['input']>;
  rewardAddress_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<RewardAddressChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<RewardAddressChangedEvent_filter>>>;
};

export type RewardAddressChangedEvent_orderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'governanceAddress'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'host'
  | 'superToken'
  | 'isKeySet'
  | 'rewardAddress';

export type RoleAdminChangedEvent = Event & {
  id: Scalars['ID']['output'];
  transactionHash: Scalars['Bytes']['output'];
  gasPrice: Scalars['BigInt']['output'];
  gasUsed?: Maybe<Scalars['BigInt']['output']>;
  timestamp: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `previousAdminRole`
   * addresses[1] = `newAdminRole`
   *
   */
  addresses: Array<Scalars['Bytes']['output']>;
  blockNumber: Scalars['BigInt']['output'];
  logIndex: Scalars['BigInt']['output'];
  order: Scalars['BigInt']['output'];
  role: Scalars['Bytes']['output'];
  previousAdminRole: Scalars['Bytes']['output'];
  newAdminRole: Scalars['Bytes']['output'];
};

export type RoleAdminChangedEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order?: InputMaybe<Scalars['BigInt']['input']>;
  order_not?: InputMaybe<Scalars['BigInt']['input']>;
  order_gt?: InputMaybe<Scalars['BigInt']['input']>;
  order_lt?: InputMaybe<Scalars['BigInt']['input']>;
  order_gte?: InputMaybe<Scalars['BigInt']['input']>;
  order_lte?: InputMaybe<Scalars['BigInt']['input']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  role?: InputMaybe<Scalars['Bytes']['input']>;
  role_not?: InputMaybe<Scalars['Bytes']['input']>;
  role_gt?: InputMaybe<Scalars['Bytes']['input']>;
  role_lt?: InputMaybe<Scalars['Bytes']['input']>;
  role_gte?: InputMaybe<Scalars['Bytes']['input']>;
  role_lte?: InputMaybe<Scalars['Bytes']['input']>;
  role_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  role_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  role_contains?: InputMaybe<Scalars['Bytes']['input']>;
  role_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  previousAdminRole?: InputMaybe<Scalars['Bytes']['input']>;
  previousAdminRole_not?: InputMaybe<Scalars['Bytes']['input']>;
  previousAdminRole_gt?: InputMaybe<Scalars['Bytes']['input']>;
  previousAdminRole_lt?: InputMaybe<Scalars['Bytes']['input']>;
  previousAdminRole_gte?: InputMaybe<Scalars['Bytes']['input']>;
  previousAdminRole_lte?: InputMaybe<Scalars['Bytes']['input']>;
  previousAdminRole_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  previousAdminRole_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  previousAdminRole_contains?: InputMaybe<Scalars['Bytes']['input']>;
  previousAdminRole_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  newAdminRole?: InputMaybe<Scalars['Bytes']['input']>;
  newAdminRole_not?: InputMaybe<Scalars['Bytes']['input']>;
  newAdminRole_gt?: InputMaybe<Scalars['Bytes']['input']>;
  newAdminRole_lt?: InputMaybe<Scalars['Bytes']['input']>;
  newAdminRole_gte?: InputMaybe<Scalars['Bytes']['input']>;
  newAdminRole_lte?: InputMaybe<Scalars['Bytes']['input']>;
  newAdminRole_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  newAdminRole_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  newAdminRole_contains?: InputMaybe<Scalars['Bytes']['input']>;
  newAdminRole_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<RoleAdminChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<RoleAdminChangedEvent_filter>>>;
};

export type RoleAdminChangedEvent_orderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'role'
  | 'previousAdminRole'
  | 'newAdminRole';

export type RoleGrantedEvent = Event & {
  id: Scalars['ID']['output'];
  transactionHash: Scalars['Bytes']['output'];
  gasPrice: Scalars['BigInt']['output'];
  gasUsed?: Maybe<Scalars['BigInt']['output']>;
  timestamp: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `account`
   * addresses[1] = `sender`
   *
   */
  addresses: Array<Scalars['Bytes']['output']>;
  blockNumber: Scalars['BigInt']['output'];
  logIndex: Scalars['BigInt']['output'];
  order: Scalars['BigInt']['output'];
  role: Scalars['Bytes']['output'];
  account: Scalars['Bytes']['output'];
  sender: Scalars['Bytes']['output'];
};

export type RoleGrantedEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order?: InputMaybe<Scalars['BigInt']['input']>;
  order_not?: InputMaybe<Scalars['BigInt']['input']>;
  order_gt?: InputMaybe<Scalars['BigInt']['input']>;
  order_lt?: InputMaybe<Scalars['BigInt']['input']>;
  order_gte?: InputMaybe<Scalars['BigInt']['input']>;
  order_lte?: InputMaybe<Scalars['BigInt']['input']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  role?: InputMaybe<Scalars['Bytes']['input']>;
  role_not?: InputMaybe<Scalars['Bytes']['input']>;
  role_gt?: InputMaybe<Scalars['Bytes']['input']>;
  role_lt?: InputMaybe<Scalars['Bytes']['input']>;
  role_gte?: InputMaybe<Scalars['Bytes']['input']>;
  role_lte?: InputMaybe<Scalars['Bytes']['input']>;
  role_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  role_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  role_contains?: InputMaybe<Scalars['Bytes']['input']>;
  role_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  account?: InputMaybe<Scalars['Bytes']['input']>;
  account_not?: InputMaybe<Scalars['Bytes']['input']>;
  account_gt?: InputMaybe<Scalars['Bytes']['input']>;
  account_lt?: InputMaybe<Scalars['Bytes']['input']>;
  account_gte?: InputMaybe<Scalars['Bytes']['input']>;
  account_lte?: InputMaybe<Scalars['Bytes']['input']>;
  account_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  account_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  account_contains?: InputMaybe<Scalars['Bytes']['input']>;
  account_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  sender?: InputMaybe<Scalars['Bytes']['input']>;
  sender_not?: InputMaybe<Scalars['Bytes']['input']>;
  sender_gt?: InputMaybe<Scalars['Bytes']['input']>;
  sender_lt?: InputMaybe<Scalars['Bytes']['input']>;
  sender_gte?: InputMaybe<Scalars['Bytes']['input']>;
  sender_lte?: InputMaybe<Scalars['Bytes']['input']>;
  sender_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  sender_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  sender_contains?: InputMaybe<Scalars['Bytes']['input']>;
  sender_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<RoleGrantedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<RoleGrantedEvent_filter>>>;
};

export type RoleGrantedEvent_orderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'role'
  | 'account'
  | 'sender';

export type RoleRevokedEvent = Event & {
  id: Scalars['ID']['output'];
  transactionHash: Scalars['Bytes']['output'];
  gasPrice: Scalars['BigInt']['output'];
  gasUsed?: Maybe<Scalars['BigInt']['output']>;
  timestamp: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `account`
   * addresses[1] = `sender`
   *
   */
  addresses: Array<Scalars['Bytes']['output']>;
  blockNumber: Scalars['BigInt']['output'];
  logIndex: Scalars['BigInt']['output'];
  order: Scalars['BigInt']['output'];
  role: Scalars['Bytes']['output'];
  account: Scalars['Bytes']['output'];
  sender: Scalars['Bytes']['output'];
};

export type RoleRevokedEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order?: InputMaybe<Scalars['BigInt']['input']>;
  order_not?: InputMaybe<Scalars['BigInt']['input']>;
  order_gt?: InputMaybe<Scalars['BigInt']['input']>;
  order_lt?: InputMaybe<Scalars['BigInt']['input']>;
  order_gte?: InputMaybe<Scalars['BigInt']['input']>;
  order_lte?: InputMaybe<Scalars['BigInt']['input']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  role?: InputMaybe<Scalars['Bytes']['input']>;
  role_not?: InputMaybe<Scalars['Bytes']['input']>;
  role_gt?: InputMaybe<Scalars['Bytes']['input']>;
  role_lt?: InputMaybe<Scalars['Bytes']['input']>;
  role_gte?: InputMaybe<Scalars['Bytes']['input']>;
  role_lte?: InputMaybe<Scalars['Bytes']['input']>;
  role_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  role_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  role_contains?: InputMaybe<Scalars['Bytes']['input']>;
  role_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  account?: InputMaybe<Scalars['Bytes']['input']>;
  account_not?: InputMaybe<Scalars['Bytes']['input']>;
  account_gt?: InputMaybe<Scalars['Bytes']['input']>;
  account_lt?: InputMaybe<Scalars['Bytes']['input']>;
  account_gte?: InputMaybe<Scalars['Bytes']['input']>;
  account_lte?: InputMaybe<Scalars['Bytes']['input']>;
  account_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  account_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  account_contains?: InputMaybe<Scalars['Bytes']['input']>;
  account_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  sender?: InputMaybe<Scalars['Bytes']['input']>;
  sender_not?: InputMaybe<Scalars['Bytes']['input']>;
  sender_gt?: InputMaybe<Scalars['Bytes']['input']>;
  sender_lt?: InputMaybe<Scalars['Bytes']['input']>;
  sender_gte?: InputMaybe<Scalars['Bytes']['input']>;
  sender_lte?: InputMaybe<Scalars['Bytes']['input']>;
  sender_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  sender_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  sender_contains?: InputMaybe<Scalars['Bytes']['input']>;
  sender_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<RoleRevokedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<RoleRevokedEvent_filter>>>;
};

export type RoleRevokedEvent_orderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'role'
  | 'account'
  | 'sender';

export type SFMeta = {
  /**
   * The id is the commit hash.
   *
   */
  id: Scalars['ID']['output'];
  timestamp: Scalars['BigInt']['output'];
  blockNumber: Scalars['BigInt']['output'];
  /**
   * Whether the branch is feature/dev/v1.
   *
   */
  configuration: Scalars['String']['output'];
  /**
   * The branch the current deployment is coming from.
   *
   */
  branch: Scalars['String']['output'];
  /**
   * The subgraph package.json semver version of the current deployment.
   *
   */
  packageVersion: Scalars['String']['output'];
};

export type SFMeta_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  configuration?: InputMaybe<Scalars['String']['input']>;
  configuration_not?: InputMaybe<Scalars['String']['input']>;
  configuration_gt?: InputMaybe<Scalars['String']['input']>;
  configuration_lt?: InputMaybe<Scalars['String']['input']>;
  configuration_gte?: InputMaybe<Scalars['String']['input']>;
  configuration_lte?: InputMaybe<Scalars['String']['input']>;
  configuration_in?: InputMaybe<Array<Scalars['String']['input']>>;
  configuration_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  configuration_contains?: InputMaybe<Scalars['String']['input']>;
  configuration_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  configuration_not_contains?: InputMaybe<Scalars['String']['input']>;
  configuration_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  configuration_starts_with?: InputMaybe<Scalars['String']['input']>;
  configuration_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  configuration_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  configuration_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  configuration_ends_with?: InputMaybe<Scalars['String']['input']>;
  configuration_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  configuration_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  configuration_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  branch?: InputMaybe<Scalars['String']['input']>;
  branch_not?: InputMaybe<Scalars['String']['input']>;
  branch_gt?: InputMaybe<Scalars['String']['input']>;
  branch_lt?: InputMaybe<Scalars['String']['input']>;
  branch_gte?: InputMaybe<Scalars['String']['input']>;
  branch_lte?: InputMaybe<Scalars['String']['input']>;
  branch_in?: InputMaybe<Array<Scalars['String']['input']>>;
  branch_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  branch_contains?: InputMaybe<Scalars['String']['input']>;
  branch_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  branch_not_contains?: InputMaybe<Scalars['String']['input']>;
  branch_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  branch_starts_with?: InputMaybe<Scalars['String']['input']>;
  branch_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  branch_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  branch_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  branch_ends_with?: InputMaybe<Scalars['String']['input']>;
  branch_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  branch_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  branch_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  packageVersion?: InputMaybe<Scalars['String']['input']>;
  packageVersion_not?: InputMaybe<Scalars['String']['input']>;
  packageVersion_gt?: InputMaybe<Scalars['String']['input']>;
  packageVersion_lt?: InputMaybe<Scalars['String']['input']>;
  packageVersion_gte?: InputMaybe<Scalars['String']['input']>;
  packageVersion_lte?: InputMaybe<Scalars['String']['input']>;
  packageVersion_in?: InputMaybe<Array<Scalars['String']['input']>>;
  packageVersion_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  packageVersion_contains?: InputMaybe<Scalars['String']['input']>;
  packageVersion_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  packageVersion_not_contains?: InputMaybe<Scalars['String']['input']>;
  packageVersion_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  packageVersion_starts_with?: InputMaybe<Scalars['String']['input']>;
  packageVersion_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  packageVersion_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  packageVersion_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  packageVersion_ends_with?: InputMaybe<Scalars['String']['input']>;
  packageVersion_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  packageVersion_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  packageVersion_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SFMeta_filter>>>;
  or?: InputMaybe<Array<InputMaybe<SFMeta_filter>>>;
};

export type SFMeta_orderBy =
  | 'id'
  | 'timestamp'
  | 'blockNumber'
  | 'configuration'
  | 'branch'
  | 'packageVersion';

/**
 * WARNING: This event has been deprecated. It is not indexed anymore. It's kept in schema to avoid breakage in the schema.
 *
 */
export type SentEvent = Event & {
  id: Scalars['ID']['output'];
  transactionHash: Scalars['Bytes']['output'];
  gasPrice: Scalars['BigInt']['output'];
  gasUsed?: Maybe<Scalars['BigInt']['output']>;
  timestamp: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   * addresses[1] = `operator`
   * addresses[2] = `from`
   *
   */
  addresses: Array<Scalars['Bytes']['output']>;
  blockNumber: Scalars['BigInt']['output'];
  logIndex: Scalars['BigInt']['output'];
  order: Scalars['BigInt']['output'];
  operator: Scalars['Bytes']['output'];
  from: Scalars['Bytes']['output'];
  to: Scalars['Bytes']['output'];
  token: Scalars['Bytes']['output'];
  amount: Scalars['BigInt']['output'];
  data: Scalars['Bytes']['output'];
  operatorData: Scalars['Bytes']['output'];
};

export type SentEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order?: InputMaybe<Scalars['BigInt']['input']>;
  order_not?: InputMaybe<Scalars['BigInt']['input']>;
  order_gt?: InputMaybe<Scalars['BigInt']['input']>;
  order_lt?: InputMaybe<Scalars['BigInt']['input']>;
  order_gte?: InputMaybe<Scalars['BigInt']['input']>;
  order_lte?: InputMaybe<Scalars['BigInt']['input']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  operator?: InputMaybe<Scalars['Bytes']['input']>;
  operator_not?: InputMaybe<Scalars['Bytes']['input']>;
  operator_gt?: InputMaybe<Scalars['Bytes']['input']>;
  operator_lt?: InputMaybe<Scalars['Bytes']['input']>;
  operator_gte?: InputMaybe<Scalars['Bytes']['input']>;
  operator_lte?: InputMaybe<Scalars['Bytes']['input']>;
  operator_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  operator_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  operator_contains?: InputMaybe<Scalars['Bytes']['input']>;
  operator_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  from?: InputMaybe<Scalars['Bytes']['input']>;
  from_not?: InputMaybe<Scalars['Bytes']['input']>;
  from_gt?: InputMaybe<Scalars['Bytes']['input']>;
  from_lt?: InputMaybe<Scalars['Bytes']['input']>;
  from_gte?: InputMaybe<Scalars['Bytes']['input']>;
  from_lte?: InputMaybe<Scalars['Bytes']['input']>;
  from_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  from_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  from_contains?: InputMaybe<Scalars['Bytes']['input']>;
  from_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  to?: InputMaybe<Scalars['Bytes']['input']>;
  to_not?: InputMaybe<Scalars['Bytes']['input']>;
  to_gt?: InputMaybe<Scalars['Bytes']['input']>;
  to_lt?: InputMaybe<Scalars['Bytes']['input']>;
  to_gte?: InputMaybe<Scalars['Bytes']['input']>;
  to_lte?: InputMaybe<Scalars['Bytes']['input']>;
  to_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  to_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  to_contains?: InputMaybe<Scalars['Bytes']['input']>;
  to_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token?: InputMaybe<Scalars['Bytes']['input']>;
  token_not?: InputMaybe<Scalars['Bytes']['input']>;
  token_gt?: InputMaybe<Scalars['Bytes']['input']>;
  token_lt?: InputMaybe<Scalars['Bytes']['input']>;
  token_gte?: InputMaybe<Scalars['Bytes']['input']>;
  token_lte?: InputMaybe<Scalars['Bytes']['input']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  data?: InputMaybe<Scalars['Bytes']['input']>;
  data_not?: InputMaybe<Scalars['Bytes']['input']>;
  data_gt?: InputMaybe<Scalars['Bytes']['input']>;
  data_lt?: InputMaybe<Scalars['Bytes']['input']>;
  data_gte?: InputMaybe<Scalars['Bytes']['input']>;
  data_lte?: InputMaybe<Scalars['Bytes']['input']>;
  data_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  data_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  data_contains?: InputMaybe<Scalars['Bytes']['input']>;
  data_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  operatorData?: InputMaybe<Scalars['Bytes']['input']>;
  operatorData_not?: InputMaybe<Scalars['Bytes']['input']>;
  operatorData_gt?: InputMaybe<Scalars['Bytes']['input']>;
  operatorData_lt?: InputMaybe<Scalars['Bytes']['input']>;
  operatorData_gte?: InputMaybe<Scalars['Bytes']['input']>;
  operatorData_lte?: InputMaybe<Scalars['Bytes']['input']>;
  operatorData_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  operatorData_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  operatorData_contains?: InputMaybe<Scalars['Bytes']['input']>;
  operatorData_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SentEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<SentEvent_filter>>>;
};

export type SentEvent_orderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'operator'
  | 'from'
  | 'to'
  | 'token'
  | 'amount'
  | 'data'
  | 'operatorData';

export type SetEvent = Event & {
  id: Scalars['ID']['output'];
  transactionHash: Scalars['Bytes']['output'];
  gasPrice: Scalars['BigInt']['output'];
  gasUsed?: Maybe<Scalars['BigInt']['output']>;
  timestamp: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  /**
   * Empty addresses array.
   *
   */
  addresses: Array<Scalars['Bytes']['output']>;
  blockNumber: Scalars['BigInt']['output'];
  logIndex: Scalars['BigInt']['output'];
  order: Scalars['BigInt']['output'];
  /**
   * Because the name property is indexed, the
   * returned value will be a keccak256 hash
   * of the string.
   *
   */
  hashedName: Scalars['Bytes']['output'];
  target: Scalars['Bytes']['output'];
  resolverEntry: ResolverEntry;
};

export type SetEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order?: InputMaybe<Scalars['BigInt']['input']>;
  order_not?: InputMaybe<Scalars['BigInt']['input']>;
  order_gt?: InputMaybe<Scalars['BigInt']['input']>;
  order_lt?: InputMaybe<Scalars['BigInt']['input']>;
  order_gte?: InputMaybe<Scalars['BigInt']['input']>;
  order_lte?: InputMaybe<Scalars['BigInt']['input']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  hashedName?: InputMaybe<Scalars['Bytes']['input']>;
  hashedName_not?: InputMaybe<Scalars['Bytes']['input']>;
  hashedName_gt?: InputMaybe<Scalars['Bytes']['input']>;
  hashedName_lt?: InputMaybe<Scalars['Bytes']['input']>;
  hashedName_gte?: InputMaybe<Scalars['Bytes']['input']>;
  hashedName_lte?: InputMaybe<Scalars['Bytes']['input']>;
  hashedName_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  hashedName_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  hashedName_contains?: InputMaybe<Scalars['Bytes']['input']>;
  hashedName_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  target?: InputMaybe<Scalars['Bytes']['input']>;
  target_not?: InputMaybe<Scalars['Bytes']['input']>;
  target_gt?: InputMaybe<Scalars['Bytes']['input']>;
  target_lt?: InputMaybe<Scalars['Bytes']['input']>;
  target_gte?: InputMaybe<Scalars['Bytes']['input']>;
  target_lte?: InputMaybe<Scalars['Bytes']['input']>;
  target_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  target_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  target_contains?: InputMaybe<Scalars['Bytes']['input']>;
  target_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  resolverEntry?: InputMaybe<Scalars['String']['input']>;
  resolverEntry_not?: InputMaybe<Scalars['String']['input']>;
  resolverEntry_gt?: InputMaybe<Scalars['String']['input']>;
  resolverEntry_lt?: InputMaybe<Scalars['String']['input']>;
  resolverEntry_gte?: InputMaybe<Scalars['String']['input']>;
  resolverEntry_lte?: InputMaybe<Scalars['String']['input']>;
  resolverEntry_in?: InputMaybe<Array<Scalars['String']['input']>>;
  resolverEntry_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  resolverEntry_contains?: InputMaybe<Scalars['String']['input']>;
  resolverEntry_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  resolverEntry_not_contains?: InputMaybe<Scalars['String']['input']>;
  resolverEntry_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  resolverEntry_starts_with?: InputMaybe<Scalars['String']['input']>;
  resolverEntry_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  resolverEntry_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  resolverEntry_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  resolverEntry_ends_with?: InputMaybe<Scalars['String']['input']>;
  resolverEntry_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  resolverEntry_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  resolverEntry_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  resolverEntry_?: InputMaybe<ResolverEntry_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SetEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<SetEvent_filter>>>;
};

export type SetEvent_orderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'hashedName'
  | 'target'
  | 'resolverEntry'
  | 'resolverEntry__id'
  | 'resolverEntry__createdAtTimestamp'
  | 'resolverEntry__createdAtBlockNumber'
  | 'resolverEntry__updatedAtTimestamp'
  | 'resolverEntry__updatedAtBlockNumber'
  | 'resolverEntry__targetAddress'
  | 'resolverEntry__isToken'
  | 'resolverEntry__isListed';

/**
 * Stream: A higher order entity that represents the lifetime of a stream between a `sender` and a `receiver`.
 * A account can start a stream, update the flow rate, but when they close it, it is considered "dead".
 * The next stream you create with the same `sender` and `receiver` will create a new stream entity.
 * Therefore, multiple stream entities can be created between the same `sender` and `receiver`.
 *
 */
export type Stream = {
  /**
   * ID composed of: senderAddress-receiverAddress-tokenAddress-revisionIndex
   *
   */
  id: Scalars['ID']['output'];
  createdAtTimestamp: Scalars['BigInt']['output'];
  createdAtBlockNumber: Scalars['BigInt']['output'];
  updatedAtTimestamp: Scalars['BigInt']['output'];
  updatedAtBlockNumber: Scalars['BigInt']['output'];
  currentFlowRate: Scalars['BigInt']['output'];
  deposit: Scalars['BigInt']['output'];
  /**
   * The amount streamed until `updatedAtTimestamp`/`updatedAtBlock`.
   * The formula to get the current streamed amount is:
   * `streamedUntilUpdatedAt + ((currentTime in seconds) - updatedAtTimestamp) * currentFlowRate`.
   *
   */
  streamedUntilUpdatedAt: Scalars['BigInt']['output'];
  token: Token;
  sender: Account;
  receiver: Account;
  /**
   * The `userData` stored on the Stream is the last `userData` that was set in a `FlowUpdatedEvent`,
   * for this particular stream. To see the historical `userData` for this stream, you can query the `flowUpdatedEvents` field.
   *
   */
  userData: Scalars['Bytes']['output'];
  flowUpdatedEvents: Array<FlowUpdatedEvent>;
  streamPeriods: Array<StreamPeriod>;
};


/**
 * Stream: A higher order entity that represents the lifetime of a stream between a `sender` and a `receiver`.
 * A account can start a stream, update the flow rate, but when they close it, it is considered "dead".
 * The next stream you create with the same `sender` and `receiver` will create a new stream entity.
 * Therefore, multiple stream entities can be created between the same `sender` and `receiver`.
 *
 */
export type StreamflowUpdatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FlowUpdatedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FlowUpdatedEvent_filter>;
};


/**
 * Stream: A higher order entity that represents the lifetime of a stream between a `sender` and a `receiver`.
 * A account can start a stream, update the flow rate, but when they close it, it is considered "dead".
 * The next stream you create with the same `sender` and `receiver` will create a new stream entity.
 * Therefore, multiple stream entities can be created between the same `sender` and `receiver`.
 *
 */
export type StreamstreamPeriodsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<StreamPeriod_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<StreamPeriod_filter>;
};

/**
 * StreamPeriod: A higher order entity that represents a period of time in a Stream with a constant flowRate.
 *
 */
export type StreamPeriod = {
  /**
   * ID composed of: streamId - periodRevisionIndex
   *
   */
  id: Scalars['ID']['output'];
  stream: Stream;
  sender: Account;
  receiver: Account;
  token: Token;
  flowRate: Scalars['BigInt']['output'];
  deposit: Scalars['BigInt']['output'];
  startedAtTimestamp: Scalars['BigInt']['output'];
  startedAtBlockNumber: Scalars['BigInt']['output'];
  startedAtEvent: FlowUpdatedEvent;
  /**
   * Following values are null until the StreamPeriod is terminated
   *
   */
  stoppedAtTimestamp?: Maybe<Scalars['BigInt']['output']>;
  stoppedAtBlockNumber?: Maybe<Scalars['BigInt']['output']>;
  stoppedAtEvent?: Maybe<FlowUpdatedEvent>;
  totalAmountStreamed?: Maybe<Scalars['BigInt']['output']>;
};

export type StreamPeriod_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  stream?: InputMaybe<Scalars['String']['input']>;
  stream_not?: InputMaybe<Scalars['String']['input']>;
  stream_gt?: InputMaybe<Scalars['String']['input']>;
  stream_lt?: InputMaybe<Scalars['String']['input']>;
  stream_gte?: InputMaybe<Scalars['String']['input']>;
  stream_lte?: InputMaybe<Scalars['String']['input']>;
  stream_in?: InputMaybe<Array<Scalars['String']['input']>>;
  stream_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  stream_contains?: InputMaybe<Scalars['String']['input']>;
  stream_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  stream_not_contains?: InputMaybe<Scalars['String']['input']>;
  stream_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  stream_starts_with?: InputMaybe<Scalars['String']['input']>;
  stream_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  stream_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  stream_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  stream_ends_with?: InputMaybe<Scalars['String']['input']>;
  stream_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  stream_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  stream_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  stream_?: InputMaybe<Stream_filter>;
  sender?: InputMaybe<Scalars['String']['input']>;
  sender_not?: InputMaybe<Scalars['String']['input']>;
  sender_gt?: InputMaybe<Scalars['String']['input']>;
  sender_lt?: InputMaybe<Scalars['String']['input']>;
  sender_gte?: InputMaybe<Scalars['String']['input']>;
  sender_lte?: InputMaybe<Scalars['String']['input']>;
  sender_in?: InputMaybe<Array<Scalars['String']['input']>>;
  sender_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  sender_contains?: InputMaybe<Scalars['String']['input']>;
  sender_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_not_contains?: InputMaybe<Scalars['String']['input']>;
  sender_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_starts_with?: InputMaybe<Scalars['String']['input']>;
  sender_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  sender_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_ends_with?: InputMaybe<Scalars['String']['input']>;
  sender_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  sender_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_?: InputMaybe<Account_filter>;
  receiver?: InputMaybe<Scalars['String']['input']>;
  receiver_not?: InputMaybe<Scalars['String']['input']>;
  receiver_gt?: InputMaybe<Scalars['String']['input']>;
  receiver_lt?: InputMaybe<Scalars['String']['input']>;
  receiver_gte?: InputMaybe<Scalars['String']['input']>;
  receiver_lte?: InputMaybe<Scalars['String']['input']>;
  receiver_in?: InputMaybe<Array<Scalars['String']['input']>>;
  receiver_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  receiver_contains?: InputMaybe<Scalars['String']['input']>;
  receiver_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  receiver_not_contains?: InputMaybe<Scalars['String']['input']>;
  receiver_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  receiver_starts_with?: InputMaybe<Scalars['String']['input']>;
  receiver_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  receiver_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  receiver_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  receiver_ends_with?: InputMaybe<Scalars['String']['input']>;
  receiver_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  receiver_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  receiver_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  receiver_?: InputMaybe<Account_filter>;
  token?: InputMaybe<Scalars['String']['input']>;
  token_not?: InputMaybe<Scalars['String']['input']>;
  token_gt?: InputMaybe<Scalars['String']['input']>;
  token_lt?: InputMaybe<Scalars['String']['input']>;
  token_gte?: InputMaybe<Scalars['String']['input']>;
  token_lte?: InputMaybe<Scalars['String']['input']>;
  token_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_contains?: InputMaybe<Scalars['String']['input']>;
  token_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_contains?: InputMaybe<Scalars['String']['input']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_?: InputMaybe<Token_filter>;
  flowRate?: InputMaybe<Scalars['BigInt']['input']>;
  flowRate_not?: InputMaybe<Scalars['BigInt']['input']>;
  flowRate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  flowRate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  flowRate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  flowRate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  flowRate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  flowRate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  deposit?: InputMaybe<Scalars['BigInt']['input']>;
  deposit_not?: InputMaybe<Scalars['BigInt']['input']>;
  deposit_gt?: InputMaybe<Scalars['BigInt']['input']>;
  deposit_lt?: InputMaybe<Scalars['BigInt']['input']>;
  deposit_gte?: InputMaybe<Scalars['BigInt']['input']>;
  deposit_lte?: InputMaybe<Scalars['BigInt']['input']>;
  deposit_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  deposit_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  startedAtTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  startedAtTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  startedAtTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  startedAtTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  startedAtTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  startedAtTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  startedAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  startedAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  startedAtBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  startedAtBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  startedAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  startedAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  startedAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  startedAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  startedAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  startedAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  startedAtEvent?: InputMaybe<Scalars['String']['input']>;
  startedAtEvent_not?: InputMaybe<Scalars['String']['input']>;
  startedAtEvent_gt?: InputMaybe<Scalars['String']['input']>;
  startedAtEvent_lt?: InputMaybe<Scalars['String']['input']>;
  startedAtEvent_gte?: InputMaybe<Scalars['String']['input']>;
  startedAtEvent_lte?: InputMaybe<Scalars['String']['input']>;
  startedAtEvent_in?: InputMaybe<Array<Scalars['String']['input']>>;
  startedAtEvent_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  startedAtEvent_contains?: InputMaybe<Scalars['String']['input']>;
  startedAtEvent_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  startedAtEvent_not_contains?: InputMaybe<Scalars['String']['input']>;
  startedAtEvent_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  startedAtEvent_starts_with?: InputMaybe<Scalars['String']['input']>;
  startedAtEvent_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  startedAtEvent_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  startedAtEvent_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  startedAtEvent_ends_with?: InputMaybe<Scalars['String']['input']>;
  startedAtEvent_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  startedAtEvent_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  startedAtEvent_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  startedAtEvent_?: InputMaybe<FlowUpdatedEvent_filter>;
  stoppedAtTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  stoppedAtTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  stoppedAtTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  stoppedAtTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  stoppedAtTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  stoppedAtTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  stoppedAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  stoppedAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  stoppedAtBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  stoppedAtBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  stoppedAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  stoppedAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  stoppedAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  stoppedAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  stoppedAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  stoppedAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  stoppedAtEvent?: InputMaybe<Scalars['String']['input']>;
  stoppedAtEvent_not?: InputMaybe<Scalars['String']['input']>;
  stoppedAtEvent_gt?: InputMaybe<Scalars['String']['input']>;
  stoppedAtEvent_lt?: InputMaybe<Scalars['String']['input']>;
  stoppedAtEvent_gte?: InputMaybe<Scalars['String']['input']>;
  stoppedAtEvent_lte?: InputMaybe<Scalars['String']['input']>;
  stoppedAtEvent_in?: InputMaybe<Array<Scalars['String']['input']>>;
  stoppedAtEvent_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  stoppedAtEvent_contains?: InputMaybe<Scalars['String']['input']>;
  stoppedAtEvent_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  stoppedAtEvent_not_contains?: InputMaybe<Scalars['String']['input']>;
  stoppedAtEvent_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  stoppedAtEvent_starts_with?: InputMaybe<Scalars['String']['input']>;
  stoppedAtEvent_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  stoppedAtEvent_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  stoppedAtEvent_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  stoppedAtEvent_ends_with?: InputMaybe<Scalars['String']['input']>;
  stoppedAtEvent_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  stoppedAtEvent_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  stoppedAtEvent_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  stoppedAtEvent_?: InputMaybe<FlowUpdatedEvent_filter>;
  totalAmountStreamed?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamed_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalAmountStreamed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<StreamPeriod_filter>>>;
  or?: InputMaybe<Array<InputMaybe<StreamPeriod_filter>>>;
};

export type StreamPeriod_orderBy =
  | 'id'
  | 'stream'
  | 'stream__id'
  | 'stream__createdAtTimestamp'
  | 'stream__createdAtBlockNumber'
  | 'stream__updatedAtTimestamp'
  | 'stream__updatedAtBlockNumber'
  | 'stream__currentFlowRate'
  | 'stream__deposit'
  | 'stream__streamedUntilUpdatedAt'
  | 'stream__userData'
  | 'sender'
  | 'sender__id'
  | 'sender__createdAtTimestamp'
  | 'sender__createdAtBlockNumber'
  | 'sender__updatedAtTimestamp'
  | 'sender__updatedAtBlockNumber'
  | 'sender__isSuperApp'
  | 'receiver'
  | 'receiver__id'
  | 'receiver__createdAtTimestamp'
  | 'receiver__createdAtBlockNumber'
  | 'receiver__updatedAtTimestamp'
  | 'receiver__updatedAtBlockNumber'
  | 'receiver__isSuperApp'
  | 'token'
  | 'token__id'
  | 'token__createdAtTimestamp'
  | 'token__createdAtBlockNumber'
  | 'token__decimals'
  | 'token__name'
  | 'token__symbol'
  | 'token__isSuperToken'
  | 'token__isNativeAssetSuperToken'
  | 'token__isListed'
  | 'token__underlyingAddress'
  | 'flowRate'
  | 'deposit'
  | 'startedAtTimestamp'
  | 'startedAtBlockNumber'
  | 'startedAtEvent'
  | 'startedAtEvent__id'
  | 'startedAtEvent__transactionHash'
  | 'startedAtEvent__gasPrice'
  | 'startedAtEvent__gasUsed'
  | 'startedAtEvent__timestamp'
  | 'startedAtEvent__name'
  | 'startedAtEvent__blockNumber'
  | 'startedAtEvent__logIndex'
  | 'startedAtEvent__order'
  | 'startedAtEvent__token'
  | 'startedAtEvent__sender'
  | 'startedAtEvent__receiver'
  | 'startedAtEvent__flowOperator'
  | 'startedAtEvent__flowRate'
  | 'startedAtEvent__totalSenderFlowRate'
  | 'startedAtEvent__totalReceiverFlowRate'
  | 'startedAtEvent__deposit'
  | 'startedAtEvent__userData'
  | 'startedAtEvent__oldFlowRate'
  | 'startedAtEvent__type'
  | 'startedAtEvent__totalAmountStreamedUntilTimestamp'
  | 'stoppedAtTimestamp'
  | 'stoppedAtBlockNumber'
  | 'stoppedAtEvent'
  | 'stoppedAtEvent__id'
  | 'stoppedAtEvent__transactionHash'
  | 'stoppedAtEvent__gasPrice'
  | 'stoppedAtEvent__gasUsed'
  | 'stoppedAtEvent__timestamp'
  | 'stoppedAtEvent__name'
  | 'stoppedAtEvent__blockNumber'
  | 'stoppedAtEvent__logIndex'
  | 'stoppedAtEvent__order'
  | 'stoppedAtEvent__token'
  | 'stoppedAtEvent__sender'
  | 'stoppedAtEvent__receiver'
  | 'stoppedAtEvent__flowOperator'
  | 'stoppedAtEvent__flowRate'
  | 'stoppedAtEvent__totalSenderFlowRate'
  | 'stoppedAtEvent__totalReceiverFlowRate'
  | 'stoppedAtEvent__deposit'
  | 'stoppedAtEvent__userData'
  | 'stoppedAtEvent__oldFlowRate'
  | 'stoppedAtEvent__type'
  | 'stoppedAtEvent__totalAmountStreamedUntilTimestamp'
  | 'totalAmountStreamed';

export type StreamRevision = {
  /**
   * ID composed of: keccak256(abi.encode(sender,receiver))-tokenAddress
   *
   */
  id: Scalars['ID']['output'];
  revisionIndex: Scalars['Int']['output'];
  periodRevisionIndex: Scalars['Int']['output'];
  /**
   * The "most recently alive" stream between a sender and receiver.
   * Note: The `revisionIndex` property may not be the same as the `revisionIndex` of `mostRecentStream`. Which means `mostRecentStream` has been closed and no new stream has been opened.
   *
   */
  mostRecentStream: Stream;
};

export type StreamRevision_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  revisionIndex?: InputMaybe<Scalars['Int']['input']>;
  revisionIndex_not?: InputMaybe<Scalars['Int']['input']>;
  revisionIndex_gt?: InputMaybe<Scalars['Int']['input']>;
  revisionIndex_lt?: InputMaybe<Scalars['Int']['input']>;
  revisionIndex_gte?: InputMaybe<Scalars['Int']['input']>;
  revisionIndex_lte?: InputMaybe<Scalars['Int']['input']>;
  revisionIndex_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  revisionIndex_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  periodRevisionIndex?: InputMaybe<Scalars['Int']['input']>;
  periodRevisionIndex_not?: InputMaybe<Scalars['Int']['input']>;
  periodRevisionIndex_gt?: InputMaybe<Scalars['Int']['input']>;
  periodRevisionIndex_lt?: InputMaybe<Scalars['Int']['input']>;
  periodRevisionIndex_gte?: InputMaybe<Scalars['Int']['input']>;
  periodRevisionIndex_lte?: InputMaybe<Scalars['Int']['input']>;
  periodRevisionIndex_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  periodRevisionIndex_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  mostRecentStream?: InputMaybe<Scalars['String']['input']>;
  mostRecentStream_not?: InputMaybe<Scalars['String']['input']>;
  mostRecentStream_gt?: InputMaybe<Scalars['String']['input']>;
  mostRecentStream_lt?: InputMaybe<Scalars['String']['input']>;
  mostRecentStream_gte?: InputMaybe<Scalars['String']['input']>;
  mostRecentStream_lte?: InputMaybe<Scalars['String']['input']>;
  mostRecentStream_in?: InputMaybe<Array<Scalars['String']['input']>>;
  mostRecentStream_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  mostRecentStream_contains?: InputMaybe<Scalars['String']['input']>;
  mostRecentStream_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  mostRecentStream_not_contains?: InputMaybe<Scalars['String']['input']>;
  mostRecentStream_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  mostRecentStream_starts_with?: InputMaybe<Scalars['String']['input']>;
  mostRecentStream_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  mostRecentStream_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  mostRecentStream_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  mostRecentStream_ends_with?: InputMaybe<Scalars['String']['input']>;
  mostRecentStream_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  mostRecentStream_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  mostRecentStream_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  mostRecentStream_?: InputMaybe<Stream_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<StreamRevision_filter>>>;
  or?: InputMaybe<Array<InputMaybe<StreamRevision_filter>>>;
};

export type StreamRevision_orderBy =
  | 'id'
  | 'revisionIndex'
  | 'periodRevisionIndex'
  | 'mostRecentStream'
  | 'mostRecentStream__id'
  | 'mostRecentStream__createdAtTimestamp'
  | 'mostRecentStream__createdAtBlockNumber'
  | 'mostRecentStream__updatedAtTimestamp'
  | 'mostRecentStream__updatedAtBlockNumber'
  | 'mostRecentStream__currentFlowRate'
  | 'mostRecentStream__deposit'
  | 'mostRecentStream__streamedUntilUpdatedAt'
  | 'mostRecentStream__userData';

export type Stream_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  createdAtTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAtBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAtTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAtBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  currentFlowRate?: InputMaybe<Scalars['BigInt']['input']>;
  currentFlowRate_not?: InputMaybe<Scalars['BigInt']['input']>;
  currentFlowRate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  currentFlowRate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  currentFlowRate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  currentFlowRate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  currentFlowRate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  currentFlowRate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  deposit?: InputMaybe<Scalars['BigInt']['input']>;
  deposit_not?: InputMaybe<Scalars['BigInt']['input']>;
  deposit_gt?: InputMaybe<Scalars['BigInt']['input']>;
  deposit_lt?: InputMaybe<Scalars['BigInt']['input']>;
  deposit_gte?: InputMaybe<Scalars['BigInt']['input']>;
  deposit_lte?: InputMaybe<Scalars['BigInt']['input']>;
  deposit_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  deposit_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  streamedUntilUpdatedAt?: InputMaybe<Scalars['BigInt']['input']>;
  streamedUntilUpdatedAt_not?: InputMaybe<Scalars['BigInt']['input']>;
  streamedUntilUpdatedAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  streamedUntilUpdatedAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  streamedUntilUpdatedAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  streamedUntilUpdatedAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  streamedUntilUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  streamedUntilUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  token?: InputMaybe<Scalars['String']['input']>;
  token_not?: InputMaybe<Scalars['String']['input']>;
  token_gt?: InputMaybe<Scalars['String']['input']>;
  token_lt?: InputMaybe<Scalars['String']['input']>;
  token_gte?: InputMaybe<Scalars['String']['input']>;
  token_lte?: InputMaybe<Scalars['String']['input']>;
  token_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_contains?: InputMaybe<Scalars['String']['input']>;
  token_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_contains?: InputMaybe<Scalars['String']['input']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_?: InputMaybe<Token_filter>;
  sender?: InputMaybe<Scalars['String']['input']>;
  sender_not?: InputMaybe<Scalars['String']['input']>;
  sender_gt?: InputMaybe<Scalars['String']['input']>;
  sender_lt?: InputMaybe<Scalars['String']['input']>;
  sender_gte?: InputMaybe<Scalars['String']['input']>;
  sender_lte?: InputMaybe<Scalars['String']['input']>;
  sender_in?: InputMaybe<Array<Scalars['String']['input']>>;
  sender_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  sender_contains?: InputMaybe<Scalars['String']['input']>;
  sender_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_not_contains?: InputMaybe<Scalars['String']['input']>;
  sender_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_starts_with?: InputMaybe<Scalars['String']['input']>;
  sender_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  sender_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_ends_with?: InputMaybe<Scalars['String']['input']>;
  sender_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  sender_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_?: InputMaybe<Account_filter>;
  receiver?: InputMaybe<Scalars['String']['input']>;
  receiver_not?: InputMaybe<Scalars['String']['input']>;
  receiver_gt?: InputMaybe<Scalars['String']['input']>;
  receiver_lt?: InputMaybe<Scalars['String']['input']>;
  receiver_gte?: InputMaybe<Scalars['String']['input']>;
  receiver_lte?: InputMaybe<Scalars['String']['input']>;
  receiver_in?: InputMaybe<Array<Scalars['String']['input']>>;
  receiver_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  receiver_contains?: InputMaybe<Scalars['String']['input']>;
  receiver_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  receiver_not_contains?: InputMaybe<Scalars['String']['input']>;
  receiver_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  receiver_starts_with?: InputMaybe<Scalars['String']['input']>;
  receiver_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  receiver_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  receiver_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  receiver_ends_with?: InputMaybe<Scalars['String']['input']>;
  receiver_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  receiver_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  receiver_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  receiver_?: InputMaybe<Account_filter>;
  userData?: InputMaybe<Scalars['Bytes']['input']>;
  userData_not?: InputMaybe<Scalars['Bytes']['input']>;
  userData_gt?: InputMaybe<Scalars['Bytes']['input']>;
  userData_lt?: InputMaybe<Scalars['Bytes']['input']>;
  userData_gte?: InputMaybe<Scalars['Bytes']['input']>;
  userData_lte?: InputMaybe<Scalars['Bytes']['input']>;
  userData_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  userData_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  userData_contains?: InputMaybe<Scalars['Bytes']['input']>;
  userData_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  flowUpdatedEvents_?: InputMaybe<FlowUpdatedEvent_filter>;
  streamPeriods_?: InputMaybe<StreamPeriod_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Stream_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Stream_filter>>>;
};

export type Stream_orderBy =
  | 'id'
  | 'createdAtTimestamp'
  | 'createdAtBlockNumber'
  | 'updatedAtTimestamp'
  | 'updatedAtBlockNumber'
  | 'currentFlowRate'
  | 'deposit'
  | 'streamedUntilUpdatedAt'
  | 'token'
  | 'token__id'
  | 'token__createdAtTimestamp'
  | 'token__createdAtBlockNumber'
  | 'token__decimals'
  | 'token__name'
  | 'token__symbol'
  | 'token__isSuperToken'
  | 'token__isNativeAssetSuperToken'
  | 'token__isListed'
  | 'token__underlyingAddress'
  | 'sender'
  | 'sender__id'
  | 'sender__createdAtTimestamp'
  | 'sender__createdAtBlockNumber'
  | 'sender__updatedAtTimestamp'
  | 'sender__updatedAtBlockNumber'
  | 'sender__isSuperApp'
  | 'receiver'
  | 'receiver__id'
  | 'receiver__createdAtTimestamp'
  | 'receiver__createdAtBlockNumber'
  | 'receiver__updatedAtTimestamp'
  | 'receiver__updatedAtBlockNumber'
  | 'receiver__isSuperApp'
  | 'userData'
  | 'flowUpdatedEvents'
  | 'streamPeriods';

export type SubscriptionApprovedEvent = Event & {
  id: Scalars['ID']['output'];
  transactionHash: Scalars['Bytes']['output'];
  gasPrice: Scalars['BigInt']['output'];
  gasUsed?: Maybe<Scalars['BigInt']['output']>;
  timestamp: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   * addresses[1] = `publisher`
   * addresses[2] = `subscriber`
   *
   */
  addresses: Array<Scalars['Bytes']['output']>;
  blockNumber: Scalars['BigInt']['output'];
  logIndex: Scalars['BigInt']['output'];
  order: Scalars['BigInt']['output'];
  token: Scalars['Bytes']['output'];
  /**
   * The account that is subscribed to `index`. A possible recipient of distributions from the `publisher`.
   * `subscriber` only receives tokens if they have been allocated units (can be thought of as shares).
   *
   */
  subscriber: Scalars['Bytes']['output'];
  /**
   * The creator of the `index`.
   *
   */
  publisher: Scalars['Bytes']['output'];
  /**
   * An arbitrary uint32 value used to allow a publisher to create multiple indexes for a specific `token`.
   *
   */
  indexId: Scalars['BigInt']['output'];
  userData: Scalars['Bytes']['output'];
  subscription: IndexSubscription;
};

export type SubscriptionApprovedEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order?: InputMaybe<Scalars['BigInt']['input']>;
  order_not?: InputMaybe<Scalars['BigInt']['input']>;
  order_gt?: InputMaybe<Scalars['BigInt']['input']>;
  order_lt?: InputMaybe<Scalars['BigInt']['input']>;
  order_gte?: InputMaybe<Scalars['BigInt']['input']>;
  order_lte?: InputMaybe<Scalars['BigInt']['input']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  token?: InputMaybe<Scalars['Bytes']['input']>;
  token_not?: InputMaybe<Scalars['Bytes']['input']>;
  token_gt?: InputMaybe<Scalars['Bytes']['input']>;
  token_lt?: InputMaybe<Scalars['Bytes']['input']>;
  token_gte?: InputMaybe<Scalars['Bytes']['input']>;
  token_lte?: InputMaybe<Scalars['Bytes']['input']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_not?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_gt?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_lt?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_gte?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_lte?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  subscriber_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  subscriber_contains?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  publisher?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_not?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_gt?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_lt?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_gte?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_lte?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  publisher_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  publisher_contains?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  indexId?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_not?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  indexId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  userData?: InputMaybe<Scalars['Bytes']['input']>;
  userData_not?: InputMaybe<Scalars['Bytes']['input']>;
  userData_gt?: InputMaybe<Scalars['Bytes']['input']>;
  userData_lt?: InputMaybe<Scalars['Bytes']['input']>;
  userData_gte?: InputMaybe<Scalars['Bytes']['input']>;
  userData_lte?: InputMaybe<Scalars['Bytes']['input']>;
  userData_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  userData_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  userData_contains?: InputMaybe<Scalars['Bytes']['input']>;
  userData_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  subscription?: InputMaybe<Scalars['String']['input']>;
  subscription_not?: InputMaybe<Scalars['String']['input']>;
  subscription_gt?: InputMaybe<Scalars['String']['input']>;
  subscription_lt?: InputMaybe<Scalars['String']['input']>;
  subscription_gte?: InputMaybe<Scalars['String']['input']>;
  subscription_lte?: InputMaybe<Scalars['String']['input']>;
  subscription_in?: InputMaybe<Array<Scalars['String']['input']>>;
  subscription_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  subscription_contains?: InputMaybe<Scalars['String']['input']>;
  subscription_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  subscription_not_contains?: InputMaybe<Scalars['String']['input']>;
  subscription_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  subscription_starts_with?: InputMaybe<Scalars['String']['input']>;
  subscription_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  subscription_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  subscription_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  subscription_ends_with?: InputMaybe<Scalars['String']['input']>;
  subscription_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  subscription_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  subscription_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  subscription_?: InputMaybe<IndexSubscription_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SubscriptionApprovedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<SubscriptionApprovedEvent_filter>>>;
};

export type SubscriptionApprovedEvent_orderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'token'
  | 'subscriber'
  | 'publisher'
  | 'indexId'
  | 'userData'
  | 'subscription'
  | 'subscription__id'
  | 'subscription__createdAtTimestamp'
  | 'subscription__createdAtBlockNumber'
  | 'subscription__updatedAtTimestamp'
  | 'subscription__updatedAtBlockNumber'
  | 'subscription__approved'
  | 'subscription__units'
  | 'subscription__totalAmountReceivedUntilUpdatedAt'
  | 'subscription__indexValueUntilUpdatedAt';

export type SubscriptionDistributionClaimedEvent = Event & {
  id: Scalars['ID']['output'];
  transactionHash: Scalars['Bytes']['output'];
  gasPrice: Scalars['BigInt']['output'];
  gasUsed?: Maybe<Scalars['BigInt']['output']>;
  timestamp: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   * addresses[1] = `publisher`
   * addresses[2] = `subscriber`
   *
   */
  addresses: Array<Scalars['Bytes']['output']>;
  blockNumber: Scalars['BigInt']['output'];
  logIndex: Scalars['BigInt']['output'];
  order: Scalars['BigInt']['output'];
  token: Scalars['Bytes']['output'];
  /**
   * The account that is subscribed to `index`. A possible recipient of distributions from the `publisher`.
   * `subscriber` only receives tokens if they have been allocated units (can be thought of as shares).
   *
   */
  subscriber: Scalars['Bytes']['output'];
  /**
   * The creator of the `index`.
   *
   */
  publisher: Scalars['Bytes']['output'];
  /**
   * An arbitrary uint32 value used to allow a publisher to create multiple indexes for a specific `token`.
   *
   */
  indexId: Scalars['BigInt']['output'];
  amount: Scalars['BigInt']['output'];
  subscription: IndexSubscription;
};

export type SubscriptionDistributionClaimedEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order?: InputMaybe<Scalars['BigInt']['input']>;
  order_not?: InputMaybe<Scalars['BigInt']['input']>;
  order_gt?: InputMaybe<Scalars['BigInt']['input']>;
  order_lt?: InputMaybe<Scalars['BigInt']['input']>;
  order_gte?: InputMaybe<Scalars['BigInt']['input']>;
  order_lte?: InputMaybe<Scalars['BigInt']['input']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  token?: InputMaybe<Scalars['Bytes']['input']>;
  token_not?: InputMaybe<Scalars['Bytes']['input']>;
  token_gt?: InputMaybe<Scalars['Bytes']['input']>;
  token_lt?: InputMaybe<Scalars['Bytes']['input']>;
  token_gte?: InputMaybe<Scalars['Bytes']['input']>;
  token_lte?: InputMaybe<Scalars['Bytes']['input']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_not?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_gt?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_lt?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_gte?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_lte?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  subscriber_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  subscriber_contains?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  publisher?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_not?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_gt?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_lt?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_gte?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_lte?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  publisher_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  publisher_contains?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  indexId?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_not?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  indexId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  subscription?: InputMaybe<Scalars['String']['input']>;
  subscription_not?: InputMaybe<Scalars['String']['input']>;
  subscription_gt?: InputMaybe<Scalars['String']['input']>;
  subscription_lt?: InputMaybe<Scalars['String']['input']>;
  subscription_gte?: InputMaybe<Scalars['String']['input']>;
  subscription_lte?: InputMaybe<Scalars['String']['input']>;
  subscription_in?: InputMaybe<Array<Scalars['String']['input']>>;
  subscription_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  subscription_contains?: InputMaybe<Scalars['String']['input']>;
  subscription_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  subscription_not_contains?: InputMaybe<Scalars['String']['input']>;
  subscription_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  subscription_starts_with?: InputMaybe<Scalars['String']['input']>;
  subscription_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  subscription_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  subscription_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  subscription_ends_with?: InputMaybe<Scalars['String']['input']>;
  subscription_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  subscription_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  subscription_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  subscription_?: InputMaybe<IndexSubscription_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SubscriptionDistributionClaimedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<SubscriptionDistributionClaimedEvent_filter>>>;
};

export type SubscriptionDistributionClaimedEvent_orderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'token'
  | 'subscriber'
  | 'publisher'
  | 'indexId'
  | 'amount'
  | 'subscription'
  | 'subscription__id'
  | 'subscription__createdAtTimestamp'
  | 'subscription__createdAtBlockNumber'
  | 'subscription__updatedAtTimestamp'
  | 'subscription__updatedAtBlockNumber'
  | 'subscription__approved'
  | 'subscription__units'
  | 'subscription__totalAmountReceivedUntilUpdatedAt'
  | 'subscription__indexValueUntilUpdatedAt';

export type SubscriptionRevokedEvent = Event & {
  id: Scalars['ID']['output'];
  transactionHash: Scalars['Bytes']['output'];
  gasPrice: Scalars['BigInt']['output'];
  gasUsed?: Maybe<Scalars['BigInt']['output']>;
  timestamp: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   * addresses[1] = `publisher`
   * addresses[2] = `subscriber`
   *
   */
  addresses: Array<Scalars['Bytes']['output']>;
  blockNumber: Scalars['BigInt']['output'];
  logIndex: Scalars['BigInt']['output'];
  order: Scalars['BigInt']['output'];
  token: Scalars['Bytes']['output'];
  /**
   * The account that is subscribed to `index`. A possible recipient of distributions from the `publisher`.
   * `subscriber` only receives tokens if they have been allocated units (can be thought of as shares).
   *
   */
  subscriber: Scalars['Bytes']['output'];
  /**
   * The creator of the `index`.
   *
   */
  publisher: Scalars['Bytes']['output'];
  /**
   * An arbitrary uint32 value used to allow a publisher to create multiple indexes for a specific `token`.
   *
   */
  indexId: Scalars['BigInt']['output'];
  userData: Scalars['Bytes']['output'];
  subscription: IndexSubscription;
};

export type SubscriptionRevokedEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order?: InputMaybe<Scalars['BigInt']['input']>;
  order_not?: InputMaybe<Scalars['BigInt']['input']>;
  order_gt?: InputMaybe<Scalars['BigInt']['input']>;
  order_lt?: InputMaybe<Scalars['BigInt']['input']>;
  order_gte?: InputMaybe<Scalars['BigInt']['input']>;
  order_lte?: InputMaybe<Scalars['BigInt']['input']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  token?: InputMaybe<Scalars['Bytes']['input']>;
  token_not?: InputMaybe<Scalars['Bytes']['input']>;
  token_gt?: InputMaybe<Scalars['Bytes']['input']>;
  token_lt?: InputMaybe<Scalars['Bytes']['input']>;
  token_gte?: InputMaybe<Scalars['Bytes']['input']>;
  token_lte?: InputMaybe<Scalars['Bytes']['input']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_not?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_gt?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_lt?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_gte?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_lte?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  subscriber_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  subscriber_contains?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  publisher?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_not?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_gt?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_lt?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_gte?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_lte?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  publisher_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  publisher_contains?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  indexId?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_not?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  indexId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  userData?: InputMaybe<Scalars['Bytes']['input']>;
  userData_not?: InputMaybe<Scalars['Bytes']['input']>;
  userData_gt?: InputMaybe<Scalars['Bytes']['input']>;
  userData_lt?: InputMaybe<Scalars['Bytes']['input']>;
  userData_gte?: InputMaybe<Scalars['Bytes']['input']>;
  userData_lte?: InputMaybe<Scalars['Bytes']['input']>;
  userData_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  userData_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  userData_contains?: InputMaybe<Scalars['Bytes']['input']>;
  userData_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  subscription?: InputMaybe<Scalars['String']['input']>;
  subscription_not?: InputMaybe<Scalars['String']['input']>;
  subscription_gt?: InputMaybe<Scalars['String']['input']>;
  subscription_lt?: InputMaybe<Scalars['String']['input']>;
  subscription_gte?: InputMaybe<Scalars['String']['input']>;
  subscription_lte?: InputMaybe<Scalars['String']['input']>;
  subscription_in?: InputMaybe<Array<Scalars['String']['input']>>;
  subscription_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  subscription_contains?: InputMaybe<Scalars['String']['input']>;
  subscription_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  subscription_not_contains?: InputMaybe<Scalars['String']['input']>;
  subscription_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  subscription_starts_with?: InputMaybe<Scalars['String']['input']>;
  subscription_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  subscription_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  subscription_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  subscription_ends_with?: InputMaybe<Scalars['String']['input']>;
  subscription_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  subscription_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  subscription_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  subscription_?: InputMaybe<IndexSubscription_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SubscriptionRevokedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<SubscriptionRevokedEvent_filter>>>;
};

export type SubscriptionRevokedEvent_orderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'token'
  | 'subscriber'
  | 'publisher'
  | 'indexId'
  | 'userData'
  | 'subscription'
  | 'subscription__id'
  | 'subscription__createdAtTimestamp'
  | 'subscription__createdAtBlockNumber'
  | 'subscription__updatedAtTimestamp'
  | 'subscription__updatedAtBlockNumber'
  | 'subscription__approved'
  | 'subscription__units'
  | 'subscription__totalAmountReceivedUntilUpdatedAt'
  | 'subscription__indexValueUntilUpdatedAt';

export type SubscriptionUnitsUpdatedEvent = Event & {
  id: Scalars['ID']['output'];
  transactionHash: Scalars['Bytes']['output'];
  gasPrice: Scalars['BigInt']['output'];
  gasUsed?: Maybe<Scalars['BigInt']['output']>;
  timestamp: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   * addresses[1] = `publisher`
   * addresses[2] = `subscriber`
   *
   */
  addresses: Array<Scalars['Bytes']['output']>;
  blockNumber: Scalars['BigInt']['output'];
  logIndex: Scalars['BigInt']['output'];
  order: Scalars['BigInt']['output'];
  token: Scalars['Bytes']['output'];
  /**
   * The account that is subscribed to `index`. A possible recipient of distributions from the `publisher`.
   * `subscriber` only receives tokens if they have been allocated units (can be thought of as shares).
   *
   */
  subscriber: Scalars['Bytes']['output'];
  /**
   * The creator of the `index`.
   *
   */
  publisher: Scalars['Bytes']['output'];
  /**
   * An arbitrary uint32 value used to allow a publisher to create multiple indexes for a specific `token`.
   *
   */
  indexId: Scalars['BigInt']['output'];
  units: Scalars['BigInt']['output'];
  userData: Scalars['Bytes']['output'];
  oldUnits: Scalars['BigInt']['output'];
  subscription: IndexSubscription;
};

export type SubscriptionUnitsUpdatedEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order?: InputMaybe<Scalars['BigInt']['input']>;
  order_not?: InputMaybe<Scalars['BigInt']['input']>;
  order_gt?: InputMaybe<Scalars['BigInt']['input']>;
  order_lt?: InputMaybe<Scalars['BigInt']['input']>;
  order_gte?: InputMaybe<Scalars['BigInt']['input']>;
  order_lte?: InputMaybe<Scalars['BigInt']['input']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  token?: InputMaybe<Scalars['Bytes']['input']>;
  token_not?: InputMaybe<Scalars['Bytes']['input']>;
  token_gt?: InputMaybe<Scalars['Bytes']['input']>;
  token_lt?: InputMaybe<Scalars['Bytes']['input']>;
  token_gte?: InputMaybe<Scalars['Bytes']['input']>;
  token_lte?: InputMaybe<Scalars['Bytes']['input']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_not?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_gt?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_lt?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_gte?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_lte?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  subscriber_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  subscriber_contains?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  publisher?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_not?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_gt?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_lt?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_gte?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_lte?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  publisher_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  publisher_contains?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  indexId?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_not?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  indexId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  units?: InputMaybe<Scalars['BigInt']['input']>;
  units_not?: InputMaybe<Scalars['BigInt']['input']>;
  units_gt?: InputMaybe<Scalars['BigInt']['input']>;
  units_lt?: InputMaybe<Scalars['BigInt']['input']>;
  units_gte?: InputMaybe<Scalars['BigInt']['input']>;
  units_lte?: InputMaybe<Scalars['BigInt']['input']>;
  units_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  units_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  userData?: InputMaybe<Scalars['Bytes']['input']>;
  userData_not?: InputMaybe<Scalars['Bytes']['input']>;
  userData_gt?: InputMaybe<Scalars['Bytes']['input']>;
  userData_lt?: InputMaybe<Scalars['Bytes']['input']>;
  userData_gte?: InputMaybe<Scalars['Bytes']['input']>;
  userData_lte?: InputMaybe<Scalars['Bytes']['input']>;
  userData_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  userData_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  userData_contains?: InputMaybe<Scalars['Bytes']['input']>;
  userData_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  oldUnits?: InputMaybe<Scalars['BigInt']['input']>;
  oldUnits_not?: InputMaybe<Scalars['BigInt']['input']>;
  oldUnits_gt?: InputMaybe<Scalars['BigInt']['input']>;
  oldUnits_lt?: InputMaybe<Scalars['BigInt']['input']>;
  oldUnits_gte?: InputMaybe<Scalars['BigInt']['input']>;
  oldUnits_lte?: InputMaybe<Scalars['BigInt']['input']>;
  oldUnits_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  oldUnits_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  subscription?: InputMaybe<Scalars['String']['input']>;
  subscription_not?: InputMaybe<Scalars['String']['input']>;
  subscription_gt?: InputMaybe<Scalars['String']['input']>;
  subscription_lt?: InputMaybe<Scalars['String']['input']>;
  subscription_gte?: InputMaybe<Scalars['String']['input']>;
  subscription_lte?: InputMaybe<Scalars['String']['input']>;
  subscription_in?: InputMaybe<Array<Scalars['String']['input']>>;
  subscription_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  subscription_contains?: InputMaybe<Scalars['String']['input']>;
  subscription_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  subscription_not_contains?: InputMaybe<Scalars['String']['input']>;
  subscription_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  subscription_starts_with?: InputMaybe<Scalars['String']['input']>;
  subscription_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  subscription_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  subscription_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  subscription_ends_with?: InputMaybe<Scalars['String']['input']>;
  subscription_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  subscription_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  subscription_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  subscription_?: InputMaybe<IndexSubscription_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SubscriptionUnitsUpdatedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<SubscriptionUnitsUpdatedEvent_filter>>>;
};

export type SubscriptionUnitsUpdatedEvent_orderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'token'
  | 'subscriber'
  | 'publisher'
  | 'indexId'
  | 'units'
  | 'userData'
  | 'oldUnits'
  | 'subscription'
  | 'subscription__id'
  | 'subscription__createdAtTimestamp'
  | 'subscription__createdAtBlockNumber'
  | 'subscription__updatedAtTimestamp'
  | 'subscription__updatedAtBlockNumber'
  | 'subscription__approved'
  | 'subscription__units'
  | 'subscription__totalAmountReceivedUntilUpdatedAt'
  | 'subscription__indexValueUntilUpdatedAt';

export type SuperTokenCreatedEvent = Event & {
  id: Scalars['ID']['output'];
  transactionHash: Scalars['Bytes']['output'];
  gasPrice: Scalars['BigInt']['output'];
  gasUsed?: Maybe<Scalars['BigInt']['output']>;
  timestamp: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   *
   */
  addresses: Array<Scalars['Bytes']['output']>;
  blockNumber: Scalars['BigInt']['output'];
  logIndex: Scalars['BigInt']['output'];
  order: Scalars['BigInt']['output'];
  token: Scalars['Bytes']['output'];
};

export type SuperTokenCreatedEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order?: InputMaybe<Scalars['BigInt']['input']>;
  order_not?: InputMaybe<Scalars['BigInt']['input']>;
  order_gt?: InputMaybe<Scalars['BigInt']['input']>;
  order_lt?: InputMaybe<Scalars['BigInt']['input']>;
  order_gte?: InputMaybe<Scalars['BigInt']['input']>;
  order_lte?: InputMaybe<Scalars['BigInt']['input']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  token?: InputMaybe<Scalars['Bytes']['input']>;
  token_not?: InputMaybe<Scalars['Bytes']['input']>;
  token_gt?: InputMaybe<Scalars['Bytes']['input']>;
  token_lt?: InputMaybe<Scalars['Bytes']['input']>;
  token_gte?: InputMaybe<Scalars['Bytes']['input']>;
  token_lte?: InputMaybe<Scalars['Bytes']['input']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SuperTokenCreatedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<SuperTokenCreatedEvent_filter>>>;
};

export type SuperTokenCreatedEvent_orderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'token';

export type SuperTokenFactoryUpdatedEvent = Event & {
  id: Scalars['ID']['output'];
  transactionHash: Scalars['Bytes']['output'];
  gasPrice: Scalars['BigInt']['output'];
  gasUsed?: Maybe<Scalars['BigInt']['output']>;
  timestamp: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `newFactory`
   *
   */
  addresses: Array<Scalars['Bytes']['output']>;
  blockNumber: Scalars['BigInt']['output'];
  logIndex: Scalars['BigInt']['output'];
  order: Scalars['BigInt']['output'];
  newFactory: Scalars['Bytes']['output'];
};

export type SuperTokenFactoryUpdatedEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order?: InputMaybe<Scalars['BigInt']['input']>;
  order_not?: InputMaybe<Scalars['BigInt']['input']>;
  order_gt?: InputMaybe<Scalars['BigInt']['input']>;
  order_lt?: InputMaybe<Scalars['BigInt']['input']>;
  order_gte?: InputMaybe<Scalars['BigInt']['input']>;
  order_lte?: InputMaybe<Scalars['BigInt']['input']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newFactory?: InputMaybe<Scalars['Bytes']['input']>;
  newFactory_not?: InputMaybe<Scalars['Bytes']['input']>;
  newFactory_gt?: InputMaybe<Scalars['Bytes']['input']>;
  newFactory_lt?: InputMaybe<Scalars['Bytes']['input']>;
  newFactory_gte?: InputMaybe<Scalars['Bytes']['input']>;
  newFactory_lte?: InputMaybe<Scalars['Bytes']['input']>;
  newFactory_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  newFactory_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  newFactory_contains?: InputMaybe<Scalars['Bytes']['input']>;
  newFactory_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SuperTokenFactoryUpdatedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<SuperTokenFactoryUpdatedEvent_filter>>>;
};

export type SuperTokenFactoryUpdatedEvent_orderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'newFactory';

export type SuperTokenLogicCreatedEvent = Event & {
  id: Scalars['ID']['output'];
  transactionHash: Scalars['Bytes']['output'];
  gasPrice: Scalars['BigInt']['output'];
  gasUsed?: Maybe<Scalars['BigInt']['output']>;
  timestamp: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `tokenLogic`
   *
   */
  addresses: Array<Scalars['Bytes']['output']>;
  blockNumber: Scalars['BigInt']['output'];
  logIndex: Scalars['BigInt']['output'];
  order: Scalars['BigInt']['output'];
  tokenLogic: Scalars['Bytes']['output'];
};

export type SuperTokenLogicCreatedEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order?: InputMaybe<Scalars['BigInt']['input']>;
  order_not?: InputMaybe<Scalars['BigInt']['input']>;
  order_gt?: InputMaybe<Scalars['BigInt']['input']>;
  order_lt?: InputMaybe<Scalars['BigInt']['input']>;
  order_gte?: InputMaybe<Scalars['BigInt']['input']>;
  order_lte?: InputMaybe<Scalars['BigInt']['input']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenLogic?: InputMaybe<Scalars['Bytes']['input']>;
  tokenLogic_not?: InputMaybe<Scalars['Bytes']['input']>;
  tokenLogic_gt?: InputMaybe<Scalars['Bytes']['input']>;
  tokenLogic_lt?: InputMaybe<Scalars['Bytes']['input']>;
  tokenLogic_gte?: InputMaybe<Scalars['Bytes']['input']>;
  tokenLogic_lte?: InputMaybe<Scalars['Bytes']['input']>;
  tokenLogic_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  tokenLogic_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  tokenLogic_contains?: InputMaybe<Scalars['Bytes']['input']>;
  tokenLogic_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SuperTokenLogicCreatedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<SuperTokenLogicCreatedEvent_filter>>>;
};

export type SuperTokenLogicCreatedEvent_orderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'tokenLogic';

export type SuperTokenLogicUpdatedEvent = Event & {
  id: Scalars['ID']['output'];
  transactionHash: Scalars['Bytes']['output'];
  gasPrice: Scalars['BigInt']['output'];
  gasUsed?: Maybe<Scalars['BigInt']['output']>;
  timestamp: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token`
   * addresses[1] = `code`
   *
   */
  addresses: Array<Scalars['Bytes']['output']>;
  blockNumber: Scalars['BigInt']['output'];
  logIndex: Scalars['BigInt']['output'];
  order: Scalars['BigInt']['output'];
  token: Scalars['Bytes']['output'];
  code: Scalars['Bytes']['output'];
};

export type SuperTokenLogicUpdatedEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order?: InputMaybe<Scalars['BigInt']['input']>;
  order_not?: InputMaybe<Scalars['BigInt']['input']>;
  order_gt?: InputMaybe<Scalars['BigInt']['input']>;
  order_lt?: InputMaybe<Scalars['BigInt']['input']>;
  order_gte?: InputMaybe<Scalars['BigInt']['input']>;
  order_lte?: InputMaybe<Scalars['BigInt']['input']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  token?: InputMaybe<Scalars['Bytes']['input']>;
  token_not?: InputMaybe<Scalars['Bytes']['input']>;
  token_gt?: InputMaybe<Scalars['Bytes']['input']>;
  token_lt?: InputMaybe<Scalars['Bytes']['input']>;
  token_gte?: InputMaybe<Scalars['Bytes']['input']>;
  token_lte?: InputMaybe<Scalars['Bytes']['input']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  code?: InputMaybe<Scalars['Bytes']['input']>;
  code_not?: InputMaybe<Scalars['Bytes']['input']>;
  code_gt?: InputMaybe<Scalars['Bytes']['input']>;
  code_lt?: InputMaybe<Scalars['Bytes']['input']>;
  code_gte?: InputMaybe<Scalars['Bytes']['input']>;
  code_lte?: InputMaybe<Scalars['Bytes']['input']>;
  code_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  code_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  code_contains?: InputMaybe<Scalars['Bytes']['input']>;
  code_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SuperTokenLogicUpdatedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<SuperTokenLogicUpdatedEvent_filter>>>;
};

export type SuperTokenLogicUpdatedEvent_orderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'token'
  | 'code';

export type SuperTokenMinimumDepositChangedEvent = Event & {
  id: Scalars['ID']['output'];
  transactionHash: Scalars['Bytes']['output'];
  gasPrice: Scalars['BigInt']['output'];
  gasUsed?: Maybe<Scalars['BigInt']['output']>;
  timestamp: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  /**
   * The address of the governance contract the event was emitted from.
   *
   */
  governanceAddress: Scalars['Bytes']['output'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `governanceAddress`
   * addresses[1] = `host`
   * addresses[2] = `superToken`
   *
   */
  addresses: Array<Scalars['Bytes']['output']>;
  blockNumber: Scalars['BigInt']['output'];
  logIndex: Scalars['BigInt']['output'];
  order: Scalars['BigInt']['output'];
  host: Scalars['Bytes']['output'];
  superToken: Scalars['Bytes']['output'];
  isKeySet: Scalars['Boolean']['output'];
  minimumDeposit: Scalars['BigInt']['output'];
};

export type SuperTokenMinimumDepositChangedEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  governanceAddress?: InputMaybe<Scalars['Bytes']['input']>;
  governanceAddress_not?: InputMaybe<Scalars['Bytes']['input']>;
  governanceAddress_gt?: InputMaybe<Scalars['Bytes']['input']>;
  governanceAddress_lt?: InputMaybe<Scalars['Bytes']['input']>;
  governanceAddress_gte?: InputMaybe<Scalars['Bytes']['input']>;
  governanceAddress_lte?: InputMaybe<Scalars['Bytes']['input']>;
  governanceAddress_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  governanceAddress_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  governanceAddress_contains?: InputMaybe<Scalars['Bytes']['input']>;
  governanceAddress_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order?: InputMaybe<Scalars['BigInt']['input']>;
  order_not?: InputMaybe<Scalars['BigInt']['input']>;
  order_gt?: InputMaybe<Scalars['BigInt']['input']>;
  order_lt?: InputMaybe<Scalars['BigInt']['input']>;
  order_gte?: InputMaybe<Scalars['BigInt']['input']>;
  order_lte?: InputMaybe<Scalars['BigInt']['input']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  host?: InputMaybe<Scalars['Bytes']['input']>;
  host_not?: InputMaybe<Scalars['Bytes']['input']>;
  host_gt?: InputMaybe<Scalars['Bytes']['input']>;
  host_lt?: InputMaybe<Scalars['Bytes']['input']>;
  host_gte?: InputMaybe<Scalars['Bytes']['input']>;
  host_lte?: InputMaybe<Scalars['Bytes']['input']>;
  host_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  host_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  host_contains?: InputMaybe<Scalars['Bytes']['input']>;
  host_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  superToken?: InputMaybe<Scalars['Bytes']['input']>;
  superToken_not?: InputMaybe<Scalars['Bytes']['input']>;
  superToken_gt?: InputMaybe<Scalars['Bytes']['input']>;
  superToken_lt?: InputMaybe<Scalars['Bytes']['input']>;
  superToken_gte?: InputMaybe<Scalars['Bytes']['input']>;
  superToken_lte?: InputMaybe<Scalars['Bytes']['input']>;
  superToken_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  superToken_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  superToken_contains?: InputMaybe<Scalars['Bytes']['input']>;
  superToken_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  isKeySet?: InputMaybe<Scalars['Boolean']['input']>;
  isKeySet_not?: InputMaybe<Scalars['Boolean']['input']>;
  isKeySet_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isKeySet_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  minimumDeposit?: InputMaybe<Scalars['BigInt']['input']>;
  minimumDeposit_not?: InputMaybe<Scalars['BigInt']['input']>;
  minimumDeposit_gt?: InputMaybe<Scalars['BigInt']['input']>;
  minimumDeposit_lt?: InputMaybe<Scalars['BigInt']['input']>;
  minimumDeposit_gte?: InputMaybe<Scalars['BigInt']['input']>;
  minimumDeposit_lte?: InputMaybe<Scalars['BigInt']['input']>;
  minimumDeposit_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  minimumDeposit_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SuperTokenMinimumDepositChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<SuperTokenMinimumDepositChangedEvent_filter>>>;
};

export type SuperTokenMinimumDepositChangedEvent_orderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'governanceAddress'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'host'
  | 'superToken'
  | 'isKeySet'
  | 'minimumDeposit';

/**
 * Token: A higher order entity created for super tokens (and underlying tokens) that are "valid" (tokens that have Superfluid's host contract address set as the host).
 *
 */
export type Token = {
  /**
   * ID: the token address
   *
   */
  id: Scalars['ID']['output'];
  createdAtTimestamp: Scalars['BigInt']['output'];
  createdAtBlockNumber: Scalars['BigInt']['output'];
  decimals: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  symbol: Scalars['String']['output'];
  isSuperToken: Scalars['Boolean']['output'];
  /**
   * A boolean indicating whether the token is a NativeAssetSuperToken.
   *
   */
  isNativeAssetSuperToken: Scalars['Boolean']['output'];
  /**
   * A boolean indicating whether the token is a part of our resolver list.
   *
   */
  isListed: Scalars['Boolean']['output'];
  /**
   * The address of the underlying ERC20 token (zero address for non-ERC20WrapperSuperToken's)
   *
   */
  underlyingAddress: Scalars['Bytes']['output'];
  /**
   * The underlying ERC20 token for a ERC20WrapperSuperToken otherwise null.
   *
   */
  underlyingToken?: Maybe<Token>;
  /**
   * If `governanceConfig.id` is the zero address, the token uses the default governance config.
   *
   */
  governanceConfig?: Maybe<TokenGovernanceConfig>;
};

export type TokenDowngradedEvent = Event & {
  id: Scalars['ID']['output'];
  account: Account;
  transactionHash: Scalars['Bytes']['output'];
  gasPrice: Scalars['BigInt']['output'];
  gasUsed?: Maybe<Scalars['BigInt']['output']>;
  timestamp: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   * addresses[1] = `account`
   *
   */
  addresses: Array<Scalars['Bytes']['output']>;
  blockNumber: Scalars['BigInt']['output'];
  logIndex: Scalars['BigInt']['output'];
  order: Scalars['BigInt']['output'];
  token: Scalars['Bytes']['output'];
  amount: Scalars['BigInt']['output'];
};

export type TokenDowngradedEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  account?: InputMaybe<Scalars['String']['input']>;
  account_not?: InputMaybe<Scalars['String']['input']>;
  account_gt?: InputMaybe<Scalars['String']['input']>;
  account_lt?: InputMaybe<Scalars['String']['input']>;
  account_gte?: InputMaybe<Scalars['String']['input']>;
  account_lte?: InputMaybe<Scalars['String']['input']>;
  account_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_contains?: InputMaybe<Scalars['String']['input']>;
  account_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_contains?: InputMaybe<Scalars['String']['input']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_?: InputMaybe<Account_filter>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order?: InputMaybe<Scalars['BigInt']['input']>;
  order_not?: InputMaybe<Scalars['BigInt']['input']>;
  order_gt?: InputMaybe<Scalars['BigInt']['input']>;
  order_lt?: InputMaybe<Scalars['BigInt']['input']>;
  order_gte?: InputMaybe<Scalars['BigInt']['input']>;
  order_lte?: InputMaybe<Scalars['BigInt']['input']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  token?: InputMaybe<Scalars['Bytes']['input']>;
  token_not?: InputMaybe<Scalars['Bytes']['input']>;
  token_gt?: InputMaybe<Scalars['Bytes']['input']>;
  token_lt?: InputMaybe<Scalars['Bytes']['input']>;
  token_gte?: InputMaybe<Scalars['Bytes']['input']>;
  token_lte?: InputMaybe<Scalars['Bytes']['input']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TokenDowngradedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<TokenDowngradedEvent_filter>>>;
};

export type TokenDowngradedEvent_orderBy =
  | 'id'
  | 'account'
  | 'account__id'
  | 'account__createdAtTimestamp'
  | 'account__createdAtBlockNumber'
  | 'account__updatedAtTimestamp'
  | 'account__updatedAtBlockNumber'
  | 'account__isSuperApp'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'token'
  | 'amount';

/**
 * TokenGovernanceConfig: A higher order entity that represents the governance configs for a token.
 * If `id` is `address(0)`, it will be used as the default config.
 *
 */
export type TokenGovernanceConfig = {
  /**
   * id is the address of the SuperToken
   * NOTE: the zero address is reserved for the default config for all tokens with unset configs.
   *
   */
  id: Scalars['ID']['output'];
  createdAtTimestamp: Scalars['BigInt']['output'];
  createdAtBlockNumber: Scalars['BigInt']['output'];
  updatedAtTimestamp: Scalars['BigInt']['output'];
  updatedAtBlockNumber: Scalars['BigInt']['output'];
  /**
   * If true, `id` is `address(0)` and this is the default config for all tokens with unset configs.
   *
   */
  isDefault: Scalars['Boolean']['output'];
  /**
   * The (default or token-specific) address that receives liquidation rewards for a token prior to 3Ps and the TOGA address after 3Ps.
   *
   */
  rewardAddress?: Maybe<Scalars['Bytes']['output']>;
  /**
   * The (default or token-specific) liquidation period (buffer amount required for a token).
   * This field can be used to calculate the liquidation buffer (or deposit) amount for a token: `liquidationBufferAmount = liquidationPeriod * flowRate`.
   * Note that if `minimumDeposit` is set, the liquidation buffer amount will be the greater of the two values.
   *
   */
  liquidationPeriod?: Maybe<Scalars['BigInt']['output']>;
  /**
   * The (default or token-specific) patrician period, the patrician period is the window in which a patrician receives all rewards for a liquidation, no matter the liquidating account.
   *
   */
  patricianPeriod?: Maybe<Scalars['BigInt']['output']>;
  /**
   * The (default or token-specific) minimum deposit amount.
   *
   */
  minimumDeposit?: Maybe<Scalars['BigInt']['output']>;
  /**
   * A reverse lookup to the token it is associated with and null if it is the default config.
   *
   */
  token?: Maybe<Token>;
};

export type TokenGovernanceConfig_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  createdAtTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAtBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAtTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAtBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  isDefault?: InputMaybe<Scalars['Boolean']['input']>;
  isDefault_not?: InputMaybe<Scalars['Boolean']['input']>;
  isDefault_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isDefault_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  rewardAddress?: InputMaybe<Scalars['Bytes']['input']>;
  rewardAddress_not?: InputMaybe<Scalars['Bytes']['input']>;
  rewardAddress_gt?: InputMaybe<Scalars['Bytes']['input']>;
  rewardAddress_lt?: InputMaybe<Scalars['Bytes']['input']>;
  rewardAddress_gte?: InputMaybe<Scalars['Bytes']['input']>;
  rewardAddress_lte?: InputMaybe<Scalars['Bytes']['input']>;
  rewardAddress_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  rewardAddress_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  rewardAddress_contains?: InputMaybe<Scalars['Bytes']['input']>;
  rewardAddress_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  liquidationPeriod?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationPeriod_not?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationPeriod_gt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationPeriod_lt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationPeriod_gte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationPeriod_lte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationPeriod_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidationPeriod_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  patricianPeriod?: InputMaybe<Scalars['BigInt']['input']>;
  patricianPeriod_not?: InputMaybe<Scalars['BigInt']['input']>;
  patricianPeriod_gt?: InputMaybe<Scalars['BigInt']['input']>;
  patricianPeriod_lt?: InputMaybe<Scalars['BigInt']['input']>;
  patricianPeriod_gte?: InputMaybe<Scalars['BigInt']['input']>;
  patricianPeriod_lte?: InputMaybe<Scalars['BigInt']['input']>;
  patricianPeriod_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  patricianPeriod_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  minimumDeposit?: InputMaybe<Scalars['BigInt']['input']>;
  minimumDeposit_not?: InputMaybe<Scalars['BigInt']['input']>;
  minimumDeposit_gt?: InputMaybe<Scalars['BigInt']['input']>;
  minimumDeposit_lt?: InputMaybe<Scalars['BigInt']['input']>;
  minimumDeposit_gte?: InputMaybe<Scalars['BigInt']['input']>;
  minimumDeposit_lte?: InputMaybe<Scalars['BigInt']['input']>;
  minimumDeposit_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  minimumDeposit_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  token?: InputMaybe<Scalars['String']['input']>;
  token_not?: InputMaybe<Scalars['String']['input']>;
  token_gt?: InputMaybe<Scalars['String']['input']>;
  token_lt?: InputMaybe<Scalars['String']['input']>;
  token_gte?: InputMaybe<Scalars['String']['input']>;
  token_lte?: InputMaybe<Scalars['String']['input']>;
  token_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_contains?: InputMaybe<Scalars['String']['input']>;
  token_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_contains?: InputMaybe<Scalars['String']['input']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_?: InputMaybe<Token_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TokenGovernanceConfig_filter>>>;
  or?: InputMaybe<Array<InputMaybe<TokenGovernanceConfig_filter>>>;
};

export type TokenGovernanceConfig_orderBy =
  | 'id'
  | 'createdAtTimestamp'
  | 'createdAtBlockNumber'
  | 'updatedAtTimestamp'
  | 'updatedAtBlockNumber'
  | 'isDefault'
  | 'rewardAddress'
  | 'liquidationPeriod'
  | 'patricianPeriod'
  | 'minimumDeposit'
  | 'token'
  | 'token__id'
  | 'token__createdAtTimestamp'
  | 'token__createdAtBlockNumber'
  | 'token__decimals'
  | 'token__name'
  | 'token__symbol'
  | 'token__isSuperToken'
  | 'token__isNativeAssetSuperToken'
  | 'token__isListed'
  | 'token__underlyingAddress';

/**
 * TokenStatistic: An aggregate entity which contains aggregate data for `token`.
 *
 */
export type TokenStatistic = {
  /**
   * id: `token` (superToken) address
   *
   */
  id: Scalars['ID']['output'];
  updatedAtTimestamp: Scalars['BigInt']['output'];
  updatedAtBlockNumber: Scalars['BigInt']['output'];
  /**
   * The total number of currently active `token` streams.
   *
   */
  totalNumberOfActiveStreams: Scalars['Int']['output'];
  /**
   * The total number of currently active `token` streams for the CFA.
   *
   */
  totalCFANumberOfActiveStreams: Scalars['Int']['output'];
  /**
   * The total number of currently active `token` streams for the GDA.
   *
   */
  totalGDANumberOfActiveStreams: Scalars['Int']['output'];
  /**
   * The count of closed streams for `token`.
   *
   */
  totalNumberOfClosedStreams: Scalars['Int']['output'];
  /**
   * The count of closed streams for `token` for the CFA.
   *
   */
  totalCFANumberOfClosedStreams: Scalars['Int']['output'];
  /**
   * The count of closed streams for `token` for the GDA.
   *
   */
  totalGDANumberOfClosedStreams: Scalars['Int']['output'];
  /**
   * The total number of Indexes created with `token`.
   *
   */
  totalNumberOfIndexes: Scalars['Int']['output'];
  /**
   * The total number of "active" (has greater than 0 units and has distributed it at least once) Indexes created with `token`.
   *
   */
  totalNumberOfActiveIndexes: Scalars['Int']['output'];
  /**
   * The number of subscriptions which have units allocated to them created with Indexes that distribute `token`.
   *
   */
  totalSubscriptionsWithUnits: Scalars['Int']['output'];
  /**
   * Counts all approved subscriptions whether or not they have units.
   *
   */
  totalApprovedSubscriptions: Scalars['Int']['output'];
  /**
   * The total number of Pools created with `token`.
   *
   */
  totalNumberOfPools: Scalars['Int']['output'];
  /**
   * The total number of "active" (has greater than 0 units and has distributed it at least once) Pools created with `token`.
   *
   */
  totalNumberOfActivePools: Scalars['Int']['output'];
  /**
   * The number of memberships which have units allocated to them created with Pools that distribute `token`.
   *
   */
  totalMembershipsWithUnits: Scalars['Int']['output'];
  /**
   * Counts all approved memberships whether or not they have units.
   *
   */
  totalConnectedMemberships: Scalars['Int']['output'];
  /**
   * The total deposit held by all flow agreements for this particular `token`.
   *
   */
  totalDeposit: Scalars['BigInt']['output'];
  /**
   * The total deposit held by the CFA for this particular `token`.
   *
   */
  totalCFADeposit: Scalars['BigInt']['output'];
  /**
   * The total deposit held by the GDA agreement for this particular `token`.
   *
   */
  totalGDADeposit: Scalars['BigInt']['output'];
  /**
   * The total outflow rate of the `token` (how much value is being moved) for all flow agreements.
   *
   */
  totalOutflowRate: Scalars['BigInt']['output'];
  /**
   * The total outflow rate of the `token` (how much value is being moved) for the CFA.
   *
   */
  totalCFAOutflowRate: Scalars['BigInt']['output'];
  /**
   * The total outflow rate of the `token` (how much value is being moved) for the GDA.
   *
   */
  totalGDAOutflowRate: Scalars['BigInt']['output'];
  /**
   * The all-time total amount streamed (outflows) until the `updatedAtTimestamp`/`updatedAtBlock` for all flow agreements.
   *
   */
  totalAmountStreamedUntilUpdatedAt: Scalars['BigInt']['output'];
  /**
   * The all-time total amount streamed (outflows) until the `updatedAtTimestamp`/`updatedAtBlock` for the CFA.
   *
   */
  totalCFAAmountStreamedUntilUpdatedAt: Scalars['BigInt']['output'];
  /**
   * The all-time total amount transferred until the `updatedAtTimestamp`/`updatedAtBlock`.
   *
   */
  totalAmountTransferredUntilUpdatedAt: Scalars['BigInt']['output'];
  /**
   * The all-time total amount distributed until the `updatedAtTimestamp`/`updatedAtBlock`.
   *
   */
  totalAmountDistributedUntilUpdatedAt: Scalars['BigInt']['output'];
  /**
   * The total supply of the token - this is impacted by users upgrading/downgrading their tokens.
   *
   */
  totalSupply: Scalars['BigInt']['output'];
  /**
   * The total number of accounts that have interacted with the token (but might not hold a balance anymore).
   *
   */
  totalNumberOfAccounts: Scalars['Int']['output'];
  /**
   * The total number of accounts holding a non-zero balance of the token.
   *
   */
  totalNumberOfHolders: Scalars['Int']['output'];
  token: Token;
  tokenStatisticLogs: Array<TokenStatisticLog>;
};


/**
 * TokenStatistic: An aggregate entity which contains aggregate data for `token`.
 *
 */
export type TokenStatistictokenStatisticLogsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TokenStatisticLog_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenStatisticLog_filter>;
};

/**
 * TokenStatisticLog: Historical entries of `TokenStatistic` updates.
 * WARNING: This entity has been deprecated. It is not indexed anymore. It's kept in schema to avoid breakage in the schema.
 *
 */
export type TokenStatisticLog = {
  id: Scalars['ID']['output'];
  timestamp: Scalars['BigInt']['output'];
  blockNumber: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
  logIndex: Scalars['BigInt']['output'];
  order: Scalars['BigInt']['output'];
  triggeredByEventName: Scalars['String']['output'];
  /**
   * The total number of currently active `token` streams for all flow agreements.
   *
   */
  totalNumberOfActiveStreams: Scalars['Int']['output'];
  /**
   * The total number of currently active `token` streams for the CFA.
   *
   */
  totalCFANumberOfActiveStreams: Scalars['Int']['output'];
  /**
   * The total number of currently active `token` streams for the GDA.
   *
   */
  totalGDANumberOfActiveStreams: Scalars['Int']['output'];
  /**
   * The count of closed streams for `token` for all flow agreements.
   *
   */
  totalNumberOfClosedStreams: Scalars['Int']['output'];
  /**
   * The count of closed streams for `token` for the CFA.
   *
   */
  totalCFANumberOfClosedStreams: Scalars['Int']['output'];
  /**
   * The count of closed streams for `token` for the GDA.
   *
   */
  totalGDANumberOfClosedStreams: Scalars['Int']['output'];
  /**
   * The total number of Indexes created with `token`.
   *
   */
  totalNumberOfIndexes: Scalars['Int']['output'];
  /**
   * The total number of "active" (has greater than 0 units and has distributed it at least once) Indexes created with `token`.
   *
   */
  totalNumberOfActiveIndexes: Scalars['Int']['output'];
  /**
   * The number of subscriptions which have units allocated to them created with Indexes that distribute `token`.
   *
   */
  totalSubscriptionsWithUnits: Scalars['Int']['output'];
  /**
   * Counts all approved subscriptions whether or not they have units.
   *
   */
  totalApprovedSubscriptions: Scalars['Int']['output'];
  /**
   * The total number of Pools created with `token`.
   *
   */
  totalNumberOfPools: Scalars['Int']['output'];
  /**
   * The total number of "active" (has greater than 0 units and has distributed it at least once) Pools created with `token`.
   *
   */
  totalNumberOfActivePools: Scalars['Int']['output'];
  /**
   * The number of memberships which have units allocated to them created with Pools that distribute `token`.
   *
   */
  totalMembershipsWithUnits: Scalars['Int']['output'];
  /**
   * Counts all connected memberships whether or not they have units.
   *
   */
  totalConnectedMemberships: Scalars['Int']['output'];
  /**
   * The total deposit held by the CFA agreement for this particular `token` for all flow agreements.
   *
   */
  totalDeposit: Scalars['BigInt']['output'];
  /**
   * The total deposit held by the CFA agreement for this particular `token` for the CFA.
   *
   */
  totalCFADeposit: Scalars['BigInt']['output'];
  /**
   * The total deposit held by the CFA agreement for this particular `token` for the GDA.
   *
   */
  totalGDADeposit: Scalars['BigInt']['output'];
  /**
   * The total outflow rate of the `token` (how much value is being moved) for all flow agreements.
   *
   */
  totalOutflowRate: Scalars['BigInt']['output'];
  /**
   * The total outflow rate of the `token` (how much value is being moved) for the CFA.
   *
   */
  totalCFAOutflowRate: Scalars['BigInt']['output'];
  /**
   * The total outflow rate of the `token` (how much value is being moved) for the GDA.
   *
   */
  totalGDAOutflowRate: Scalars['BigInt']['output'];
  /**
   * The all-time total amount of `token` streamed (outflows) until the `timestamp`/`block` for all flow agreements.
   *
   */
  totalAmountStreamed: Scalars['BigInt']['output'];
  /**
   * The all-time total amount of `token` streamed (outflows) until the `timestamp`/`block` for the CFA.
   *
   */
  totalCFAAmountStreamed: Scalars['BigInt']['output'];
  /**
   * The all-time total amount of `token` transferred until the `timestamp`/`block`.
   *
   */
  totalAmountTransferred: Scalars['BigInt']['output'];
  /**
   * The all-time total amount of `token` distributed until the `timestamp`/`block`.
   *
   */
  totalAmountDistributed: Scalars['BigInt']['output'];
  /**
   * The total supply of the token - this is impacted by users upgrading/downgrading their tokens.
   *
   */
  totalSupply: Scalars['BigInt']['output'];
  /**
   * The total number of accounts that have interacted with the token (but might not hold a balance anymore).
   *
   */
  totalNumberOfAccounts: Scalars['Int']['output'];
  /**
   * The total number of accounts holding a non-zero balance of the token.
   *
   */
  totalNumberOfHolders: Scalars['Int']['output'];
  token: Token;
  tokenStatistic: TokenStatistic;
};

export type TokenStatisticLog_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order?: InputMaybe<Scalars['BigInt']['input']>;
  order_not?: InputMaybe<Scalars['BigInt']['input']>;
  order_gt?: InputMaybe<Scalars['BigInt']['input']>;
  order_lt?: InputMaybe<Scalars['BigInt']['input']>;
  order_gte?: InputMaybe<Scalars['BigInt']['input']>;
  order_lte?: InputMaybe<Scalars['BigInt']['input']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  triggeredByEventName?: InputMaybe<Scalars['String']['input']>;
  triggeredByEventName_not?: InputMaybe<Scalars['String']['input']>;
  triggeredByEventName_gt?: InputMaybe<Scalars['String']['input']>;
  triggeredByEventName_lt?: InputMaybe<Scalars['String']['input']>;
  triggeredByEventName_gte?: InputMaybe<Scalars['String']['input']>;
  triggeredByEventName_lte?: InputMaybe<Scalars['String']['input']>;
  triggeredByEventName_in?: InputMaybe<Array<Scalars['String']['input']>>;
  triggeredByEventName_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  triggeredByEventName_contains?: InputMaybe<Scalars['String']['input']>;
  triggeredByEventName_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  triggeredByEventName_not_contains?: InputMaybe<Scalars['String']['input']>;
  triggeredByEventName_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  triggeredByEventName_starts_with?: InputMaybe<Scalars['String']['input']>;
  triggeredByEventName_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  triggeredByEventName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  triggeredByEventName_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  triggeredByEventName_ends_with?: InputMaybe<Scalars['String']['input']>;
  triggeredByEventName_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  triggeredByEventName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  triggeredByEventName_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  totalNumberOfActiveStreams?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfActiveStreams_not?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfActiveStreams_gt?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfActiveStreams_lt?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfActiveStreams_gte?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfActiveStreams_lte?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfActiveStreams_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalNumberOfActiveStreams_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalCFANumberOfActiveStreams?: InputMaybe<Scalars['Int']['input']>;
  totalCFANumberOfActiveStreams_not?: InputMaybe<Scalars['Int']['input']>;
  totalCFANumberOfActiveStreams_gt?: InputMaybe<Scalars['Int']['input']>;
  totalCFANumberOfActiveStreams_lt?: InputMaybe<Scalars['Int']['input']>;
  totalCFANumberOfActiveStreams_gte?: InputMaybe<Scalars['Int']['input']>;
  totalCFANumberOfActiveStreams_lte?: InputMaybe<Scalars['Int']['input']>;
  totalCFANumberOfActiveStreams_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalCFANumberOfActiveStreams_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalGDANumberOfActiveStreams?: InputMaybe<Scalars['Int']['input']>;
  totalGDANumberOfActiveStreams_not?: InputMaybe<Scalars['Int']['input']>;
  totalGDANumberOfActiveStreams_gt?: InputMaybe<Scalars['Int']['input']>;
  totalGDANumberOfActiveStreams_lt?: InputMaybe<Scalars['Int']['input']>;
  totalGDANumberOfActiveStreams_gte?: InputMaybe<Scalars['Int']['input']>;
  totalGDANumberOfActiveStreams_lte?: InputMaybe<Scalars['Int']['input']>;
  totalGDANumberOfActiveStreams_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalGDANumberOfActiveStreams_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalNumberOfClosedStreams?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfClosedStreams_not?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfClosedStreams_gt?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfClosedStreams_lt?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfClosedStreams_gte?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfClosedStreams_lte?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfClosedStreams_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalNumberOfClosedStreams_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalCFANumberOfClosedStreams?: InputMaybe<Scalars['Int']['input']>;
  totalCFANumberOfClosedStreams_not?: InputMaybe<Scalars['Int']['input']>;
  totalCFANumberOfClosedStreams_gt?: InputMaybe<Scalars['Int']['input']>;
  totalCFANumberOfClosedStreams_lt?: InputMaybe<Scalars['Int']['input']>;
  totalCFANumberOfClosedStreams_gte?: InputMaybe<Scalars['Int']['input']>;
  totalCFANumberOfClosedStreams_lte?: InputMaybe<Scalars['Int']['input']>;
  totalCFANumberOfClosedStreams_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalCFANumberOfClosedStreams_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalGDANumberOfClosedStreams?: InputMaybe<Scalars['Int']['input']>;
  totalGDANumberOfClosedStreams_not?: InputMaybe<Scalars['Int']['input']>;
  totalGDANumberOfClosedStreams_gt?: InputMaybe<Scalars['Int']['input']>;
  totalGDANumberOfClosedStreams_lt?: InputMaybe<Scalars['Int']['input']>;
  totalGDANumberOfClosedStreams_gte?: InputMaybe<Scalars['Int']['input']>;
  totalGDANumberOfClosedStreams_lte?: InputMaybe<Scalars['Int']['input']>;
  totalGDANumberOfClosedStreams_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalGDANumberOfClosedStreams_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalNumberOfIndexes?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfIndexes_not?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfIndexes_gt?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfIndexes_lt?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfIndexes_gte?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfIndexes_lte?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfIndexes_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalNumberOfIndexes_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalNumberOfActiveIndexes?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfActiveIndexes_not?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfActiveIndexes_gt?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfActiveIndexes_lt?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfActiveIndexes_gte?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfActiveIndexes_lte?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfActiveIndexes_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalNumberOfActiveIndexes_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalSubscriptionsWithUnits?: InputMaybe<Scalars['Int']['input']>;
  totalSubscriptionsWithUnits_not?: InputMaybe<Scalars['Int']['input']>;
  totalSubscriptionsWithUnits_gt?: InputMaybe<Scalars['Int']['input']>;
  totalSubscriptionsWithUnits_lt?: InputMaybe<Scalars['Int']['input']>;
  totalSubscriptionsWithUnits_gte?: InputMaybe<Scalars['Int']['input']>;
  totalSubscriptionsWithUnits_lte?: InputMaybe<Scalars['Int']['input']>;
  totalSubscriptionsWithUnits_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalSubscriptionsWithUnits_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalApprovedSubscriptions?: InputMaybe<Scalars['Int']['input']>;
  totalApprovedSubscriptions_not?: InputMaybe<Scalars['Int']['input']>;
  totalApprovedSubscriptions_gt?: InputMaybe<Scalars['Int']['input']>;
  totalApprovedSubscriptions_lt?: InputMaybe<Scalars['Int']['input']>;
  totalApprovedSubscriptions_gte?: InputMaybe<Scalars['Int']['input']>;
  totalApprovedSubscriptions_lte?: InputMaybe<Scalars['Int']['input']>;
  totalApprovedSubscriptions_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalApprovedSubscriptions_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalNumberOfPools?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfPools_not?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfPools_gt?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfPools_lt?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfPools_gte?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfPools_lte?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfPools_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalNumberOfPools_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalNumberOfActivePools?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfActivePools_not?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfActivePools_gt?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfActivePools_lt?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfActivePools_gte?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfActivePools_lte?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfActivePools_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalNumberOfActivePools_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalMembershipsWithUnits?: InputMaybe<Scalars['Int']['input']>;
  totalMembershipsWithUnits_not?: InputMaybe<Scalars['Int']['input']>;
  totalMembershipsWithUnits_gt?: InputMaybe<Scalars['Int']['input']>;
  totalMembershipsWithUnits_lt?: InputMaybe<Scalars['Int']['input']>;
  totalMembershipsWithUnits_gte?: InputMaybe<Scalars['Int']['input']>;
  totalMembershipsWithUnits_lte?: InputMaybe<Scalars['Int']['input']>;
  totalMembershipsWithUnits_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalMembershipsWithUnits_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalConnectedMemberships?: InputMaybe<Scalars['Int']['input']>;
  totalConnectedMemberships_not?: InputMaybe<Scalars['Int']['input']>;
  totalConnectedMemberships_gt?: InputMaybe<Scalars['Int']['input']>;
  totalConnectedMemberships_lt?: InputMaybe<Scalars['Int']['input']>;
  totalConnectedMemberships_gte?: InputMaybe<Scalars['Int']['input']>;
  totalConnectedMemberships_lte?: InputMaybe<Scalars['Int']['input']>;
  totalConnectedMemberships_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalConnectedMemberships_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalDeposit?: InputMaybe<Scalars['BigInt']['input']>;
  totalDeposit_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalDeposit_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalDeposit_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalDeposit_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalDeposit_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalDeposit_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalDeposit_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalCFADeposit?: InputMaybe<Scalars['BigInt']['input']>;
  totalCFADeposit_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalCFADeposit_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalCFADeposit_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalCFADeposit_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalCFADeposit_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalCFADeposit_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalCFADeposit_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalGDADeposit?: InputMaybe<Scalars['BigInt']['input']>;
  totalGDADeposit_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalGDADeposit_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalGDADeposit_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalGDADeposit_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalGDADeposit_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalGDADeposit_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalGDADeposit_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalOutflowRate?: InputMaybe<Scalars['BigInt']['input']>;
  totalOutflowRate_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalOutflowRate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalOutflowRate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalOutflowRate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalOutflowRate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalOutflowRate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalOutflowRate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalCFAOutflowRate?: InputMaybe<Scalars['BigInt']['input']>;
  totalCFAOutflowRate_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalCFAOutflowRate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalCFAOutflowRate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalCFAOutflowRate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalCFAOutflowRate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalCFAOutflowRate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalCFAOutflowRate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalGDAOutflowRate?: InputMaybe<Scalars['BigInt']['input']>;
  totalGDAOutflowRate_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalGDAOutflowRate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalGDAOutflowRate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalGDAOutflowRate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalGDAOutflowRate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalGDAOutflowRate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalGDAOutflowRate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalAmountStreamed?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamed_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalAmountStreamed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalCFAAmountStreamed?: InputMaybe<Scalars['BigInt']['input']>;
  totalCFAAmountStreamed_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalCFAAmountStreamed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalCFAAmountStreamed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalCFAAmountStreamed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalCFAAmountStreamed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalCFAAmountStreamed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalCFAAmountStreamed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalAmountTransferred?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountTransferred_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountTransferred_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountTransferred_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountTransferred_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountTransferred_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountTransferred_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalAmountTransferred_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalAmountDistributed?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountDistributed_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountDistributed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountDistributed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountDistributed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountDistributed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountDistributed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalAmountDistributed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalSupply?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalSupply_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalNumberOfAccounts?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfAccounts_not?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfAccounts_gt?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfAccounts_lt?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfAccounts_gte?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfAccounts_lte?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfAccounts_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalNumberOfAccounts_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalNumberOfHolders?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfHolders_not?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfHolders_gt?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfHolders_lt?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfHolders_gte?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfHolders_lte?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfHolders_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalNumberOfHolders_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  token?: InputMaybe<Scalars['String']['input']>;
  token_not?: InputMaybe<Scalars['String']['input']>;
  token_gt?: InputMaybe<Scalars['String']['input']>;
  token_lt?: InputMaybe<Scalars['String']['input']>;
  token_gte?: InputMaybe<Scalars['String']['input']>;
  token_lte?: InputMaybe<Scalars['String']['input']>;
  token_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_contains?: InputMaybe<Scalars['String']['input']>;
  token_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_contains?: InputMaybe<Scalars['String']['input']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_?: InputMaybe<Token_filter>;
  tokenStatistic?: InputMaybe<Scalars['String']['input']>;
  tokenStatistic_not?: InputMaybe<Scalars['String']['input']>;
  tokenStatistic_gt?: InputMaybe<Scalars['String']['input']>;
  tokenStatistic_lt?: InputMaybe<Scalars['String']['input']>;
  tokenStatistic_gte?: InputMaybe<Scalars['String']['input']>;
  tokenStatistic_lte?: InputMaybe<Scalars['String']['input']>;
  tokenStatistic_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tokenStatistic_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tokenStatistic_contains?: InputMaybe<Scalars['String']['input']>;
  tokenStatistic_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenStatistic_not_contains?: InputMaybe<Scalars['String']['input']>;
  tokenStatistic_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenStatistic_starts_with?: InputMaybe<Scalars['String']['input']>;
  tokenStatistic_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenStatistic_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tokenStatistic_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenStatistic_ends_with?: InputMaybe<Scalars['String']['input']>;
  tokenStatistic_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenStatistic_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tokenStatistic_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenStatistic_?: InputMaybe<TokenStatistic_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TokenStatisticLog_filter>>>;
  or?: InputMaybe<Array<InputMaybe<TokenStatisticLog_filter>>>;
};

export type TokenStatisticLog_orderBy =
  | 'id'
  | 'timestamp'
  | 'blockNumber'
  | 'transactionHash'
  | 'logIndex'
  | 'order'
  | 'triggeredByEventName'
  | 'totalNumberOfActiveStreams'
  | 'totalCFANumberOfActiveStreams'
  | 'totalGDANumberOfActiveStreams'
  | 'totalNumberOfClosedStreams'
  | 'totalCFANumberOfClosedStreams'
  | 'totalGDANumberOfClosedStreams'
  | 'totalNumberOfIndexes'
  | 'totalNumberOfActiveIndexes'
  | 'totalSubscriptionsWithUnits'
  | 'totalApprovedSubscriptions'
  | 'totalNumberOfPools'
  | 'totalNumberOfActivePools'
  | 'totalMembershipsWithUnits'
  | 'totalConnectedMemberships'
  | 'totalDeposit'
  | 'totalCFADeposit'
  | 'totalGDADeposit'
  | 'totalOutflowRate'
  | 'totalCFAOutflowRate'
  | 'totalGDAOutflowRate'
  | 'totalAmountStreamed'
  | 'totalCFAAmountStreamed'
  | 'totalAmountTransferred'
  | 'totalAmountDistributed'
  | 'totalSupply'
  | 'totalNumberOfAccounts'
  | 'totalNumberOfHolders'
  | 'token'
  | 'token__id'
  | 'token__createdAtTimestamp'
  | 'token__createdAtBlockNumber'
  | 'token__decimals'
  | 'token__name'
  | 'token__symbol'
  | 'token__isSuperToken'
  | 'token__isNativeAssetSuperToken'
  | 'token__isListed'
  | 'token__underlyingAddress'
  | 'tokenStatistic'
  | 'tokenStatistic__id'
  | 'tokenStatistic__updatedAtTimestamp'
  | 'tokenStatistic__updatedAtBlockNumber'
  | 'tokenStatistic__totalNumberOfActiveStreams'
  | 'tokenStatistic__totalCFANumberOfActiveStreams'
  | 'tokenStatistic__totalGDANumberOfActiveStreams'
  | 'tokenStatistic__totalNumberOfClosedStreams'
  | 'tokenStatistic__totalCFANumberOfClosedStreams'
  | 'tokenStatistic__totalGDANumberOfClosedStreams'
  | 'tokenStatistic__totalNumberOfIndexes'
  | 'tokenStatistic__totalNumberOfActiveIndexes'
  | 'tokenStatistic__totalSubscriptionsWithUnits'
  | 'tokenStatistic__totalApprovedSubscriptions'
  | 'tokenStatistic__totalNumberOfPools'
  | 'tokenStatistic__totalNumberOfActivePools'
  | 'tokenStatistic__totalMembershipsWithUnits'
  | 'tokenStatistic__totalConnectedMemberships'
  | 'tokenStatistic__totalDeposit'
  | 'tokenStatistic__totalCFADeposit'
  | 'tokenStatistic__totalGDADeposit'
  | 'tokenStatistic__totalOutflowRate'
  | 'tokenStatistic__totalCFAOutflowRate'
  | 'tokenStatistic__totalGDAOutflowRate'
  | 'tokenStatistic__totalAmountStreamedUntilUpdatedAt'
  | 'tokenStatistic__totalCFAAmountStreamedUntilUpdatedAt'
  | 'tokenStatistic__totalAmountTransferredUntilUpdatedAt'
  | 'tokenStatistic__totalAmountDistributedUntilUpdatedAt'
  | 'tokenStatistic__totalSupply'
  | 'tokenStatistic__totalNumberOfAccounts'
  | 'tokenStatistic__totalNumberOfHolders';

export type TokenStatistic_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  updatedAtTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAtBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalNumberOfActiveStreams?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfActiveStreams_not?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfActiveStreams_gt?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfActiveStreams_lt?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfActiveStreams_gte?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfActiveStreams_lte?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfActiveStreams_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalNumberOfActiveStreams_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalCFANumberOfActiveStreams?: InputMaybe<Scalars['Int']['input']>;
  totalCFANumberOfActiveStreams_not?: InputMaybe<Scalars['Int']['input']>;
  totalCFANumberOfActiveStreams_gt?: InputMaybe<Scalars['Int']['input']>;
  totalCFANumberOfActiveStreams_lt?: InputMaybe<Scalars['Int']['input']>;
  totalCFANumberOfActiveStreams_gte?: InputMaybe<Scalars['Int']['input']>;
  totalCFANumberOfActiveStreams_lte?: InputMaybe<Scalars['Int']['input']>;
  totalCFANumberOfActiveStreams_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalCFANumberOfActiveStreams_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalGDANumberOfActiveStreams?: InputMaybe<Scalars['Int']['input']>;
  totalGDANumberOfActiveStreams_not?: InputMaybe<Scalars['Int']['input']>;
  totalGDANumberOfActiveStreams_gt?: InputMaybe<Scalars['Int']['input']>;
  totalGDANumberOfActiveStreams_lt?: InputMaybe<Scalars['Int']['input']>;
  totalGDANumberOfActiveStreams_gte?: InputMaybe<Scalars['Int']['input']>;
  totalGDANumberOfActiveStreams_lte?: InputMaybe<Scalars['Int']['input']>;
  totalGDANumberOfActiveStreams_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalGDANumberOfActiveStreams_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalNumberOfClosedStreams?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfClosedStreams_not?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfClosedStreams_gt?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfClosedStreams_lt?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfClosedStreams_gte?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfClosedStreams_lte?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfClosedStreams_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalNumberOfClosedStreams_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalCFANumberOfClosedStreams?: InputMaybe<Scalars['Int']['input']>;
  totalCFANumberOfClosedStreams_not?: InputMaybe<Scalars['Int']['input']>;
  totalCFANumberOfClosedStreams_gt?: InputMaybe<Scalars['Int']['input']>;
  totalCFANumberOfClosedStreams_lt?: InputMaybe<Scalars['Int']['input']>;
  totalCFANumberOfClosedStreams_gte?: InputMaybe<Scalars['Int']['input']>;
  totalCFANumberOfClosedStreams_lte?: InputMaybe<Scalars['Int']['input']>;
  totalCFANumberOfClosedStreams_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalCFANumberOfClosedStreams_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalGDANumberOfClosedStreams?: InputMaybe<Scalars['Int']['input']>;
  totalGDANumberOfClosedStreams_not?: InputMaybe<Scalars['Int']['input']>;
  totalGDANumberOfClosedStreams_gt?: InputMaybe<Scalars['Int']['input']>;
  totalGDANumberOfClosedStreams_lt?: InputMaybe<Scalars['Int']['input']>;
  totalGDANumberOfClosedStreams_gte?: InputMaybe<Scalars['Int']['input']>;
  totalGDANumberOfClosedStreams_lte?: InputMaybe<Scalars['Int']['input']>;
  totalGDANumberOfClosedStreams_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalGDANumberOfClosedStreams_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalNumberOfIndexes?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfIndexes_not?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfIndexes_gt?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfIndexes_lt?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfIndexes_gte?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfIndexes_lte?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfIndexes_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalNumberOfIndexes_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalNumberOfActiveIndexes?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfActiveIndexes_not?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfActiveIndexes_gt?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfActiveIndexes_lt?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfActiveIndexes_gte?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfActiveIndexes_lte?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfActiveIndexes_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalNumberOfActiveIndexes_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalSubscriptionsWithUnits?: InputMaybe<Scalars['Int']['input']>;
  totalSubscriptionsWithUnits_not?: InputMaybe<Scalars['Int']['input']>;
  totalSubscriptionsWithUnits_gt?: InputMaybe<Scalars['Int']['input']>;
  totalSubscriptionsWithUnits_lt?: InputMaybe<Scalars['Int']['input']>;
  totalSubscriptionsWithUnits_gte?: InputMaybe<Scalars['Int']['input']>;
  totalSubscriptionsWithUnits_lte?: InputMaybe<Scalars['Int']['input']>;
  totalSubscriptionsWithUnits_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalSubscriptionsWithUnits_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalApprovedSubscriptions?: InputMaybe<Scalars['Int']['input']>;
  totalApprovedSubscriptions_not?: InputMaybe<Scalars['Int']['input']>;
  totalApprovedSubscriptions_gt?: InputMaybe<Scalars['Int']['input']>;
  totalApprovedSubscriptions_lt?: InputMaybe<Scalars['Int']['input']>;
  totalApprovedSubscriptions_gte?: InputMaybe<Scalars['Int']['input']>;
  totalApprovedSubscriptions_lte?: InputMaybe<Scalars['Int']['input']>;
  totalApprovedSubscriptions_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalApprovedSubscriptions_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalNumberOfPools?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfPools_not?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfPools_gt?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfPools_lt?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfPools_gte?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfPools_lte?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfPools_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalNumberOfPools_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalNumberOfActivePools?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfActivePools_not?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfActivePools_gt?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfActivePools_lt?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfActivePools_gte?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfActivePools_lte?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfActivePools_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalNumberOfActivePools_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalMembershipsWithUnits?: InputMaybe<Scalars['Int']['input']>;
  totalMembershipsWithUnits_not?: InputMaybe<Scalars['Int']['input']>;
  totalMembershipsWithUnits_gt?: InputMaybe<Scalars['Int']['input']>;
  totalMembershipsWithUnits_lt?: InputMaybe<Scalars['Int']['input']>;
  totalMembershipsWithUnits_gte?: InputMaybe<Scalars['Int']['input']>;
  totalMembershipsWithUnits_lte?: InputMaybe<Scalars['Int']['input']>;
  totalMembershipsWithUnits_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalMembershipsWithUnits_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalConnectedMemberships?: InputMaybe<Scalars['Int']['input']>;
  totalConnectedMemberships_not?: InputMaybe<Scalars['Int']['input']>;
  totalConnectedMemberships_gt?: InputMaybe<Scalars['Int']['input']>;
  totalConnectedMemberships_lt?: InputMaybe<Scalars['Int']['input']>;
  totalConnectedMemberships_gte?: InputMaybe<Scalars['Int']['input']>;
  totalConnectedMemberships_lte?: InputMaybe<Scalars['Int']['input']>;
  totalConnectedMemberships_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalConnectedMemberships_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalDeposit?: InputMaybe<Scalars['BigInt']['input']>;
  totalDeposit_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalDeposit_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalDeposit_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalDeposit_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalDeposit_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalDeposit_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalDeposit_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalCFADeposit?: InputMaybe<Scalars['BigInt']['input']>;
  totalCFADeposit_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalCFADeposit_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalCFADeposit_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalCFADeposit_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalCFADeposit_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalCFADeposit_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalCFADeposit_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalGDADeposit?: InputMaybe<Scalars['BigInt']['input']>;
  totalGDADeposit_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalGDADeposit_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalGDADeposit_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalGDADeposit_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalGDADeposit_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalGDADeposit_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalGDADeposit_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalOutflowRate?: InputMaybe<Scalars['BigInt']['input']>;
  totalOutflowRate_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalOutflowRate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalOutflowRate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalOutflowRate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalOutflowRate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalOutflowRate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalOutflowRate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalCFAOutflowRate?: InputMaybe<Scalars['BigInt']['input']>;
  totalCFAOutflowRate_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalCFAOutflowRate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalCFAOutflowRate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalCFAOutflowRate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalCFAOutflowRate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalCFAOutflowRate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalCFAOutflowRate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalGDAOutflowRate?: InputMaybe<Scalars['BigInt']['input']>;
  totalGDAOutflowRate_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalGDAOutflowRate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalGDAOutflowRate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalGDAOutflowRate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalGDAOutflowRate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalGDAOutflowRate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalGDAOutflowRate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalAmountStreamedUntilUpdatedAt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamedUntilUpdatedAt_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamedUntilUpdatedAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamedUntilUpdatedAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamedUntilUpdatedAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamedUntilUpdatedAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamedUntilUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalAmountStreamedUntilUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalCFAAmountStreamedUntilUpdatedAt?: InputMaybe<Scalars['BigInt']['input']>;
  totalCFAAmountStreamedUntilUpdatedAt_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalCFAAmountStreamedUntilUpdatedAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalCFAAmountStreamedUntilUpdatedAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalCFAAmountStreamedUntilUpdatedAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalCFAAmountStreamedUntilUpdatedAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalCFAAmountStreamedUntilUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalCFAAmountStreamedUntilUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalAmountTransferredUntilUpdatedAt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountTransferredUntilUpdatedAt_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountTransferredUntilUpdatedAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountTransferredUntilUpdatedAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountTransferredUntilUpdatedAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountTransferredUntilUpdatedAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountTransferredUntilUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalAmountTransferredUntilUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalAmountDistributedUntilUpdatedAt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountDistributedUntilUpdatedAt_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountDistributedUntilUpdatedAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountDistributedUntilUpdatedAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountDistributedUntilUpdatedAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountDistributedUntilUpdatedAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountDistributedUntilUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalAmountDistributedUntilUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalSupply?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalSupply_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalNumberOfAccounts?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfAccounts_not?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfAccounts_gt?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfAccounts_lt?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfAccounts_gte?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfAccounts_lte?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfAccounts_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalNumberOfAccounts_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalNumberOfHolders?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfHolders_not?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfHolders_gt?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfHolders_lt?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfHolders_gte?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfHolders_lte?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfHolders_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalNumberOfHolders_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  token?: InputMaybe<Scalars['String']['input']>;
  token_not?: InputMaybe<Scalars['String']['input']>;
  token_gt?: InputMaybe<Scalars['String']['input']>;
  token_lt?: InputMaybe<Scalars['String']['input']>;
  token_gte?: InputMaybe<Scalars['String']['input']>;
  token_lte?: InputMaybe<Scalars['String']['input']>;
  token_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_contains?: InputMaybe<Scalars['String']['input']>;
  token_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_contains?: InputMaybe<Scalars['String']['input']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_?: InputMaybe<Token_filter>;
  tokenStatisticLogs_?: InputMaybe<TokenStatisticLog_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TokenStatistic_filter>>>;
  or?: InputMaybe<Array<InputMaybe<TokenStatistic_filter>>>;
};

export type TokenStatistic_orderBy =
  | 'id'
  | 'updatedAtTimestamp'
  | 'updatedAtBlockNumber'
  | 'totalNumberOfActiveStreams'
  | 'totalCFANumberOfActiveStreams'
  | 'totalGDANumberOfActiveStreams'
  | 'totalNumberOfClosedStreams'
  | 'totalCFANumberOfClosedStreams'
  | 'totalGDANumberOfClosedStreams'
  | 'totalNumberOfIndexes'
  | 'totalNumberOfActiveIndexes'
  | 'totalSubscriptionsWithUnits'
  | 'totalApprovedSubscriptions'
  | 'totalNumberOfPools'
  | 'totalNumberOfActivePools'
  | 'totalMembershipsWithUnits'
  | 'totalConnectedMemberships'
  | 'totalDeposit'
  | 'totalCFADeposit'
  | 'totalGDADeposit'
  | 'totalOutflowRate'
  | 'totalCFAOutflowRate'
  | 'totalGDAOutflowRate'
  | 'totalAmountStreamedUntilUpdatedAt'
  | 'totalCFAAmountStreamedUntilUpdatedAt'
  | 'totalAmountTransferredUntilUpdatedAt'
  | 'totalAmountDistributedUntilUpdatedAt'
  | 'totalSupply'
  | 'totalNumberOfAccounts'
  | 'totalNumberOfHolders'
  | 'token'
  | 'token__id'
  | 'token__createdAtTimestamp'
  | 'token__createdAtBlockNumber'
  | 'token__decimals'
  | 'token__name'
  | 'token__symbol'
  | 'token__isSuperToken'
  | 'token__isNativeAssetSuperToken'
  | 'token__isListed'
  | 'token__underlyingAddress'
  | 'tokenStatisticLogs';

export type TokenUpgradedEvent = Event & {
  id: Scalars['ID']['output'];
  account: Account;
  transactionHash: Scalars['Bytes']['output'];
  gasPrice: Scalars['BigInt']['output'];
  gasUsed?: Maybe<Scalars['BigInt']['output']>;
  timestamp: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   * addresses[1] = `account`
   *
   */
  addresses: Array<Scalars['Bytes']['output']>;
  blockNumber: Scalars['BigInt']['output'];
  logIndex: Scalars['BigInt']['output'];
  order: Scalars['BigInt']['output'];
  token: Scalars['Bytes']['output'];
  amount: Scalars['BigInt']['output'];
};

export type TokenUpgradedEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  account?: InputMaybe<Scalars['String']['input']>;
  account_not?: InputMaybe<Scalars['String']['input']>;
  account_gt?: InputMaybe<Scalars['String']['input']>;
  account_lt?: InputMaybe<Scalars['String']['input']>;
  account_gte?: InputMaybe<Scalars['String']['input']>;
  account_lte?: InputMaybe<Scalars['String']['input']>;
  account_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_contains?: InputMaybe<Scalars['String']['input']>;
  account_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_contains?: InputMaybe<Scalars['String']['input']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_?: InputMaybe<Account_filter>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order?: InputMaybe<Scalars['BigInt']['input']>;
  order_not?: InputMaybe<Scalars['BigInt']['input']>;
  order_gt?: InputMaybe<Scalars['BigInt']['input']>;
  order_lt?: InputMaybe<Scalars['BigInt']['input']>;
  order_gte?: InputMaybe<Scalars['BigInt']['input']>;
  order_lte?: InputMaybe<Scalars['BigInt']['input']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  token?: InputMaybe<Scalars['Bytes']['input']>;
  token_not?: InputMaybe<Scalars['Bytes']['input']>;
  token_gt?: InputMaybe<Scalars['Bytes']['input']>;
  token_lt?: InputMaybe<Scalars['Bytes']['input']>;
  token_gte?: InputMaybe<Scalars['Bytes']['input']>;
  token_lte?: InputMaybe<Scalars['Bytes']['input']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TokenUpgradedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<TokenUpgradedEvent_filter>>>;
};

export type TokenUpgradedEvent_orderBy =
  | 'id'
  | 'account'
  | 'account__id'
  | 'account__createdAtTimestamp'
  | 'account__createdAtBlockNumber'
  | 'account__updatedAtTimestamp'
  | 'account__updatedAtBlockNumber'
  | 'account__isSuperApp'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'token'
  | 'amount';

export type Token_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  createdAtTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAtBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  decimals?: InputMaybe<Scalars['Int']['input']>;
  decimals_not?: InputMaybe<Scalars['Int']['input']>;
  decimals_gt?: InputMaybe<Scalars['Int']['input']>;
  decimals_lt?: InputMaybe<Scalars['Int']['input']>;
  decimals_gte?: InputMaybe<Scalars['Int']['input']>;
  decimals_lte?: InputMaybe<Scalars['Int']['input']>;
  decimals_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  decimals_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  symbol_not?: InputMaybe<Scalars['String']['input']>;
  symbol_gt?: InputMaybe<Scalars['String']['input']>;
  symbol_lt?: InputMaybe<Scalars['String']['input']>;
  symbol_gte?: InputMaybe<Scalars['String']['input']>;
  symbol_lte?: InputMaybe<Scalars['String']['input']>;
  symbol_in?: InputMaybe<Array<Scalars['String']['input']>>;
  symbol_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  symbol_contains?: InputMaybe<Scalars['String']['input']>;
  symbol_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_contains?: InputMaybe<Scalars['String']['input']>;
  symbol_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_starts_with?: InputMaybe<Scalars['String']['input']>;
  symbol_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_ends_with?: InputMaybe<Scalars['String']['input']>;
  symbol_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  isSuperToken?: InputMaybe<Scalars['Boolean']['input']>;
  isSuperToken_not?: InputMaybe<Scalars['Boolean']['input']>;
  isSuperToken_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isSuperToken_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isNativeAssetSuperToken?: InputMaybe<Scalars['Boolean']['input']>;
  isNativeAssetSuperToken_not?: InputMaybe<Scalars['Boolean']['input']>;
  isNativeAssetSuperToken_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isNativeAssetSuperToken_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isListed?: InputMaybe<Scalars['Boolean']['input']>;
  isListed_not?: InputMaybe<Scalars['Boolean']['input']>;
  isListed_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isListed_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  underlyingAddress?: InputMaybe<Scalars['Bytes']['input']>;
  underlyingAddress_not?: InputMaybe<Scalars['Bytes']['input']>;
  underlyingAddress_gt?: InputMaybe<Scalars['Bytes']['input']>;
  underlyingAddress_lt?: InputMaybe<Scalars['Bytes']['input']>;
  underlyingAddress_gte?: InputMaybe<Scalars['Bytes']['input']>;
  underlyingAddress_lte?: InputMaybe<Scalars['Bytes']['input']>;
  underlyingAddress_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  underlyingAddress_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  underlyingAddress_contains?: InputMaybe<Scalars['Bytes']['input']>;
  underlyingAddress_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  underlyingToken?: InputMaybe<Scalars['String']['input']>;
  underlyingToken_not?: InputMaybe<Scalars['String']['input']>;
  underlyingToken_gt?: InputMaybe<Scalars['String']['input']>;
  underlyingToken_lt?: InputMaybe<Scalars['String']['input']>;
  underlyingToken_gte?: InputMaybe<Scalars['String']['input']>;
  underlyingToken_lte?: InputMaybe<Scalars['String']['input']>;
  underlyingToken_in?: InputMaybe<Array<Scalars['String']['input']>>;
  underlyingToken_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  underlyingToken_contains?: InputMaybe<Scalars['String']['input']>;
  underlyingToken_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  underlyingToken_not_contains?: InputMaybe<Scalars['String']['input']>;
  underlyingToken_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  underlyingToken_starts_with?: InputMaybe<Scalars['String']['input']>;
  underlyingToken_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  underlyingToken_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  underlyingToken_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  underlyingToken_ends_with?: InputMaybe<Scalars['String']['input']>;
  underlyingToken_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  underlyingToken_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  underlyingToken_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  underlyingToken_?: InputMaybe<Token_filter>;
  governanceConfig?: InputMaybe<Scalars['String']['input']>;
  governanceConfig_not?: InputMaybe<Scalars['String']['input']>;
  governanceConfig_gt?: InputMaybe<Scalars['String']['input']>;
  governanceConfig_lt?: InputMaybe<Scalars['String']['input']>;
  governanceConfig_gte?: InputMaybe<Scalars['String']['input']>;
  governanceConfig_lte?: InputMaybe<Scalars['String']['input']>;
  governanceConfig_in?: InputMaybe<Array<Scalars['String']['input']>>;
  governanceConfig_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  governanceConfig_contains?: InputMaybe<Scalars['String']['input']>;
  governanceConfig_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  governanceConfig_not_contains?: InputMaybe<Scalars['String']['input']>;
  governanceConfig_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  governanceConfig_starts_with?: InputMaybe<Scalars['String']['input']>;
  governanceConfig_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  governanceConfig_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  governanceConfig_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  governanceConfig_ends_with?: InputMaybe<Scalars['String']['input']>;
  governanceConfig_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  governanceConfig_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  governanceConfig_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  governanceConfig_?: InputMaybe<TokenGovernanceConfig_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Token_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Token_filter>>>;
};

export type Token_orderBy =
  | 'id'
  | 'createdAtTimestamp'
  | 'createdAtBlockNumber'
  | 'decimals'
  | 'name'
  | 'symbol'
  | 'isSuperToken'
  | 'isNativeAssetSuperToken'
  | 'isListed'
  | 'underlyingAddress'
  | 'underlyingToken'
  | 'underlyingToken__id'
  | 'underlyingToken__createdAtTimestamp'
  | 'underlyingToken__createdAtBlockNumber'
  | 'underlyingToken__decimals'
  | 'underlyingToken__name'
  | 'underlyingToken__symbol'
  | 'underlyingToken__isSuperToken'
  | 'underlyingToken__isNativeAssetSuperToken'
  | 'underlyingToken__isListed'
  | 'underlyingToken__underlyingAddress'
  | 'governanceConfig'
  | 'governanceConfig__id'
  | 'governanceConfig__createdAtTimestamp'
  | 'governanceConfig__createdAtBlockNumber'
  | 'governanceConfig__updatedAtTimestamp'
  | 'governanceConfig__updatedAtBlockNumber'
  | 'governanceConfig__isDefault'
  | 'governanceConfig__rewardAddress'
  | 'governanceConfig__liquidationPeriod'
  | 'governanceConfig__patricianPeriod'
  | 'governanceConfig__minimumDeposit';

export type TransferEvent = Event & {
  id: Scalars['ID']['output'];
  transactionHash: Scalars['Bytes']['output'];
  gasPrice: Scalars['BigInt']['output'];
  gasUsed?: Maybe<Scalars['BigInt']['output']>;
  timestamp: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token`
   * addresses[1] = `from`
   * addresses[2] = `to`
   *
   */
  addresses: Array<Scalars['Bytes']['output']>;
  blockNumber: Scalars['BigInt']['output'];
  logIndex: Scalars['BigInt']['output'];
  order: Scalars['BigInt']['output'];
  from: Account;
  to: Account;
  value: Scalars['BigInt']['output'];
  token: Scalars['Bytes']['output'];
};

export type TransferEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order?: InputMaybe<Scalars['BigInt']['input']>;
  order_not?: InputMaybe<Scalars['BigInt']['input']>;
  order_gt?: InputMaybe<Scalars['BigInt']['input']>;
  order_lt?: InputMaybe<Scalars['BigInt']['input']>;
  order_gte?: InputMaybe<Scalars['BigInt']['input']>;
  order_lte?: InputMaybe<Scalars['BigInt']['input']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  from?: InputMaybe<Scalars['String']['input']>;
  from_not?: InputMaybe<Scalars['String']['input']>;
  from_gt?: InputMaybe<Scalars['String']['input']>;
  from_lt?: InputMaybe<Scalars['String']['input']>;
  from_gte?: InputMaybe<Scalars['String']['input']>;
  from_lte?: InputMaybe<Scalars['String']['input']>;
  from_in?: InputMaybe<Array<Scalars['String']['input']>>;
  from_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  from_contains?: InputMaybe<Scalars['String']['input']>;
  from_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  from_not_contains?: InputMaybe<Scalars['String']['input']>;
  from_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  from_starts_with?: InputMaybe<Scalars['String']['input']>;
  from_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  from_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  from_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  from_ends_with?: InputMaybe<Scalars['String']['input']>;
  from_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  from_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  from_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  from_?: InputMaybe<Account_filter>;
  to?: InputMaybe<Scalars['String']['input']>;
  to_not?: InputMaybe<Scalars['String']['input']>;
  to_gt?: InputMaybe<Scalars['String']['input']>;
  to_lt?: InputMaybe<Scalars['String']['input']>;
  to_gte?: InputMaybe<Scalars['String']['input']>;
  to_lte?: InputMaybe<Scalars['String']['input']>;
  to_in?: InputMaybe<Array<Scalars['String']['input']>>;
  to_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  to_contains?: InputMaybe<Scalars['String']['input']>;
  to_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  to_not_contains?: InputMaybe<Scalars['String']['input']>;
  to_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  to_starts_with?: InputMaybe<Scalars['String']['input']>;
  to_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  to_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  to_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  to_ends_with?: InputMaybe<Scalars['String']['input']>;
  to_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  to_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  to_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  to_?: InputMaybe<Account_filter>;
  value?: InputMaybe<Scalars['BigInt']['input']>;
  value_not?: InputMaybe<Scalars['BigInt']['input']>;
  value_gt?: InputMaybe<Scalars['BigInt']['input']>;
  value_lt?: InputMaybe<Scalars['BigInt']['input']>;
  value_gte?: InputMaybe<Scalars['BigInt']['input']>;
  value_lte?: InputMaybe<Scalars['BigInt']['input']>;
  value_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  value_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  token?: InputMaybe<Scalars['Bytes']['input']>;
  token_not?: InputMaybe<Scalars['Bytes']['input']>;
  token_gt?: InputMaybe<Scalars['Bytes']['input']>;
  token_lt?: InputMaybe<Scalars['Bytes']['input']>;
  token_gte?: InputMaybe<Scalars['Bytes']['input']>;
  token_lte?: InputMaybe<Scalars['Bytes']['input']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TransferEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<TransferEvent_filter>>>;
};

export type TransferEvent_orderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'from'
  | 'from__id'
  | 'from__createdAtTimestamp'
  | 'from__createdAtBlockNumber'
  | 'from__updatedAtTimestamp'
  | 'from__updatedAtBlockNumber'
  | 'from__isSuperApp'
  | 'to'
  | 'to__id'
  | 'to__createdAtTimestamp'
  | 'to__createdAtBlockNumber'
  | 'to__updatedAtTimestamp'
  | 'to__updatedAtBlockNumber'
  | 'to__isSuperApp'
  | 'value'
  | 'token';

export type TrustedForwarderChangedEvent = Event & {
  id: Scalars['ID']['output'];
  transactionHash: Scalars['Bytes']['output'];
  gasPrice: Scalars['BigInt']['output'];
  gasUsed?: Maybe<Scalars['BigInt']['output']>;
  timestamp: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  /**
   * The address of the governance contract the event was emitted from.
   *
   */
  governanceAddress: Scalars['Bytes']['output'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `governanceAddress`
   * addresses[1] = `host`
   * addresses[2] = `superToken`
   * addresses[3] = `forwarder`
   *
   */
  addresses: Array<Scalars['Bytes']['output']>;
  blockNumber: Scalars['BigInt']['output'];
  logIndex: Scalars['BigInt']['output'];
  order: Scalars['BigInt']['output'];
  host: Scalars['Bytes']['output'];
  superToken: Scalars['Bytes']['output'];
  isKeySet: Scalars['Boolean']['output'];
  forwarder: Scalars['Bytes']['output'];
  enabled: Scalars['Boolean']['output'];
};

export type TrustedForwarderChangedEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  governanceAddress?: InputMaybe<Scalars['Bytes']['input']>;
  governanceAddress_not?: InputMaybe<Scalars['Bytes']['input']>;
  governanceAddress_gt?: InputMaybe<Scalars['Bytes']['input']>;
  governanceAddress_lt?: InputMaybe<Scalars['Bytes']['input']>;
  governanceAddress_gte?: InputMaybe<Scalars['Bytes']['input']>;
  governanceAddress_lte?: InputMaybe<Scalars['Bytes']['input']>;
  governanceAddress_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  governanceAddress_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  governanceAddress_contains?: InputMaybe<Scalars['Bytes']['input']>;
  governanceAddress_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order?: InputMaybe<Scalars['BigInt']['input']>;
  order_not?: InputMaybe<Scalars['BigInt']['input']>;
  order_gt?: InputMaybe<Scalars['BigInt']['input']>;
  order_lt?: InputMaybe<Scalars['BigInt']['input']>;
  order_gte?: InputMaybe<Scalars['BigInt']['input']>;
  order_lte?: InputMaybe<Scalars['BigInt']['input']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  host?: InputMaybe<Scalars['Bytes']['input']>;
  host_not?: InputMaybe<Scalars['Bytes']['input']>;
  host_gt?: InputMaybe<Scalars['Bytes']['input']>;
  host_lt?: InputMaybe<Scalars['Bytes']['input']>;
  host_gte?: InputMaybe<Scalars['Bytes']['input']>;
  host_lte?: InputMaybe<Scalars['Bytes']['input']>;
  host_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  host_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  host_contains?: InputMaybe<Scalars['Bytes']['input']>;
  host_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  superToken?: InputMaybe<Scalars['Bytes']['input']>;
  superToken_not?: InputMaybe<Scalars['Bytes']['input']>;
  superToken_gt?: InputMaybe<Scalars['Bytes']['input']>;
  superToken_lt?: InputMaybe<Scalars['Bytes']['input']>;
  superToken_gte?: InputMaybe<Scalars['Bytes']['input']>;
  superToken_lte?: InputMaybe<Scalars['Bytes']['input']>;
  superToken_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  superToken_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  superToken_contains?: InputMaybe<Scalars['Bytes']['input']>;
  superToken_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  isKeySet?: InputMaybe<Scalars['Boolean']['input']>;
  isKeySet_not?: InputMaybe<Scalars['Boolean']['input']>;
  isKeySet_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isKeySet_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  forwarder?: InputMaybe<Scalars['Bytes']['input']>;
  forwarder_not?: InputMaybe<Scalars['Bytes']['input']>;
  forwarder_gt?: InputMaybe<Scalars['Bytes']['input']>;
  forwarder_lt?: InputMaybe<Scalars['Bytes']['input']>;
  forwarder_gte?: InputMaybe<Scalars['Bytes']['input']>;
  forwarder_lte?: InputMaybe<Scalars['Bytes']['input']>;
  forwarder_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  forwarder_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  forwarder_contains?: InputMaybe<Scalars['Bytes']['input']>;
  forwarder_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  enabled_not?: InputMaybe<Scalars['Boolean']['input']>;
  enabled_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  enabled_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TrustedForwarderChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<TrustedForwarderChangedEvent_filter>>>;
};

export type TrustedForwarderChangedEvent_orderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'governanceAddress'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'host'
  | 'superToken'
  | 'isKeySet'
  | 'forwarder'
  | 'enabled';

export type _Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']['output']>;
  /** The block number */
  number: Scalars['Int']['output'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']['output']>;
  /** The hash of the parent block */
  parentHash?: Maybe<Scalars['Bytes']['output']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String']['output'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean']['output'];
};

export type _SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

  export type QuerySdk = {
      /** null **/
  flowUpdatedEvent: InContextSdkMethod<Query['flowUpdatedEvent'], QueryflowUpdatedEventArgs, MeshContext>,
  /** null **/
  flowUpdatedEvents: InContextSdkMethod<Query['flowUpdatedEvents'], QueryflowUpdatedEventsArgs, MeshContext>,
  /** null **/
  flowOperatorUpdatedEvent: InContextSdkMethod<Query['flowOperatorUpdatedEvent'], QueryflowOperatorUpdatedEventArgs, MeshContext>,
  /** null **/
  flowOperatorUpdatedEvents: InContextSdkMethod<Query['flowOperatorUpdatedEvents'], QueryflowOperatorUpdatedEventsArgs, MeshContext>,
  /** null **/
  indexCreatedEvent: InContextSdkMethod<Query['indexCreatedEvent'], QueryindexCreatedEventArgs, MeshContext>,
  /** null **/
  indexCreatedEvents: InContextSdkMethod<Query['indexCreatedEvents'], QueryindexCreatedEventsArgs, MeshContext>,
  /** null **/
  indexDistributionClaimedEvent: InContextSdkMethod<Query['indexDistributionClaimedEvent'], QueryindexDistributionClaimedEventArgs, MeshContext>,
  /** null **/
  indexDistributionClaimedEvents: InContextSdkMethod<Query['indexDistributionClaimedEvents'], QueryindexDistributionClaimedEventsArgs, MeshContext>,
  /** null **/
  indexUpdatedEvent: InContextSdkMethod<Query['indexUpdatedEvent'], QueryindexUpdatedEventArgs, MeshContext>,
  /** null **/
  indexUpdatedEvents: InContextSdkMethod<Query['indexUpdatedEvents'], QueryindexUpdatedEventsArgs, MeshContext>,
  /** null **/
  indexSubscribedEvent: InContextSdkMethod<Query['indexSubscribedEvent'], QueryindexSubscribedEventArgs, MeshContext>,
  /** null **/
  indexSubscribedEvents: InContextSdkMethod<Query['indexSubscribedEvents'], QueryindexSubscribedEventsArgs, MeshContext>,
  /** null **/
  indexUnitsUpdatedEvent: InContextSdkMethod<Query['indexUnitsUpdatedEvent'], QueryindexUnitsUpdatedEventArgs, MeshContext>,
  /** null **/
  indexUnitsUpdatedEvents: InContextSdkMethod<Query['indexUnitsUpdatedEvents'], QueryindexUnitsUpdatedEventsArgs, MeshContext>,
  /** null **/
  indexUnsubscribedEvent: InContextSdkMethod<Query['indexUnsubscribedEvent'], QueryindexUnsubscribedEventArgs, MeshContext>,
  /** null **/
  indexUnsubscribedEvents: InContextSdkMethod<Query['indexUnsubscribedEvents'], QueryindexUnsubscribedEventsArgs, MeshContext>,
  /** null **/
  subscriptionApprovedEvent: InContextSdkMethod<Query['subscriptionApprovedEvent'], QuerysubscriptionApprovedEventArgs, MeshContext>,
  /** null **/
  subscriptionApprovedEvents: InContextSdkMethod<Query['subscriptionApprovedEvents'], QuerysubscriptionApprovedEventsArgs, MeshContext>,
  /** null **/
  subscriptionDistributionClaimedEvent: InContextSdkMethod<Query['subscriptionDistributionClaimedEvent'], QuerysubscriptionDistributionClaimedEventArgs, MeshContext>,
  /** null **/
  subscriptionDistributionClaimedEvents: InContextSdkMethod<Query['subscriptionDistributionClaimedEvents'], QuerysubscriptionDistributionClaimedEventsArgs, MeshContext>,
  /** null **/
  subscriptionRevokedEvent: InContextSdkMethod<Query['subscriptionRevokedEvent'], QuerysubscriptionRevokedEventArgs, MeshContext>,
  /** null **/
  subscriptionRevokedEvents: InContextSdkMethod<Query['subscriptionRevokedEvents'], QuerysubscriptionRevokedEventsArgs, MeshContext>,
  /** null **/
  subscriptionUnitsUpdatedEvent: InContextSdkMethod<Query['subscriptionUnitsUpdatedEvent'], QuerysubscriptionUnitsUpdatedEventArgs, MeshContext>,
  /** null **/
  subscriptionUnitsUpdatedEvents: InContextSdkMethod<Query['subscriptionUnitsUpdatedEvents'], QuerysubscriptionUnitsUpdatedEventsArgs, MeshContext>,
  /** null **/
  poolCreatedEvent: InContextSdkMethod<Query['poolCreatedEvent'], QuerypoolCreatedEventArgs, MeshContext>,
  /** null **/
  poolCreatedEvents: InContextSdkMethod<Query['poolCreatedEvents'], QuerypoolCreatedEventsArgs, MeshContext>,
  /** null **/
  poolConnectionUpdatedEvent: InContextSdkMethod<Query['poolConnectionUpdatedEvent'], QuerypoolConnectionUpdatedEventArgs, MeshContext>,
  /** null **/
  poolConnectionUpdatedEvents: InContextSdkMethod<Query['poolConnectionUpdatedEvents'], QuerypoolConnectionUpdatedEventsArgs, MeshContext>,
  /** null **/
  bufferAdjustedEvent: InContextSdkMethod<Query['bufferAdjustedEvent'], QuerybufferAdjustedEventArgs, MeshContext>,
  /** null **/
  bufferAdjustedEvents: InContextSdkMethod<Query['bufferAdjustedEvents'], QuerybufferAdjustedEventsArgs, MeshContext>,
  /** null **/
  instantDistributionUpdatedEvent: InContextSdkMethod<Query['instantDistributionUpdatedEvent'], QueryinstantDistributionUpdatedEventArgs, MeshContext>,
  /** null **/
  instantDistributionUpdatedEvents: InContextSdkMethod<Query['instantDistributionUpdatedEvents'], QueryinstantDistributionUpdatedEventsArgs, MeshContext>,
  /** null **/
  flowDistributionUpdatedEvent: InContextSdkMethod<Query['flowDistributionUpdatedEvent'], QueryflowDistributionUpdatedEventArgs, MeshContext>,
  /** null **/
  flowDistributionUpdatedEvents: InContextSdkMethod<Query['flowDistributionUpdatedEvents'], QueryflowDistributionUpdatedEventsArgs, MeshContext>,
  /** null **/
  distributionClaimedEvent: InContextSdkMethod<Query['distributionClaimedEvent'], QuerydistributionClaimedEventArgs, MeshContext>,
  /** null **/
  distributionClaimedEvents: InContextSdkMethod<Query['distributionClaimedEvents'], QuerydistributionClaimedEventsArgs, MeshContext>,
  /** null **/
  memberUnitsUpdatedEvent: InContextSdkMethod<Query['memberUnitsUpdatedEvent'], QuerymemberUnitsUpdatedEventArgs, MeshContext>,
  /** null **/
  memberUnitsUpdatedEvents: InContextSdkMethod<Query['memberUnitsUpdatedEvents'], QuerymemberUnitsUpdatedEventsArgs, MeshContext>,
  /** null **/
  agreementClassRegisteredEvent: InContextSdkMethod<Query['agreementClassRegisteredEvent'], QueryagreementClassRegisteredEventArgs, MeshContext>,
  /** null **/
  agreementClassRegisteredEvents: InContextSdkMethod<Query['agreementClassRegisteredEvents'], QueryagreementClassRegisteredEventsArgs, MeshContext>,
  /** null **/
  agreementClassUpdatedEvent: InContextSdkMethod<Query['agreementClassUpdatedEvent'], QueryagreementClassUpdatedEventArgs, MeshContext>,
  /** null **/
  agreementClassUpdatedEvents: InContextSdkMethod<Query['agreementClassUpdatedEvents'], QueryagreementClassUpdatedEventsArgs, MeshContext>,
  /** null **/
  appRegisteredEvent: InContextSdkMethod<Query['appRegisteredEvent'], QueryappRegisteredEventArgs, MeshContext>,
  /** null **/
  appRegisteredEvents: InContextSdkMethod<Query['appRegisteredEvents'], QueryappRegisteredEventsArgs, MeshContext>,
  /** null **/
  governanceReplacedEvent: InContextSdkMethod<Query['governanceReplacedEvent'], QuerygovernanceReplacedEventArgs, MeshContext>,
  /** null **/
  governanceReplacedEvents: InContextSdkMethod<Query['governanceReplacedEvents'], QuerygovernanceReplacedEventsArgs, MeshContext>,
  /** null **/
  jailEvent: InContextSdkMethod<Query['jailEvent'], QueryjailEventArgs, MeshContext>,
  /** null **/
  jailEvents: InContextSdkMethod<Query['jailEvents'], QueryjailEventsArgs, MeshContext>,
  /** null **/
  superTokenFactoryUpdatedEvent: InContextSdkMethod<Query['superTokenFactoryUpdatedEvent'], QuerysuperTokenFactoryUpdatedEventArgs, MeshContext>,
  /** null **/
  superTokenFactoryUpdatedEvents: InContextSdkMethod<Query['superTokenFactoryUpdatedEvents'], QuerysuperTokenFactoryUpdatedEventsArgs, MeshContext>,
  /** null **/
  superTokenLogicUpdatedEvent: InContextSdkMethod<Query['superTokenLogicUpdatedEvent'], QuerysuperTokenLogicUpdatedEventArgs, MeshContext>,
  /** null **/
  superTokenLogicUpdatedEvents: InContextSdkMethod<Query['superTokenLogicUpdatedEvents'], QuerysuperTokenLogicUpdatedEventsArgs, MeshContext>,
  /** null **/
  roleAdminChangedEvent: InContextSdkMethod<Query['roleAdminChangedEvent'], QueryroleAdminChangedEventArgs, MeshContext>,
  /** null **/
  roleAdminChangedEvents: InContextSdkMethod<Query['roleAdminChangedEvents'], QueryroleAdminChangedEventsArgs, MeshContext>,
  /** null **/
  roleGrantedEvent: InContextSdkMethod<Query['roleGrantedEvent'], QueryroleGrantedEventArgs, MeshContext>,
  /** null **/
  roleGrantedEvents: InContextSdkMethod<Query['roleGrantedEvents'], QueryroleGrantedEventsArgs, MeshContext>,
  /** null **/
  roleRevokedEvent: InContextSdkMethod<Query['roleRevokedEvent'], QueryroleRevokedEventArgs, MeshContext>,
  /** null **/
  roleRevokedEvents: InContextSdkMethod<Query['roleRevokedEvents'], QueryroleRevokedEventsArgs, MeshContext>,
  /** null **/
  setEvent: InContextSdkMethod<Query['setEvent'], QuerysetEventArgs, MeshContext>,
  /** null **/
  setEvents: InContextSdkMethod<Query['setEvents'], QuerysetEventsArgs, MeshContext>,
  /** null **/
  cfav1LiquidationPeriodChangedEvent: InContextSdkMethod<Query['cfav1LiquidationPeriodChangedEvent'], Querycfav1LiquidationPeriodChangedEventArgs, MeshContext>,
  /** null **/
  cfav1LiquidationPeriodChangedEvents: InContextSdkMethod<Query['cfav1LiquidationPeriodChangedEvents'], Querycfav1LiquidationPeriodChangedEventsArgs, MeshContext>,
  /** null **/
  configChangedEvent: InContextSdkMethod<Query['configChangedEvent'], QueryconfigChangedEventArgs, MeshContext>,
  /** null **/
  configChangedEvents: InContextSdkMethod<Query['configChangedEvents'], QueryconfigChangedEventsArgs, MeshContext>,
  /** null **/
  rewardAddressChangedEvent: InContextSdkMethod<Query['rewardAddressChangedEvent'], QueryrewardAddressChangedEventArgs, MeshContext>,
  /** null **/
  rewardAddressChangedEvents: InContextSdkMethod<Query['rewardAddressChangedEvents'], QueryrewardAddressChangedEventsArgs, MeshContext>,
  /** null **/
  pppconfigurationChangedEvent: InContextSdkMethod<Query['pppconfigurationChangedEvent'], QuerypppconfigurationChangedEventArgs, MeshContext>,
  /** null **/
  pppconfigurationChangedEvents: InContextSdkMethod<Query['pppconfigurationChangedEvents'], QuerypppconfigurationChangedEventsArgs, MeshContext>,
  /** null **/
  superTokenMinimumDepositChangedEvent: InContextSdkMethod<Query['superTokenMinimumDepositChangedEvent'], QuerysuperTokenMinimumDepositChangedEventArgs, MeshContext>,
  /** null **/
  superTokenMinimumDepositChangedEvents: InContextSdkMethod<Query['superTokenMinimumDepositChangedEvents'], QuerysuperTokenMinimumDepositChangedEventsArgs, MeshContext>,
  /** null **/
  trustedForwarderChangedEvent: InContextSdkMethod<Query['trustedForwarderChangedEvent'], QuerytrustedForwarderChangedEventArgs, MeshContext>,
  /** null **/
  trustedForwarderChangedEvents: InContextSdkMethod<Query['trustedForwarderChangedEvents'], QuerytrustedForwarderChangedEventsArgs, MeshContext>,
  /** null **/
  agreementLiquidatedByEvent: InContextSdkMethod<Query['agreementLiquidatedByEvent'], QueryagreementLiquidatedByEventArgs, MeshContext>,
  /** null **/
  agreementLiquidatedByEvents: InContextSdkMethod<Query['agreementLiquidatedByEvents'], QueryagreementLiquidatedByEventsArgs, MeshContext>,
  /** null **/
  agreementLiquidatedV2Event: InContextSdkMethod<Query['agreementLiquidatedV2Event'], QueryagreementLiquidatedV2EventArgs, MeshContext>,
  /** null **/
  agreementLiquidatedV2Events: InContextSdkMethod<Query['agreementLiquidatedV2Events'], QueryagreementLiquidatedV2EventsArgs, MeshContext>,
  /** null **/
  burnedEvent: InContextSdkMethod<Query['burnedEvent'], QueryburnedEventArgs, MeshContext>,
  /** null **/
  burnedEvents: InContextSdkMethod<Query['burnedEvents'], QueryburnedEventsArgs, MeshContext>,
  /** null **/
  mintedEvent: InContextSdkMethod<Query['mintedEvent'], QuerymintedEventArgs, MeshContext>,
  /** null **/
  mintedEvents: InContextSdkMethod<Query['mintedEvents'], QuerymintedEventsArgs, MeshContext>,
  /** null **/
  sentEvent: InContextSdkMethod<Query['sentEvent'], QuerysentEventArgs, MeshContext>,
  /** null **/
  sentEvents: InContextSdkMethod<Query['sentEvents'], QuerysentEventsArgs, MeshContext>,
  /** null **/
  transferEvent: InContextSdkMethod<Query['transferEvent'], QuerytransferEventArgs, MeshContext>,
  /** null **/
  transferEvents: InContextSdkMethod<Query['transferEvents'], QuerytransferEventsArgs, MeshContext>,
  /** null **/
  tokenDowngradedEvent: InContextSdkMethod<Query['tokenDowngradedEvent'], QuerytokenDowngradedEventArgs, MeshContext>,
  /** null **/
  tokenDowngradedEvents: InContextSdkMethod<Query['tokenDowngradedEvents'], QuerytokenDowngradedEventsArgs, MeshContext>,
  /** null **/
  tokenUpgradedEvent: InContextSdkMethod<Query['tokenUpgradedEvent'], QuerytokenUpgradedEventArgs, MeshContext>,
  /** null **/
  tokenUpgradedEvents: InContextSdkMethod<Query['tokenUpgradedEvents'], QuerytokenUpgradedEventsArgs, MeshContext>,
  /** null **/
  approvalEvent: InContextSdkMethod<Query['approvalEvent'], QueryapprovalEventArgs, MeshContext>,
  /** null **/
  approvalEvents: InContextSdkMethod<Query['approvalEvents'], QueryapprovalEventsArgs, MeshContext>,
  /** null **/
  customSuperTokenCreatedEvent: InContextSdkMethod<Query['customSuperTokenCreatedEvent'], QuerycustomSuperTokenCreatedEventArgs, MeshContext>,
  /** null **/
  customSuperTokenCreatedEvents: InContextSdkMethod<Query['customSuperTokenCreatedEvents'], QuerycustomSuperTokenCreatedEventsArgs, MeshContext>,
  /** null **/
  superTokenCreatedEvent: InContextSdkMethod<Query['superTokenCreatedEvent'], QuerysuperTokenCreatedEventArgs, MeshContext>,
  /** null **/
  superTokenCreatedEvents: InContextSdkMethod<Query['superTokenCreatedEvents'], QuerysuperTokenCreatedEventsArgs, MeshContext>,
  /** null **/
  superTokenLogicCreatedEvent: InContextSdkMethod<Query['superTokenLogicCreatedEvent'], QuerysuperTokenLogicCreatedEventArgs, MeshContext>,
  /** null **/
  superTokenLogicCreatedEvents: InContextSdkMethod<Query['superTokenLogicCreatedEvents'], QuerysuperTokenLogicCreatedEventsArgs, MeshContext>,
  /** null **/
  newPICEvent: InContextSdkMethod<Query['newPICEvent'], QuerynewPICEventArgs, MeshContext>,
  /** null **/
  newPICEvents: InContextSdkMethod<Query['newPICEvents'], QuerynewPICEventsArgs, MeshContext>,
  /** null **/
  exitRateChangedEvent: InContextSdkMethod<Query['exitRateChangedEvent'], QueryexitRateChangedEventArgs, MeshContext>,
  /** null **/
  exitRateChangedEvents: InContextSdkMethod<Query['exitRateChangedEvents'], QueryexitRateChangedEventsArgs, MeshContext>,
  /** null **/
  bondIncreasedEvent: InContextSdkMethod<Query['bondIncreasedEvent'], QuerybondIncreasedEventArgs, MeshContext>,
  /** null **/
  bondIncreasedEvents: InContextSdkMethod<Query['bondIncreasedEvents'], QuerybondIncreasedEventsArgs, MeshContext>,
  /** null **/
  account: InContextSdkMethod<Query['account'], QueryaccountArgs, MeshContext>,
  /** null **/
  accounts: InContextSdkMethod<Query['accounts'], QueryaccountsArgs, MeshContext>,
  /** null **/
  pool: InContextSdkMethod<Query['pool'], QuerypoolArgs, MeshContext>,
  /** null **/
  pools: InContextSdkMethod<Query['pools'], QuerypoolsArgs, MeshContext>,
  /** null **/
  poolMember: InContextSdkMethod<Query['poolMember'], QuerypoolMemberArgs, MeshContext>,
  /** null **/
  poolMembers: InContextSdkMethod<Query['poolMembers'], QuerypoolMembersArgs, MeshContext>,
  /** null **/
  poolDistributor: InContextSdkMethod<Query['poolDistributor'], QuerypoolDistributorArgs, MeshContext>,
  /** null **/
  poolDistributors: InContextSdkMethod<Query['poolDistributors'], QuerypoolDistributorsArgs, MeshContext>,
  /** null **/
  index: InContextSdkMethod<Query['index'], QueryindexArgs, MeshContext>,
  /** null **/
  indexes: InContextSdkMethod<Query['indexes'], QueryindexesArgs, MeshContext>,
  /** null **/
  indexSubscription: InContextSdkMethod<Query['indexSubscription'], QueryindexSubscriptionArgs, MeshContext>,
  /** null **/
  indexSubscriptions: InContextSdkMethod<Query['indexSubscriptions'], QueryindexSubscriptionsArgs, MeshContext>,
  /** null **/
  stream: InContextSdkMethod<Query['stream'], QuerystreamArgs, MeshContext>,
  /** null **/
  streams: InContextSdkMethod<Query['streams'], QuerystreamsArgs, MeshContext>,
  /** null **/
  flowOperator: InContextSdkMethod<Query['flowOperator'], QueryflowOperatorArgs, MeshContext>,
  /** null **/
  flowOperators: InContextSdkMethod<Query['flowOperators'], QueryflowOperatorsArgs, MeshContext>,
  /** null **/
  streamPeriod: InContextSdkMethod<Query['streamPeriod'], QuerystreamPeriodArgs, MeshContext>,
  /** null **/
  streamPeriods: InContextSdkMethod<Query['streamPeriods'], QuerystreamPeriodsArgs, MeshContext>,
  /** null **/
  tokenGovernanceConfig: InContextSdkMethod<Query['tokenGovernanceConfig'], QuerytokenGovernanceConfigArgs, MeshContext>,
  /** null **/
  tokenGovernanceConfigs: InContextSdkMethod<Query['tokenGovernanceConfigs'], QuerytokenGovernanceConfigsArgs, MeshContext>,
  /** null **/
  streamRevision: InContextSdkMethod<Query['streamRevision'], QuerystreamRevisionArgs, MeshContext>,
  /** null **/
  streamRevisions: InContextSdkMethod<Query['streamRevisions'], QuerystreamRevisionsArgs, MeshContext>,
  /** null **/
  token: InContextSdkMethod<Query['token'], QuerytokenArgs, MeshContext>,
  /** null **/
  tokens: InContextSdkMethod<Query['tokens'], QuerytokensArgs, MeshContext>,
  /** null **/
  resolverEntry: InContextSdkMethod<Query['resolverEntry'], QueryresolverEntryArgs, MeshContext>,
  /** null **/
  resolverEntries: InContextSdkMethod<Query['resolverEntries'], QueryresolverEntriesArgs, MeshContext>,
  /** null **/
  accountTokenSnapshot: InContextSdkMethod<Query['accountTokenSnapshot'], QueryaccountTokenSnapshotArgs, MeshContext>,
  /** null **/
  accountTokenSnapshots: InContextSdkMethod<Query['accountTokenSnapshots'], QueryaccountTokenSnapshotsArgs, MeshContext>,
  /** null **/
  accountTokenSnapshotLog: InContextSdkMethod<Query['accountTokenSnapshotLog'], QueryaccountTokenSnapshotLogArgs, MeshContext>,
  /** null **/
  accountTokenSnapshotLogs: InContextSdkMethod<Query['accountTokenSnapshotLogs'], QueryaccountTokenSnapshotLogsArgs, MeshContext>,
  /** null **/
  tokenStatistic: InContextSdkMethod<Query['tokenStatistic'], QuerytokenStatisticArgs, MeshContext>,
  /** null **/
  tokenStatistics: InContextSdkMethod<Query['tokenStatistics'], QuerytokenStatisticsArgs, MeshContext>,
  /** null **/
  tokenStatisticLog: InContextSdkMethod<Query['tokenStatisticLog'], QuerytokenStatisticLogArgs, MeshContext>,
  /** null **/
  tokenStatisticLogs: InContextSdkMethod<Query['tokenStatisticLogs'], QuerytokenStatisticLogsArgs, MeshContext>,
  /** null **/
  sfmeta: InContextSdkMethod<Query['sfmeta'], QuerysfmetaArgs, MeshContext>,
  /** null **/
  sfmetas: InContextSdkMethod<Query['sfmetas'], QuerysfmetasArgs, MeshContext>,
  /** null **/
  event: InContextSdkMethod<AgreementClassRegisteredEvent | AgreementClassUpdatedEvent | AgreementLiquidatedByEvent | AgreementLiquidatedV2Event | AppRegisteredEvent | ApprovalEvent | BondIncreasedEvent | BufferAdjustedEvent | BurnedEvent | CFAv1LiquidationPeriodChangedEvent | ConfigChangedEvent | CustomSuperTokenCreatedEvent | DistributionClaimedEvent | ExitRateChangedEvent | FlowDistributionUpdatedEvent | FlowOperatorUpdatedEvent | FlowUpdatedEvent | GovernanceReplacedEvent | IndexCreatedEvent | IndexDistributionClaimedEvent | IndexSubscribedEvent | IndexUnitsUpdatedEvent | IndexUnsubscribedEvent | IndexUpdatedEvent | InstantDistributionUpdatedEvent | JailEvent | MemberUnitsUpdatedEvent | MintedEvent | NewPICEvent | PPPConfigurationChangedEvent | PoolConnectionUpdatedEvent | PoolCreatedEvent | RewardAddressChangedEvent | RoleAdminChangedEvent | RoleGrantedEvent | RoleRevokedEvent | SentEvent | SetEvent | SubscriptionApprovedEvent | SubscriptionDistributionClaimedEvent | SubscriptionRevokedEvent | SubscriptionUnitsUpdatedEvent | SuperTokenCreatedEvent | SuperTokenFactoryUpdatedEvent | SuperTokenLogicCreatedEvent | SuperTokenLogicUpdatedEvent | SuperTokenMinimumDepositChangedEvent | TokenDowngradedEvent | TokenUpgradedEvent | TransferEvent | TrustedForwarderChangedEvent, QueryeventArgs, MeshContext>,
  /** null **/
  events: InContextSdkMethod<[AgreementClassRegisteredEvent | AgreementClassUpdatedEvent | AgreementLiquidatedByEvent | AgreementLiquidatedV2Event | AppRegisteredEvent | ApprovalEvent | BondIncreasedEvent | BufferAdjustedEvent | BurnedEvent | CFAv1LiquidationPeriodChangedEvent | ConfigChangedEvent | CustomSuperTokenCreatedEvent | DistributionClaimedEvent | ExitRateChangedEvent | FlowDistributionUpdatedEvent | FlowOperatorUpdatedEvent | FlowUpdatedEvent | GovernanceReplacedEvent | IndexCreatedEvent | IndexDistributionClaimedEvent | IndexSubscribedEvent | IndexUnitsUpdatedEvent | IndexUnsubscribedEvent | IndexUpdatedEvent | InstantDistributionUpdatedEvent | JailEvent | MemberUnitsUpdatedEvent | MintedEvent | NewPICEvent | PPPConfigurationChangedEvent | PoolConnectionUpdatedEvent | PoolCreatedEvent | RewardAddressChangedEvent | RoleAdminChangedEvent | RoleGrantedEvent | RoleRevokedEvent | SentEvent | SetEvent | SubscriptionApprovedEvent | SubscriptionDistributionClaimedEvent | SubscriptionRevokedEvent | SubscriptionUnitsUpdatedEvent | SuperTokenCreatedEvent | SuperTokenFactoryUpdatedEvent | SuperTokenLogicCreatedEvent | SuperTokenLogicUpdatedEvent | SuperTokenMinimumDepositChangedEvent | TokenDowngradedEvent | TokenUpgradedEvent | TransferEvent | TrustedForwarderChangedEvent!]!, QueryeventsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Query['_meta'], Query_metaArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
    
  };

  export type Context = {
      ["superfluidBase"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
