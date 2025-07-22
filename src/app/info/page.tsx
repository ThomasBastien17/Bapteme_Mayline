"use client";
import Header from "@/components/Header";
import MenuBurger from "@/components/MenuBurger";
import { Corinthia } from "next/font/google";
import { useState } from "react";

const corinthia = Corinthia({ weight: ["400", "700"], subsets: ["latin"] });

export default function Info() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Header onOpenMenu={() => setIsOpen(true)} />
      <MenuBurger isOpen={isOpen} onClose={() => setIsOpen(false)} />
      {isOpen && (
        <div
          className="fixed inset-0 bg-[#d6a8a7]/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
      <main className="min-h-screen flex flex-col items-center justify-center gap-8 bg-red-50 p-6">
        <h2 className={`text-6xl font-bold text-[#d6a8a7] mb-4 ${corinthia.className}`}>Infos utiles</h2>
        <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-6 border-4 border-[#d6a8a7] bg-opacity-90 text-center font-serif">
          <p className="text-lg text-gray-700 mb-4">
            Pour ceux qui le souhaite une messe sera donnée a 11h , suivie de la ceremonie de baptême à 12h45. Ceux qui ne souhaite pas participée a la messe rendez vous a 12h30devant l&apos;eglise de salernes
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Aprés la cermonie de bapteme, un repas sera servi a vidauban chez les jujus.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Pour toute question ou information, n&apos;hésitez pas à nous contacter.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Pour toute question ou information, n&apos;hésitez pas à nous contacter.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Pour toute question ou information, n&apos;hésitez pas à nous contacter.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Pour toute question ou information, n&apos;hésitez pas à nous contacter.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Pour toute question ou information, n&apos;hésitez pas à nous contacter.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Pour toute question ou information, n&apos;hésitez pas à nous contacter.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Pour toute question ou information, n&apos;hésitez pas à nous contacter.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Pour toute question ou information, n&apos;hésitez pas à nous contacter.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Pour toute question ou information, n&apos;hésitez pas à nous contacter.
          </p>

        </div>
      </main>
    </div>
  )
}