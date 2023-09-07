import { MailIcon, PhoneIcon } from '@heroicons/react/solid'

const profile = {
  name: 'Wisnu Kristanto',
  avatar:
    '/images/nu.jpg',
  backgroundImage:
    '/images/mern.jpeg',

}

export default function Heading() {
  return (
    <div className=' max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 dark:bg-cus-blue'>

    <div className='aspect-w-16 aspect-h-auto '>
      <div>
        <img className=" md:h-32 w-full object-cover lg:h-48  " src={profile.backgroundImage} alt="" />
      </div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
          <div className="flex">
            <img className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32 object-cover" src={profile.avatar} alt="" />
          </div>
          <div className="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
            <div className="sm:hidden md:block mt-6 min-w-0 flex-1">
              <h1 className="text-2xl font-bold text-gray-900 truncate dark:text-white">{profile.name}</h1>
            </div>
            <div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
              <button
                type="button"
                className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 dark:bg-cus-blue-100 dark:text-white"
              onClick={()=>window.open('https://api.whatsapp.com/send?phone=+6283811838345&text=Hallo Wisnu, Saya Mendapatkan Nomer Dari Web Anda')}
              >
                <PhoneIcon className="-ml-1 mr-2 h-5 w-5 text-gray-400 dark:text-white" aria-hidden="true" />
                <span>WhatsApp</span>
              </button>
              <button
                type="button"
                className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 dark:bg-cus-blue-100 dark:text-white"
                onClick={() => { window.location.href = 'mailto:wisnukristanto123@gmail.com?subject=Website&body=Selamat Siang, Wisnu' }}
               >
                <MailIcon className="-ml-1 mr-2 h-5 w-5 text-gray-400 dark:text-white" aria-hidden="true" />
                <span>Email</span>
              </button>
            </div>
          </div>
        </div>
        <div className="hidden sm:block md:hidden mt-6 min-w-0 flex-1">
          <h1 className="text-2xl font-bold text-gray-900 truncate">{profile.name}</h1>
        </div>
      </div>
    </div>
                </div>
  )
}
