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
            Chers invités,</p>
          <p className="text-lg text-gray-700 mb-4">
            Nous sommes très heureux de vous compter parmi nous pour cette journée de célébration. Voici les différentes étapes du baptême :</p>
            <p className="text-lg text-gray-700 mb-4"><span className="text-[#d6a8a7] font-semibold">Messe (facultative)</span> – 11h <br />
            Pour ceux qui le souhaitent, une messe sera célébrée à l’église de Salernes à 11h. </p>
          <p className="text-lg text-gray-700 mb-4">
            <span className="text-[#d6a8a7] font-semibold">Rendez-vous</span> – 12h30 <br />
            Nous vous donnons rendez-vous à 12h30 devant l’église de Salernes, pour accueillir ensemble les proches et préparer le début de la cérémonie.</p>
          <p className="text-lg text-gray-700 mb-4">
            <span className="text-[#d6a8a7] font-semibold">Célébration du baptême</span> <br />
            La cérémonie de baptême commencera à 12h45, à l’intérieur de l’église.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            <span className="text-[#d6a8a7] font-semibold">Pour vous garer</span> <br />
            Le parking Frédéric Mistral, situé à 1 minute à pied de l’église, est à votre disposition pour vous garer facilement. <span className="text-red-500 font-semibold">Attention jour de marché !</span></p>
          <p className="text-lg text-gray-700 mb-4">
            <span className="text-[#d6a8a7] font-semibold">Suite des festivités</span><br /> à Vidauban <br />
            Après la cérémonie, nous poursuivrons cette belle journée chez nos merveilleux hôtes, les Jujus, à Vidauban, pour partager un moment convivial autour d’un bon repas.</p>
          <p className="text-lg text-gray-700 mb-4">
            Nous avons hâte de vivre cette journée spéciale à vos côtés ❤️</p>
          <p className="text-lg text-red-500 mb-4">
            Merci de nous confirmer votre présence avant début septembre.</p>

        </div>
      </main>
    </div>
  )
}