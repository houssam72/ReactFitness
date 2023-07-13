type Props = {
  value: string;
};

const Link = ({ value }: Props) => {
  return <a className="cursor-pointer  hover:text-primary-300">{value}</a>;
};
export default Link;
