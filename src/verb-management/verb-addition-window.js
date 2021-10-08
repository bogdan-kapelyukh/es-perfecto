import React from "react";
import { esConjugate, checkOnlySpanishCharacters } from "../helper-functions";
import Styles from "./verb-addition-window.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsAltH } from "@fortawesome/free-solid-svg-icons";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";

export default function VerbAdditionWindow(props) {
  const verbObject = props.verbObject;
  const setVerbObject = props.setVerbObject;

  const pronounObjectsArray = [
    { code: "yo", display: "Yo:" },
    { code: "tú", display: "Tú:" },
    { code: "él", display: "Él/ella/usted:" },
    { code: "nosotros", display: "Nosotros/nosotras:" },
    { code: "vosotros", display: "Vosotros/vosotras:" },
    { code: "ellos", display: "Ellos/ellas/ustedes:" },
  ];

  function changeOneItem(arrayToChange, indexToChange, newItem) {
    const newArray = arrayToChange.slice();
    newArray[indexToChange] = newItem;
    return newArray;
  }

  function handleInfinitiveChange(e) {
    if (!checkOnlySpanishCharacters(e.target.value)) {
      return;
    }

    setVerbObject(() => {
      const spanishInfinitive = e.target.value.toLowerCase();
      if (verbObject.isRegular) {
        const conjugationObject = esConjugate(spanishInfinitive);
        return {
          ...verbObject,
          spanishInfinitive: spanishInfinitive,
          past: conjugationObject.past,
          present: conjugationObject.present,
        };
      }
      return { ...verbObject, spanishInfinitive: spanishInfinitive };
    });
  }

  function handleInputChange(e) {
    if (!checkOnlySpanishCharacters(e.target.value)) {
      return;
    }

    setVerbObject({
      ...verbObject,
      [e.target.id]: e.target.value.toLowerCase(),
    });
  }

  function handleArrayInputChange(e, arrayToChange, indexToChange) {
    if (!checkOnlySpanishCharacters(e.target.value)) {
      return;
    }

    setVerbObject({
      ...verbObject,
      [arrayToChange]: changeOneItem(
        verbObject[arrayToChange],
        indexToChange,
        e.target.value.toLowerCase()
      ),
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (
      verbObject.past.indexOf("") === -1 &&
      verbObject.present.indexOf("") === -1
    ) {
      props.handleSubmit(verbObject);
    } else {
      window.alert("Make sure all fields are filled in.");
    }
  }

  function handleClose() {
    setVerbObject(null);
  }

  return (
    <div className={Styles.vawParent}>
      <div className={Styles.vawBackground} onClick={handleClose}></div>
      <div className={Styles.vawContainer}>
        <h1 className={Styles.vawTitle}>Add/edit a verb</h1>
        <button className={Styles.closeButton} onClick={handleClose}>
          <FontAwesomeIcon icon={faTimesCircle} />
        </button>
        <form className={Styles.vawForm} onSubmit={handleSubmit}>
          <button
            type="button"
            className={Styles.verbRegularButton}
            onClick={() =>
              setVerbObject({
                ...verbObject,
                isRegular: !verbObject.isRegular,
              })
            }
          >
            The verb is{" "}
            <strong>{verbObject.isRegular ? "regular" : "irregular"}</strong>{" "}
            <FontAwesomeIcon icon={faArrowsAltH} />
          </button>
          <div className={Styles.formHeader}>
            <div className={Styles.labelAndField}>
              <label htmlFor="spanishInfinitive">Spanish Infinitive:</label>
              <input
                type="text"
                id="spanishInfinitive"
                value={verbObject.spanishInfinitive}
                onChange={handleInfinitiveChange}
                required
              />
            </div>
            <div className={Styles.labelAndField}>
              <label htmlFor="englishPast">English Past:</label>
              <input
                type="text"
                id="englishPast"
                value={verbObject.englishPast}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className={Styles.labelAndField}>
              <label htmlFor="englishPresent">English Present:</label>
              <input
                type="text"
                id="englishPresent"
                value={verbObject.englishPresent}
                onChange={handleInputChange}
                required
              />
            </div>
            {/* <div className={Styles.labelAndField}>
              <label htmlFor="isRegular">The Verb Is Regular:</label>
              <input
                type="checkbox"
                id="isRegular"
                checked={verbObject.isRegular}
                onChange={() =>
                  setVerbObject({
                    ...verbObject,
                    isRegular: !verbObject.isRegular,
                  })
                }
              />
            </div> */}
          </div>
          <div className={Styles.outerVerbArrayContainer}>
            <>
              <div className={Styles.innerVerbArrayContainer}>
                <h2>Past Tense</h2>
                {pronounObjectsArray.map((pronounObject, index) => {
                  return (
                    <div
                      className={Styles.labelAndField}
                      key={pronounObject.code + "0"}
                    >
                      <label htmlFor={pronounObject.code + "0"}>
                        {pronounObject.display}
                      </label>
                      <input
                        type="text"
                        id={pronounObject.code + "0"}
                        value={verbObject.past[index]}
                        onChange={(e) =>
                          handleArrayInputChange(e, "past", index)
                        }
                        required
                        disabled={verbObject.isRegular ? true : false}
                      />
                    </div>
                  );
                })}
              </div>
              <div className={Styles.innerVerbArrayContainer}>
                <h2>Present Tense</h2>
                {pronounObjectsArray.map((pronounObject, index) => {
                  return (
                    <div
                      className={Styles.labelAndField}
                      key={pronounObject.code + "0"}
                    >
                      <label htmlFor={pronounObject.code + "1"}>
                        {pronounObject.display}
                      </label>
                      <input
                        type="text"
                        id={pronounObject.code + "1"}
                        value={verbObject.present[index]}
                        onChange={(e) =>
                          handleArrayInputChange(e, "present", index)
                        }
                        required
                        disabled={verbObject.isRegular ? true : false}
                      />
                    </div>
                  );
                })}
              </div>
            </>
          </div>
          <button className={Styles.submitButton} type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
