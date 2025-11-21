"use client"

import { createClient } from "@/lib/supabase/client"

interface Saran {
  id: string
  nama: string
  pesan: string
  created_at: string
}

export async function addSaran(nama: string, pesan: string) {
  const supabase = createClient()

  const { data, error } = await supabase
    .from("saran")
    .insert({
      nama,
      pesan,
    })
    .select()

  if (error) {
    throw new Error(error.message)
  }

  return data?.[0] || null
}

export async function getSaran(): Promise<Saran[]> {
  const supabase = createClient()

  const { data, error } = await supabase.from("saran").select("*").order("created_at", { ascending: false })

  if (error) {
    console.error("Error fetching saran:", error)
    return []
  }

  return (data || []).map((item: any) => ({
    id: item.id,
    nama: item.nama,
    pesan: item.pesan,
    created_at: item.created_at,
  }))
}
