import Link from "next/link";
import Navbar from "./_components/Navbar";
import Image from "next/image";

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
            Embark on a journey into mastering smart contract development
          </h1>
          <h4 className="text-orange-500 text-4xl font-semibold mx-auto w-[800px]">
            Learn to build smart contracts with this intuitive open source tool
          </h4>
          <div className="flex items-center justify-center gap-x-2 mt-6 text-white text-base">
            <Link
              href="/levels"
              className="border border-[#ffffff0f] rounded bg-orange-500 py-2 px-10 font-medium leading-relaxed"
            >
              Get Started
            </Link>
            <a
              href="https://github.com/mehul-srivastava/embark"
              className="border border-[#ffffff0f] rounded bg-gray-800 py-2 px-10 font-medium leading-relaxed flex items-center gap-x-2"
            >
              <Image
                src="/github-icon.png"
                width={512}
                height={512}
                alt="Embark"
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

export default page;
