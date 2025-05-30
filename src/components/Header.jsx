import image from "../assets/header.jpg";
import { ReactTyped } from "react-typed";

const Header = () => {
  return (
    <header className="w-full relative" id="home">
      <div className="relative">
        <img
          src={image}
          alt="header"
          className="w-full object-cover object-center h-[500px] opacity-50"
        />
        <ReactTyped
          strings={["Ngumbul"]}
          className="absolute inset-0 flex items-center justify-center text-[#140152] font-semibold font-['poppins']
        md:text-6xl text-4xl"
          typeSpeed={100}
          backSpeed={140}
          loop
        />
        <p
          className="absolute inset-0 text-[#0466c8] font-['poppins'] items-center justify-center flex mt-[200px] text-center
        md:text-4xl text-xl font-bold"
        >
          Kolam Renang dengan Sumber <br />
          Mata Air Asli.
        </p>
      </div>
    </header>
  );
};

export default Header;
