import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";
import VerbManager from "./verb-management/verb-manager";
import Practice from "./practice/practice";
import defaultLov from "./default-lov.json";
import "./index.css";

// =======================

function App() {
  const [listOfVerbs, setListOfVerbs] = useState(JSON.parse(defaultLov));
  const verbManagerRef = useRef(null);
  const practiceRef = useRef(null);

  return (
    <>
      <Practice
        listOfVerbs={listOfVerbs}
        sectionBelow={verbManagerRef}
        selfRef={practiceRef}
      />
      <VerbManager
        selfRef={verbManagerRef}
        listOfVerbs={listOfVerbs}
        setListOfVerbs={setListOfVerbs}
        sectionAbove={practiceRef}
      />
    </>
  );
}

// =======================

ReactDOM.render(<App />, document.getElementById("root"));
