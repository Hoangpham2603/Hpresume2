import ServiceSlider from "../../components/ServiceSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";

const Services = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="flex text-center xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <h2 className="h2 xl:ml-8">
              My Services <span className="text-accent/80">.</span>
            </h2>
            <p className=" mb-4 max-w-[400px] mx-auto lg:mx-0">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
              quisquam, quia animi, repudiandae sed veniam aspernatur quibusdam
              aliquam velit consectetur, recusandae enim? Optio consectetur
              pariatur aperiam corporis maxime, nesciunt fugiat?
            </p>
          </div>

          <div className="w-full xl:max-w-[65%}">
            {/* slider */}
            <ServiceSlider />
          </div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Services;
