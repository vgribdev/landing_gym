import Image from "next/image"
import { ReactNode } from "react"
import { Title } from "./Text"

export const ImageSection: React.FC<{
  title: string
  isRightAligned?: boolean
  src: string
  description: string
  footerActions?: ReactNode
}> = ({ title, isRightAligned, src, description, footerActions }) => {
  return (
    <div
      className={`flex flex-col gap-4 md:gap-12 ${
        isRightAligned ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <div
        className={`relative flex flex-1 ${
          isRightAligned ? "justify-end" : ""
        }`}
      >
        <div className="-z-[1] h-96 w-4/5 bg-[#33414F] opacity-0 md:opacity-100"></div>
        <div className="absolute top-1/2 -translate-y-1/2">
          <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-bl from-orange-500 via-yellow-400 to-red-500 opacity-30"></div>

          <Image
            src={src}
            width={1084}
            height={608}
            alt="trainer"
            quality={70}
            className="h-80 object-cover"
            sizes="(max-width: 768px) 100vw, 66vw"
          ></Image>
        </div>
      </div>
      <div className="flex-1 px-4 md:py-4">
        <Title className={`mt-6 tracking-tighter`}>{title}</Title>
        <p className="leading-7">{description}</p>
        {footerActions}
      </div>
    </div>
  )
}
