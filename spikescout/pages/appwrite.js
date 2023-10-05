import { Client, Account } from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('651e10942f2cd0797080');    

export const account = new Account(client);

export { ID } from 'appwrite';