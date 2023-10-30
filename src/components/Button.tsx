export const ActionButton: React.FC<{
  text: string
  type: "primary" | "secondary"
}> = ({ text, type }) => {
  return (
    <button
      className={`transform transition duration-200 hover:scale-95 ${
        type === "primary"
          ? "bg-[#F09F00] text-inherit"
          : "border-2 border-[#F09F00] text-gray-700"
      } text-md text-400 flex appearance-none flex-col justify-center rounded-3xl px-6 py-2 text-center font-bold tracking-wider`}
    >
      {text}
    </button>
  )
}
