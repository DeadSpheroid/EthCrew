"use client";
import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Map from "@/components/Map";
import Link from "next/link";
import SideBar from "@/components/Sidebar";
import { SidebarItem } from "@/components/Sidebar";
import detectEthereumProvider from "@metamask/detect-provider";
import { useProviderhook } from "../context/provider";
import contractJSON from "@/contract/abi.json";
import ethers from "ethers";

// import { onAuthStateChanged, signOut } from 'firebase/auth';
// import { useRouter } from 'nex t/router';

export default function Home() {
  const [contract, setContract] = useState({
    provider: null,
    contractObj: null,
  });
  const { account, setAccount } = useProviderhook();
  const [bal, setBal] = useState("");

  async function ConnectBtn() {
    try {
      const account = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccount(account[0]);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (account !== "Not connected") {
          // const contractProvider = new ethers.JsonRpcProvider(
          //   process.env.NEXT_PUBLIC_SEPOLIA_URL
          // );

          console.log(window.ethereum);
          const walletProvider = new ethers.BrowserProvider(window.ethereum);
          // const walletProvider = await detectEthereumProvider();

          if (walletProvider) {
            console.log(walletProvider);
            const Lottery = new ethers.Contract(
              contractJSON.address,
              contractJSON.abi,
              walletProvider
            );

            setContract({ provider: walletProvider, contractObj: Lottery });

            console.log(await Lottery.getSessionId());
          } else {
            console.error("Ethereum provider not available.");
          }
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, [account]);

  return (
    <>
      <div className="flex flex-row">
        <SideBar>
          <SidebarItem
            text={account ? account : "Connect to Metamask"}
            icon={
              <Image
                src="/metamask-icon.png"
                alt="metamaskIcon"
                width={30}
                height={30}
                onClick={ConnectBtn}
              />
            }
          />
        </SideBar>

        <div className="flex flex-col h-screen w-full">
          <Map />
          <div className="flex-1 p-4">
            <div className="flex justify-between items-center">
              <img
                className="h-28"
                src="2_cleanup.png"
              />
            </div>
            <div className="flex">
              <div className="flex flex-col flex-1 bg-gray-200 m-1 h-32 items-center justify-center rounded-lg transform hover:scale-105 transition text-xl ">
                <Link href="/search">
                  <img
                    className="h-2/5 mt-12"
                    src="https://i.ibb.co/cyvcpfF/uberx.png"
                  />
                  Ride
                </Link>
              </div>

              <div className="flex flex-col flex-1 bg-gray-200 m-1 h-32 items-center justify-center rounded-lg transform hover:scale-105 transition text-xl">
                <img
                  className="h-3/5"
                  src="https://i.ibb.co/n776JLm/bike.png"
                />
                Wheels
              </div>

              <div className="flex flex-col flex-1 bg-gray-200 m-1 h-32 items-center justify-center rounded-lg transform hover:scale-105 transition text-xl">
                <img
                  className="h-3/5"
                  src="https://i.ibb.co/5RjchBg/uberschedule.png"
                />
                Reserve
              </div>
            </div>

            <div className="h-20 bg-gray-200 text-2xl p-4 flex items-center mt-8">
              Where to
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
