import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import EditEmployeeForm from "../../../components/employee/edit-employee";

const EditPage = () => {
	const Router = useRouter();
	const [emp, setEmp] = useState([]);

	const Id = Router.query.Id;

	useEffect(() => {

		fetch(
			"https://react-project-29197-default-rtdb.firebaseio.com/employee.json",
		)
			.then((Response) => Response.json())
			.then((data) => setEmp(Object.values(data)));
	}, []);

	function employeeUpdateHandler(data) {
      otherEmp.push(data);
		fetch(
			"https://react-project-29197-default-rtdb.firebaseio.com/employee.json",
			{
				method: "PUT",
				body: JSON.stringify(otherEmp),
				headers: {
					"content-Type": "application/json",
				},
			},
		)
			.then((Response) => Response.json());
	}


	const reqEmp = emp.find((data) => data.Id === Id);

    const otherEmp = emp.filter(data => data.Id !== Id);

	return (
		<div>
			{reqEmp && (
				<EditEmployeeForm Employee={reqEmp} onUpdate={employeeUpdateHandler} />
			)}
		</div>
	);
};

export default EditPage;
