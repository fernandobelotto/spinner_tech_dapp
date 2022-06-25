// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract Name {

   string public name = "Some name";

   event NameSet(string name);

   function readName() public view returns (string memory) {
      return name;
   }

   function setName(string memory newName) public {
      name = newName;
      emit NameSet(name);
   }
}