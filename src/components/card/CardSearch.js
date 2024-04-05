import "./CardSearch.css"
import imgBackground from "../../assets/images/img-card.png"

const CardSearch = ({ title, imageUrl, likes }) => {
    return (
        <div className="card-search">
            <div className="card">
                <img src={imageUrl || imgBackground} alt="Card background" />
                <div className="container-fluid">
                    <p className="title fs-5 ">{title || 'Todos ajudando Klenio'}</p>
                    <p className="likes">+{likes || 40} curtidas</p>
                </div>
                <div className="container-fluid mb-3 d-flex justify-content-end">
                    <button className="btn btn-learn-more">Saiba mais</button>
                </div>
            </div>
        </div>
    );
};

export default CardSearch;
