import { DotsVerticalIcon } from '@heroicons/react/solid'

const projects = [
  { name: 'ReactJS', initials: 'FE', href: '#', Language: 'JavaScript', bgColor: 'bg-blue-500' },
  { name: 'NextJS', initials: 'FE', href: '#', Language: 'JavaScript', bgColor: 'bg-blue-500' },
  { name: 'VueJS', initials: 'FE', href: '#', Language: 'JavaScript', bgColor: 'bg-green-600' },
  { name: 'NuxtJS', initials: 'FE', href: '#', Language: 'JavaScript', bgColor: 'bg-green-500' },
  { name: 'ExpressJS', initials: 'BE', href: '#', Language: 'JavaScript', bgColor: 'bg-yellow-500' },
  { name: 'MongoDB', initials: 'DB', href: '#', Language: 'JavaScript', bgColor: 'bg-green-700' },
  { name: 'Discord-JS', initials: 'Node', href: '#', Language: 'JavaSCript', bgColor: 'bg-green-800' },
  { name: 'NodeJS', initials: 'Server', href: '#', Language: 'JavaSCript', bgColor: 'bg-green-900' },
  { name: 'PHP', initials: 'Server', href: '#', Language: 'PHP', bgColor: 'bg-slate-800' },
  { name: 'CodeIgniter', initials: 'PHP', href: '#', Language: 'PHP', bgColor: 'bg-orange-700' },
  { name: 'Laravel', initials: 'PHP', href: '#', Language: 'PHP', bgColor: 'bg-orange-500' },
  { name: 'Yii', initials: 'PHP', href: '#', Language: 'PHP', bgColor: 'bg-blue-400' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function SimpleCard() {
  return (
    <div className='max-w-7xl mt-4 mx-auto px-4 sm:px-6 lg:px-8'>
      <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">Pinned Projects</h2>
      <ul role="list" className="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4 ">
        {projects.map((project) => (
          <li key={project.name} className="col-span-1 flex shadow-sm rounded-md ">
            <div
              className={classNames(
                project.bgColor,
                'flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md'
              )}
            >
              {project.initials}
            </div>
            <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate dark:bg-cus-blue-100">
              <div className="flex-1 px-4 py-2 text-sm truncate">
                <div href={project.href} className="text-gray-900 font-medium hover:text-gray-600 dark:text-white">
                  {project.name}
                </div>
                <p className="text-gray-500 dark:text-white">{project.Language}</p>
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
  )
}
