// IMPORTS
import React, { useState } from 'react';
import Data from '../components/data/Data';
import Btn from '../components/buttons/Btn';
import { NavLink } from 'react-router-dom';


// COMPONENT
function World() {
    // STATE
    const [state, setState] = useState({ });


    // FETCH DATA FROM COVID-19 DATA
    fetch("https://covid-19-data.p.rapidapi.com/totals?date=2020-07-21", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "5dccde9c26msh28986ae4f6e7eaap16cbe0jsn96a3b392882c",
            "x-rapidapi-host": "covid-19-data.p.rapidapi.com"
	    }
    })
    .then(response => response.json()) // Recieve datat and parse to JSON data
    .then(responseAsJSON => {
        console.log(responseAsJSON);
    })
    .catch(e => {
        console.error(e);
    });
    

    // RETURN COMPONENT
    return(
        <div style={styles.main}>
            <h1 style={styles.h1}>COVID-19 Worldwide Cases in the Last 24hrs</h1>
            <NavLink to='/Home'><Btn text={'Total Cases Worldwide'}/></NavLink>
            <Btn text={'Search By Country'}/>
        </div>
    )
}
export default World;


// CSS MODULES
const styles = {
    main: {
        width: '70%',
        margin: '100px auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    h1: {
        marginBottom: '20px',
        textTransform: 'uppercase',
        fontSize: '80px',
        fontWeight: '200',
        color: '#3A506B',
        textShadow: '5px 5px 11px rgba(0,0,0,.4)',
        textAlign: 'center'
    }
}