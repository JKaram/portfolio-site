import { useTheme } from "next-themes";
import React from "react";

export default function Span(props: any) {
  const { resolvedTheme } = useTheme();
  const { color } = props;

  const style =
    resolvedTheme === "light"
      ? {
          color: color,
        }
      : {
          background: color,
        };

  return (
    <span style={style} className={`px-2 bg-black  dark:text-black`}>
      {props.children}
    </span>
  );
}
