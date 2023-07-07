import { Link } from "react-router-dom"

export function Header() {

    const sections = [
        { Text: 'Telefone', path: "/" },
        { Text: 'Chamadas', path: "/calls" },
        { Text: 'Contatos', path: "/contacts" }
    ]

    return (
        <main className="w-full h-full">
            <header className="w-full h-full flex flex-row items-center justify-center">
                <nav className="w-full flex items-center justify-center gap-x-4">
                    {sections.map(element => {
                        return (
                            <>
                                <Link to={element.path}>
                                    <button className="text-white font-semibold text-xl bg-zinc-500 rounded p-2">{element.Text}</button>
                                </Link>
                            </>
                        )
                    })}
                </nav>
            </header>
        </main>
    )
}