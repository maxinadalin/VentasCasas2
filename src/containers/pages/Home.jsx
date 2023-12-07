import NavBar from "components/navegations/NavBar"
import Footer from "components/navegations/footer"
import Layout from "hocs/layout/layout"

function Home(){
    return(
        <Layout>
            <NavBar/>
            Home
            <Footer/>
        </Layout>
    )
}

export default Home