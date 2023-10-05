import { Client, Account } from './appwrite';

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('651e10942f2cd0797080');    

const account = new Account(client);
const urlParams = new URLSearchParams(window.location.search);
const secret = urlParams.get('secret');
const userId = urlParams.get('userId');

const promise = account.createVerification('http://localhost:3000');

promise.then(function (response) {
    console.log(response);
}
).catch(function (error) {
    console.log(error);
});