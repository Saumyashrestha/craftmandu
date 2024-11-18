import { Timestamp, addDoc, collection } from "firebase/firestore";
import { useContext, useState } from "react";
import myContext from "../../context/myContext";
import toast from "react-hot-toast";
import { fireDB } from "../../firebase/FirebaseConfig";
import { useNavigate } from "react-router";
import Loader from "../../components/loader/Loader";
import Layout from "../../components/layout/Layout";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

// Category list
const categoryList = [
  { name: "Christmas" },
  { name: "Halloween" },
  { name: "Birds & Animals" },
  { name: "Plants & Flowers" },
  { name: "Fairy & Gnome" },
  { name: "Decorative" },
];

const AddProductPage = () => {
  const context = useContext(myContext);
  const { loading, setLoading } = context;

  // navigate
  const navigate = useNavigate();

  // product state
  const [product, setProduct] = useState({
    title: "",
    price: "",
    productImageFile: null, // Image file will be stored here
    category: "",
    productCode: "",
    size: "",
    description: "",
    quantity: 1,
    time: Timestamp.now(),
    date: new Date().toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
  });

  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  // Handle file selection
  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setProduct({
        ...product,
        productImageFile: e.target.files[0],
      });
    }
  };

  // Add Product Function
  const addProductFunction = async () => {
    console.log("Add Product Button Clicked"); // For debugging

    // Validate fields
    if (
      product.title === "" ||
      product.price === "" ||
      product.productImageFile == null ||
      product.category === "" ||
      product.description === "" ||
      product.productCode === "" ||
      product.size === ""
    ) {
      return toast.error("All fields are required");
    }

    setLoading(true);
    setIsButtonDisabled(true); 
    try {
      // Upload the image to Firebase Storage
      const storage = getStorage();
      const storageRef = ref(
        storage,
        `products/${product.productImageFile.name}`
      );
      const snapshot = await uploadBytes(storageRef, product.productImageFile);
      const imageUrl = await getDownloadURL(snapshot.ref);

      // Create a new product object with the image URL
      const newProduct = {
        ...product,
        productImageUrl: imageUrl, // Image URL after upload
        productImageFile: null, // Clear file from state
      };

      // Firestore reference
      const productRef = collection(fireDB, "products");
      await addDoc(productRef, newProduct);

      toast.success("Added product successfully!");
      navigate("/admin-dashboard");
      setLoading(false);
    } catch (error) {
      console.error("Error adding product:", error);
      setLoading(false);
      setIsButtonDisabled(false);
      toast.error("Failed to add product!");
    }
  };

  return (
    <Layout>
      <div className="playfair">
        <div
          className="relative flex justify-center items-center h-screen"
          style={{
            backgroundImage: "url('src/components/heroSection/hero.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay for low opacity effect */}
          <div className="absolute inset-0 bg-[#f9f9f9]"></div>

          {loading && <Loader />}

          {/* Product Form */}
          <div className=" bg-[#f2f0ef] relative z-10 px-8 py-6 border border-[#dd3333] rounded-xl shadow-md bg-white">
            {/* Heading */}
            <div className="mb-5">
              <h2 className="text-center text-2xl font-bold text-[#dd3333] ">
                ADD PRODUCT
              </h2>
            </div>

            {/* Product Title */}
            <div className="mb-3">
              <input
                type="text"
                name="title"
                value={product.title}
                onChange={(e) => {
                  setProduct({
                    ...product,
                    title: e.target.value,
                  });
                }}
                placeholder="Product Title"
                className=" border text-gray-800 border-[#dd3333] px-2 py-2 w-96 rounded-md shadow-md outline-none placeholder-gray-600"
              />
            </div>

            {/* Product Price */}
            <div className="mb-3">
              <input
                type="number"
                name="price"
                value={product.price}
                onChange={(e) => {
                  setProduct({
                    ...product,
                    price: e.target.value,
                  });
                }}
                placeholder="Product Price"
                className=" border text-gray-800 border-[#dd3333] px-2 py-2 w-96 rounded-md outline-none shadow-md placeholder-gray-600"
              />
            </div>

            {/* Image File Input */}
            <div className="mb-3">
              <input
                type="file"
                name="productImageFile"
                onChange={handleImageChange}
                className=" border text-gray-800 border-[#dd3333] px-2 py-2 w-96 rounded-md outline-none shadow-md"
              />
            </div>

            {/* Product Category */}
            <div className="mb-3">
              <select
                value={product.category}
                onChange={(e) => {
                  setProduct({
                    ...product,
                    category: e.target.value,
                  });
                }}
                className="w-full px-1 py-2 text-gray-800  border border-[#dd3333] rounded-md outline-none  "
              >
                <option >Select Product Category</option>
                {categoryList.map((value, index) => {
                  const { name } = value;
                  return (
                    <option
                      className=" first-letter:uppercase"
                      key={index}
                      value={name}
                    >
                      {name}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="mb-3">
              <input
                type="text"
                name="productCode"
                value={product.productCode}
                onChange={(e) => {
                  setProduct({
                    ...product,
                    productCode: e.target.value,
                  });
                }}
                placeholder="Product Code"
                className=" border text-gray-800 border-[#dd3333] px-2 py-2 w-96 rounded-md shadow-md outline-none placeholder-gray-600"
              />
            </div>

            {/* Size */}
<div className="mb-3">
  <input
    type="text"
    name="size"
    value={product.size}
    onChange={(e) => {
      setProduct({
        ...product,
        size: e.target.value,
      });
    }}
    placeholder="Product Size"
    className="border text-gray-800 border-[#dd3333] px-2 py-2 w-96 rounded-md shadow-md outline-none placeholder-gray-600"
  />
</div>

            {/* Product Description */}
            <div className="mb-3">
              <textarea
                value={product.description}
                onChange={(e) => {
                  setProduct({
                    ...product,
                    description: e.target.value,
                  });
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
                type="button"
                className="bg-[#dd3333] hover:bg-[#f44444] w-full shadow-md text-white text-center py-2 font-bold rounded-md "
                disabled={isButtonDisabled}
              >
                ADD PRODUCT
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AddProductPage;
