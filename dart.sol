pragma solidity ^0.4.16;


contract Dart {

    uint[] public r;
    uint[] public g;
    uint[] public b;
    uint private npixels;

    function Dart(uint np) public { // constructor
        // create pixel array
        npixels = np;
        r = new uint[](npixels);
        g = new uint[](npixels);
        b = new uint[](npixels);
    }

    // get pixel you have access to
    // hashed from your public key
    // doesn't really even need to exist, could just do this in the application
    function getYourPixel() public view returns (uint) {
        return uint(keccak256(msg.sender)) % npixels;
    }

    // write RGB value to your given pixel
    function writeWithColor(uint red, uint gre, uint blu) public {
        require(red <= 256 && red >= 0);
        require(gre <= 256 && gre >= 0);
        require(blu <= 256 && blu >= 0);

        // encode colors as RRRGGGBBB in one pixel array
        uint n = uint(keccak256(msg.sender)) % npixels;
        r[n] = red;
        g[n] = gre;
        b[n] = blu;
    }
}
