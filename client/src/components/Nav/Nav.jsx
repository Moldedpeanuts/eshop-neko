import { BsCart3 } from "react-icons/bs"; // cart icon
import { CiSearch } from "react-icons/ci"; // search icon
import { FaRegUser } from "react-icons/fa6"; // user icon
import { FaRegHeart } from "react-icons/fa"; // heart icon

export default function Nav() {
    return(
        <>
             <div className="container mx-auto py-6">
                <div className="grid grid-cols-3 gap-4 items-center">
                    {/* Logo Section */}
                    <div className="flex justify-start">
                        <h1 className="text-3xl font-bold">NEKO</h1>
                    </div>

                    {/* Search Bar Section */}
                    <div className="flex justify-center">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="px-4 py-2 w-64 rounded-lg border border-gray-300"
                        />
                    </div>

                    {/* Profile, Favorites and Cart section */}
                    <div className="flex justify-end space-x-6 gap-3">
                        <a href="#"><FaRegUser></FaRegUser></a>
                        <a href="#"><FaRegHeart></FaRegHeart></a>
                        <a href="#"><BsCart3></BsCart3></a>
                    </div>
                </div>
            </div>
            <div className="bg-secondary py-4">
                Categories
            </div>
        </>
    );
}