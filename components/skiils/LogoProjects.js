export default function LogoProjects() {
  return (
    <div className="max-w-7xl mx-auto py-2 px-4 sm:px-6 lg:px-8 mt-4">
      <div className="bg-white dark:bg-cus-blue-100">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <p className="text-center text-base font-semibold uppercase text-gray-600 tracking-wider dark:text-white">
            My Project
          </p>
          <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50 dark:bg-cus-blue-100">
              <img
                className="max-h-12 "
                src="/images/projects/jmclick.png"
                alt="jmclick"
              />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50 dark:bg-cus-blue-100">
              <img
                className="max-h-12"
                src="/images/projects/switch.png"
                alt="switch"
              />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50 dark:bg-cus-blue-100">
              <img
                className="max-h-12"
                src="/images/projects/spgroup.png"
                alt="singapore power"
              />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50 dark:bg-cus-blue-100">
              <img
                className="max-h-12"
                src="/images/projects/sam_academy.png"
                alt="Sampoerna Academy"
              />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50 dark:bg-cus-blue-100">
              <img
                className="max-h-12"
                src="/images/projects/srnklhk.png"
                alt="SRN KLHK"
              />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50 dark:bg-cus-blue-100">
              <img
                className="max-h-12"
                src="/images/projects/erp.png"
                alt="ERP"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
