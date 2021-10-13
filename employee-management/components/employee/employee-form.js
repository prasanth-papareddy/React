import { useRef } from 'react';
import {useRouter} from 'next/router';

import Card from '../ui/Card';
import classes from './employeeform.module.css';

function NewEmployeeForm(props) {
  const nameInputRef = useRef();
  const genderInputRef  = useRef();
  const mobileInputRef = useRef();
  const emailInputRef = useRef();
  const dobInputRef = useRef();

  const Router = useRouter();

  function submitHandler(event) {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const selectedGender = genderInputRef.current.value;
    const enteredMobile = mobileInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const selectedDOB = dobInputRef.current.value;

    const data = {
      Name: enteredName,
      Gender: selectedGender,
      DOB : selectedDOB,
      Mobile: enteredMobile,
      Email: enteredEmail,

    };

    props.onAddEmployee(data);

   Router.push('/');
  } 

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='name'>Name</label>
          <input type='text' required id='name' ref={nameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='DOB'>Date of Birth</label>
          <input type='date'  id='DOB' ref={dobInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='gender'>Gender</label>
          <select id='gender' ref={genderInputRef}>
             <option>Select</option>
             <option value='male'>Male</option>
             <option value='female'>Female</option>
             <option value='others'>Others</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor='number'>Mobile Number</label>
          <input type='number' required id='number' ref={mobileInputRef} />
        </div>  
        <div className={classes.control}>
          <label htmlFor='email'>E-mail</label>
          <input type='email' required id='email' ref={emailInputRef} />
        </div>             
        <div className={classes.actions}>
          <button>Add</button>
        </div>
      </form>
    </Card>
  );
}

export default NewEmployeeForm;
