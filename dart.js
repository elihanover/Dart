// metamask injects web3
if (typeof web3 !== 'undefined') {
    web3 = new Web3(Web3.currentProvider);
    console.log("existed");
} else {
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    console.log("local node");
}

// get network
console.log(web);

/* Contract Parameters */
abi = JSON.parse('');
DartContract = web3.eth.contract(abi);
contractAddress = '';
contractInstance = DartContract.at(contractAddress);
userAddress = web3.eth.accounts[0]; // get account from provider

// get the pixel you have access to
pxl = contractInstance.getYourPixel.call();

// get pixels
r = contractInstance.r.call();
g = contractInstance.g.call();
b = contractInstance.b.call();


// contruct the image
// TODO: build webpage and pick relevant UI objects



function writeColor() {
    // get R, G, and B from the element
    r =
    g =
    b =

    contractInstance.writeWithColor.sendTransaction(r, g, b, {from: userAddress, value: 0, gas:6700000})
}
