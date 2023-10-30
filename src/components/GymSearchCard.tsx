import Image from "next/image"
import { ActionButton } from "./Button"

export const GymSearchCard: React.FC = () => {
  return (
    <div className="flex-0 flex w-full min-w-fit items-center justify-center md:h-full md:flex-1">
      <div className="h-auto w-[90%] rounded-xl border border-white bg-white bg-opacity-60 p-5 backdrop-blur-md backdrop-filter md:w-2/3">
        <div className="mx-4 mt-4 flex flex-nowrap gap-2 rounded-md bg-stone-300 px-4 py-2">
          <div className="w-50 h-7">
            <Image
              src="/icons/location_icon.png"
              alt="Location"
              loading="eager"
              fill
              className="!relative object-contain"
            />
          </div>
          <input
            type="text"
            className="w-full border-0 bg-transparent text-lg placeholder-gray-600 outline-none"
            placeholder="Your location..."
          />
        </div>
        <div className="mt-8 flex h-auto w-full flex-col items-start justify-start rounded-md bg-gray-100 p-4">
          <span className="text-sm opacity-50">Nearest gym</span>
          <div className="my-2 flex min-h-[1px] w-full bg-slate-300" />
          <span className="text-xl font-semibold tracking-wider opacity-70">
            Boca Raton - Central, FL
          </span>
          <span className="text-sm font-medium opacity-80">
            5050 Town Center Circle
          </span>
          <span className="text-sm font-medium opacity-80">
            Boca Raton, FL 33486
          </span>
          <div className="my-2 flex flex-col gap-2">
            <div className="flex items-center gap-4">
              <div className="h-4 w-5">
                <Image
                  src="/icons/clock_icon.png"
                  alt="Open"
                  loading="eager"
                  fill
                  className="!relative object-contain"
                />
              </div>
              <span className="text-sm font-semibold tracking-wide text-[#058902] opacity-80">
                Open now
              </span>
            </div>
            <div className="flex items-center gap-4">
              <div className="h-4 w-5">
                <Image
                  src="/icons/star_icon.png"
                  alt="Feature"
                  loading="eager"
                  fill
                  className="!relative object-contain"
                />
              </div>
              <span className="text-sm font-semibold tracking-wide text-gray-800 opacity-70">
                First class free*
              </span>
            </div>
            <div className="flex items-center gap-4">
              <div className="h-4 w-5">
                <Image
                  src="/icons/fork_icon.png"
                  alt="Restaurants"
                  loading="eager"
                  fill
                  className="!relative object-contain"
                />
              </div>
              <span className="text-sm font-semibold tracking-wide text-gray-800 opacity-70">
                Restaurants nearby
              </span>
            </div>
          </div>
          <div className="mt-2 flex justify-start gap-4">
            <ActionButton text="Join Now" type="primary" />
            <ActionButton text="Open maps" type="secondary" />
          </div>
        </div>
      </div>
    </div>
  )
}
