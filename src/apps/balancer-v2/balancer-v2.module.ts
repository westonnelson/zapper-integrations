import { Module } from '@nestjs/common';

import { AbstractApp } from '~app/app.dynamic-module';

import { ArbitrumBalancerV2BoostedTokenFetcher } from './arbitrum/balancer-v2.boosted.token-fetcher';
import { ArbitrumBalancerV2FarmContractPositionFetcher } from './arbitrum/balancer-v2.farm.contract-position-fetcher';
import { ArbitrumBalancerV2PoolTokenFetcher } from './arbitrum/balancer-v2.pool.token-fetcher';
import { AvalancheBalancerV2BoostedTokenFetcher } from './avalanche/balancer-v2.boosted.token-fetcher';
import { AvalancheBalancerV2FarmContractPositionFetcher } from './avalanche/balancer-v2.farm.contract-position-fetcher';
import { AvalancheBalancerV2PoolTokenFetcher } from './avalanche/balancer-v2.pool.token-fetcher';
import { BaseBalancerV2BoostedTokenFetcher } from './base/balancer-v2.boosted.token-fetcher';
import { BaseBalancerV2FarmContractPositionFetcher } from './base/balancer-v2.farm.contract-position-fetcher';
import { BaseBalancerV2PoolTokenFetcher } from './base/balancer-v2.pool.token-fetcher';
import { BalancerV2ContractFactory } from './contracts';
import { EthereumBalancerV2FarmContractPositionFetcher } from './ethereum/balancer-v2.farm.contract-position-fetcher';
import { EthereumBalancerV2PoolTokenFetcher } from './ethereum/balancer-v2.pool.token-fetcher';
import { EthereumBalancerV2VeBalRewardsContractPositionFetcher } from './ethereum/balancer-v2.ve-bal-rewards.contract-position-fetcher';
import { EthereumBalancerV2VotingEscrowContractPositionFetcher } from './ethereum/balancer-v2.voting-escrow.contract-position-fetcher';
import { EthereumBalancerV2WrappedAaveTokenFetcher } from './ethereum/balancer-v2.wrapped-aave.token-fetcher';
import { PolygonBalancerV2BoostedTokenFetcher } from './polygon/balancer-v2.boosted.token-fetcher';
import { PolygonBalancerV2FarmContractPositionFetcher } from './polygon/balancer-v2.farm.contract-position-fetcher';
import { PolygonBalancerV2PoolTokenFetcher } from './polygon/balancer-v2.pool.token-fetcher';
import { PolygonBalancerV2StaticYieldTokenFetcher } from './polygon/balancer-v2.static-yield.token-fetcher';

@Module({
  providers: [
    BalancerV2ContractFactory,
    // Arbitrum
    ArbitrumBalancerV2BoostedTokenFetcher,
    ArbitrumBalancerV2PoolTokenFetcher,
    ArbitrumBalancerV2FarmContractPositionFetcher,
    // Avalanche
    AvalancheBalancerV2BoostedTokenFetcher,
    AvalancheBalancerV2PoolTokenFetcher,
    AvalancheBalancerV2FarmContractPositionFetcher,
    // Base
    BaseBalancerV2BoostedTokenFetcher,
    BaseBalancerV2PoolTokenFetcher,
    BaseBalancerV2FarmContractPositionFetcher,
    // Ethereum
    EthereumBalancerV2PoolTokenFetcher,
    EthereumBalancerV2VotingEscrowContractPositionFetcher,
    EthereumBalancerV2FarmContractPositionFetcher,
    EthereumBalancerV2WrappedAaveTokenFetcher,
    EthereumBalancerV2VeBalRewardsContractPositionFetcher,
    // Polygon
    PolygonBalancerV2BoostedTokenFetcher,
    PolygonBalancerV2PoolTokenFetcher,
    PolygonBalancerV2FarmContractPositionFetcher,
    PolygonBalancerV2StaticYieldTokenFetcher,
  ],
})
export class BalancerV2AppModule extends AbstractApp() {}
