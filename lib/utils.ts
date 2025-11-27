
export type Question = {
  id: number
  text: string
  options: string[]
}

export const QUESTIONS: Question[] = [
  { id: 1, text: "What sound does a cat make?", options: ["Bhaa-Bhaa", "Meow-Meow", "Chik-Chik"] },
  { id: 2, text: "What would you probably find in your fridge?", options: ["Shoes", "Ice Cream", "Rocks"] },
  { id: 3, text: "What color are bananas?", options: ["Blue", "Yellow", "Red"] },
  { id: 4, text: "How many stars are in the sky?", options: ["Two", "Infinite", "One Hundred"] }
]
