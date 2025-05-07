import { FaPhoneAlt } from "react-icons/fa"; // phone icon
import Nav from '../Nav/Nav.jsx'

export default function Header() {
    return(
        <header className="bg-primary text-white flex flex-col">
            <div className="flex justify-start gap-4 align-center py-4 px-4 font-bold"><FaPhoneAlt className="text-xl"></FaPhoneAlt>211 9000122</div>
            <div className="border-t border-secondary my-4"></div>
            <div>
                <Nav></Nav>
            </div>
        </header>
    );
}