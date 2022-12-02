# Hyperledger Fabric IPFS
Uploading a file onto IPFS and storing its hash (CID) to Hyperledger fabric blockchain.

SetUp : 

SignUP : 
You need a web3.storage account to get your API token and manage your stored data. You can sign up for free using your email address or GitHub.
Go to web3.storage/login to get started.
Enter your email address or use github
Check your inbox for a verification email from web3.storage, and click the Log in button in the email or authorize github.

Get API Token
This token enables you to interact with the web3.storage service without using the main website, enabling you to incorporate files stored using web3.storage directly into your applications and services.
go to web3.storage API Tokens page.
name your API token and click Create
You can click Copy to copy your new API token to your clipboard.
For the starting code to upload a file and retrieve its CID see here.


Using With Fabric : 
I worked with the fabcar example in fabric-samples.
Clone this "https://github.com/hyperledger/fabric-samples.git" repository.


Replace the chaincode and fabcar folder with the chaincode and fabcar folder in my repository.



fabric-samples/fabcar/javascript <br />
npm install <br />
npm install web3.storage@3.1.0  <br />



Now up the network.
cd fabric-samples/fabcar 
./startFabric.sh javascript

Now we have to enroll an admin and then register a user.
cd fabric-samples/fabcar/javascript
node enrollAdmin.js
node registerUser.js

Now we have to run the invoke.js to upload the file to IPFS and store its CID onto fabric.
node invoke.js

Now we query the couchDB to retrieve the CID.
node query.js

Check the couchDB at localhost:5984/_utils


The CID of the file is stored in the variable ‘cid’ at invoke.js. Console logging will give its value. The file can be viewed at : 

YOUR_CID.ipfs.w3s.link        or 
 https://dweb.link/ipfs/YOUR_CID

You can also view your file , check its status and see available storage balance in your web3.storage account section.
