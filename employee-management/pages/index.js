import { useState, useEffect } from "react";
import axios from 'axios';
import EmployeeList from "../components/employee/employeelist";

let isInitial = true;

export default function Home() {

	const [Employees, SetEmployees] = useState([]);

	useEffect(() => {
		getData();
		isInitial= false;
	}, []);

	const getData = async () => {
		try {
			const Response = await axios.get(
				`https://react-project-29197-default-rtdb.firebaseio.com/employee.json`,
			);

			SetEmployees(Object.values(Response.data));
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<div>
			{!isInitial && <EmployeeList data={Employees} />}
		</div>
	);
}
