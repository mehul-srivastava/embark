import Image from "next/image";

const Navbar = ({ className }: { className?: string }) => {
  return (
    <nav
      className={`fixed flex w-full items-center justify-between px-16 py-6 z-50 ${className}`}
    >
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
          <Image
            src="/github-icon.png"
            width={512}
            height={512}
            alt="Embark"
            className="w-3 rounded-full invert"
          />
          <p>Star</p>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
