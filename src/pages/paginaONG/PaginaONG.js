import React from "react";
import "./PaginaONG.css";
import NavBar from "../../components/navbar/NavBar";
import imgBackground from "../../assets/images/img-card.png"
import Footer from "../../components/footer/Footer";
const PaginaONG = ({ title, imageUrl }) => {

    return (
        <div className="pagina-ONG">
            <NavBar />
            <div className="nomeDaOng">
                <h1 className="nome">
                    {title || "Caminhas para cães"}
                </h1>
            </div>

            <div className="megazord row">
           
                <div className="esquerda col-5">
                    <img className="imagemONG" src={imageUrl || imgBackground} alt="Card background" />
                </div>
                <div className="direita col-6">
                    <h2>
                        Quem Somos?
                    </h2>
                    <div className="areaTextoQuemSomos">
                        
                        <p>
                        In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. Wikipedia
                        </p>
                    </div>

                    <h2>
                    Objetivos e Metas

                    </h2>
                    <div className="areaTextoQuemSomos">
                        
                        <p>
                        In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. Wikipedia
                        </p>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    );
};

export default PaginaONG;