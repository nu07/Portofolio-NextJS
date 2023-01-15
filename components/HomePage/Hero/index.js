
import { PaperClipIcon } from '@heroicons/react/solid'

export default function Hero() {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 '>

    <div className="bg-white shadow overflow-hidden sm:rounded-lg dark:bg-cus-blue-100 dark:text-white">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">Applicant Information</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500 dark:text-white">Personal details and application.</p>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:px-6 ">
        <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500 dark:text-white">Full name</dt>
            <dd className="mt-1 text-sm text-gray-900 dark:text-white">Margot Foster</dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500 dark:text-white">Application for</dt>
            <dd className="mt-1 text-sm text-gray-900 dark:text-white">Backend Developer</dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500 dark:text-white">Email address</dt>
            <dd className="mt-1 text-sm text-gray-900 dark:text-white">margotfoster@example.com</dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500 dark:text-white">Salary expectation</dt>
            <dd className="mt-1 text-sm text-gray-900 dark:text-white">$120,000</dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="text-sm font-medium text-gray-500 dark:text-white">About</dt>
            <dd className="mt-1 text-sm text-gray-900 dark:text-white">
              Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur
              qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud
              pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
            </dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="text-sm font-medium text-gray-500 dark:text-white">Attachments</dt>
            <dd className="mt-1 text-sm text-gray-900">
              <ul role="list" className="border border-gray-200 rounded-md divide-y divide-gray-200 dark:text-white">
                <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                  <div className="w-0 flex-1 flex items-center ">
                    <PaperClipIcon className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
                    <span className="ml-2 flex-1 w-0 truncate">resume_back_end_developer.pdf</span>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a href="components/HomePage/Hero/index#" className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-white">
                      Download
                    </a>
                  </div>
                </li>
                <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                  <div className="w-0 flex-1 flex items-center">
                    <PaperClipIcon className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
                    <span className="ml-2 flex-1 w-0 truncate">coverletter_back_end_developer.pdf</span>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a href="components/HomePage/Hero/index#" className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-white">
                      Download
                    </a>
                  </div>
                </li>
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>
    </div>
  )
}
