// category 
import { useNavigate } from "react-router-dom";
const category = [
    {
        image: 'https://cdn-icons-png.flaticon.com/256/4359/4359963.png',
        name: 'Christmas'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/11833/11833323.png',
        name: 'Halloween'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/8174/8174424.png',
        name: 'Birds & Animals'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/7648/7648246.png',
        name: 'Plants & Flowers'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/12142/12142416.png',
        name: 'Fairy & Gnome'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/10686/10686553.png',
        name: 'Decorative'
    },
]

const Category = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className="playfair bg-[#dd3333] flex flex-col">
                {/* main 1 */}
                <div className="flex overflow-x-scroll lg:justify-center  hide-scroll-bar">
                    {/* main 2  */}
                    <div className="flex ">
                        {/* category  */}
                        {category.map((item, index) => {
                            return (
                                <div key={index} className={`px-3 lg:px-12 ${index !== category.length - 1 ? 'border-r border-white ' : ''}`}>
                                    <div 
                                    onClick={()=> navigate(`/category/${item.name}`)}
                                    className="w-16  h-16 lg:w-24 lg:h-24 max-w-xs  bg-[#dd3333] transition-all hover:bg-[#f44444] cursor-pointer flex justify-center items-center " >
                                         {/* Name Text  */}
                                    <h1 className=' text-sm lg:text-lg text-center font-medium title-font first-letter:uppercase text-white mr-3 px-15 '>{item.name}</h1>
                                    </div>
                                   
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            {/* style  */}
            <style dangerouslySetInnerHTML={{ __html: ".hide-scroll-bar {  -ms-overflow-style: none;  scrollbar-width: none;}.hide-scroll-bar::-webkit-scrollbar {  display: none;}" }} />
        </div>
    );
}

export default Category;