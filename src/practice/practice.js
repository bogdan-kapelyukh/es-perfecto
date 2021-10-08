import React from "react";
import {
  randomChoice,
  capitalize,
  makeSentenceObject,
  checkOnlySpanishCharacters,
} from "../helper-functions";
import Styles from "./practice.module.css";
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
    if (checkOnlySpanishCharacters(inputValue)) {
      this.setState({ input: inputValue });
    }
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
        <span
          className={Styles.correctFeedback}
          key={inputWordsArray.join(" ")}
        >
          {inputWordsArray.join(" ")}
        </span>
      );
    } else {
      isCorrect = false;
      // if incorrect number of words
      if (inputWordsArray.length !== answers.normalArray.length) {
        userInputSpansArray.push(
          <span
            className={Styles.wrongFeedback}
            key={inputWordsArray.join(" ")}
          >
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
              <span
                className={Styles.correctFeedback}
                key={word + index.toString()}
              >
                {word}
                {endSpace}
              </span>
            );
          } else {
            userInputSpansArray.push(
              <span
                className={Styles.wrongFeedback}
                key={word + index.toString()}
              >
                {word}
                {endSpace}
              </span>
            );
          }
        });
      }
    }

    let correctness = "CORRECT";
    let actualAnswer = null;
    let correctnessClassName = Styles.rightTitle;
    if (!isCorrect) {
      correctness = "INCORRECT";
      actualAnswer = answers.normalArray.join(" ");
      correctnessClassName = Styles.wrongTitle;
    }

    this.setState({
      feedbackMessage: {
        question: this.state.question.join(" "),
        correctness: correctness,
        userInputSpansArray: userInputSpansArray,
        actualAnswer: actualAnswer,
        correctnessClassName: correctnessClassName,
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

    return (
      <section
        className="section-container light-section"
        ref={this.props.selfRef}
      >
        <header className={Styles.questionHeader}>
          <h1 className={Styles.sectionTitle}>Practice</h1>
          <h2 className={`${Styles.tensesLabel} ${Styles.displayMobile}`}>
            Tenses:
          </h2>
          <ul className={Styles.tenseList}>
            {["past", "present", "future"].map((tense, index) => {
              let className;
              let faIcon;
              if (selectedTenses[index]) {
                className = Styles.tenseButtonOn;
                faIcon = (
                  <FontAwesomeIcon
                    icon={faCheckSquare}
                    style={{ width: "1em" }}
                  />
                );
              } else {
                className = Styles.tenseButtonOff;
                faIcon = (
                  <FontAwesomeIcon
                    icon={faTimesCircle}
                    style={{ width: "1em" }}
                  />
                );
              }

              return (
                <li key={tense + String(index)}>
                  <button
                    className={`${className} ${Styles.tenseButton}`}
                    onClick={() => this.handleTenseChange(index)}
                  >
                    {capitalize(tense)}{" "}
                    <span className={Styles.displayDesktop}>Tense </span>
                    {faIcon}
                  </button>
                </li>
              );
            })}
          </ul>
        </header>
        <div className={Styles.questionMain}>
          <button
            className={`${Styles.mobileNewQuestionButton} ${Styles.displayMobile}`}
            onClick={this.clearInputAndNewQuestion}
          >
            New Question
          </button>
          <p className={Styles.questionSubtitle}>Translate the following: </p>
          <h2 className={Styles.question}>
            {question ? capitalize(question.join(" ")) : null}
          </h2>
          <form className={Styles.answerForm} onSubmit={this.handleSubmit}>
            <button
              className={`${Styles.desktopNewQuestionButton} ${Styles.displayDesktop}`}
              type="button"
              onClick={this.clearInputAndNewQuestion}
            >
              New Question
            </button>
            <input
              type="text"
              placeholder="Enter answer here :)"
              className={Styles.answerInput}
              required
              value={input}
              onChange={(e) => this.handleInputChange(e)}
              maxLength="50"
            />
            <button type="submit" className={Styles.answerSubmit}>
              <FontAwesomeIcon icon={faAngleRight} />
            </button>
          </form>

          <div className={Styles.feedback}>
            {feedbackMessage ? (
              <>
                <p className={feedbackMessage.correctnessClassName}>
                  {feedbackMessage.correctness}
                </p>
                <p>The english phrase was:</p>
                <p>{capitalize(feedbackMessage.question)}</p>
                <br />
                <p>Your answer was:</p>
                <p className={Styles.feedbackUserAnswerParagraph}>
                  {feedbackMessage.userInputSpansArray}
                </p>
                <br />
                {feedbackMessage.actualAnswer ? (
                  <>
                    <p>The correct answer was: </p>
                    <p>{feedbackMessage.actualAnswer}</p>{" "}
                  </>
                ) : null}
              </>
            ) : null}
          </div>
        </div>
        <a
          href="#verb-manager"
          className={Styles.verbManagerAnchor}
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
      </section>
    );
  }
}
