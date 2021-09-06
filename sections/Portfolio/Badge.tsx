import React from "react";

export default function Badge(props: any) {
  return <span className="rounded text-xs bg-black text-red px-2 py-1">{props.children}</span>;
}
