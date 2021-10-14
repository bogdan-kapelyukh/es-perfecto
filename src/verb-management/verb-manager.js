import React, { useState } from "react";
import { capitalize } from "../helper-functions";
import VerbAdditionWindow from "./verb-addition-window";

const DEFAULT_VERB = {
  spanishInfinitive: "",
  englishPast: "",
  englishPresent: "",
  past: ["", "", "", "", "", ""],
  present: ["", "", "", "", "", ""],
  isRegular: true,
};

export default function VerbManager(props) {
  const [verbToAdd, setVerbToAdd] = useState(DEFAULT_VERB);
  const [vawIsDisplayed, setVawIsDisplayed] = useState(false);

  const selectedVerbs = props.selectedVerbs;
  const setSelectedVerbs = props.setSelectedVerbs;
  const listOfVerbs = props.listOfVerbs;
  const setListOfVerbs = props.setListOfVerbs;

  function handleEditVerb(e) {
    setVerbToAdd(JSON.parse(e.currentTarget.getAttribute("data-verb-object")));
    setVawIsDisplayed(true);
  }

  function handleVerbSelection(e, clickedVerbObject) {
    e.stopPropagation();
    const updatedSelectedVerbs = selectedVerbs.slice();
    const index = updatedSelectedVerbs.findIndex(
      (selectedVerbObject) =>
        selectedVerbObject.spanishInfinitive ===
        clickedVerbObject.spanishInfinitive
    );
    if (index !== -1) {
      updatedSelectedVerbs.splice(index, 1);
    } else {
      updatedSelectedVerbs.push(clickedVerbObject);
    }
    setSelectedVerbs(updatedSelectedVerbs);
  }

  function handleDeleteVerb() {
    let updatedListOfVerbs = listOfVerbs.slice();
    if (updatedListOfVerbs.length === 1) {
      window.alert("Cannot delete last remaining verb.");
    } else {
      let indexToDelete;
      for (const selectedVerbObject of selectedVerbs) {
        for (let i = 0; i < updatedListOfVerbs.length; i++) {
          if (
            selectedVerbObject.spanishInfinitive ===
            updatedListOfVerbs[i].spanishInfinitive
          ) {
            indexToDelete = i;
            break;
          }
        }
        updatedListOfVerbs.splice(indexToDelete, 1);
      }
      if (updatedListOfVerbs.length !== 0) {
        setListOfVerbs(updatedListOfVerbs);
        setSelectedVerbs([]);
      } else {
        window.alert("Cannot delete last remaining verb.");
      }
    }
  }

  function handleVerbSubmit(newVerb, submitType) {
    let updatedListOfVerbs = listOfVerbs.slice();
    let foundMatchingInfinitive = false;
    for (let i = 0; i < updatedListOfVerbs.length; i++) {
      if (
        newVerb.spanishInfinitive === updatedListOfVerbs[i].spanishInfinitive
      ) {
        foundMatchingInfinitive = true;
        updatedListOfVerbs[i] = newVerb;
        break;
      }
    }
    if (!foundMatchingInfinitive) {
      updatedListOfVerbs.push(newVerb);
    }
    setListOfVerbs(updatedListOfVerbs);
    setVawIsDisplayed(false);
    setVerbToAdd(DEFAULT_VERB);
    setSelectedVerbs([]);
  }

  let deleteButtonContent;
  let deleteButtonClassName =
    "bg-white uppercase tracking-wider text-sm font-semibold rounded shadow cursor-not-allowed";
  let deleteButtonIsDisabled = true;
  if (listOfVerbs.length === selectedVerbs.length) {
    deleteButtonContent = "Cannot delete all verbs";
  } else {
    if (selectedVerbs.length === 0) {
      deleteButtonContent = "Select a verb to delete it";
    } else {
      deleteButtonIsDisabled = false;
      deleteButtonClassName = "button button-off";
      deleteButtonContent = (
        <>
          <span className="text-red-700 font-black">-</span> Delete Verb
        </>
      );
    }
  }

  return (
    <>
      <section className="px-8 py-4" ref={props.selfRef}>
        <h1 className="font-black text-4xl uppercase">Manage Verbs</h1>
        <div className="flex space-x-4 mt-4">
          <button
            onClick={() => {
              setVawIsDisplayed(true);
            }}
            className="button stateless-button px-2 py-1"
          >
            <span className="text-blue-700 font-black">+</span> Add New Verb
          </button>
          <button
            onClick={handleDeleteVerb}
            className={`${deleteButtonClassName} px-2 py-1`}
            disabled={deleteButtonIsDisabled}
          >
            {deleteButtonContent}
          </button>
        </div>
        <ul className="list-disc list-inside mt-8">
          <li className="subtitle-text">Double click a verb row to edit it</li>
          <li className="subtitle-text mt-2">Click anywhere to deselect</li>
        </ul>

        <table className="mt-8 simple-table">
          <thead className="subtitle-text">
            <tr>
              <th>Spanish Infinitive</th>
              <th>English Infinitive</th>
              <th className="hidden lg:table-cell">Ending Type</th>
              <th className="hidden lg:table-cell">Is Regular?</th>
            </tr>
          </thead>
          <tbody>
            {listOfVerbs.map((verbObject) => {
              let className = "";
              for (const selectedVerbObject of selectedVerbs) {
                if (
                  verbObject.spanishInfinitive ===
                  selectedVerbObject.spanishInfinitive
                ) {
                  className = "selected-row";
                }
              }

              return (
                <React.Fragment key={verbObject.spanishInfinitive}>
                  <tr
                    onDoubleClick={handleEditVerb}
                    onClick={(e) => handleVerbSelection(e, verbObject)}
                    data-verb-object={JSON.stringify(verbObject)}
                    className={className}
                  >
                    <td>{capitalize(verbObject.spanishInfinitive)}</td>
                    <td>To {verbObject.englishPresent}</td>
                    <td className="hidden lg:table-cell">
                      {verbObject.isRegular
                        ? verbObject.spanishInfinitive.slice(-2)
                        : "N/A"}
                    </td>
                    <td className="hidden lg:table-cell">
                      {verbObject.isRegular ? "Regular" : "Irregular"}
                    </td>
                  </tr>
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </section>
      <div
        className={`fixed inset-0 z-10 bg-black bg-opacity-50 ${
          vawIsDisplayed ? "block" : "hidden"
        }`}
        onClick={() => {
          setVawIsDisplayed(false);
        }}
      ></div>
      <VerbAdditionWindow
        displayed={vawIsDisplayed}
        setDisplayed={setVawIsDisplayed}
        verbToAdd={verbToAdd}
        setVerbToAdd={setVerbToAdd}
        handleSubmit={handleVerbSubmit}
      />
    </>
  );
}
