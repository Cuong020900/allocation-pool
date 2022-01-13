// SPDX-License-Identifier: MIT

pragma solidity 0.8.11;

import "hardhat/console.sol";

contract MockContract {
    uint256 public value;

    function sum(uint256 a, uint256 b) external returns (uint256) {
        value = a + b;
        return a + b;
    }
}
