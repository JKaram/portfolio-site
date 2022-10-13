import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { BsFillFileEarmarkPersonFill } from "react-icons/bs";

const icons = ["linkedIn", "gitHub", "resume"] as const;
type Icon = typeof icons[number];

type Props = {
  icon: Icon;
  label: string;
  link: string;
  title: string;
};

export default function Icon(props: Props) {
  const { icon, link, title, label } = props;
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="flex flex-col items-center opacity-75 hover:opacity-100"
      title={title}
    >
      {icon === "gitHub" && <AiFillGithub className="" />}
      {icon === "linkedIn" && <AiFillLinkedin className="hover:text-linkedIn" />}
      {icon === "resume" && <BsFillFileEarmarkPersonFill />}
      <span className="p-2 text-lg font-nunito">{label}</span>
    </a>
  );
}
