import React from 'react';

import './style.css'


const Card = ({ id, img, name, gender, status, species }) => {

    return (

        <div className="main-card">
            <div className="inner-card">
                <img src={img} alt="" className="image-main" />
            </div>
            <div className="outer-card">
                <h3> {name} </h3>
                <div className="all-content">
                    <div className="content">
                        <label >Status :</label>
                        <p className="Status">{status}</p>
                    </div>
                    <div className="content">
                        <label>Gender :</label>
                        <p className="Status">{gender}</p>
                    </div>
                    <div className="content">
                        <label>Species :</label>
                        <p className="Status">{species}</p>
                    </div>
                </div>
            </div>
            <div className="background-card">
            </div>
        </div>



    );
}

export default Card;