import Image from "next/image";

const TopLeftImg = () => {
  return (
    <div className="absolute top-0 left-0 mix-blend-color-dodge w-[200px] z-10 xl:w-[400px] opacity-50">
      <Image
        src="/top-left-img.png"
        width={400}
        height={300}
        alt=""
        priority={true}
      />
    </div>
  );
};

export default TopLeftImg;
