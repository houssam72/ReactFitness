import logo from "@/assets/Logo.png";
import useMediaQuery from "@/hooks/useMediaQuery";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Link from "./Link";
import { useState } from "react";
import MenuMd from "./MenuMd";
import Button from "@/shared/Button";

type Props = {
  isTop: boolean;
  selectedPage: string;
};

const Navbar = ({ isTop, selectedPage }: Props) => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  return (
    <div>
      <div className={`fixed top-0 z-30 w-full ${!isTop && "bg-primary-100"}`}>
        {/* w-5/6 */}
        <div className=" mx-auto w-5/6 py-6">
          {/* Image and Links And Signin and Become a Member */}
          <div className="flex justify-between justify-items-center gap-16">
            <div className="my-auto">
              {/* Image */}
              <img src={logo} alt="logo" />
            </div>
            {/* Other Things*/}

            {isAboveMediumScreens ? (
              <div className=" flex  w-full justify-between justify-items-center">
                {/* Links */}

                <div className="my-auto flex justify-between gap-4 text-sm">
                  <Link value="Home" selectedPage={selectedPage} />
                  <Link value="Benefits" selectedPage={selectedPage} />
                  <Link value="Our Classes" selectedPage={selectedPage} />
                  <Link value="ContactUs" selectedPage={selectedPage} />
                </div>

                {/* Sign In And button */}
                <div className="my-auto flex justify-between gap-6">
                  <div className="my-auto text-lg">Sign In</div>
                  <div>
                    <Button title="Become a member" />
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <button
                  className="rounded-full  bg-secondary-500 p-2"
                  onClick={() => {
                    setIsMenuToggled(!isMenuToggled);
                  }}
                >
                  <Bars3Icon className="h-6 w-6   text-white" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      {isMenuToggled && !isAboveMediumScreens && (
        <MenuMd
          selectedPage={selectedPage}
          setIsMenuToggled={setIsMenuToggled}
          isMenuToggled={isMenuToggled}
        />
      )}
    </div>
  );
};

export default Navbar;
