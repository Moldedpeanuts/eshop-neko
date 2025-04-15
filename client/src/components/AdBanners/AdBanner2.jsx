import tamagochiBg from '../../assets/tamagochi.jpg';

export default function AdBanner2() {
    return(
        <div className="w-full h-[700px] text-white p-12 flex flex-col items-center justify-center relative overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 bg-cover bg-center" style={{
            backgroundImage:
                `url(${tamagochiBg})`,
            }}></div>
        </div>
    );
}