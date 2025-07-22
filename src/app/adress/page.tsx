"use client";

import Header from "@/components/Header";
import MenuBurger from "@/components/MenuBurger";
import { Corinthia } from "next/font/google";
import { useState } from "react";
import dynamic from "next/dynamic";

const LeafletMap = dynamic(() => import("@/components/LeafletMap"), {
  ssr: false,
});

const corinthia = Corinthia({ weight: ["400", "700"], subsets: ["latin"] });

export default function Adress() {
  const [isOpen, setIsOpen] = useState(false);
  const markers: {
    lat: number;
    lng: number;
    label: string;
    type: "eglise" | "ceremonie" | "parking";
  }[] = [
      {
        lat: 43.563978,
        lng: 6.231946,
        label: "Église de Salernes",
        type: "eglise",
      },
      {
        lat: 43.425020,
        lng: 6.445772,
        label: "Cérémonie",
        type: "ceremonie",
      },
      {
        lat: 43.427274,
        lng: 6.445343,
        label: "Parking",
        type: "parking",
      },
    ]
  return (
    <div className="flex flex-col min-h-screen relative">
      <Header onOpenMenu={() => setIsOpen(true)} />
      <MenuBurger isOpen={isOpen} onClose={() => setIsOpen(false)} />
      {isOpen && (
        <div
          className="fixed inset-0 bg-[#d6a8a7]/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
      <main className="min-h-screen flex flex-col items-center justify-center gap-8 bg-gray-50 p-6">
        <h2 className={`text-5xl text-center p-4 ${corinthia.className} font-semibold text-[#d6a8a7]`}>Adresses</h2>
        {markers.map(({ lat, lng, label, type }, index) => (
          <div key={index} className="w-full max-w-3xl h-150 border-2 border-gray-300 rounded-lg shadow-md overflow-hidden">
            <h3 className="text-center font-semibold text-md text-[#d6a8a7] text-shadow-s p-2 bg-red-100">{label}</h3>
            <div className="relative z-0 h-150">
              <LeafletMap markers={[{ lat, lng, label, type }]} zoom={15} />
            </div>
          </div>
        ))}
      </main>
    </div>
  );
} 