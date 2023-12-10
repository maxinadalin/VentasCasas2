

import AboutUs from "components/AboutUs/AboutUs"
import NavBar from "components/navegations/NavBar"
import Footer from "components/navegations/footer"
import Layout from "hocs/layout/layout"


function SobreNosotros(){
    return(
        <Layout>
            <NavBar/>
            <AboutUs/>
            <Footer/>
        </Layout>
    )
}

export default SobreNosotros