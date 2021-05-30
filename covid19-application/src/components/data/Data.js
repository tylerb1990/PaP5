// IMPORTS
import React from 'react';


// COMPONENT
const Data = props => {
    return (
        <div style={styles.wrapper}>
            <p style={styles.p}>{props.dataType}</p>
            <div style={styles.innerWrap}>
                <p style={styles.greenP}>{props.data}</p>
            </div>
        </div>
    )
}
export default Data;


// CSS MODULES
const styles = {
    wrapper: {
        width: '60%',
        margin: '0 auto 25px auto',
        padding: '10px',
        background: '#0B132B',
        borderRadius: '50px',
        boxShadow: '5px 5px 12px rgba(0,0,0,.3), -5px -5px 12px rgba(58,80,107,.1)',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    p: {
        paddingLeft: '20px',
        fontSize: '30px',
        color: '#3A506B'
    },
    innerWrap: {
        width: '20%',
        padding: '7px 30px',
        background: '#1C2541',
        borderRadius: '50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    greenP: {
        fontSize: '20px',
        color: '#6FFFE9'
    }
}
