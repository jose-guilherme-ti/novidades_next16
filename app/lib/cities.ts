import { cache } from "react"
import { unstable_cache } from "next/cache"

async function fetchCities() {
  await new Promise(r => setTimeout(r, 1000))

  return [
    { id: 1, name: "Salvador" },
    { id: 2, name: "São Paulo" }
  ]
}

const getCitiesDB = unstable_cache(
  async () => {
    return fetchCities()
  },
  ["cities"],
  { revalidate: 60 }
)

export const getCities = cache(async () => {
  return getCitiesDB()
})