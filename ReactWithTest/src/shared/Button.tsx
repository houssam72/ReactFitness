type Props = {title:string};

const Button = ({title}: Props) => {
  return (
    <button className="rounded-lg bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white">
      {title}
    </button>
  );
};

export default Button;
