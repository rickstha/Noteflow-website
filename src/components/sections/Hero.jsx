import ArrowRightLine from "../icons/ArrowRightLine";
import ArrowRight from "../icons/ArrowRight";
import HeroGraphic from "../../assets/graphics/HeroGraphic.webp";
const Hero = () => {
  return (
    <div className="m-auto grid max-w-[90rem] grid-cols-[5fr_4fr] items-center gap-x-18 px-24 py-40">
      <div className=" ">
        <h1 className="text-primary-50 mb-6 text-6xl/18 font-semibold tracking-tighter">
          AI-Powered Notes. Organised and Summarised in Seconds
        </h1>
        <p className="text-primary-100 mb-10 text-xl/loose font-light">
          Let AI organize and summarise your notes, <br /> saving your time and
          boosting productivity
        </p>
        <button className="text-primary-1300 bg-primary-500 border-primary-500 hover:border-primary-50 hover:bg-primary-50 transition-property primary-glow group flex cursor-pointer items-center gap-x-4 rounded-full border-2 px-8 py-3.5">
          <p className="text-lg/8">Get Started</p>
          <div className="inline-flex w-5 items-center">
            <ArrowRightLine
              width={2.5}
              className="stroke-primary-1300 transition-property -mr-4 inline w-0 opacity-0 ease-in-out group-hover:w-3 group-hover:opacity-100"
              alt="arrow right line"
            />
            <ArrowRight
              width={2}
              alt="arrow right"
              className="stroke-primary-1300 inline"
            />
          </div>
        </button>
      </div>

      <div className="relative">
        <div className="bg-primary-1300 absolute inset-0 rounded-full blur-3xl"></div>
        <img
          src={HeroGraphic}
          alt="hero graphic"
          className="relative max-h-[30rem] justify-self-end"
        />
      </div>
    </div>
  );
};

export default Hero;
