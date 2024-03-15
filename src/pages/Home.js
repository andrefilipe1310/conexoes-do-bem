import NavBar from "../components/navbar/NavBar";
import Search from "../components/search/Search";
import card from "../assets/images/card-exemple.png"
function Home(){
    return(
        <div className="home">
            <NavBar/>
            <Search/>
            <div className="mt-5 main-content">
                <div className="div-cards container">
                    <div className="row megazord">
                        <div className="col-4"><img src={card}/></div>
                        <div className="col-4"><img src={card}/></div>
                        <div className="col-4"><img src={card}/></div>

                        <div className="col-4"><img src={card}/></div>
                        <div className="col-4"><img src={card}/></div>
                        <div className="col-4"><img src={card}/></div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home;