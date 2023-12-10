

import Contact from "components/Contact/Contact"
import NavBar from "components/navegations/NavBar"
import Footer from "components/navegations/footer"
import Layout from "hocs/layout/layout"


function Contacto(){
    return(
        <Layout>
            <NavBar/>
            <Contact/>
            <Footer/>
        </Layout>
    )
}

export default Contacto