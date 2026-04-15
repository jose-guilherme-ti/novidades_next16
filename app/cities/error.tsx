"use client"

export default function Error({
  error,
  reset
}: {
  error: Error
  reset: () => void
}) {
  return (
    <div className="text-red-600">
      <h2>Erro ao carregar cidades</h2>

      <p>{error.message}</p>

      <button
        className="mt-4 px-3 py-1 bg-red-500 text-white rounded"
        onClick={() => reset()}
      >
        Tentar novamente
      </button>
    </div>
  )
}