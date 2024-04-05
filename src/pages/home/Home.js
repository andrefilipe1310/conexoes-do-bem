import NavBar from "../../components/navbar/NavBar";
import Search from "../../components/search/Search";
import CardSearch from "../../components/card/CardSearch";
import CardStory from "../../components/cardStory/CardStory";
import Footer from "../../components/footer/Footer";
import "./Home.css"


export const renderCards = ({cards})=>{
    
}

const Home = ()=>{
    return(
        <div className="home">
            <NavBar/>
            <Search/>
            <div className="mt-5 main-content">
                <div className="div-cards container">
                    <div className="row megazord">
                        <div className="col-4"><CardSearch/></div>
                        <div className="col-4"><CardSearch/></div>
                        <div className="col-4"><CardSearch/></div>
                        <div className="col-4"><CardSearch/></div>
                        <div className="col-4"><CardSearch/></div>
                        <div className="col-4"><CardSearch/></div>                 
                    </div>
                </div>
            </div>
            <div className="bg-light inspiring-stories p-3">
                    <h3 className="stories fs-4">HISTORIAS</h3>
                    <p className="inspiration fs-1">INSPIRADORAS</p>
                    <p className="description-stories">Acompanhe de perto as ongs através das entrevistas e vídeos.</p>

                    <div className="row container text-center">
                        <div className="col-3 mx-auto"><CardStory/></div>
                        <div className="col-3 mx-auto"><CardStory/></div>
                        <div className="col-3 mx-auto"><CardStory/></div>
                        <div className="col-3 mx-auto"><CardStory/></div>
                        
                    </div>
            </div>

        <Footer/>
        </div>
    )
}

export default Home;