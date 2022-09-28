import React from "react";
import { AiFillLinkedin, AiFillGithub, AiFillFilePdf } from "react-icons/ai";
import { BsFillFileEarmarkPersonFill } from "react-icons/bs";

const icons = ["linkedIn", "gitHub", "resume"] as const;
type Icon = typeof icons[number];

type Props = {
  icon: Icon;
  link: string;
  title: string;
};

export default function Icon(props: Props) {
  const { icon, link, title } = props;
  return (
    <a href={link} target="_blank" rel="noreferrer" className="opacity-50 hover:opacity-100" title={title}>
      {icon === "gitHub" && <AiFillGithub />}
      {icon === "linkedIn" && <AiFillLinkedin className="hover:text-linkedIn" />}
      {icon === "resume" && <BsFillFileEarmarkPersonFill />}
    </a>
  );
}
