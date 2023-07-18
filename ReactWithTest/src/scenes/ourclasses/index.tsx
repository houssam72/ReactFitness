import { useEffect, useRef } from "react";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { ClassType, SelectedPage } from "@/shared/types";
import Class from "./Class";
import { motion, useInView } from "framer-motion";

type Props = {
  setSelectedPage: (selectedPage: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  const ref3 = useRef(null);
  const isInView = useInView(ref3);
  useEffect(() => {
    if (isInView) {
      console.log("ourclass");
      setSelectedPage(SelectedPage.OurClasses);
    }
  });
  const classes: Array<ClassType> = [
    {
      name: "Weight Training Classes",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: image1,
    },
    {
      name: "Yoga Classes",
      image: image2,
    },
    {
      name: "Ab Core Classes",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: image3,
    },
    {
      name: "Adventure Classes",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: image4,
    },
    {
      name: "Fitness Classes",
      image: image5,
    },
    {
      name: "Training Classes",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: image6,
    },
  ];
  return (
    <motion.section
      id="ourclasses"
      className="flex h-full items-center bg-primary-500  pb-24 pt-[5.6rem]"
      ref={ref3}
    >
      <div className="w-full">
        <div className="mx-auto  w-5/6">
          <div className="md:w-3/5">
            <div className=" text-3xl font-bold">
              <h1>OUR CLASSES</h1>
            </div>
            <div className=" py-5">
              <p>
                Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
                tellus quam porttitor. Mauris velit euismod elementum arcu neque
                facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
                enim mattis odio in risus nunc.
              </p>
            </div>
          </div>
        </div>
        <ul className="mt-12   overflow-x-scroll whitespace-nowrap p-5">
          {classes.map((e) => (
            <Class name={e.name} image={e.image} description={e.description} />
          ))}
        </ul>
      </div>
    </motion.section>
  );
};

export default OurClasses;
