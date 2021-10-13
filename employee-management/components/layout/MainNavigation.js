import  Link  from 'next/link';

import classes from './MainNavigation.module.css';


function MainNavigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Employee Management</div>
      <nav>
        <ul>
          <li>
            <Link href='/'>Employees</Link>
          </li>
          <li>
            <Link href='/new-employee'>Add New Employee</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
