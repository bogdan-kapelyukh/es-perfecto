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
  const [vawIsDisplayed, setVawIsDisplayed] = useState(false);

  return (
    <>
      <main
        onClick={() => {
          setSelectedVerbs([]);
        }}
        className="md:flex md:justify-center md:pt-28 min-h-screen pb-44"
      >
        <Practice
          listOfVerbs={listOfVerbs}
          sectionBelow={verbManagerRef}
          selfRef={practiceRef}
          vawIsDisplayed={vawIsDisplayed}
        />
        <VerbManager
          vawIsDisplayed={vawIsDisplayed}
          setVawIsDisplayed={setVawIsDisplayed}
          selectedVerbs={selectedVerbs}
          setSelectedVerbs={setSelectedVerbs}
          selfRef={verbManagerRef}
          listOfVerbs={listOfVerbs}
          setListOfVerbs={setListOfVerbs}
          sectionAbove={practiceRef}
        />
      </main>
      <footer className="text-center text-warmGray-700 text-xs py-2 bg-blue-300">
        By Bogdan Kapelyukh
      </footer>
    </>
  );
}

// =======================

ReactDOM.render(<App />, document.getElementById("root"));
