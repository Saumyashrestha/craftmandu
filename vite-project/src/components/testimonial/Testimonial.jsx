import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Testimonial = () => {
    const controls = useAnimation();
    const { ref, inView } = useInView({
        threshold: 0.2, // Trigger when 20% of the section is visible
    });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [controls, inView]);

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                staggerChildren: 0.3, // Delay between each testimonial
            },
        },
    };

    return (
        <div className="playfair ">
            <section className="text-gray-600 body-font mb-10" ref={ref}>
                {/* main  */}
                <div className="container px-5 py-10 mx-auto">
                    {/* Heading  */}
                    <h1 className=' text-center text-3xl font-bold text-[#dd3333]' >Testimonial</h1>
                    {/* para  */}
                    <h2 className=' text-center text-2xl font-semibold mb-10' >What our <span className=' text-[#dd3333]'>customers</span> are saying</h2>

                    <motion.div 
                      className="flex flex-wrap -m-4"
                      initial="hidden"
                      animate={controls}
                      variants={containerVariants}
                    >
                        {/* Testimonial 1 */}
                        <motion.div className="lg:w-1/3 lg:mb-0 mb-6 p-4" variants={containerVariants}>
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="/maleicon.png" />
                                <p className="leading-relaxed">I absolutely love the felt decorations I bought! The gnomes are beautifully crafted, and their vibrant colors add so much warmth to my space. They have a charming, handmade feel that really stands out compared to mass-produced items. Highly recommend for anyone looking to elevate their decor.</p>
                                <span className="inline-block h-1 w-10 rounded bg-[#dd3333] mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Riwaz Shrestha</h2>
                                <p className="text-gray-500">Customer</p>
                            </div>
                        </motion.div>

                        {/* Testimonial 2 */}
                        <motion.div className="lg:w-1/3 lg:mb-0 mb-6 p-4" variants={containerVariants}>
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="/public/femaleicon.png" />
                                <p className="leading-relaxed">The felt coasters and placemats I purchased are both stylish and practical. They add a unique touch to my dining table, and the quality is outstanding. I love how eco-friendly and beautifully crafted they are! I've already received multiple compliments and will definitely returning for more unique items.</p>
                                <span className="inline-block h-1 w-10 rounded bg-[#dd3333] mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Roshna Shrestha</h2>
                                <p className="text-gray-500">Customer</p>
                            </div>
                        </motion.div>

                        {/* Testimonial 3 */}
                        <motion.div className="lg:w-1/3 lg:mb-0 p-4" variants={containerVariants}>
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="/maleicon.png" />
                                <p className="leading-relaxed">I was amazed by the craftsmanship of the felt rugs I bought. They are soft, durable, and the colors are just beautiful. These products have made my space feel warm and cozy! It's clear that a lot of care goes into making these products, and I appreciate the blend of artistry and practicality.</p>
                                <span className="inline-block h-1 w-10 rounded bg-[#dd3333] mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Abhyudit Adhikari</h2>
                                <p className="text-gray-500">Customer</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}

export default Testimonial;
