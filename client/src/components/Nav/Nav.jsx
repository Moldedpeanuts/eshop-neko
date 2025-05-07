import { BsCart3 } from "react-icons/bs"; // cart icon
import { CiSearch } from "react-icons/ci"; // search icon
import { FaRegUser } from "react-icons/fa6"; // user icon
import { FaRegHeart } from "react-icons/fa"; // heart icon
import { FaCat } from "react-icons/fa"; // cat logo
import { FaBars } from 'react-icons/fa'; // menu icon


export default function Nav() {
    return(
        <>
             <div className="w-full">
                <div className="flex justify-around px-4 py-4 gap-4">
                    {/* Logo Section */}
                    <div className="flex justify-center gap-2">
                        <FaCat className="text-2xl cursor-pointer"></FaCat><h1 className="text-5xl font-bold cursor-pointer">NEKO</h1>
                    </div>
                    {/* Search Bar Section */}
                    <div>
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full w-64 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-secondary border border-gray-300 text-black"
                        />
                    </div>

                    {/* Profile, Favorites and Cart section */}
                    <div className="flex justify-center gap-4">
                        <a href="#"><FaRegUser className="text-2xl"></FaRegUser></a>
                        <a href="#"><FaRegHeart className="text-2xl"></FaRegHeart></a>
                        <a href="#"><BsCart3 className="text-2xl"></BsCart3></a>
                    </div>
                </div>
                <div className="flex justify-start gap-2 px-4 bg-secondary py-4 font-bold">
                    <FaBars className="text-2xl cursor-pointer"></FaBars><h2 className="cursor-pointer">Categories</h2>
                </div>
            </div>
        </>
    );
}