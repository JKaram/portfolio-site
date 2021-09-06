import React from "react";
import github from "../../public/logos/github.svg";
import Image from "next/image";

export default function Nav() {
  return (
    <div className="md:flex md:justify-between md:items-center p-4">
      <h1 className="font-nunito font-bold text-3xl text-center">JAMIE KARAM</h1>
      <div className="flex justify-center  space-x-3 mt-3">
        <a
          href="https://www.dropbox.com/s/rv0v7suxul38riu/Jamie_Karam_Resume.pdf?dl=0"
          target="_blank"
          rel="noreferrer"
          className="text-lg underline cursor-pointer hover:text-indigo-900"
        >
          Resume
        </a>

        {/* <span>
          <a
            href="https://www.dropbox.com/s/rv0v7suxul38riu/Jamie_Karam_Resume.pdf?dl=0"
            target="_blank"
            rel="noreferrer"
          >
            JamieKaram16@gmail.com
          </a>
        </span> */}
        <a
          href="https://github.com/JKaram"
          target="_blank"
          rel="noreferrer"
          className="text-lg underline cursor-pointer hover:text-indigo-900"
        >
          GitHub
          {/* <Image src={github} alt="github" /> */}
        </a>
      </div>
    </div>
  );
}
