import './App.css';
import Navbar from "./components/Navbar/Navbar";
import PrimaryContainer from "./components/Container/PrimaryContainer";

const App = () => {
  return (
    <section className="home-page">
      <Navbar/>
      <PrimaryContainer/>
    </section>
  );
}

export default App;
