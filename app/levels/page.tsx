import React from "react";
import Navbar from "../_components/Navbar";
import Link from "next/link";

const roadmap = [
  {
    id: 1,
    title: "Counter Dapp",
    direction: 1,
    description:
      "In this module, you'll learn how to create a simple counter decentralized application (DApp). We’ll guide you through writing a smart contract that allows users to keep track of a count.",
  },
  {
    id: 2,
    title: "Todo Management Dapp 🚧",
    direction: 1,
    description:
      "In this module, you’ll learn to create a Todo management DApp. We’ll show you how to write a smart contract for creating, reading, updating, and deleting tasks on the blockchain.",
  },
  {
    id: 3,
    title: "ERC20 Token Generation 🚧",
    direction: -1,
    description:
      "In this module, you’ll learn how to create your own ERC20 token. We’ll guide you through writing a smart contract that defines your token’s name, symbol, and total supply on the blockchain.",
  },
  {
    id: 4,
    title: "Decentralised Voting System 🚧",
    direction: -1,
    description:
      "In this module, you’ll create a decentralized voting system. We’ll show you how to write a smart contract that lets users cast votes securely, ensuring transparency with an immutable record.",
  },
  {
    id: 5,
    title: "NFT Minting and Management 🚧",
    direction: -1,
    description:
      "In this module, you’ll learn to mint and manage NFTs. We’ll guide you through writing a smart contract that allows users to create unique tokens and track their ownership on the blockchain.",
  },
  {
    id: 6,
    title: "Decentralized Fiverr (Escrow) 🚧",
    direction: -1,
    description:
      "In this module, you’ll create a decentralized Fiverr platform with escrow features. We’ll show you how to write a smart contract that securely holds funds until services are completed, ensuring trust between buyers and sellers.",
  },
  {
    id: 7,
    title: "Decentralized Exchange 🚧",
    direction: 1,
    description:
      "In this module, you’ll create a decentralized exchange (DEX). We’ll guide you through writing a smart contract for secure, peer-to-peer token trading, including automated market making for a dynamic experience.",
  },
  {
    id: 8,
    title: "Complex DeFi Protocol 🚧",
    direction: 0,
    description:
      "In this module, you’ll learn to create a complex DeFi protocol. We’ll guide you through writing a smart contract that integrates various features like lending, borrowing, and yield farming, providing users with advanced financial tools on the blockchain.",
  },
];

const page = () => {
  const cycleLength = 8;

  return (
    <div>
      <Navbar className="border-b border-b-gray-900 bg-black" />
      <div className="text-white pt-28 mx-auto w-full flex flex-col items-center justify-center">
        {roadmap.map((item, idx) => {
          let indentation;
          const cycleIndex = idx % cycleLength;

          if (cycleIndex <= 2) indentation = cycleIndex;
          else if (cycleIndex <= 6) indentation = 4 - cycleIndex;
          else indentation = cycleIndex - 8;

          const rightPosition = String(indentation * 40).concat("px");

          return (
            <div
              key={item.id}
              className="relative py-32"
              style={{ right: rightPosition }}
            >
              {/* check from local storage which level user is on */}
              {item.id == 1 && (
                <div className="absolute top-14 left-0 px-3 py-2.5 border-2 font-bold uppercase text-orange-500 bg-white rounded-xl animate-bounce tracking-wide z-10 select-none">
                  Start
                  <div className="absolute left-1/2 -bottom-2 w-0 h-0 border-x-8 border-x-transparent border-t-8 transform -translate-x-1/2" />
                </div>
              )}
              {/* check from local storage which level user is on */}

              <div
                className={`absolute top-1/4 z-20 bg-slate-800 w-[400px] p-4 px-6 rounded-md ${
                  item.id != 1 && "opacity-60"
                }`}
                style={{
                  left: idx % 2 == 0 ? "150px" : "-450px",
                }}
              >
                <h2 className="font-bold text-xl">{item.title}</h2>
                <p className="text-sm mt-2">{item.description}</p>
                {item.id === 1 && (
                  <small className="text-gray-500 mt-4 block">
                    Published On: 18 September 2024
                  </small>
                )}
              </div>
              <Link
                href={item.id != 1 ? "javascript:void(0)" : "/levels/1"}
                className={`custom_btn-roadmap w-max transition-all duration-200 z-40 absolute ${
                  item.id != 1 && "disabled"
                }`}
              >
                <div
                  className={`absolute h-[16rem] top-[110%] w-2 border-r-4 border-slate-700 border-dashed ${
                    item.direction == 1 && "rotate-6 left-1/4"
                  } ${item.direction == -1 && "-rotate-6 right-1/4"} ${
                    item.direction == 0 && "hidden"
                  }`}
                ></div>
                <span className="text">Level {item.id}</span>
              </Link>
            </div>
          );
        })}
        <p className="my-10 text-gray-500 text-center text-lg">
          Stay tuned for new levels!
        </p>
      </div>
    </div>
  );
};

export default page;
