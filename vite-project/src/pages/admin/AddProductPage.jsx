import { Timestamp, addDoc, collection } from "firebase/firestore";
import { useContext, useState } from "react";
import myContext from "../../context/myContext";
import toast from "react-hot-toast";
import { fireDB } from "../../firebase/FirebaseConfig";
import { useNavigate } from "react-router";
import Loader from "../../components/loader/Loader";
import Layout from "../../components/layout/Layout";

const categoryList = [
    {
        name: 'Christmas'
    },
    {
        name: 'Halloween'
    },
    {
        name: 'Birds & Animals'
    },
    {
        name: 'Plants & Flowers'
    },
    {
        name: 'Fairy & Gnome'
    },
    {
        name: 'Decorative'
    },
]

const AddProductPage = () => {
    const context = useContext(myContext);
    const { loading, setLoading } = context;

    // navigate 
    const navigate = useNavigate();

    // product state
    const [product, setProduct] = useState({
        title: "",
        price: "",
        productImageUrl: "",
        category: "",
        description: "",
        quantity : 1,
        time: Timestamp.now(),
        date: new Date().toLocaleString(
            "en-US",
            {
                month: "short",
                day: "2-digit",
                year: "numeric",
            }
        )
    });


    // Add Product Function
    const addProductFunction = async () => {
        if (product.title == "" || product.price == "" || product.productImageUrl == "" || product.category == "" || product.description == "") {
            return toast.error("All fields are required")
        }

        setLoading(true);
        try {
            const productRef = collection(fireDB, 'products');
            await addDoc(productRef, product)
            toast.success("Added product successfully!");
            navigate('/admin-dashboard')
            setLoading(false)
        } catch (error) {
            console.log(error);
            setLoading(false)
            toast.error("Failed to add product!");
        }

    }
    return (
        <Layout>
        <div className="playfair">
            <div 
                className='relative flex justify-center items-center h-screen'
                style={{ backgroundImage: "url('src/components/heroSection/hero.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
                {/* Overlay for low opacity effect */}
                <div className="absolute inset-0 bg-black opacity-60"></div>
    
                {loading && <Loader />}
    
                {/* Login Form */}
                <div className="login_Form bg-[#f2f0ef] relative z-10 px-8 py-6 border border-[#dd3333] rounded-xl shadow-md bg-white">
                    
                    {/* Top Heading */}
                    <div className="mb-5">
                        <h2 className='text-center text-2xl font-bold text-[#dd3333] '>
                            ADD PRODUCT
                        </h2>
                    </div>
    
                    {/* Input One */}
                    <div className="mb-3">
                        <input
                            type="text"
                            name="title"
                            value={product.title}
                            onChange={(e) => {
                                setProduct({
                                    ...product,
                                    title: e.target.value
                                })
                            }}
                            placeholder='Product Title'
                            className=' border text-gray-800 border-[#dd3333] px-2 py-2 w-96 rounded-md shadow-md outline-none placeholder-gray-600'
                        />
                    </div>
    
                    {/* Input Two */}
                    <div className="mb-3">
                        <input
                            type="number"
                            name="price"
                            value={product.price}
                            onChange={(e) => {
                                setProduct({
                                    ...product,
                                    price: e.target.value
                                })
                            }}
                            placeholder='Product Price'
                            className=' border text-gray-800 border-[#dd3333] px-2 py-2 w-96 rounded-md outline-none shadow-md placeholder-gray-600'
                        />
                    </div>
    
                    {/* Input Three */}
                    <div className="mb-3">
                        <input
                            type="text"
                            name="productImageUrl"
                            value={product.productImageUrl}
                            onChange={(e) => {
                                setProduct({
                                    ...product,
                                    productImageUrl: e.target.value
                                })
                            }}
                            placeholder='Product Image Url'
                            className=' border text-gray-800 border-[#dd3333] px-2 py-2 w-96 rounded-md outline-none shadow-md placeholder-gray-600'
                        />
                    </div>
    
                    {/* Input Four */}
                    <div className="mb-3">
                        <select
                            value={product.category}
                            onChange={(e) => {
                                setProduct({
                                    ...product,
                                    category: e.target.value
                                })
                            }}
                            className="w-full px-1 py-2 text-gray-800  border border-[#dd3333] rounded-md outline-none  ">
                            <option disabled>Select Product Category</option>
                            {categoryList.map((value, index) => {
                                const { name } = value
                                return (
                                    <option className=" first-letter:uppercase" key={index} value={name}>{name}</option>
                                )
                            })}
                        </select>
                    </div>
    
                    {/* Input Five */}
                    <div className="mb-3">
                        <textarea
                            value={product.description}
                            onChange={(e) => {
                                setProduct({
                                    ...product,
                                    description: e.target.value
                                })
                            }} 
                            name="description" 
                            placeholder="Product Description" 
                            rows="5" 
                            className="w-full px-2 py-1 text-gray-800 border border-[#dd3333] shadow-md rounded-md outline-none placeholder-gray-600 "
                        ></textarea>
                    </div>
    
                    {/* Add Product Button */}
                    <div className="mb-3">
                        <button
                            onClick={addProductFunction}
                            type='button'
                            className='bg-[#dd3333] hover:bg-[#f44444] w-full shadow-md text-white text-center py-2 font-bold rounded-md '
                        >
                            ADD PRODUCT
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
    
    );
}

export default AddProductPage;