import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  DepositNFT,
  TimelockNFT,
  UpdateUserConfiguration,
  WithdrawNFT
} from "../generated/NFTTreasuryLite/NFTTreasuryLite"

export function createDepositNFTEvent(
  _to: Address,
  nftAddress: Address,
  _tokenId: BigInt
): DepositNFT {
  let depositNftEvent = changetype<DepositNFT>(newMockEvent())

  depositNftEvent.parameters = new Array()

  depositNftEvent.parameters.push(
    new ethereum.EventParam("_to", ethereum.Value.fromAddress(_to))
  )
  depositNftEvent.parameters.push(
    new ethereum.EventParam(
      "nftAddress",
      ethereum.Value.fromAddress(nftAddress)
    )
  )
  depositNftEvent.parameters.push(
    new ethereum.EventParam(
      "_tokenId",
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    )
  )

  return depositNftEvent
}

export function createTimelockNFTEvent(
  _user: Address,
  nftAddress: Address,
  _tokenId: BigInt,
  releaseTime: BigInt
): TimelockNFT {
  let timelockNftEvent = changetype<TimelockNFT>(newMockEvent())

  timelockNftEvent.parameters = new Array()

  timelockNftEvent.parameters.push(
    new ethereum.EventParam("_user", ethereum.Value.fromAddress(_user))
  )
  timelockNftEvent.parameters.push(
    new ethereum.EventParam(
      "nftAddress",
      ethereum.Value.fromAddress(nftAddress)
    )
  )
  timelockNftEvent.parameters.push(
    new ethereum.EventParam(
      "_tokenId",
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    )
  )
  timelockNftEvent.parameters.push(
    new ethereum.EventParam(
      "releaseTime",
      ethereum.Value.fromUnsignedBigInt(releaseTime)
    )
  )

  return timelockNftEvent
}

export function createUpdateUserConfigurationEvent(
  _user: Address,
  oldWithdrawAddress: Address,
  newWithdrawAddress: Address,
  locktime: BigInt
): UpdateUserConfiguration {
  let updateUserConfigurationEvent = changetype<UpdateUserConfiguration>(
    newMockEvent()
  )

  updateUserConfigurationEvent.parameters = new Array()

  updateUserConfigurationEvent.parameters.push(
    new ethereum.EventParam("_user", ethereum.Value.fromAddress(_user))
  )
  updateUserConfigurationEvent.parameters.push(
    new ethereum.EventParam(
      "oldWithdrawAddress",
      ethereum.Value.fromAddress(oldWithdrawAddress)
    )
  )
  updateUserConfigurationEvent.parameters.push(
    new ethereum.EventParam(
      "newWithdrawAddress",
      ethereum.Value.fromAddress(newWithdrawAddress)
    )
  )
  updateUserConfigurationEvent.parameters.push(
    new ethereum.EventParam(
      "locktime",
      ethereum.Value.fromUnsignedBigInt(locktime)
    )
  )

  return updateUserConfigurationEvent
}

export function createWithdrawNFTEvent(
  _to: Address,
  nftAddress: Address,
  _tokenId: BigInt
): WithdrawNFT {
  let withdrawNftEvent = changetype<WithdrawNFT>(newMockEvent())

  withdrawNftEvent.parameters = new Array()

  withdrawNftEvent.parameters.push(
    new ethereum.EventParam("_to", ethereum.Value.fromAddress(_to))
  )
  withdrawNftEvent.parameters.push(
    new ethereum.EventParam(
      "nftAddress",
      ethereum.Value.fromAddress(nftAddress)
    )
  )
  withdrawNftEvent.parameters.push(
    new ethereum.EventParam(
      "_tokenId",
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    )
  )

  return withdrawNftEvent
}
