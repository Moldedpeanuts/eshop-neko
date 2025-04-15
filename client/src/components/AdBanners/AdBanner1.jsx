export default function AdBanner1() {
    return(
        <div className="w-full bg-primary text-white p-12 flex flex-col items-center justify-center relative overflow-hidden">
            {/* Content */}
            <div className="relative z-10 text-center">
            <h2 className="text-4xl font-bold mb-4">
                Discover the Best Anime Merch & Collectibles!
            </h2>
            <p className="text-lg mb-6">
                Get your hands on exclusive anime figures, posters, and more. Don't miss out on our limited-time offers!
            </p>
            <a 
                href="#shop-now" 
                className="bg-yellow-500 text-black py-3 px-6 rounded-full text-xl font-semibold hover:bg-yellow-400 transition duration-300"
            >
                Shop Now
            </a>
            </div>
      </div>
    );
}