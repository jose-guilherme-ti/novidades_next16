import { use } from "react"
import { getUsers } from "@/app/lib/users"

export default function UsersList() {
  const users = use(getUsers())

  return (
    <ul>
      {users.map((user:any) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  )
}