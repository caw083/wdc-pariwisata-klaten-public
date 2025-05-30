import intro from "../assets/intro.jpg";

const Cta = () => {
    return (
        <section className="w-full py-24">
            <div className="max-w-7xl mx-auto px-5 lg:px-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="w-full">
                        <img
                            src={intro}
                            alt="intro"
                            className="w-full px-3 rounded-[20px] object-cover object-center h-[400px] "
                        />
                    </div>
                    <div className="w-full flex items-center">
                        <div>
                            <h1 className="text-3xl font-semibold md:ml-0 ml-3">
                                Ngumbul, merupakan kata yang diambil dari kata
                                “Umbul”
                            </h1>
                            <p className="text-lg my-5 mb-10 font-light md:ml-0 ml-3">
                                Umbul adalah tempat sumber mata air asli yang
                                berupa kolam pemandian berupa cekungan. Klaten
                                Dijuluki 1.001 Umbul karena Punya Banyak Mata
                                Air.
                            </p>
                            <a
                                href="#explore"
                                className="md:ml-0 ml-3 py-3 px-10 border border-zinc-800 rounded-lg hover:bg-zinc-800 hover:text-white duration-200"
                            >
                                Eksplor
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cta;
