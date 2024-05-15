import { game1, game2, game3 } from "../../assets";

const FavoriteSection = () => {
  return (
    <>
      <section className="bg-[#4E1979] py-12">
        {/* top */}
        <div className="text-center mb-9">
          <h3 className="text-5xl font-semibold uppercase leading-relaxed">
            choose your <br />
            <span className="gradient-text shadow-2xl">favorite</span> games
          </h3>
          <p className="text-sm">
            Offer sneak peeks and previews of upcoming games, including <br />
            trailers, screenshots, and information about release.
          </p>
        </div>
        {/* games */}
        <div className="flex items-center justify-center flex-wrap gap-x-7 gap-y-8 mb-10">
          <div>
            <img src={game1} alt="game" />
          </div>
          <div className="relative">
            <img src={game2} alt="game" />
            <p className="text-xl uppercase font-semibold absolute top-[91%] left-1/2 -translate-x-1/2">
              sneak peeks
            </p>
          </div>
          <div>
            <img src={game3} alt="game" />
          </div>
        </div>
        {/* Buttons */}
        <div className="text-center space-x-6">
          <button className="px-20 py-3 bg-[#35194b] skew-x-[332deg] relative w-max h-14 transition-all ease-in-out duration-300">
            <span className="-skew-x-[332deg] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-nowrap font-semibold text-lg uppercase">
              View All
            </span>
          </button>
          <button className="px-20 py-3 bg-transparent skew-x-[332deg] relative w-max h-14 transition-all ease-in-out duration-300  border border-[#35194b]">
            <span className="-skew-x-[332deg] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-nowrap font-semibold text-lg uppercase text-[#35194b]">
              Play Now
            </span>
          </button>
        </div>
      </section>
    </>
  );
};

export default FavoriteSection;
