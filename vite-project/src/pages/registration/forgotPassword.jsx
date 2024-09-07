
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
      <div className="playfair">
        <h1>Forgot Password</h1>
        <form onSubmit={(e)=> handleSubmit(e)}>
            <input className="border" name="email" /> <br/>
            <button>Reset Password</button>
        </form>
      </div>
    </Layout>
  );
};

export default Forgot;
