/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  const colors = require('tailwindcss/colors')
  
  module.exports = {
    // ...
    theme: {
      extend: {
        colors: {
          sky: colors.sky,
          teal: colors.teal,
          rose: colors.rose,
        },
      },
    },
  }
  ```
*/
import {
  AcademicCapIcon,
  BadgeCheckIcon,
  CashIcon,
  ClockIcon,
  ReceiptRefundIcon,
  UsersIcon,
} from "@heroicons/react/outline";

const actions = [
  {
    title: "ERP SignaBit",
    text:'Mengembangkan ERP Signal Bit',
    href: "#",
    icon: "/images/projects/erp.png",
    iconForeground: "text-teal-700",
    iconBackground: "bg-teal-50",
  },
  {
    title: "Switch US",
    text:'Mengembangkan Dan Menambahkan Fitur Sensor.',
    href: "#",
    icon: "/images/projects/switch.png",
    iconForeground: "text-purple-700",
    iconBackground: "bg-purple-50",
  },
  {
    title: "Singapore Power",
    text:'Mengembangkan Dan Menambahkan Fitur Sensor.',
    href: "#",
    icon: "/images/projects/spgroup.png",
    iconForeground: "text-sky-700",
    iconBackground: "bg-sky-50",
  },
  {
    title: "SRN MNLHK",
    text:'Mengembangkan Dan Membuat Design Terbaru Untuk Web Pemerintahan.',
    href: "#",
    icon: "/images/projects/srnklhk.png",
    iconForeground: "text-yellow-700",
    iconBackground: "bg-yellow-50",
  },
  {
    title: "JM-Click",
    text:'Mengembangkan Serta Menambahkan Fitur E-Learning Beserta Sub-Modul, Learning Point, Role,Dll Milih JasaMarga Persero (BUMN).',
    href: "#",
    icon: "/images/projects/jmclick.png",
    iconForeground: "text-rose-700",
    iconBackground: "bg-rose-50",
  },
  {
    title: "ERP",
    text:'Mengembangkan Aplikasi ERP Dan SkillMath Untuk Membuat Data Aset.',
    href: "#",
    icon: "/images/projects/erp.png",
    iconForeground: "text-indigo-700",
    iconBackground: "bg-indigo-50",
  },
  {
    title: "Luna Projects",
    text:'Menghubungan Artifical Intelegence (A.I) Dengan Website (Development).',
    href: "#",
    icon: "/images/derune.png",
    iconForeground: "text-indigo-700",
    iconBackground: "bg-indigo-50",
  },
  {
    title: "React Native VPN (Mobile)",
    text:'Membuat Aplikasi Virtual Network Untuk Mobile.',
    href: "#",
    icon: "/images/react.png",
    iconForeground: "text-indigo-700",
    iconBackground: "bg-indigo-50",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-3">
      <div className="rounded-lg bg-gray-200 dark:bg-slate-600 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px">
        {actions.map((action, actionIdx) => (
          <div
            key={action.title}
            className={classNames(
              actionIdx === 0
                ? "rounded-tl-lg rounded-tr-lg sm:rounded-tr-none "
                : "",
              actionIdx === 1 ? "sm:rounded-tr-lg" : "",
              actionIdx === actions.length - 2 ? "sm:rounded-bl-lg" : "",
              actionIdx === actions.length - 1
                ? "rounded-bl-lg rounded-br-lg sm:rounded-bl-none"
                : "",
              "relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 dark:bg-cus-blue-100"
            )}
          >
            <div>
              <span
                className={classNames(
                  action.iconBackground,
                  action.iconForeground,
                  "rounded-lg inline-flex p-3 ring-4 ring-white"
                )}
              >
                <img src={action.icon} className="h-6 w-6" aria-hidden="true" />
              </span>
            </div>
            <div className="mt-8">
              <h3 className="text-lg font-medium dark:text-white">
                <a href={action.href} className="focus:outline-none">
                  {/* Extend touch target to entire panel */}
                  <span className="absolute inset-0" aria-hidden="true" />
                  {action.title}
                </a>
              </h3>
              <p className="mt-2 text-sm text-gray-500 dark:text-white">
               {action.text}
              </p>
            </div>
            {/* <span
              className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
              aria-hidden="true"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
              </svg>
            </span> */}
          </div>
        ))}
      </div>
    </div>
  );
}
