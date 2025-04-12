import { useState } from 'react';
import Button from '../Button/Button.jsx';
import HeartIcon  from '../HeartIcon/HeartIcon.jsx';
import AddedToFavorites from '../Modals/AddedToFavorites.jsx';


export default function ItemCard({imgSource, title, price}) {
    const [isFavoriteModalOpen, setIsFavoriteModalOpen] = useState(false);

    const handleClick = () => {
        setIsFavoriteModalOpen(true);

        setTimeout(() => setIsFavoriteModalOpen(false), 2000);
    };

    return(
        <>
            <div className="card-container h-96 w-64 bg-white p-3">
                <img src="https://iconnectstore.gr/image/cache/catalog/iConnect%20Images/04%20new/KOREAN/Pok%C3%A9mon%20TCG%20Scarlet%20and%20Violet%20151%20Booster%20Box%20-%20Korean%20Lang.7-600x600.jpg" className="pb-3" alt={title}/>
                <div className="flex justify-between">
                    <h3 className="font-semibold text-sm">{title}</h3>
                    <HeartIcon onClick={handleClick}></HeartIcon>
                </div>
                <p className="font-extrabold text-left pt-4 pb-3">{price}</p>
                <Button>Add to Cart</Button>
            </div>
            <div className="flex justify-end">
                {isFavoriteModalOpen && <AddedToFavorites></AddedToFavorites>}
            </div>
        </>
    );
}