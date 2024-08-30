const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center h-screen bg-[#F2F0F1]" >
      <div className="md:w-2/3 p-8 md:p-16">
        <h1 className="playfair text-4xl md:text-6xl font-bold text-[#dd3333] mb-4">FIND FELT ITEMS THAT MATCH YOUR STYLE</h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8">Browse through our diverse range of meticulously crafted items, designed to bring out the light in your home.</p>
        <button className="bg-[#dd3333] text-white px-4 py-2 rounded-full hover:bg-[#d11111]">Shop Now</button>
        <div className="flex space-x-4 mt-8">
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-black">100+</h3>
            <p className="text-black">Products Available</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-black">2,000+</h3>
            <p className="text-black">Items Sold</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-black">500+</h3>
            <p className="text-black">Happy Customers</p>
          </div>
        </div>
      </div>
      <img className="md:w-2/3 h-full object-cover sd:order-1" src="src\components\heroSection\hero.png"  alt="image_hero_section" />
    </div>
  );
};

export default HeroSection;