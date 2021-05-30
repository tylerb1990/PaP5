// IMPORTS
import React, { useState, useEffect } from 'react';
import Data from '../components/data/Data';
import Btn from '../components/buttons/Btn';
import { NavLink } from 'react-router-dom';
import MyModal from '../components/modal/MyModal';


// COMPONENT
function Home() {
    // State objects
    const [data, setData] = useState();

    // useEffect to fetch api data
    useEffect(() => {
        fetch("https://covid-19-data.p.rapidapi.com/totals", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "5dccde9c26msh28986ae4f6e7eaap16cbe0jsn96a3b392882c",
                "x-rapidapi-host": "covid-19-data.p.rapidapi.com"
            }})
                .then( response => {
                    if (response.ok) {
                        return response.json()
                    }
                    throw response
                })
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
            <h1 style={styles.h1}>Covid19 Worldwide Totals</h1>

            <Data dataType={'Confirmed'} data={data[0].confirmed.toLocaleString('en-US')} />
            <Data dataType={'Recovered'} data={data[0].recovered.toLocaleString('en-US')} />
            <Data dataType={'Critical'} data={data[0].critical.toLocaleString('en-US')} />
            <Data dataType={'Dead'} data={data[0].deaths.toLocaleString('en-US')} />

            <NavLink to='/World'><Btn text={'Last 24hrs Worldwide'}/></NavLink>
            <MyModal></MyModal>
        </div>
    )
}
export default Home;


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
        margin: '0 auto 50px auto',
        textTransform: 'uppercase',
        fontSize: '80px',
        fontWeight: '200',
        color: '#3A506B',
        textShadow: '5px 5px 11px rgba(0,0,0,.4)'
    }
}