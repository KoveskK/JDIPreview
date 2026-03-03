"use client"

import { useEffect } from "react"

export default function Page() {
  useEffect(() => {
    window.location.href = "/site.html"
  }, [])

  return (
    <div className="min-h-screen bg-[#080808] flex items-center justify-center">
      <div className="text-center">
        <div className="w-12 h-12 rounded border-2 border-red-600 flex items-center justify-center mx-auto mb-4">
          <span className="text-red-600 font-bold text-lg tracking-tighter">JDI</span>
        </div>
        <p className="text-neutral-400 text-sm tracking-widest uppercase">Loading JDI AutoHaus...</p>
      </div>
    </div>
  )
}
