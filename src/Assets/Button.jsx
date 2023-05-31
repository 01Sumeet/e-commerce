

//Button that appears on the right side of the page.
import "./Button.css"
const Button = (props) => {
    return (
      <>
        <button className={props.className} id={props.id} onClick={props.onClick}>
          {props.children}
        </button>
      </>
    );
  };
  
  export default Button;
  