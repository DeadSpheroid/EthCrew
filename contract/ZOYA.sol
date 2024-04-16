// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

event BookRequest(
    uint indexed sessionId,
    string indexed start,
    string indexed end
);
event ChargeMade(address indexed driver, uint indexed charge);
event BookingMade(
    address indexed passenger,
    address indexed driver,
    uint indexed sessionId,
    string start,
    string end
);

// struct BookRequestLog {
//     uint256 index; // Index of the log in the block
//     uint256 timestamp; // Timestamp of the block containing the log
//     bytes32 txHash; // Hash of the transaction containing the log
//     uint256 blockNumber; // Number of the block containing the log
//     bytes32 blockHash; // Hash of the block containing the log
//     address source; // Address of the contract that emitted the log
//     bytes32[] topics; // Indexed topics of the log
//     bytes data; // Data of the log
// }

// interface ILogAutomation {
//     function checkLog(
//         BookRequestLog calldata log,
//         bytes memory checkData
//     ) external returns (bool upkeepNeeded, bytes memory performData);

//     function performUpkeep(bytes calldata performData) external;
// }

contract ZOYA {
    struct Driver {
        string username;
        bool blacklisted;
        uint8 rating;
    }

    struct Rate {
        address driver;
        uint charge;
    }

    mapping(address => Driver) public drivers;
    mapping(address => string) public passengers;
    address[] public driversArray;
    address[] public passengersArray;
    uint passengersCount;
    uint driversCount;
    uint sessionIdCounter;
    mapping(uint => Rate[]) charges;

    constructor() {
        sessionIdCounter = 0;
        passengersCount = 0;
        driversCount = 0;
    }

    function addPassenger(string memory username, address pass_address) public {
        passengers[pass_address] = username;
        passengersArray.push(pass_address);
        passengersCount++;
    }

    function addDriver(string memory username, address driver_address) public {
        drivers[driver_address] = Driver(username, false, 0);
        driversArray.push(driver_address);
        driversCount++;
    }

    function setCharge(uint charge, address driver, uint sessionId) public {
        require(
            bytes((drivers[driver]).username).length > 0,
            "Driver doesn't exits"
        );
        charges[sessionId].push(Rate(driver, charge));
        emit ChargeMade(driver, charge);
    }

    // function blacklist()

    // function checkLog(
    //     BookRequestLog calldata log,
    //     bytes memory
    // ) external pure returns (bool upkeepNeeded, bytes memory performData) {
    //     upkeepNeeded = true;
    //     uint sessionId = bytes32ToUint(log.topics[1]);
    //     string memory start = bytes32ToString(log.topics[2]);
    //     string memory end = bytes32ToString(log.topics[3]);
    //     performData = abi.encode(sessionId, start, end);
    // }

    // function performUpkeep(bytes calldata performData) external override {
    //     (uint sessionId, string memory start, string memory end) = abi.decode(performData, (uint, string, string));
    // }

    // function bytes32ToUint(bytes32 _bytes32) public pure returns (uint256) {
    //     return uint256(uint160(bytes20(_bytes32)));
    // }

    // function bytes32ToString(bytes32 _bytes32) public pure returns (string memory) {
    //     uint8 i = 0;
    //     while(i < 32 && _bytes32[i] != 0) {
    //         i++;
    //     }
    //     bytes memory bytesArray = new bytes(i);
    //     for (i = 0; i < 32 && _bytes32[i] != 0; i++) {
    //         bytesArray[i] = _bytes32[i];
    //     }
    //     return string(bytesArray);
    // }

    function getSessionId() public view returns (uint) {
        return sessionIdCounter;
    }

    function rateDriver(
        address driver,
        address passenger,
        uint8 rating
    ) public {
        require(
            bytes(passengers[passenger]).length > 0,
            "Passenger doesnot exist"
        );
        require(
            bytes((drivers[driver]).username).length > 0,
            "Driver doesn't exits"
        );
        drivers[driver].rating = (drivers[driver].rating + rating) % 5;
    }

    function book(
        address passenger,
        address driver,
        string calldata start,
        string calldata end,
        uint charge
    ) public payable {
        require(bytes(passengers[passenger]).length > 0, "Invalid passenger");
        require(
            bytes((drivers[driver]).username).length > 0,
            "Driver doesn't exits"
        );
        (bool sent, ) = payable(driver).call{value: charge}("");
        if (sent) {
            emit BookingMade(passenger, driver, sessionIdCounter, start, end);
            sessionIdCounter++;
        }
    }

    function getCharges(uint _sessionId) public view returns (Rate[] memory) {
        return charges[_sessionId];
    }
}
