"use client"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { calculateBMI } from "../app/utils"
import { Timmana } from "next/font/google"
import { Title } from "./Text"
import { ActionButton } from "./Button"

const timmana = Timmana({ subsets: ["latin"], weight: "400" })

type FormValues = {
  height: string
  weight: string
}

const ErrorMessage: React.FC<{ message: string }> = ({ message }) => {
  return (
    <span
      className={`pl-2 text-left text-sm font-semibold tracking-wider text-red-600 ${
        message ? "visible" : "invisible"
      }`}
    >
      {message ? message : "No error"}
    </span>
  )
}

export const BMI = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormValues>()
  const [status, setStatus] = useState<ReturnType<typeof calculateBMI> | "">("")
  const onSubmit = handleSubmit((value) =>
    setStatus(
      calculateBMI({
        weight: parseInt(value.weight),
        height: parseInt(value.height),
      }),
    ),
  )
  return (
    <div className="px-8 pb-8 text-white">
      <div className="mx-auto text-center md:w-2/3">
        <Title className={`${timmana.className} tracking-tighter`}>
          Calculate your BMI
        </Title>
        <p className="mb-8 text-justify">
          Our BMI calculator provides a quick assessment of your body mass index
          based on your height and weight. It&apos;s easy to use - simply enter
          these details, and our tool will instantly calculate your BMI.
          However, please remember that BMI is a general indicator and may not
          consider individual factors. Always consult a healthcare specialist
          for a comprehensive evaluation and personalized advice regarding your
          health and weight management.
        </p>
        <form onSubmit={onSubmit} className="grid grid-cols-2 gap-5">
          <div className="flex flex-col gap-1">
            <input
              className="rounded-lg border bg-transparent p-2"
              placeholder="Your height (cm)"
              {...register("height", {
                required: "Height is required",
                validate: (value) =>
                  parseInt(value) > 0
                    ? true
                    : "Your height should be higher than 0",
              })}
              type={"number"}
            ></input>
            <ErrorMessage message={errors.height?.message ?? ""} />
          </div>
          <div className="flex flex-col gap-1">
            <input
              className="rounded-lg border bg-transparent p-2"
              placeholder="Your Weight (kg)"
              {...register("weight", {
                required: "Weight is required",
                validate: (value) =>
                  parseInt(value) > 0
                    ? true
                    : "Your Weight should be higher than 0",
              })}
              type={"number"}
            ></input>
            <ErrorMessage message={errors.weight?.message ?? ""} />
          </div>

          <div className="col-span-full flex justify-center">
            <ActionButton text="Calculate" type="primary" />
          </div>
        </form>
        {status === "over" && (
          <div
            className="mt-4 rounded-lg bg-red-800 px-4 py-3 leading-normal tracking-wider text-white"
            role="alert"
          >
            <p className="font-bold">You might be overweight!</p>
            <p>
              It&apos;s important to maintain a healthy weight. Please consider
              seeking professional advice if you feel you may be overweight.
            </p>
          </div>
        )}
        {status === "normal" && (
          <div
            className="mt-4 rounded-lg bg-green-800 px-4 py-3 leading-normal tracking-wider text-white"
            role="alert"
          >
            <p className="font-bold">Mr. Fit!</p>
            <p>
              Stay fit & healthy! Focus on nutritious meals, exercise regularly,
              and make self-care a priority. Your body will thank you!
            </p>
          </div>
        )}
        {status === "under" && (
          <div
            className="mt-4 rounded-lg bg-yellow-500 px-4 py-3 leading-normal tracking-wider text-white"
            role="alert"
          >
            <p className="font-bold">You might be underweight!</p>
            <p>
              It&apos;s important to maintain a healthy balance. Consult a
              professional for advice and support.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
