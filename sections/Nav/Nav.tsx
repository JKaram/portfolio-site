import React from "react";
import ThemeToggle from "./ThemeToggle";
import dynamic from "next/dynamic";

export default function Nav() {
  return (
    <div className="p-4 md:flex md:justify-between md:items-center">
      <h1 className="text-3xl font-bold text-center font-nunito">JAMIE KARAM</h1>
      <div className="flex justify-center mt-3 space-x-3 l">
        <a
          href="https://www.dropbox.com/s/ikcux17zayn0n8z/Jamie_Karam_Resume.pdf?dl=0"
          target="_blank"
          rel="noreferrer"
          className="text-2xl underline cursor-pointer hover:text-indigo-900"
        >
          Resume
        </a>

        <a
          href="https://github.com/JKaram"
          target="_blank"
          rel="noreferrer"
          className="text-2xl underline cursor-pointer hover:text-indigo-900"
        >
          GitHub
        </a>
        <ThemeToggle />
      </div>
    </div>
  );
}
