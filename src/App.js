import "./Button.css";
import { Navbar } from "./Navbar";
import { SideNav } from "./SideNav";
import { MainStuff } from "./MainStuff";
import { AdSpace } from "./AdSpace";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>

      <main>
        <div className="container">
          <div className="row pt-3">
            <SideNav />
            <MainStuff />
            <AdSpace />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
