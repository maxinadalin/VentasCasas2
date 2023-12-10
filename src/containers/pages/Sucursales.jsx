
import Ubicatios from "components/Ubicatios/Ubicatios"
import NavBar from "components/navegations/NavBar"
import Footer from "components/navegations/footer"
import Layout from "hocs/layout/layout"


function Sucursales(){
    return(
        <Layout>
            <NavBar/>
            <Ubicatios/>
            <Footer/>
        </Layout>
    )
}

export default Sucursales