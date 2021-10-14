import React from "react";
import { esConjugate, checkOnlySpanishCharacters } from "../helper-functions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimesCircle,
  faQuestionCircle,
} from "@fortawesome/free-regular-svg-icons";
import LabelAndTextField from "../general-components/label-and-text-field";

const GENERAL_DIV_CLASS_NAME =
  "flex flex-col lg:flex-row lg:items-center lg:space-x-2 space-y-2";

const IMPORTANT_FIELD_DIV_CLASS_NAME = "flex flex-col space-y-2";

const DEFAULT_VERB = {
  spanishInfinitive: "",
  englishPast: "",
  englishPresent: "",
  past: ["", "", "", "", "", ""],
  present: ["", "", "", "", "", ""],
  isRegular: true,
};

export default function VerbAdditionWindow(props) {
  const verbToAdd = props.verbToAdd;
  const setVerbToAdd = props.setVerbToAdd;

  const pronounObjectsArray = [
    { code: "yo", display: "Yo" },
    { code: "tú", display: "Tú" },
    { code: "él", display: "Él/ella/usted" },
    { code: "nosotros", display: "Nosotros/nosotras" },
    { code: "vosotros", display: "Vosotros/vosotras" },
    { code: "ellos", display: "Ellos/ellas/ustedes" },
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

    setVerbToAdd(() => {
      const spanishInfinitive = e.target.value.toLowerCase();
      if (verbToAdd.isRegular) {
        const conjugationObject = esConjugate(spanishInfinitive);
        return {
          ...verbToAdd,
          spanishInfinitive: spanishInfinitive,
          past: conjugationObject.past,
          present: conjugationObject.present,
        };
      }
      return { ...verbToAdd, spanishInfinitive: spanishInfinitive };
    });
  }

  function handleInputChange(e) {
    if (!checkOnlySpanishCharacters(e.target.value)) {
      return;
    }

    setVerbToAdd({
      ...verbToAdd,
      [e.target.id]: e.target.value.toLowerCase(),
    });
  }

  function handleArrayInputChange(e, arrayToChange, indexToChange) {
    if (!checkOnlySpanishCharacters(e.target.value)) {
      return;
    }

    setVerbToAdd({
      ...verbToAdd,
      [arrayToChange]: changeOneItem(
        verbToAdd[arrayToChange],
        indexToChange,
        e.target.value.toLowerCase()
      ),
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (
      verbToAdd.past.indexOf("") === -1 &&
      verbToAdd.present.indexOf("") === -1
    ) {
      props.handleSubmit(verbToAdd);
    } else {
      window.alert("Make sure all fields are filled in.");
    }
  }

  function handleClose() {
    props.setDisplayed(false);
    setVerbToAdd();
  }

  return (
    <div
      className={`fixed inset-0 z-20 overflow-scroll bg-gray-50 px-10 py-8 ${
        props.displayed
          ? "transform-none transition-transform duration-500"
          : "transform translate-y-full transition-transform duration-500"
      }
      lg:w-max
      lg:mx-auto
      lg:overflow-y-auto
      `}
    >
      <div className="flex">
        <h1 className="font-black text-4xl uppercase">Add/edit a verb</h1>
        <button onClick={handleClose} className="ml-auto text-4xl">
          <FontAwesomeIcon
            icon={faTimesCircle}
            className="hover:text-blue-700"
          />
        </button>
      </div>
      <form
        className="mt-10"
        onSubmit={handleSubmit}
        // disabled={!props.displayed}
      >
        <p className="font-bold text-xl">The verb is ...</p>
        <p className="font-normal text-gray-500 text-base leading-tight mt-2">
          Regular verbs will autocomplete entries based on what is in the
          'Spanish infinitive' box
        </p>
        <ul className="flex space-x-2 mt-4">
          <li
            className={`button flex space-x-2 items-center px-2 py-1 border-2  ${
              verbToAdd.isRegular
                ? "button-on border-blue-700 border-opacity-100"
                : "button-off border-opacity-0"
            }`}
            onClick={() => setVerbToAdd({ ...verbToAdd, isRegular: true })}
          >
            <label htmlFor="regular">Regular</label>
            <input
              type="radio"
              name="isRegular"
              id="regular"
              value="true"
              checked={verbToAdd.isRegular === true}
              onChange={() => setVerbToAdd({ ...verbToAdd, isRegular: true })}
            />
          </li>
          <li
            className={`flex space-x-2 items-center button px-2 py-1 border-2 ${
              !verbToAdd.isRegular
                ? "button-on border-blue-700 border-opacity-100"
                : "button-off border-opacity-0"
            }`}
            onClick={() => setVerbToAdd({ ...verbToAdd, isRegular: false })}
          >
            <label htmlFor="irregular">Irregular</label>
            <input
              type="radio"
              name="isRegular"
              id="irregular"
              value="false"
              checked={verbToAdd.isRegular === false}
              onChange={() => setVerbToAdd({ ...verbToAdd, isRegular: false })}
            />
          </li>
        </ul>
        <hr className="mt-4" />
        <div className="flex flex-col lg:flex-row lg:justify-center lg:space-x-8 space-y-2 lg:space-y-0 mt-4">
          <LabelAndTextField
            divClassName={IMPORTANT_FIELD_DIV_CLASS_NAME}
            textFieldClassName="normal-input"
            labelText={
              <>
                Spanish Infinitive <FontAwesomeIcon icon={faQuestionCircle} />
              </>
            }
            sharedId="spanishInfinitive"
            textFieldValue={verbToAdd.spanishInfinitive}
            textFieldOnChange={handleInfinitiveChange}
            requireTextField={true}
            maxLength={25}
          />
          <LabelAndTextField
            divClassName={IMPORTANT_FIELD_DIV_CLASS_NAME}
            textFieldClassName="normal-input"
            labelText={
              <>
                English Past <FontAwesomeIcon icon={faQuestionCircle} />
              </>
            }
            sharedId="englishPast"
            textFieldValue={verbToAdd.englishPast}
            textFieldOnChange={handleInputChange}
            requireTextField={true}
            maxLength={25}
          />
          <LabelAndTextField
            divClassName={IMPORTANT_FIELD_DIV_CLASS_NAME}
            textFieldClassName="normal-input"
            labelText={
              <>
                English Present <FontAwesomeIcon icon={faQuestionCircle} />
              </>
            }
            sharedId="englishPresent"
            textFieldValue={verbToAdd.englishPresent}
            textFieldOnChange={handleInputChange}
            requireTextField={true}
            maxLength={25}
          />
        </div>
        <hr className="mt-8" />
        <div className="lg:flex lg:justify-center lg:px-10 lg:space-x-10">
          <div className="flex flex-col space-y-2 mt-4">
            <h2 className="font-bold text-xl mb-2">Past Tense</h2>
            {pronounObjectsArray.map((pronounObject, index) => {
              return (
                <LabelAndTextField
                  divClassName={GENERAL_DIV_CLASS_NAME}
                  textFieldClassName={
                    verbToAdd.isRegular ? "autocomplete-field" : "normal-input"
                  }
                  textFieldPlaceHolder={
                    verbToAdd.isRegular ? "Box will autocomplete" : ""
                  }
                  key={pronounObject.code + "0"}
                  labelText={pronounObject.display}
                  sharedId={pronounObject.code + "0"}
                  textFieldValue={verbToAdd.past[index]}
                  textFieldOnChange={(e) =>
                    handleArrayInputChange(e, "past", index)
                  }
                  requireTextField={true}
                  disableTextField={verbToAdd.isRegular ? true : false}
                  maxLength={25}
                />
              );
            })}
          </div>
          <hr className="mt-8" />
          <div className="flex flex-col space-y-2 mt-4">
            <h2 className="font-bold text-xl mb-2">Present Tense</h2>
            {pronounObjectsArray.map((pronounObject, index) => {
              return (
                <LabelAndTextField
                  divClassName={GENERAL_DIV_CLASS_NAME}
                  textFieldClassName={
                    verbToAdd.isRegular ? "autocomplete-field" : "normal-input"
                  }
                  textFieldPlaceHolder={
                    verbToAdd.isRegular ? "Box will autocomplete" : ""
                  }
                  key={pronounObject.code + "0"}
                  labelText={pronounObject.display}
                  sharedId={pronounObject.code + "0"}
                  textFieldValue={verbToAdd.present[index]}
                  textFieldOnChange={(e) =>
                    handleArrayInputChange(e, "present", index)
                  }
                  requireTextField={true}
                  disableTextField={verbToAdd.isRegular ? true : false}
                  maxLength={25}
                />
              );
            })}
          </div>
        </div>
        <button
          className={`mt-4 button bg-yellow-300 px-4 py-2 hover:bg-yellow-700 lg:mx-auto lg:block lg:mt-10`}
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
