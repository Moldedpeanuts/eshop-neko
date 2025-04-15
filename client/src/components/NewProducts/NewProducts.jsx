import ItemCard from '../ItemCard/ItemCard'

export default function NewProducts() {
    return(
        <div className="w-full">
            <div className="container mx-auto px-6 mt-20">
                {/* Section Title */}
                <h2 className="text-4xl font-bold text-left mb-12">New Products</h2>
                
                {/* Product Cards */}
                <div className="flex flex-wrap justify-center gap-6">
                    {/* Card 1 */}
                    <ItemCard
                        image="https://via.placeholder.com/200"
                        title="Product 1"
                        description="This is a great new product that you will love!"
                    />

                    {/* Card 2 */}
                    <ItemCard
                        image="https://via.placeholder.com/200"
                        title="Product 2"
                        description="A wonderful addition to your collection."
                    />

                    {/* Card 3 */}
                    <ItemCard
                        image="https://via.placeholder.com/200"
                        title="Product 3"
                        description="Latest and greatest! Don't miss out."
                    />

                    {/* Card 3 */}
                    <ItemCard
                        image="https://via.placeholder.com/200"
                        title="Product 3"
                        description="Latest and greatest! Don't miss out."
                    />

                    {/* Card 3 */}
                    <ItemCard
                        image="https://via.placeholder.com/200"
                        title="Product 3"
                        description="Latest and greatest! Don't miss out."
                    />
                </div>
            </div>
        </div>

    );
}