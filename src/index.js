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
  const [selectedVerbs, setSelectedVerbs] = useState([]);

  return (
    <main
      onClick={() => {
        setSelectedVerbs([]);
      }}
      className="lg:flex lg:justify-center lg:pt-28 min-h-screen"
    >
      <Practice
        listOfVerbs={listOfVerbs}
        sectionBelow={verbManagerRef}
        selfRef={practiceRef}
      />
      <VerbManager
        selectedVerbs={selectedVerbs}
        setSelectedVerbs={setSelectedVerbs}
        selfRef={verbManagerRef}
        listOfVerbs={listOfVerbs}
        setListOfVerbs={setListOfVerbs}
        sectionAbove={practiceRef}
      />
    </main>
  );
}

// =======================

ReactDOM.render(<App />, document.getElementById("root"));
