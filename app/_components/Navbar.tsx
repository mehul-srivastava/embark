import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="fixed flex w-full items-center justify-between px-16 py-6 border-b bg-black border-b-gray-900 z-50">
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

export default Navbar;
