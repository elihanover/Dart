# Dart
## Experimenting with Decentralized Collaborative Art
If you don't live under a rock, you may have seen this before:
![alt text](https://i.redd.it/agcbmqgjn14z.png "final r/place")

If you do live under a rock, it's okay because you can read about it [here](https://sploid.gizmodo.com/find-out-all-the-stories-from-reddits-massive-collabora-1794784713).

Anyways, I thought it might be fun to build a decentralized version of this on top of Ethereum.

Each user is given a pixel hashed from their public key that they can edit.  Multiple users could have write access to the same pixel, but one address is limited to one "pixel".  Currently, the gas limit on Ethereum makes it impractical to have a very sizeable image, so I've gone with 10x10 to start.  Boring, yes, but this is more likely non-optimal Solidity programming on my part which can be fixed. 


## Instructions
##### 1. Instead geth (a go implementation of ethereum)
> https://geth.ethereum.org/downloads/
##### 2. Run a local Rinkeby node to connect to an Ethereum test blockchain.
> geth --rinkeby

or if that doesn't work try <br />

> geth --rinkeby --syncmode "fast" --rpc --rpcapi db,eth,net,web3,personal --cache=1024  --rpcport 8545 --rpccorsdomain "*"
##### 2. Load the webpage.
##### 3. Select color from picker and submit to edit your pixel.
Unlock your wallet if prompted.
