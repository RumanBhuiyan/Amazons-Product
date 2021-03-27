import "./App.css";
import "./index.css";
import Header from "./components/Header/Header";
import AllCards from "./components/AllCards";

function App() {
  return (
    <div className="home">
      <Header />
      <AllCards />
    </div>
  );
}

export default App;
