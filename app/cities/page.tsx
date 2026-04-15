import { Suspense } from "react"
import CitiesList from "./components/CitiesList"

export default function CitiesPage() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Cidades</h2>

      <Suspense fallback={<p>Carregando cidades...</p>}>
        <CitiesList />
      </Suspense>
    </div>
  )
}