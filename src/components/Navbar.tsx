import Image from "next/image"
import { ActionButton } from "./Button"
import { Montserrat } from "next/font/google"

const montserrat = Montserrat({ subsets: ["latin"], weight: ["500", "700"] })

export const Navbar = () => {
  return (
    <nav className="absolute left-0 top-0 z-10 h-12 w-full bg-transparent">
      <div className="mx-auto flex max-w-screen-2xl flex-wrap items-center justify-between p-4">
        {/* <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200  md:hidden"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-5 w-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button> */}

        <div className="w-50 h-12">
          <Image
            src="/gym_logo.png"
            alt="Main logo"
            loading="eager"
            fill
            className="!relative object-contain"
          />
        </div>
        <div
          className={`${montserrat.className} hidden w-full py-4 md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="flex items-center gap-12 text-white">
            <a
              href="#"
              className="text-1xl font-medium tracking-wide text-yellow-400 underline underline-offset-2 hover:no-underline"
              aria-current="page"
            >
              Careers
            </a>
            <li>
              <a
                href="#"
                className="text-1xl font-medium tracking-wide text-yellow-400 underline underline-offset-2 hover:no-underline"
                aria-current="page"
              >
                Plans
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-1xl font-medium tracking-wide text-yellow-400 underline underline-offset-2 hover:no-underline"
                aria-current="page"
              >
                Gyms
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-1xl font-medium tracking-wide text-yellow-400 underline underline-offset-2 hover:no-underline"
                aria-current="page"
              >
                Courses
              </a>
            </li>
            <ActionButton text="Join Now" type="primary" />
          </ul>
        </div>
      </div>
    </nav>
  )
}
