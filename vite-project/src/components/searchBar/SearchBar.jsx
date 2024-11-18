import { useContext, useState } from "react";
import myContext from "../../context/myContext";
import { useNavigate } from "react-router";


const SearchBar = () => {
    const context = useContext(myContext);
    const { getAllProduct } = context
    // Search State 
    const [search, setSearch] = useState("");

    // Filter Search Data
    const filterSearchData = getAllProduct.filter((obj) => obj.title.toLowerCase().includes(search)).slice(0, 8)

    const navigate = useNavigate();

    return (
        <div className="">
            {/* search input  */}
            <div className="input flex justify-center">
                <input
                    type="text"
                    placeholder='Search for products...'
                    onChange={(e) => setSearch(e.target.value)}
                    className=' bg-[#F2F0F1] placeholder-gray-500 rounded-full px-6 py-2 lg:py-3 w-[300px] lg:w-[500px] lg:mr-5 outline-none text-black focus:ring-2 focus:ring-dd3333 shadow-md transition-all ease-in-out duration-300 '
                />
            </div>

            {/* search drop-down  */}
            <div className=" flex justify-center">
                {search && <div className="absolute bg-gray-200  px-6 py-2 lg:py-3 w-full w-[299px] lg:w-[500px] lg:mr-5 rounded-lg mt-2 z-50 shadow-lg">
                    {filterSearchData.length > 0 ?
                        <>
                            {filterSearchData.map((item, index) => {
                                return (
                                    <div key={index} className="py-2 px-2 cursor-pointer" 
                                    onClick={() => navigate(`/productinfo/${item.id}`)}>
                                        <div className="flex items-center gap-2">
                                            <img className="w-10" src={item.productImageUrl} alt="" />
                                            {item.title} - {item.productCode}
                                        </div>
                                    </div>
                                )
                            })}
                        </>
                        :
                        <>
                            <div className="flex justify-center">
                                <img className=" w-20" src="https://cdn-icons-png.flaticon.com/128/10437/10437090.png" alt="img" />
                            </div>
                        </>}
                </div>
                }
            </div>
        </div>
    );
}

export default SearchBar;