import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import useMediaQuery from "@/hooks/useMediaQuery";
import redBull from "@/assets/SponsorRedBull.png";
import forbes from "@/assets/SponsorForbes.png";
import fortune from "@/assets/SponsorFortune.png";
import Button from "@/shared/Button";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { handleScroll } from "@/shared/Functions";

type Props = {
  setSelectedPage: (selectedPage: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  useEffect(() => {
    window.addEventListener("scroll", () => {
      handleScroll(setSelectedPage, SelectedPage.Home);
    });
    return () => {
      window.removeEventListener("scroll", () => {
        handleScroll(setSelectedPage, SelectedPage.Home);
      });
    };
  }, []);

  return (
    <section
      id={SelectedPage.Home}
      className="bg-gray-20 pb-16 pt-36 md:h-full md:pb-0 md:pt-[5.6rem]"
    >
      <div className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6">
        <div className="my-auto w-full justify-between md:flex">
          <motion.div
            className="my-auto  flex flex-col gap-8 py-4 md:max-w-lg "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
          >
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
                <Button title="Join Now" />
              </div>
              <div className="my-auto">
                <AnchorLink
                  className="cursor-pointer font-bold text-primary-500 underline hover:text-secondary-500	"
                  href="#ourclasses"
                >
                  {" "}
                  Learn More
                </AnchorLink>
              </div>
            </div>
          </motion.div>
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
