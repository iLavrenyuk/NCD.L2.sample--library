import BN from 'bn.js';
import { keyStores, Near, WalletConnection } from 'near-api-js';

const gas = new BN('70000000000000');

export const near = new Near({
  networkId: 'testnet',
  keyStore: new keyStores.BrowserLocalStorageKeyStore(),
  nodeUrl: 'https://rpc.testnet.near.org',
  walletUrl: 'https://wallet.testnet.near.org',
});

export const wallet = new WalletConnection(near, 'library');

export const signIn = (successUrl) => {
  const CONTRACT_ID = localStorage.getItem('CONTRACT_ID');
  return wallet.requestSignIn({ contractId: CONTRACT_ID, successUrl });
};

export const signOut = () => {
  const CONTRACT_ID = localStorage.getItem('CONTRACT_ID');
  return wallet.signOut(CONTRACT_ID);
};

export const getBooks = () => {
  const CONTRACT_ID = localStorage.getItem('CONTRACT_ID');
  return wallet.account().viewFunction(CONTRACT_ID, 'getBooks');
};

export const getBook = (id) => {
  const CONTRACT_ID = localStorage.getItem('CONTRACT_ID');
  return wallet.account().viewFunction(CONTRACT_ID, 'getBook', { id });
};

export const addBook = ({ isbn, name, description, numpage, author, datepublished, editions }) => {
  const CONTRACT_ID = localStorage.getItem('CONTRACT_ID');
  return wallet.account().functionCall({
    contractId: CONTRACT_ID,
    methodName: 'AddBook',
    gas,
    args: { isbn, name, description, numpage, author, datepublished, editions },
  });
};
