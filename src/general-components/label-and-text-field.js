import PropTypes from "prop-types";

function LabelAndTextField({
  divClassName,
  textFieldClassName,
  textFieldPlaceHolder,
  labelText,
  sharedId,
  textFieldValue,
  textFieldOnChange,
  requireTextField,
  disableTextField,
  maxLength,
  textFieldTabIndex,
}) {
  return (
    <div className={divClassName}>
      <label htmlFor={sharedId}>{labelText}</label>
      <input
        id={sharedId}
        className={textFieldClassName}
        type="text"
        value={textFieldValue}
        onChange={textFieldOnChange}
        placeholder={textFieldPlaceHolder}
        required={requireTextField}
        disabled={disableTextField}
        maxLength={maxLength}
        tabIndex={textFieldTabIndex}
      />
    </div>
  );
}

LabelAndTextField.propTypes = {
  sharedId: PropTypes.string.isRequired,
};

export default LabelAndTextField;
