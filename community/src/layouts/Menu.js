import {Link} from "react-router-dom";

const Menu = () =>{
    return (
        <>
            <Link to={"/home"}>HOME</Link>
            <Link to={"/login"}>LOING</Link>
        </>
    )
}

export default Menu;