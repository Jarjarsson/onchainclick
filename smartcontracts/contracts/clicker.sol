/**
 *Submitted for verification at Etherscan.io on 2023-09-05
 Network: Goerli
*/

// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

contract Clicker {
    uint256 public clickedCount = 0;
    event Count(uint256 count);

    function click() public {
        clickedCount += 1;
        emit Count(clickedCount);
    }

    function reset() public {
        clickedCount = 0;
        emit Count(clickedCount);
    }
}
