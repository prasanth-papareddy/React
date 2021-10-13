import React from "react";

import Form from "../employee/employee-form";

function NewEmployee() {
	const onAddEmployeeHandler = async (data) => {

      
        data = {
            Id :   Math.random().toString(36).substr(2,9)+'_'+ data.DOB.toString(),
            Name : data.Name,
            Gender : data.Gender,
            Mobile : data.Mobile,
            Email : data.Email,
            DOB : data.DOB
        }
		
		const Response = await fetch(
			"https://react-project-29197-default-rtdb.firebaseio.com/employee.json", {
                method: 'POST',
                body : JSON.stringify(data),
                headers : {
                    'content-Type': 'application/json'
                }                
            }
		);

        const print = Response.json();
    
	};

	return <Form onAddEmployee={onAddEmployeeHandler} />;
}

export default NewEmployee;
