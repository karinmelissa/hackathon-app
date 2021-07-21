import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';

export const ProtectedRoute = ({
	component: Component,
	...rest
}) => {
	const isAuth = localStorage.getItem('isAuth');
	console.log(isAuth)
	return (
		<Route
		{...rest}
		render={(props)=>{
			if (isAuth){
				return <Component/>;
			}else{
				return (
					<Redirect to={{pathname:"/",state:{from : props.location}}}/>
				)
			}
		}}
		/>
	)
}