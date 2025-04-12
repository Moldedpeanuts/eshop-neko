import { FaRegHeart } from "react-icons/fa";
import { useState } from 'react'

export default function HeartIcon({onClick}) {
    const [heart, setHeart] = useState(false);

    const toggleHeart = () => {
        setHeart(!heart);

        if(onClick) onClick();
    }

    return(
        <div onClick={toggleHeart} className="hover:cursor-pointer">
            {heart ? <FaRegHeart className="text-purple-600 fill-current"></FaRegHeart> : <FaRegHeart></FaRegHeart>}
        </div>
    );
}