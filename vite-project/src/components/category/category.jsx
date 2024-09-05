import { useNavigate } from "react-router-dom";

const category = [
    { name: 'Christmas' },
    { name: 'Halloween' },
    { name: 'Birds & Animals' },
    { name: 'Plants & Flowers' },
    { name: 'Fairy & Gnome' },
    { name: 'Decorative' },
];

const Category = () => {
    const navigate = useNavigate();

    return (
        <div>
            {/* Category Section */}
            <div className="playfair bg-[#dd3333] flex flex-col py-4">
                {/* Scrollable Container */}
                <div className="flex overflow-x-auto hide-scroll-bar justify-center px-4 space-x-14">
                    {category.map((item, index) => (
                        <div key={index} className="flex items-center space-x-8">
                            {/* Category Box */}
                            <div
                                onClick={() => navigate(`/category/${item.name}`)}
                                className="flex justify-center items-center cursor-pointer"
                            >
                                <h1 className="text-lg lg:text-2xl font-medium text-white text-center transition-all hover:text-gray-300">
                                    {item.name}
                                </h1>
                            </div>

                            {/* Divider between items */}
                            {index !== category.length - 1 && (
                                <div className="border-l-2 border-white h-10"></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Hide Scrollbar Styling */}
            <style dangerouslySetInnerHTML={{ __html: `
                .hide-scroll-bar { 
                    -ms-overflow-style: none;  /* Internet Explorer 10+ */
                    scrollbar-width: none;     /* Firefox */
                }
                .hide-scroll-bar::-webkit-scrollbar { 
                    display: none;             /* Chrome, Safari, Opera */
                }
            ` }} />
        </div>
    );
};

export default Category;
