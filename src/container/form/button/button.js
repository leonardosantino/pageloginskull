import './button.css'
import icon from "../../../assets/imgs/icon-google.png"

function Button(props) {

    
    return (
        <div className="divbutton">
        <button type={props.type} className="button"><img src={icon} alt=""/><span>{props.text}</span></button>
        </div>
    );
}

export default Button;