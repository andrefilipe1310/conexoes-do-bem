import "./App.css";
import Navbar2 from "./components/navbar/NavBar2";

const App = () => {
  return (
    <div className="App">
      <Navbar2 itens={["inicio", "inicio 2", "inicio 3"]} buttons={['login','cadastre sua ONG']} />
    </div>
  );
};

export default App;
