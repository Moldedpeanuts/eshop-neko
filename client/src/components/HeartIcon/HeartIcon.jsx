import { FaRegHeart } from "react-icons/fa";
import { useState } from 'react'

export default function HeartIcon() {
    const [heart, setHeart] = useState(false);

    const toggleHeart = () => {
        setHeart(!heart);
    }

    return(
        <div onClick={toggleHeart} className="hover:cursor-pointer">
            {heart ? <FaRegHeart className="text-purple-600 fill-current"></FaRegHeart> : <FaRegHeart></FaRegHeart>}
        </div>
    );
}