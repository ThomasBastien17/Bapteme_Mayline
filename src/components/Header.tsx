import { Menu } from "lucide-react";

interface HeaderProps {
  onOpenMenu: () => void;
}

export default function Header({ onOpenMenu }: HeaderProps) {
  return(
    <header className="absolute p-4 top-0 right-0">
      <button className="text-[#d6a8a7]" onClick={onOpenMenu}>
        <Menu />
      </button>
    </header>
  )
}