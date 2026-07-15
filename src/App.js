import "./App.css";
import Portfolio from "./component/Portfolio";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  return (
    <div className="App">
      <Portfolio />
      <SpeedInsights />
    </div>
  );
}

export default App;
