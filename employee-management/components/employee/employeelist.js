import React, { useState, useEffect } from "react";
import Employee from "./employee";
import classes from "./employeelist.module.css";

const EmployeeList = (props) => {

	return (
		<table className={classes.employees}>
			<thead>
				<tr>
					<th>Name</th>
					<th>Gender</th>
					<th>E-Mail</th>
					<th>Mobile Number</th>
					<th>Date of Birth</th>
					<th>Action</th>
				</tr>
			</thead>
			<tbody>
				{props.data.map((data) => (
					<Employee key={data.Id} employee={data} />
				))}
			</tbody>
		</table>
	);
};

export default EmployeeList;
