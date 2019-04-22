import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={burgerLogo} alt="MyBurger" />
        {/* <img src="../../assets/images/burger-logo.png" /> */}
    </div>
);

export default logo;