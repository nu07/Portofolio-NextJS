import { DotsVerticalIcon } from "@heroicons/react/solid";

const projects = [
  {
    name: "React",
    initials: "FE",
    href: "#",
    Language: "JavaScript, TypeScript",
    bgColor: "bg-blue-500",
  },
  {
    name: "Next",
    initials: "FE",
    href: "#",
    Language: "JavaScript, TypeScript",
    bgColor: "bg-blue-500",
  },
  {
    name: "Vue",
    initials: "FE",
    href: "#",
    Language: "JavaScript, TypeScript",
    bgColor: "bg-green-600",
  },
  {
    name: "Nuxt",
    initials: "FE",
    href: "#",
    Language: "JavaScript, TypeScript",
    bgColor: "bg-green-700",
  },
  {
    name: "Angular",
    initials: "FE",
    href: "#",
    Language: "JavaScript, TypeScript",
    bgColor: "bg-red-600",
  },
  {
    name: "Express",
    initials: "BE",
    href: "#",
    Language: "JavaScript, TypeScript",
    bgColor: "bg-yellow-600",
  },
  {
    name: "MongoDB",
    initials: "DB",
    href: "#",
    Language: "Mongoose, TypeScript",
    bgColor: "bg-green-700",
  },
  {
    name: "PostgreSQL",
    initials: "DB",
    href: "#",
    Language: "Prisma ORM",
    bgColor: "bg-cyan-500",
  },
  {
    name: "MySQL / MariaDB",
    initials: "DB",
    href: "#",
    Language: "Prisma ORM, Laravel, CI",
    bgColor: "bg-pink-500",
  },
  {
    name: "Discord-JS",
    initials: "Node",
    href: "#",
    Language: "TypeScript, Python",
    bgColor: "bg-indigo-800",
  },
  {
    name: "NodeJS",
    initials: "Server",
    href: "#",
    Language: "JavaScript, TypeScript",
    bgColor: "bg-green-900",
  },
  {
    name: "PHP",
    initials: "Server",
    href: "#",
    Language: "PHP",
    bgColor: "bg-slate-800",
  },
  {
    name: "CodeIgniter",
    initials: "PHP",
    href: "#",
    Language: "PHP",
    bgColor: "bg-orange-700",
  },
  {
    name: "Laravel",
    initials: "PHP",
    href: "#",
    Language: "PHP",
    bgColor: "bg-orange-500",
  },
  {
    name: "Yii",
    initials: "PHP",
    href: "#",
    Language: "PHP",
    bgColor: "bg-blue-400",
  },
  {
    name: "Docker",
    initials: "OS",
    href: "#",
    Language: "Docker Compose",
    bgColor: "bg-blue-500",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SimpleCard() {
  return (
    <div className="max-w-7xl mt-4 mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">
        Pinned Projects
      </h2>
      <ul
        role="list"
        className="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4 "
      >
        {projects.map((project) => (
          <li
            key={project.name}
            className="col-span-1 flex shadow-sm rounded-md "
          >
            <div
              className={classNames(
                project.bgColor,
                "flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md"
              )}
            >
              {project.initials}
            </div>
            <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate dark:bg-cus-blue-100">
              <div className="flex-1 px-4 py-2 text-sm truncate">
                <div
                  href={project.href}
                  className="text-gray-900 font-medium hover:text-gray-600 dark:text-white"
                >
                  {project.name}
                </div>
                <p className="text-gray-500 dark:text-white">
                  {project.Language}
                </p>
              </div>
              {/* <div className="flex-shrink-0 pr-2">
                <button
                  type="button"
                  className="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span className="sr-only">Open options</span>
                  <DotsVerticalIcon className="w-5 h-5" aria-hidden="true" />
                </button>
              </div> */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
