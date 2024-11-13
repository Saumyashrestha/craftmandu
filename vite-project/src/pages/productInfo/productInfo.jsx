import { useContext, useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import myContext from "../../context/myContext";
import { useParams } from "react-router";
import { fireDB } from "../../firebase/FirebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import Loader from "../../components/loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";
import toast from "react-hot-toast";


const ProductInfo = () => {
    const context = useContext(myContext);
    const { loading, setLoading } = context;

    const [product, setProduct] = useState('')

    const { id } = useParams()

    // console.log(product)

    // getProductData
    const getProductData = async () => {
        setLoading(true)
        try {
            const productTemp = await getDoc(doc(fireDB, "products", id))
            setProduct({...productTemp.data(), id: productTemp.id});
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    const cartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const addCart = (item) => {
        // console.log(item)
        dispatch(addToCart(item));
        toast.success("Add to cart")
    }

    const deleteCart = (item) => {
        dispatch(deleteFromCart(item));
        toast.success("Delete cart")
    }


    useEffect(() => {
        getProductData()
    }, [])
    return (
        <Layout>
            <section className="py-5 lg:py-16 font-poppins dark:bg-gray-800">
                {loading ?
                    <>
                        <div className="flex justify-center items-center">
                            <Loader />
                        </div>
                    </>

                    :

                    <>
                        <div className="max-w-6xl px-4 mx-auto">
                            <div className="flex flex-wrap mb-24 -mx-4">
                                <div className="w-full px-4 mb-8 md:w-1/2 md:mb-0">
                                    <div className="">
                                        <div className="">
                                            <img
                                                className=" w-full lg:h-[39em] rounded-lg"
                                                src={product?.productImageUrl}
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className=" playfair w-full px-4 md:w-1/2">
                                    <div className="lg:pl-20">
                                        <div className="mb-6 ">
                                            <h2 className="max-w-xl mb-6 text-xl font-semibold leading-loose tracking-wide text-[#dd3333] md:text-2xl dark:text-gray-300">
                                                {product?.title}
                                            </h2>
                                            <p className="inline-block text-2xl font-semibold text-gray-700 dark:text-gray-400 ">
                                                <span>Rs. {product?.price}</span>
                                            </p>
                                        </div>
                                        <div className="border border-[#dd3333] shadow-md bg-[#f9f9f9] p-4 rounded-lg mb-6">
                                        <div className="mb-6">
                                            <h2 className="mb-2 text-lg font-bold text-[#dd3333] dark:text-gray-400">
                                                Description:
                                            </h2>
                                            <p>{product?.description}</p>
                                        </div>
                                    <p className="font-semibold text-gray-700 dark:text-gray-400 mb-2">
                                        Product Code: {product?.productCode}
                                    </p>
                                    <div className="flex items-center">
                                        <p className="font-semibold text-gray-700 dark:text-gray-400 mr-4">
                                            Size: {product?.size}
                                        </p>
                                    </div>
                                </div>
                                        <div className="mb-6 " />
                                        <div className="flex flex-wrap items-center mb-6">

                                            {cartItems.some((p) => p.id === product.id)
                                                    ?
                                                    <button
                                                        onClick={() => deleteCart(product)}
                                                        className="w-full px-4 py-3 text-center font-semibold text-white bg-[#db4444] border border-[#d83434]  hover:bg-[#f44444] hover:text-gray-200  rounded-xl"
                                                    >
                                                        DELETE FROM CART
                                                    </button>
                                                    :
                                                    <button
                                                        onClick={() => addCart(product)}
                                                        className="w-full px-4 py-3 text-center font-semibold text-white bg-[#db4444] border border-[#d83434]  hover:bg-[#f44444] hover:text-gray-200  rounded-xl"
                                                    >
                                                        ADD TO CART
                                                    </button>
                                                }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>}
            </section>

        </Layout>
    );
}

export default ProductInfo; 