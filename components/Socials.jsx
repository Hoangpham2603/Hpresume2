import Link from "next/link";

import {
  RiYoutubeLine,
  RiInstagramLine,
  RiGithubLine,
  RiLinkedinLine,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-xl">
      <Link
        href={""}
        className="hover:text-accent/80 transition-all duration-300"
      >
        <RiGithubLine />
      </Link>

      <Link
        href={""}
        className="hover:text-accent/80 transition-all duration-300"
      >
        <RiLinkedinLine />
      </Link>
    </div>
  );
};

export default Socials;
