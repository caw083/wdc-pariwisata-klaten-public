import intro from "../assets/umbul-cokro.webp";

const About = () => {
    return (
        <section className="w-full py-24" id="about">
            <div className="max-w-7xl mx-auto px-5 lg:px-0">
                <div className="rounded-2xl bg-[#DFF0F5] p-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="w-full flex items-center">
                            <div>
                                <h1 className="text-7xl font-bold">1001</h1>
                                <h2 className="text-3xl mt-5">Umbul</h2>
                                <p className="text-lg md:text-xl mt-5 font-light md:w-[80%]">
                                    Kabupaten Klaten disebut-sebut kaya akan
                                    sumber mata air. Di antara mata air itu
                                    disebut umbul sehingga tak heran Klaten juga
                                    disebut sebagai daerah 1.001 Umbul.
                                    Berdasarkan data yang dihimpun dari BPS
                                    Klaten tahun 2015, ada 174 mata air di
                                    Klaten. Lokasinya tersebar ke berbagai
                                    kecamatan.
                                </p>
                            </div>
                        </div>
                        <div className="w-full">
                            <img
                                src={intro}
                                alt="intro"
                                className="w-full object-cover object-center h-[400px] rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
