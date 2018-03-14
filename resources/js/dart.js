
/* Contract Parameters */
abi = JSON.parse('[{"constant":true,"inputs":[],"name":"npixels","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"red","type":"uint256"},{"name":"gre","type":"uint256"},{"name":"blu","type":"uint256"}],"name":"writeWithColor","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getYourPixel","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"writes","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"b","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"g","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"r","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"np","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]');
DartContract = web3.eth.contract(abi);
contractAddress = '0x40315adc01342d7f10ebf69a957e3abde31a6b02';
contractInstance = DartContract.at(contractAddress);
userAddress = web3.eth.accounts[0]; // get account from provider

// get the pixel you have access to
pxl = contractInstance.getYourPixel.call();

// set n_writes
document.getElementById('nWrites').innerText = "Total Writes: " + contractInstance.writes.call();

// paint canvas
paint();

// contruct the image
function paint() {

    var canvas = document.getElementById('myCanvas');
    var cnv = canvas.getContext('2d');
    const npixels = contractInstance.npixels.call();
    for (i = 0; i < npixels; i++) {
        // get pixels
        r = contractInstance.r.call(i);
        g = contractInstance.g.call(i);
        b = contractInstance.b.call(i);

        cnv.fillStyle = 'rgb(' + r + ',' + g + ',' + b + ')';
        cnv.fillRect((i%10)*50, 50*parseInt(i/10), 50, 50);

    }
}



function writeColor() {
    // get R, G, and B from the element
    var ctx1 = colorBlock.getContext('2d');
    var imageData = ctx1.getImageData(x, y, 1, 1).data;
    r = imageData[0];
    g = imageData[1];
    b = imageData[2];
    console.log(r, g, b);
    web3.personal.unlockAccount(userAddress, prompt("Enter your password to unlock your wallet."))
    contractInstance.writeWithColor.sendTransaction(r, g, b, {from: userAddress, value: 0, gas:6700000})
    paint()
}
