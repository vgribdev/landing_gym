import Image from "next/image"
import { Timmana } from "next/font/google"
import { GymSearchCard } from "./GymSearchCard"

const timmana = Timmana({ subsets: ["latin"], weight: "400" })

const Hero = () => {
  return (
    <div className="relative flex h-[95vh] items-center justify-center overflow-hidden md:h-[80vh]">
      <Image
        src="/hero.png"
        alt="Hero Image"
        priority={true}
        loading="eager"
        fill
        className="object-cover brightness-50"
      />

      <div className="relative flex h-full flex-col items-center justify-center gap-4 md:flex-row md:gap-0">
        <div className="flex w-full max-w-screen-2xl justify-center text-center md:flex-1">
          <h1
            className={`${timmana.className} p-4 text-center text-5xl text-white drop-shadow-lg md:text-left md:text-8xl`}
          >
            Demo gym landing page
          </h1>
        </div>
        <GymSearchCard />
      </div>
    </div>
  )
}

export default Hero
