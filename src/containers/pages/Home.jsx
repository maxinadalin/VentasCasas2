
import CardHome from "components/Home/CardHome"
import Clients from "components/Home/Clients"
import Header from "components/Home/header"
import NavBar from "components/navegations/NavBar"
import Footer from "components/navegations/footer"
import Layout from "hocs/layout/layout"


function Home(){
    return(
        <Layout>
            <NavBar/>
            <Header/>
            <CardHome/>
            <Clients/>
            <Footer/>
        </Layout>
    )
}

export default Home