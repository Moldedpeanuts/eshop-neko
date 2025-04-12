export default function AdBanner1() {
    return(
        <div className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white p-12 flex flex-col items-center justify-center relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: 'url("https://example.com/anime-banner.jpg")' }}></div>
        
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
  
        {/* Optional extra visual elements */}
        <div className="absolute bottom-0 right-0 p-4 text-xl text-white opacity-60">
          <span>Limited Edition - Only Available While Stocks Last!</span>
        </div>
      </div>
    );
}