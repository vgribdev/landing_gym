import Image from "next/image"
import { ActionButton } from "./Button"

export const ProgramCard: React.FC<{
  buttonString: string
  imageSrc: string
}> = ({ buttonString, imageSrc }) => {
  return (
    <div className="relative mx-4 flex justify-center overflow-hidden rounded-lg text-white md:mx-0">
      <Image
        src={imageSrc}
        width={"504"}
        height={"760"}
        quality={60}
        alt={"running"}
      />
      <div className="absolute bottom-6">
        <ActionButton type="primary" text={buttonString} />
      </div>
    </div>
  )
}
