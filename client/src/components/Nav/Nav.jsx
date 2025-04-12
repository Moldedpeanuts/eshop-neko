import { BsCart3 } from "react-icons/bs"; // cart icon
import { CiSearch } from "react-icons/ci"; // search icon
import { FaRegUser } from "react-icons/fa6"; // user icon
import { FaRegHeart } from "react-icons/fa"; // heart icon
import { FaCat } from "react-icons/fa"; // cat logo

export default function Nav() {
    return(
        <>
             <div className="container mx-auto py-6">
                <div className="grid grid-cols-3 gap-4 items-center">
                    {/* Logo Section */}
                    <div className="flex justify-start">
                        <FaCat className="text-2xl cursor-pointer"></FaCat><h1 className="text-5xl font-bold cursor-pointer">NEKO</h1>
                    </div>

                    {/* Search Bar Section */}
                    <div className="flex justify-center">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="px-4 py-2 w-64 rounded-lg border border-gray-300 text-black"
                        />
                    </div>

                    {/* Profile, Favorites and Cart section */}
                    <div className="flex justify-end space-x-6 gap-3">
                        <a href="#"><FaRegUser className="text-2xl"></FaRegUser></a>
                        <a href="#"><FaRegHeart className="text-2xl"></FaRegHeart></a>
                        <a href="#"><BsCart3 className="text-2xl"></BsCart3></a>
                    </div>
                </div>
            </div>
            <div className="bg-secondary py-4">
                Categories
            </div>
        </>
    );
}