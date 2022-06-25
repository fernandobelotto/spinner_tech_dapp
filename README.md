<h1 align="center">Spinnr Tech Dapp</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
</p>

> Dapp with hardhat, solidity, and react with typescript and chakra-ui

## Importante Observation

  The smart contract is yet not deployed in a testnet because i did not have yet enouth eth to acomplishe the deploy.

## Live example

  https://spinner-tech-dapp.vercel.app/




## Description

  This Web app is made using React with Typescript and lets the user set a name in a blockchain using an input field. To do it, the user needs the Metamask chrome extension installed in his browser. Once the user has the Metamask installed, he can expense some eth to change the name. Once the transaction is complete, all clients accessing the website will see the changes.

## Running the project locally

1. First, clone the app using

    ```
      git clone https://github.com/fernandobelotto/spinnr-tech-dapp
    ```
1. then, install the dependencies in chain and frontend folder using

    ```
      cd ./chain && npm i
      cd ./frontend && npm i
    ```


1. run a local network in order to test
    ```
      npm run node
    ```
1. After running deploy the smart contract using

    ```
      npm run deploy:local
    ```

1. Grab the contract address in the console and set in the .env.example file in frontend

1. After that, run the frontend using

    ```
      npm run dev
    ```

1. Open http://localhost:3000 and check the app

## Author

👤 **Fernando Bosco**

* Website: https://fernandobelotto.dev
* Github: [@fernandobelotto](https://github.com/fernandobelotto)
* LinkedIn: [@fernandobelotto](https://linkedin.com/in/fernandobelotto)

## Screenshots

<img src="screenshots/1.png" width="400" align="left" />
<img src="screenshots/2.png" width="400" align="left" />
<img src="screenshots/3.png" width="400" align="left" />
<img src="screenshots/4.png" width="400" align="left" />
<img src="screenshots/5.png" width="400" align="left" />