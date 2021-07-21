const SidebarAdm = () => {

    return (
        <div className="sidebar"> 
        <label> Menu </label>
            <ul className=" side-list">
                <li> <a href="/dashboard"> Dashboard </a> </li>
                <li> <a href="/userprofile"> Perfil de usuario </a> </li>
                <li> <a href="/create"> Crear un equipo </a> </li>
                <li> <a href="/search"> Buscar </a> </li>
                <li> <a href="/newadmin"> Añadir nuevo administrador </a> </li>
            </ul>
        </div>
    )
}

export default SidebarAdm;