import { useState } from "react";
import logo from "../assets/logo-umbul.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <header
            className={`w-full fixed top-0 z-50 transition-all duration-200 ease-in-out`}
        >
            <div className="max-w-7xl px-5 py-2 md:mt-2 mx-auto flex items-center justify-between bg-white/50 backdrop-blur-xl md:rounded-md">
                {/* <h1 className="text-2xl font-bold">Ngumbul</h1> */}

                {/* Logo Ngumbul */}
                <img src={logo} alt="logo" className="h-16" />

                {/* Navbar For Desktop */}
                <nav className="hidden md:flex md:flex-row md:gap-5 md:items-center">
                    <a
                        href="#home"
                        className="px-3 py-1 text-[#020060] hover:text-blue-500 font-semibold transition-all"
                    >
                        Home
                    </a>
                    <a
                        href="#about"
                        className="px-3 py-1 text-[#020060] hover:text-blue-500 font-semibold transition-all"
                    >
                        About
                    </a>
                    <a
                        href="#benefit"
                        className="px-3 py-1 text-[#020060] hover:text-blue-500 font-semibold transition-all"
                    >
                        Benefit Umbul
                    </a>
                    <a
                        href="#explore"
                        className="px-3 py-1 text-[#020060] hover:text-blue-500 font-semibold transition-all"
                    >
                        Explore Umbul
                    </a>
                </nav>

                <button
                    onClick={handleNav}
                    className="md:hidden px-4 text-gray-700 focus:outline-none order-3"
                >
                    {nav ? <AiOutlineClose /> : <AiOutlineMenu />}
                </button>
            </div>

            {/* Navbar For Mobile */}
            {nav && (
                <div className="md:hidden w-full bg-white/50 backdrop-blur-xl text-[#020060]">
                    <div className="flex flex-col items-center gap-5 py-4">
                        <a
                            href="/"
                            className="px-3 py-1 text-[#020060] hover:text-blue-500 font-semibold transition-all"
                        >
                            Home
                        </a>
                        <a
                            href="#about"
                            className="px-3 py-1 text-[#020060] hover:text-blue-500 font-semibold transition-all"
                        >
                            About
                        </a>
                        <a
                            href="#benefit"
                            className="px-3 py-1 text-[#020060] hover:text-blue-500 font-semibold transition-all"
                        >
                            Benefit Umbul
                        </a>
                        <a
                            href="#explore"
                            className="px-3 py-1 text-[#020060] hover:text-blue-500 font-semibold transition-all"
                        >
                            Explore Umbul
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
