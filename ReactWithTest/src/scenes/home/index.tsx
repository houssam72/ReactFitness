import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import useMediaQuery from "@/hooks/useMediaQuery";
import redBull from "@/assets/SponsorRedBull.png";
import forbes from "@/assets/SponsorForbes.png";
import fortune from "@/assets/SponsorFortune.png";

type Props = {};

const Home = (props: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  return (
    <section className="z-0 h-full min-h-full overflow-auto bg-gray-20 pt-[5.6rem]">
      <div className="mx-auto flex h-full w-5/6  md:h-5/6 ">
        <div className="my-auto w-full justify-between md:flex">
          <div className="my-auto  flex flex-col gap-8 py-4 md:max-w-lg ">
            <div>
              <img src={HomePageText} alt="HomePageText" />
            </div>
            <div>
              <p className="text-sm">
                Unrivaled Gym. Unparalleled Training Fitness Classes. World
                Class Studios to get the Body Shapes That you Dream of.. Get
                Your Dream Body Now.
              </p>
            </div>
            <div className="flex flex-row gap-8">
              <div>
                <button className="rounded-lg bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white">
                  Join Now
                </button>
              </div>
              <div className="my-auto">
                <p className="cursor-pointer font-bold text-primary-500 underline hover:text-secondary-500	">
                  {" "}
                  Learn More
                </p>
              </div>
            </div>
          </div>
          <div className="my-auto flex justify-center">
            <img src={HomePageGraphic} alt="HomePageGraphic" />
          </div>
        </div>
      </div>
      {isAboveMediumScreens && (
        <div className=" flex h-1/6 w-full items-center bg-primary-100  text-center">
          <div className="mx-auto my-auto flex w-5/6 items-center justify-between">
            <div>
              <img src={redBull} alt="reduBullSponsor" />
            </div>
            <div>
              <img src={forbes} alt="forbesSponsor" />
            </div>
            <div>
              <img src={fortune} alt="fortuenSponsor" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
