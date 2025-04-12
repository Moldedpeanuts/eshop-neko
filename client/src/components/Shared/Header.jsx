import { FaPhoneAlt } from "react-icons/fa"; // phone icon
import Nav from '../Nav/Nav.jsx'

export default function Header() {
    return(
        <header className="bg-primary text-white py-20">
            <div className="flex justify-start gap-4 align-center px-4 font-bold"><FaPhoneAlt></FaPhoneAlt>211 9000122</div>
            <div className="border-t border-secondary my-4"></div>
            <h1 className="text-left px-5"><a>NEKO</a></h1>
            <div className="container mx-auto flex justify-between items-center">
                <Nav></Nav>
            </div>
        </header>
    );
}