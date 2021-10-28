import './form.css';
import Input from './input/input';
import Title from './title/title';
import Button from './button/button';
import Or from './or/or';
import CheckBox from './checkbox/checkbox';
import ButtonLogin from './buttonlogin/buttonlogin';
import CreateAccout from './createaccout/createaccout';

function Form() {
    return (
        <form>
            <Title/>
            <Button type="button" text="Continue with Google"/>
            <Or/>
            <Input type="text" label="Email"/>
            <Input type="password" label="Password"/>
            <CheckBox label="Remember me"/>
            <ButtonLogin type="button" text="Login"/>
            <CreateAccout/>
        </form>
    );
}

export default Form;