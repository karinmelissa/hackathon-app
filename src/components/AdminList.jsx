import React, { useEffect, useState } from 'react';
import { db } from '../firebaseConfig';

export const AdminList = () => {
	const [adminsList, setAdminsList] = useState([]);

	const getAdmins = async () => {
		db.collection('admins')
			.onSnapshot((querySnapShot) => {
				const docs = [];
				querySnapShot.forEach((doc) => {
					docs.push({ ...doc.data(), id: doc.id })
				})
				setAdminsList(docs);
			})
	};
	useEffect(() => {
		getAdmins();
	}, []);

	return (
		<div>
			<h2>Lista de administradores</h2>
			<table className="table table-bordered">
				<thead>
					<tr>
						<th scope="col">Nombre</th>
						<th scope="col">Correo</th>
					</tr>
				</thead>
				<tbody>
					{adminsList.map(elem => (
						<tr>
							<td></td>
							<td>{elem.Email}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}