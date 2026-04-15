import { Suspense } from "react"
import UsersList from "./users/components/UsersList"
import CitiesList from "./cities/components/CitiesList"
import LoadingUsers from "./users/loading"
import LoadingCities from "./cities/loading"


export default function HomePage() {
  return (
    <main className="p-10 space-y-10">

      <h1 className="text-3xl font-bold">
        Dashboard
      </h1>

      {/* USERS */}
      <Suspense fallback={<LoadingUsers />}>
        <UsersList />
      </Suspense>

      {/* CITIES */}
      <Suspense fallback={<LoadingCities />}>
        <CitiesList />
      </Suspense>

    </main>
  )
}