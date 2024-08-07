import {Link} from "react-router-dom";
import Button from '../features/authentication/components/form/Button';

const Menu = () =>{
    return (
        <>
            <Link to={"/home"}>HOME</Link>
            {
                sessionStorage.getItem('userData') !== null
                ? <Button buttonId="btn login-btn" link='/' fname='logout'>LOGOUT</Button>
                : <Link to={"/login"}>LOING</Link>
            }
            <Button fname='test'>test</Button>
        </>
    )
}

export default Menu;