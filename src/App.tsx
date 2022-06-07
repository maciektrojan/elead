import React from "react";
import { Bar } from "./components/Bar";
import { Nav } from "./components/Nav";
import { StartSection } from "./sections/StartSection";

function App(): React.ReactElement {
  return (
    <div style={{ minWidth: "425px", overflowX: "hidden" }}>
      <StartSection />
      <Bar>
        <Nav variant="secondary" buttonVariant="contained" logoColor="#05c" />
      </Bar>
      <div style={{ height: "calc(100vh + 1px)" }}></div>
    </div>
  );
}

export default App;
