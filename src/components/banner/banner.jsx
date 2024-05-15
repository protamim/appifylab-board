import { star } from "../../assets";

const Banner = () => {
  return (
    <>
      <section className="relative mb-8 overflow-hidden bg-[#362385]">
        <div className="max-w-[1100px] h-[80vh] mx-auto px-4 flex flex-col justify-center items-center gap-y-4 lg:flex-row bg-banner-image bg-no-repeat bg-top bg-cover">
          {/* left column */}
          <div className="flex flex-col gap-y-8 mr-auto">
            <h2 className="text-5xl font-semibold uppercase leading-relaxed max-w-md">
              Let your mind{" "}
              <span className="gradient-text shadow-2xl">explore</span> new
              world
            </h2>
            <p className="max-w-[460px]">
              Playing electronic games, whether through consoles, computers,
              mobile phones or another medium altogether. Gaming is a nuanced
              term that suggests regular gameplay, possibly as a hobby.
            </p>
            {/* action buttons */}
            <div className="flex items-center gap-x-6 mb-6 ml-5">
              {/* buy button */}
              <button className="px-20 py-3 gradient-bg skew-x-[332deg] relative w-max h-14">
                <span className="-skew-x-[332deg] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-nowrap font-semibold text-lg uppercase">
                  Buy Now
                </span>
              </button>
              {/* play button */}
              <button className="px-20 py-3 gradient-border skew-x-[332deg] relative w-max h-14 transition-all ease-in-out duration-300 hover:gradient-bg">
                <span className="-skew-x-[332deg] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-nowrap font-semibold text-lg gradient-text uppercase">
                  Play Now
                </span>
              </button>
            </div>

            {/* counters */}
            <div className="flex items-center gap-x-6">
              <div>
                <h4 className="text-2xl font-semibold">300+</h4>
                <p>Unique style</p>
              </div>
              <div>
                <h4 className="gradient-text text-2xl font-semibold">200+</h4>
                <p>Project finished</p>
              </div>
              <div>
                <h4 className="text-2xl font-semibold">500+</h4>
                <p className="text-base leading-relaxed">Happy customer</p>
              </div>
            </div>
          </div>
        </div>
        {/* rotate bar */}
        <div className="h-20 w-full bg-[#48378d] bg-blur flex items-center gap-x-5 overflow-hidden space-x-10 -rotate-[3deg] mb-20">
          {/* item 1 */}
          <div className="flex items-center gap-x-3 w-full">
            <img src={star} alt="star" />
            <h6 className="text-4xl font-bold uppercase text-nowrap">Gaming spaning</h6>
          </div>
          {/* item 2 */}
          <div className="flex items-center gap-x-3 w-full">
            <img src={star} alt="star" />
            <h6 className="text-4xl font-bold uppercase text-nowrap">Action - packed</h6>
          </div>
          {/* item 3 */}
          <div className="flex items-center gap-x-3 w-full">
            <img src={star} alt="star" />
            <h6 className="text-4xl font-bold uppercase text-nowrap">mind - bending</h6>
          </div>
          {/* item 4 */}
          <div className="flex items-center gap-x-3 w-full">
            <img src={star} alt="star" />
            <h6 className="text-4xl font-bold uppercase text-nowrap">collection og games</h6>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
