import Button from '../Button/Button.jsx';
import HeartIcon  from '../HeartIcon/HeartIcon.jsx';
import AddedToFavorites from '../Modals/AddedToFavorites.jsx';
import { useState } from 'react';

export default function ItemCard({imgSource, title, price}) {
    const [isFavoriteModalOpen, setIsFavoriteModalOpen] = useState(false);

    const handleClick = () => {
        setIsFavoriteModalOpen(true);

        setTimeout(() => setIsFavoriteModalOpen(false), 2000);
    };

    return(
        <>
            <div className="card-container h-96 w-64 bg-white p-3">
                <img src={imgSource} className="pb-3" alt={title}/>
                <div className="flex justify-between">
                    <h3 className="font-semibold text-sm">Item Title</h3>
                    <HeartIcon onClick={handleClick}></HeartIcon>
                </div>
                <p className="font-extrabold text-left pt-4 pb-3">7,99$</p>
                <Button>Add to Cart</Button>
            </div>
            { isFavoriteModalOpen && <AddedToFavorites></AddedToFavorites>}
        </>
    );
}