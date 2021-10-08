import React, { useState } from "react";
import { capitalize } from "../helper-functions";
import VerbAdditionWindow from "./verb-addition-window";
import Styles from "./verb-manager.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusSquare,
  faMinusSquare,
  faAngleUp,
} from "@fortawesome/free-solid-svg-icons";

export default function VerbManager(props) {
  const [verbToAdd, setVerbToAdd] = useState(null);
  const [selectedVerbs, setSelectedVerbs] = useState([]);

  const listOfVerbs = props.listOfVerbs;
  const setListOfVerbs = props.setListOfVerbs;

  function handleAddVerb(e) {
    setVerbToAdd({
      spanishInfinitive: "",
      englishPast: "",
      englishPresent: "",
      past: ["", "", "", "", "", ""],
      present: ["", "", "", "", "", ""],
      isRegular: true,
    });
  }

  function handleEditVerb(e) {
    setVerbToAdd(JSON.parse(e.currentTarget.getAttribute("data-verb-object")));
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
    setVerbToAdd(null);
  }

  let deleteButtonText;
  let deleteButtonClassName = Styles.deactivatedDeleteButton;
  let deleteButtonIsDisabled = true;
  console.log(listOfVerbs.length);
  if (listOfVerbs.length === selectedVerbs.length) {
    deleteButtonText = "Must have at least 1 verb";
  } else {
    if (selectedVerbs.length === 0) {
      deleteButtonText = "Select a verb to delete it";
    } else {
      deleteButtonIsDisabled = false;
      deleteButtonClassName = "";
      deleteButtonText = (
        <>
          Delete Verb <FontAwesomeIcon icon={faMinusSquare} />
        </>
      );
    }
  }

  return (
    <section
      onClick={() => {
        setSelectedVerbs([]);
      }}
      className={`section-container dark-section`}
      ref={props.selfRef}
    >
      <a
        href="#practice"
        className={Styles.practiceAnchor}
        onClick={() => {
          props.sectionAbove.current.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </a>
      <h1 className={Styles.sectionTitle}>Manage Verbs</h1>
      <p className={Styles.verbSubtitle}>Double click a verb row to edit it</p>
      <div className={Styles.tableAndButtonsWrapper}>
        <div className={Styles.tableWrapper}>
          <table className={Styles.verbTable}>
            <thead>
              <tr>
                <th>Spanish Infinitive</th>
                <th>English Infinitive</th>
                <th className={Styles.hideMobile}>Ending Type</th>
                <th className={Styles.hideMobile}>Is Regular?</th>
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
                    className = Styles.selected;
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
                      <td className={Styles.hideMobile}>
                        {verbObject.isRegular
                          ? verbObject.spanishInfinitive.slice(-2)
                          : "N/A"}
                      </td>
                      <td className={Styles.hideMobile}>
                        {verbObject.isRegular ? "Regular" : "Irregular"}
                      </td>
                    </tr>
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className={Styles.buttonContainer}>
          <button
            onClick={handleAddVerb}
            className={Styles.verbManagementButton}
          >
            Add New Verb <FontAwesomeIcon icon={faPlusSquare} />
          </button>
          <button
            onClick={handleDeleteVerb}
            className={`${Styles.verbManagementButton} ${deleteButtonClassName}`}
            disabled={deleteButtonIsDisabled}
          >
            {deleteButtonText}
          </button>
        </div>
      </div>
      {verbToAdd ? (
        <VerbAdditionWindow
          verbObject={verbToAdd}
          setVerbObject={setVerbToAdd}
          handleSubmit={handleVerbSubmit}
        />
      ) : null}
    </section>
  );
}
