import Button from '../Button/Button.jsx';
import HeartIcon  from '../HeartIcon/HeartIcon.jsx';

export default function ItemCard({imgSource, title, price}) {
    return(
        <>
            <div className="card-container h-96 w-64 bg-white p-3">
                <img src="https://unionarena.pokeninjapan.store/cdn/shop/files/img_item01_1_ef1a93fd-5df3-49f5-8ab6-7823ac7647a4.png?v=1732773121&width=800" className="pb-3" alt={title}/>
                <div className="flex justify-between">
                    <h3 className="font-semibold text-sm">Item Title</h3>
                    <HeartIcon></HeartIcon>
                </div>
                <p className="font-extrabold text-left pt-4 pb-3">7,99$</p>
                <Button>Add to Cart</Button>
            </div>
        </>
    );
}