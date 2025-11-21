"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { getSaran } from "@/lib/saran-store"

interface Saran {
  id: string
  nama: string
  pesan: string
  created_at: string
}

export default function DaftarSaran() {
  const router = useRouter()
  const [saranList, setSaranList] = useState<Saran[]>([])
  const [selectedSaran, setSelectedSaran] = useState<Saran | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    ambilSaran()
  }, [])

  const ambilSaran = async () => {
    try {
      setIsLoading(true)
      const data = await getSaran()
      setSaranList(data)
    } catch (err) {
      console.error("Error:", err)
    } finally {
      setIsLoading(false)
    }
  }

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString)
      return date.toLocaleString("id-ID", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })
    } catch {
      return "-"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#54B6FD] to-[#2431BC] flex items-center justify-center p-4 font-sans">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl px-8 py-8">
        <h2 className="text-2xl font-black text-[#2431BC] uppercase mb-6 text-center tracking-wide">
          Daftar Inspirasi
        </h2>

        {isLoading ? (
          <p className="text-center text-gray-600 py-12">Memuat data...</p>
        ) : saranList.length === 0 ? (
          <p className="text-center text-gray-600 py-12">Tidak ada saran.</p>
        ) : (
          <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2">
            {saranList.map((saran) => (
              <div
                key={saran.id}
                onClick={() => setSelectedSaran(saran)}
                className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-4 border-2 border-blue-200 cursor-pointer hover:border-blue-400 hover:shadow-md transition-all"
              >
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-[#2431BC] text-sm mb-1 truncate">{saran.nama || "Anonim"}</p>
                    <p className="text-gray-700 text-sm line-clamp-2 break-words">{saran.pesan || "-"}</p>
                  </div>
                  <p className="text-xs text-gray-500 whitespace-nowrap flex-shrink-0">
                    {formatDate(saran.created_at)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        <button
          onClick={() => router.push("/")}
          className="mt-8 w-full px-4 py-3 bg-gradient-to-r from-[#54B6FD] to-[#2431BC] text-white rounded-full hover:scale-105 transition-transform font-bold"
        >
          ← Kembali
        </button>
      </div>

      {selectedSaran && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl max-h-[80vh] overflow-y-auto">
            <h3 className="text-2xl font-bold text-[#2431BC] mb-2 break-words">{selectedSaran.nama || "Anonim"}</h3>
            <p className="text-sm text-gray-500 mb-4">{formatDate(selectedSaran.created_at)}</p>
            <p className="text-gray-700 mb-6 whitespace-pre-wrap text-sm break-words">{selectedSaran.pesan || "-"}</p>
            <button
              onClick={() => setSelectedSaran(null)}
              className="w-full px-4 py-2 bg-gradient-to-r from-[#54B6FD] to-[#2431BC] text-white rounded-lg font-semibold hover:scale-105 transition-transform"
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
