import { XMarkIcon } from "@heroicons/react/24/solid";
import Link from "./Link";
type Props = {
  setIsMenuToggled: (value: boolean) => void;
  isMenuToggled: boolean;
};

const MenuMd = ({ isMenuToggled, setIsMenuToggled }: Props) => {
  return (
    <div className="fixed right-0 top-0 z-40  h-full w-[300px] bg-primary-100 drop-shadow-2xl">
      <div className="flex flex-col">
        <div className="w-full p-12 text-center">
          <button
            className="float-right"
            onClick={() => {
              setIsMenuToggled(!isMenuToggled);
            }}
          >
            <XMarkIcon className=" h-6 w-6 text-gray-400" />
          </button>
        </div>
        <div className="w-full">
          <div className="float-right flex w-[60%]  flex-col gap-10 text-2xl">
            <Link value="Home" />

            <Link value="Benefits" />

            <Link value="Our Classes" />

            <Link value="ContactUs" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuMd;
