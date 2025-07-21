import Image from "next/image";
import { Corinthia } from "next/font/google";

const corinthia = Corinthia({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start h-[100dvh]">
      <section className="h-2/3">
        <Image
          src="/Mayline.jpg"
          alt="Mayline"
          width={500}
          height={500}
          className="shadow-lg h-full w-full object-cover object-center"
        />
      </section>
      <section className="flex flex-col items-center justify-center h-full w-full max-w-4xl relative overflow-visible">
        <div className="absolute top-15 -left-75 w-full h-full pointer-events-none z-[-1]">
          <Image
            src="/fleurs.png"
            alt="Fleurs"
            fill
            className="absolute rotate-[-10deg] scale-x-[-1] object-contain opacity-50"
            style={{ transform: "translate(-20%, 10%)" }}
            priority
          />
        </div>
        <div className="flex flex-col items-center justify-center text-center h-full backdrop-blur-s bg-white/40 rounded-lg">
          <Image
            src="/croix.png"
            alt="Croix"
            width={100}
            height={100}
            className="relative -top-[33px] "
            style={{
              filter:
                "invert(96%) sepia(31%) saturate(1482%) hue-rotate(291deg) brightness(95%) contrast(75%)",
            }}
          />
          <p className="text-sm">Nous célébrons le</p>
          <h1 className={`text-9xl text-[#d6a8a7] ${corinthia.className}`}>Bapteme</h1>
          <p className="text-sm relative left-[50px] top-[-35px] mb-5">de notre fille</p>
          <div className="flex flex-col items-center h-full ">
            <div className="flex flex-col items-center border-b border-[#d6a8a7] w-full">
              <p className="flex items-center justify-center text-3xl text-[#d6a8a7] h-10  uppercase">Mayline Bastien</p>
            </div>
            <div className="flex flex-col items-center border-b border-[#d6a8a7] w-full">
              <p className="flex items-center justify-center text-sm h-10">Dimanche 21 septembre 12H45</p>
            </div>
            <div className="flex flex-col items-center border-b border-[#d6a8a7] w-full">
              <p className="flex items-center justify-center text-lg uppercase h-10">église de salernes</p>
            </div>
            <div className="flex flex-col items-center border-b border-[#d6a8a7] w-full">
              <p className="flex items-center justify-center text-sm h-10">Puis réception à Vidauban</p>
            </div>
          </div>
        </div>
        <div className="absolute top-15 left-75 w-full h-full pointer-events-none z-[-1]">
          <Image
            src="/fleurs.png"
            alt="Fleurs"
            fill
            className="absolute rotate-[10deg] object-contain opacity-50"
            style={{ transform: "translate(-20%, 10%)" }}
            priority
          />
        </div>
      </section>
    </main>
  );
}
