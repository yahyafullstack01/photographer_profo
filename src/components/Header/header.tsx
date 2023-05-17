import Hero from "../Header/Hero/hero"
import Menu from "./Menu/menu"
export default function Header() {
    return (
        <div className="Header">
            <Menu />
            <Hero />
        </div>
    )
}