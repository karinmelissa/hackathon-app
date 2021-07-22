import SignOut from '../components/SignOut';
import Sidebar from '../components/Sidebar';
import Dashboard from '../components/Dashboard';


export const HomeDashboard  = () => {
	return (
		<>
			<SignOut />
			<div className='mainContainer'>
                <Sidebar /> 
				<div className='profileContainer'>
					<h2 className='profile'>Dashboard</h2>	
					<p className="dashboardText">En Everis buscamos colaborar para reinventar los medios digitales y plataformas tecnológicas, ser un aporte y un ejemplo de innovacion, siempre pensando en el cliente final, creando nuevos procesos que evolucionen la relación con las personas y los objetos.</p>
					<Dashboard /> 
				</div>
			</div>
		</>
	)
}