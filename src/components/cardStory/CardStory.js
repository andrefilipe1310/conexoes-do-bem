import PropTypes from 'prop-types'
import "./CardStory.css";




const CardStory = ({ perfilName, title, imageUrl }) => {
    CardStory.propTypes = {
        perfilName: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
    };
    return (
        <div className="card-story">
            <div className="row">
                <div className="col-12">
                    <p className="perfil-name-story text-light fs-8">{perfilName || 'Instituto Vakinha'}</p>
                </div>
                <div className="col-12">
                    <p className="title-story text-light fs-5">{title || 'Veja como ajudamos vítimas de enchentes'}</p>
                </div>
            </div>
        </div>
    );
};


export default CardStory;
