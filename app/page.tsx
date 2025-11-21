"use client"

import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#54B6FD] to-[#2431BC] flex items-center justify-center p-4 font-sans">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md px-12 py-10 text-center">
        <h2 className="text-3xl font-black text-[#2431BC] uppercase mb-8 tracking-wide">Sampaikan Aspirasi Mu</h2>

        <div className="flex gap-4 justify-center mb-8">
          <button
            className="bg-gradient-to-r from-[#54B6FD] to-[#2431BC] text-white font-bold py-2.5 px-7 rounded-full hover:scale-105 transition-transform shadow-md"
            onClick={() => router.push("/saran")}
          >
            Tulis Aspirasi
          </button>
          <button
            className="bg-gradient-to-r from-[#54B6FD] to-[#2431BC] text-white font-bold py-2.5 px-7 rounded-full hover:scale-105 transition-transform shadow-md"
            onClick={() => router.push("/daftar")}
          >
            Lihat Aspirasi
          </button>
        </div>

        <footer className="text-xs text-gray-400">&copy; 2025 FRISQ. All rights reserved.</footer>
      </div>
    </div>
  )
}
