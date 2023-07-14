import { BenefitType } from "@/shared/types";
import {
  AcademicCapIcon,
  HomeModernIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import Benefit from "./Benefit";
import BenefitGraph from "@/assets/BenefitsPageGraphic.png";
import Button from "@/shared/Button";

type Props = {};

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

const Benefits = (props: Props) => {
  return (
    <section className=" min-h-screen  w-full bg-white pt-[5.6rem]">
      <div className=" mx-auto min-h-screen w-5/6 py-20">
        <div className="my-5 md:w-3/5">
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
        </div>
        <div className="justify-between gap-8 py-5 md:flex">
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
        <div className="mt-16 justify-between md:flex">
          <div className="  basis-2/5 ">
            <img src={BenefitGraph} alt="benefitsPageGraph" className="mx-auto md:mx-0" />
          </div>
          <div className="flex basis-3/5 items-center">
            <div className="flex flex-col gap-5">
              <div className=" text-3xl font-bold">
                MILLION OF HAPPY MEMBERS GETTING{" "}
                <span className=" text-primary-500">Fit</span>
              </div>
              <div>
                {" "}
                Nascetur aenean massa auctor tincidunt. Iaculis potenti amet
                egestas ultrices consectetur adipiscing ultricies enim. Pulvinar
                fames vitae vitae quis. Quis amet vulputate tincidunt at in
                nulla nec. Consequat sed facilisis dui sit egestas ultrices
                tellus. Ullamcorper arcu id pretium sapien proin integer nisl.
                Felis orci diam odio.{" "}
              </div>
              <div>
                Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
                tellus quam porttitor. Mauris velit euismod elementum arcu neque
                facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
                enim mattis odio in risus nunc.
              </div>
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
