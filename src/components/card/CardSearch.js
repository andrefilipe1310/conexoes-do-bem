import "./CardSearch.css"
import imgBackground from "../../assets/images/img-card.png"
function CardSearch(){
    return(
        <div className="card-search">
            <div className="card">
                <img src={imgBackground}/>
                <div className="container-fluid">
                    <p className="title fs-5 ">Todos juntos pelo Klenio...</p>
                    <p className="likes">+2345 curtidas</p>
                </div>
                <div className="container-fluid mb-3 d-flex justify-content-end">
                    <button className="btn btn-learn-more">Saiba mais</button>
                </div>
                
               
            </div>
            
        </div>
    )
}

export default CardSearch;