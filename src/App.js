import React from "react";
import {Analytics} from "@vercel/analytics/react";
import "./App.scss";
import Main from "./containers/Main";

function App() {
  return (
    <div>
      <Analytics />
      <Main />
    </div>
  );
}

export default App;
