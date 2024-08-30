import Category from "../../components/category/category";
import HeroSection from "../../components/heroSection/heroSection";
import HomeProductCard from "../../components/homeProductCard/homeProductCard";
import Layout from "../../components/layout/Layout";
import Loader from "../../components/loader/Loader";


const Home = () =>{
    return(
        <Layout>
            <HeroSection/>
            <Category/>
            <HomeProductCard/>
        </Layout>
    );
}

export default Home;