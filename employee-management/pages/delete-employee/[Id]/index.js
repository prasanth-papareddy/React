import React, { useState, useEffect } from "react";

import { useRouter } from "next/router";

let isInitial = true;

const DeletePage = () => {
	const Router = useRouter();
	const [emp, setEmp] = useState([]);

	const Id = Router.query.Id;

	useEffect(() => {
		fetch(
			"https://react-project-29197-default-rtdb.firebaseio.com/employee.json",
		)
			.then((Response) => Response.json())
			.then((data) => setEmp(Object.values(data)));

		isInitial = false;
	}, []);

	if (!isInitial) {
		const UpdatedList = emp.filter((data) => data.Id !== Id);

		employeeDeleteHandler(UpdatedList);

		function employeeDeleteHandler(data) {
			fetch(
				"https://react-project-29197-default-rtdb.firebaseio.com/employee.json",
				{
					method: "PUT",
					body: JSON.stringify(data),
					headers: {
						"content-Type": "application/json",
					},
				},
			)
				.then((Response) => Response.json());
		}

		Router.push("/");
	}



	return (null);
};

export default DeletePage;
