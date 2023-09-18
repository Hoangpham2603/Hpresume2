import Image from "next/image";

import Link from "next/link";

import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center mt-3 gap-y-6">
          {/* Logo */}
          <Link href={"/"}>
            {/* <Image
              src={"/logo.svg"}
              width={220}
              height={48}
              alt=""
              priority={true}
            /> */}
            <div className="text-[2rem]">
              Hoang Pham <span className="text-accent/80">.</span>
            </div>
          </Link>

          {/* Socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
