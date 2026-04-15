import { Suspense } from "react"
import UsersList from "./components/UsersList"

export default function UsersPage() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Usuários</h2>

      <Suspense fallback={<p>Carregando usuários...</p>}>
        <UsersList />
      </Suspense>
    </div>
  )
}