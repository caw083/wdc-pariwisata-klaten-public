import logo from "../assets/logo-umbul.png";

const Footer = () => {
    return (
        <footer className="w-full py-14 bg-[#DFF0F5]">
            <div className="max-w-7xl mx-auto rounded-2xl">
                <div className="flex flex-wrap gap-x-10 gap-y-3 justify-center items-center px-5 md:px-0">
                    <a href="/" className="hover:text-blue-500 transition-all font-semibold">
                        Home
                    </a>
                    <a href="#about" className="hover:text-blue-500 transition-all font-semibold">
                        About
                    </a>
                    <a href="#benefit" className="hover:text-blue-500 transition-all font-semibold">
                        Benefit Umbul
                    </a>
                    <a href="#explore" className="hover:text-blue-500 transition-all font-semibold">
                        Explore Umbul
                    </a>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-y-3 mt-10 items-center">
                    <img
                        src={logo}
                        className="place-self-center md:place-self-start h-16"
                    />
                    <p className="text-center">
                        &copy; Ngumbul, Inc. All Rights Reserved
                    </p>
                    <div className="flex items-center justify-center gap-5 md:justify-end">
                        <a
                            href="#"
                            className="hover:text-blue-500 transition-all font-semibold"
                        >
                            Instagram
                        </a>
                        <a
                            href="#"
                            className="hover:text-blue-500 transition-all font-semibold"
                        >
                            Facebook
                        </a>
                        <a
                            href="#"
                            className="hover:text-blue-500 transition-all font-semibold"
                        >
                            Twitter
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
