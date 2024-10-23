
import { sendPasswordResetEmail } from "firebase/auth";
import Layout from "../../components/layout/Layout";
import { auth } from "../../firebase/FirebaseConfig";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Forgot = () => {
    const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    const emailVal = e.target.email.value;
    sendPasswordResetEmail(auth, emailVal).then(data => {
        toast.success("Please check your email!")
        navigate('/login')
    })
    .catch(err=>{
        toast.error(err.code)
    })
  }  

  return (
    <Layout>
    <div className="playfair ">
     
  
      {/* New Password Container */}
      <div className="border-2 bg-[#f9f9f9] border-[#dd3333] rounded-md shadow-md p-6 mt-20 max-w-md mx-auto">
        <h2 className="text-xl text-[#dd3333] font-semibold mb-4">Reset Your Password</h2>
        <form onSubmit={(e) => handleConfirm(e)}>
          <div className="mb-4">
            <label className="block mb-2">Enter New Password:</label>
            <input
              type="password"
              className="border border-[#dd3333] rounded-md shadow-md w-full p-2"
              name="newPassword"
              placeholder="Enter New Password"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Re-Enter New Password:</label>
            <input
              type="password"
              className="border border-[#dd3333] rounded-md shadow-md w-full p-2"
              name="confirmPassword"
              placeholder="Re-Enter New Password"
            />
          </div>
          <div className="flex justify-center">
          <button className="bg-[#dd3333] text-white font-semibold py-2 px-4 rounded-md hover:bg-[#ff4444]">
            CONFIRM
          </button>
        </div>
        </form>
      </div>
    </div>
  </Layout>
  
  );
};

export default Forgot;
