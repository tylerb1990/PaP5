// IMPORTS
import React, { Component } from 'react';
import { Modal } from 'react-responsive-modal';
import Btn from '../buttons/Btn';
import Data from '../data/Data';


// COMPONENT
class myModal extends Component {
    state = {
        countries: [],
        loaded: false,
        open: false
    };

    openModal = () => {
        this.setState({ open: true });
    };

    closeModal = () => {
        this.setState({ open: false });
    };


    componentDidMount() {
        fetch("https://covid-19-data.p.rapidapi.com/help/countries", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "5dccde9c26msh28986ae4f6e7eaap16cbe0jsn96a3b392882c",
                "x-rapidapi-host": "covid-19-data.p.rapidapi.com"
            }})
                .then( response => response.json())
                .then( countries => this.setState({
                    countries,
                    loaded: true
                }))
                .catch( e => {
                    console.error(e); // Log any errors
                });
    }


    render() {
        const { open } = this.state;
        const { countries } = this.state;

        return(
            <div>
                <Btn onClick={this.openModal} text={'Search By Country'}/>
                <Modal open={open} onClose={this.closeModal} style={styles.modalWrap} center >
                    <h2 style={styles.h2}>Search Cases by country</h2>
                    <select styles={styles.select}>
                        { countries }
                    </select>
                </Modal>
            </div>
        );
    }
}
export default myModal;


// CSS MODULES
const styles = {
    modalWrap: {
        background: '#0B132B',
        borderRadius: '50px',
        boxShadow: '5px 5px 12px rgba(0,0,0,.3), -5px -5px 12px rgba(58,80,107,.1)'
    },
    h2: {
        marginBottom: '50px',
        textTransform: 'uppercase',
        fontSize: '80px',
        fontWeight: '200',
        color: '#3A506B',
        textShadow: '5px 5px 11px rgba(0,0,0,.4)',
        textAlign: 'center'
    },
    select: {
        width: '60%',
        margin: '0 auto 25px auto',
        padding: '10px',
        background: '#0B132B',
        fontSize: '30px',
        color: '#6FFFE9',
        borderRadius: '50px',
        boxShadow: '5px 5px 12px rgba(0,0,0,.3), -5px -5px 12px rgba(58,80,107,.1)',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
}