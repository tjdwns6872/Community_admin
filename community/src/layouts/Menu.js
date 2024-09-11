import {Link} from "react-router-dom";
import Button from '../features/authentication/components/form/Button';

const Menu = () =>{
    return (
        <>
            <Link to={"/home"}>HOME</Link>
            {
                sessionStorage.getItem('userData') !== null
            }
        </>
    )
}

export default Menu;