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
          <h3 className={`text-4xl font-bold text-[#d6a8a7] mb-4 ${corinthia.className}`}>Menu du Baptême</h3>
          <div className="space-y-2 text-sm text-gray-700">
            <p>
              Pour célébrer ce moment précieux en toute convivialité, nous avons le plaisir de vous proposer un menu gourmand et généreux, pensé pour ravir petits et grands :
            </p>
            <p>
              <span className={`text-3xl font-bold text-[#d6a8a7] mb-4 ${corinthia.className}`}>Apéritif frais</span> <br />
              Un moment de partage autour de délicieuses tartinades maison, de verrines savoureuses et de mignardises salées, à déguster en toute simplicité.
            </p>
            <p>
              <span className={`text-3xl font-bold text-[#d6a8a7] mb-4 ${corinthia.className}`}>Plat principal</span> <br />
              Une généreuse paella colorée et parfumée, cuisinée avec soin pour vous offrir un voyage ensoleillé au cœur des saveurs méditerranéennes.
            </p>
            <p>
              <span className={`text-3xl font-bold text-[#d6a8a7] mb-4 ${corinthia.className}`}>Dessert</span>  <br />
              Pour clôturer ce repas sur une note sucrée : une somptueuse pièce montée garnie de choux, symbole de fête et de gourmandise.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}