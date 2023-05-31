import "./Input.css";

const InputField = (props) => {
  return (
    <>
      <input
        name={props.name}
        className={props.className}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
      {props.error && <span className="error">{props.errorMessage}</span>}
    </>
  );
};

export default InputField;
