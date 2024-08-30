import { useState } from "react";

// Search Data
const searchData = [
  {
      name: 'Fashion',
      image: 'https://i.pinimg.com/564x/3e/05/ce/3e05cefbc7eec79ac175ea8490a67939.jpg'
  },
  {
      name: 'Shirt',
      image: 'https://i.pinimg.com/736x/e4/61/f2/e461f2246b6ad93e2099d98780626396.jpg'
  },
  {
      name: 'Jacket',
      image: 'https://i.pinimg.com/564x/fd/50/68/fd50688767adb47aba7204f034554cbd.jpg'
  },
  {
      name: 'Mobile',
      image: 'https://i.pinimg.com/564x/22/80/8d/22808d88ada424962f2e064f3075b2d1.jpg'
  },
  {
      name: 'Laptop',
      image: 'https://i.pinimg.com/564x/3e/05/ce/3e05cefbc7eec79ac175ea8490a67939.jpg'
  },
  {
      name: 'Home',
      image: 'https://i.pinimg.com/736x/e4/61/f2/e461f2246b6ad93e2099d98780626396.jpg'
  },
  {
      name: 'book',
      image: 'https://i.pinimg.com/564x/fd/50/68/fd50688767adb47aba7204f034554cbd.jpg'
  },
]

const SearchBar = () => {
   // Search State 
   const [search, setSearch] = useState("");

   // Filter Search Data
   const filterSearchData = searchData.filter((obj) => obj.name.toLowerCase().includes(search)).slice(0, 8)
  return (
    <div className="playfair ">
    {/* search input  */}
    <div className="input flex justify-center">
        <input
            type="text"
            placeholder='Search for products...'
            onChange={(e) => setSearch(e.target.value)}
            className=' bg-[#F2F0F1] placeholder-gray-500 rounded-full px-6 py-3 w-full lg:w-[500px] outline-none text-black focus:ring-2 focus:ring-dd3333 shadow-md transition-all ease-in-out duration-300'
        />
    </div>

    {/* search drop-down  */}
    <div className=" flex justify-center">
        {search && <div className="absolute bg-gray-200 w-full lg:w-[500px] rounded-lg mt-2 z-50 shadow-lg">
            {filterSearchData.length > 0 ?
                <>
                    {filterSearchData.map((item, index) => {
                        return (
                            <div key={index} className="py-2 px-4 hover:bg-gray-300 cursor-pointer flex items-center gap-2">
                               
                                    <img className="w-10" src={item.image} alt="" />
                                    {item.name}
                                </div>
                        
                        )
                    })}
                </>
                :

                <>
                    <div className="flex justify-center py-4">
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