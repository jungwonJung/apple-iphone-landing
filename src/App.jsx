import DisplaySection from "./components/DisplaySection";
import Jumbotron from "./components/Jumbotron";
import SoundsSection from "./components/SoundsSection";
import WebgiViewer from "./components/WebgiViewer";
import Nav from "./components/nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Jumbotron />
      <SoundsSection />
      <DisplaySection />
      <WebgiViewer />
    </div>
  );
}

export default App;
