import { createStandaloneToast } from "@chakra-ui/react";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { getEth, hasAccounts, requestAccounts } from "../blockchain";
import Name from "./Name.json";

const toast = createStandaloneToast();

export function useName() {
  const [name, setStateName] = useState("");
  const [newName, setNewName] = useState("");
  const [loading, setLoading] = useState(false);

  async function getContract() {
    if ((await hasAccounts()) && (await requestAccounts())) {
      const NameContract = new ethers.Contract(
        import.meta.env.VITE_CONTRACT_ADDRESS,
        Name.abi,
        new ethers.providers.Web3Provider(getEth()).getSigner()
      );
      return NameContract;
    }
  }

  useEffect(() => {
    nameListener();
  }, []);

  async function nameListener(): Promise<any> {
    const NameContract = await getContract();
    NameContract?.on(NameContract.filters.NameSet(), (name) => {
      setStateName(name);
    });
  }

  async function writeName() {
    setLoading(true);
    const NameContract = await getContract();
    try {
      await NameContract?.setName(newName);
    } catch (error) {
      if (error instanceof Error) {
        toast.toast({
          title: "Error",
          status: "error",
          description: `${error?.message}`,
        });
      }
    } finally {
      setLoading(false);
    }
  }

  return {
    writeName,
    name,
    setNewName,
    newName,
    loading,
  };
}
