import Image from "next/image"
import { Title } from "./Text"

const partners = [
  "/okta-partner-logo.png",
  "/pump-partner-logo.png",
  "/mooove-partner-logo.png",
  "/block-partner-logo.png",
  "/steiner-partner-logo.png",
  "/discover-partner-logo.png",
  "/homelander-partner-logo.png",
  "/bodyblast-partner-logo.png",
  "/plake-partner-logo.png",
]

export const MainPartners = () => {
  return (
    <div>
      <Title className="text-center">Our main partners</Title>
      <div className="flex flex-wrap justify-center gap-6">
        {partners.map((partner) => {
          return (
            <div
              key={partner}
              className="flex h-40 w-60 items-center justify-center overflow-hidden rounded-md opacity-80 transition-opacity hover:opacity-100"
            >
              <Image
                src={`/partners${partner}`}
                quality={60}
                alt={"running"}
                width={1000}
                height={750}
                className="object-contain"
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
