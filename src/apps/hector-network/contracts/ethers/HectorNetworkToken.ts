/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import type { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from './common';

export interface HectorNetworkTokenInterface extends utils.Interface {
  functions: {
    'DOMAIN_SEPARATOR()': FunctionFragment;
    'PERMIT_TYPEHASH()': FunctionFragment;
    'Swapin(bytes32,address,uint256)': FunctionFragment;
    'Swapout(uint256,address)': FunctionFragment;
    'TRANSFER_TYPEHASH()': FunctionFragment;
    'allowance(address,address)': FunctionFragment;
    'approve(address,uint256)': FunctionFragment;
    'approveAndCall(address,uint256,bytes)': FunctionFragment;
    'balanceOf(address)': FunctionFragment;
    'changeDCRMOwner(address)': FunctionFragment;
    'decimals()': FunctionFragment;
    'name()': FunctionFragment;
    'nonces(address)': FunctionFragment;
    'owner()': FunctionFragment;
    'permit(address,address,uint256,uint256,uint8,bytes32,bytes32)': FunctionFragment;
    'symbol()': FunctionFragment;
    'totalSupply()': FunctionFragment;
    'transfer(address,uint256)': FunctionFragment;
    'transferAndCall(address,uint256,bytes)': FunctionFragment;
    'transferFrom(address,address,uint256)': FunctionFragment;
    'transferWithPermit(address,address,uint256,uint256,uint8,bytes32,bytes32)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'DOMAIN_SEPARATOR'
      | 'PERMIT_TYPEHASH'
      | 'Swapin'
      | 'Swapout'
      | 'TRANSFER_TYPEHASH'
      | 'allowance'
      | 'approve'
      | 'approveAndCall'
      | 'balanceOf'
      | 'changeDCRMOwner'
      | 'decimals'
      | 'name'
      | 'nonces'
      | 'owner'
      | 'permit'
      | 'symbol'
      | 'totalSupply'
      | 'transfer'
      | 'transferAndCall'
      | 'transferFrom'
      | 'transferWithPermit',
  ): FunctionFragment;

  encodeFunctionData(functionFragment: 'DOMAIN_SEPARATOR', values?: undefined): string;
  encodeFunctionData(functionFragment: 'PERMIT_TYPEHASH', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'Swapin',
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(
    functionFragment: 'Swapout',
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>],
  ): string;
  encodeFunctionData(functionFragment: 'TRANSFER_TYPEHASH', values?: undefined): string;
  encodeFunctionData(functionFragment: 'allowance', values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
  encodeFunctionData(
    functionFragment: 'approve',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(
    functionFragment: 'approveAndCall',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>],
  ): string;
  encodeFunctionData(functionFragment: 'balanceOf', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'changeDCRMOwner', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'decimals', values?: undefined): string;
  encodeFunctionData(functionFragment: 'name', values?: undefined): string;
  encodeFunctionData(functionFragment: 'nonces', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'permit',
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
    ],
  ): string;
  encodeFunctionData(functionFragment: 'symbol', values?: undefined): string;
  encodeFunctionData(functionFragment: 'totalSupply', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'transfer',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(
    functionFragment: 'transferAndCall',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>],
  ): string;
  encodeFunctionData(
    functionFragment: 'transferFrom',
    values: [PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(
    functionFragment: 'transferWithPermit',
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
    ],
  ): string;

  decodeFunctionResult(functionFragment: 'DOMAIN_SEPARATOR', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'PERMIT_TYPEHASH', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'Swapin', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'Swapout', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'TRANSFER_TYPEHASH', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'allowance', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'approve', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'approveAndCall', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'balanceOf', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'changeDCRMOwner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'decimals', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'name', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'nonces', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'permit', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'symbol', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'totalSupply', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'transfer', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'transferAndCall', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'transferFrom', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'transferWithPermit', data: BytesLike): Result;

  events: {
    'Approval(address,address,uint256)': EventFragment;
    'LogChangeDCRMOwner(address,address,uint256)': EventFragment;
    'LogSwapin(bytes32,address,uint256)': EventFragment;
    'LogSwapout(address,address,uint256)': EventFragment;
    'Transfer(address,address,uint256)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'Approval'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'LogChangeDCRMOwner'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'LogSwapin'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'LogSwapout'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Transfer'): EventFragment;
}

export interface ApprovalEventObject {
  owner: string;
  spender: string;
  value: BigNumber;
}
export type ApprovalEvent = TypedEvent<[string, string, BigNumber], ApprovalEventObject>;

export type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;

export interface LogChangeDCRMOwnerEventObject {
  oldOwner: string;
  newOwner: string;
  effectiveTime: BigNumber;
}
export type LogChangeDCRMOwnerEvent = TypedEvent<[string, string, BigNumber], LogChangeDCRMOwnerEventObject>;

export type LogChangeDCRMOwnerEventFilter = TypedEventFilter<LogChangeDCRMOwnerEvent>;

export interface LogSwapinEventObject {
  txhash: string;
  account: string;
  amount: BigNumber;
}
export type LogSwapinEvent = TypedEvent<[string, string, BigNumber], LogSwapinEventObject>;

export type LogSwapinEventFilter = TypedEventFilter<LogSwapinEvent>;

export interface LogSwapoutEventObject {
  account: string;
  bindaddr: string;
  amount: BigNumber;
}
export type LogSwapoutEvent = TypedEvent<[string, string, BigNumber], LogSwapoutEventObject>;

export type LogSwapoutEventFilter = TypedEventFilter<LogSwapoutEvent>;

export interface TransferEventObject {
  from: string;
  to: string;
  value: BigNumber;
}
export type TransferEvent = TypedEvent<[string, string, BigNumber], TransferEventObject>;

export type TransferEventFilter = TypedEventFilter<TransferEvent>;

export interface HectorNetworkToken extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: HectorNetworkTokenInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<[string]>;

    PERMIT_TYPEHASH(overrides?: CallOverrides): Promise<[string]>;

    Swapin(
      txhash: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    Swapout(
      amount: PromiseOrValue<BigNumberish>,
      bindaddr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    TRANSFER_TYPEHASH(overrides?: CallOverrides): Promise<[string]>;

    allowance(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    approve(
      spender: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    approveAndCall(
      spender: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    balanceOf(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;

    changeDCRMOwner(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    decimals(overrides?: CallOverrides): Promise<[number]>;

    name(overrides?: CallOverrides): Promise<[string]>;

    nonces(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    permit(
      target: PromiseOrValue<string>,
      spender: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      deadline: PromiseOrValue<BigNumberish>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    symbol(overrides?: CallOverrides): Promise<[string]>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    transfer(
      to: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    transferAndCall(
      to: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    transferFrom(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    transferWithPermit(
      target: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      deadline: PromiseOrValue<BigNumberish>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;
  };

  DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>;

  PERMIT_TYPEHASH(overrides?: CallOverrides): Promise<string>;

  Swapin(
    txhash: PromiseOrValue<BytesLike>,
    account: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  Swapout(
    amount: PromiseOrValue<BigNumberish>,
    bindaddr: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  TRANSFER_TYPEHASH(overrides?: CallOverrides): Promise<string>;

  allowance(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

  approve(
    spender: PromiseOrValue<string>,
    value: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  approveAndCall(
    spender: PromiseOrValue<string>,
    value: PromiseOrValue<BigNumberish>,
    data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  balanceOf(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

  changeDCRMOwner(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  decimals(overrides?: CallOverrides): Promise<number>;

  name(overrides?: CallOverrides): Promise<string>;

  nonces(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  permit(
    target: PromiseOrValue<string>,
    spender: PromiseOrValue<string>,
    value: PromiseOrValue<BigNumberish>,
    deadline: PromiseOrValue<BigNumberish>,
    v: PromiseOrValue<BigNumberish>,
    r: PromiseOrValue<BytesLike>,
    s: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  symbol(overrides?: CallOverrides): Promise<string>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  transfer(
    to: PromiseOrValue<string>,
    value: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  transferAndCall(
    to: PromiseOrValue<string>,
    value: PromiseOrValue<BigNumberish>,
    data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  transferFrom(
    from: PromiseOrValue<string>,
    to: PromiseOrValue<string>,
    value: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  transferWithPermit(
    target: PromiseOrValue<string>,
    to: PromiseOrValue<string>,
    value: PromiseOrValue<BigNumberish>,
    deadline: PromiseOrValue<BigNumberish>,
    v: PromiseOrValue<BigNumberish>,
    r: PromiseOrValue<BytesLike>,
    s: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  callStatic: {
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>;

    PERMIT_TYPEHASH(overrides?: CallOverrides): Promise<string>;

    Swapin(
      txhash: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    Swapout(
      amount: PromiseOrValue<BigNumberish>,
      bindaddr: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    TRANSFER_TYPEHASH(overrides?: CallOverrides): Promise<string>;

    allowance(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    approve(
      spender: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    approveAndCall(
      spender: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    balanceOf(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    changeDCRMOwner(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;

    decimals(overrides?: CallOverrides): Promise<number>;

    name(overrides?: CallOverrides): Promise<string>;

    nonces(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    permit(
      target: PromiseOrValue<string>,
      spender: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      deadline: PromiseOrValue<BigNumberish>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides,
    ): Promise<void>;

    symbol(overrides?: CallOverrides): Promise<string>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      to: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    transferAndCall(
      to: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    transferFrom(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    transferWithPermit(
      target: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      deadline: PromiseOrValue<BigNumberish>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides,
    ): Promise<boolean>;
  };

  filters: {
    'Approval(address,address,uint256)'(
      owner?: PromiseOrValue<string> | null,
      spender?: PromiseOrValue<string> | null,
      value?: null,
    ): ApprovalEventFilter;
    Approval(
      owner?: PromiseOrValue<string> | null,
      spender?: PromiseOrValue<string> | null,
      value?: null,
    ): ApprovalEventFilter;

    'LogChangeDCRMOwner(address,address,uint256)'(
      oldOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null,
      effectiveTime?: PromiseOrValue<BigNumberish> | null,
    ): LogChangeDCRMOwnerEventFilter;
    LogChangeDCRMOwner(
      oldOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null,
      effectiveTime?: PromiseOrValue<BigNumberish> | null,
    ): LogChangeDCRMOwnerEventFilter;

    'LogSwapin(bytes32,address,uint256)'(
      txhash?: PromiseOrValue<BytesLike> | null,
      account?: PromiseOrValue<string> | null,
      amount?: null,
    ): LogSwapinEventFilter;
    LogSwapin(
      txhash?: PromiseOrValue<BytesLike> | null,
      account?: PromiseOrValue<string> | null,
      amount?: null,
    ): LogSwapinEventFilter;

    'LogSwapout(address,address,uint256)'(
      account?: PromiseOrValue<string> | null,
      bindaddr?: PromiseOrValue<string> | null,
      amount?: null,
    ): LogSwapoutEventFilter;
    LogSwapout(
      account?: PromiseOrValue<string> | null,
      bindaddr?: PromiseOrValue<string> | null,
      amount?: null,
    ): LogSwapoutEventFilter;

    'Transfer(address,address,uint256)'(
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      value?: null,
    ): TransferEventFilter;
    Transfer(
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      value?: null,
    ): TransferEventFilter;
  };

  estimateGas: {
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<BigNumber>;

    PERMIT_TYPEHASH(overrides?: CallOverrides): Promise<BigNumber>;

    Swapin(
      txhash: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    Swapout(
      amount: PromiseOrValue<BigNumberish>,
      bindaddr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    TRANSFER_TYPEHASH(overrides?: CallOverrides): Promise<BigNumber>;

    allowance(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    approve(
      spender: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    approveAndCall(
      spender: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    balanceOf(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    changeDCRMOwner(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    nonces(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    permit(
      target: PromiseOrValue<string>,
      spender: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      deadline: PromiseOrValue<BigNumberish>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      to: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    transferAndCall(
      to: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    transferFrom(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    transferWithPermit(
      target: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      deadline: PromiseOrValue<BigNumberish>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    PERMIT_TYPEHASH(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    Swapin(
      txhash: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    Swapout(
      amount: PromiseOrValue<BigNumberish>,
      bindaddr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    TRANSFER_TYPEHASH(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    allowance(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    approve(
      spender: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    approveAndCall(
      spender: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    balanceOf(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    changeDCRMOwner(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nonces(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    permit(
      target: PromiseOrValue<string>,
      spender: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      deadline: PromiseOrValue<BigNumberish>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transfer(
      to: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    transferAndCall(
      to: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    transferFrom(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    transferWithPermit(
      target: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      deadline: PromiseOrValue<BigNumberish>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;
  };
}
