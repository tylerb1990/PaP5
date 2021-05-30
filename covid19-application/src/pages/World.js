// IMPORTS
import React, { useState, useEffect } from 'react';
import Data from '../components/data/Data';
import Btn from '../components/buttons/Btn';
import { NavLink } from 'react-router-dom';
import myModal from '../components/modal/MyModal';


// COMPONENT
function World() {
    // STATE
    const [data, setData] = useState({ });

    // useEffect to fetch api data
    useEffect(() => {
        fetch("https://covid-19-data.p.rapidapi.com/totals?date=2020-07-21", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "5dccde9c26msh28986ae4f6e7eaap16cbe0jsn96a3b392882c",
                "x-rapidapi-host": "covid-19-data.p.rapidapi.com"
            }})
                .then( response => response.json())
                .then( data => {
                    setData(data) // Send data to state
                    console.log(data)
                })
                .catch( e => {
                    console.error(e); // Log any errors
                });
    }, []);


    // RETURN COMPONENT
    return(
        <div style={styles.main}>
            <h1 style={styles.h1}>COVID-19 Worldwide Cases in the Last 24hrs</h1>

            <Data dataType={'Confirmed in last 24hrs'} data={data[0].confirmed.toLocaleString('en-US')} />
            <Data dataType={'Critical in last 24hrs'} data={data[0].critical.toLocaleString('en-US')} />
            <Data dataType={'Deaths in the last 24hrs'} data={data[0].deaths.toLocaleString('en-US')} />

            <NavLink to='/Home'><Btn text={'Total Cases Worldwide'}/></NavLink>
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
        marginBottom: '50px',
        textTransform: 'uppercase',
        fontSize: '80px',
        fontWeight: '200',
        color: '#3A506B',
        textShadow: '5px 5px 11px rgba(0,0,0,.4)',
        textAlign: 'center'
    }
}