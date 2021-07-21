// import React, { useRef } from 'react';
import { AddAdmin } from '../components/AddAdmin';
import { AdminList } from '../components/AdminList';
import SidebarAdm from '../components/SidebarAdm';
import SignOut from '../components/SignOut';

export const AdminProfile = () => {
	return (
		<>
			<SignOut />
			<div className='mainContainer'>
				<SidebarAdm />
				<div className='profileContainer'>
					<AddAdmin />
					<AdminList/>
				</div>
			</div>
			
			{//Falta perfil de admin y footer
			}
		</>
	)
}