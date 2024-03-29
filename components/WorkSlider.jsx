// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "Landing Page",
          path: "/Work1.png",
          link: "https://hoangpham2603.github.io/Natours-landingpage/",
        },
        {
          title: "Shopee-Clone",
          path: "/Work2.png",
          link: "https://hp-shoppee-clone.netlify.app/",
        },
        {
          title: "title",
          path: "/3d-card.png",
          link: "https://master--3d-shoes-card.netlify.app/",
        },
        {
          title: "title",
          path: "/thumb4.jpg",
          link: "https://hp-shoppee-clone.netlify.app/",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/thumb4.jpg",
          link: "https://hp-shoppee-clone.netlify.app/",
        },
        {
          title: "title",
          path: "/thumb1.jpg",
          link: "https://hp-shoppee-clone.netlify.app/",
        },
        {
          title: "title",
          path: "/thumb2.jpg",
          link: "https://hp-shoppee-clone.netlify.app/",
        },
        {
          title: "title",
          path: "/thumb3.jpg",
          link: "https://hp-shoppee-clone.netlify.app/",
        },
      ],
    },
  ],
};

// icons

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// required modules:
import { Pagination } from "swiper";

// icons
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((img, index) => {
                return (
                  <div
                    key={index}
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                  >
                    <div className="flex items-center justify-center relative overflow-hidden group">
                      {/* image */}
                      <Image src={img.path} width={500} height={300} alt="" />
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                      {/* title */}
                      <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                        <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em] ">
                          {/* title part1 */}
                          <a
                            href={img.link}
                            target="_blank"
                            className="delay-100 "
                          >
                            Live
                          </a>

                          {/* title part2 */}
                          <a
                            href={img.link}
                            target="_blank"
                            className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150"
                          >
                            Projects
                          </a>

                          {/* icon */}
                          <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                            <BsArrowRight />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
