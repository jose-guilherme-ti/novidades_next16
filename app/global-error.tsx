"use client"

export default function GlobalError({
  error
}: {
  error: Error
}) {
  return (
    <html>
      <body>
        <h1>Erro crítico</h1>
        <p>{error.message}</p>
      </body>
    </html>
  )
}