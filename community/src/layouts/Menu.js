import {Link} from "react-router-dom";
import Button from '../features/authentication/components/form/Button';

const Menu = () =>{
    return (
        <>
            <Link to={"/home"}>HOME</Link>
            <Link to={"/login"}>LOING</Link>
            {
                sessionStorage.getItem('userData') !== null
                ? <Button buttonId="btn login-btn" params='userData' link='/' fname='logout'>LOGOUT</Button>
                : null
            }
            <Button fname='test'>test</Button>
        </>
    )
}

export default Menu;