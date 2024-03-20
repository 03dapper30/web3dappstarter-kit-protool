const web3dappstarter_kit = require('web3dappstarter-kit');
const web3dappstarter_kit_protool = require('web3dappstarter-kit-protool');
const ganache_cli = require('ganache-cli');
const pg = require('pg');
const bluebird = require('bluebird');
const redux = require('redux');
const web3 = require('web3');
const node_sass = require('node-sass');
const fs_extra = require('fs-extra');
const ejs = require('ejs');
const mocha = require('mocha');
const truffle = require('truffle');
const validator = require('validator');
const supertest = require('supertest');
const xml2js = require('xml2js');
const eslint = require('eslint');

const fs = require('fs');
const readStream = fs.createReadStream('./example.txt');
readStream.on('data', (chunk) => {
  console.log(chunk.toString());
});

module.exports = {
  myFunction: function() { console.log('Exported function called'); },
  myVariable: 'Exported variable'
};

const https = require('https');
https.createServer((req, res) => {
  res.writeHead(200);
  res.end('Hello HTTPS');
}).listen(443);

const calculateInterest = (principal, rate, time) => {
  return principal * rate * time / 100;
};
console.log(calculateInterest(1000, 5, 2));

const words = ['spray', 'limit', 'elite', 'exuberant'];
const result = words.filter(word => word.length > 6);
console.log(`Filtered words: ${result}`);

const http = require('http');
const options = {
  hostname: 'example.com',
  port: 80,
  path: '/todos',
  method: 'GET'
};
const req = http.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`);
  res.on('data', d => {
    process.stdout.write(d);
  });
});
req.end();

const add = (a, b) => a + b;
console.log(`The sum of 5 and 3 is ${add(5, 3)}.`);