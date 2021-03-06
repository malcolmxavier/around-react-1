import React from "react";

export default function PopupWithForm(props) {
  const [isInputError, setIsInputError] = React.useState(true);

  React.useEffect(() => {
    if (props.errorFlags) {
      const arr = Object.keys(props.errorFlags);
      arr.length === React.Children.count(props.children) &&
        setIsInputError(arr.some((k) => props.errorFlags[k] === true));
    }
  }, [props.errorFlags, props.children]);

  return (
    <section className={props.isOpen ? `${props.name}` : `${props.name} hide`}>
      <div className="overlay"></div>
      <form
        className="form"
        id="edit-profile"
        onSubmit={props.onSubmit}
        noValidate
      >
        <h2 className="form__title">{props.title}</h2>
        {props.children}
        <button
          type="submit"
          className={`form__save-button ${
            isInputError ? "form__save-button_disabled" : ""
          }`}
          disabled={isInputError}
        >
          {props.submitButtonLabel}
        </button>
        <button
          type="button"
          className="form__close-button"
          onClick={props.onClose}
        ></button>
      </form>
    </section>
  );
}
