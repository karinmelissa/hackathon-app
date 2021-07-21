const Sidebar = () => {

    return (
        <div className="sidebar"> 
        <label> Menu </label>
            <ul className=" side-list">
                <li> <a href="/dashboard"> Dashboard </a> </li>
                <li> <a href="/userprofile"> Perfil de usuario </a> </li>
                <li> <a href="/search"> Buscar </a> </li>
            </ul>
        </div>
    )
}

export default Sidebar;