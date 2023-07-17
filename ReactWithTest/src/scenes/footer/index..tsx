import logo from "@/assets/Logo.png";
type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="w-full bg-primary-100 py-16">
      <div className="mx-auto flex w-5/6 flex-col gap-16 md:flex-row  md:gap-0">
        <div className="basis-1/2">
          <div>
            {" "}
            <img src={logo} alt="footer logo" />{" "}
          </div>
          <div className="my-5">
            Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum
            purus et arcu massa dictum condimentum. Augue scelerisque iaculis
            orci ut habitant laoreet. Iaculis tristique.
          </div>
          <div>© Evogym All Rights Reserved.</div>
        </div>
        <div className=" basis-1/4">
          <h4 className="font-bold">Links</h4>
          <div className="my-5">Massa orci senectus</div>
          <div className="my-5">Et gravida id et etiam</div>
          <div className="my-5">Ullamcorper vivamus</div>
        </div>
        <div className=" basis-1/4">
          <h4 className="font-bold">Contact Us</h4>
          <div className="my-5">
            Tempus metus mattis risus volutpat egestas.
          </div>
          <div>(333)425-6825</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
