import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="h-screen w-full custom_bg-tile bg-scroll bg-clip-border">
      <Navbar />
      <div className="grid place-items-center h-full w-full max-w-[1240px] mx-auto text-center">
        <div className="flex flex-col items-center gap-y-8">
          <div className="w-fit border-2 items-center justify-center rounded-full text-center text-sm py-1 inline-flex h-fit animate-shimmer duration-150 transition-all border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            All levels are written in Rust for Anchor! ✨
          </div>
          <h1 className="bg-gradient-to-b from-[#fff] to-[#ffffffa3] bg-clip-text text-transparent object-fill font-bold text-6xl leading-tight">
            Fastrack your journey into mastering smart contract development
          </h1>
          <h4 className="text-orange-500 text-4xl font-semibold mx-auto w-[800px]">
            Learn to build smart contracts with this intuitive open source tool
          </h4>
          <div className="flex items-center justify-center gap-x-2 mt-6 text-white text-base">
            <a
              href="/levels"
              className="border border-[#ffffff0f] rounded bg-orange-500 py-2 px-10 font-medium leading-relaxed"
            >
              Get Started
            </a>
            <a
              href="https://github.com/mehul-srivastava/embark"
              className="border border-[#ffffff0f] rounded bg-gray-800 py-2 px-10 font-medium leading-relaxed flex items-center gap-x-2"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                alt=""
                className="w-5 rounded-full invert"
              />
              Embark
            </a>
          </div>
        </div>
      </div>
      <div className="custom_laser inset-[0%_0%_0%_auto]"></div>
      <div className="custom_laser inset-[0%_auto_0%_0%]"></div>
    </div>
  );
};

const Navbar = () => {
  return (
    <nav className="fixed flex w-full items-center justify-between px-16 py-6">
      <div className="flex items-center gap-x-4">
        <Image src="/logo.svg" width={32} height={32} alt="logo" className="w-8" />
        <span className="font-medium text-white text-xl">Embark</span>
      </div>
      <div className="flex items-center gap-x-4 text-white text-xs">
        {/* <a
          href="/build"
          className="border border-[#ffffff0f] rounded bg-orange-500 py-1 px-3 font-medium leading-relaxed"
        >
          Try BuilderX
        </a> */}
        <a
          href="https://github.com/mehul-srivastava/embark"
          className="border border-[#ffffff0f] rounded bg-gray-800 py-1 px-3 font-medium leading-relaxed flex items-center gap-x-2"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt=""
            className="w-3 rounded-full invert"
          />
          <p>
            Star <small>(1)</small>
          </p>
        </a>
      </div>
    </nav>
  );
};

export default page;
