import { BenefitType } from "@/shared/types";

const Benefit = ({ icon, title, description }: BenefitType) => {
  return (
    <div className="mt-5 flex flex-col items-center gap-4 rounded-md border-2 border-gray-100 px-5 py-16 text-center">
      <div className=" rounded-full border-gray-100 bg-primary-100 p-4">
        {icon}
      </div>
      <div className="text-xl font-bold">{title}</div>
      <div>{description}</div>
      <div className="cursor-pointer font-bold text-primary-500 underline hover:text-secondary-500	">
        {" "}
        Learn More
      </div>
    </div>
  );
};

export default Benefit;
