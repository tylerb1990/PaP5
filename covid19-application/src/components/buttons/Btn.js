// IMPORTS
import React from 'react';


// COMPONENT
const Btn = props => {
    return (
        <button style={styles.btn}>{props.text}</button>
    )
}
export default Btn;


// CSS MODULES
const styles = {
    btn: {
        marginBottom: '20px',
        padding: '15px 30px',
        background: '#0B132B',
        borderRadius: '50px',
        boxShadow: '12px 12px 16px rgba(0,0,0,.3), -8px -8px 12px rgba(28, 37, 65,.2)',
        fontWeigth: '200',
        fontSize: '20px',
        color: '#3A506B'
    }
}