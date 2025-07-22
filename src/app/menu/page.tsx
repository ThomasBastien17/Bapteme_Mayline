"use client";

import Header from "@/components/Header";
import MenuBurger from "@/components/MenuBurger";
import { Corinthia } from "next/font/google";
import { useState } from "react";

const corinthia = Corinthia({ weight: ["400", "700"], subsets: ["latin"] });

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col min-h-screen">
      <Header onOpenMenu={() => setIsOpen(true)} />
      <MenuBurger isOpen={isOpen} onClose={() => setIsOpen(false)} />
      {isOpen && (
        <div
          className="fixed inset-0 bg-[#d6a8a7]/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
      <main className="min-h-screen flex flex-col items-center justify-center gap-8 bg-red-50 p-6">
        <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-6 border-4 border-[#d6a8a7] bg-opacity-90 text-center font-serif">
          <h3 className={`text-6xl font-bold text-[#d6a8a7] mb-4 ${corinthia.className}`}>Menu</h3>
          <div className="space-y-2 text-lg text-gray-700">
            <p>
              <span className="font-semibold text-[#b86b6b]">Entrée :</span> Verrine
            </p>
            <p>
              <span className="font-semibold text-[#b86b6b]">Plats :</span> <span className={`text-4xl font-bold text-[#d6a8a7] mb-4 ${corinthia.className}`}>Paëlla</span>
            </p>
            <p>
              <span className="font-semibold text-[#b86b6b]">Dessert :</span> Pièces montées
            </p>
            <p>
              <span className="font-semibold text-[#b86b6b]">Boissons :</span> Champagne, Vin, Eau
            </p>
            <p>
              <span className="font-semibold text-[#b86b6b]">Café :</span> à volonté
            </p>
          </div>
          <div className="mt-4 w-16 h-1 bg-[#d6a8a7] mx-auto rounded-full"></div>
        </div>
      </main>
    </div>
  );
}