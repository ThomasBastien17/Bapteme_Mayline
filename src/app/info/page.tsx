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
        <h1 className={`text-5xl font-bold text-[#d6a8a7] mb-4 ${corinthia.className}`}>Infos utiles</h1>
        <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-6 border-4 border-[#d6a8a7] bg-opacity-90 text-center font-serif">
          <p className="text-lg text-gray-700 mb-4">
            Chers invités,</p>
          <p className="text-lg text-gray-700 mb-4">
            Nous sommes très heureux de vous compter parmi nous pour cette journée de célébration. Voici les différentes étapes du baptême :</p>
            <p className="text-lg text-gray-700 mb-4"><span className="text-[#d6a8a7] font-semibold">Messe (facultative)</span> – 11h <br />
            Pour ceux qui le souhaitent, une messe sera célébrée à <a href="https://www.google.fr/maps/place/Eglise+Saint+Pierre/@43.5639912,6.2293929,17z/data=!3m1!4b1!4m6!3m5!1s0x12c9595d8d08baeb:0x73bac165209b2c63!8m2!3d43.5639912!4d6.2319678!16s%2Fg%2F11j3w7mj8l?entry=ttu&g_ep=EgoyMDI1MDcyOC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="font-semibold underline">l’église de Salernes</a> à 11h. </p>
          <p className="text-lg text-gray-700 mb-4">
            <span className="text-[#d6a8a7] font-semibold">Rendez-vous</span> – 12h30 <br />
            Nous vous donnons rendez-vous à 12h30 devant <a href="https://www.google.fr/maps/place/Eglise+Saint+Pierre/@43.5639912,6.2293929,17z/data=!3m1!4b1!4m6!3m5!1s0x12c9595d8d08baeb:0x73bac165209b2c63!8m2!3d43.5639912!4d6.2319678!16s%2Fg%2F11j3w7mj8l?entry=ttu&g_ep=EgoyMDI1MDcyOC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="font-semibold underline">l’église de Salernes</a>, pour accueillir ensemble les proches et préparer le début de la cérémonie.</p>
          <p className="text-lg text-gray-700 mb-4">
            <span className="text-[#d6a8a7] font-semibold">Célébration du baptême</span> <br />
            La cérémonie de baptême commencera à 12h45, à l’intérieur de l’église.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            <span className="text-[#d6a8a7] font-semibold">Pour vous garer</span> <br />
            Le <a href="https://www.google.fr/maps/place/Parking+Fr%C3%A9d%C3%A9ric+Mistral/@43.5617207,6.2306205,17z/data=!3m1!4b1!4m6!3m5!1s0x12c959f09749fb21:0xdad64b15d82bae06!8m2!3d43.5617207!4d6.2331954!16s%2Fg%2F11q_7s9wpv?entry=ttu&g_ep=EgoyMDI1MDcyOC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="font-semibold underline">parking Frédéric Mistral</a>, situé à 1 minute à pied de l’église, est à votre disposition pour vous garer facilement. <span className="text-red-500 font-semibold"> <br /> Attention jour de marché !</span></p>
          <p className="text-lg text-gray-700 mb-4">
            <span className="text-[#d6a8a7] font-semibold">Suite des festivités</span><br /> à Vidauban <br />
            Après la cérémonie, nous poursuivrons cette belle journée chez nos merveilleux hôtes, <a href="https://www.google.fr/maps/place/126+Bd+des+Vallons,+83550+Vidauban/@43.4249124,6.4450124,18.25z/data=!4m14!1m7!3m6!1s0x12c959f09749fb21:0xdad64b15d82bae06!2sParking+Fr%C3%A9d%C3%A9ric+Mistral!8m2!3d43.5617207!4d6.2331954!16s%2Fg%2F11q_7s9wpv!3m5!1s0x12ceb2f99d198581:0xfcc3a80a2ea112d7!8m2!3d43.4250346!4d6.4457858!16s%2Fg%2F11c4krdm2z?entry=ttu&g_ep=EgoyMDI1MDcyOC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="font-semibold underline">les Jujus</a>, à Vidauban, pour partager un moment convivial autour d’un bon repas.</p>
          <p className="text-lg text-gray-700 mb-4">
            Nous avons hâte de vivre cette journée spéciale à vos côtés ❤️</p>
          <p className="text-lg text-red-500 mb-4">
            Merci de nous confirmer votre présence avant début septembre.</p>

        </div>
      </main>
    </div>
  )
}