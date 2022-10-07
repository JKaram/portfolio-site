import React, { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import classNames from "classnames";
import { useRouter } from "next/router";
import { MdLanguage } from "react-icons/md";
const languages = [
  { id: 1, name: "English", code: "en" },
  { id: 2, name: "French", code: "fr" },
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
          <div className="relative hidden m-auto md:block dark:text-white min-wdth-[95px]">
            <Listbox.Button className="relative w-full px-3 py-2 text-left rounded-md cursor-default focus:border-red-100 focus:outline-none focus:ring-1 focus:ring-indigo-900 dark:focus:ring-red-100 sm:text-sm">
              <span className="flex items-center ">
                <MdLanguage />
                <span className="block ml-2 text-base ">{selected.name}</span>
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 w-full py-1 mt-1 overflow-x-hidden text-base rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {languages
                  .filter((language) => language.name !== selected.name)
                  .map((language) => (
                    <Listbox.Option
                      key={language.id}
                      className={({ active }) =>
                        classNames(
                          active ? "bg-gray-200 dark:bg-gray-500 " : undefined,
                          "relative cursor-default select-none py-2 pl-3 text-base"
                        )
                      }
                      value={language}
                    >
                      {({ selected }) => (
                        <span className={classNames("flex items-center w-24")}>
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
