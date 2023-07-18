import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  value: string;
  selectedPage: string;
};

const Link = ({ value, selectedPage }: Props) => {
  const isSelected = value.toLowerCase().split(" ").join("") === selectedPage;
  const sectioName = value.toLowerCase().split(" ").join("");
  return (
    <AnchorLink
      className={`cursor-pointer ${
        isSelected && "text-primary-500"
      }  hover:text-primary-300`}
      href={`#${sectioName}`}
    >
      {value}
    </AnchorLink>
  );
};
export default Link;
