import TopBar from "./TopBar";
import Logo from "../../ui/Logo"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-black/10">
      <TopBar />
      <div className="max-w-6x1 mx-auto flex justify-center px-6 py-3">
        <Logo/>
      </div>
    </header>
  );
}