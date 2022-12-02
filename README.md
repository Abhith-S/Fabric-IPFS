# Hyperledger Fabric IPFS
Uploading a file onto IPFS and storing its hash (CID) to Hyperledger fabric blockchain.

SetUp : 

SignUP : <br />
You need a web3.storage account to get your API token and manage your stored data. You can sign up for free using your email address or GitHub. <br />
Go to web3.storage/login to get started. <br />
Enter your email address or use github <br />
Check your inbox for a verification email from web3.storage, and click the Log in button in the email or authorize github. <br />



Get API Token <br />
This token enables you to interact with the web3.storage service without using the main website, enabling you to incorporate files stored using web3.storage directly into your applications and services. <br />
go to web3.storage API Tokens page. <br />
name your API token and click Create <br />
You can click Copy to copy your new API token to your clipboard. <br />
For the starting code to upload a file and retrieve its CID see here. <br />





Using With Fabric :  <br />
I worked with the fabcar example in fabric-samples. <br />
Clone this "https://github.com/hyperledger/fabric-samples.git" repository. <br />


Replace the chaincode and fabcar folder with the chaincode and fabcar folder in my repository. <br />


cd fabric-samples/fabcar/javascript <br />
npm install <br />
npm install web3.storage@3.1.0  <br />



Now up the network. <br />
cd fabric-samples/fabcar  <br />
./startFabric.sh javascript <br />



Now we have to enroll an admin and then register a user. <br />
cd fabric-samples/fabcar/javascript <br />
node enrollAdmin.js  <br />
node registerUser.js  <br />



Now we have to run the invoke.js to upload the file to IPFS and store its CID onto fabric. <br />
node invoke.js <br />



Now we query the couchDB to retrieve the CID.  <br />
node query.js  <br />




Check the couchDB at localhost:5984/_utils  <br />



The CID of the file is stored in the variable ‘cid’ at invoke.js. Console logging will give its value. The file can be viewed at :  <br />

YOUR_CID.ipfs.w3s.link        or   <br />
 https://dweb.link/ipfs/YOUR_CID  <br />

You can also view your file , check its status and see available storage balance in your web3.storage account section.  <br />
