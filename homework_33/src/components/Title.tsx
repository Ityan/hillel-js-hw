type TitleProps = {
  name: string;
  type: "thin" | "normal" | "bold";
};

function Title({ name, type }: TitleProps) {
  return <h2 style={{ fontWeight: type }}>{name}</h2>;
}

export default Title;
