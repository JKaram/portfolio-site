import React from "react";
import { badgeColours } from "../../components/constants";

export default function Badge(props: any) {
  const backgroundColor = badgeColours[props.children] ? badgeColours[props.children] : "";
  return (
    <span style={{ background: backgroundColor }} className="rounded text-xs bg-black text-red px-2 py-1">
      {props.children}
    </span>
  );
}
