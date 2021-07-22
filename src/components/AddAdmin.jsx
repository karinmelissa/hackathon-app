/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Form, Button, FormLabel, FormText, FormControl } from 'react-bootstrap';
import { db } from '../firebaseConfig';

export const AddAdmin = () => {
	const [adminEmail, setAdminEmail] = useState("");
	const [adminName, setAdminName] = useState("");

	const onSubmitHandle = e=>{
		e.preventDefault();
		return db
		.collection('admins')
		.add({
			Email : adminEmail,
			Nombre: adminName
		})
		.then(res => console.log('added'))
		.catch(err=>console.log('Error',err))
	}

	return (

		<>
			<h2 className="profile"> Agregar nuevo administrador</h2>
			<div className="admin-wrapper">
				<Form>
					<div className="form-wrapper">
						<FormControl onChange={(e) => setAdminEmail(e.target.value)}
						type="email"
						placeholder="Ingresa un correo aquí"/>
					</div>
					<div className="form-wrapper">
						<FormControl onChange={(e) => setAdminName(e.target.value)}
						type="text"
						placeholder="Ingresa nombre de usuario"/>
					</div>
					<div className="form-wrapper">
						<Button onClick={(e) => onSubmitHandle(e)}>Agregar</Button>
					</div>
				</Form>
			</div>
		</>
	)
}