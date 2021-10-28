import './input.css'




function Input(props) {
    const idRandom = Math.random().toString().substr(12);
    return (
        <>
        <div><label htmlFor={idRandom} className="label">{props.label}</label></div>
        <div><input type={props.type} id={idRandom} className="input"/></div>
        </>
    );
}

export default Input;