import React, { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import classNames from "classnames";
import canada from "../../public/logos/ca.svg";
import france from "../../public/logos/fr.svg";
import { useRouter } from "next/router";
import Image from "next/image";

const languages = [
  { id: 1, name: "English", code: "en", img: canada },
  { id: 2, name: "French", code: "fr", img: france },
];

function LanguageSelector() {
  const router = useRouter();
  const [selected, setSelected] = useState(() =>
    languages.find((language) => language.code === router.locale || language[0])
  );

  const changeLanguage = (newLanguage) => {
    setSelected(newLanguage);
    router.push(router.pathname, undefined, { locale: newLanguage.code });
  };

  return (
    <Listbox value={selected} onChange={changeLanguage}>
      {({ open }) => (
        <>
          <div className="relative hidden m-auto text-xl md:block dark:text-white">
            <Listbox.Button className="relative w-full px-3 py-2 text-left rounded-md cursor-default focus:border-red-100 focus:outline-none focus:ring-1 focus:ring-indigo-900 dark:focus:ring-red-100 sm:text-sm">
              <span className="flex items-center w-24">
                <Image src={selected.img} layout="fixed" alt="flag" width={25} height={20} />
                <span className="block ml-3 ">{selected.name}</span>
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 w-full py-1 mt-1 overflow-auto text-base rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {languages
                  .filter((language) => language.name !== selected.name)
                  .map((language) => (
                    <Listbox.Option
                      key={language.id}
                      className={({ active }) =>
                        classNames(
                          active ? "bg-gray-200 dark:bg-gray-500" : undefined,
                          "relative cursor-default select-none py-2 pl-3 "
                        )
                      }
                      value={language}
                    >
                      {({ selected }) => (
                        <span className={classNames("flex items-center w-24")}>
                          <Image src={language.img} layout="fixed" alt="flag" width={25} height={20} />
                          <span
                            className={classNames(selected ? "font-semibold" : "font-normal", "block truncate ml-3")}
                          >
                            {language.name}
                          </span>
                        </span>
                      )}
                    </Listbox.Option>
                  ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}

export default LanguageSelector;
