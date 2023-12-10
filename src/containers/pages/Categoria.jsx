

import CardsCategories from "components/Categories/CardsCategories"
import NavBar from "components/navegations/NavBar"
import Footer from "components/navegations/footer"
import Layout from "hocs/layout/layout"


function Categorias(){
    return(
        <Layout>
            <NavBar/>
            <CardsCategories/>
            <Footer/>
        </Layout>
    )
}

export default Categorias