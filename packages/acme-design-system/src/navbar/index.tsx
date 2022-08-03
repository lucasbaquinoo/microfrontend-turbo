import Link from 'next/link'

export function NavBar() {
  return (
    <div className="relative bg-white">
      <div className="max-w-full mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="/">
              <span className="sr-only">Workflow</span>
              <img
                className="h-8 w-auto sm:h-10"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt=""
              />
            </a>
          </div>

          <nav className="hidden md:flex space-x-10">
            <Link
              href="/long"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Long
            </Link>

            <Link
              href="/medium"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Medium
            </Link>
            <a
              href="/all"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              {' '}
              All{' '}
            </a>

            <div className="relative">
              <button
                type="button"
                className="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                aria-expanded="false"
              >
                <span>More</span>
                <svg
                  className="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}
