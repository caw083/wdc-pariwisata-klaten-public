import next from "../assets/next.png";
import back from "../assets/back.png";
import data from "./data/data.json";
import { useState } from "react";
import { IoIosPin } from "react-icons/io";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";


const Favorite = () => {
  const umbuls = data;
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 3;

  const handleNextPage = () => {
    if (itemsPerPage <= data.length) {
      setStartIndex(startIndex + itemsPerPage);
    } else {
      setStartIndex(0);
    }
  };

  const handlePrevPage = () => {
    setStartIndex(Math.max(0, startIndex - itemsPerPage));
  };
  
  return (
    <section className="w-full">
      <h1 className="text-center font-bold text-4xl md:text-5xl">
        Umbul Favorit
      </h1>

      <div className="max-w-6xl mx-auto rounded-2xl px-5 lg:px-0 flex flex-wrap justify-between py-10 ">
        <button
          onClick={handlePrevPage}
          disabled={startIndex === 0}
          style={{ opacity: startIndex > 0 ? 1 : 0 }}
          className="absolute left-0 z-10 mt-[120px] md:mt-[150px] md:ml-10"
        >
          {" "}
          <img src={back} width={"50px"} alt="Previous" />
        </button>
        {/* Umbul Favorit */}
        <div className="grid grid-cols-3 md:grid-cols-3 md:gap-10 gap-4 ">
          {umbuls
            .slice(startIndex, startIndex + itemsPerPage)
            .map((umbul, index) => (
              <div key={index} className="relative rounded-lg overflow-hidden">
                <img
                  src={`${umbul.photo_file}`}
                  alt={umbul.nama}
                  className="max-w-full h-[280px] md:h-[400px] object-cover rounded-xl "
                />
                <div className="absolute md:w-[70%] bottom-2 left-0 text-white px-3 py-1 bg-black/40 backdrop-blur-sm rounded-e-2xl">
                  <h2 className="font-semibold md:text-lg lg:text-lg text-[10px]">
                    {umbul.nama}
                  </h2>
                  <h3 className="inline-flex items-center text-sm">
                    <IoIosPin />
                    <span className="ml-1 text-[10px]">{umbul.lokasi}</span>
                  </h3>
                </div>
              </div>
            ))}
        </div>
        {/* Button Nextpage */}
        <button
          onClick={handleNextPage}
          disabled={startIndex + itemsPerPage >= umbuls.length}
          className="absolute right-0 mt-[120px] md:mr-10 md:mt-[150px]"
        >
          <img src={next} width={"30px"}></img>
        </button>
      </div>
    </section>
    );
};

export default Favorite;
