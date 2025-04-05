import { CiHeart } from "react-icons/ci"; // empty heart icon
import { FaHeart } from "react-icons/fa"; // full heart icon
import { useState } from 'react'

export default function HeartIcon() {
    const [heart, setHeart] = useState(false);

    const toggleHeart = () => {
        setHeart(!heart);
    }

    return(
        <div onClick={toggleHeart}>
            {heart ? <FaHeart></FaHeart> : <CiHeart></CiHeart>}
        </div>
    );
}