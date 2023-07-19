import { useEffect } from "react";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
  AcademicCapIcon,
  HomeModernIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import Benefit from "./Benefit";
import BenefitGraph from "@/assets/BenefitsPageGraphic.png";
import Button from "@/shared/Button";
import { motion } from "framer-motion";
import { handleScroll } from "@/shared/Functions";

type Props = {
  setSelectedPage: (selectedPage: SelectedPage) => void;
};

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      "Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description:
      "Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.",
  },
];

const Benefits = ({ setSelectedPage }: Props) => {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      handleScroll(setSelectedPage, SelectedPage.Benefits);
    });
    return () => {
      window.removeEventListener("scroll", () => {
        handleScroll(setSelectedPage, SelectedPage.Benefits);
      });
    };
  }, []);

  return (
    <section
      id={SelectedPage.Benefits}
      className=" min-h-screen  w-full bg-white pt-[5.6rem]"
    >
      <div className=" mx-auto min-h-screen w-5/6 py-20">
        <motion.div
          className="my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="text-3xl font-bold">
            <h1>MORE THAN JUST GYM.</h1>
          </div>
          <div className="my-5">
            <p>
              We provide world class fitness equipment, trainers and classes to
              get you to your ultimate fitness goals with ease. We provide true
              care into each and every member.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="justify-between gap-8 py-5 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </motion.div>
        <div className="mt-16 justify-between md:flex">
          <div className="  basis-2/5 ">
            <img
              src={BenefitGraph}
              alt="benefitsPageGraph"
              className="mx-auto md:mx-0"
            />
          </div>
          <div className="flex basis-3/5 items-center">
            <div className="flex flex-col gap-5">
              <motion.div
                className=" text-3xl font-bold"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                MILLION OF HAPPY MEMBERS GETTING{" "}
                <span className=" text-primary-500">Fit</span>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                {" "}
                Nascetur aenean massa auctor tincidunt. Iaculis potenti amet
                egestas ultrices consectetur adipiscing ultricies enim. Pulvinar
                fames vitae vitae quis. Quis amet vulputate tincidunt at in
                nulla nec. Consequat sed facilisis dui sit egestas ultrices
                tellus. Ullamcorper arcu id pretium sapien proin integer nisl.
                Felis orci diam odio.{" "}
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
                tellus quam porttitor. Mauris velit euismod elementum arcu neque
                facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
                enim mattis odio in risus nunc.
              </motion.div>
              <div className=" mt-11">
                <Button title="Join Now" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
