import {
  DepositNFT as DepositNFTEvent,
  TimelockNFT as TimelockNFTEvent,
  UpdateUserConfiguration as UpdateUserConfigurationEvent,
  WithdrawNFT as WithdrawNFTEvent
} from "../generated/NFTTreasuryLite/NFTTreasuryLite"
import {
  DepositNFT,
  TimelockNFT,
  UpdateUserConfiguration,
  WithdrawNFT
} from "../generated/schema"

export function handleDepositNFT(event: DepositNFTEvent): void {
  let entity = new DepositNFT(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._to = event.params._to
  entity.nftAddress = event.params.nftAddress
  entity._tokenId = event.params._tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTimelockNFT(event: TimelockNFTEvent): void {
  let entity = new TimelockNFT(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._user = event.params._user
  entity.nftAddress = event.params.nftAddress
  entity._tokenId = event.params._tokenId
  entity.releaseTime = event.params.releaseTime

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUpdateUserConfiguration(
  event: UpdateUserConfigurationEvent
): void {
  let entity = new UpdateUserConfiguration(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._user = event.params._user
  entity.oldWithdrawAddress = event.params.oldWithdrawAddress
  entity.newWithdrawAddress = event.params.newWithdrawAddress
  entity.locktime = event.params.locktime

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleWithdrawNFT(event: WithdrawNFTEvent): void {
  let entity = new WithdrawNFT(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._to = event.params._to
  entity.nftAddress = event.params.nftAddress
  entity._tokenId = event.params._tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
