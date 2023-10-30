import { ReactNode } from "react"
import Hero from "../components/Hero"
import { BMI } from "../components/Bmi"
import { Footer } from "../components/Footer"
import { Navbar } from "../components/Navbar"
import { ActionButton } from "@/components/Button"
import { Title } from "../components/Text"
import { MainPartners } from "../components/Partners"
import { ProgramCard } from "../components/ProgramCard"
import { ImageSection } from "../components/ImageSection"
import { GithubRedirect } from "@/components/GithubRedirect"

const Section: React.FC<{
  children: ReactNode
  isFullWidth?: boolean
  backgroundColor?: string
}> = ({ children, isFullWidth, backgroundColor }) => {
  return (
    <div
      className={`my-8 flex flex-col pt-8 ${
        isFullWidth ? "" : "container mx-auto"
      } ${backgroundColor || ""}`}
    >
      {children}
    </div>
  )
}

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <div className="container mx-auto mt-[-32px] md:mt-0">
        <ImageSection
          src="/trainer_1.png"
          title="Be different, be active"
          description="Discover the ultimate fitness journey with our wide range of gym courses! From intense calisthenics workouts to energizing Zumba classes, we've got it all covered. Join us today and embark on a transformative fitness adventure like no other."
        />
        <ImageSection
          src="/download_app.png"
          title="Download the app now"
          isRightAligned
          description="Transform your fitness journey with our cutting-edge gym app for iOS and Android! From personalized workout plans to tracking progress and accessing expert guidance, our app brings your fitness goals within reach."
          footerActions={
            <div className="mt-4 flex flex-row gap-4">
              <ActionButton text="Download" type="primary" />
              <ActionButton text="Learn more" type="secondary" />
            </div>
          }
        />
      </div>
      <Section>
        <Title className="mb-12 text-center">Our training programs</Title>
        <div className="flex flex-col gap-4 md:flex-row">
          <ProgramCard imageSrc={"/courses.png"} buttonString="Courses" />
          <ProgramCard imageSrc={"/cardio.png"} buttonString="Cardio" />
          <ProgramCard imageSrc={"/trainings.png"} buttonString="Trainer" />
        </div>
      </Section>
      <Section isFullWidth backgroundColor="bg-[#33414F]">
        <BMI />
      </Section>
      <Section>
        <MainPartners />
      </Section>
      <Footer />
      <GithubRedirect />
    </main>
  )
}
