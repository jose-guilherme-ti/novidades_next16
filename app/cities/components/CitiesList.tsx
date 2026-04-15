import { use } from "react"
import { getCities } from "@/app/lib/cities"

export default function CitiesList() {
  const cities = use(getCities())

  return (
    <ul>
      {cities.map((city:any) => (
        <li key={city.id}>{city.name}</li>
      ))}
    </ul>
  )
}