import data from "./data/data.json"
import { useState } from 'react';

const searchUmbul = () => {
    const umbuls = data;
    const uniqueLocations = [...new Set(umbuls.map(umbul => umbul.lokasi))];
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedLocation, setSelectedLocation] = useState('');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedUmbul, setSelectedUmbul] = useState('');

    const handleChange = (event) => {
        setSelectedLocation(event.target.value);
        setSelectedUmbul(''); // Reset selected umbul when location changes
    };

    const handle_Umbul_Name = (event) => {
        setSelectedUmbul(event.target.value);
    };
    return (
        <section className="w-full py-24 md:px-0 p-3" id="explore">
            <div className="max-w-7xl mx-auto px lg:px-0 bg-[#DFF0F5] rounded-lg p-5">
                <div className="grid grid-cols-1 md:grid-cols-1 gap-10 mb-10">
                    <div className="w-full">
                            <h1 className="text-center font-bold text-4xl md:text-5xl mt-5 my-10 ">Mau Ngumbul dimana?</h1>
                            <div className="max-w-6xl mx-auto px-5 lg:px-0 bg-[#FFFFFF] rounded-lg m-200">
                                <div className="max-w-5xl mx-auto px-5 lg:px-0 bg-[#FFFFFF] rounded-lg p-10 ">
                                <p className="text-lg my-5  font-light">
                                    <p>Asal Umbul</p>
                                    <select value={selectedLocation} onChange={handleChange} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-white">
                                        <option value="">Select Location</option>
                                        {uniqueLocations.map((location, index) => (
                                            <option key={index} value={location}>{location}</option>
                                        ))}
                                    </select>
                                </p>

                                {selectedLocation && (
                                    <div >
                                    <p>Umbul yang Tersedia</p>
                                    <select value={selectedUmbul} onChange={handle_Umbul_Name} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-white">
                                        <option value="">Select Umbul</option>
                                        {umbuls.filter(umbul => umbul.lokasi === selectedLocation).map((umbul, index) => (
                                            <option key={index} value={umbul.nama}>{umbul.nama}</option>
                                        ))}
                                    </select>
                                    </div>
                                )}

                                {selectedUmbul && umbuls.filter(umbul => umbul.nama === selectedUmbul).map((umbul, index) => (
                                    <div key={index}>
                                        <p className="mt-5">{umbul.nama} Tersedia! Mau coba kunjungi?</p>
                                        <br></br>
                                        <button>
                                            <a href={umbul.link_maps} target="_blank" className="py-3 px-10 border border-zinc-800 rounded-lg hover:bg-zinc-800 hover:text-white duration-200">Kunjungi</a>
                                        </button>
                                    </div>
                                ))}
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default searchUmbul;