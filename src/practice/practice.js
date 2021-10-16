import React from "react";
import ToggleButtonList from "../general-components/toggle-button-list";
import {
  randomChoice,
  capitalize,
  makeSentenceObject,
} from "../helper-functions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleRight,
  faCheckSquare,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

// =======================

export default class Practice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: null,
      answers: null,
      input: "",
      feedbackMessage: null,
      selectedTenses: [false, true, true],
    };
    this.clearInputAndNewQuestion = this.clearInputAndNewQuestion.bind(this);
    this.handleTenseChange = this.handleTenseChange.bind(this);
  }

  componentDidMount() {
    this.handleNewQuestion();
  }

  handleTenseChange = (updatedTenseIndex) => {
    const updatedTenses = this.state.selectedTenses.map((tense, index) => {
      return updatedTenseIndex === index ? !tense : tense;
    });

    if (updatedTenses.indexOf(true) === -1) {
      window.alert("Make sure you have at least one tense selected.");
    } else {
      this.setState({ selectedTenses: updatedTenses });
    }
  };

  handleInputChange = (e) => {
    const inputValue = e.target.value;
    this.setState({ input: inputValue });
  };

  handleNewQuestion = () => {
    let tenseNumbers = [];
    this.state.selectedTenses.forEach((tenseBool, index) => {
      if (tenseBool) {
        tenseNumbers.push(index);
      }
    });
    const sentenceObject = makeSentenceObject(
      randomChoice(this.props.listOfVerbs),
      randomChoice(tenseNumbers)
    );
    this.setState({
      question: sentenceObject.englishSentence,
      answers: sentenceObject.spanishSentencesObject,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const answers = this.state.answers;

    // process input
    const trimmedInput = this.state.input.trim().toLowerCase();
    let inputWordsArray = [];
    let processedWord = [];
    for (let i = 0; i < trimmedInput.length; i++) {
      if (trimmedInput.charAt(i) !== " ") {
        if (i === trimmedInput.length - 1) {
          processedWord.push(trimmedInput.charAt(i));
          inputWordsArray.push(processedWord.join(""));
          processedWord = [];
        } else {
          processedWord.push(trimmedInput.charAt(i));
        }
      } else {
        inputWordsArray.push(processedWord.join(""));
        processedWord = [];
      }
    }
    inputWordsArray = inputWordsArray.filter((word) => word);

    // check processed input against both spanish sentences
    let isCorrect = true;
    let userInputSpansArray = [];
    if (
      inputWordsArray.join(" ") === answers.prodropArray.join(" ") ||
      inputWordsArray.join(" ") === answers.normalArray.join(" ")
    ) {
      userInputSpansArray.push(
        <span className={"correct-feedback"} key={inputWordsArray.join(" ")}>
          {inputWordsArray.join(" ")}
        </span>
      );
    } else {
      isCorrect = false;
      // if incorrect number of words
      if (inputWordsArray.length !== answers.normalArray.length) {
        userInputSpansArray.push(
          <span className={"wrong-feedback"} key={inputWordsArray.join(" ")}>
            {inputWordsArray.join(" ")}
          </span>
        );
      } else {
        // word by word coloring feedback
        inputWordsArray.forEach((word, index) => {
          let endSpace = " ";
          if (index === answers.normalArray.length - 1) {
            endSpace = "";
          }
          if (word === answers.normalArray[index]) {
            userInputSpansArray.push(
              <React.Fragment key={word + index.toString()}>
                <span className={"correct-feedback"}>{word}</span>
                {endSpace}
              </React.Fragment>
            );
          } else {
            userInputSpansArray.push(
              <React.Fragment key={word + index.toString()}>
                <span className={"wrong-feedback"}>{word}</span>
                {endSpace}
              </React.Fragment>
            );
          }
        });
      }
    }

    this.setState({
      feedbackMessage: {
        question: this.state.question.join(" "),
        isCorrect: isCorrect,
        userInputSpansArray: userInputSpansArray,
        actualAnswer: answers.normalArray.join(" "),
      },
      input: "",
    });

    this.handleNewQuestion();
  };

  clearInputAndNewQuestion() {
    this.setState({ input: "" });
    this.handleNewQuestion();
  }

  // ================== RENDER =====================================

  render() {
    const question = this.state.question;
    const input = this.state.input;
    const feedbackMessage = this.state.feedbackMessage;
    const selectedTenses = this.state.selectedTenses;

    let feedbackSectionContents;
    if (!feedbackMessage) {
      feedbackSectionContents = (
        <>
          <p>...</p>
          <p>English phrase: </p>
          <p>Your answer: </p>
          <p>Correct answer: </p>
        </>
      );
    } else {
      feedbackSectionContents = (
        <>
          {feedbackMessage.isCorrect ? (
            <p className="font-bold text-blue-700">CORRECT</p>
          ) : (
            <p className="font-bold text-red-700">INCORRECT</p>
          )}
          <p>English phrase: {capitalize(feedbackMessage.question)}</p>
          <p>Your answer: {feedbackMessage.userInputSpansArray}</p>
          <p>Correct answer: {feedbackMessage.actualAnswer}</p>
        </>
      );
    }

    return (
      <section
        ref={this.props.selfRef}
        className="px-8 pt-4 pb-10 md:w-1/2 xl:w-1/3"
      >
        <header className="pb-4">
          <h1 className="font-black text-4xl uppercase">Practice</h1>
          <h2 className="mt-8">Select Tenses:</h2>
          <ToggleButtonList
            listClassNames="flex space-x-2 mt-1"
            buttonStyle="button mt-2 px-2 py-1 group"
            onStyle="button-on"
            onMarker={
              <FontAwesomeIcon
                icon={faCheckSquare}
                style={{ width: "1em" }}
                className="fa-icon-on-button"
              />
            }
            offStyle="button-off"
            offMarker={
              <FontAwesomeIcon
                icon={faTimesCircle}
                style={{ width: "1em" }}
                className="fa-icon-off-button"
              />
            }
            labelsArray={["Past", "Present", "Future"]}
            valuesArray={selectedTenses}
            handleButtonClick={this.handleTenseChange}
            buttonTabIndex={this.props.vawIsDisplayed ? "-1" : "0"}
          />
          <button
            className="button stateless-button mt-2 px-2 py-1"
            onClick={this.clearInputAndNewQuestion}
            tabIndex={this.props.vawIsDisplayed ? "-1" : "0"}
          >
            Generate Different Question
          </button>
          <hr className="mt-4" />
          <p className="mt-4 subtitle-text tracking-wider text-xs">
            Translate the following english phrase into spanish:{" "}
          </p>
          <p className="text-2xl font-bold">
            {question ? capitalize(question.join(" ")) : null}
          </p>
        </header>
        <div>
          <form
            className="flex space-x-2 max-w-full"
            onSubmit={this.handleSubmit}
          >
            <input
              className="normal-input flex-grow"
              placeholder="Enter answer here..."
              type="text"
              required
              value={input}
              onChange={(e) => this.handleInputChange(e)}
              maxLength="50"
              tabIndex={this.props.vawIsDisplayed ? "-1" : "0"}
            />
            <button
              className="button stateless-button px-4 py-1"
              type="submit"
              tabIndex={this.props.vawIsDisplayed ? "-1" : "0"}
            >
              <FontAwesomeIcon icon={faAngleRight} />
            </button>
          </form>

          <section className="mt-2 lg:mt-8">{feedbackSectionContents}</section>
          <a
            href="#verb-manager"
            className="text-center block mt-32 font-semibold md:hidden"
            onClick={() => {
              this.props.sectionBelow.current.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Manage which verbs you're tested on
            <br />
            <FontAwesomeIcon icon={faAngleDown} />
          </a>
        </div>
      </section>
    );
  }
}
