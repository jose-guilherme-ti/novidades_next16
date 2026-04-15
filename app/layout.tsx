import "./globals.css"

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-100 p-10">
        <div className="max-w-xl mx-auto bg-white shadow p-6 rounded">
          <h1 className="text-2xl font-bold mb-6">
            Next 16 Data Layer
          </h1>

          {children}
        </div>
      </body>
    </html>
  )
}