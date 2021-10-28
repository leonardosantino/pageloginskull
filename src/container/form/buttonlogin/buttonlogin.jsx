import './buttonlogin.css'

function ButtonLogin(props) {

    
    return (
        <div className="divbuttonlogin">
        <button type={props.type} className="buttonlogin"><span>{props.text}</span></button>
        </div>
    );
}

export default ButtonLogin;