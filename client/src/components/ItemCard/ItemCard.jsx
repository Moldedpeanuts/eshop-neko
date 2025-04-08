import Button from '../Button/Button.jsx';
import { BsCart3 } from 'react-icons/bs'; // cart icon

export default function ItemCard({imgSource, title, price}) {
    return(
        <>
            <div className="card-container h-96 w-64 bg-white">
                <img src={imgSource} alt={title}/>
                <h3>{title}</h3>
                <p>{price}</p>
                <Button>Add to Cart</Button>
            </div>
        </>
    );
}