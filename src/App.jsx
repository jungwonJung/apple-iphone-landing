import { useRef } from "react";
import DisplaySection from "./components/DisplaySection";
import Jumbotron from "./components/Jumbotron";
import SoundsSection from "./components/SoundsSection";
import WebgiViewer from "./components/WebgiViewer";
import Nav from "./components/nav";

function App() {
  const webgiViewerRef = useRef();
  const contentRef = useRef();

  const handlePreview = () => {
    webgiViewerRef.current.triggerPreview();
  };

  return (
    <div className="App">
      <div ref={contentRef} id="content">
        <Nav />
        <Jumbotron />
        <SoundsSection />
        <DisplaySection triggerPreview={handlePreview} />
      </div>
      <WebgiViewer contentRef={contentRef} ref={webgiViewerRef} />
    </div>
  );
}

export default App;
