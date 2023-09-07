import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
// import Toggle from '../toggle/darkmode'
import { useTheme } from "next-themes";
import { Switch } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    if (theme == "dark") {
      setEnabled(true);
      setTheme("dark")
      document.body.style.background = "#1E1D36";
    } else {
      document.body.style.background = "rgb(226 232 240)";
      setTheme("light")
      setEnabled(false);
    }
  }, [theme]);
  return (
    <Disclosure
      as="nav"
      className="bg-white shadow dark:bg-cus-blue-100 sticky top-0 z-50"
    >
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src="/images/derune.png"
                    alt="Workflow"
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src="/images/derune.png"
                    alt="Workflow"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8 ">
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  <a
                    href="/"
                    className="border-transparent text-gray-500 hover:border-blue-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium dark:text-white "
                  >
                    Home
                  </a>
                  <a
                    href="/experience"
                    className="border-transparent text-gray-500 hover:border-blue-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium dark:text-white"
                  >
                    Experience
                  </a>
                  <a
                    href="/projects"
                    className="border-transparent text-gray-500 dark:text-white hover:border-blue-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  >
                    Projects
                  </a>
                  <a
                    href="/skill"
                    className="border-transparent text-gray-500 dark:text-white hover:border-blue-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  >
                    Skill
                  </a>
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:items-center">
                <Switch
                  checked={enabled}
                  onChange={setEnabled}
                  title={'Dark Mode'}
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className={classNames(
                    enabled ? "bg-indigo-600" : "bg-gray-200",
                    "relative inline-flex  items-center h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  )}
                >
                  <span className="sr-only">Use setting</span>
                  <span
                    aria-hidden="true"
                    className={classNames(
                      enabled ? "translate-x-5" : "translate-x-0",
                      "pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                    )}
                  />
                </Switch>

                {/* Profile dropdown */}
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1 dark:text-white">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <Disclosure.Button
                as="a"
                href="/"
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium dark:text-white"
              >
                Home
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/experience"
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium dark:text-white"
              >
                Experience
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/projects"
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium dark:text-white"
              >
                Projects
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/skill"
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium dark:text-white"
              >
                Skill
              </Disclosure.Button>
            </div>
            <div className="pt-4 pb-3 border-t border-black">
              <div className="flex items-center px-4">
                <div className="ml-0">
                  <div className="text-base font-medium text-gray-800 dark:text-white">
                    Dark Mode
                  </div>
                </div>

                <div className=" ml-2">
                  <Switch
                    checked={enabled}
                    onChange={setEnabled}
                    onClick={() =>
                      setTheme(theme === "dark" ? "light" : "dark")
                    }
                    className={classNames(
                      enabled ? "bg-indigo-600" : "bg-gray-200",
                      "relative inline-flex  items-center h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    )}
                  >
                    <span className="sr-only">Use setting</span>
                    <span
                      aria-hidden="true"
                      className={classNames(
                        enabled ? "translate-x-5" : "translate-x-0",
                        "pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                      )}
                    />
                  </Switch>
                </div>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
