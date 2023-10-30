export const Footer = () => {
  return (
    <div className="w-full bg-[#33414F] p-10 text-white">
      <div className="container mx-auto flex flex-col-reverse flex-wrap gap-8 md:flex-row">
        <div className="flex min-w-[200px] flex-col gap-4">
          <p className="tracking-wider">Wellness</p>
          <a className="cursor-pointer text-xs font-normal tracking-widest underline underline-offset-2 hover:no-underline">
            Plans
          </a>
          <a className="cursor-pointer text-xs font-normal tracking-widest underline underline-offset-2 hover:no-underline">
            Gyms
          </a>
          <a className="cursor-pointer text-xs font-normal tracking-widest underline underline-offset-2 hover:no-underline">
            Courses
          </a>
          <a className="cursor-pointer text-xs font-normal tracking-widest underline underline-offset-2 hover:no-underline">
            Diets
          </a>
        </div>
        <div className="flex min-w-[200px] flex-col gap-4">
          <p className="tracking-wider">The company</p>
          <a className="cursor-pointer text-xs font-normal tracking-widest underline underline-offset-2 hover:no-underline">
            Privacy policy
          </a>
          <a className="cursor-pointer text-xs font-normal tracking-widest underline underline-offset-2 hover:no-underline">
            Terms
          </a>
          <a className="cursor-pointer text-xs font-normal tracking-widest underline underline-offset-2 hover:no-underline">
            Cookie policy
          </a>
        </div>
        <div className="flex min-w-[200px] max-w-[400px] flex-col gap-4">
          <p className="tracking-wider">Stronger Gym</p>
          <p className="text-xs font-normal tracking-widest">
            Unlock your full potential and upgrade to our exclusive premium gym
            program for unrivaled fitness experiences and extraordinary
            transformations!
          </p>
          <div />
          <div />
        </div>
      </div>
    </div>
  )
}
