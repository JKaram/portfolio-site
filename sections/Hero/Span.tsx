import React from "react";

export default function Span(props: any) {
  const { color } = props;
  return (
    <span style={{ color: color }} className="bg-black px-2">
      {props.children}
    </span>
  );
}
