import React from 'react';
import Form from './form';
import Card from './cards'
import './style.css'

const Main = () => {
    return (
        <div className="main">
            <Form />
            <div className="body-card">
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>

            </div>

        </div >
    );
}

export default Main;