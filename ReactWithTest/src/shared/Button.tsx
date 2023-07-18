import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = { title: string };

const Button = ({ title }: Props) => {
  return (
    <AnchorLink href="#contactus">
      <button className="rounded-lg bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white">
        {title}
      </button>
    </AnchorLink>
  );
};

export default Button;
