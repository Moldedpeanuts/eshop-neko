import Button from '../Button/Button.jsx';
import HeartIcon  from './components/HeartIcon/HeartIcon.jsx'

export default function ItemCard({imgSource, title, price}) {
    return(
        <>
            <div className="card-container h-96 w-64 bg-white">
                <img src={imgSource} alt={title}/>
                <h3>Item Title</h3>
                
                <p>price $</p>
                <Button>Add to Cart</Button>
            </div>
        </>
    );
}