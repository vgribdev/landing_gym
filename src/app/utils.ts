export function calculateBMI({
  weight,
  height,
}: {
  weight: number
  height: number
}) {
  let bmi = weight / ((height * height) / 10000)
  if (bmi < 18.6) return "under"
  if (bmi >= 18.6 && bmi < 24.9) return "normal"
  else return "over"
}
