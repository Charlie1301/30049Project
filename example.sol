pragma solidity ^0.8.1;

contract FirstContract {

    uint var1;

    function set(uint x) public {

        var1 = x;

    }

    function get() public view returns (uint) {

        return var1;

    }

}