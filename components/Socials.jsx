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
        target="_blank"
        href={"https://github.com/Hoangpham2603?tab=repositories"}
        className="hover:text-accent/80 transition-all duration-300"
      >
        <RiGithubLine />
      </Link>

      <Link
        target="_blank"
        href={"https://www.linkedin.com/in/hoang-ph%E1%BA%A1m-019384245/"}
        className="hover:text-accent/80 transition-all duration-300"
      >
        <RiLinkedinLine />
      </Link>
    </div>
  );
};

export default Socials;
