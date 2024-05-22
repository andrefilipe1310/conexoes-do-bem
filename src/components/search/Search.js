import "./Search.css"

function Search() {
    return (
        <div className="search p-4">
            <div className="conteiner">
                <div className="row justify-content-center">
                    <div className="col-6">
                        <form className="form-inline" style={{ display: 'flex', alignItems: 'center' }}>
                            <input className="form-control mr-sm-2" type="search" placeholder="O que está procurando? " aria-label="Search" />
                            <button className="btn-search ms-1 my-2 my-sm-0" type="submit">
                                <i className="fas fa-search"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search;