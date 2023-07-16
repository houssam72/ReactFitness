import { ClassType } from "@/shared/types";
import { useState } from "react";
const Class = ({ name, image, description }: ClassType) => {
  const [onHover, setOnHover] = useState<boolean>(false);
  return (
    <li
      onMouseEnter={() => {
        setOnHover(true);
      }}
      onMouseLeave={() => {
        setOnHover(false);
      }}
      className="  inline-block px-5 sm:px-9  "
    >
      <div className="relative">
        {onHover && (
          <div className="absolute flex flex-col items-center justify-center  h-full w-full text-center  bg-primary-500 p-4 text-white  opacity-90 sm:p-10">
            <h1 className="text-xl font-bold sm:text-2xl ">
              {name}
            </h1>{" "}
            {description && (
              <span className="mt-5 w-full overflow-hidden whitespace-normal text-ellipsis">
                {description}
              </span>
            )}
          </div>
        )}
        <img src={image} alt={name} className="w-[450px]" />
      </div>
    </li>
  );
};

export default Class;
