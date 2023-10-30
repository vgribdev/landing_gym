import { Timmana } from "next/font/google"

const timmana = Timmana({ subsets: ["latin"], weight: "400" })

export const Title: React.FC<{ children: string; className?: string }> = ({
  children,
  className,
}) => {
  return (
    <h4
      className={`${timmana.className} mb-8 text-3xl leading-none md:mb-10 md:text-5xl ${className}`}
    >
      {children}
    </h4>
  )
}
