import React from "react"
import BeritaList from "../components/BeritaList"

const HomePage = () => {
  return (
    <div className="bg-gradient-to-b from-white to-slate-100 min-h-screen p-6">
      <header className="max-w-6xl mx-auto py-12 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Skintalk Portal</h1>
        <p className="text-gray-600 text-lg">Artikel & informasi terpercaya seputar skincare</p>
      </header>

      <main className="max-w-6xl mx-auto my-12">
        <BeritaList />
      </main>

      <footer className="text-center text-sm text-gray-400 mt-20">
        &copy; {new Date().getFullYear()} Skintalk. All rights reserved.
      </footer>
    </div>
  )
}

export default HomePage
