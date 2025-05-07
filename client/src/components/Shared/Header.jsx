import { FaPhoneAlt } from "react-icons/fa"; // phone icon
import Nav from '../Nav/Nav.jsx'

export default function Header() {
    return(
        <header className="bg-primary text-white w-full">
            <div className="flex items-center gap-4 py-4 px-4 font-bold"><FaPhoneAlt className="text-xl"></FaPhoneAlt>211 9000122</div>
            <div className="border-t border-secondary my-4"></div>
            <Nav></Nav>
        </header>
    );
}