import {Link} from "react-router-dom";
import Button from '../features/authentication/components/form/Button';

const Menu = () =>{
    return (
        <>
            <Link to={"/home"}>HOME</Link>
            <Link to={"/login"}>LOING</Link>
            <span id='userNo'></span>
            <p>
                {
                    sessionStorage.getItem("userData")
                }
            </p>
            <Button fname='test'>test</Button>
            <Button buttonId="btn login-btn" params='userData' link='/' fname='logout'>LOGOUT</Button>
        </>
    )
}

export default Menu;