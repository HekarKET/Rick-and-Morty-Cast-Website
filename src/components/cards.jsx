import React from 'react';

import './style.css'


const Card = () => {
    return (

        <div className="main-card">
            <div className="inner-card">
                <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="" className="image-main" />
            </div>
            <div className="outer-card">
                <h3> Diane Sanchez </h3>
                <div className="all-content">
                    <div className="content">
                        <label >Status :</label>
                        <p className="Status">Unknown</p>
                    </div>
                    <div className="content">
                        <label>Gender :</label>
                        <p className="Status">Genderless</p>
                    </div>
                    <div className="content">
                        <label>Species :</label>
                        <p className="Status">Partially sighted aliens</p>
                    </div>
                </div>
            </div>
            <div className="background-card">
            </div>
        </div>



    );
}

export default Card;