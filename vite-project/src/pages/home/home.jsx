import Category from "../../components/category/category";
import HeroSection from "../../components/heroSection/heroSection";
import HomeProductCard from "../../components/homeProductCard/homeProductCard";
import Layout from "../../components/layout/layout";

const Home = () =>{
    return(
        <Layout>
            <HeroSection/>
            <div style={{ marginBottom: '15px' }}></div>
            <Category/>
            <HomeProductCard/>
        </Layout>
    );
}

export default Home;