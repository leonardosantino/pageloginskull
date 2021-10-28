import './checkbox.css'

function CheckBox(props) {
    const idRandom = Math.random().toString().substr(12);
    return (
        <div className="divforgot">
        
        <label htmlFor={idRandom} className="labelcheckbox"><input class="form-check-input" type="checkbox" id={idRandom} />&nbsp;{props.label}</label>
        
        <a href="#" className="labelforgot">Forgot Password?</a>
        </div>
    );
}

export default CheckBox;