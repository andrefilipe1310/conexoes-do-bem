import logo from "../../assets/images/logo.png";
import "./NavBar.css";

const Navbar2 = (props) => {
  const renderizarItens = (itens) => {
    return itens.map((item) => {
      return <p>{item}</p>;
    });
  };

  const rederizarButtons = (buttons) => {
    return buttons.map((button) => {
      return <button>{button}</button>;
    });
  };

  return (
    <div className="nav-bar navbar-2">
      <a className="navLogo" href="#">
        <img src={logo} className="logo" />
      </a>
      <>{renderizarItens(props.itens)}</>
      <>{rederizarButtons(props.buttons)}</>
      
    </div>
  );
};

export default Navbar2;
