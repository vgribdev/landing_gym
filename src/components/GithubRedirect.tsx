"use client"

export const GithubRedirect = () => (
  <div className="fixed bottom-4 flex w-full justify-center md:justify-end">
    <button
      onClick={() => {
        window.location.assign("https://github.com/vgribdev/landing_gym")
      }}
      className="rounded-full bg-green-600 p-4 text-white md:mr-4"
    >
      Check the code on Github
    </button>
  </div>
)
