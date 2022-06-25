import { ethers } from "ethers";
import { useEffect, useState } from "react";

export function useSignerData() {
  const eth = window.ethereum;
  const [address, setAddress] = useState("");
  const [ethAmount, setEthAmount] = useState("");
  const [network, setNetwork] = useState("");
  const [error, setError] = useState(true);

  const loadData = async () => {
    const provider = new ethers.providers.Web3Provider(eth);
    const signer = provider.getSigner();
    const network = await provider.getNetwork();

    setNetwork(network.name);

    // https://docs.metamask.io/guide/rpc-api.html#permissions
    await provider.send("eth_requestAccounts", []);

    const myAddress = await signer.getAddress();
    setAddress(myAddress);

    const myBalance = await signer.getBalance();
    setEthAmount(ethers.utils.formatEther(myBalance));
  };

  useEffect(() => {
    if (eth) {
      eth.on("chainChanged", () => {
        loadData();
      });
      eth.on("accountsChanged", () => {
        loadData();
      });
      setError(false);
      loadData();
    }
  }, []);

  return {
    address,
    ethAmount,
    error,
    network,
  };
}
