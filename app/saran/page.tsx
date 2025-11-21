"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { addSaran } from "@/lib/saran-store"

export default function AddSaran() {
  const router = useRouter()
  const [nama, setNama] = useState("")
  const [pesan, setPesan] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!nama.trim() || !pesan.trim()) {
      alert("Nama dan pesan tidak boleh kosong!")
      return
    }

    setLoading(true)
    try {
      await addSaran(nama, pesan)
      alert("Aspirasi berhasil ditambahkan!")
      setNama("")
      setPesan("")
      router.push("/daftar")
    } catch (err) {
      console.error("Error:", err)
      alert("Terjadi kesalahan!")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#54B6FD] to-[#2431BC] flex items-center justify-center p-4 font-sans">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-5xl overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-2/5 flex items-center justify-center p-8 bg-gradient-to-br from-blue-50 to-white border-r border-blue-200">
            <img src="/chat-bubble.png" alt="Chat Bubble Icon" className="w-64 h-64 object-contain drop-shadow-lg" />
          </div>

          <div className="lg:w-3/5 px-8 py-8">
            <h2 className="text-2xl font-black text-gray-900 uppercase mb-6 tracking-wide">Sampaikan Aspirasi Mu!</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Nama</label>
                <input
                  type="text"
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                  placeholder="Masukkan nama Anda"
                  className="w-full px-4 py-2 border-2 border-blue-300 rounded-lg focus:outline-none focus:border-[#2431BC] bg-cyan-50"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Aspirasi</label>
                <textarea
                  value={pesan}
                  onChange={(e) => setPesan(e.target.value)}
                  placeholder="Tuliskan aspirasi atau saran Anda di sini..."
                  rows={6}
                  className="w-full px-4 py-2 border-2 border-blue-300 rounded-lg focus:outline-none focus:border-[#2431BC] bg-cyan-50 resize-none"
                />
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 px-4 py-3 bg-gradient-to-r from-[#54B6FD] to-[#2431BC] text-white rounded-full hover:scale-105 transition-transform font-bold disabled:opacity-50"
                >
                  {loading ? "Mengirim..." : "Kirim Aspirasi"}
                </button>
                <button
                  type="button"
                  onClick={() => router.push("/")}
                  className="flex-1 px-4 py-3 bg-gray-200 text-gray-900 rounded-full hover:scale-105 transition-transform font-bold"
                >
                  ← Kembali
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
