import Link from 'next/link';
import Image from 'next/image';
import { X } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MenuBurger({ isOpen, onClose }: SidebarProps) {
  return (
    <aside className={`fixed top-0 right-0 w-64 h-full bg-red-50 shadow-lg z-50 flex flex-col transform transition-transform duration-300 p-4 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
      <div className='flex justify-end mb-4'>
        <X size={32} onClick={onClose} className='text-[#d6a8a7]' />
      </div>
      <nav className='flex flex-col space-y-2 justify-center items-center mt-16 text-lg text-[#d6a8a7] text-shadow-s font-semibold'>
        <Link href="/" onClick={onClose} className="block py-2 px-4 hover:bg-gray-200">Accueil</Link>
        <Link href="/info" onClick={onClose} className="block py-2 px-4 hover:bg-gray-200">Infos Utiles</Link>
        <Link href="/adress" onClick={onClose} className="block py-2 px-4 hover:bg-gray-200">Adresses</Link>
        <Link href="/menu" onClick={onClose} className="block py-2 px-4 hover:bg-gray-200">Menu</Link>
      </nav>
      <div className='absolute top-30 left-0 w-full h-full pointer-events-none z-[-1]'>
      <Image src="/fleurs.png" alt="Fleurs" fill className="absolute scale-x-[-1] object-contain opacity-50" />
      </div>
    </aside>
  );
}