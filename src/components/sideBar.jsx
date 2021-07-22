import { useParams } from "react-router-dom";

const Sidebar = () => {
    let { usermail } = useParams();
    console.log(`hola ${usermail}`);
    return (
        <div className="sidebar"> 
        <label> Menu </label>
            <ul className=" side-list">
                <li> <a href="/dashboard"> Dashboard </a> </li>
                <li> <a href={`/userprofile/${usermail}`}> Perfil de usuario </a> </li>
                <li> <a href="/search"> Buscar </a> </li>
            </ul>
        </div>
    )
}

export default Sidebar;