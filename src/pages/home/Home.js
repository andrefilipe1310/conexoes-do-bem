import NavBar from "../../components/navbar/NavBar";
import Search from "../../components/search/Search";
import card from "../../assets/images/card-exemple.png"
import CardSearch from "../../components/card/CardSearch";
import "./Home.css"
function Home(){
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

                        <div className="col-4"><img src={card}/></div>
                        <div className="col-4"><img src={card}/></div>
                        <div className="col-4"><img src={card}/></div>
                    </div>
                </div>
            </div>
            <div className="bg-light inspiring-stories p-3">
                    <h3 className="stories fs-4">Hístorias</h3>
                    <p className="inspiration fs-1">Inspiradoras</p>
                    <p className="description-stories">Acompanhe de perto as ongs através das entrevistas e vídeos.</p>
            </div>

        </div>
    )
}

export default Home;