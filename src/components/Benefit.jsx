import menyegarkanImg from "../assets/menyegarkan.png";
import menyehatkanImg from "../assets/menyehatkan.png";
import terapiImg from "../assets/terapi.png";

const Benefit = () => {
    return (
        <section className="w-full py-24" id="benefit">
            <div className="max-w-7xl mx-auto rounded-2xl px-5 lg:px-0">
                <h1 className="text-center font-bold text-4xl md:text-5xl">
                    Manfaat Ngumbul
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-24">
                    <div className="flex flex-col items-center">
                        <img src={menyegarkanImg} alt="" />
                        <h2 className="text-3xl text-center font-semibold mt-5 md:mt-10">Menyegarkan Tubuh</h2>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src={terapiImg} alt="" />
                        <h2 className="text-3xl text-center font-semibold mt-5 md:mt-10">Terapi</h2>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src={menyehatkanImg} alt="" />
                        <h2 className="text-3xl text-center font-semibold mt-5 md:mt-10">Menyehatkan Tubuh</h2>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Benefit;
