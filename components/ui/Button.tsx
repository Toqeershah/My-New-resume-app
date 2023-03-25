import Link from "next/link";

const Button = ({ text, link }: { text: string; link?: string }) => {
  if (link) {
    return (
      <Link href={link} className="btn">
        {text}
      </Link>
    );
  }
  return <button className="btn">{text}</button>;
};

export default Button;
