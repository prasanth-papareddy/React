import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Card from "../ui/Card";
import classes from "./employeeform.module.css";

function EditEmployeeForm(props) {
    const [enteredId, setEnteredId] = useState(props.Employee.Id);
	const [enteredName, setEnteredName] = useState(props.Employee.Name);
	const [selectedGender, setEnteredGender] = useState(props.Employee.Gender);
	const [enteredMobile, setEnteredMobile] = useState(props.Employee.Mobile);
	const [enteredEmail, setEnteredEmail] = useState(props.Employee.Email);
	const [selectedDOB, setEnteredDOB] = useState(props.Employee.DOB);

	const Router = useRouter();

	function NameChangeHandler(event) {
		setEnteredName(event.target.value);
	}
	function DOBChangeHandler(event) {
		setEnteredDOB(event.target.value);
	}
	function GenderChangeHandler(event) {
		setEnteredGender(event.target.value);
	}
	function MobileChangeHandler(event) {
		setEnteredMobile(event.target.value);
	}
	function EmailChangeHandler(event) {
		setEnteredEmail(event.target.value);
	}

	function submitHandler(event) {
		event.preventDefault();

		const data = {
            Id: enteredId,
			Name: enteredName,
			Gender: selectedGender,
			DOB: selectedDOB,
			Mobile: enteredMobile,
			Email: enteredEmail,
		};

        props.onUpdate(data);
		Router.push("/");
	}

	return (
		<Card>
			<form className={classes.form} onSubmit={submitHandler}>
				<div className={classes.control}>
					<label htmlFor="name">Name</label>
					<input
						type="text"
						required
						id="name"
						value={enteredName}
						onChange={NameChangeHandler}
					/>
				</div>
				<div className={classes.control}>
					<label htmlFor="DOB">Date of Birth</label>
					<input
						type="date"
						id="DOB"
						value={selectedDOB}
						onChange={DOBChangeHandler}
					/>
				</div>
				<div className={classes.control}>
					<label htmlFor="gender">Gender</label>
					<select
						id="gender"
						value={selectedGender}
						onChange={GenderChangeHandler}
					>
						<option>Select</option>
						<option value="male">Male</option>
						<option value="female">Female</option>
						<option value="others">Others</option>
					</select>
				</div>
				<div className={classes.control}>
					<label htmlFor="number">Mobile Number</label>
					<input
						type="number"
						required
						id="number"
						value={enteredMobile}
						onChange={MobileChangeHandler}
					/>
				</div>
				<div className={classes.control}>
					<label htmlFor="email">E-mail</label>
					<input
						type="email"
						required
						id="email"
						value={enteredEmail}
						onChange={EmailChangeHandler}
					/>
				</div>
				<div className={classes.actions}>
					<button>Update</button>
				</div>
			</form>
		</Card>
	);
}

export default EditEmployeeForm;
