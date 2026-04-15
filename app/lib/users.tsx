import { cache } from "react"
import { unstable_cache } from "next/cache"

async function fetchUsers() {
  await new Promise(r => setTimeout(r, 1000))

  return [
    { id: 1, name: "Maria" },
    { id: 2, name: "João" }
  ]
}

const getUsersDB = unstable_cache(
  async () => {
    return fetchUsers()
  },
  ["users"],
  { revalidate: 60 }
)

export const getUsers = cache(async () => {
  return getUsersDB()
})