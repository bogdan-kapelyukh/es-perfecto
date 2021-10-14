import PropTypes from "prop-types";

function ToggleButtonList(props) {
  return (
    <ul className={props.listClassNames}>
      {props.labelsArray.map((label, index) => {
        let stateClassName;
        let stateMarker;
        if (props.valuesArray[index]) {
          stateClassName = props.onStyle;
          stateMarker = props.onMarker;
        } else {
          stateClassName = props.offStyle;
          stateMarker = props.offMarker;
        }

        return (
          <li key={label + String(index)}>
            <button
              className={`${props.buttonStyle} ${stateClassName}`}
              onClick={() => props.handleButtonClick(index)}
            >
              {label} {stateMarker}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

ToggleButtonList.propTypes = {
  listClassNames: PropTypes.string,
  buttonStyle: PropTypes.string,
  onStyle: PropTypes.string,
  onMarker: PropTypes.element,
  offStyle: PropTypes.string,
  offMarker: PropTypes.element,
  labelsArray: PropTypes.arrayOf(PropTypes.string).isRequired,
  valuesArray: PropTypes.arrayOf(PropTypes.bool).isRequired,
  handleButtonClick: PropTypes.func.isRequired,
};

export default ToggleButtonList;
