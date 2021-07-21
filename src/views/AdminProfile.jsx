import React, { useRef } from 'react';
import { AddAdmin } from '../components/AddAdmin';
import SidebarAdm from '../components/SidebarAdm';
import SignOut from '../components/SignOut';

export const AdminProfile = () => {
	return (
		<>
			<SignOut />
			<AddAdmin />
			{//Falta perfil de admin y footer
			}
			<SidebarAdm />
		</>
	)
}