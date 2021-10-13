import React from "react";
import {useRouter } from 'next/router';

import classes from './employee.module.css';

const Employee = (props) => {

	const Router = useRouter();

	const editHandler = () => {
           Router.push('/edit-employee/'+ props.employee.Id);
	}

	const deleteHandler = () => {
		Router.push('/delete-employee/'+ props.employee.Id);
 }

	return (
		<tr>
			<td>{props.employee.Name}</td>
			<td>{props.employee.Gender}</td>
			<td>{props.employee.Email}</td>
			<td>{props.employee.Mobile}</td>
			<td>{props.employee.DOB}</td>
			<td><button className={classes.button} onClick={editHandler}>edit</button><br/><br/>
			<button className={classes.button} onClick={deleteHandler}>delete</button></td>
		</tr>
	);
};

export default Employee;
