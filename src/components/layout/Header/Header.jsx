import TopBar from "./TopBar"

export default function Header()
{
    return
    (
        <header className="sticky top-0 z-50 bg-white border-b border-black/10">
        <TopBar/>
        </header>
    );
}